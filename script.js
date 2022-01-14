const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav ul a, .m_nav ul a");
const open_btn = document.querySelector(".open-btn");
const mobileNav = document.querySelector(".m_nav");
const doorBtn = document.getElementById("doorBtn");
const mainContent = document.querySelector(".mainContent");
const kinetic = document.querySelector(".kinetic");
const specialLink = document.getElementById("specialLink");
const leftCtrl = document.getElementById('leftCtrl');
const rightCtrl = document.getElementById('rightCtrl');
const currentPage = document.getElementById('currentPage');
// doorBtn.addEventListener("click", toggleDoors);
let pages = ['home','about','projects','contact']
let index;
sessionStorage.setItem('index','0');

toggleDoorsMobile();
leftCtrl.addEventListener('click',swapPageBack);
rightCtrl.addEventListener('click',swapPageForward);


function reload() {
    location.reload();
}


function toggleDoors() {
  mainContent.classList.add("loading");
  const int1 = setTimeout(() => {
    kinetic.classList.add("loading");
    specialLink.setAttribute("href", `#${this.innerHTML.toLowerCase()}`);
    specialLink.click();
  }, 500);
  const int2 = setTimeout(() => {
    mainContent.classList.remove("loading");
    kinetic.classList.remove("loading");
  }, 1000);
}

function toggleDoorsMobile(index) {
  mainContent.classList.add("loading");
  const int1 = setTimeout(() => {
    kinetic.classList.add("loading");
    specialLink.click();
  }, 500);
  const int2 = setTimeout(() => {
    mainContent.classList.remove("loading");
    kinetic.classList.remove("loading");
  }, 1000);
}



navLinks.forEach((link) => {
  link.addEventListener("click", changeStatus);
  link.addEventListener("click", toggleDoors);
});

open_btn.addEventListener("click", () => {
  mobileNav.classList.toggle("visible");
  //   checkActiveLink();
});

function changeStatus() {
  navLinks.forEach(function (link) {
    link.classList.remove("selectedLink");
  });
  this.classList.add("selectedLink");
  checkActiveLink();
  mobileNav.classList.remove("visible");
}

function checkActiveLink() {
  let index;
  let i = 0;
  navLinks.forEach((link) => {
    if (link.classList.contains("selectedLink")) {
      index = i;
    }
    i++;
  });
  if (index < 4) {
    navLinks[index + 4].classList.add("selectedLink");
  } else {
    navLinks[index - 4].classList.add("selectedLink");
    index = index-4;
  }
  currentPage.innerText = pages[index].toUpperCase();
  sessionStorage.setItem('index',index);
}

function swapPageBack() {
  let index = +sessionStorage.getItem('index');
  // console.log(index)
  switch (index) {
    case 0:
      current = 3;
      break;
      case 1:
        current = 0;;
        break;
        case 2:
          current = 1;;
          break;
          case 3:
            current = 2;
            break;
    default:
      break;
  }
  
  navLinks.forEach(function (link) {
    link.classList.remove("selectedLink");
  });
  if(index>0){
    navLinks[index-1].classList.add("selectedLink");
  } else {
    navLinks[3].classList.add("selectedLink");
  }
  specialLink.setAttribute("href", `#${pages[current]}`);
  // currentPage.innerText = pages[current].toUpperCase();
  toggleDoorsMobile();
  checkActiveLink();
  
  
}

function swapPageForward() {
  let index = +sessionStorage.getItem('index');
  switch (index) {
    case 0:
      current = 1;
      break;
      case 1:
        current = 2;;
        break;
        case 2:
          current = 3;;
          break;
          case 3:
            current = 0;
            break;
    default:
      break;
  }
  
  navLinks.forEach(function (link) {
    link.classList.remove("selectedLink");
  });
  if(index<3){
    navLinks[index+1].classList.add("selectedLink");
  } else {
    navLinks[0].classList.add("selectedLink");
  }
  specialLink.setAttribute("href", `#${pages[current]}`);
  // currentPage.innerText = pages[current].toUpperCase();
  checkActiveLink();
  toggleDoorsMobile();
}
