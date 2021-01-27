
'use strict';

let gulp= require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass');

    gulp.task('pug', function(){
        return gulp.src('src/pug/index.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('app/'));
    })
    
    gulp.task('sass', function(){
        return gulp.src('src/sass/*.sass')
        .pipe(sass({
            pretty:true
        }))
        .pipe(gulp.dest('app/style'));
    });
    
    gulp.task('watch', function () {
        gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
        gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
        
    })
    
    gulp.task('default', gulp.series (
        gulp.parallel('pug','sass'),
        gulp.parallel( 'watch')
    ));