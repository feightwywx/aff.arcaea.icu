$(document).pjax('a', '#pjax-container');
$(document).on('ready pjax:end', function () {
    windowLoad();
});