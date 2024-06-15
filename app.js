let inp=document.querySelector("input");
let btn=document.querySelector("#add");
let list=document.querySelector("ul")
btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="x";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    list.appendChild(item);
    inp.value ="";
})

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//           console.log("delted");
//           let par= this.parentElement;
//           par.remove();
//     })
// }   
// this will not delete the newly added eleemtn
// better method is to use event delegation 

let ul=document.querySelector("ul");
ul.addEventListener("click",function(event){
  console.log(event);
   if(event.target.nodeName == "BUTTON"){
    let listItem=event.target.parentElement;
   listItem.remove();
    // console.log("Deleted");
   }
//    else{
//     console.log("noooo");
//    }
})
