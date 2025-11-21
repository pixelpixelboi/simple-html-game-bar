/* ------------------------------
   Toggle Panel Visibility
--------------------------------*/
function togglePanel(id) {
    const panel = document.getElementById(id);
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

/* ------------------------------
   Make Panels Draggable
--------------------------------*/
document.querySelectorAll('.panel').forEach(panel => {
    const header = panel.querySelector('.panel-header');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener('mousedown', e => {
        isDragging = true;
        offsetX = e.clientX - panel.offsetLeft;
        offsetY = e.clientY - panel.offsetTop;
    });

    document.addEventListener('mousemove', e => {
        if (isDragging) {
            panel.style.left = (e.clientX - offsetX) + "px";
            panel.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

/* ------------------------------
   Optional: Toggle with Win+G
--------------------------------*/
document.addEventListener("keydown", e => {
    // Win+G simulation (Ctrl+G used because browsers block real Win key)
    if (e.ctrlKey && e.key.toLowerCase() === "g") {
        const bar = document.getElementById("gamebar");
        bar.style.display = bar.style.display === "none" ? "flex" : "none";
    }
});
