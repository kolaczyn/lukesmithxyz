// it copies RSS feed link if you click a link

const rssLinks = [...document.getElementById('rss-links').children]
rssLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        window.navigator.clipboard.writeText(link.firstChild.getAttribute('rss'))
    })
})