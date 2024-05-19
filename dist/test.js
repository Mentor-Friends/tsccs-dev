

function SignIns(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement('form');
    form.setAttribute('method','GET');
    form.setAttribute('action', oauth2Endpoint);

    let params = {
        "client_id": "963039502925-j3k4u6n3l6ngsdl3rmc5q0g523jdlmap.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5500/profile.html",
        "response_type":"token",
        "scope": "https://www.googleapis.com/auth/userinfo.email",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    }

    for(var p in params){
        let input = document.createElement('input');
        input.setAttribute('type','hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.append(input);
    }
    document.body.appendChild(form);
    form.submit();
}



function StoreId(){
    var concept = {'id':20,'a': 'b'};
    window.tsccs.storeToDatabase("concepts",concept);
}

function GetId(){
    window.tsccs.getFromDatabase("concepts",20);
}

function GetIdFromType(){
    window.tsccs.getFromDatabaseWithType("concepts","categoryId",4);
}

async function  syncOnlineData(){
    console.log(window.tsccs.SyncData.conceptsSyncArray);
    console.log(window.tsccs.SyncData.connectionSyncArray);
    await window.tsccs.SyncData.SyncDataOnline();
}

async function  syncDataLocal(){
    console.log(window.tsccs.SyncData.conceptsSyncArray);
    console.log(window.tsccs.SyncData.connectionSyncArray);
    await window.tsccs.SyncData.syncDataLocalDb();
}

// var json =  {
//     "testfolders": {
//         "work": 123,
//         "capble":" 12421"
// }};

var json ={"boomgpt": {
    "note": "",
    "boom_folder": {
        "category_id": "100386862",
        "category_name": "Important Contacts"
    },
    "created_at": "1702266154331",
    "title": "Hem Sir",
    "crm_data": {
        "experience": "",
        "link": "",
        "addresses": "",
        "notes": [
            ""
        ],
        "tag": "prospect",
        "education": "",
        "about": "",
        "avatar": "",
        "phone": [
            {
                "number": "+977 985-1022244"
            }
        ],
        "email": "",
        "name": "Hem Sir"
    },
    "comment": [
        ""
    ],
    "data_type": "extension_whatsapp"
}
};


    // window.tsccs.GetCompositionList("recentFolder",10267).then((concept)=>{
    //     console.log(concept);
    // })
    // window.tsccs.ConceptsData.GetConceptByCharacter("boomg").then((concept)=>{
    //     console.log(concept);
    // });




        // window.tsccs.CreateComposition(json,null,null,null,10345).then(concept=>{
        //     syncOnlineData().then(()=>{
        //         window.tsccs.GetCompositionWithId(concept.id).then(composition=>{
        //             console.log(composition);
        //         });
        //     });
        // });
        // setTimeout(() => {
        //     window.tsccs.GetCompositionWithId(100378785).then(output=>{
        //         console.log("wahts");
        //         console.log(output);
        //     });
        // }, 8000);



            // window.tsccs.ConceptsData.GetConceptByCharacterAndTypeLocal("Default",5).then(output=>{
            //     console.log(output);
            // });



    
    // window.tsccs.MakeTheInstanceConceptLocally("asdgasdgsag","extension_whatsapp_chat",false).then(concept=>{
    //     console.log("created locally");
    //     console.log(concept);
    // })

    // window.tsccs.GetCompositionLocal(94).then(output=>{
    //     console.log("worlding");
    //     console.log(output);
    // });

    // window.tsccs.MakeTheInstanceConcept("data_typasdfe","extension_whatasdfsadfsadfsapp_chat",false).then(concept=>{
    //     console.log(concept);
    // })

    // window.tsccs.MakeTheInstanceConcept("data_typsadfsadfasdfasdfe","asdfasgdscvcxv",false).then(concept=>{
    //     console.log(concept);
    // syncOnlineData();

    // })


    // setTimeout(() => {
    //     window.tsccs.CreateComposition(json).then(concept=>{

    //         console.log("workking");
    //         syncDataLocal().then(()=>{
    //             window.tsccs.GetCompositionWithId(concept.id).then(composition=>{
    //                 console.log(composition);
    //             })
    //         });
        
    //     });
    // }, 10000);




    // for(let i=0; i< 100; i++ ){
    //     window.tsccs.ConceptsData.GetConceptByCharacter("boomgpt");

    // }

// window.tsccs.GetLink(100128392, "my_console_s").then((output)=>{
//     console.log("first");
//     console.log(output);
// });

// window.tsccs.GetLink(100128392, "console_folder_s").then((output)=>{
//     console.log("Second");
//     console.log(output);
// });
// window.tsccs.GetLink(100128392, "my_console_s").then((output)=>{
//     console.log(output);
// });





window.syncOnlineData = syncOnlineData;
window.syncDataLocal = syncDataLocal;