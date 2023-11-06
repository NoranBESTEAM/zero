import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Normalize
import "normalize.css";
// import flag icon
import FlagIcon from "vue-flag-icon";
// import Wow Library
import 'animate.css';
// import Navbar Component
import Navbar from "@/components/layouts/Navbar.vue";
// import Footer Component
import Footer from "@/components/layouts/Footer.vue";
//import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";
//import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import specific icons
//Regular Icons
import { far } from "@fortawesome/free-regular-svg-icons";
//Solid Icons
import { fas } from "@fortawesome/free-solid-svg-icons";
//Brands Icons
import { fab } from "@fortawesome/free-brands-svg-icons";
//add icons to the library
library.add(fas, far, fab);

const app = createApp(App);
app.use(store);
//Add font awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);
// Add Flag Icon
app.use(FlagIcon);
//Add Navbar Component
app.component('Navbar', Navbar)
// Add Footer Component
app.component('Footer', Footer) 
app.use(router);
app.mount("#app");
