window.addEventListener('load', () => {
    const removeMockup = (event) => {
        const mockup = event.target.parentNode
        console.log(mockup)
        mockup.classList.remove('loading')
        mockup.classList.add('fade-out')
            // mockup.addEventListener('transitionend', mockup.remove)
            // mockup.classList.remove('loading')
            // mockup.classList.add('fade-out')
    }

    const loadImage = (img) => {
        img.setAttribute('src', img.dataset.src)
        img.removeAttribute('data-src')
        img.addEventListener('load', removeMockup)
            // img.addEventListener('click', removeMockup)
    }

    const onEnterView = (entries, observer) => {
        for (let entry of entries) {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
                loadImage(entry.target)
                observer.unobserve(entry.target)
            }
        }
    }

    const watcher = new IntersectionObserver(onEnterView)
    const lazyImages = document.querySelectorAll('img.lazy')
    for (let image of lazyImages) {
        watcher.observe(image)
    }
})