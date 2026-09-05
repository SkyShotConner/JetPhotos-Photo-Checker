(()=>{
'use strict';
const input=document.querySelector('#photoInput');
const button=document.querySelector('#chooseBtn');
if(!input||!button)return;
const openPicker=(e)=>{e?.preventDefault();try{if(typeof input.showPicker==='function')input.showPicker();else input.click()}catch(_){input.click()}};
button.addEventListener('click',openPicker,{capture:true});
button.setAttribute('role','button');
button.setAttribute('tabindex','0');
button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPicker(e)}},{capture:true});
})();
