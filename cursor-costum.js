const cursor = document.querySelector(".custom-cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    trail.style.left = `${e.clientX - 6}px`;
    trail.style.top = `${e.clientY - 6}px`;

    cursor.style.transform = "scale(1.5)";
    trail.style.opacity = "1";

    setTimeout(() => {
        cursor.style.transform = "scale(1)";
        trail.style.opacity = "0.6";
    }, 100);
});

/* Cursor Changes When Clicking */
document.addEventListener("mousedown", () => {
    cursor.style.transform = "scale(0.8)";
    cursor.style.background = "linear-gradient(45deg, #F39C12, #00A8E8)";
});
document.addEventListener("mouseup", () => {
    cursor.style.transform = "scale(1.5)";
    cursor.style.background = "linear-gradient(45deg, #00A8E8, #F39C12)";
});
