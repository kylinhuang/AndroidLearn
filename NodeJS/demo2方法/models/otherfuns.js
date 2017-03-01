module.exports ={

    getVisit:function(){
        return  visitnum++;
    },

    add:function(a,b){
        return  a+b;
    },
    fun3: function(req,res){
        console.log('call');
    }
}  