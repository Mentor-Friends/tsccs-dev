import { FilterSearch, FreeschemaQuery, SchemaQueryListener, StatefulWidget } from "../../app";
import { removeAllChildren } from "../../Services/Common/RemoveAllChild";


export class Selector extends StatefulWidget{

    selector:string;
    mainType:string;
    mainDetails:any;
    filterType:string;
    query:any;
    inpage:number = 10;
    parentDomElement:HTMLElement;

    constructor(mainType:string, selector:string, parentElement:HTMLElement , filterType:string = "", inpage:number= 10){
        super();
        this.selector = selector;
        this.mainType = mainType;
        this.filterType = filterType;
        this.inpage = inpage;
        this.parentDomElement = parentElement;
        this.mount(this.parentDomElement);

    }

    before_render(): void {
        this.render();
    }

    addFilter(value:string){
        if(value != ""){
            let filter:FilterSearch = new FilterSearch();
            filter.search = value;
            filter.type = this.filterType;
            filter.logicoperator = 'like';
            filter.operateon = 'selector';
            filter.name = 'selector_filter';
            let filterLogic = '( selector_filter )';
            this.query.filters = [filter];
            this.query.filterLogic  = filterLogic;

        }
        else{
            this.query.filters = [];
            this.query.filterLogic = "";
        }
        console.log("this is the filters", this.query);
    }



    after_render(): void {
        let selectorElement = this.getElementById('selector') as HTMLSelectElement;
        let inputSearch = this.getElementById('search-bar') as HTMLInputElement;
        let that = this;
        inputSearch.onchange = () =>{
            that.addFilter(inputSearch.value);
            that.mainDetails.update();
        }
        let query:FreeschemaQuery = new FreeschemaQuery();
        query.type = this.mainType;
        query.inpage = this.inpage;
        
        let secondQuery:FreeschemaQuery = new FreeschemaQuery();
        secondQuery.typeConnection = this.selector;
        secondQuery.name = "selector";
        query.freeschemaQueries = [secondQuery];
        this.query = query;

        SchemaQueryListener(this.query, "").subscribe((returnedData:any, details:any)=>{
            let mainObject:Record<number, string> = {};
            this.mainDetails = details;
            for(let i=0; i<returnedData.length; i++){
                let  output = returnedData[i];
                let id = output.id;
                let myItem = output[this.mainType];
                console.log("this is the selected data myItem", myItem, returnedData[i],this.mainType, output);
                if(myItem){
                    let selectedData:Record<string, string> = myItem[this.selector];
                    if(selectedData){
                        const objectValue:string = Object.values(selectedData)[0];
                        mainObject[id] = objectValue;
                    }
                }

            }
            removeAllChildren(selectorElement);
            for (const [key, value] of Object.entries(mainObject)) {
                const option = document.createElement('option') as HTMLOptionElement;
                option.value = key;        // use key as the option's value
                option.textContent = value; // use value as the visible label
                selectorElement.appendChild(option);
              }
            console.log("this is the output from selector", returnedData);
        });
    }

    getHtml(): string {
        const style = document.createElement('style');
style.textContent = `
.search-select-wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: Arial, sans-serif;
}

#search-bar {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

#selector {
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
`;
        document.head.prepend(style);
        this.html =  `
        <div class="search-select-wrapper">
        <input type="text" placeholder="Select or type..." id='search-bar'>
        <select id='selector'>
        </div>`;
        return this.html;
    }

}