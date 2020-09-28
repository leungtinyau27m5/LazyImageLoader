window.addEventListener('load', () => {
    if (!'IntersectionObserver' in window) return
    const removeSkeleton = (evt) => {
        // @param
        // evt: on load event for image
        const target = evt.target.parentNode.querySelector('.mockup')
        setTimeout(() => {
            target.classList.remove('loading')
            target.classList.add('fade-out')
        }, 500)
    }
    const loadError = (evt) => {
        const mockup = evt.target.parentNode.querySelector('.mockup')
        setTimeout(() => {
            mockup.classList.remove('loading')
            mockup.classList.add('fade-out')

            evt.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAANS0lEQVR4nMWbeYwcVX7HP6+q+pqZ7jl8Y4/tsccen4xtbrAXIu2aDfiAoBCiSNEiR5Ao2ki7joRXMWT8Bwitgg1J/lihGJIVu0psouWwvd5kRwn2YoMJ+BgPxqyP8YEP7Dl7Zvqqql/+mMPdXa+6ey74SqXqfu/73u+od/x+Xa8VBdDffqTWMMwdCGsHi5px3C3hKXed9udbOxBZCyoKgGLwpgqJykLJvDhIs5hqSzjWqNVnTNL624/UKmUdU0hNXlWnK05j2aS7L+n53OJPnPHZHzsdx2gsm7T8kj/fH4ZvhWHu0BgPUG0Y1itevrVj2HjFCI3PalAq79bHatN0PfqUCsu35taw19U97C2TtaC+qaeeX+fVp0T4O6CwIuJfNYHG+9JFr08J8J0CQLOfIoL6jaaqeeA2gUPel6XRp0T4jwDH3YJpPAhUZ0tX0O6KsdnDN60tynEfTCQz1ddv9nGzo494b5p4XwrHccnYLgHLwDQNouUhohVBJteUM31KlHBIp0ZxwweqVbvtiFefElGw+8Ft7ZWhOS+o/SLG5rJJjZezebt27QomEok/DQTMv7Jt956RKjF1Ujl1s2uYfVsVhlHaUwfVo2C/7YhHn5Gg1EmoRVNTkzFv3rxNIvI8UDuWvgDKIkGWNUynrrYaZeSodgn4UTAT+i81ZVF8rHKyMWoH7Ny5s8E0zX8F7h1HfQCYXFPOvavmEK0IAVwKKmuFqlzaMd5yAMzRNHrzzTefMgxjj4jMG2+FAPoTac5f7CBaEaYyFt5kVS3/bCLkwCi2wTfeeONvRGSHiBTaQcaMdMbm4MdnsQxj8UTKGdEU2Llz5w+BfyzGc60QyaqZJGMzcMJR7EAYsUIoO4WVSWIm44R7rhLuuoxhp0sR/bebNm0adbRXCCU74PXXX39KKfXLQm3scIz4zNtJVNeW2LUQ6bxE7KsTmMmegkQReeqZZ57ZVaq+pSJHy2THp+tEqReU0AgEh2rj8RR7mz8nnXH02imD+KyV9E1dCGoUM0Ncym98SfTSUZS4fqxeEbnr2Wef/WLkAvwxvAYkOz5dB+p9NRRUDrlG4ODHZ0mlbW0HYoXomPcd0tFpAwHyqIJSg97Ji0hHJlF95gMMO6kjVRiG8aaI3K+UGnXom4/hEZBo/+wTpbgzN+dQfHnuBh9+ck7b2LXCtDc8jBOKjpc+mKleJp3+NYad0tavuWcBC+qm+negPB8A5YC0CfwiGOt5Wan7E0M1w+NVKWnITmYUCtcVjrVeRkQ8l4uic+4a7GAUEcbtsoMVdNY9hKsMrdxPT1zAdTUDICe9yF9/xATmK3gh01PZLHIo4nGAKHV6yPghnL1wk3hvUqtIfMYq0uXTwGXcr3TZFOLTV2jl9vYlOXfhRoGnXmzxlfvSPdHnPA5QItvyM7nTZ67huq7nygQqSExaCK5M2JWY1EAmWKGV/8WZqxp7S9vQFAoT4888DgjX3LFHhHXAESDdn0hz5Xq3/inMWImL4Rm+9VUmP76znB/fWU59lVlwqBfjuhj0TV+plX/lehd9iVSOWaUaDyBZeUvOnhWuWbk3VL3ynlD1ytDPd3/0A51wxwiSis7WDt0N88PEgopYULF+frjgMC+Fm4rNwTVD3vXHdblyrYtSf1cYWtOycFHrgJxGSj2gc0A6VouIQlzxXPnQcUbCdV1IRWfqR8G1rqKGDxmvwS+KOsB13cU6wamKmbf2+7zr3dNJulNCd0p473TSlzcSbqpiltYBnd29RQ3XG68OWbHYT4e++SZDIlKnK7cDUfyCtS9v2vzDzcKKjZRrB6sRzU9+3T0JDXsAGsMdBecF3rJi0Z8qVTvcuJADKnXlrhEZWKm/IbhWmdYBff3J/kBMVSu1tKRsyg++DnBdN6ItN0OjDHdHCWXhut4h57oEx2o8ZK0Bqc6jG5Odx/831XmsN9V5TCzTMHVzz8ikJiT48b1sW7sGiEhpq2ARWACpjs9eBvWcynq0gYBJOqNJgFJ9iKEdHBMCI9WrnQIiMi4/kVmpzqMbQT2XX1EZjdDb583KjHQPTnhy0Y4jAcWKmQGWTQ8wtcKkLKjoTwtf9zq0XM1w7EqGZKb4XDIS7VoHANeKNi4BlmD8SGkmdU11OZevep1sdV8gXaHdIICBsOSeuSEeXhQmZOWuxmVBxdwai7k1Fmsbwuw/leTjC/qsbwhmd5ufAz4t2LBEGAq5Q1cxY1qVdu6ZPW3guL5z9pHFETYsi3iMz0fIUmxcHuGRxRHfvpQrWPGLWj3mz5l2XaQ1OFYH+O4Cs2dO1q6+uP2Y3eewY/XadnfNvaXT13GHg2dSnL1hE0+5xMIG8yZbrKkPMTU68IP0XXOC7G3R7+lWz1kk0+8Zn0opvvdQ48t2Dy9nulsB4gjNjmFuCccW5ZwVkP6WWts2doAaPuPgYAzzDAX/5xWtqCgPM2tGjdb7wWuHEcfWhq8fnkmRtoVDZ1O81tzDJ+dTdPQ6ZDJCe9zhk/MD5YfODvA+PJPSh8quQ+DaR1r5dbOnUl4WylY4iuIxU9zD0t4ynOgMGG8eA/UEEB28HjORw9I/wFPJjuPrlZL3so0fup384hL7/vuo9umkp60mXd2orRsPBDuPE7z+O23d44/eS8P827JKsn/GUrsDscVPAmR6Wt8eNN7Lg92B2OInjXBN4/soeSmHMHhbsnAW0YqI9ilY1z7E6PuqYMIz2svou0Lg+iGt3MpYGQvqZniNH04MJeusgFrr4d3CwzAYCIWqVv6dCOsV/A+K4QDdMBT3371QqwjiELr8a4xU97gGPkaqm9DlfYirD4AeemDZ4AtU7wMbRN6S4ZsyC2QtguGaFXuAPfmspqYmA/gdcJ+nC7ufUNsuUrf9IU5kpk7IiGAmrxK6sg+chDbanjalisULZlHotIgIWWcFjGaQx3SyROQ3UPiABABNTU0u8Oci0qMdCU6C0OV3sTqOIo6DuIz8chysjqOELv0K7H6/0JfrN7o43trmazzQHghkhs8KOLAF6NSY1R4IBDbru/DB888//6RS6t8LtXEDlWRq7sMpry/tBYm4mH1nCHQcxsh0l6SHUor137+bxqU5wViPCPsDgcxmVZZ7VmBgJ7BeYXDOi8j+QCCwWZUtuEwhY3TYunXrXyul/rko0Yxgl83FiczFDU1GzDIwQuCmUE4/RuomZqINq78NHP+83g9KKR5Ze2f7HSvm/4lVzsGxZIUjPh+wdevWHwKvUsL0mViIiPD0iy+++G9j6WXE5wMOHDhwZPXq1V8A3wdCxfgTCAVsWLNmTdvBgwePj7aTUR2QOHDgZ78PKOtUPJ74Xm9fctxz4xnTaujrT/klQdlQwMaxOKHAUdmW2oDJDkHWMhBCeugiwrGT5/ng0Em6uvtGIz8H1VUVrP2DVSxZOJvjred5Z99hfT7ihQs8/dJLL/18pDK1Duhvb6m1TDlG9rlfP18pcByXk6cucvTEWdoufV3KkxuGYRjU181gVWM9DfNnYprmcL/HW8/zqz2HSnKCUorH1z3AimXzBpurONBswhaVlyDlqe9FpqvlbUH8YmhN8a36eG+Cc23XuHj5Bjfau2jvjJNJ26TSNmWREJFIiPKyEDNnTGL2rKnMmTWVivJwbj9Z4o6dPDdiJ6xanpOpdpqW1ajK6rWHqbWWpbtO9OAz7L0tS3szU4xRSKOWz9vY/e4B/Vvh/J6U4o/WrWbV7TlO2G3FFj2p4xc5JPXtGw+wfEkdIrD73Q+KOkFE+M/3DwJkO8H3MLV2L1fQPFbj/d/MaDor+IpvoOL2pXX88cYHUQrfUDn73eHb7x3gsxNnhvr29ZrWAY4h+hh6BMYXR0nHYXO+3b60jic2rMEwisdgQyPhXNtVKHCYWttTONZ42nZoVKjdQE+uLt+O8UNYubyeJzasRilVdCQ4jsNvPziaMU3N4e5B+K4Bg39B0S4c+RBpDdrd6juiZCcwuzB79MYPYeXyehAGF8bCu8O5tiuJocRHh3GJ55Vamg5ULfmtEvUXRZg5N319sRHGXssyZt29er1yHOcpEbGLjILrhfob14TGyhgfFVQ96+ZbXwAKhWlZf6nKGr4C2L59+38AT4uI4+cAoOCfKcbVAXbA9Tk5Pj7G67B9+/a3XNf9gY8TWmXgKL8vxsUBIq3BTFfLWlHyLzrVs2++9QWQbbxjO69L/+9nZde/9tprbwHfFZFmEekWkbPAP4VCoQdeffXVgi9RtdLtnpZ1rqgXgCXA5wayzapcvlfHEzFegMGjtX7dT8CTB9LAccTYZlUu9OhWKjy9Dxr/fn65KOPxUGzJO9k8EcPD83Q7EcarvC/C41as4R09uTA8U8AV9fdameL+JPu7iKnlfXPGZ+0YBj/Rk4tDFwc0+HDz/rggGt7YjS8YSPkFY5KvW+nQLYLa3FmhTuWVnM5nDN++SeMHik55C0uDxwEG0qRTTKG25enTlPPNRzcPx7d2lMYPFG/TVxSHxwFW5fK9BjJ0ZLZXoY4o1KNW5ZJ9ubwlexVqHagjQPpbMD6N4ggGj1rlDfvyK0vF/wPTXVBKH9e0kQAAAABJRU5ErkJggg=="
        }, 500);
    }
    const loadImage = (target) => {
        // @param 
        // target: img tag under picture class="lazy-load"
        target = target.querySelector('img')
        target.setAttribute('src', target.dataset.src)
        target.removeAttribute('data-src')
        target.addEventListener('load', removeSkeleton)
        target.addEventListener('error', loadError)
    }
    const watcher = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target)
                observer.unobserve(entry.target)
            }
        })
    })
    const lazyImages = document.querySelectorAll('picture.lazy-load') //get all lazy-load pictures 
    lazyImages.forEach(pic => {
        const loadingSkeleton = document.createElement('div')
        loadingSkeleton.classList.add('mockup')
        loadingSkeleton.classList.add('loading')
        pic.appendChild(loadingSkeleton)
        watcher.observe(pic)
    })
})