function GenerateHomePage(content) {
  const hero_section = document.createElement("div");
  hero_section.classList.add("hero-section");
  //   img
  const hero_img_container = document.createElement("div");
  hero_img_container.classList.add("hero-img-container");
  //   buttons setup
  const hero_img_button_container = document.createElement("div");
  hero_img_button_container.classList.add("hero_img_button_container");
  const hero_button_img_next = document.createElement("button");
  const hero_button_img_before = document.createElement("button");
  hero_button_img_next.classList.add("hero_button_img_next");
  hero_button_img_before.classList.add("hero_button_img_before");
  const arrow_icon = document.createElement("i");
  arrow_icon.classList.add("bx-right-arrow-alt");
  arrow_icon.classList.add("bx");
  const arrow_icon_left = document.createElement("i");
  arrow_icon_left.classList.add("bx-left-arrow-alt");
  arrow_icon_left.classList.add("bx");
  hero_button_img_next.append(arrow_icon);
  hero_button_img_before.append(arrow_icon_left);
  hero_img_button_container.append(
    hero_button_img_before,
    hero_button_img_next
  );
  //  imges setup
  const img_1 = document.createElement("img");
  const img_2 = document.createElement("img");
  const img_3 = document.createElement("img");
  const img_4 = document.createElement("img");
  img_1.src =
    "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  img_2.src =
    "https://images.unsplash.com/photo-1662980482395-24343058f9c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  img_3.src =
    "https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  img_4.src =
    "https://images.unsplash.com/photo-1554306297-0c86e837d24b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1672&q=80";
  img_1.setAttribute("id", "hero-img-active");
  hero_img_container.append(
    img_1,
    img_2,
    img_3,
    img_4,
    hero_img_button_container
  );
  hero_img_button_container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const img_container = document
        .querySelector(".hero-img-container")
        .querySelectorAll("img");
      const active_img = document.getElementById("hero-img-active");
      let newindex = [...img_container].indexOf(active_img) + 1;
      if (newindex < 0) newindex = 4;
      if (newindex >= 4) newindex = 0;
      active_img.removeAttribute("id");
      img_container[newindex].setAttribute("id", "hero-img-active");
    });
  });

  // Text
  const hero_text_container = document.createElement("div");
  hero_text_container.classList.add("hero-text-container");
  const text_container = document.createElement("div");
  const hero_title = document.createElement("h1");
  const hero_subtext = document.createElement("h2");
  text_container.append(hero_title, hero_subtext);
  const hero_button = document.createElement("button");
  hero_title.innerText = "Indulge in Culinary Excellence";
  hero_subtext.innerText = "Experience a Fusion of Flavors & Aromas";
  hero_button.innerText = "Book a Table";
  hero_text_container.append(text_container, hero_button);
  //  Appending Hero section
  hero_section.append(hero_img_container, hero_text_container);
  // Introduction section
  const Introduction_section = document.createElement("div");
  Introduction_section.classList.add("introduction-section");
  const Introduction_text_container = document.createElement("div");
  Introduction_text_container.classList.add("indroduction-text-container");
  const Introduction_title = document.createElement("h1");
  const Introduction_subtext = document.createElement("div");
  const Introduction_subtext_p1 = document.createElement("p");
  const Introduction_subtext_p2 = document.createElement("p");
  const Introduction_subtext_p3 = document.createElement("p");
  const Introduction_subtext_p4 = document.createElement("p");
  Introduction_title.innerText =
    "Experience Culinary Excellence at Flavors & Aromas";
  Introduction_subtext_p1.innerText =
    "Welcome to Flavors & Aromas, where we invite you to embark on a remarkable culinary journey like no other. Our menu is a fusion of global influences, expertly crafted by our passionate chefs led by Chef Adir. Indulge in a symphony of flavors and aromas that will leave a lasting impression.";
  Introduction_subtext_p2.innerText =
    "Step into our inviting ambiance, carefully designed to create memorable moments for every occasion. Whether it's a romantic date, a gathering with friends, or a special celebration, we strive to provide an atmosphere that embodies warmth, elegance, and a touch of culinary magic.";
  Introduction_subtext_p3.innerText =
    "With a commitment to exceptional service and attention to detail, we aim to make your visit truly extraordinary. Our dedicated staff is here to guide you through our thoughtfully curated menu, ensuring that every aspect of your dining experience exceeds your expectations.";
  Introduction_subtext_p4.innerText =
    "Book a table today and let us take you on an unforgettable culinary journey. Discover why Flavors & Aromas is the destination for those seeking unparalleled flavors, impeccable artistry, and cherished dining memories.";
  // appending Introduction Text
  Introduction_subtext.append(
    Introduction_subtext_p1,
    Introduction_subtext_p2,
    Introduction_subtext_p3,
    Introduction_subtext_p4
  );
  Introduction_text_container.append(Introduction_title, Introduction_subtext);
  //  Introduction image
  const Introduction_img_container = document.createElement("div");
  Introduction_img_container.classList.add("Introduction_img_container");
  const Introduction_svg = document.createElement("img");
  Introduction_svg.src = "/Resources/blob.svg";
  const Introduction_img = document.createElement("img");
  Introduction_img.src = "/Resources/Chef_Face.png";
  Introduction_img_container.append(Introduction_img, Introduction_svg);
  // Introduction Finale Append
  Introduction_section.append(
    Introduction_text_container,
    Introduction_img_container
  );

  // finle Append
  content.append(hero_section, Introduction_section);
}
export default GenerateHomePage;
