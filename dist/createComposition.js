    async function CreateMainConcept(element){
        let startTime = new Date();
        var elementName = element.getAttribute('name');
        var newConcept = window.tsccs.MakeTheInstanceConcept(elementName, "", true, 999); 
        let endTime = new Date();
        let timeElapsed = endTime - startTime;
        console.log("the elapsed time is " +   timeElapsed  + " ms ");
        return newConcept;
    }


