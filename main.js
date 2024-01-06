const d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();

function scrollToTop() {
    window.scrollTo(0, 0);
}

// Attach the function to the page reload event
window.addEventListener('beforeunload', scrollToTop);