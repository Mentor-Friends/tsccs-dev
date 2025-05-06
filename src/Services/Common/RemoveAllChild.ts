export function removeAllChildren(parent: HTMLElement): void {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }