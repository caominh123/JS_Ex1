var a = "This is a sentence 48ascd with 12 and se789 and lk890kl end";
var b = _.split(a," ");//cat a ra thanh mang cac phan tu
var c = _.clone(b);
    for (var x of b) {
        var i = 0, f = false;
        while(i < x.length -1){
            if((_.toInteger(x[i])>0 && _.toInteger(x[i+1])==0)||(_.toInteger(x[i]) == 0 && _.toInteger(x[i+1])>0)) {
                f=true;
                break;     
            } else {
                 i++;
                }
        }
        if(f==false)
            var senc = _.pull(c,x);    
        }
        
 console.log("Matchted words: " +"'"+ c+ "'");
 var d = [];
 for (var x of c) {
    
    d.push(_.kebabCase(x));
 }
 console.log("Variation with '-' character: " + "'" +  d + "'" );
