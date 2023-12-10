async function GetCompositionList(name){
   var list =  await window.tsccs.GetCompositionList("personalinfo");
   const tableElement = document.getElementById('listtable');
   for(var i=0 ; i<list.length; i++){
    let json = JSON.parse(list[i]);

    const rowElement = document.createElement('tr');
    const createColumnName = document.createElement('td');
    let name = json.personalinfo.name;
    createColumnName.innerHTML = name;
    rowElement.appendChild(createColumnName);

    const createColumnAge = document.createElement('td');
    let age = json.personalinfo.age;
    createColumnAge.innerHTML = age;
    rowElement.appendChild(createColumnAge);
    const createColumnCountry = document.createElement('td');
    let country = json.personalinfo.country;
    createColumnCountry.innerHTML = country;
    rowElement.appendChild(createColumnCountry);
    tableElement.appendChild(rowElement);
 
   }

}

