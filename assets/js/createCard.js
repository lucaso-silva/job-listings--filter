const cardsContainer = document.querySelector(".cards-container");

export default function createCard(item){
    let companyLogo = item.logo;
    let companyName = item.company;
    let newRole = item.new;
    let featuredRole = item.featured;
    let position = item.position;
    let postedAt = item.postedAt;
    let typeContract = item.contract;
    let jobLocation = item.location;
    let role = item.role;
    let languages = item.languages;
    let level = item.level;
    let tools = item.tools;

    // console.log(`${companyName} - ${position} / posted ${postedAt}. 
    // Location: ${jobLocation} - ${typeContract}. 
    // Languages needed: ${languages}. Assets: ${tools}`);

    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let companyLogoImg = document.createElement("img");
    companyLogoImg.setAttribute("src", companyLogo);
    companyLogoImg.setAttribute("alt", "Company logo");

    let divGeneralInfo = document.createElement("div");
    divGeneralInfo.classList.add("general-info");

    newCard.appendChild(companyLogoImg);
    newCard.appendChild(divGeneralInfo);

    let divCompanyRole = document.createElement("div");
    divCompanyRole.classList.add("company-role");

    divGeneralInfo.appendChild(divCompanyRole)

    let headingCompanyName = document.createElement("h1");
    headingCompanyName.textContent = companyName;
    
    let infoNew = document.createElement("span");
    infoNew.classList.add("new");
    if(newRole == true) {
        infoNew.textContent = "new";
    } else {
        infoNew.style.display = "none";
    }

    let infoFeatured = document.createElement("span");
    infoFeatured.classList.add("featured");
    if(featuredRole == true) {
        infoFeatured.textContent = "featured";
        newCard.classList.add("role-featured");  
    } else {
        infoFeatured.style.display = "none";
    }

    let headingPosition = document.createElement("h2");
    headingPosition.textContent = position;

    divCompanyRole.appendChild(headingCompanyName);
    divCompanyRole.appendChild(infoNew);
    divCompanyRole.appendChild(infoFeatured);
    divCompanyRole.appendChild(headingPosition);

    let divInfo = document.createElement("div");
    divInfo.classList.add("info");

    divGeneralInfo.appendChild(divInfo);

    let infoDayPosted = document.createElement("p");
    infoDayPosted.textContent = postedAt;

    let infoTypeContract = document.createElement("p");
    infoTypeContract.classList.add("contract");
    infoTypeContract.textContent = typeContract;

    let infoLocation = document.createElement("p");
    infoLocation.classList.add("location");
    infoLocation.innerText = jobLocation;

    divInfo.appendChild(infoDayPosted);
    divInfo.appendChild(infoTypeContract);
    divInfo.appendChild(infoLocation);

    let divMoreInfo = document.createElement("div");
    divMoreInfo.classList.add("more-info");

    newCard.appendChild(divMoreInfo);

    let infoRole = document.createElement("p");
    infoRole.innerText = role;  
    divMoreInfo.appendChild(infoRole);

    if(languages.length > 0) {
        for(let i=0; i<languages.length; i++) {
            let infoLanguage = document.createElement("p");
            infoLanguage.innerText = languages[i];
            divMoreInfo.appendChild(infoLanguage);
        }
    }

    let infoLevel = document.createElement("p");
    infoLevel.innerText = level;
    
    divMoreInfo.appendChild(infoLevel);

    if(tools.length > 0) {
        for(let i=0; i<tools.length; i++) {
            let infoTools = document.createElement("p");
            infoTools.innerText = tools[i];
            divMoreInfo.appendChild(infoTools);
        }
    }
    cardsContainer.appendChild(newCard);
}