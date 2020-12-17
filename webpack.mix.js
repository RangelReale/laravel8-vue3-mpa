const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const applicationBasePath = "./resources/views";
fs.readdirSync('./resources/views').forEach(function (page) {
    let jsDir = applicationBasePath + '/' + page + '/js'

    if (fs.existsSync(jsDir)) {
        fs.readdirSync(jsDir).forEach(function (app) {
            mix.js(`resources/views/${page}/js/${app}/app.js`, `public/js/views/${page}/${app}.js`)
                .extract()
                .vue({ version: 3 })
                .disableNotifications();
        
        })
    }

})

mix.js('resources/js/app.js', 'public/js')
    .alias({
        '@vuecommon': path.join(__dirname, 'resources/js/vuecommon')
    })
    .disableNotifications()
    .extract()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
