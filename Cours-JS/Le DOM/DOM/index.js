// SELECTEURS
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  console.log("click !");
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//---------------------------------------------------------------

// MOUSE Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid pink";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-----------------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  ring(e.key);
});

// const ring = (key) => {
//   const audio = new Audio();
//   audio.src = key + ".mp3";
//   audio.play();
// };

//----------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log("Test !");

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTMLtext = ` 
    <h3>Pseudo : ${pseudo}</h3>
    <h4>langage pr??f??r?? : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//------------------------------------------------------------------

// // Load event
// window.addEventListener("load", () => {
//   console.log("Document Charg?? !");
// });

//--------------------------------------------------------------------
// ForEach
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//-------------------------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = () => {
//   console.log("Click !");
// };
// Bubbling
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);
// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//---------------------------------------------------------------------
// BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "heigt=600, width=800");
//  Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// Brother Object Mod??le (BOM)

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600, width=800");
//window.close()

// Ev??nement adoss??s ?? Window
// alert("hello");
//

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//Timer, compte ?? rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML +=
//     "<div class='box'><h2>Nouvelle Boite ! </h2></div>";
// }, 1000);

// document.body.addEventListener("click", (e) => {
//   // e.target.remove();
//   cleartInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// navigator
console.log(Navigator.userAgent);

//History
// console.log(history);
// window.history.back();
//history.go(-2)

//-----------------------------------------------
//SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
