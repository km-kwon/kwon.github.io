const videos = [
    "forest.mp4",
    "forest1.mp4",
    "nature.mp4",
    "cloud.mp4",
    "library.mp4"
];

const chosenVideo = videos[Math.floor(Math.random() * videos.length)];

const bgVideo = document.createElement("video");

bgVideo.src = `video/${chosenVideo}`;
bgVideo.autoplay = true;
bgVideo.loop = true;
bgVideo.muted =  true;
bgVideo.type = "mp4";
bgVideo.style.zIndex = -1;
document.body.prepend(bgVideo);