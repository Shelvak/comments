var inputs = document.querySelectorAll('input'),
    i,

    saveConfig = function(data) {
        chrome.storage.sync.set(data, function() {
            var _status = document.getElementById('status');

            _status.textContent = 'Options saved.';

            setTimeout(function() {
                _status.textContent = '';
            }, 2000);
        });
    },

    restoreConfig = function(input) {
        var field = input.name;

        chrome.storage.sync.get('tuentiUanConfig', function(config) {
            value = config['tuentiUanConfig'][field] || '';

            if (value) {
                if (input.type === 'checkbox') {
                    input.checked = value;
                }

                input.value = value;
            }
        });
    };

for (i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    restoreConfig(input);

    inputs[i].addEventListener('change', function(e){
		var data = {tuentiUanConfig: {}},
            element = e.currentTarget,
            value = element.value;

        if (element.type === 'checkbox') {
            value = element.checked;
        }

		data.tuentiUanConfig[element.name] = value;

        saveConfig(data);
    });
}
