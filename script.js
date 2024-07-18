document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(anchor => {
        // moves the anchor to the desired section taking into account the nav
        anchor.onclick = function(e) {
            e.preventDefault()
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const navHeight = document.querySelector('.title-and-nav').offsetHeight;

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    })
})