var path = require('path'),
    gulp = require('gulp'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    webpack = require('webpack'),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    imagemin = require('gulp-imagemin'),
    zip = require('gulp-zip');


var paths = {
    src: {
        base: './src',
        html: './src',
        css: './src/assets/scss',
        js: './src/assets/js',
        uploads: './src/uploads',
        images: './src/assets/images',
        fonts: './src/assets/fonts'
    },
    temp: {
        base: './temp',
        html: './temp',
        css: './temp/assets/css',
        js: './temp/assets/js'
    },
    dist: {
        base: './dist',
        html: './dist',
        css: './dist/assets/css',
        js: './dist/assets/js',
        uploads: './dist/uploads',
        images: './dist/assets/images',
        fonts: './dist/assets/fonts'
    }
};
var errorHandler = {
    errorHandler: notify.onError({
        title: '<%= error.plugin %>',
        message: "<%= error.message %>"
    })
};

var autoprefixerConfig = ['last 2 versions'];

function getWebpackConfig(ENV) {
    var webpackConfig = {
        context: path.resolve(__dirname, paths.src.js),
        entry: {
            'main': './main'
            //'inner': './inner'
        },

        output: {
            path:     path.resolve(__dirname, (ENV === 'PROD' ? paths.dist.js : paths.temp.js)),
            filename: '[name].js'
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        plugins: ['transform-runtime'],
                        presets: ['es2015', 'stage-0']
                    }
                }
            ]
        },

        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],

        resolve: {
            modulesDirectories: ['node_modules', 'bower_components'],
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
            alias: {
                jquery: 'jquery/dist/jquery.min'
                //threejs: 'three.js/build/three.js'
            }
        },

        devtool: ENV === 'PROD' ? 'cheap-source-map' : 'cheap-inline-module-source-map'
    };

    if (ENV === 'PROD') {
        webpackConfig.plugins.push(
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        );
    }

    return webpackConfig;
}

// clean dist
function cleanDist() {
    return gulp
        .src(paths.dist.base, { read: false })
        .pipe(clean({ force: true }));
}

function cleanTemp() {
    return gulp
        .src(paths.temp.base, { read: false })
        .pipe(clean({ force: true }));
}

// watch files
function watchFiles(cb) {
    var checkUnderscore = /(\/|\\)_/;
    watch(paths.src.html + '/templates/**/*.pug', function(file) {
        if (checkUnderscore.test(file.relative)) {
            gulp.start('pugAllDEV');
        } else {
            gulp.start('pugPagesDEV');
        }
    });
    watch(paths.src.css + '/**/*.scss', function() {
        gulp.start('sassDEV');
    });
    watch(paths.src.js + '/**/*.js', function() {
        gulp.start('jsDEV');
    });
    watch(paths.src.html + '/*.html', function() {
        gulp.start('copyHTML');
    });

    cb();
}

function initServerDEV(cb) {
    browserSync.init({
        server: {
            baseDir: [paths.temp.base, paths.src.base],
            directory: true
        },
        reloadDelay: 300,
        open: true,
        reloadOnRestart: true,
        notify: false,
        files: [
            paths.src.uploads + '/*',
            paths.src.images + '/*',
            paths.src.fonts + '/*',
            paths.temp.html + '/*.html',
            paths.temp.css + '/*.css',
            paths.temp.js + '/*.js'
        ]
    });

    cb();
}

function initServerPROD(cb) {
    browserSync.init({
        server: {
            baseDir: paths.dist.base,
            directory: true
        },
        open: true
    });

    cb();
}

function sassPROD(done) {
    var stream = gulp
        .src(paths.src.css + '/**/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(postcss([
            autoprefixer({ browsers: autoprefixerConfig })
        ]))
        .pipe(cleanCSS())
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.dist.css));

    stream.on('end', function() {
        done();
    });
    stream.on('error', function(err) {
        done(err);
    });
}

function sassDEV(done) {
    var stream = gulp
        .src(paths.src.css + '/**/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(postcss([
            autoprefixer({ browsers: autoprefixerConfig })
        ]))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.temp.css));

    stream.on('end', function() {
        done();
    });
    stream.on('error', function(err) {
        done(err);
    });
}

function buildJS(ENV) {
    return function(cb) {
        webpack(getWebpackConfig(ENV), function(err, stats) {
            if (err) {
                gutil.beep();
                throw new gutil.PluginError('webpack', err);
            }

            gutil.log('[webpack]\n', stats.toString({
                colors: true,
                chunks: false,
                hash: false,
                version: false,
                timings: false
            }), '\n');
            cb();
        });
    };
}

function pugAllDEV(done) {
    var stream = gulp
        .src(paths.src.html + '/templates/**/[^_]*.pug')
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.bold.red(error.message));
            gutil.beep();
            this.emit('end');
        }))
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.temp.html));

    stream.on('end', function() {
        done();
    });
    stream.on('error', function(err) {
        done(err);
    });
}

function pugPagesDEV(done) {
    var stream = gulp
        .src(paths.src.html + '/templates/**/[^_]*.pug')
        .pipe(changed(
            paths.temp.html,
            { extension: '.html' }
        ))
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.bold.red(error.message));
            gutil.beep();
            this.emit('end');
        }))
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.temp.html));

    stream.on('end', function() {
        done();
    });
    stream.on('error', function(err) {
        done(err);
    });
}

function pugAllPROD(done) {
    var stream = gulp
        .src(paths.src.html + '/templates/**/[^_]*.pug')
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.bold.red(error.message));
            gutil.beep();
            this.emit('end');
        }))
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.dist.html));

    stream.on('end', function() {
        done();
    });
    stream.on('error', function(err) {
        done(err);
    });
}

function buildAssets(cb) {
    gulp.src(paths.src.uploads + '/**/*')
        .pipe(gulp.dest(paths.dist.uploads));

    gulp.src(paths.src.images + '/**/*')
         .pipe(gulp.dest(paths.dist.images));

    gulp.src(paths.src.images + '/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(paths.dist.images));

    gulp.src(paths.src.fonts + '/**/*')
        .pipe(gulp.dest(paths.dist.fonts));

    //gulp.src(paths.src.js + '/vendors/**/*')
    //    .pipe(gulp.dest(paths.dist.js + '/vendors'));

    cb();
}

function copyHTML() {
    return gulp
        .src(paths.src.html + '/*.html')
        .pipe(changed(
            paths.dist.html,
            { extension: '.html' }
        ))
        .pipe(gulp.dest(paths.dist.html));
}

// help tasks
gulp.task('cleanDist', cleanDist);
gulp.task('cleanTemp', cleanTemp);
gulp.task('sassDEV', sassDEV);
gulp.task('pugAllDEV', pugAllDEV);
gulp.task('pugPagesDEV', pugPagesDEV);
gulp.task('pugAllPROD', pugAllPROD);
gulp.task('jsDEV', buildJS('DEV'));
gulp.task('jsPROD', buildJS('PROD'));
gulp.task('initServerDEV', initServerDEV);
gulp.task('watchFiles', watchFiles);
gulp.task('copyHTML', copyHTML);

gulp.task('buildAssets', buildAssets);
gulp.task('sassPROD', sassPROD);

// scripts
gulp.task('serve', function(cb) {
    runSequence(
        'cleanTemp',
        ['sassDEV', 'pugAllDEV', 'jsDEV', 'copyHTML'],
        'initServerDEV',
        'watchFiles',
        cb
    );
});

gulp.task('build', function(cb) {
    runSequence(
        'cleanDist',
        ['sassPROD', 'pugAllPROD', 'jsPROD', 'buildAssets'],
        cb
    );
});

gulp.task('server', initServerPROD);

gulp.task('zip', function () {
    gulp.src(['./**/*', '!node_modules/**/*', '!node_modules', '!temp/**/*', '!temp'])
    .pipe(zip('markup.zip'))
    .pipe(gulp.dest('./'))
});
