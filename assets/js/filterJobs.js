let newCard = {
  role: "",
  level: ""
};

export default function filterJobs() {
  let filtersSelected = document.querySelectorAll(".option");
  let groupRole = document.querySelector(".role");
  let groupLevel = document.querySelector(".level");
  let groupLanguage = document.querySelectorAll(".language");
  let groupTools = document.querySelectorAll(".tools");

  console.log(filtersSelected);
  console.log("role: " + groupRole.textContent.toLowerCase());
  console.log("level: " + groupLevel.textContent.toLowerCase());
  
  groupLanguage.forEach((lang)=>{
    console.log("languages: " + lang.textContent.toLowerCase());
  });

  groupTools.forEach((tool)=>{
    console.log("tools: " + tool.textContent.toLowerCase());
  });
  // console.log("languages: " + groupLanguage);
  // console.log("tools: " + groupTools);

  newCard.role = groupRole.textContent.toLowerCase();
  newCard.level = groupLevel.textContent.toLowerCase();  

  console.log("newCard: " + newCard.role)
  console.log(typeof newCard)
}
