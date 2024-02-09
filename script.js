var video = document.getElementById("video");
list=["video1.mp4", "video2.mp4"];
const ll = list.length - 1;
var i = 0;

window.addEventListener("keydown", (event) => {
    if (event.keyCode === 37 && i > 0) {
      i = i - 1;
      video.src = list[i];
      return i;
    } else if (event.keyCode === 37 && i == 0) {
      i = ll;
      video.src = list[i];
      return i;      
    }
  });
  

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 39 && i < ll) {
        i = i + 1;
        video.src = list[i];
        return i;
    } else if (event.keyCode === 39 && i == ll) {
      i = 0;
      video.src = list[i];
      return i;
  }
});