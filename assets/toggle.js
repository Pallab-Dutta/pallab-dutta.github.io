document.addEventListener("DOMContentLoaded", function () {
    const knob = document.getElementById("toggle-knob");
    const track = document.getElementById("toggle-track");
    let isScience = true;

    track.addEventListener("click", function () {
        isScience = !isScience;

        // Dynamically calculate the movement distance
        const trackWidth = track.offsetWidth;
        const knobWidth = knob.offsetWidth;
        const moveDistance = trackWidth - knobWidth - (trackWidth * 0.04); // 4% margin
        
        knob.style.transform = isScience ? "translateY(-50%) translateX(0)" 
                                         : `translateY(-50%) translateX(${moveDistance}px)`;

        knob.style.backgroundImage = isScience ? "url('/assets/face_on.jpg')" 
                                               : "url('/assets/face_off.png')";

        track.style.backgroundImage = isScience ? "url('/assets/SciMode.png')" 
                                                : "url('/assets/ArtMode.png')";
    });
});
