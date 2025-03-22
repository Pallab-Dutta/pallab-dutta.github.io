document.addEventListener("DOMContentLoaded", function () {
    const knob = document.getElementById("toggle-knob");
    const track = document.getElementById("toggle-track");
    let isScience = true;

    knob.addEventListener("click", function () {
        isScience = !isScience;
        knob.style.transform = isScience ? "translateX(0)" : "translateX(50px)";
        knob.style.backgroundImage = isScience ? "url('/assets/face_on.jpg')" : "url('/assets/face_on.jpg')";
    });
});
