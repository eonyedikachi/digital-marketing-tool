// Setting bold property


function boldd() {
const p=   document.getElementById("comment");
 if(p.style.fontWeight!=="bold"){
 p.style.fontWeight = "bold"
}else{
p.style.fontWeight = "normal"
}
}

// setting ittalize
function ittalize() {
  const  p=   document.getElementById("comment");
    if(p.style.fontStyle!=="italic"){
    p.style.fontStyle = "italic"
   }else{
   p.style.fontStyle = "normal"
   }
   }

// underline
function underline() {
    const  p=   document.getElementById("comment");
      if(p.style.textDecoration!=="underline"){
      p.style.textDecoration = "underline"
     }else{
     p.style.textDecoration = "none"
     }
     }

    //  text-align-right
    
    function tright() {
        const  p=   document.getElementById("comment");
          if(p.style.textAlign!=="right"){
          p.style.textAlign = "right";
         }
        }
    //  text-align-left
    
    function tleft() {
        const  p=   document.getElementById("comment");
          if(p.style.textAlign!=="left"){
          p.style.textAlign = "left";
         }
        }
 //  text-align-center
    
 function tcenter() {
    const  p=   document.getElementById("comment");
      if(p.style.textAlign!=="center"){
      p.style.textAlign = "center";
     }
    }
// font-size

function fontsize(){
const  p=   document.getElementById("comment");
const size = document.getElementById("fontsize").value;
p.style.fontSize= `${size}px`
}

// collecting suggestion content



// collecting data from local storage
let database = JSON.parse(localStorage.getItem("database"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (database == null) {
  database = [];
}

if (currentUser == null) {
  currentUser = [];
}

i=currentUser.legth-1

alert(i)


// unbold= text.style.cssText="Font-weight:100";
//     if(text.style.cssText !=unbold){
//         text.style.cssText=bold
//     }
//            else if( text.style.cssText=bold){
//             text.style.cssText=unbold
//            }
//         }
// setting Itallic
// function itallic(){
//     itallicc= text.style.cssText="font-style: italic;"
//     initallicc= text.style.cssText="font-style: normal";
//     if( text.style.cssText != itallicc){
//         text.style.cssText=itallicc
//     }
// }
