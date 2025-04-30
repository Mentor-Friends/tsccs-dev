import { FreeschemaQuery, SchemaQueryListener, StatefulWidget } from "../../app";


export class Selector extends StatefulWidget{

    selector:string;
    mainType:string;

    constructor(selector:string, mainType:string){
        super();
        this.selector = selector;
        this.mainType = mainType;
    }

    before_render(): void {
        this.render();
    }


    after_render(): void {
        let selectorElement = this.getElementById('selector') as HTMLSelectElement;
        let query:FreeschemaQuery = new FreeschemaQuery();
        query.type = this.mainType;
        query.inpage = 10;
        
        let secondQuery:FreeschemaQuery = new FreeschemaQuery();
        secondQuery.typeConnection = this.selector;
        query.freeschemaQueries = [secondQuery];

        SchemaQueryListener(query, "").subscribe((returnedData:any, details:any)=>{
            let mainObject:any = {};
            for(let i=0; i<returnedData.length; i++){
                let  output = returnedData[i];
                let id = output.id;
                let myItem = output[this.mainType];
                console.log("this is the selected data myItem", myItem, returnedData[i],this.mainType, output);
                if(myItem){
                    let selectedData = myItem[this.selector];
                    if(selectedData){
                        let objectValue = Object.values(selectedData)[0];
                        mainObject[id] = objectValue;
                    }
                }

            }
            for (const [key, value] of Object.entries(mainObject)) {
                console.log("this is the value", value);
                const option = document.createElement('option') as HTMLOptionElement;
                option.value = key;        // use key as the option's value
                option.textContent = key; // use value as the visible label
                selectorElement.appendChild(option);
              }
            console.log("this is the output from selector", returnedData);
        });
    }

    getHtml(): string {
        this.html =  "<select id='selector'></div>";
        return this.html;
    }

}