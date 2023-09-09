let selectOptionRole = [];
let selectOptionLevel = []
let selectOptionLanguages = [];
let selectOptionTools = [];

export default function createSelectOption(data) {
    let groupRole = document.querySelector(".group-role");
    let groupLevel = document.querySelector(".group-level");
    let groupLanguages = document.querySelector(".group-language");
    let groupTools = document.querySelector(".group-tools");

    for(let i=0; i<data.length; i++) {
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

    for(let i=0; i<selectOptionRole.length; i++){
        let optionRole = document.createElement("option");
        optionRole.setAttribute("value", selectOptionRole[i]);
        optionRole.textContent = selectOptionRole[i];
        groupRole.appendChild(optionRole);
    }

    for(let i=0; i<selectOptionLevel.length; i++){
        let optionLevel = document.createElement("option");
        optionLevel.setAttribute("value", selectOptionLevel[i]);
        optionLevel.textContent = selectOptionLevel[i];
        groupLevel.appendChild(optionLevel);
    }

    for(let i=0; i<selectOptionTools.length; i++){
        let optionTool = document.createElement("option");
        optionTool.setAttribute("value", selectOptionTools[i]);
        optionTool.textContent = selectOptionTools[i];
        groupTools.appendChild(optionTool);
    }

    for(let i=0; i<selectOptionLanguages.length; i++){
        let optionLanguage = document.createElement("option");
        optionLanguage.setAttribute("value", selectOptionLanguages[i]);
        optionLanguage.textContent = selectOptionLanguages[i];
        groupLanguages.appendChild(optionLanguage);
    }
}
