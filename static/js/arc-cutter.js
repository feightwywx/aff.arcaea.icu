var $ = mdui.$;

document.getElementById('btn-generate').addEventListener('click', function () {
    let ajaxdata = {
        arcstring: document.getElementById('text-arcstring').value,
        count: document.getElementById('text-count').value
    };
    let start = document.getElementById('text-start').value;
    let stop = document.getElementById('text-stop').value;
    if (start !== '') {
        ajaxdata.start = start;
    }
    if (stop !== '') {
        ajaxdata.stop = stop;
    }

    // console.log(ajaxdata);

    $.ajax({
        method: 'GET',
        url: 'https://api.arcaea.icu/aff/arc/split',
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