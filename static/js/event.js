var genChartOffset = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        aff: document.getElementById('text-aff').value,
        offset: document.getElementById('text-offset').value
    };

    getResult(ajaxdata, 1000000, 'POST');
}

var genArcCutter = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        arcstring: document.getElementById('text-arcstring').value,
        count: document.getElementById('text-count').value,
    };
    let start = document.getElementById('text-start').value;
    let stop = document.getElementById('text-stop').value;
    if (start !== '') {
        ajaxdata.start = start;
    }
    if (stop !== '') {
        ajaxdata.stop = stop;
    }

    getResult(ajaxdata);
}

var genArcRain = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        step: document.getElementById('text-step').value,
    };
    let length = document.getElementById('text-length').value;
    if (length !== '') {
        ajaxdata.length = length;
    }

    getResult(ajaxdata);
}

var genArcCrease = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

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

    getResult(ajaxdata);
}

var genTimingEasing = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        start_bpm: document.getElementById('text-start-bpm').value,
        stop_bpm: document.getElementById('text-stop-bpm').value,
        count: document.getElementById('text-count').value,
    };
    let bar = document.getElementById('text-bar').value;
    if (bar !== '') {
        ajaxdata.bar = bar;
    }

    getResult(ajaxdata);
}

var genTimingGlitch = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

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

    getResult(ajaxdata);
}
