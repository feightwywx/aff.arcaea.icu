var windowLoad = function () {

    /*执行I18n翻译*/
    execI18n();

    /*将语言选择默认选中缓存中的值*/
    $("#language option[value=" + i18nLanguage + "]").attr("selected", true);

    /* 选择语言 */
    Array.prototype.slice.call($(".lang-switch-btn")).forEach(element => {
        // console.log(element);
        $(element).on('click', function () {
            var language = $(element).attr('value');
            // console.log(language);
            getCookie("userLanguage", language, {
                expires: 30,
                path: '/'
            });
            location.reload();
        });
    });

    // 注册文本框检查事件
    let inputlist = document.getElementsByClassName('mdui-textfield-input');
    if (inputlist !== null) {
        Array.prototype.slice.call(inputlist).forEach(element => {
            element.addEventListener('input', function () {
                check_invalid();
            });
        });
    }

    // 注册more-settings开关事件
    let coll = new mdui.Collapse('#collapse');
    let toggle = document.getElementById('more-settings-toggle')

    if (toggle !== null) {
        document.getElementById('more-settings-toggle').addEventListener('click', function () {
            coll.toggle('#more-settings-item');
        });
    }

    mdui.mutation();
    mdui.$('#page-progress').hide();
}

$(windowLoad());