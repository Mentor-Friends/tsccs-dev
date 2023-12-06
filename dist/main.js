

document.body.onload = function(){
    var inputs = document.getElementsByTagName('input');
    var pageInput = document.getElementById('personalinfo');
    var mainConcept;
    CreateMainConcept(pageInput).then(concept=>{
      for(var i=0; i< inputs.length; i++){
      inputs[i].onchange=function(event){
        createConcept(event.target,concept);
      }
    }
    });


    var submit = document.getElementById("personalsubmit");
    submit.onclick=function(event){
      event.preventDefault();
      syncOnlineData();
    }
  }