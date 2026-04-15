import { BinaryCharacterTree } from "./BinaryCharacterTree";
import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
import { IdentifierFlags } from "./IdentifierFlags";
import { dispatchIdEvent } from "../app";

/**
 * BinaryTree — In-memory concept store keyed by numeric concept ID.
 *
 * Backed by a Map<number, Concept> for O(1) lookups, inserts, and deletes.
 * Also maintains the BinaryCharacterTree (character-indexed) on every insert
 * so character-based search continues to work.
 *
 * All public method signatures are preserved for backward compatibility.
 * getNodeFromTree returns a { key, value } wrapper so callers that access
 * node.value continue to work without changes.
 */
export class BinaryTree {
    /** Sentinel root — non-null when the map has data, null when empty. */
    static root: Node | null = null;

    /** Primary data store: concept ID → Concept object */
    private static conceptMap: Map<number, Concept> = new Map();

    /**
     * Low-level add — stores the node's key/value in the Map.
     * Kept for API compatibility (called internally by addConceptToTree).
     * @param node - Node with numeric key and Concept value
     */
    static addNodeToTree(node: Node) {
        this.conceptMap.set(node.key, node.value);
        if (this.root === null) {
            this.root = node;
        }
    }

    /**
     * Polls until IdentifierFlags.isDataLoaded is true (max 25 seconds).
     * Used by callers that need to wait for the initial IndexedDB load to finish.
     */
    static async waitForDataToLoad() {
        return new Promise((resolve, reject) => {
            this.checkFlag(resolve);
            setTimeout(() => {
                reject("not");
            }, 25000);
        });
    }

    /** Recursive polling helper for waitForDataToLoad */
    static checkFlag(resolve: any) {
        if (IdentifierFlags.isDataLoaded) {
            return resolve("done");
        } else {
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
    }

    /**
     * Adds a concept to both the ID map and the character tree.
     *
     * The character tree (BinaryCharacterTree) is still an AVL tree because
     * it supports character-based search which is out of scope for this refactor.
     *
     * @param concept - The Concept to store
     */
    static addConceptToTree(concept: Concept) {
        // Character tree still needs a Node object
        let characterNode: Node = new Node(concept.characterValue, concept, null, null);
        BinaryCharacterTree.addNodeToTree(characterNode);

        // Primary store: O(1) Map insert
        this.conceptMap.set(concept.id, concept);

        // Keep root non-null so legacy null-checks pass
        if (this.root === null) {
            this.root = new Node(concept.id, concept, null, null);
        }
    }

    /**
     * Retrieves a concept by ID from the Map.
     *
     * Returns a { key, value } wrapper matching the Node shape that callers expect.
     * Callers access the returned object's .value property to get the Concept.
     *
     * @param id - The concept ID to look up
     * @returns Node-like wrapper with .value = Concept, or null if not found
     */
    static async getNodeFromTree(id: number) {
        const concept = this.conceptMap.get(id);
        if (concept) {
            return { key: id, value: concept } as Node;
        }
        return null;
    }

    /**
     * Removes a concept by ID. Dispatches an event before deletion
     * so listeners (e.g. UI components) can react to the removal.
     *
     * @param id - The concept ID to remove
     */
    static async removeNodeFromTree(id: number) {
        if (this.conceptMap.has(id)) {
            dispatchIdEvent(id);
            this.conceptMap.delete(id);

            if (this.conceptMap.size === 0) {
                this.root = null;
            }
        }
    }

    /**
     * Bulk concept retrieval by ID list.
     *
     * For each ID found in the Map, pushes the Concept into conceptArray
     * and removes the ID from the ids array. IDs remaining in the array
     * after this call are "not found" and will be fetched from the backend.
     *
     * Performance: O(k) where k = ids.length (was O(N) full tree traversal).
     *
     * @param ids - Array of concept IDs to look up (mutated: found IDs are spliced out)
     * @param conceptArray - Output array (mutated: found Concepts are pushed)
     * @param remainingIds - Not used directly but kept for API compatibility
     */
    static async getConceptListFromIds(ids: number[], conceptArray: Concept[], remainingIds: any) {
        // Iterate backward so splice doesn't shift indexes
        for (let i = ids.length - 1; i >= 0; i--) {
            const concept = this.conceptMap.get(ids[i]);
            if (concept) {
                conceptArray.push(concept);
                ids.splice(i, 1);
            }
        }
    }

    /**
     * Returns the total number of concepts stored.
     * @returns Number of concepts in the Map
     */
    static countNumberOfNodes() {
        return this.conceptMap.size;
    }
}
