// default settings. fis3 release
// fis.set('project.charset', 'utf8');
// fis.set('project.fileType.text', 'htm');
fis.set('project.ignore', ['/fis-conf.js', '/css/**.less', '/node_modules/**', '/**/**.cs','.jshintrc','**eb.*.config']);
fis.config.set('settings.optimizer.uglify-js', {
    mangle: false
});

// Global start
fis.match('/css/**.css', {
    release: '/static$0',
    useHash: true
});

fis.match('/css/**.css.map', {
    release: '/static$0'
});

// fis.match('/widget/**', {
//     release: false
// });

// fis.match('/widget/aio.js', {
//     release: '/static$0',
//     useHash: true
// });

fis.match('/widget/*/*.js', {
    packTo: '/static/widget/aio.js',
    optimizer: fis.plugin('uglify-js'),
    useHash: true
});


fis.match('/images/**', {
    release: '/static$0',
    useHash: true
});

// Global end

// Publish start
// fis.media('pub').match('/inc/**', {
//     url: '$0',
//     // domain: 'http://wechat.ieye.net.cn'
// });

// fis.media('pub').match('{/css/**,/images/**,/widget/**}', {
//     url: '/static$0',
//     // domain: 'http://wechat.ieye.net.cn/static'
// });

// fis.media('pub').match('/widget/**.js', {
//     optimizer: fis.plugin('uglify-js')
// });

// fis.media('pub').match('/images/**.png', {
// optimizer: fis.plugin('png-compressor')
// });

fis.media('pub').match('/css/**.css', {
    optimizer: fis.plugin('clean-css')
});

fis.media('pub').match('*.html', {
    optimizer: fis.plugin('html-compress')
})
