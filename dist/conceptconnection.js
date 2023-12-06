async function createConcept(element, mainConcept){
    console.log('this is the main concept');
    console.log(mainConcept);
    let startTime = new Date();
  //  var mainConcept = await window.tsccs.MakeTheInstanceConcept()
    var newConcept = await window.tsccs.MakeTheInstanceConcept(element.name, element.value, false, 999);
    await window.tsccs.CreateTheConnection(mainConcept.id, mainConcept.userId, newConcept.id, newConcept.userId, mainConcept.id, 999,999 );
    let endTime = new Date();
    let timeElapsed = endTime - startTime;
    console.log("the elapsed time is " +   timeElapsed  + " ms ");
}







//window.createConcept = createConcept;
//window.createCompositionElement = CreateCompositionElement;