document.addEventListener('DOMContentLoaded', () => {
    loadHeaderComponent()
    loadFooterComponent()

});

function loadHeaderComponent() {
    fetch('/store/components/register/register.html')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("headerComponent").innerHTML = data
    })
}

function loadFooterComponent() {
    fetch('/store/components/footer/footer.html')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footerComponent").innerHTML = data
    })
}

