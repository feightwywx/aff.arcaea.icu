let coll = new mdui.Collapse('#collapse');
let toggle = document.getElementById('more-settings-toggle')

if (toggle !== null) {
    document.getElementById('more-settings-toggle').addEventListener('click', function () {
        coll.toggle('#more-settings-item');
    });
}
