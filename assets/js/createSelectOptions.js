let selectOptionRole = [];
let selectOptionLevel = []
let selectOptionLanguages = [];
let selectOptionTools = [];

export default function createSelectOption(data) {
    //console.log(data);
    let groupRole = document.querySelector(".group-role");
    let groupLevel = document.querySelector(".group-level");
    let groupLanguages = document.querySelector(".group-language");
    let groupTools = document.querySelector(".group-tools");

    for(let i=0; i<data.length; i++) {
        // console.log(data[i]);
        let role = data[i].role;
        let level = data[i].level;
        let languages = data[i].languages;
        let tools = data[i].tools;

        if(!selectOptionRole.includes(role)) {
            selectOptionRole.push(role);
        }

        if(!selectOptionLevel.includes(level)) {
            selectOptionLevel.push(level);
        }

        if(languages.length > 0) {
            for(let i=0; i<languages.length; i++) {
                if(!selectOptionLanguages.includes(languages[i])) {
                    selectOptionLanguages.push(languages[i]);
                }
            }
        }

        if(tools.length > 0) {
            for(let i=0; i<tools.length; i++) {
                if(!selectOptionTools.includes(tools[i])) {
                    selectOptionTools.push(tools[i]);
                }
            }
        }
        
    }

    console.log(selectOptionRole)
    console.log(selectOptionTools);
    console.log(selectOptionLevel);
    console.log(selectOptionLanguages);
}
