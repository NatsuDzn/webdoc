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
var h1 = document.querySelector(".text")
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
    h1.innerHTML = `Le <span class="couleur">traumatisme</span></br>d’Hiroshima à travers la</br> bande dessinée`;
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
    h1.innerHTML = 'La bande dessinée au</br> service de la</br> <span class="couleur">propagande</span>';
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
    h1.innerHTML = 'La <span class="couleur">déshumanisation</span> à</br> travers la bande</br> dessinée';
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
    muteIcon.style.display = "flex";
    unmuteIcon.style.display = "none";
  } else {
    vid.muted = false;
    muteIcon.style.display = "none";
    unmuteIcon.style.display = "flex";
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
var modalBg = document.querySelector(".modal1");
var modalBg2 = document.querySelector(".modal2");
var modalBg3 = document.querySelector(".modal3");
var img1Comics = document.querySelector(".bgImgleft1");
var img2Comics = document.querySelector(".bgImgleft2");
var img3Comics = document.querySelector(".bgImgleft3");
var img1BD = document.querySelector(".bgImgleft1BD");
var img2BD = document.querySelector(".bgImgleft2BD");
var img3BD = document.querySelector(".bgImgleft3BD");
var img1Manga = document.querySelector(".bgImgleft1Manga");
var img2Manga = document.querySelector(".bgImgleft2Manga");
var img3Manga = document.querySelector(".bgImgleft3Manga");
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

// Manga

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vidManga.ontimeupdate = function() {
  annotationManga();
};

function annotationManga() {
  // Display the current position of the video in a p element with id="demo"
  document.getElementById("demo").innerHTML = vidManga.currentTime;

  vidManga.addEventListener("timeupdate", function() {
    var juicePos = vidManga.currentTime / vidManga.duration;
    juice.style.width = juicePos * 100 + "%";
  });

  // Annotation Manga 1
  if (vidManga.currentTime >= 30 && vidManga.currentTime <= 40) {
    modalAnnotation1.style.display = "flex";
    modalAnnotation1.style.opacity = "100";
  } else {
    modalAnnotation1.style.display = "none";
  }

  // Annotation Manga 2
  if (vidManga.currentTime >= 90 && vidManga.currentTime <= 100) {
    modalAnnotation2.style.display = "flex";
    modalAnnotation2.style.opacity = "100";
  } else {
    modalAnnotation2.style.display = "none";
  }

  // Annotation Manga 3
  if (vidManga.currentTime >= 76 && vidManga.currentTime <= 86) {
    modalAnnotation3.style.display = "flex";
    modalAnnotation3.style.opacity = "100";
  } else {
    modalAnnotation3.style.display = "none";
  }
}

// Ouverture Manga 1
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
  img1Manga.style.transform = "scale(2)";
  imgText1.style.display = "flex";
  vid.pause();
});

// Fermeture Manga 1

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
  img1Manga.style.transform = "";
  imgText1.style.display = "";
  vid.play();
});

// Ouverture Manga 2
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
  img2Manga.style.transform = "scale(2.2)";
  imgText2.style.display = "flex";
  vid.pause();
});

// Fermeture Manga 2

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
  img2Manga.style.transform = "";
  imgText2.style.display = "";
  vid.play();
});

// Ouverture Manga 3
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
  img3Manga.style.transform = "scale(2)";
  imgText3.style.display = "flex";
  vid.pause();
});

// Fermeture BD 3

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
  img3Manga.style.transform = "";
  imgText3.style.display = "";
  vid.play();
});

var indicatorManga1 = document.querySelector(".videoContainer__indicatorManga1");
var indicatorManga2 = document.querySelector(".videoContainer__indicatorManga2");
var indicatorManga3 = document.querySelector(".videoContainer__indicatorManga3");

// Redirection 

indicatorManga1.addEventListener("click", function() {
  vidManga.currentTime = 30;
  vidManga.play();
});

indicatorManga2.addEventListener("click", function() {
  vidManga.currentTime = 76;
  vidManga.play();
});

indicatorManga3.addEventListener("click", function() {
  vidManga.currentTime = 90;
  vidManga.play();
});
