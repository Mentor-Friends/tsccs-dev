    async function CreateMainConcept(element){
        var elementName = element.getAttribute('name');
        var newConcept = window.tsccs.MakeTheInstanceConcept(elementName, "", true, 999); 
        return newConcept;
    }


