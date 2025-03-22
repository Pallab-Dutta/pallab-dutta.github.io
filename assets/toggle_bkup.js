document.addEventListener("DOMContentLoaded", function () {
    const knob = document.getElementById("toggle-knob");
    const track = document.getElementById("toggle-track");
    let isScience = true;

    track.addEventListener("click", function () {
        isScience = !isScience;

        knob.style.transform = isScience ? "translateX(0)" : "translateX(200px)";
        knob.style.backgroundImage = isScience ? "url('/assets/face_on.jpg')" : "url('/assets/face_off.jpg')";
        track.style.backgroundImage = isScience ? "url('/assets/SciMode.png')" : "url('/assets/ArtMode.png')";
    });
});
