import { Concept, Connection, GetAllConnectionsOfCompositionBulk, GetCompositionWithIdAndDateFromMemory, GetConceptByCharacterAndType, GetConnectionOfTheConcept, GetTheConcept, init } from "../app";


let customSelf = self as any

self.addEventListener('install', (event) => {
    customSelf.skipWaiting()
})

self.addEventListener('activate', (event: any) => {
    event.waitUntil(customSelf.clients.clain());
})

self.addEventListener('message', async (event: any) => {
    const { type, payload } = event.data;
    const data = payload
    if (!type) return

    if (type == 'init') {
        console.log('initialized data sww')
        await init('https://theta.boomconcole.com', 'https://www.devai.freeschema.com/api', "", 'https://theta.boomconcole.com', false, '', false, true);
    } else if (event.data.type === 'getLink') {
        // handleAddProduct(event.data.payload);
    } else if (event.data.type === 'getCompositionWithId') {
        // handleGetProducts(event.source);
        event.source.postMessage({ success: true, products: {id: 123, name: 'abc'} });
    } else if (type === 'getLink') {
        console.log('getLink here', event)
        let output: any[] = [];
        let  concept:Concept = await GetTheConcept(data.id);
        let linkString: string = concept.type?.characterValue + "_s" + "_" + payload.linker;
        let relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
        let relatedConcept = relatedConceptString as Concept;
        if(relatedConcept.id > 0){
        let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId, payload.inpage, payload.page);
        let connections = connectionsString as Connection[];
        let prefetch :number[] = [];
        for(let i=0; i<connections.length; i++){
            prefetch.push(connections[i].toTheConceptId);
        }
        await GetAllConnectionsOfCompositionBulk(prefetch);
        for(let i=0; i<connections.length; i++){
            let toConceptId = connections[i].toTheConceptId;
            let toConcept = await GetTheConcept(toConceptId);
            let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
            output.push(newComposition);
        }
        }
        event.source.postMessage({ success: true, data: output });
        // saveData(data);
    } else if (type === 'get') {
        // getData(data.id);
    }
})