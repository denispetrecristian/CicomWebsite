// $(function() {
//     $('#navbar')
// })
(function() {
    var navbar = document.getElementById('navbar');
    var windowHeight
    var vh

    function init() {
        windowHeight = window.innerHeight;
        vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }

    function checkPosition() {
        if (windowHeight > vh) {
            navbar.classList.add('stick-top');
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
});