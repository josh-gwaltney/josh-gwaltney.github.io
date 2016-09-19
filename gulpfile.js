var config = require('./config.json');

var del = require('del');
var glob = require('glob');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var colors = plugins.util.colors;
var env = plugins.util.env;
var log = plugins.util.log;

gulp.task('help', plugins.taskListing);

gulp.task('clean', function(cb){
    log(colors.blue('Cleaning: ' + config.paths.dist));

    var delPaths = [].concat(config.paths.dist + '**/*.*');
    del(delPaths, cb);
});

gulp.task('analyze', function(){

});

gulp.task('minify:js', function(){
    log('Minifying JavaScript files');
});

gulp.task('minify:css', function(){
    log('Minifying CSS files');
});

gulp.task('compile:test-js', function(){
    log('Building JavaScript files from ES6 source');

    return gulp.src([config.paths.test.client + '**/*.test.js'])
        .pipe(plugins.babel({presets: ['es2015']}))
        .pipe(plugins.concat('test.js'))
        .pipe(gulp.dest(config.paths.dist + 'test/'));
});

gulp.task('compile:test-vendorjs', function(){
    log('Building JavaScript files from ES6 source');

    return gulp.src(config.paths.test.vendorjs)
        .pipe(plugins.concat('vendor.js'))
        .pipe(gulp.dest(config.paths.dist + 'test/'));
});

gulp.task('compile:test-vendorcss', function(){
    log('Building CSS files from source');

    return gulp.src(config.paths.test.vendorcss)
        .pipe(plugins.concat('vendor.css'))
        .pipe(gulp.dest(config.paths.dist + 'test/'));
});

gulp.task('inject:test', function(){
    log('Injecting CSS and JavaScript files in to index.html');

    return gulp.src(config.paths.test.client + 'index.html')
        .pipe(plugins.inject(gulp.src(config.paths.dist + 'test/vendor.js', {read: false}), {ignorePath: 'dist', name: 'vendor'}))
        .pipe(plugins.inject(gulp.src(config.paths.dist + 'test/vendor.css', {read: false}), {ignorePath: 'dist'}))
        .pipe(plugins.inject(gulp.src(config.paths.dist + 'site.js', {read: false}), {ignorePath: 'dist'}))
        .pipe(plugins.inject(gulp.src(config.paths.dist + 'test/test.js', {read: false}), {ignorePath: 'dist', name: 'test'}))
        .pipe(gulp.dest(config.paths.dist + 'test/'));
});

gulp.task('compile:js', function(){
    log('Building JavaScript from source');

    return gulp.src([config.paths.src.js])
        .pipe(plugins.babel({presets: ['es2015']}))
        .pipe(plugins.concat('site.js'))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('compile:css', function(){
    log('Building CSS files from source');

    return gulp.src(config.paths.src.css)
        .pipe(plugins.sass())
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('compile:assets', function(){
    log('Build asset files from source');

    return gulp.src(config.paths.src.assets + '*.png')
        .pipe(gulp.dest(config.paths.dist + 'assets/'));
});

gulp.task('inject', function(){
    log('Injecting CSS and JavaScript files in to index.html');

    return gulp.src('./src/index.html')
        .pipe(plugins.inject(gulp.src(config.paths.dist + 'site.js', {read: false}), {ignorePath: 'dist'}))
        .pipe(plugins.inject(gulp.src(config.paths.dist + 'site.css', {read: false}), {ignorePath: 'dist'}))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', function(){

});

gulp.task('build', ['compile:js', 'compile:css', 'compile:assets', 'inject'], function(){
    log('Building application');

    return gulp.src('')
        .pipe(plugins.notify({
            onLast: true,
            message: 'Code Deployed'
        }));
});

gulp.task('build:test', ['compile:test-vendorjs', 'compile:test-vendorcss', 'compile:test-js', 'inject:test'], function(){
    log('Building client JavaScript tests');

    return gulp.src('')
        .pipe(plugins.notify({
            onLast: true,
            message: 'Tests Built'
        }));
});

gulp.task('serve', function(){
    return plugins.nodemon({
        ignore: ['dist/**/*.*']
    })
        .on('restart', ['build', 'build:test'], function(){})
        .on('start', ['build', 'build:test'], function(){});
});