var $ = mdui.$;

document.getElementById('btn-generate').addEventListener('click', function () {
    let ajaxdata = {
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        count: document.getElementById('text-count').value,
        bpm_range: document.getElementById('text-bpm-range').value
    };
    let exact_bar = document.getElementById('text-ex-bar').value;
    let zero_bar = document.getElementById('text-zero-bar').value;
    if (exact_bar !== '') {
        ajaxdata.exact_bar = exact_bar;
    }
    if (zero_bar !== '') {
        ajaxdata.zero_bar = zero_bar;
    }
    // console.log(ajaxdata);

    $.ajax({
        method: 'GET',
        url: 'https://api.arcaea.icu/aff/timing/glitch',
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