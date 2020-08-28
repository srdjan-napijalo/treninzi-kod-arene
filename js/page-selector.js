var currentPage = location.pathname.split('/')[2].split('.')[0];
if(currentPage)
switch(currentPage) {
  case "index":
   	document.getElementById("indexBtn").classList.add("selected-link");
	document.getElementById("indexBtn2").classList.add("selected-link");
    break;
  case "personal" :
  case "massage" :
  case "running" :
  case  "fitness" :
  case  "recovery":
  case "help":
  	document.getElementById("programsBtn").classList.add("selected-link");
	document.getElementById("programsBtn2").classList.add("selected-link");
	break;
  case "back-pain":
  case "starvation":
  case "injuries":
  document.getElementById("eduBtn").classList.add("selected-link");
  document.getElementById("eduBtn2").classList.add("selected-link");
  break;
  case "gallery":
  document.getElementById("galleryBtn").classList.add("selected-link");
	document.getElementById("galleryBtn2").classList.add("selected-link");
	break;
} /*
if(currentPage = "index"){ //IF IT IS NOT INDEX PAGE THEN SELECT LINKS
document.getElementById(currentPage+"Btn").classList.add("selected-link");
document.getElementById(currentPage+"Btn2").classList.add("selected-link");
}//SELECT PROGRAM ALSO IF IT IS ONE OF PROGRAMS*/


