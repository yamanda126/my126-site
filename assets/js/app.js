window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

function goToInstagram() {
    window.location.href = 'https://www.instagram.com/chef.amandarosa/';
}

function goToYouTube() {
    window.location.href = 'https://www.youtube.com/watch?v=tJlzIJaokVY';
}

// AOS
AOS.init({
    duration: 800,
});