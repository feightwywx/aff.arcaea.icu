var genChartOffset = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        aff: document.getElementById('text-aff').value,
        offset: document.getElementById('text-offset').value
    };

    getResult(ajaxdata, 1000000, 'POST');
}

var genChartMirror = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        aff: document.getElementById('text-aff').value,
    };

    getResult(ajaxdata, 1000000, 'POST');
}

var genChartAlign = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        aff: document.getElementById('text-aff').value,
        bpm: document.getElementById('text-bpm').value,
        error: document.getElementById('text-error').value,
        lcd: document.getElementById('text-lcm').value,
    };

    getResult(ajaxdata, 1000000, 'POST');
}

var genTimeResult = function () {
    time = Number(document.getElementById('tc-text-start-time').value);
    bpm = Number(document.getElementById('tc-text-bpm').value);
    count = Number(document.getElementById('tc-text-count').value);
    // console.log('hit: ' + String(time) + ' ' + String(bpm) + ' ' + String(count))

    let result = 0;
    result = 60000 / bpm / count + time; 
    resultTextfield = document.getElementById('tc-text-result');
    resultTextfield.value = result;
}

var timeCalCopyClose = function () {
    let textResult = document.getElementById('tc-text-result');
    textResult.removeAttribute('disabled');
    textResult.select();
    document.execCommand("copy");
    textResult.disabled = true;
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

    getResult(ajaxdata, 5000, 'GET', 'arc/split');
}

var genArcSplitByTiming = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        arc: document.getElementById('text-arc').value,
        timings: document.getElementById('text-timings').value
    };

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

var genArcAnimate = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        arc: document.getElementById('text-arcstring').value,
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        delta_x: document.getElementById('text-delta-x').value,
        delta_y: document.getElementById('text-delta-y').value,
        basebpm: document.getElementById('text-basebpm').value,
        easing_x: document.getElementById('sel-x-easing').value,
        easing_y: document.getElementById('sel-y-easing').value,
        easing_offset_t: document.getElementById('sel-t-easing').value
    }

    let easing_b_point_x = document.getElementById('text-easing-b-point-x').value;
    if (easing_b_point_x !== '') {
        ajaxdata.easing_b_point_x = easing_b_point_x;
    }

    let easing_b_point_y = document.getElementById('text-easing-b-point-y').value;
    if (easing_b_point_y !== '') {
        ajaxdata.easing_b_point_y = easing_b_point_y;
    }

    let offset_t = document.getElementById('text-offset-t').value;
    if (offset_t !== '') {
        ajaxdata.offset_t = offset_t;
    }

    let delta_offset_t = document.getElementById('text-delta-offset-t').value;
    if (delta_offset_t !== '') {
        ajaxdata.delta_offset_t = delta_offset_t;
    }

    let easing_b_point_offset_t = document.getElementById('text-easing-b-point-offset-t').value;
    if (easing_b_point_offset_t !== '') {
        ajaxdata.easing_b_point_offset_t = easing_b_point_offset_t;
    }

    let infbpm = document.getElementById('text-infbpm').value;
    if (infbpm !== '') {
        ajaxdata.infbpm = infbpm;
    }

    let framerate = document.getElementById('text-framerate').value;
    if (framerate !== '') {
        ajaxdata.framerate = framerate;
    }

    let fake_note_t = document.getElementById('text-fake-note-t').value;
    if (fake_note_t !== '') {
        ajaxdata.fake_note_t = fake_note_t;
    }

    console.log(ajaxdata);
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

    getResult(ajaxdata, 5000, 'GET', 'arc/crease-line');
}

var genArc = function () {
    document.getElementById('ac-btn-generate').disabled = 'disabled';
    let skyline_checked = document.getElementById('ac-skyline').checked;
    let ajaxdata = {
        start: document.getElementById('ac-text-start-time').value,
        stop: document.getElementById('ac-text-stop-time').value,
        start_x: document.getElementById('ac-text-start-x').value,
        stop_x: document.getElementById('ac-text-stop-x').value,
        start_y: document.getElementById('ac-text-start-x').value,
        stop_y: document.getElementById('ac-text-stop-y').value,
        easing: document.getElementById('sel-ac-easing').value,
        color: document.getElementById('sel-ac-color').value,
        skyline: skyline_checked
    }

    let arctap = document.getElementById('text-ac-arctap').value;
    if (skyline_checked && arctap !== '') {
        ajaxdata.arctap = arctap;
    }

    getResult(ajaxdata, 5000, 'GET', 'arc/construct', 'ac-text-result', 'ac-btn-generate');
}

var genTimingEasing = function () {
    document.getElementById('btn-generate').disabled = 'disabled';

    let ajaxdata = {
        start: document.getElementById('text-start').value,
        stop: document.getElementById('text-stop').value,
        start_bpm: document.getElementById('text-start-bpm').value,
        stop_bpm: document.getElementById('text-stop-bpm').value,
        count: document.getElementById('text-count').value,
        easing: document.getElementById('sel-mode').value
    };
    let bar = document.getElementById('text-bar').value;
    let easing_b_point = document.getElementById('text-easing-b-point').value;
    if (bar !== '') {
        ajaxdata.bar = bar;
    }
    if (easing_b_point !== '') {
        ajaxdata.easing_b_point = easing_b_point
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
