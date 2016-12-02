var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    runSequence = require('run-sequence'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    change = require('gulp-change'),
    htmlreplace = require('gulp-html-replace');

/* Gulp build tasks */

gulp.task('default', ['build-default']);

gulp.task('build-default', () => {
    runSequence('copy', 'server-default', 'transpile');
});

gulp.task('build-production', () => {
    runSequence('copy', 'server-production', 'transpile');
});

gulp.task('server-default', () => {
    return gulp.src('./server.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('server-production', () => {
    return gulp.src('./server.js')
        .pipe(change(function(content) {
            return content.replace('development', 'production');
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['clean'], () => {
    return gulp.src([
            // Includes
            './**/**/*',
            '.bowerrc',

            // Excludes (manually compiled/treated)
            '!node_modules/**/*',
            '!node_modules/',
            '!gulpfile.js',
            '!server.js',
            '!public/css/**/*',
            '!public/css/',
            '!public/vendor/**/*',
            '!public/vendor/',
            '!public/js/app/**/*',
            '!server/views/scripts.pug'
        ])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('transpile', ['stylus', 'js', 'js-ref']);

gulp.task('stylus', () => {
    gulp.src('./public/css/stylus/main.styl')
        .pipe(stylus())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min', basename: 'routesApp'}))
        .pipe(gulp.dest('./dist/public/css/'));

});

gulp.task('js', function () {
    return gulp.src('./public/js/app/**/*.js')
        .pipe(uglify())
        .pipe(concat('routesApp.min.js'))
        .pipe(gulp.dest('./dist/public/js/app'));
});

gulp.task('js-ref', function () {
    return gulp.src('server/views/scripts.pug')
        .pipe(htmlreplace({
            'angular-app': {
                src: '/js/app/routesApp.min.js',
                tpl: 'script(type="text/javascript", src="%s")'
            }
        }))
        .pipe(gulp.dest('./dist/server/views/'));
});

/* Gulp development tasks */

gulp.task('build-dev', ['stylus-dev']);

gulp.task('stylus-dev', ['clean-stylus-dev'], () => {
    gulp.src('./public/css/stylus/main.styl')
        .pipe(stylus())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min', basename: 'routesApp'}))
        .pipe(gulp.dest('./public/css/'));

});
gulp.task('clean-all', ['clean', 'clean-dev']);

gulp.task('clean-dev', ['clean-stylus-dev']);

gulp.task('clean-stylus-dev', () => {
    return gulp.src('./public/css/build/')
        .pipe(clean());
});

gulp.task('dev-watch', ['stylus-watch']);

gulp.task('stylus-watch', ['stylus-dev'], () => {
    gulp.watch(['./public/css/stylus/**/*.styl'], ['stylus-dev']);
});