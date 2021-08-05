var $ = mdui.$;

document.getElementById('btn-generate').addEventListener('click', function () {
    let ajaxdata = {
        arcstring: document.getElementById('text-arcstring').value,
        count: document.getElementById('text-count').value,
        x_range: document.getElementById('text-x').value,
        y_range: document.getElementById('text-y').value,
        mode: document.getElementById('sel-mode').value
    };
    let easing = document.getElementById('text-easing').value;
    if (easing !== '') {
        ajaxdata.easing = easing;
    }

    // console.log(ajaxdata);

    $.ajax({
        method: 'GET',
        url: 'https://api.arcaea.icu/aff/arc/crease-line',
        data: ajaxdata,
        datatype: 'json',
        success: function (data) {
            let jsondata = JSON.parse(data)
            let textResult = document.getElementById('text-result');
            if (jsondata.status === 'success') {
                textResult.value = jsondata.result;
                textResult.removeAttribute('disabled');
                textResult.select();
                document.execCommand("copy");
                textResult.disabled = true;
                mdui.snackbar({
                    message: '已生成',
                    position: 'bottom'
                });
            } else {
                mdui.alert(jsondata.result, '错误');
            }
        },
        error: function() {
            mdui.alert('遇到了未知错误');
        },
        timeout: 5000
    });
});