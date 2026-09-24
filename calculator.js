const d=document.getElementById("display");let first=null,op=null,wait=false;
function number(n){if(wait||d.value==="0"||d.value==="Error"){d.value=n;wait=false}else d.value+=n}
function decimal(){if(wait||d.value==="Error"){d.value="0.";wait=false}else if(!d.value.includes("."))d.value+="."}
function operator(o){let n=Number(d.value);if(Number.isNaN(n))return;if(first!==null&&!wait){first=operate(first,n,op);d.value=String(first)}else if(first===null)first=n;op=o;wait=true}
function calculate(){if(first===null||op===null)return;let r=operate(first,Number(d.value),op);d.value=Number.isFinite(r)?String(Number(r.toFixed(10))):"Error";first=null;op=null;wait=true}
function operate(a,b,o){if(o==="+")return a+b;if(o==="-")return a-b;if(o==="*")return a*b;if(o==="/")return b===0?Infinity:a/b;return b}
function clearDisplay(){d.value="0";first=null;op=null;wait=false}
function del(){if(!wait&&d.value!=="Error")d.value=d.value.length>1?d.value.slice(0,-1):"0"}
function percent(){if(d.value!=="Error")d.value=String(Number(d.value)/100)}
function sign(){if(d.value!=="0"&&d.value!=="Error")d.value=String(Number(d.value)*-1)}
document.addEventListener("keydown",e=>{if(/[0-9]/.test(e.key))number(e.key);else if(e.key===".")decimal();else if("+-*/".includes(e.key))operator(e.key);else if(e.key==="Enter"||e.key==="=")calculate();else if(e.key==="Escape")clearDisplay();else if(e.key==="Backspace")del();});
