// document.querySelector("div").addEventListener("mousedown", () => {
//   document.querySelector("p").style = "display:none";
// });

// document.querySelector("div").addEventListener("mouseup", () => {
//   document.querySelector("p").style = "display:block";
// });

// document.querySelector("div").addEventListener("mousemove", (event) => {
//   console.log(event.offsetX, event.offsetY);
// });

let mainBar=document.getElementById('main-bar')
let bar=document.getElementById('bar')
let plus=document.getElementById('plus')
let minus=document.getElementById('minus')
let value=document.getElementById('value')


let scale =38
bar.style=`width:${scale}%`
value.innerText=scale

const getScale=(event)=>{
    scale=event.offsetX /4
    bar.style=`width:${scale}%`
    value.innerText=Math.ceil(scale)
}
mainBar.addEventListener('mousedown', ()=>{
    mainBar.addEventListener('mousemove',getScale)
})
mainBar.addEventListener('mouseup', ()=>{
    mainBar.removeEventListener('mousemove',getScale)
})
document.body.addEventListener('mouseup',()=>{
    mainBar.removeEventListener('mousemove', getScale)
})
