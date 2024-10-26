import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let timerInterval = null;

const form = document.querySelector('.form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = Number(form.delay.value);
    // console.log(delay);
    const state = form.state.value;
    // console.log(state);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === "fulfilled") {
            resolve(delay);
          } else {
            reject(delay);
          }
        }, delay);
      });
    
      promise
        .then((delay) => {
          iziToast.success({
            title: "Success",
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
          });
        })
        .catch((delay) => {
          iziToast.error({
            title: "Error",
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
          });
        });
    });