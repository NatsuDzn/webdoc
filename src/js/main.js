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

// Boutons

var mute = document.getElementById("mute");
var muteIcon = document.querySelector(".muteIcon");
var unmuteIcon = document.querySelector(".unmuteIcon");

// Mute / Unmute
mute.onclick = function() {
  if (vid.muted === false) {
    vid.muted = true;
    muteIcon.style.display = "none";
    unmuteIcon.style.display = "flex";
  } else {
    vid.muted = false;
    muteIcon.style.display = "flex";
    unmuteIcon.style.display = "none";
  }
};

// Play / Pause document.getElementById('video1').pause()

var pause = document.getElementById("pause");
var pauseIcon = document.querySelector(".pauseIcon");
var playIcon = document.querySelector(".playIcon");

pause.onclick = function() {
  if (vid.paused === false) {
    vid.pause();
    pauseIcon.style.display = "none";
    playIcon.style.display = "flex";
  } else {
    vid.play();
    pauseIcon.style.display = "flex";
    playIcon.style.display = "none";
  }
};

// "Modals" - Comics
var vid = document.querySelector(".video");
var vidBD = document.getElementById("videoBD");
var vidComics = document.getElementById("videoComics");
var vidManga = document.getElementById("videoManga");
var juice = document.getElementById("video-juice");
var skip = document.querySelector(".videoContainer__skip");
var button1 = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal1");
var modalBg2 = document.querySelector(".modal2");
var modalBg3 = document.querySelector(".modal3");
var img1Comics = document.querySelector(".bgImgleft1");
var img2Comics = document.querySelector(".bgImgleft2");
var img3Comics = document.querySelector(".bgImgleft3");
var imgText1 = document.querySelector(".categoryIMG");
var imgText2 = document.querySelector(".categoryIMG2");
var imgText3 = document.querySelector(".categoryIMG3");
var text = document.querySelector(".text");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
var textFull = document.querySelector(".textFull");
var textFull2 = document.querySelector(".textFull2");
var textFull3 = document.querySelector(".textFull3");
var modalAnnotation1 = document.getElementById("modal1");
var modalAnnotation2 = document.getElementById("modal2");
var modalAnnotation3 = document.getElementById("modal3");
var close = document.querySelector(".close");
var close2 = document.querySelector(".close2");
var close3 = document.querySelector(".close3");

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
        if (vid.paused === false) {
          vid.pause();
          pauseIcon.style.display = "none";
          playIcon.style.display = "flex";
        } else {
          vid.play();
          pauseIcon.style.display = "flex";
          playIcon.style.display = "none";
        }
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

  // Annotations Comics
  if (vidComics.currentTime >= 8 && vidComics.currentTime <= 18) {
    modalAnnotation1.style.display = "flex";
    modalAnnotation1.style.opacity = "100";
  } else {
    modalAnnotation1.style.display = "none";
  }

  // Annotations Comics 2
  if (vidComics.currentTime >= 101 && vidComics.currentTime <= 111) {
    modalAnnotation2.style.display = "flex";
    modalAnnotation2.style.opacity = "100";
  } else {
    modalAnnotation2.style.display = "none";
  }

  // Annotations Comics 3
  if (vidComics.currentTime >= 267 && vidComics.currentTime <= 277) {
    modalAnnotation3.style.display = "flex";
    modalAnnotation3.style.opacity = "100";
  } else {
    modalAnnotation3.style.display = "none";
  }
}

// Ouverture Comics 1
button1.addEventListener("click", function() {
  modalBg.style.width = "100vw";
  modalBg.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  modalBg.style.flexDirection = "row";
  button1.style.display = "none";
  text.style.display = "none";
  textFull.style.display = "flex";
  modalBg.style.zIndex = "4";
  close.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img1Comics.style.transform = "scale(1)";
  imgText1.style.display = "flex";
  vid.pause();
});

// Fermeture Comics 1

close.addEventListener("click", function() {
  modalBg.style.width = "";
  modalBg.style.backgroundColor = "";
  modalBg.style.flexDirection = "";
  button1.style.display = "";
  text.style.display = "";
  textFull.style.display = "";
  modalBg.style.zIndex = "";
  close.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img1Comics.style.transform = "";
  imgText1.style.display = "";
  vid.play();
});

// Ouverture Comics 2
button2.addEventListener("click", function() {
  modalBg2.style.width = "100vw";
  modalBg2.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  modalBg2.style.flexDirection = "row";
  button2.style.display = "none";
  text2.style.display = "none";
  textFull2.style.display = "flex";
  modalBg2.style.zIndex = "4";
  close2.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img2Comics.style.transform = "scale(1)";
  imgText2.style.display = "flex";
  vid.pause();
});

// Fermeture Comics 2

close2.addEventListener("click", function() {
  modalBg2.style.width = "";
  modalBg2.style.backgroundColor = "";
  modalBg2.style.flexDirection = "";
  button2.style.display = "";
  text2.style.display = "";
  textFull2.style.display = "";
  modalBg2.style.zIndex = "";
  close2.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img2Comics.style.transform = "";
  imgText2.style.display = "";
  vid.play();
});

// Ouverture Comics 3
button3.addEventListener("click", function() {
  modalBg3.style.width = "100vw";
  modalBg3.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  modalBg3.style.flexDirection = "row";
  button3.style.display = "none";
  text3.style.display = "none";
  textFull3.style.display = "flex";
  modalBg3.style.zIndex = "4";
  close3.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img3Comics.style.transform = "scale(1)";
  imgText3.style.display = "flex";
  vid.pause();
});

// Fermeture Comics 3

close3.addEventListener("click", function() {
  modalBg3.style.width = "";
  modalBg3.style.backgroundColor = "";
  modalBg3.style.flexDirection = "";
  button3.style.display = "";
  text3.style.display = "";
  textFull3.style.display = "";
  modalBg3.style.zIndex = "";
  close3.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img3Comics.style.transform = "";
  imgText3.style.display = "";
  vid.play();
});
