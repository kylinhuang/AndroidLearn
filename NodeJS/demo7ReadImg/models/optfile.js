/**
 * Created by kylinhuang on 01/03/2017.
 */
var  fs=  require('fs');
module.exports={
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,  file)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                console.log("输出文件");
                //res.writeHead(200,  {'Content-Type':'image/jpeg'});
                res.write(file,'binary');
                res.end();
            }
        });
    }
};