import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",o=>{o.preventDefault();const t=Number(s.delay.value),r=s.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(t):m(t)},t)}).then(e=>{i.success({title:"Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map