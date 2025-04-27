var counter=document.querySelector(".counter")
let percent=0
updatenum()
function updatenum()
{
counter.textContent=percent+"%";
var bar=document.querySelector(".loading-bar-front");
bar.style.width=percent+"%";
percent+=2;
if(percent<101)
{
setTimeout(updatenum,30)
}
}
