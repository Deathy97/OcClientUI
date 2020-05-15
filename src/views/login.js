const { remote } = require('electron')
const actions = remote.require('./actions')

const form = document.querySelector('form');
const ocUserInput = document.querySelector('#ocUser');
const ocPasswordInput = document.querySelector('#ocPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var data = {
        ocUser: ocUserInput.value,
        ocPassword: ocPasswordInput.value
    }
    console.log(data)

    actions.insertUserData(data);

})
