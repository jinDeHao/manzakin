
 function Wlik(show){
      let nmb  
      nmb=prompt('enter your mark','mark')
         if(nmb>=10 && nmb <20){
           alert("you are succed")
          }
         else if(nmb<10){
         alert("you are failed")
         }
        else{
         alert("enter your real one")
         }
}
 function but(){
                let ar,fr,math,sprt,geo,svt,pc,is,ps,inf;
                let gen,tot;
                ar=document.getElementById("AR")
                fr=document.getElementById("FR")
                math=document.getElementById("MT")
                sprt=document.getElementById("SP")
                geo=document.getElementById("GE")
                svt=document.getElementById("SVT")
                pc=document.getElementById("PC")
                is=document.getElementById("IS")
                ps=document.getElementById("PS")
                inf=document.getElementById("INF")
                gen=ar.value*(5/29) + fr.value*(5/29) + math.value*(5/29) + sprt.value*(2/29) + geo.value*(3/29) + svt.value*(3/29) + pc.value*(2/29) + is.value*(2/29) + ps.value/29 + inf.value/29;
                tot=gen.toFixed(2)
                bodi.innerHTML= ('المعدل العام هو'+ tot)
                // alert("your general mark is: "+tot)
                // let b,T,n
                // b=prompt('note')
                // n=prompt('bote')
                // T=b+n
                // alert(T)
}
function Tlk(){
       let bodi =document.getElementById("bodi")
         bodi.innerHTML='<br><br><br><br><br><br><center><label class="VP" for="VP">username :</label></center>'+
		                         '<center><input type="text" name="fN" id="fN"><br><br></center>'+
		                       '<center><label class="VP" for="VP">password :</label></center>'+
		                         '<center><input type="password" name="P" id="P"><br><br></center>'+
		                       '<center><label class="VP" for="VP">Ressaisir your <br>password :</label></center>'+
		                         '<center><input type="password" name="P0" id="P0"><br><br></center>'+
                                '<center><button type="button" onClick="but()">click here !</button></center>'+
                                '<p class="output" id="output1"></p>'

}
const p =document.getElementById("P")
const p0 =document.getElementById("P0")
const nam =document.getElementById("fN")
const out =document.getElementById("output1")
function logn(){
        if(nam.value==('omaridhmaid') && p.value==('omarnem') && p.value==p0.value){
            out.innerHTML = "مرحبا بالسيد عمر و كل التمنيات بأن يكون يومك ممتاز"
        }
         else if(p.value==p0.value){
           out.innerHTML ="hi " +nam.value+ " how are you doing";
         }
         else{
             alert("that is not your password " +nam.value+ " bo tkhlilt")
         }
}