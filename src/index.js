import GenerateHomePage from "../src/homePage";
import GenerateMenuPage from "../src/MenuPage";
import GenerateAboutusPage from "../src/AboutUs";

const content = document.querySelector(".content");
const home_page_button = document.querySelector(".btn-home");
const menu_page_button = document.querySelector(".btn-menu");
const about_us_page_button = document.querySelector(".btn-about-us");
// Load Home Page Defualt
GenerateHomePage(content);
// clean Content
function Cleancontent() {
  while (content.firstChild) content.firstChild.remove();
}
home_page_button.addEventListener("click", () => {
  Cleancontent();
  GenerateHomePage(content);
});
menu_page_button.addEventListener("click", () => {
  Cleancontent();
  GenerateMenuPage(content);
});
about_us_page_button.addEventListener("click", () => {
  Cleancontent();
  GenerateAboutusPage(content);
});
