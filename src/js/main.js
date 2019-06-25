// Page d'accueil

var ligneSquare = document.querySelector(".ligneSquare");
var text1 = document.querySelector(".textTop1");
var text2 = document.querySelector(".textTop2");
var text3 = document.querySelector(".textTop3");
var nbr1 = document.querySelector(".nbrTop1");
var nbr2 = document.querySelector(".nbrTop2");
var nbr3 = document.querySelector(".nbrTop3");
var img1 = document.querySelector(".backgroundImg1");
var img2 = document.querySelector(".backgroundImg2");
var img3 = document.querySelector(".backgroundImg3");
var fleche = document.querySelectorAll(".flecheScroll");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  console.log(scrolled);
  for (let i = 0; i < fleche.length; i++) {
    var fleches = fleche[i];
  }
  if (scrolled < 461) {
    ligneSquare.classList.remove("change");
    text2.classList.remove("change");
    text1.classList.add("change");
    nbr2.classList.remove("change");
    nbr1.classList.add("change");
    nbr1.classList.add("change");
    img2.classList.add("change");
    fleches.classList.add("change");
  }
  if (scrolled > 461) {
    ligneSquare.classList.remove("changee");
    ligneSquare.classList.add("change");
    text1.classList.remove("change");
    text3.classList.remove("change");
    text2.classList.add("change");
    nbr1.classList.remove("change");
    nbr3.classList.remove("change");
    nbr2.classList.add("change");
    img2.classList.remove("change");
    img1.classList.add("change");
    img3.classList.remove("change");
    fleches.classList.remove("change");
  }
  if (scrolled > 922) {
    ligneSquare.classList.remove("change");
    ligneSquare.classList.add("changee");
    text2.classList.remove("change");
    text3.classList.add("change");
    nbr2.classList.remove("change");
    nbr3.classList.add("change");
    img3.classList.add("change");
    fleches.classList.remove("change");
  }
});

// Modals - Comics
var vid = document.getElementById("video1");
var juice = document.getElementById("video-juice");
var skip = document.querySelector(".videoContainer__skip");
var button1 = document.getElementById("button");
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal1")
var text = document.querySelector(".text");
var textFull = document.querySelector(".textFull");
var modalAnnotation1 = document.getElementById("modal1");
var close = document.querySelector(".close");

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();

      vid_currentTime = vid.currentTime;
      vid.currentTime = vid_currentTime - 5;

    case 39:
      event.preventDefault();

      vid_currentTime = vid.currentTime;
      vid.currentTime = vid_currentTime + 5;

    case 32:
      event.preventDefault();

      {
        if (vid.paused) vid.play();
        else vid.pause();
      }
  }
};

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {
  annotation();
};

function annotation() {
  // Display the current position of the video in a p element with id="demo"
  document.getElementById("demo").innerHTML = vid.currentTime;

  vid.addEventListener("timeupdate", function() {
    var juicePos = vid.currentTime / vid.duration;
    juice.style.width = juicePos * 100 + "%";
  });

  if (vid.currentTime >= 7 && vid.currentTime <= 16) {
    modalAnnotation1.style.display = "flex";
    modalAnnotation1.style.opacity = "100";
  } else {
    modalAnnotation1.style.display = "none";
  }
}


// faire le bouton de la croix
button1.addEventListener("click", function() {
  modalBg.style.width = "100vw";
  modalBg.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  modalBg.style.flexDirection = "row" ;
  button1.style.display = "none";
  text.style.display = "none";
  textFull.style.display = "flex";
  modalBg.style.zIndex = "4";
  close.style.display = "block";
  vid.pause();
});

