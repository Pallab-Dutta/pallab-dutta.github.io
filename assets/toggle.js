document.addEventListener("DOMContentLoaded", function () {
    const knob = document.getElementById("toggle-knob");
    const track = document.getElementById("toggle-track");
    let isScience = false;

    knob.addEventListener("click", function () {
        isScience = !isScience;

        knob.style.transform = isScience ? "translateX(0)" : "translateX(70px)";
        knob.style.backgroundImage = isScience ? "url('/assets/face_on.jpg')" : "url('/assets/face_on.jpg')";
        track.style.backgroundImage = isScience ? "url('/assets/SciMode.png')" : "url('/assets/ArtMode.png')";
    });
});
