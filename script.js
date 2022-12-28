//your code here
function wordCount(){
    var text = document.getElementById("evaluatedText").value;
   
  
let splits =text.trim().split(' ');

let count=0;

for(let i=0;i<splits.length;i++){
    
    if(splits[i] != ""){
        count ++;
     }
    let inres =document.getElementById("wordCount");
    inres.innerHTML =count;
    
   
}
}