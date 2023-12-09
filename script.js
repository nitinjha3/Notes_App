let notes_container=document.querySelector(".note")
let button=document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box")

function show(){
    notes_container.innerHTML=localStorage.getItem("nota")
    // console.log("hello");
}
show()
function updateStorage(){
    localStorage.setItem("nota",notes_container.innerHTML)
}

console.log(notes_container);

button.addEventListener("click",()=>{
    let input_box=document.createElement("p")
    let img=document.createElement("img")
    input_box.className="input-box"
    input_box.setAttribute("contenteditable","true")
    img.src="images/delete.png"
    notes_container.appendChild(input_box).appendChild(img)    
})

notes_container.addEventListener("click",function(e){
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown",function(e){
    if(e.key==="Enter")
    {
        document.execCommand("insertLineBreak")
        e.preventDefault();
    }
})




