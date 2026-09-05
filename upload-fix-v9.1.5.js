(()=>{
'use strict';
const input=document.querySelector('#photoInput');
const button=document.querySelector('#chooseBtn');
if(!input||!button)return;
const load=(f)=>{if(!f)return;try{if(typeof window.skyShotLoadPhoto==='function'){window.skyShotLoadPhoto(f);return}}catch(e){console.error('SkyShotConner image loader error',e)}window.dispatchEvent(new CustomEvent('skyshot:load-photo',{detail:f}))};
const openPicker=(e)=>{e?.preventDefault();e?.stopPropagation();try{if(typeof input.showPicker==='function')input.showPicker();else input.click()}catch(_){input.click()}};
button.addEventListener('click',openPicker,{capture:true});
input.addEventListener('change',e=>{const f=e.target.files?.[0];if(f)load(f);e.target.value=''}, {capture:true});
input.addEventListener('input',e=>{const f=e.target.files?.[0];if(f)load(f)}, {capture:true});
button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPicker(e)}},{capture:true});
})();