$(document).pjax('a', '#pjax-container');
$(document).on('ready pjax:end', function () {
    windowLoad();
});

$(document).on('pjax:click', function () {
    $($('#page-progress')).css('display', 'block');
    pjaxCard = $('.pjax-card')[0];
    $(pjaxCard).addClass('pjax-card-fade');
});