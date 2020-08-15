$(document).ready(function() {
    //initializing svg to be animated when the page loads
    $('svg').addClass('animated');

    $('.social-power .social-bar .dot-theme').click(function() {
        if (!this.classList.contains('active')) {
            // hide the current text and remove the active class from the current elemnt
            let idToHide = $('.social-power .social-bar .active')[0].dataset.target;
            $(idToHide).addClass('d-none');
            $(idToHide).removeClass(['d-flex', 'flex-column', 'align-items-center']);
            $('.social-power .social-bar .active')[0].classList.remove('active');

            // show the selected text and add the active class to the clicked element
            this.classList.add('active');
            let idToShow = $('.social-power .social-bar .active')[0].dataset.target;
            $(idToShow).removeClass('d-none');
            $(idToShow).addClass(['d-flex', 'flex-column', 'align-items-center']);
        }
    })
});