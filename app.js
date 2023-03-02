let btnOne = document.getElementsByClassName('header-menu');
const toShowMenu = () => {
  if (btnOne[0].className == "header-menu") {
    btnOne[0].className += " not-hidden";
  } else {
    btnOne[0].className = "header-menu";
  }
}
//btnOne.className += " not-hidden";

