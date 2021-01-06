const createToast = (message) => {
    removeOldToasts()

    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add('content')

    const paragraph = document.createElement('p')
    paragraph.innerHTML = message

    toast.appendChild(paragraph)

    const body = document.querySelector('body')
    body.appendChild(toast)

    setTimeout(() => toast.remove(), 2250)
    toast.addEventListener('click', () => toast.remove())
}

const removeOldToasts = () => {
    const oldToasts = document.querySelectorAll('.toast')
    oldToasts.forEach(toast => {
        toast.remove();
    })
}

const copyElements = document.querySelectorAll("[toCopy]");
copyElements.forEach(element => {
    element.addEventListener('click', () => {
        window.navigator.clipboard.writeText(element.getAttribute('toCopy'));
        createToast('Copied to clipboard.')
    });
});