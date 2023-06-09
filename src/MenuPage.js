function GenerateMenuPage(content) {
  const menu_page = document.createElement("div");
  menu_page.classList.add("menu-section");
  const menu_title = document.createElement("h1");
  menu_title.innerText = "Menu";
  const menu_section_appetizers = document.createElement("div");
  menu_section_appetizers.classList.add("menu_section_appetizers");
  const apptizers_title = document.createElement("h1");
  apptizers_title.innerText = "Appetizers:";
  const apptizers_item_1_title = document.createElement("h2");
  const apptizers_item_1_description = document.createElement("p");
  apptizers_item_1_title.innerText = "Bruschetta ~ $8.99";
  apptizers_item_1_description.innerText =
    "Freshly diced tomatoes, basil, garlic, and olive oil piled onto toasted baguette slices, creating a burst of Mediterranean flavors.";
  const apptizers_item_2_title = document.createElement("h1");
  const apptizers_item_2_description = document.createElement("p");
  apptizers_item_2_title.innerText = "Crispy Calamari ~ $10.99";
  apptizers_item_2_description.innerText =
    "Tender calamari rings lightly breaded and fried to perfection, served with a tangy lemon aioli dipping sauce.";
  const apptizers_item_3_title = document.createElement("h1");
  const apptizers_item_3_description = document.createElement("p");
  apptizers_item_3_title.innerText = "Caprese Salad ~ $9.99";
  apptizers_item_3_description.innerText =
    "A classic Italian salad featuring juicy tomatoes, creamy mozzarella, and fragrant basil drizzled with a balsamic reduction.";
  const apptizers_item_4_title = document.createElement("h1");
  const apptizers_item_4_description = document.createElement("p");
  apptizers_item_4_title.innerText = "Spinach and Artichoke Dip ~ $7.99";
  apptizers_item_4_description.innerText =
    "Creamy spinach and artichoke hearts blended with melted cheeses, served warm with crispy tortilla chips for dipping.";
  const apptizers_item_5_title = document.createElement("h1");
  const apptizers_item_5_description = document.createElement("p");
  apptizers_item_5_title.innerText = "Garlic Shrimp Skewers - $12.99";
  apptizers_item_5_description.innerText =
    "Succulent shrimp marinated in garlic and herbs, grilled to juicy perfection, and served with a zesty citrus dipping sauce.";
  //   apptizers append
  menu_section_appetizers.append(
    apptizers_title,
    apptizers_item_1_title,
    apptizers_item_1_description,
    apptizers_item_2_title,
    apptizers_item_2_description,
    apptizers_item_3_title,
    apptizers_item_3_description,
    apptizers_item_4_title,
    apptizers_item_4_description,
    apptizers_item_5_title,
    apptizers_item_5_description
  );
  //   Main Courses
  const menu_section_main_courses = document.createElement("div");
  menu_section_main_courses.classList.add("menu_section_main_courses");
  const main_courses_title = document.createElement("h1");
  main_courses_title.innerText = "Main Courses:";
  const main_courses_item_1_title = document.createElement("h2");
  const main_courses_item_1_description = document.createElement("p");
  main_courses_item_1_title.innerText =
    "Grilled Salmon with Lemon Butter ~ $19.99";
  main_courses_item_1_description.innerText =
    "Fresh Atlantic salmon fillet flame-grilled and finished with a luscious lemon butter sauce, accompanied by seasonal vegetables and your choice of side.";
  const main_courses_item_2_title = document.createElement("h2");
  const main_courses_item_2_description = document.createElement("p");
  main_courses_item_2_title.innerText =
    "Filet Mignon with Red Wine Reduction ~ $26.99";
  main_courses_item_2_description.innerText =
    "A tender and juicy 8 oz. filet mignon cooked to your desired temperature, complemented by a rich red wine reduction, served with mashed potatoes and grilled asparagus.";
  const main_courses_item_3_title = document.createElement("h2");
  const main_courses_item_3_description = document.createElement("p");
  main_courses_item_3_title.innerText =
    "Chicken Marsala with Mushroom Sauce ~ $16.99";
  main_courses_item_3_description.innerText =
    "Sautéed chicken breast in a savory Marsala wine sauce, featuring a medley of mushrooms and served with garlic mashed potatoes and roasted vegetables.";
  const main_courses_item_4_title = document.createElement("h2");
  const main_courses_item_4_description = document.createElement("p");
  main_courses_item_4_title.innerText = "Vegetable Stir-Fry with Tofu ~ $13.99";
  main_courses_item_4_description.innerText =
    "A colorful array of crisp stir-fried vegetables and tofu tossed in a savory soy-ginger sauce, served over steamed jasmine rice.";
  const main_courses_item_5_title = document.createElement("h2");
  const main_courses_item_5_description = document.createElement("p");
  main_courses_item_5_title.innerText = "Eggplant Parmesan with Pasta ~ $14.99";
  main_courses_item_5_description.innerText =
    "Layers of breaded eggplant, marinara sauce, and melted cheese, baked to golden perfection and served with a side of pasta marinara.";
  //  Main_courses Append
  menu_section_main_courses.append(
    main_courses_title,
    main_courses_item_1_title,
    main_courses_item_1_description,
    main_courses_item_2_title,
    main_courses_item_2_description,
    main_courses_item_3_title,
    main_courses_item_3_description,
    main_courses_item_4_title,
    main_courses_item_4_description,
    main_courses_item_5_title,
    main_courses_item_5_description
  );
  //   Finale Append
  menu_page.append(
    menu_title,
    menu_section_appetizers,
    menu_section_main_courses
  );
  content.append(menu_page);
}
export default GenerateMenuPage;
