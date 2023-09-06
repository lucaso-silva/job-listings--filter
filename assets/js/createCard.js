const cardsContainer = document.querySelector(".cards-container");

export default function createCard(item){
    let companyLogo = item.logo;
    let companyName = item.company;
    let position = item.position;
    let postedAt = item.postedAt;
    let typeContract = item.contract;
    let jobLocation = item.location;
    let languages = item.languages;
    let level = item.level;
    let tools = item.tools;

    console.log(`${companyName} - ${position} / posted ${postedAt}. 
    Location: ${jobLocation} - ${typeContract}. 
    Languages needed: ${languages}. Assets: ${tools}`)

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
    // infoNew.textContent = 

    let infoFeatured = document.createElement("span");
    infoFeatured.classList.add("featured");
    // infoFeatured.textContent = 

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
    infoTypeContract.textContent = typeContract;

    let infoLocation = document.createElement("p");
    infoLocation.innerText = jobLocation;

    divInfo.appendChild(infoDayPosted);
    divInfo.appendChild(infoTypeContract);
    divInfo.appendChild(infoLocation);

    let divMoreInfo = document.createElement("div");
    divMoreInfo.classList.add("more-info");

    newCard.appendChild(divMoreInfo);

    let infoLanguage = document.createElement("p");
    infoLanguage.innerText = languages;

    let infoLevel = document.createElement("p");
    infoLevel.innerText = level;

    let infoTools = document.createElement("p");
    infoTools.innerText = tools;

    divMoreInfo.appendChild(infoLanguage);
    divMoreInfo.appendChild(infoLevel);
    divMoreInfo.appendChild(infoTools);

    cardsContainer.innerHTML += newCard;
}