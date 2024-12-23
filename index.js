let banner_container = document.getElementById("slides_container");

// box.addEventListener("click", () => {
//   window.location.href = item.file;
// });

// ctrl + k = line edit
// ctrl + l = chat
var counter = 0;

function scroll_forward() {
  banner_container.scrollBy(80, 0);
  counter++;
  // console.log(counter)

  if (counter > 3) {
    banner_container.scrollBy(-2000, 0);
    counter = 0;
  }
}

setInterval(scroll_forward, 2000);

const slidesData = [
  {
    imgSrc: "image1.jpg",
    title: "PYQs ofafd diploma",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quasi vitae fugiat ab ipsa animi rerum similique voluptate.q",
    type: "POL",
    branch: "AO",
    year: "second year",
    link: "adsad.pdf",
  },
  {
    imgSrc: "image2.jpg",
    title: "PYQs of ddddiploma - Semester 2",
    description: "Another description for a different slide content.",
    type: "ENG",
    branch: "AS",
    year: "first year",
    link: "ddsd.pdf",
  },
  {
    imgSrc: "image2.jpg",
    title: "PYQs of diploma - Semester 2",
    description: "Another description for a different slide content.",
    type: "ENG",
    branch: "AS",
    year: "first year",
    link: "ddsd.pdf",
  },
  {
    imgSrc: "image2.jpg",
    title: "PYQs of diploma - Semester 2",
    description: "Another description for a different slide content.",
    type: "ENG",
    branch: "AS",
    year: "first ddyear",
    link: "ddsd.pdf",
  },
  {
    imgSrc: "image2.jpg",
    title: "PYQs of diploma - Semester 2",
    description: "Another description for a different slide content.",
    type: "ENG",
    branch: "AS",
    year: "first ddyear",
    link: "ddsd.pdf",
  },
  {
    imgSrc: "image2.jpg",
    title: "PYQs of diploma - Semester 2",
    description: "Another description for a different slide content.",
    type: "ENG",
    branch: "AS",
    year: "first ddyear",
    link: "ddsd.pdf",
  },
];

const slide_container = document.getElementById("slides_container");

slide_container.innerHTML = "";
// Loop through each object in the array and create a slide
slidesData.forEach((data) => {
  // Create the outer "slide" div
  const slideDiv = document.createElement("div");
  slideDiv.classList.add("slide");

  // Create and set up the image element
  const imgElement = document.createElement("img");
  imgElement.src = `slideimg/${data.imgSrc}`;
  imgElement.alt = data.title;
  slideDiv.appendChild(imgElement);

  // Create the slide info div
  const slideInfoDiv = document.createElement("div");
  slideInfoDiv.id = "slideinfo";

  // Create and add the title
  const titleElement = document.createElement("h1");
  titleElement.textContent = data.title;
  slideInfoDiv.appendChild(titleElement);

  // Create and add the description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = data.description;
  slideInfoDiv.appendChild(descriptionElement);

  // Create the details div
  const detailsDiv = document.createElement("div");

  // Add age, hd, and category spans
  const ageSpan = document.createElement("span");
  ageSpan.id = "age";
  ageSpan.textContent = data.type;
  detailsDiv.appendChild(ageSpan);

  const hdSpan = document.createElement("span");
  hdSpan.id = "hd";
  hdSpan.textContent = data.branch;
  detailsDiv.appendChild(hdSpan);

  const categorySpan = document.createElement("span");
  categorySpan.id = "catog";
  categorySpan.textContent = data.category;
  detailsDiv.appendChild(categorySpan);

  slideInfoDiv.appendChild(detailsDiv);

  // Create and add the view link
  const viewLink = document.createElement("a");
  viewLink.href = `slidepdf/${data.link}`;
  // viewLink.id = "viewbtn";
  viewLink.textContent = "View";
  slideInfoDiv.appendChild(viewLink);

  // Append the slide info div to the slide div
  slideDiv.appendChild(slideInfoDiv);

  // Append the slide div to the container
  slide_container.appendChild(slideDiv);
});

let data_store = document.getElementById("data-store");

window.onload = function () {
  // const username = localStorage.getItem("username");
  // if (username) {
  data_store.innerHTML = `Welcome back, ${username}!`;
  // }
};

// MAIN CONTAINER
let main_container = document.getElementById("main-container");
let change_branch_btn = document.getElementById("change-branch");

// LOGIN PAGE ELEMENTS --------

let whole_login_page = document.getElementById("loginpage");
let login_back_btn = document.getElementById("login-back-btn");
let year_select_container = document.getElementById("deg-dip");
let branch_select_container = document.getElementById("branch-choose");
let branch_container = document.getElementById("choose-branch-cont");
let branch_page = document.getElementById("branch-choose");

change_branch_btn.addEventListener("click", () => {
  main_container.style.display = "none";
  whole_login_page.style.display = "block";
  year_select_container.style.display = "flex";
  // branch_container.style.display = "nonef";
});
// SUBJECT PAGE ELEMENTS
let main_menu_btn = document.getElementById("nav-menu-button");
let main_menu = document.getElementById("secondary-menu");
let subject_box_cont = document.getElementById("subs-cont");
let subject_page = document.getElementById("subjects-page");
let syllabus_container = document.getElementById("slb-btn-cont");
let subject_detail_page = document.getElementById("subject-detail-page");
let practice_container = document.getElementById("prac-ques-cont");
let notes_container = document.getElementById("notes-cont");

//  QUESTIONS BOX ELEMENTS -----------------

let question_soln_box = document.getElementById("question-solution-box");
let question_a_tag = document.getElementById("question-button");
let soln_a_tag = document.getElementById("soluntion-button");
let que_soln_blankspace = document.getElementById("questionbox-blankspace");
let menu_blankspace = document.getElementById("menu-blankspace");
let ques_soln_cut_btn = document.getElementById("ques_soln_cut_btn");

// ALL PAGES  -----------------------------

let classwork_page = document.getElementById("classwork-page");
let notice_page = document.getElementById("notice-page");
let event_page = document.getElementById("events-page");
let gallery_page = document.getElementById("gallery-page");
let manual_page = document.getElementById("manual-page");
let video_page = document.getElementById("video-page");
let form_page = document.getElementById("form-page");
let timetable_page = document.getElementById("timetable-page");
let test_page = document.getElementById("test-page");
let book_page = document.getElementById("book-page");
// let aout_page = document.getElementById("");
// let contact_page = document.getElementById("");

// CONTAINERS -----

let tests_container = document.getElementById("test-question-section");
let unsolvemanualcont = document.getElementById("unsolved-manual-section");
let solvemanualcont = document.getElementById("solved-manual-section");
let books_container = document.getElementById("book-container");
let classwork_container = document.getElementById("classwork-cont");
let videos_cont = document.getElementById("videos-container");
let diploma_gallery_cont = document.getElementById("diploma-gallery");
let degree_gallery_cont = document.getElementById("degree-gallery");
let degree_timetable = document.getElementById("degree-timetable");
let diploma_timetable = document.getElementById("diploma-timetable");
let degree_form_cont = document.getElementById("degree-form");
let diploma_form_cont = document.getElementById("diploma-form");
let degree_event_cont = document.getElementById("degree-event-section");
let diploma_event_cont = document.getElementById("diploma-event-section");
let notice_diploma_cont = document.getElementById("diploma-notice-section");
let notice_degree_cont = document.getElementById("degree-notice-section");

// INPUT AND SEARCH FIELD AND BUTTONS

let classwork_input = document.getElementById("class-search");
let classwork_search_btn = document.getElementById("class-seach-btn");
let video_input = document.getElementById("video-search-input");
let video_search_btn = document.getElementById("video-search-btn");
let pages_array = [
  subject_page,
  classwork_page,
  notice_page,
  subject_detail_page,
  event_page,
  gallery_page,
  manual_page,
  video_page,
  form_page,
  timetable_page,
  book_page,
  test_page,
];

// ALL BUTTONS --------------------------

let subject_page_btn = document.getElementById("subject-btn");
let classwork_page_btn = document.getElementById("classwork-btn");
let notice_page_btn = document.getElementById("notice-btn");
let event_page_btn = document.getElementById("events-btn");
let gallery_page_btn = document.getElementById("gallery-btn");
let manual_page_btn = document.getElementById("manual-btn");
let video_page_btn = document.getElementById("video-btn");
let form_page_btn = document.getElementById("form-btn");
// H BTN
let h_classwork_btn = document.getElementById("h_classwork_btn");
let h_timetable_btn = document.getElementById("h_timetable_btn");
let h_test_btn = document.getElementById("h_test_btn");
let h_book_btn = document.getElementById("h_book_btn");
let h_manual_btn = document.getElementById("h_manual_btn");
let h_gallery_btn = document.getElementById("h_gallery_btn");
let about_btn = document.getElementById("about-btn");
let contact_btn = document.getElementById("contact-btn");

// ALL BTNS ARRAY
let hor_btn = [
  subject_page_btn,
  classwork_page_btn,
  notice_page_btn,
  event_page_btn,
  gallery_page_btn,
  manual_page_btn,
  video_page_btn,
  form_page_btn,
];

// MENU CODE ----

main_menu_btn.addEventListener("click", () => {
  if (main_menu.style.right == "0px") {
    main_menu.style.right = "-290px";
  } else {
    main_menu.style.right = "0px";
    menu_blankspace.style.display = "block";
  }
});

menu_blankspace.addEventListener("click", () => {
  main_menu.style.right = "-290px";
  menu_blankspace.style.display = "none";
});
// END OF MENU CODE ---

// ALL BUTTON FUNCTIONS--------------

h_classwork_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    classwork_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    classwork_page_btn.style.color = "#2064b1";
    classwork_page_btn.style.borderBottom = "2px solid #2064b1";
  }

  if (menu_blankspace.style.display == "block") {
    main_menu.style.right = "-290px";
    menu_blankspace.style.display = "none";
  }
});

h_manual_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    manual_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    manual_page_btn.style.color = "#2064b1";
    manual_page_btn.style.borderBottom = "2px solid #2064b1";
  }

  if (menu_blankspace.style.display == "block") {
    main_menu.style.right = "-290px";
    menu_blankspace.style.display = "none";
  }
});

h_gallery_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    gallery_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    gallery_page_btn.style.color = "#2064b1";
    gallery_page_btn.style.borderBottom = "2px solid #2064b1";
  }

  if (menu_blankspace.style.display == "block") {
    main_menu.style.right = "-290px";
    menu_blankspace.style.display = "none";
  }
});

h_test_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    test_page.style.display = "block";
  }

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";
  }

  if (menu_blankspace.style.display == "block") {
    main_menu.style.right = "-290px";
    menu_blankspace.style.display = "none";
  }
});

h_book_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    book_page.style.display = "block";
  }

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";
  }

  if (menu_blankspace.style.display == "block") {
    main_menu.style.right = "-290px";
    menu_blankspace.style.display = "none";
  }
});

h_timetable_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    timetable_page.style.display = "block";
  }

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";
  }

  if (menu_blankspace.style.display == "block") {
    main_menu.style.right = "-290px";
    menu_blankspace.style.display = "none";
  }
});

subject_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    subject_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

classwork_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    classwork_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    classwork_page_btn.style.color = "#2064b1";
    classwork_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

notice_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    notice_page.style.display = "block";
  }

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    notice_page_btn.style.color = "#2064b1";
    notice_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

event_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    event_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    event_page_btn.style.color = "#2064b1";
    event_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
gallery_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    gallery_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    gallery_page_btn.style.color = "#2064b1";
    gallery_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
manual_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    manual_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    manual_page_btn.style.color = "#2064b1";
    manual_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
video_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    video_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    video_page_btn.style.color = "#2064b1";
    video_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
form_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    form_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    form_page_btn.style.color = "#2064b1";
    form_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

// END OF ALL BUTTONG FUNC

// GALLERY ARRAY

let degree_gallery_array = [
  { heading: "Sports day", img_list: ["b3.jpg", "b2.jpg"] },
  { heading: "annual day", img_list: ["b2.jpg", "bg3.PNG", "b5.jpg"] },
];

let diploma_gallery_array = [
  { heading: "diplo first day", img_list: ["b6.webp", "b7.jpg"] },
  { heading: "displo annual day", img_list: ["bg1.jpg", "b6.webp", "bg2.jpg"] },
];
// SUBJECT ARRAY
let subject_array = [
  {
    name: "Maths",
    thumnail_img: "math.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "English",
    thumnail_img: "cplus.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "ICT",
    thumnail_img: "database.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "chem.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Chemistry",
    thumnail_img: "python.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "Marathi",
    thumnail_img: "math.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "english",
    thumnail_img: "math.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "1.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "Science",
    thumnail_img: "cplus.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "2.pdf" },
      { title: "Maths (applied)", s_pdf: "3.pdf" },
    ],
  },

  {
    name: "Chemistry",
    thumnail_img: "chem.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "3.pdf" },
      { title: "Maths (applied)", s_pdf: "4.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "math.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "1.pdf" },
      { title: "Maths (applied)", s_pdf: "2.pdf" },
    ],
  },

  {
    name: "d2co",
    thumnail_img: "math.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Science",
    thumnail_img: "cplus.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "english",
    thumnail_img: "math.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "adf",
    thumnail_img: "python.png",
    code: "D3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPasdfaC",
    thumnail_img: "python.png",
    code: "D4CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D4ME",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPdfC",
    thumnail_img: "python.png",
    code: "D4AN",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D3CE",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D4CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "Mardddathi",
    thumnail_img: "math.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Scienddce",
    thumnail_img: "cplus.png",
    code: "P1CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "engdsflish",
    thumnail_img: "math.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPCsad",
    thumnail_img: "python.png",
    code: "DPCO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPdfC",
    thumnail_img: "python.png",
    code: "P3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPCdff",
    thumnail_img: "python.png",
    code: "P4CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "chemistry",
    thumnail_img: "python.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "physics",
    thumnail_img: "python.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WfdfdPC",
    thumnail_img: "python.png",
    code: "P3CE",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (adfadfafa)", s_pdf: "asf.pdf" },
      { title: "hiff (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
];

// SYLLABUS ARRAY

// let syllabus_array = [
//   {
//     name: "Maths",
//     title: "maths(basics)",
//     code: "P1",
//     syllabus_pdf: "1.pdf",
//   },
//   {
//     name: "Maths",
//     title: "Maths(applied)",
//     code: "D2CO",
//     syllabus_pdf: "asfj.pdf",
//   },
//   {
//     name: "english",
//     title: "Maths(applied)",
//     code: "D2CO",
//     syllabus_pdf: "asfj.pdf",
//   },
//   {
//     name: "Maths",
//     title: "Maths(applied)",
//     code: "D2CO",
//     syllabus_pdf: "asfj.pdf",
//   },
//   {
//     name: "Maths",
//     title: "Maths(applied)",
//     code: "D2CO",
//     syllabus_pdf: "asfj.pdf",
//   },
//   {
//     name: "Maths",
//     title: "Maths(applied)",
//     code: "D2CO",
//     syllabus_pdf: "asfj.pdf",
//   },
// ];

// PRACTICE ARRAY

let practice_question = [
  {
    name: "Maths",
    title: "Matrices",
    chap: "7",
    status: "test paper",
    code: "P1",
    question_pdf: "1.pdf",
    soln_pdf: "2.pdf",
  },
  {
    name: "Physics",
    title: "Light",
    chap: "7",
    status: "Question paper",
    code: "D2CO",
    question_pdf: "3.pdf",
    soln_pdf: "2.pdf",
  },
  {
    name: "Maths",
    title: "Algebra",
    chap: "7",
    status: "Question paper",
    code: "P1",
    question_pdf: "3.pdf",
    soln_pdf: "2.pdf",
  },

  {
    name: "physics",
    title: "Electricy",
    chap: "5",
    status: "test paper",
    code: "P1",
    question_pdf: "2.pdf",
    soln_pdf: "1.pdf",
  },
  {
    name: "Maths",
    title: "Trignometry",
    chap: "7",
    status: "test paper",
    code: "P1",
    question_pdf: "1.pdf",
    soln_pdf: "3.pdf",
  },

  {
    name: "Maths",
    title: "Matridfasces",
    chap: "7",
    status: "test paper",
    code: "P3CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "sfdsd",
    chap: "7",
    status: "test paper",
    code: "p2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "physics",
    title: "asfas",
    chap: "7",
    status: "test paper",
    code: "P2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
];

// IMPORTANT NOTE ARRAY

let important_note = [
  {
    name: "WPC",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "P1",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "physics",
    title: "Matrices",
    chap: "7",
    status: "test paper",
    code: "P2CO",
    question_pdf: "COA.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Tringnometry",
    chap: "7",
    status: "Question paper",
    code: "D1CO",
    question_pdf: "1.pdf",
    soln_pdf: "2s.pdf",
  },
  {
    name: "Maths",
    title: "partials",
    chap: "7",
    status: "test paper",
    code: "P1",
    question_pdf: "2.pdf",
    soln_pdf: "3.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Log.",
    chap: "7",
    status: "Question paper",
    code: "P1",
    question_pdf: "2.pdf",
    soln_pdf: "3.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "P3CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "P2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (sdfasdfsdf)",
    chap: "99",
    status: "test paper",
    code: "P3CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
];
// TEST ARRAY ---
let tests_array = [
  {
    title: "MatricesP1",
    code: "P1",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "hINDI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "Matrices",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MATdd",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3CO",
    date: "5/10/24",
    author: "someone else",
    subject: "MddT",
    ques_pdf: "test.pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "M1",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "f.pdf",
  },
];

// CLASS WORK  ---
let classwork_array = [
  {
    title: "MatricesP1",
    code: "P1",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "hINDI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "Matrices",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MATdd",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3CO",
    date: "5/10/24",
    author: "someone else",
    subject: "MddT",
    ques_pdf: "test.pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "M1",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "hey.pdf",
  },
  {
    title: "MARATHI",
    code: "P3AO",
    date: "5/10/24",
    author: "Sandeep Wagh",
    subject: "MAT",
    ques_pdf: "plotterpdf (1).pdf",
    sol_pdf: "f.pdf",
  },
];

// MANUAL BOOKS

let unsolved_manual_books = [
  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "D1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },

  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "D1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "P1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "D2CO",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "D2CO",
    manual_pdf: "f.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "P2AO",
    manual_pdf: "add.pdf",
    img: "book.webp",
  },
];

let solved_manual_books = [
  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "P1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },

  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "D1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "P3AO",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "D2CO",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "D2CO",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "P2AO",
    manual_pdf: "test2.pdf",
    img: "ald.svg",
  },
];

let books_array = [
  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "D1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },

  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "D1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "mathss",
    title: "Rd sharma books",
    code: "P1",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "D2CO",
    manual_pdf: "add.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "D2CO",
    manual_pdf: "f.pdf",
    img: "ald.svg",
  },
  {
    subject: "sddsd",
    title: "Rd sharma books",
    code: "P2AO",
    manual_pdf: "add.pdf",
    img: "book.webp",
  },
];

// VIDEO ARRAY
let video_array = [
  {
    subject: "hindi",
    code: "D2CO",
    link: "test.pdf",
    img: "test.5545d",
  },
  {
    subject: "maths",
    code: "D2CO",
    link: "test.pdf",
    img: "test.5545d",
  },
  {
    subject: "maths",
    code: "D2CO",
    link: "test.pdf",
    img: "test.5545d",
  },
  {
    subject: "maths",
    code: "D1CO",
    link: "test.pdf",
    img: "test.5545d",
  },
  {
    subject: "eng",
    code: "P1AO",
    link: "test.pdf",
    img: "test.5545d",
  },
  {
    subject: "maths",
    code: "P2CO",
    link: "test.pdf",
    img: "test.5545d",
  },
];

// TIMETABLE ARRAY

let timetable_array = [
  {
    img: "timetable.jpeg",
    type: "D",
    year: "1",
    acadmic: "2024-25",
    class: "AO",
    pdf: "timetable.pdf",
  },
  {
    img: "timetable.jpeg",
    type: "D",
    year: "1",
    acadmic: "2024-25",
    class: "AO",
    pdf: "timetable.pdf",
  },
  {
    img: "timetable.jpeg",
    type: "D",
    year: "1",
    acadmic: "2024-25",
    class: "AO",
    pdf: "timetable.pdf",
  },
  {
    img: "timetable.jpeg",
    type: "D",
    year: "1",
    acadmic: "2024-25",
    class: "AO",
    pdf: "timetable.pdf",
  },
  {
    img: "timetable.jpeg",
    type: "P",
    year: "1",
    acadmic: "2024-25",
    class: "po",
    pdf: "timetable.pdf",
  },
  {
    img: "timetable.jpeg",
    type: "P",
    year: "1",
    acadmic: "2024-25",
    class: "PO",
    pdf: "timetable.pdf",
  },
];

// FORMS ARRAY

let forms_array = [
  {
    img: "form.jpeg",
    type: "D",
    year: "1",
    submit_date: "11/11/2000",
    class: "AO,Co, Ce",
    pdf: "form.pdf",
  },
  {
    img: "form.jpeg",
    type: "D",
    year: "1",
    submit_date: "11/11/2000",
    class: "AO,Co, Ce",
    pdf: "form.pdf",
  },
  {
    img: "form.jpeg",
    type: "D",
    year: "1",
    submit_date: "11/11/2000",
    class: "AO,Co, Ce",
    pdf: "form.pdf",
  },
  {
    img: "form.jpeg",
    type: "P",
    year: "1",
    submit_date: "11/11/2000",
    class: "AO,Co, Ce",
    pdf: "form.pdf",
  },
];

// EVENTS ARRAY

let events_array = [
  {
    img: "eventpost.jpg",
    title: "Grand Ceremony of Chief guest",
    venue: "Degree hall",
    date: "15/10/24",
    class: "Mechanical",
    type: "D",
    year: "1st year",
    pdf: "event.pdff",
    starts_on: "10/10/24",
    ends_on: "15/10/24",
  },
  {
    img: "eventpost.jpg",
    title: "Grand Ceremony of Chief guest",
    venue: "Degree hall",
    date: "15/10/24",
    class: "Mechanical",
    type: "D",
    year: "1st year",
    pdf: "event.pdff",
    starts_on: "10/10/24",
    ends_on: "15/10/24",
  },
  {
    img: "eventpost.jpg",
    title: "Grand Ceremony of Chief guest",
    venue: "Degree hall",
    date: "15/10/24",
    class: "Mechanical",
    type: "D",
    year: "1st year",
    pdf: "event.pdff",
    starts_on: "10/10/24",
    ends_on: "15/10/24",
  },
  {
    img: "eventpost.jpg",
    title: "Grand Ceremony of Chief guest",
    venue: "Degree hall",
    date: "15/10/24",
    class: "Mechanical",
    type: "P",
    year: "1st year",
    pdf: "event.pdff",
    starts_on: "10/10/24",
    ends_on: "15/10/24",
  },
  {
    img: "eventpost.jpg",
    title: "Grand Ceremony of Chief guest",
    venue: "Degree hall",
    date: "15/10/24",
    class: "Mechanical",
    type: "P",
    year: "1st year",
    pdf: "event.pdff",
    starts_on: "10/10/24",
    ends_on: "15/10/24",
  },
];

// NOTICE ARRAY

let notice_array = [
  {
    class: "ME-A",
    type: "D",
    date: "11/11/2000",
    pdf: "notice.pdf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex aperiam voluptatum nobis! Aspernatur consectetur tempore ut inventore error dolore laboriosam eaque nihil, necessitatibus illum deserunt quam nam, esse quidem?",
  },
  {
    class: "ME-A",
    date: "11/11/2000",
    type: "D",
    pdf: "notice.pdf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex aperiam voluptatum nobis! Aspernatur consectetur tempore ut inventore error dolore laboriosam eaque nihil, necessitatibus illum deserunt quam nam, esse quidem?",
  },
  {
    class: "ME-A",
    date: "11/11/2000",
    type: "D",
    pdf: "notice.pdf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex aperiam voluptatum nobis! Aspernatur consectetur tempore ut inventore error dolore laboriosam eaque nihil, necessitatibus illum deserunt quam nam, esse quidem?",
  },
  {
    class: "ME-A",
    date: "11/11/2000",
    type: "P",
    pdf: "notice.pdf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex aperiam voluptatum nobis! Aspernatur consectetur tempore ut inventore error dolore laboriosam eaque nihil, necessitatibus illum deserunt quam nam, esse quidem?",
  },
  {
    class: "CI-A",
    date: "11/11/2000",
    pdf: "notice.pdf",
    type: "P",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex aperiam voluptatum nobis! Aspernatur consectetur tempore ut inventore error dolore laboriosam eaque nihil, necessitatibus illum deserunt quam nam, esse quidem?",
  },
];

// BACKGROUND IMAGES FOR SUBJECT BOXES

const bg_sub_box = [
  "#F68A8A",
  "#E7C0FA",
  "#B9FFD3",
  "#FAFFA8",
  "#74AECB",
  "#FFCC87",
  "#FF5858",
  "#81768E",
  "#FF7F50",
  "#87CEEB",
  "#AFEEEE",
  "#F5DEB3",
  "#B0C4DE",
  "#FFDEAD",
  "#FA8072",
  "#98FB98",
  "#ADD8E6",
  "#EEE8AA",
  "#FF7F50",
];

// QUESTION BOX CUT BUTTON CODE ----------------

ques_soln_cut_btn.addEventListener("click", () => {
  question_soln_box.style.display = "none";
  que_soln_blankspace.style.display = "none";
});

// QUESTIONN BOX BLANK SPACE CODE ----------------

que_soln_blankspace.addEventListener("click", () => {
  question_soln_box.style.display = "none";
  que_soln_blankspace.style.display = "none";
});
// Function to create boxes in the subject page
function createBoxes(containerId, data, targetCode) {
  // Loop through each object in the data array

  data.forEach((item) => {
    const randomIndex = Math.floor(Math.random() * bg_sub_box.length);

    if (item.code === targetCode) {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "sub");

      const code_div = document.createElement("div");

      code_div.innerHTML = targetCode;

      code_div.style.display = "none";

      const innerDiv = document.createElement("div");

      innerDiv.setAttribute("id", "sub-inner-cont");
      innerDiv.style.backgroundColor = bg_sub_box[randomIndex];

      const img = document.createElement("img");
      img.src = `subject_thum_img/${item.thumnail_img}`;
      img.alt = "loading";

      const paragraph = document.createElement("p");
      paragraph.textContent = item.name;

      innerDiv.appendChild(img);
      innerDiv.appendChild(paragraph);

      anchor.appendChild(innerDiv);

      //  main code ----------

      anchor.addEventListener("click", () => {
        console.log(targetCode);
        console.log(paragraph.textContent.toUpperCase());

        let box_code = targetCode;
        let box_name = paragraph.textContent.toUpperCase();
        syllabus_container.innerHTML = "";
        item.syllabus.forEach((slbs) => {
          let slbs_cont = document.createElement("a");
          slbs_cont.href = `syllabus/${slbs.s_pdf}`;
          slbs_cont.innerHTML = slbs.title;

          syllabus_container.appendChild(slbs_cont);
        });

        practice_container.innerHTML = "";

        practice_question.forEach((pq) => {
          // function appendPracBlock(containerId, title, chapter, description) {

          if (pq.code == targetCode) {
            let array_name = pq.name.toUpperCase();
            let item_name = item.name.toUpperCase();
            if (array_name == item_name) {
              const pracBlock = document.createElement("a");
              pracBlock.href = "#";
              pracBlock.className = "prac-block";

              const contentDiv = document.createElement("div");

              const h3 = document.createElement("h3");
              h3.textContent = pq.title;

              const h4 = document.createElement("h4");
              h4.textContent = `Chap - ${pq.chap}`;

              const p = document.createElement("p");
              p.textContent = pq.status;

              contentDiv.appendChild(h3);
              contentDiv.appendChild(h4);
              contentDiv.appendChild(p);

              pracBlock.appendChild(contentDiv);

              practice_container.appendChild(pracBlock);

              // question box code

              pracBlock.addEventListener("click", (e) => {
                e.preventDefault();
                question_a_tag.href = `pracnote/${pq.question_pdf}`;
                soln_a_tag.href = `pracnote/${pq.soln_pdf}`;
                question_soln_box.style.display = "flex";
                que_soln_blankspace.style.display = "block";
              });
            }
          }

          // }
        });

        notes_container.innerHTML = "";

        important_note.forEach((pq) => {
          // function appendPracBlock(containerId, title, chapter, description) {
          let array_name = pq.name.toUpperCase();
          let item_name = item.name.toUpperCase();
          if (pq.code == targetCode) {
            if (array_name == item_name) {
              const pracBlock = document.createElement("a");
              pracBlock.href = "#";
              pracBlock.className = "prac-block";

              const contentDiv = document.createElement("div");

              const h3 = document.createElement("h3");
              h3.textContent = pq.title;

              const h4 = document.createElement("h4");
              h4.textContent = pq.chap;

              const p = document.createElement("p");
              p.textContent = `Chap - ${pq.status}`;

              contentDiv.appendChild(h3);
              contentDiv.appendChild(h4);
              contentDiv.appendChild(p);

              pracBlock.appendChild(contentDiv);

              notes_container.appendChild(pracBlock);

              // question box code

              pracBlock.addEventListener("click", (e) => {
                e.preventDefault();
                question_a_tag.href = `impnote/${pq.question_pdf}`;
                soln_a_tag.href = `impnote/${pq.soln_pdf}`;
                question_soln_box.style.display = "flex";
                que_soln_blankspace.style.display = "block";
              });
            }
          }

          // }
        });

        subject_page.style.display = "none";
        subject_detail_page.style.display = "block";
      });
      containerId.appendChild(anchor);
    }
  });
}

// BACK BTN CODE
login_back_btn.addEventListener("click", () => {
  branch_page.style.display = "none";
  year_select_container.style.display = "flex";
  login_back_btn.style.display = "none";
});
// END OF BACK BTN CODE

// MAIN FUNCTION

function main_function(final_code) {
  localStorage.setItem("username", final_code);
  data_store.innerHTML = final_code;

  console.log(final_code);

  // main code will be written here -----

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
  }

  // TEST PAGE JAVA CODE ----
  tests_container.innerHTML = "";

  tests_array.forEach((item) => {
    if (item.code == final_code) {
      const box = document.createElement("div");
      box.className = "classwork";

      const title = document.createElement("h3");
      title.textContent = item.title;

      const line = document.createElement("hr");

      const date = document.createElement("p");
      date.textContent = item.date;

      const author = document.createElement("p");
      author.textContent = item.author;

      const subject = document.createElement("p");
      subject.id = "sub-head";
      subject.textContent = item.subject;

      box.appendChild(title);
      box.appendChild(line);
      box.appendChild(date);
      box.appendChild(author);
      box.appendChild(subject);

      // box on click code

      box.addEventListener("click", () => {
        // question_a_tag.href = `tests/${item.ques_pdf}`;
        question_a_tag.href = `tests/${item.ques_pdf}`;
        soln_a_tag.href = `tests/${item.sol_pdf}`;
        question_soln_box.style.display = "flex";
        que_soln_blankspace.style.display = "block";
      });

      tests_container.appendChild(box);
    }
  });

  // MANUAL BOOK CODE

  solvemanualcont.innerHTML = "";
  unsolvemanualcont.innerHTML = "";

  unsolved_manual_books.forEach((element) => {
    let final_year = "";

    switch (element.code) {
      case "D1":
        final_year = "first year";
        break;
      case "P1":
        final_year = "first year";
        break;

      case "D2CO":
        final_year = "CO year 2";
        break;
      case "D3CO":
        final_year = "CO year 3";
        break;
      case "D4CO":
        final_year = "CO year 4";
        break;

      case "D2ME":
        final_year = "ME year 2";
        break;
      case "D3ME":
        final_year = "ME year 3";
        break;
      case "D4ME":
        final_year = "ME year 4";
        break;

      case "D2AN":
        final_year = "AN year 2";
        break;
      case "D3AN":
        final_year = "AN year 3";
        break;
      case "D4AN":
        final_year = "AN year 4";
        break;

      case "D2MK":
        final_year = "MK year 2";
        break;
      case "D3MK":
        final_year = "MK year 3";
        break;
      case "D4MK":
        final_year = "MK year 4";
        break;

      case "D2AO":
        final_year = "AO year 2";
        break;
      case "D3AO":
        final_year = "AO year 3";
        break;
      case "D4AO":
        final_year = "AO year 4";
        break;

      case "D2CE":
        final_year = "CE year 2";
        break;
      case "D3CE":
        final_year = "CE year 3";
        break;
      case "D4CE":
        final_year = "CE year 4";
        break;

      case "D2EE":
        final_year = "EE year 2";
        break;
      case "D3EE":
        final_year = "EE year 3";
        break;
      case "D4EE":
        final_year = "EE year 4";
        break;

      case "P2CO":
        final_year = "CO year 2";
        break;
      case "P3CO":
        final_year = "CO year 3";
        break;

      case "P2AN":
        final_year = "AN year 2";
        break;
      case "P3AN":
        final_year = "AN year 3";
        break;

      case "P2EE":
        final_year = "EE year 2";
        break;
      case "P3EE":
        final_year = "EE year 3";
        break;

      case "P2CE":
        final_year = "CE year 2";
        break;
      case "P3CE":
        final_year = "CE year 3";
        break;

      case "P2CE":
        final_year = "CE year 2";
        break;
      case "P3CE":
        final_year = "CE year 3";
        break;

      case "P2ME":
        final_year = "ME year 2";
        break;
      case "P3ME":
        final_year = "ME year 3";
        break;

      default:
        final_year = "NOT DEFIEND";

        break;
    }

    if (element.code == final_code) {
      let cont = document.createElement("div");
      cont.setAttribute("class", "manual-book");

      cont.innerHTML = `
         
                            <img src="unsolvemanual/${element.img}" alt="loading">
                            <div id="manual-info">
                                <h3>
                                    ${element.title}
                                </h3>

                                <p style="color: #0b57d0; font-weight: 100; margin: 10px 0;">${element.subject}</p>
                                <p>${final_year}</p>
                                <p>Unsolved</p>

                            </div>
         `;

      cont.addEventListener("click", () => {
        window.location.href = `unsolvemanual/${element.manual_pdf}`;
      });

      unsolvemanualcont.append(cont);
    }
  });

  solved_manual_books.forEach((element) => {
    let final_year = "";

    switch (element.code) {
      case "D1":
        final_year = "first year";
        break;
      case "P1":
        final_year = "first year";
        break;

      case "D2CO":
        final_year = "CO year 2";
        break;
      case "D3CO":
        final_year = "CO year 3";
        break;
      case "D4CO":
        final_year = "CO year 4";
        break;

      case "D2ME":
        final_year = "ME year 2";
        break;
      case "D3ME":
        final_year = "ME year 3";
        break;
      case "D4ME":
        final_year = "ME year 4";
        break;

      case "D2AN":
        final_year = "AN year 2";
        break;
      case "D3AN":
        final_year = "AN year 3";
        break;
      case "D4AN":
        final_year = "AN year 4";
        break;

      case "D2MK":
        final_year = "MK year 2";
        break;
      case "D3MK":
        final_year = "MK year 3";
        break;
      case "D4MK":
        final_year = "MK year 4";
        break;

      case "D2AO":
        final_year = "AO year 2";
        break;
      case "D3AO":
        final_year = "AO year 3";
        break;
      case "D4AO":
        final_year = "AO year 4";
        break;

      case "D2CE":
        final_year = "CE year 2";
        break;
      case "D3CE":
        final_year = "CE year 3";
        break;
      case "D4CE":
        final_year = "CE year 4";
        break;

      case "D2EE":
        final_year = "EE year 2";
        break;
      case "D3EE":
        final_year = "EE year 3";
        break;
      case "D4EE":
        final_year = "EE year 4";
        break;

      case "P2CO":
        final_year = "CO year 2";
        break;
      case "P3CO":
        final_year = "CO year 3";
        break;

      case "P2AN":
        final_year = "AN year 2";
        break;
      case "P3AN":
        final_year = "AN year 3";
        break;

      case "P2EE":
        final_year = "EE year 2";
        break;
      case "P3EE":
        final_year = "EE year 3";
        break;

      case "P2CE":
        final_year = "CE year 2";
        break;
      case "P3CE":
        final_year = "CE year 3";
        break;

      case "P2CE":
        final_year = "CE year 2";
        break;
      case "P3CE":
        final_year = "CE year 3";
        break;

      case "P2ME":
        final_year = "ME year 2";
        break;
      case "P3ME":
        final_year = "ME year 3";
        break;

      default:
        final_year = "NOT DEFIEND";

        break;
    }

    if (element.code == final_code) {
      let cont = document.createElement("div");
      cont.setAttribute("class", "manual-book");

      cont.innerHTML = `
         
                            <img src="solvedmanual/${element.img}" alt="loading">
                            <div id="manual-info">
                                <h3>
                                    ${element.title}
                                </h3>

                                <p style="color: #0b57d0; font-weight: 100; margin: 10px 0;">${element.subject}</p>
                                <p>${final_year}</p>
                                <p>Unsolved</p>

                            </div>
         `;

      cont.addEventListener("click", () => {
        window.location.href = `unsolvemanual/${element.manual_pdf}`;
      });

      solvemanualcont.append(cont);
    }
  });

  // BOOKS PAGE CODE

  books_container.innerHTML = "";
  books_array.forEach((element) => {
    let final_year = "";

    switch (element.code) {
      case "D1":
        final_year = "first year";
        break;
      case "P1":
        final_year = "first year";
        break;

      case "D2CO":
        final_year = "CO year 2";
        break;
      case "D3CO":
        final_year = "CO year 3";
        break;
      case "D4CO":
        final_year = "CO year 4";
        break;

      case "D2ME":
        final_year = "ME year 2";
        break;
      case "D3ME":
        final_year = "ME year 3";
        break;
      case "D4ME":
        final_year = "ME year 4";
        break;

      case "D2AN":
        final_year = "AN year 2";
        break;
      case "D3AN":
        final_year = "AN year 3";
        break;
      case "D4AN":
        final_year = "AN year 4";
        break;

      case "D2MK":
        final_year = "MK year 2";
        break;
      case "D3MK":
        final_year = "MK year 3";
        break;
      case "D4MK":
        final_year = "MK year 4";
        break;

      case "D2AO":
        final_year = "AO year 2";
        break;
      case "D3AO":
        final_year = "AO year 3";
        break;
      case "D4AO":
        final_year = "AO year 4";
        break;

      case "D2CE":
        final_year = "CE year 2";
        break;
      case "D3CE":
        final_year = "CE year 3";
        break;
      case "D4CE":
        final_year = "CE year 4";
        break;

      case "D2EE":
        final_year = "EE year 2";
        break;
      case "D3EE":
        final_year = "EE year 3";
        break;
      case "D4EE":
        final_year = "EE year 4";
        break;

      case "P2CO":
        final_year = "CO year 2";
        break;
      case "P3CO":
        final_year = "CO year 3";
        break;

      case "P2AN":
        final_year = "AN year 2";
        break;
      case "P3AN":
        final_year = "AN year 3";
        break;

      case "P2EE":
        final_year = "EE year 2";
        break;
      case "P3EE":
        final_year = "EE year 3";
        break;

      case "P2CE":
        final_year = "CE year 2";
        break;
      case "P3CE":
        final_year = "CE year 3";
        break;

      case "P2CE":
        final_year = "CE year 2";
        break;
      case "P3CE":
        final_year = "CE year 3";
        break;

      case "P2ME":
        final_year = "ME year 2";
        break;
      case "P3ME":
        final_year = "ME year 3";
        break;

      default:
        final_year = "NOT DEFIEND";

        break;
    }

    if (element.code == final_code) {
      let cont = document.createElement("div");
      cont.setAttribute("class", "book-block");

      cont.innerHTML = `
         
                            <img src="books/${element.img}" alt="loading">
                            <div id="book-info">
                                <h3>
                                    ${element.title}
                                </h3>

                                <p style="color: #0b57d0; font-weight: 100; margin: 10px 0;">${element.subject}</p>
                                <p>${final_year}</p>
                                <p>Unsolved</p>

                            </div>
         `;

      cont.addEventListener("click", () => {
        window.location.href = `books/${element.manual_pdf}`;
      });

      books_container.append(cont);
    }
  });

  // CLASSWORK PAGE CODE ----

  classwork_container.innerHTML = "";

  classwork_array.forEach((item) => {
    if (item.code == final_code) {
      const box = document.createElement("div");
      box.className = "classwork";

      const title = document.createElement("h3");
      title.textContent = item.title;

      const line = document.createElement("hr");

      const date = document.createElement("p");
      date.textContent = item.date;

      const author = document.createElement("p");
      author.textContent = item.author;

      const subject = document.createElement("p");
      subject.id = "sub-head";
      subject.textContent = item.subject;

      box.appendChild(title);
      box.appendChild(line);
      box.appendChild(date);
      box.appendChild(author);
      box.appendChild(subject);

      // box on click code

      box.addEventListener("click", () => {
        // question_a_tag.href = `tests/${item.ques_pdf}`;
        question_a_tag.href = `classwork/${item.ques_pdf}`;
        soln_a_tag.href = `classwork/${item.sol_pdf}`;
        question_soln_box.style.display = "flex";
        que_soln_blankspace.style.display = "block";
      });

      classwork_container.appendChild(box);
    }
  });

  videos_cont.innerHTML = "";

  video_array.forEach((item) => {
    if (item.code == final_code) {
      const box = document.createElement("div");
      const img_box = document.createElement("img");
      img_box.src = `videos/${item.img}`;

      const title_box = document.createElement("h1");
      title_box.innerHTML = item.subject;

      const button_box = document.createElement("a");
      button_box.href = `videos/${item.link}`;
      button_box.textContent = "Watch";
      box.setAttribute("class", "video-block");

      box.append(img_box, title_box, button_box);

      videos_cont.appendChild(box);
    }
  });

  // GALLERY PAGE

  degree_gallery_cont.innerHTML = "";
  diploma_gallery_cont.innerHTML = "";

  diploma_gallery_array.forEach((element) => {
    const main_box = document.createElement("div");
    main_box.setAttribute("class", "gallery-block");
    const heading = document.createElement("h2");
    heading.innerHTML = element.heading;
    const img_cont = document.createElement("div");
    img_cont.setAttribute("id", "image-slide");

    element.img_list.forEach((imgs) => {
      const img_slide = document.createElement("img");
      img_slide.src = `diplomaphoto/${imgs}`;
      img_cont.append(img_slide);
    });
    main_box.append(heading, img_cont);
    diploma_gallery_cont.append(main_box);
  });
  degree_gallery_array.forEach((element) => {
    const main_box = document.createElement("div");
    main_box.setAttribute("class", "gallery-block");
    const heading = document.createElement("h2");
    heading.innerHTML = element.heading;
    const img_cont = document.createElement("div");
    img_cont.setAttribute("id", "image-slide");

    element.img_list.forEach((imgs) => {
      const img_slide = document.createElement("img");
      img_slide.src = `degreephoto/${imgs}`;
      img_cont.append(img_slide);
    });
    main_box.append(heading, img_cont);
    degree_gallery_cont.append(main_box);
  });

  // TIMETABLE PAGE CODE

  degree_timetable.innerHTML = "";
  diploma_timetable.innerHTML = "";
  timetable_array.forEach((element) => {
    let box = document.createElement("div");
    box.setAttribute("class", "timetable-block");
    let img_box = document.createElement("img");
    img_box.src = `timetable/${element.img}`;
    let box_info = document.createElement("div");
    box_info.setAttribute("id", "timetable-info");
    let type_box = document.createElement("p");
    // type_box.innerHTML = `&#8226; ${element.type}`;
    let year_box = document.createElement("p");
    year_box.innerHTML = `&#8226; Year - ${element.year}`;
    let class_box = document.createElement("p");
    class_box.innerHTML = `&#8226;  ${element.class}`;
    let acadmic_box = document.createElement("p");
    acadmic_box.innerHTML = `&#8226; Acadmic - ${element.acadmic}`;
    let open_box = document.createElement("a");
    open_box.href = `timetable/${element.pdf}`;
    open_box.textContent = "OPEN";

    box_info.append(type_box, year_box, class_box, acadmic_box, open_box);
    box.append(img_box, box_info);

    if (element.type == "D") {
      type_box.innerHTML = `&#8226; Degree`;
      degree_timetable.append(box);
    } else {
      type_box.innerHTML = `&#8226; Diploma`;
      diploma_timetable.append(box);
    }
  });

  // FORMS PAGE CODE

  degree_form_cont.innerHTML = "";
  diploma_form_cont.innerHTML = "";

  forms_array.forEach((element) => {
    let box = document.createElement("div");
    box.setAttribute("class", "form-block");
    let img_box = document.createElement("img");
    img_box.src = `form/${element.img}`;
    img_box.alt = "loading";
    let box_info = document.createElement("div");
    box_info.setAttribute("id", "form-info");
    let type_box = document.createElement("p");
    type_box.innerHTML = element.type == "D" ? "Degree" : "Diploma";
    let year_box = document.createElement("p");
    year_box.innerHTML = `Year - ${element.year}`;
    let class_box = document.createElement("p");
    class_box.innerHTML = element.class;
    let submit_box = document.createElement("i");
    submit_box.innerHTML = `Submit - ${element.submit_date}`;
    let open_box = document.createElement("a");
    open_box.href = `form/${element.pdf}`;
    open_box.textContent = "read";

    box_info.append(type_box, year_box, class_box, submit_box, open_box);
    box.append(img_box, box_info);

    if (element.type == "D") {
      degree_form_cont.append(box);
    } else {
      diploma_form_cont.append(box);
    }
  });

  // {
  //   img: "eventpost.jpg",
  //   title: "Grand Ceremony of Chief guest",
  //   venue: "Degree hall",
  //   date: "15/10/24",
  //   class: "Mechanical",
  //   type: "D",
  //   year: "1st year",
  //   pdf: "event.pdff",
  //   starts_on: "10/10/24",
  //   ends_on: "15/10/24",
  // },

  // EVENTS PAGE CODE

  degree_event_cont.innerHTML = "";
  diploma_event_cont.innerHTML = "";

  events_array.forEach((event) => {
    const eventBlock = document.createElement("div");
    eventBlock.className = "event-block";

    const posterCont = document.createElement("div");
    posterCont.id = "poster-cont";

    const img = document.createElement("img");
    img.src = `events/${event.img}`;
    img.alt = "loading";

    const title = document.createElement("h3");
    title.textContent = event.title;

    posterCont.appendChild(img);
    posterCont.appendChild(title);

    const eventInfo = document.createElement("div");
    eventInfo.id = "event-info";

    const venue = document.createElement("p");
    venue.style.color = "rgb(0, 0, 0)";
    venue.textContent = `Venue - ${event.venue}`;

    const classInfo = document.createElement("p");
    const classIcon = document.createElement("img");
    classIcon.src = "imgs/student.png";
    classIcon.alt = "loading";
    const classSpan = document.createElement("span");
    classSpan.textContent = `${event.class} • ${event.year}`;
    classInfo.appendChild(classIcon);
    classInfo.appendChild(classSpan);

    const dateInfo = document.createElement("p");
    const calendarIcon = document.createElement("img");
    calendarIcon.src = "imgs/calendar2.png";
    calendarIcon.alt = "loading";
    const dateSpan = document.createElement("span");
    dateSpan.textContent = `Starts on ${event.starts_on} • Ends on ${event.ends_on}`;
    dateInfo.appendChild(calendarIcon);
    dateInfo.appendChild(dateSpan);

    eventInfo.appendChild(venue);
    eventInfo.appendChild(classInfo);
    eventInfo.appendChild(dateInfo);

    eventBlock.appendChild(posterCont);
    eventBlock.appendChild(eventInfo);

    // Add click event listener to open PDF
    eventBlock.addEventListener("click", () => {
      window.open(`events/${event.pdf}`, "_blank");
    });

    if (event.type === "D") {
      document.getElementById("degree-event-section").appendChild(eventBlock);
    } else {
      document.getElementById("diploma-event-section").appendChild(eventBlock);
    }
  });

  // NOTICE PAGE CODE

  notice_diploma_cont.innerHTML = "";
  notice_degree_cont.innerHTML = "";

  notice_array.forEach((notice) => {
    const noticeBlock = document.createElement("div");
    noticeBlock.className = "notice-block";

    const title = document.createElement("h3");
    title.textContent = "Notice";

    const classInfo = document.createElement("h4");
    classInfo.textContent = `(${notice.class})`;

    const date = document.createElement("h5");
    date.textContent = `Date : ${notice.date}`;

    const description = document.createElement("p");
    description.id = "notice-discription";
    description.textContent = notice.description;

    const pdfLink = document.createElement("a");
    pdfLink.href = `notice/${notice.pdf}`;
    pdfLink.textContent = "PDF";

    noticeBlock.appendChild(title);
    noticeBlock.appendChild(classInfo);
    noticeBlock.appendChild(date);
    noticeBlock.appendChild(description);
    noticeBlock.appendChild(pdfLink);

    if (notice.type === "D") {
      document.getElementById("degree-notice-section").appendChild(noticeBlock);
    } else {
      document
        .getElementById("diploma-notice-section")
        .appendChild(noticeBlock);
    }
  });

  main_menu.style.right = "-290px";
  menu_blankspace.style.display = "none";
}

// CLASS WORK SEARCH BUTTON CODE

function search_class() {
  // Get input value and convert to lowercase for case-insensitive search
  const input = classwork_input.value.toLowerCase();

  // Filter the array to match input with any part of the name
  const result = classwork_array.filter((element) =>
    element.title.toLowerCase().includes(input)
  );

  let year_c = data_store.innerHTML;

  classwork_container.innerHTML = "";

  result.forEach((item) => {
    if (item.code == year_c) {
      const box = document.createElement("div");
      box.className = "classwork";

      const title = document.createElement("h3");
      title.textContent = item.title;

      const line = document.createElement("hr");

      const date = document.createElement("p");
      date.textContent = item.date;

      const author = document.createElement("p");
      author.textContent = item.author;

      const subject = document.createElement("p");
      subject.id = "sub-head";
      subject.textContent = item.subject;

      box.appendChild(title);
      box.appendChild(line);
      box.appendChild(date);
      box.appendChild(author);
      box.appendChild(subject);

      // box on click code

      box.addEventListener("click", () => {
        // question_a_tag.href = `tests/${item.ques_pdf}`;
        question_a_tag.href = `classwork/${item.ques_pdf}`;
        soln_a_tag.href = `classwork/${item.sol_pdf}`;
        question_soln_box.style.display = "flex";
        que_soln_blankspace.style.display = "block";
      });

      classwork_container.appendChild(box);
    }
  });
  // Log matching objects to the console
  console.log(result.length);
}

classwork_search_btn.addEventListener("click", search_class);

function empty_input(event) {
  if (event.key == "Backspace") {
    const input = classwork_input.value.toLowerCase();
    let year_c = data_store.innerHTML;
    if (input.length == 1 || input == "") {
      classwork_container.innerHTML = "";

      classwork_array.forEach((item) => {
        if (item.code == year_c) {
          const box = document.createElement("div");
          box.className = "classwork";

          const title = document.createElement("h3");
          title.textContent = item.title;

          const line = document.createElement("hr");

          const date = document.createElement("p");
          date.textContent = item.date;

          const author = document.createElement("p");
          author.textContent = item.author;

          const subject = document.createElement("p");
          subject.id = "sub-head";
          subject.textContent = item.subject;

          box.appendChild(title);
          box.appendChild(line);
          box.appendChild(date);
          box.appendChild(author);
          box.appendChild(subject);

          // box on click code

          box.addEventListener("click", () => {
            // question_a_tag.href = `tests/${item.ques_pdf}`;
            question_a_tag.href = `classwork/${item.ques_pdf}`;
            soln_a_tag.href = `classwork/${item.sol_pdf}`;
            question_soln_box.style.display = "flex";
            que_soln_blankspace.style.display = "block";
          });

          classwork_container.appendChild(box);
        }
      });
    } else {
      console.log("empty");
    }
  }
}

// SEARCH FUNCTIONS FOR VIDEOS
function search_class_video() {
  // Get input value and convert to lowercase for case-insensitive search
  const input = video_input.value.toLowerCase();

  // Filter the array to match input with any part of the name
  const result = video_array.filter((element) =>
    element.subject.toLowerCase().includes(input)
  );

  let year_c = data_store.innerHTML;

  videos_cont.innerHTML = "";

  result.forEach((item) => {
    if (item.code == year_c) {
      const box = document.createElement("div");
      const img_box = document.createElement("img");
      img_box.src = `videos/${item.img}`;

      const title_box = document.createElement("h1");
      title_box.innerHTML = item.subject;

      const button_box = document.createElement("a");
      button_box.href = `videos/${item.link}`;
      button_box.textContent = "Watch";
      box.setAttribute("class", "video-block");

      box.append(img_box, title_box, button_box);

      videos_cont.appendChild(box);
    }
  });
  // Log matching objects to the console
  console.log(result.length);
}

video_search_btn.addEventListener("click", search_class_video);

function empty_input_video(event) {
  if (event.key == "Backspace") {
    const input = video_input.value.toLowerCase();
    let year_c = data_store.innerHTML;
    if (input.length == 1 || input == "") {
      videos_cont.innerHTML = "";

      video_array.forEach((item) => {
        if (item.code == year_c) {
          const box = document.createElement("div");
          const img_box = document.createElement("img");
          img_box.src = `videos/${item.img}`;

          const title_box = document.createElement("h1");
          title_box.innerHTML = item.subject;

          const button_box = document.createElement("a");
          button_box.href = `videos/${item.link}`;
          button_box.textContent = "Watch";
          box.setAttribute("class", "video-block");

          box.append(img_box, title_box, button_box);

          videos_cont.appendChild(box);
        }
      });
    } else {
      console.log("empty");
    }
  }
}

// FIRST YEAR BUTTON CODE FOR DIPLOMA AND DIGREE ------------
let D_first_year_btn = document.getElementById("dy1");

function d_fy_func() {
  let year_var = "D1";
  subject_box_cont.innerHTML = "";
  createBoxes(subject_box_cont, subject_array, year_var);
  main_function(year_var);
  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
  }
  whole_login_page.style.display = "none";
  main_container.style.display = "block";
  login_back_btn.style.display = "block";
  subject_detail_page.style.display = "none";
  subject_page.style.display = "block";

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }

  tests_container.innerHTML = "";
}
let P_first_year_btn = document.getElementById("py1");
function p_fy_func() {
  let year_var = "P1";
  subject_box_cont.innerHTML = "";
  createBoxes(subject_box_cont, subject_array, year_var);

  main_function(year_var);

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
  }
  whole_login_page.style.display = "none";
  main_container.style.display = "block";
  subject_detail_page.style.display = "none";
  subject_page.style.display = "block";
  login_back_btn.style.display = "block";
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }
}
// END OF  FIRST YEAR BUTTON CODE FOR DIPLOMA AND DIGREE ------------

//SET YEAR AND BRANCHES BTN CODE

let degree_branch_array = [
  { name: "AO", code: "AO" },
  { name: "CE", code: "CE" },
  { name: "CO", code: "CO" },
  { name: "AN", code: "AN" },
  { name: "ME", code: "ME" },
  { name: "MK", code: "MK" },
  { name: "EE", code: "EE" },
];

let diploma_branch_array = [
  { name: "AO", code: "AO" },
  { name: "AN", code: "AN" },
  { name: "CE", code: "CE" },
  { name: "CO", code: "CO" },
  { name: "ME", code: "ME" },
  { name: "EE", code: "EE" },
];

function appending_branch(given_array, year) {
  given_array.forEach((item) => {
    const branch_box = document.createElement("li");
    branch_box.innerHTML = item.name;

    branch_box.addEventListener("click", () => {
      let branch_var = item.code;
      let final_codes = year + branch_var;

      main_function(final_codes);
      // let branch_var = item.code;
      // let final_code = year + branch_var;

      subject_box_cont.innerHTML = "";
      // createBoxes(subject_box_cont, subject_array, final_code);
      createBoxes(subject_box_cont, subject_array, final_codes);
      branch_select_container.style.display = "none";
      year_select_container.style.display = "block";
      whole_login_page.style.display = "none";
      main_container.style.display = "block";
      subject_detail_page.style.display = "none";
      subject_page.style.display = "block";

      for (i = 0; i < hor_btn.length; i++) {
        hor_btn[i].style.color = "black";
        hor_btn[i].style.borderBottom = "2px solid #ffff";

        subject_page_btn.style.color = "#2064b1";
        subject_page_btn.style.borderBottom = "2px solid #2064b1";
      }
    });

    branch_container.appendChild(branch_box);
  });
}

function d_sy_func() {
  let year_var = "D2";

  // main_function(year_var);

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
  login_back_btn.style.display = "block";
}

function d_ty_func() {
  let year_var = "D3";

  // main_function(year_var);

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
  login_back_btn.style.display = "block";
}

function d_fry_func() {
  let year_var = "D4";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  login_back_btn.style.display = "block";

  branch_select_container.style.display = "block";
}

function p_sy_func() {
  let year_var = "P2";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  login_back_btn.style.display = "block";

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
}

function p_ty_func() {
  let year_var = "P3";
  login_back_btn.style.display = "block";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
}

// END OF RESET YEAR AND BRANCHES BTN CODE

// VIDEO PAGE CODE --------------

// ONRELOAD FUNCTION

window.onload = function () {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    // data_store.innerText = `Welcome back, ${savedName}!`;

    main_function(savedName);

    subject_box_cont.innerHTML = "";
    subject_page.style.display = "block";
    createBoxes(subject_box_cont, subject_array, savedName);
    whole_login_page.style.display = "none";
    main_container.style.display = "block";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }
};

// Keyboard shortcut for prompt edit
// document.addEventListener('keydown', function(e) {
//   // Check for Control + Shift combination
//   if (e.ctrlKey && e.shiftKey) {
//     // Prevent default browser behavior
//     e.preventDefault();

//     // Get any existing text from localStorage
//     const savedName = localStorage.getItem("username");
//     if (savedName) {
//       const newName = prompt("Edit your username:", savedName);
//       if (newName && newName !== savedName) {
//         localStorage.setItem("username", newName);
//         location.reload();
//       }
//     }
//   }
// });
