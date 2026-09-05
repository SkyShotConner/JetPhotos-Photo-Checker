// V9.1.1 image-loading patch
// The main V9.1 engine referenced the preview canvas before defining it.
const canvas=document.querySelector('#previewCanvas');
const ctx=canvas?.getContext('2d',{willReadFrequently:true});
if(canvas&&ctx&&typeof init==='function')init();
