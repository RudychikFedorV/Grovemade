AOS.init();

import { initializeDesignJson } from "./modules/design-json.js";
initializeDesignJson();

import { initializeWorkJson } from "./modules/work-json.js";
initializeWorkJson();

document.getElementById("copyright").textContent = new Date().getFullYear();