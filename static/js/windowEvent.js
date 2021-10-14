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
    let inputlist = document.getElementsByClassName('mdui-textfield-input-card');
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

    // 注册黑线开关事件
    let skyline_checkbox = document.getElementById('ac-skyline');
    let arctap_textbox = document.getElementById('text-ac-arctap');
    skyline_checkbox.addEventListener('change', function () {
        if (document.getElementById('ac-skyline').checked) {
            arctap_textbox.removeAttribute('disabled');
        } else {
            arctap_textbox.disabled = 'disabled';
        }
    });

    // 注册时间计算器事件
    document.getElementById('tc-text-start-time').addEventListener('input', function () {
        genTimeResult();
    });
    document.getElementById('tc-text-bpm').addEventListener('input', genTimeResult);
    document.getElementById('tc-text-count').addEventListener('input', genTimeResult);

    mdui.mutation();

    pjaxCard = $('.pjax-card')[0];
    $(pjaxCard).addClass('pjax-card-loaded');
    $(pjaxCard).css('display', 'block');

    mdui.$('#page-progress').hide();
}

$(windowLoad());