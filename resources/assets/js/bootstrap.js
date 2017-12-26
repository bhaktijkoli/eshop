try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


// Scripts
require('./scripts/bootstrap.js');
require('./scripts/material.min.js');
require('./scripts/material-kit.js');
require('./scripts/select2.full');
require('./scripts/formhandler');
require('./scripts/modal');
require('./scripts/jquery.validate');
require('./scripts/jquery.fancybox');
