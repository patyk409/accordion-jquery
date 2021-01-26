$(document).ready(function () {
    const item = $('.item');
    const content = $('.content');
    const span = $('.item span');

    $(item).click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find(content).slideUp(500);
            $(this).find(span).text('+');
        } else {
            $(this).addClass('open');
            $(this).find(content).slideDown(500);
            $(this).find(span).text('-');
        };
    });
});