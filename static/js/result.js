const apiBaseUrl = 'https://api.arcaea.icu/aff/';

var getResult = function (ajaxData, timeout = 5000, method = 'GET') {

    spinnerContainer = document.getElementById('div-spinner');
    if (spinnerContainer !== null) {
        let spinner = document.createElement('div');
        spinner.classList.add('mdui-spinner');
        spinnerContainer.appendChild(spinner);
        mdui.mutation();
    }

    let moduleName = window.location.pathname.substring(1); // e.g. "/chart-offset".substring(1)
    let moduleNameList = moduleName.split("-");  // e.g. ['chart', 'offset']
    let apiUrl = apiBaseUrl;
    if (moduleNameList[1] === 'crease') {
        apiUrl += 'arc/crease-line';
    }
    else {
        apiUrl = apiBaseUrl + moduleNameList[0] + '/' + moduleNameList[1];
    }

    mdui.$.ajax({
        method: method,
        url: apiUrl,
        data: ajaxData,
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
        timeout: timeout,
        complete: function () {
            if (spinnerContainer !== null) {
                spinnerContainer.innerHTML = "";
            }
            document.getElementById('btn-generate').removeAttribute('disabled');
        }
    });
}