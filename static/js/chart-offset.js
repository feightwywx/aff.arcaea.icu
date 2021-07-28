var $ = mdui.$;


document.getElementById('btn-generate').addEventListener('click', function () {
    this.disabled = 'disabled';
    let ajaxdata = {
        aff: document.getElementById('text-aff').value,
        offset: document.getElementById('text-offset').value
    };

    console.log(ajaxdata);

    let spinner = document.createElement('div');
    spinner.classList.add('mdui-spinner');
    spinnerContainer = document.getElementById('div-spinner');
    spinnerContainer.appendChild(spinner);
    mdui.mutation();

    $.ajax({
        method: 'POST',
        url: 'http://api.arcaea.icu/aff/chart/offset',
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
        error: function () {
            mdui.alert('遇到了未知错误');
        },
        timeout: 100000,
        complete: function () {
            spinnerContainer.innerHTML = "";
            document.getElementById('btn-generate').removeAttribute('disabled');
        }
    });
});