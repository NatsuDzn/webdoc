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
var h1 = document.querySelector(".text");
var fleche = document.querySelectorAll(".flecheScroll");
var link = document.querySelector(".ctalinks");

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
    link.href = "../pages/manga.html";
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
    h1.innerHTML =
      'La bande dessinée au</br> service de la</br> <span class="couleur">propagande</span>';
    link.href = "../pages/comics.html";
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
    h1.innerHTML =
      'La <span class="couleur">déshumanisation</span> à</br> travers la bande</br> dessinée';
    link.href = "../pages/bd.html";
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

// "annotations" - Comics
var vid = document.querySelector(".video");
var vidBD = document.getElementById("videoBD");
var vidComics = document.getElementById("videoComics");
var vidManga = document.getElementById("videoManga");
var interviewManga = document.getElementById("mangaInterview");
var juice = document.getElementById("video-juice");
var skip = document.querySelector(".videoContainer__skip");
var button1 = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var annotationBg = document.querySelector(".annotation1");
var annotationBg2 = document.querySelector(".annotation2");
var annotationBg3 = document.querySelector(".annotation3");
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
var annotationAnnotation1 = document.getElementById("annotation1");
var annotationAnnotation2 = document.getElementById("annotation2");
var annotationAnnotation3 = document.getElementById("annotation3");
var close = document.querySelector(".close");
var close2 = document.querySelector(".close2");
var close3 = document.querySelector(".close3");

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();

      vid_currentTime = vid.currentTime;
      vid.currentTime = vid_currentTime - 5;
      vid.pause();

    case 39:
      event.preventDefault();

      vid_currentTime = vid.currentTime;
      vid.currentTime = vid_currentTime + 5;
      vid.pause();

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
  document.getElementById("demo").innerHTML = vidComics.currentTime;

  vidComics.addEventListener("timeupdate", function() {
    var juicePos = vidComics.currentTime / vidComics.duration;
    juice.style.width = juicePos * 100 + "%";
  });

  // Annotations Comics
  if (vidComics.currentTime >= 8 && vidComics.currentTime <= 18) {
    annotationAnnotation1.style.display = "flex";
    annotationAnnotation1.style.opacity = "100";
  } else {
    annotationAnnotation1.style.display = "none";
  }

  // Annotations Comics 2
  if (vidComics.currentTime >= 101 && vidComics.currentTime <= 111) {
    annotationAnnotation2.style.display = "flex";
    annotationAnnotation2.style.opacity = "100";
  } else {
    annotationAnnotation2.style.display = "none";
  }

  // Annotations Comics 3
  if (vidComics.currentTime >= 267 && vidComics.currentTime <= 277) {
    annotationAnnotation3.style.display = "flex";
    annotationAnnotation3.style.opacity = "100";
  } else {
    annotationAnnotation3.style.display = "none";
  }
}

// Ouverture Comics 1
button1.addEventListener("click", function() {
  annotationBg.style.width = "100vw";
  annotationBg.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  annotationBg.style.flexDirection = "row";
  button1.style.display = "none";
  text.style.display = "none";
  textFull.style.display = "flex";
  annotationBg.style.zIndex = "4";
  close.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img1Comics.style.transform = "scale(2)";
  imgText1.style.display = "flex";
  vid.pause();
});

// Fermeture Comics 1

close.addEventListener("click", function() {
  annotationBg.style.width = "";
  annotationBg.style.backgroundColor = "";
  annotationBg.style.flexDirection = "";
  button1.style.display = "";
  text.style.display = "";
  textFull.style.display = "";
  annotationBg.style.zIndex = "";
  close.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img1Comics.style.transform = "";
  imgText1.style.display = "";
  vid.play();
});

// Ouverture Comics 2
button2.addEventListener("click", function() {
  annotationBg2.style.width = "100vw";
  annotationBg2.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  annotationBg2.style.flexDirection = "row";
  button2.style.display = "none";
  text2.style.display = "none";
  textFull2.style.display = "flex";
  annotationBg2.style.zIndex = "4";
  close2.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img2Comics.style.transform = "scale(2)";
  imgText2.style.display = "flex";
  vid.pause();
});

// Fermeture Comics 2

close2.addEventListener("click", function() {
  annotationBg2.style.width = "";
  annotationBg2.style.backgroundColor = "";
  annotationBg2.style.flexDirection = "";
  button2.style.display = "";
  text2.style.display = "";
  textFull2.style.display = "";
  annotationBg2.style.zIndex = "";
  close2.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img2Comics.style.transform = "";
  imgText2.style.display = "";
  vid.play();
});

// Ouverture Comics 3
button3.addEventListener("click", function() {
  annotationBg3.style.width = "100vw";
  annotationBg3.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  annotationBg3.style.flexDirection = "row";
  button3.style.display = "none";
  text3.style.display = "none";
  textFull3.style.display = "flex";
  annotationBg3.style.zIndex = "4";
  close3.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img3Comics.style.transform = "scale(2)";
  imgText3.style.display = "flex";
  vid.pause();
});

// Fermeture Comics 3

close3.addEventListener("click", function() {
  annotationBg3.style.width = "";
  annotationBg3.style.backgroundColor = "";
  annotationBg3.style.flexDirection = "";
  button3.style.display = "";
  text3.style.display = "";
  textFull3.style.display = "";
  annotationBg3.style.zIndex = "";
  close3.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img3Comics.style.transform = "";
  imgText3.style.display = "";
  vid.play();
});

// BD

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vidBD.ontimeupdate = function() {
  annotationBD();
};

function annotationBD() {
  // Display the current position of the video in a p element with id="demo"
  document.getElementById("demo").innerHTML = vidBD.currentTime;

  vidBD.addEventListener("timeupdate", function() {
    var juicePos = vidBD.currentTime / vidBD.duration;
    juice.style.width = juicePos * 100 + "%";
  });

  // Annotation BD 1
  if (vidBD.currentTime >= 4 && vidBD.currentTime <= 14) {
    annotationAnnotation1.style.display = "flex";
    annotationAnnotation1.style.opacity = "100";
  } else {
    annotationAnnotation1.style.display = "none";
  }

  // Annotation BD 2
  if (vidBD.currentTime >= 75 && vidBD.currentTime <= 85) {
    annotationAnnotation2.style.display = "flex";
    annotationAnnotation2.style.opacity = "100";
  } else {
    annotationAnnotation2.style.display = "none";
  }

  // Annotation BD 3
  if (vidBD.currentTime >= 114 && vidBD.currentTime <= 136) {
    annotationAnnotation3.style.display = "flex";
    annotationAnnotation3.style.opacity = "100";
  } else {
    annotationAnnotation3.style.display = "none";
  }
}

// Ouverture BD 1
button1.addEventListener("click", function() {
  annotationBg.style.width = "100vw";
  annotationBg.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  annotationBg.style.flexDirection = "row";
  button1.style.display = "none";
  text.style.display = "none";
  textFull.style.display = "flex";
  annotationBg.style.zIndex = "4";
  close.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img1BD.style.transform = "scale(2)";
  imgText1.style.display = "flex";
  vid.pause();
});

// Fermeture BD 1

close.addEventListener("click", function() {
  annotationBg.style.width = "";
  annotationBg.style.backgroundColor = "";
  annotationBg.style.flexDirection = "";
  button1.style.display = "";
  text.style.display = "";
  textFull.style.display = "";
  annotationBg.style.zIndex = "";
  close.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img1BD.style.transform = "";
  imgText1.style.display = "";
  vid.play();
});

// Ouverture BD 2
button2.addEventListener("click", function() {
  annotationBg2.style.width = "100vw";
  annotationBg2.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  annotationBg2.style.flexDirection = "row";
  button2.style.display = "none";
  text2.style.display = "none";
  textFull2.style.display = "flex";
  annotationBg2.style.zIndex = "4";
  close2.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img2BD.style.transform = "scale(1.1)";
  imgText2.style.display = "flex";
  vid.pause();
});

// Fermeture BD 2

close2.addEventListener("click", function() {
  annotationBg2.style.width = "";
  annotationBg2.style.backgroundColor = "";
  annotationBg2.style.flexDirection = "";
  button2.style.display = "";
  text2.style.display = "";
  textFull2.style.display = "";
  annotationBg2.style.zIndex = "";
  close2.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img2BD.style.transform = "";
  imgText2.style.display = "";
  vid.play();
});

// Ouverture BD 3
button3.addEventListener("click", function() {
  annotationBg3.style.width = "100vw";
  annotationBg3.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  annotationBg3.style.flexDirection = "row";
  button3.style.display = "none";
  text3.style.display = "none";
  textFull3.style.display = "flex";
  annotationBg3.style.zIndex = "4";
  close3.style.display = "block";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  img3BD.style.transform = "scale(2)";
  imgText3.style.display = "flex";
  vid.pause();
});

// Fermeture BD 3

close3.addEventListener("click", function() {
  annotationBg3.style.width = "";
  annotationBg3.style.backgroundColor = "";
  annotationBg3.style.flexDirection = "";
  button3.style.display = "";
  text3.style.display = "";
  textFull3.style.display = "";
  annotationBg3.style.zIndex = "";
  close3.style.display = "";
  pauseIcon.style.display = "";
  playIcon.style.display = "";
  img3BD.style.transform = "";
  imgText3.style.display = "";
  vid.play();
});
