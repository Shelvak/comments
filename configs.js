var inputs = document.querySelectorAll('input'),
    i;

for (i = 0; i < inputs.length; i++) {
    var input = inputs[i],
        value = localStorage[input.name] || '';

    if (input.type === 'checkbox') {
        input.checked = value == 'true';
    }
    input.value = value;

    inputs[i].addEventListener('change', function(e){
        var element = e.currentTarget,
            value = element.value;

        if (element.type === 'checkbox') {
            value = element.checked;
        }

        localStorage[element.name] = value;
    });
}
