function GenerateAboutusPage(content) {
  const about_page = document.createElement("div");
  about_page.classList.add("about-page");
  //   introduction
  const introduction_section = document.createElement("div");
  introduction_section.classList.add("about-introduction-section");
  introduction_section.classList.add("section");
  const introduction_title = document.createElement("h1");
  const introduction_text = document.createElement("p");
  introduction_text.innerText =
    "Welcome to Flavors & Aromas, where culinary excellence meets unforgettable dining experiences. Our fusion of flavors and aromas will transport your taste buds on a remarkable journey. Led by Chef Adir, our team crafts a menu that harmonizes global influences with the finest ingredients. Step into our elegant space and indulge in a captivating dining adventure. Discover the art of culinary excellence at Flavors & Aromas.";
  introduction_title.innerText = "Introduction";
  // button
  const introduction_button = document.createElement("button");
  const arr_icon = document.createElement("i");
  arr_icon.classList.add("bx-down-arrow-alt");
  arr_icon.classList.add("bx");
  introduction_button.classList.add("btn");
  introduction_button.classList.add("contact-button");
  introduction_button.addEventListener("click", () => {
    introduction_button.classList.toggle("btn-active");
    introduction_section.classList.toggle("section-active");
  });
  introduction_button.append(arr_icon);
  // story append
  //   introduction append
  introduction_section.append(
    introduction_title,
    introduction_text,
    introduction_button
  );
  //   Our Story
  const story_section = document.createElement("div");
  story_section.classList.add("story-section");
  story_section.classList.add("section");
  const story_title = document.createElement("h1");
  const story_text_p1 = document.createElement("p");
  const story_text_p2 = document.createElement("p");
  const story_text_p3 = document.createElement("p");
  story_title.innerText = "Our Story";
  story_text_p1.innerText =
    "At Flavors & Aromas, our journey began with a simple yet powerful vision - to create a dining destination that celebrates the art of culinary craftsmanship. Founded with a deep-rooted passion for exceptional food and genuine hospitality, our restaurant has become a haven for those seeking extraordinary dining experiences.";
  story_text_p2.innerText =
    "Inspired by Nelson Mandela, we embarked on a journey to curate a menu that embodies our love for flavors, creativity, and innovation. With meticulous attention to detail, we source the finest ingredients and craft each dish with precision and care.";
  story_text_p3.innerText =
    "Led by the talented Chef Adir, our team of culinary artisans brings their expertise, imagination, and unwavering commitment to every plate. Each dish is a masterpiece, carefully designed to tantalize your taste buds and create a symphony of flavors.";
  // button
  const story_button = document.createElement("button");
  const ar_icon = document.createElement("i");
  ar_icon.classList.add("bx-down-arrow-alt");
  ar_icon.classList.add("bx");
  story_button.classList.add("btn");
  story_button.classList.add("contact-button");
  story_button.addEventListener("click", () => {
    story_button.classList.toggle("btn-active");
    story_section.classList.toggle("section-active");
  });
  story_button.append(ar_icon);
  // story append
  story_section.append(
    story_title,
    story_text_p1,
    story_text_p2,
    story_text_p3,
    story_button
  );
  //   contact us
  const contact_section = document.createElement("div");
  contact_section.classList.add("contact-section");
  contact_section.classList.add("section");
  const contact_button = document.createElement("button");
  const contact_title = document.createElement("h1");
  const arrow_icon = document.createElement("i");
  arrow_icon.classList.add("bx-down-arrow-alt");
  arrow_icon.classList.add("bx");
  contact_button.classList.add("btn");
  contact_button.classList.add("contact-button");
  contact_button.append(arrow_icon);
  contact_title.innerText = "Contact US!";
  const contact_gmail = document.createElement("p");
  contact_gmail.innerText = "info@restaurantname.com";
  const contact_address = document.createElement("p");
  contact_address.innerText = "123 Main Street, Cityville, State, Zip Code";
  const contact_phone = document.createElement("p");
  contact_phone.innerText = "(123) 456-7890";
  const contact_subtext = document.createElement("p");
  contact_subtext.innerText =
    "Feel free to reach out to us with any questions, feedback, or reservation inquiries. We would love to hear from you!";
  contact_button.addEventListener("click", () => {
    contact_button.classList.toggle("btn-active");
    contact_section.classList.toggle("section-active");
  });
  // contact append
  contact_section.append(
    contact_title,
    contact_address,
    contact_phone,
    contact_gmail,
    contact_subtext,
    contact_button
  );
  // Finale Append
  about_page.append(introduction_section, story_section, contact_section);
  content.append(about_page);
}
export default GenerateAboutusPage;
