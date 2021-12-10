import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css';

createApp(App).mount('#app')


document.querySelector("#toggle").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector("#overlay").classList.toggle("open");
  })