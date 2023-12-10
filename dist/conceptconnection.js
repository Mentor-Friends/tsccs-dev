async function createConcept(element, mainConcept){
    var newConcept = await window.tsccs.MakeTheInstanceConcept(element.name, element.value, false, 999);
    await window.tsccs.CreateTheConnection(mainConcept.id, mainConcept.userId, newConcept.id, newConcept.userId, mainConcept.id, 999,999 );

}