import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "hover.css";
import "./styles/styles.css";
import "regenerator-runtime";
import main from "./script/view/main.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/js/all.js";
AOS.init();

// Web Components
import "./script/components/navbar-menu";
import "./script/components/main-jumbotron";
import "./script/components/category-container";
import "./script/components/search-bar";
import "./script/components/loading-page";
import "./script/components/receipe-detail";
import "./script/components/footer-web";

document.addEventListener("DOMContentLoaded", main);
