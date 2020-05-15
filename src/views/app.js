const { remote } = require('electron')
const actions = remote.require('./actions')

const form = document.querySelector('form');
const ocPathInput = document.querySelector('#ocPath');
const proyectPathInput = document.querySelector('#proyectPath');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var data = {
        ocPath: ocPathInput.value,
        proyectPath: proyectPathInput.value
    }

    actions.insertSettings(data);

})


