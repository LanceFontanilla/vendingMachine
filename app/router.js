import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { VendorsController } from "./controllers/VendorsController.js";

export const router = [
  {
    path: '',
    controller: [HomeController, VendorsController],
    view: /*html*/ `
<section class="row justify-content-center">





    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]