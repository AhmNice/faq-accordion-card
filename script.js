const btn1 = document.getElementById("btn1");
const text1 = document.getElementById("text");
const btn2 = document.getElementById('btn2');
const text2 = document.getElementById("text2");
const btn3 = document.getElementById('btn3');
const text3 = document.getElementById("text3");
const btn4 = document.getElementById('btn4');
const text5 = document.getElementById("text5");
const btn5 = document.getElementById('btn5');

// btn1 function
btn1.addEventListener('click', ()=>{
    if( text2.classList.contains("unhide") || text3.classList.contains("unhide") ||text4.classList.contains("unhide") || text5.classList.contains("unhide") ){
        text2.classList.remove("unhide");
        text3.classList.remove("unhide");
        text4.classList.remove("unhide");
        text5.classList.remove("unhide");
        text1.classList.toggle("unhide");
    }else if( text1.classList.contains("unhide")){
        text1.classList.remove("unhide");
    }else{
        text1.classList.toggle("unhide");
    }
        
})
// btn2 function
btn2.addEventListener('click', ()=>{
    if( text1.classList.contains("unhide") || text3.classList.contains("unhide") ||text4.classList.contains("unhide") || text5.classList.contains("unhide") ){
        text1.classList.remove("unhide");
        text3.classList.remove("unhide");
        text4.classList.remove("unhide");
        text5.classList.remove("unhide");
        text2.classList.toggle("unhide");
    }else if( text2.classList.contains("unhide")){
        text2.classList.remove("unhide");
    }else{
        text2.classList.toggle("unhide");
    }
        
})
// btn3 function
btn3.addEventListener('click', ()=>{
    if( text2.classList.contains("unhide") || text1.classList.contains("unhide") ||text4.classList.contains("unhide") || text5.classList.contains("unhide") ){
        text1.classList.remove("unhide");
        text2.classList.remove("unhide");
        text4.classList.remove("unhide");
        text5.classList.remove("unhide");
        text3.classList.toggle("unhide");
    }else if( text3.classList.contains("unhide")){
        text3.classList.remove("unhide");
    }else{
        text3.classList.toggle("unhide");
    }
        
})
// btn4 function
btn4.addEventListener('click', ()=>{
    if( text2.classList.contains("unhide") || text3.classList.contains("unhide") ||text1.classList.contains("unhide") || text5.classList.contains("unhide") ){
        text2.classList.remove("unhide");
        text3.classList.remove("unhide");
        text1.classList.remove("unhide");
        text5.classList.remove("unhide");
        text4.classList.toggle("unhide");
    }else if( text4.classList.contains("unhide")){
        text4.classList.remove("unhide");
    }else{
        text4.classList.toggle("unhide");
    }
        
})
// btn5 function
btn5.addEventListener('click', ()=>{
    if( text2.classList.contains("unhide") || text3.classList.contains("unhide") ||text4.classList.contains("unhide") || text1.classList.contains("unhide") ){
        text2.classList.remove("unhide");
        text3.classList.remove("unhide");
        text4.classList.remove("unhide");
        text1.classList.remove("unhide");
        text5.classList.toggle("unhide");
    }else if( text1.classList.contains("unhide")){
        text5.classList.remove("unhide");
    }else{
        text5.classList.toggle("unhide");
    }
        
})
