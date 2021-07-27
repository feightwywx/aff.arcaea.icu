var $ = mdui.$;

document.getElementById('btn-generate').addEventListener('click', function () {
    let ajaxdata = {
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        start_bpm: document.getElementById('text-start-bpm').value,
        stop_bpm: document.getElementById('text-stop-bpm').value,
        count: document.getElementById('text-count').value,
    };
    let bar = document.getElementById('text-bar').value;
    if(bar !== '') {
        ajaxdata.bar = bar;
    }

    console.log(ajaxdata);

    $.ajax({
        method: 'GET',
        url: 'http://api.arcaea.icu/aff/timing/easing',
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