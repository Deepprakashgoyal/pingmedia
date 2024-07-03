// cursor js
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// client sliders

$(".client-logo-wrap.clients-slider").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 400,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
});

// career popup
const modalBtn = document.querySelectorAll(".job-opening .custom-btn");

for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener("click", () => {
    $("#job-modal").modal("show");
  });
}
// career popup

// $('.menu-sidebar').on('click', function(e) {
//   e.preventDefault();
//   $('body').toggleClass('side-content-visible');
// });

const enquiryBtn = document.querySelector(".sticky-enquiry-form-btn");

enquiryBtn.addEventListener("click", () => {
  document.body.classList.add("side-content-visible");
});
