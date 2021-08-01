var $ = mdui.$;

document.getElementById('btn-generate').addEventListener('click', function () {
    let ajaxdata = {
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        step: document.getElementById('text-step').value,
    };
    let length = document.getElementById('text-length').value;
    if (length !== '') {
        ajaxdata.length = length;
    }

    console.log(ajaxdata);

    $.ajax({
        method: 'GET',
        url: 'https://api.arcaea.icu/aff/arc/rain',
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