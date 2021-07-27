var checklist = [];

function check_invalid () {
    checklist = [];
    var fieldlist = document.getElementsByClassName('mdui-textfield');
    var commit_btn = document.getElementById('btn-generate');
    Array.prototype.slice.call(fieldlist).forEach(element => {
        let textfield_input = element.getElementsByClassName('mdui-textfield-input')[0];
        let input_value = textfield_input.value;
        if (
            element.classList.contains('mdui-textfield-invalid-html5') ||
            (
                (textfield_input.required) && input_value == ""
            )
            ) {
            checklist.push(false);
        } else {
            checklist.push(true);
        };
    });
    if (checklist.indexOf(false) > -1) {
        commit_btn.disabled = 'disabled';
    } else {
        commit_btn.removeAttribute('disabled');
    }
};

window.onload = function () {
    var inputlist = document.getElementsByClassName('mdui-textfield-input');
    Array.prototype.slice.call(inputlist).forEach(element => {
        element.addEventListener('input', function () {
            check_invalid();
        });
    });
};