
export default function createCard(item){
    const cardsContainer = document.querySelector(".cards-container");
    let companyName = item.company;
    let position = item.position;
    let postedAt = item.postedAt;
    let typeContract = item.contract;
    let jobLocation = item.location;
    let languages = item.languages;
    let tools = item.tools;

    console.log(`${companyName} - ${position} / posted ${postedAt}. 
    Location: ${jobLocation} - ${typeContract}. 
    Languages needed: ${languages}. Assets: ${tools}`)

    cardsContainer.innerHTML += companyName
}