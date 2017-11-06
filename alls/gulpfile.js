var gulp =require('gulp')
var webserver =require('gulp-webserver') //引入模块
var urlt =require('url') //引入解析地址参数
var fs =require('fs')

gulp.task('webServer',function(){
    gulp.src('.')
        .pipe(webserver({
            host:"localhost",
            port:"9999",
            middleware:function(req,res,next){
            var obj = urlt.parse(req.url).pathname;
                if(obj === 'index'){
                        res.end(fs.readFileSync('./data.json'))
                }else{
                    next()
                }
            }
        }))
})

