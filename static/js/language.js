var $ = jQuery;

var kitUIArray = [
    'chart-offset',
    'chart-mirror',
    'chart-align',
    'arc-split',
    'arc-splitbytiming',
    'arc-cutter',
    'arc-rain',
    'arc-crease-line',
    'arc-animate',
    'timing-easing',
    'timing-glitch'
];

/**
 * cookie操作
 */
var getCookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var s = [cookie, expires, path, domain, secure].join('');
        var secure = options.secure ? '; secure' : '';
        var c = [name, '=', encodeURIComponent(value)].join('');
        var cookie = [c, expires, path, domain, secure].join('')
        document.cookie = cookie;
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/**
* 获取浏览器语言类型
* @return {string} 浏览器国家语言
*/
var getNavLanguage = function () {
    if (navigator.appName == "Netscape") {
        var navLanguage = navigator.language;
        return navLanguage.substr(0, 2);
    }
    return false;
}

/**
* 设置语言类型： 默认为中文
*/
var i18nLanguage = "zh-CN";

/*
设置一下网站支持的语言种类
*/
var webLanguage = ['zh-CN', 'en'];

var execI18n = function () {
    // var optionEle = $("#i18n_pagename");
    // if (optionEle.length < 1) {
    //     // console.log("未找到页面名称元素，请在页面写入\n <meta id=\"i18n_pagename\" content=\"页面名(对应语言包的语言文件名)\">");
    //     return false;
    // };
    // var sourceName = optionEle.attr('content');
    // sourceName = sourceName.split(',');

    var sourceName = [];
    if (window.location.pathname == '/') {
        sourceName.push('index')
    } else {
        var i18nModuleName = window.location.pathname.substring(1); // e.g. "/chart-offset".substring(1)
        if ($.inArray(i18nModuleName, kitUIArray) != -1) {
            sourceName.push('kit-ui');
        }
    }
    sourceName.push('common');


    if (getCookie("userLanguage")) {
        i18nLanguage = getCookie("userLanguage");
    } else {
        // 获取浏览器语言
        var navLanguage = getNavLanguage();
        if (navLanguage) {
            // 判断是否在网站支持语言数组里
            var charSize = jQuery.inArray(navLanguage, webLanguage);
            if (charSize > -1) {
                i18nLanguage = navLanguage;
                // 存到缓存中
                getCookie("userLanguage", navLanguage);
            };
        } else {
            // console.log("not navigator");
            return false;
        }
    }

    if (jQuery.i18n == undefined) {
        // console.log("请引入i18n js 文件")
        return false;
    };

    /*
    这里需要进行i18n的翻译
     */
    jQuery.i18n.properties({
        name: sourceName, //资源文件名称
        path: 'lang/' + i18nLanguage + '/', //资源文件路径
        mode: 'map', //用Map的方式使用资源文件中的值
        language: i18nLanguage,
        callback: function () {//加载成功后设置显示内容
            var i18nInsertEle = $(".i18n");
            // console.log(".i18n 写入中...");
            i18nInsertEle.each(function () {
                // 根据i18n元素的 name 获取内容写入
                // console.log(this);
                // console.log(jQuery.i18n.prop($(this).attr('name')));
                $(this).html(jQuery.i18n.prop($(this).attr('name')));
            });
            // console.log("写入完毕");

            // console.log(".i18n-input 写入中...");
            var i18nInputinsertEle = $(".i18n-input");
            i18nInputinsertEle.each(function () {
                // 根据i18n元素的 name 获取内容写入
                $(this).attr('placeholder', jQuery.i18n.prop($(this).attr('name')));
            });

            var i18nInputinsertEle = $(".i18n-tooltip");
            i18nInputinsertEle.each(function () {
                // 根据i18n元素的 name 获取内容写入
                let tip = "{content: '" + jQuery.i18n.prop($(this).attr('name')) + "'}";
                $(this).attr('mdui-tooltip', tip);
            });
            /*
            var insertInputEle = $(".i18n-input");
            insertInputEle.each(function() {
                var selectAttr = $(this).attr('selectattr');
                if (!selectAttr) {
                    selectAttr = "value";
                };
                $(this).attr(selectAttr, $.i18n.prop($(this).attr('selectname')));
            });
            */
            // console.log("写入完毕");
            
        },
        async: true
    });

};
