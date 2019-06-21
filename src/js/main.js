// Get the video element with id="myVideo"
var vid = document.getElementById("video1");
var juice = document.getElementById("orange-juice");

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();

      vid_currentTime = vid.currentTime;
      vid.currentTime -= parseInt(5);

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

  if (vid.currentTime >= 1 && vid.currentTime <= 5) {
    document.getElementById("modal1").style.opacity = "100";
  } else {
    document.getElementById("modal1").style.opacity = "0";
  }

  if (vid.currentTime >= 8 && vid.currentTime <= 15) {
    document.getElementById("modal2").style.opacity = "100";
  } else {
    document.getElementById("modal2").style.opacity = "0";
  }
}
