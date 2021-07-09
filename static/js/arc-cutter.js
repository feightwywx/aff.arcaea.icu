var coll = new mdui.Collapse('#collapse');

document.getElementById('more-settings-toggle').addEventListener('click', function () {
    coll.toggle('#more-settings-item');
});