window.onload = function() {
    setTimeout(showPopup, 20000);
};

function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    document.body.classList.add("no-scroll");
}

// Close popup functionality
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    document.body.classList.remove("no-scroll");
}

// Event Listeners
document.getElementById("closeBtn").addEventListener("click", closePopup);

document.getElementById("popup").addEventListener("click", function(e) {
    if (e.target === this) closePopup();
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closePopup();
});