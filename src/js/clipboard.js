const copyElements = document.querySelectorAll("[toCopy]");
copyElements.forEach(element => {
    element.addEventListener('click', () => {
        window.navigator.clipboard.writeText(element.getAttribute('toCopy'));
    });
});