import { ConceptsData } from "../data_structures/conceptsData";
import { Concept } from "../data_structures/Concept";

export function GetConceptsFromApi(id_){
    if (the_concepts[id_]) {
        return the_concepts[id_];
    }
    var file_address = "https://localhost:7053/api/getConcept"
    //var file_address = "../php_scripts/get_data_concept.php";
    var xml_http_request = new XMLHttpRequest();
    xml_http_request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = this.responseText;
        // response = response.replace(/\]\{/g, ",");
        // response = response.replace(/\}\{/g, ",");
        // response = response.replace(/\}\}/g, "}]");
        // response = response.replace(/,"[0-9]+":/g, ",");
        // response = response.replace(/.$/, "]");
        var response_object = JSON.parse(response);


            let value = response_object.characterValue;
            let id = response_object.id;
            let category_id = response_object.category;
            let type_id = response_object.typeId;
            let referent_id = response_object.referent;
            let user_id = response_object.userId;
            let category_user_id = response_object.categoryUserId;
            let type_user_id = response_object.typeUserId;
            let referent_user_id = response_object.referentUserId;
            if (isNaN(referent_id)) {
              referent_id = null;
            }
            

            var concept = new Concept(id,);

          
        
        data_loaded();
        try {
          reload_flag(2);
        } catch (e) {
          //ignores
        }
      };
    };
    xml_http_request.open("POST", file_address, false);
    xml_http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xml_http_request.send("id=" + id_ + "&user_id=" + user_id_);
    if (the_concepts[id_]) {

        return the_concepts[id_];
    }
    return -1;
}


