let checklist = [];

function check_invalid() {
    checklist = [];
    let fieldlist = document.getElementsByClassName('mdui-textfield');
    let commit_btn = document.getElementById('btn-generate');
    if (commit_btn === null) {
        return;
    }
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
    let inputlist = document.getElementsByClassName('mdui-textfield-input');
    if (inputlist !== null) {
        Array.prototype.slice.call(inputlist).forEach(element => {
            element.addEventListener('input', function () {
                check_invalid();
            });
        });
    }

    mdui.$('#page-progress').hide();
};