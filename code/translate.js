function getData(file){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, false);
    xhr.send();

    const jsonData = JSON.parse(xhr.responseText);

      return jsonData;
}


 
function translate(language){
    const data = getData("/translate/" + language + ".json");

    document.querySelector(".homeN").innerHTML = data.header.primaryNav.homeN;
    document.querySelector(".aboutN").innerHTML = data.header.primaryNav.aboutN;
    document.querySelector(".projectsN").innerHTML = data.header.primaryNav.projectsN;
    document.querySelector(".knowledgeN").innerHTML = data.header.primaryNav.knowledgeN;
    document.querySelector(".contactN").innerHTML = data.header.primaryNav.contactN;


    document.querySelector(".homeMenu").innerHTML = data.header.SecNav.homeMenu;
    document.querySelector(".aboutMenu").innerHTML = data.header.SecNav.aboutMenu;
    document.querySelector(".projectsMenu").innerHTML = data.header.SecNav.projectsMenu;
    document.querySelector(".knowledgeMenu").innerHTML = data.header.SecNav.knowledgeMenu;
    document.querySelector(".contactMenu").innerHTML = data.header.SecNav.contactMenu;


    document.querySelector(".h1PriPart").innerHTML = data.sectionHome.h1PriPart;
    document.querySelector(".h1SecPart").innerHTML = data.sectionHome.h1SecPart;
    document.querySelector(".office").innerHTML = data.sectionHome.office;


    document.querySelector(".titleAbout").innerHTML = data.sectionAbout.titleAbout;
    document.querySelector(".desc1").innerHTML = data.sectionAbout.desc1;
    document.querySelector(".desc2").innerHTML = data.sectionAbout.desc2;
    document.querySelector(".desc3").innerHTML = data.sectionAbout.desc3;
    document.querySelector(".descButtonAbout").innerHTML = data.sectionAbout.descButtonAbout;


    document.querySelector(".titleProjects").innerHTML = data.sectionProjects.titleProjects;
    document.querySelector(".descProject1").innerHTML = data.sectionProjects.descProject1;
    document.querySelector(".descPoject2").innerHTML = data.sectionProjects.descProject2;
    document.querySelector(".descProject22").innerHTML = data.sectionProjects.descProject22;
    document.querySelector(".descProject3").innerHTML = data.sectionProjects.descProject3;
    document.querySelector(".repositories").innerHTML = data.sectionProjects.repositories;


    document.querySelector(".subtitleNode").innerHTML = data.sectionKnowledge.subtitleNode;
    document.querySelector(".subtitleHTML").innerHTML = data.sectionKnowledge.subtitleHTML;
    document.querySelector(".subtitleCSS").innerHTML = data.sectionKnowledge.subtitleCSS;
    document.querySelector(".subtitleJs").innerHTML = data.sectionKnowledge.subtitleJs;
    document.querySelector(".dbTitle").innerHTML = data.sectionKnowledge.dbTitle;

    
    document.querySelector(".titleExperience").innerHTML = data.sectionExperience.titleExperience;
    document.querySelector(".titleHeaderExp1").innerHTML = data.sectionExperience.titleHeaderExp1;
    document.querySelector(".titleHeaderExp2").innerHTML = data.sectionExperience.titleHeaderExp2;
    document.querySelector(".placeExp1").innerHTML = data.sectionExperience.placeExp1;
    document.querySelector(".placeExp2").innerHTML = data.sectionExperience.placeExp2;
    document.querySelector(".aboutExp1").innerHTML = data.sectionExperience.aboutExp;
    document.querySelector(".aboutExp2").innerHTML = data.sectionExperience.aboutExp;
    document.querySelector(".descExp1").innerHTML = data.sectionExperience.descExp1;
    document.querySelector(".descExp2").innerHTML = data.sectionExperience.descExp2;
    document.querySelector(".skillsExp1").innerHTML = data.sectionExperience.skillExp;
    document.querySelector(".skillsExp2").innerHTML = data.sectionExperience.skillExp;
    document.querySelector(".skill1").innerHTML = data.sectionExperience.skill1;
    document.querySelector(".skill2") .innerHTML = data.sectionExperience.skill2;
    document.querySelector(".skill3").innerHTML = data.sectionExperience.skill3;
    document.querySelector(".periodExp1").innerHTML = data.sectionExperience.periodExp;
    document.querySelector(".periodExp2").innerHTML = data.sectionExperience.periodExp;
    document.querySelector(".nowPeriod").innerHTML = data.sectionExperience.nowPeriod;








    document.querySelector(".titleContact").innerHTML = data.sectionContact.titleContact;
    document.querySelector(".labelName").innerHTML = data.sectionContact.labelName;
    document.querySelector(".labelEmail").innerHTML = data.sectionContact.labelEmail;
    document.querySelector(".buttonForm").innerHTML = data.sectionContact.buttonForm;
    document.querySelector(".textMessage").placeholder = data.sectionContact.textMessage;

}


const select = document.querySelector("#option");
const selectResp = document.querySelector("#optionResp");

select.addEventListener("change", function() {
    let option = select.value;
    translate(option);
});
selectResp.addEventListener("change", function() {
    let option = selectResp.value;
    translate(option);
});