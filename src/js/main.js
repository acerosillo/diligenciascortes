import { gsap } from "gsap/all";
//import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);

gsap.registe;

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

//smooth scroll
import LocomotiveScroll from "locomotive-scroll";
const locomotiveScroll = new LocomotiveScroll();

document.addEventListener("DOMContentLoaded", function (event) {
  preCheck();
});

let isMobile;
function preCheck() {
  isMobile = window.innerWidth < 1024;
  //isModernBrowser = "visibilityState" in document;
  init();
  // window.addEventListener("resize", init);
}

function init() {
  isMobile = window.innerWidth < 1024; // Update isMobile on resize
  if (isMobile) {
    navigationMobile.init();
    // searchMobile.init();
  }
  navigationDesktop.init();
  swiperCarousel.init();
  teamCarousel.init();
  mediaCarousel.init();
  responsibilityCarousel.init();
  videoModal.init();
  homeVideoModal.init();
  popupModal.init();
  textSlideInLeft.init();
  textSlideInRight.init();
  homeAnimations.init();
  navHideScroll.init();
  imageParallax.init();
  numberIncrement.init();
}

var numberIncrement = {
  init: function () {
    document.querySelectorAll(".counts").forEach((element) => {
      let count = element,
        zero = { val: 0 },
        num = parseFloat(element.dataset.number),
        decimals = num % 1 !== 0 ? num.toString().split(".")[1].length : 0;

      gsap.to(zero, {
        val: num,
        duration: 2,
        scrollTrigger: element,
        onUpdate: () => {
          count.innerText = zero.val.toFixed(decimals);
        },
      });
    });
  },
};

var navHideScroll = {
  init: function () {
    //scrolling hide and show nav bar
    var lastScrollTop; // This Varibale will store the top position
    navbar = document.getElementById("navbar"); // Get The NavBar
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop >= 200) {
        navbar.style.top = "-150px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  },
};

var imageParallax = {
  init: function () {
    if (
      document.getElementsByClassName("component-wrapper__video").length > 0
    ) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils
        .toArray(".component-wrapper__video")
        .forEach(function (container) {
          let image = container.querySelector("img");

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              scrub: 1,
              pin: false,
            },
          });
          tl.from(image, {
            yPercent: -30,
            ease: "none",
          }).to(image, {
            yPercent: 30,
            ease: "none",
          });
        });
    }
  },
};

var homeAnimations = {
  init: function () {
    //const slides = document.querySelectorAll(".ani-right");

    if (
      document.getElementsByClassName("gallery-carousel-wrapper").length > 0
    ) {
      gsap.set(".right", { yPercent: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".gallery-carousel-wrapper",
            pin: false,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            markers: false,
          },
        })
        .to(".right", {
          x: () => "+=" + (window.innerWidth + 20),
          ease: "none",
        });
    }
  },
};

var textSlideInRight = {
  init: function () {
    const slides = document.querySelectorAll(".ani-right");

    slides.forEach((slide, index) => {
      gsap.from(slide, {
        opacity: 0,
        x: 70,
        duration: 0.2,
        scrollTrigger: {
          trigger: slide,
          start: "bottom bottom",
          end: "bottom bottom",
          toggleActions: "play none none none",
          once: true,
        },
        delay: 0.078 * index,
      });
    });
  },
};

//Slide in from Left
var textSlideInLeft = {
  init: function () {
    const slides = document.querySelectorAll(".ani-left");

    slides.forEach((slide, index) => {
      gsap.from(slide, {
        opacity: 0,
        x: -10,
        duration: 0.4,
        scrollTrigger: {
          trigger: slide,
          //start: "bottom 100%",
          start: "bottom bottom",
          end: "bottom bottom",
          toggleActions: "play none none none",
          once: true,
        },
        delay: 0.078 * index,
      });
    });
  },
};

var searchMobile = {
  init: function () {
    if (document.getElementsByClassName("navi-header").length > 0) {
      const search = document.querySelector(".icon__search");
      search.addEventListener("click", function () {
        search.classList.toggle("is-open");
        let expanded = search.getAttribute("aria-expanded") === "true" || false;
        search.setAttribute("aria-expanded", !expanded);
        document.querySelector(".search__navigation").hidden = expanded;
        document
          .querySelector(".search__navigation")
          .classList.toggle("is-open");
      });
    }
  },
};
var navigationMobile = {
  init: function () {
    if (document.getElementsByClassName("navi-header").length > 0) {
      const pageHeader = document.querySelector(".main__navigation");
      const toggleMenu = pageHeader.querySelector(".mobile__menu__button");
      const menuWrapper = pageHeader.querySelector(".menu-wrapper");
      const level1Links = pageHeader.querySelectorAll(".level-1 > li > button");
      const listWrapper2 = pageHeader.querySelector(
        ".list-wrapper:nth-child(2)"
      );
      const listWrapper3 = pageHeader.querySelector(
        ".list-wrapper:nth-child(3)"
      );
      const listWrapper4 = pageHeader.querySelector(
        ".list-wrapper:nth-child(4)"
      );
      const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
      const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
      const subMenuWrapper4 = listWrapper4.querySelector(".sub-menu-wrapper");
      const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
      const isVisibleClass = "is-visible";
      const isActiveClass = "is-active";
      const search = document.querySelector(".icon__search");

      search.addEventListener("click", function () {
        search.classList.toggle("is-open");
        document
          .querySelector(".search__navigation")
          .classList.toggle("is-open");
        if (search.className.includes("is-open")) {
          menuWrapper.classList.remove(isVisibleClass);
          toggleMenu.classList.remove(isVisibleClass);
          toggleMenu.innerText = "Menu";
        }
      });

      toggleMenu.addEventListener("click", function () {
        menuWrapper.classList.toggle(isVisibleClass);
        pageHeader.classList.toggle(isVisibleClass);
        search.classList.remove("is-open");
        document
          .querySelector(".search__navigation")
          .classList.remove("is-open");
        if (!this.classList.contains(isVisibleClass)) {
          toggleMenu.innerText = "Close";
          toggleMenu.classList.add(isVisibleClass);
          listWrapper2.classList.remove(isVisibleClass);
          listWrapper3.classList.remove(isVisibleClass);
          listWrapper4.classList.remove(isVisibleClass);
          const menuLinks = menuWrapper.querySelectorAll("button");
          for (const menuLink of menuLinks) {
            menuLink.classList.remove(isActiveClass);
          }
        } else {
          toggleMenu.innerText = "Menu";
          toggleMenu.classList.remove(isVisibleClass);
        }
      });

      for (const level1Link of level1Links) {
        level1Link.addEventListener("click", function (e) {
          const siblingList = level1Link.nextElementSibling;
          if (siblingList) {
            e.preventDefault();
            this.classList.add(isActiveClass);
            const cloneSiblingList = siblingList.cloneNode(true);
            subMenuWrapper2.innerHTML = "";
            subMenuWrapper2.append(cloneSiblingList);
            listWrapper2.classList.add(isVisibleClass);
          }
        });
      }

      listWrapper2.addEventListener("click", function (e) {
        const target = e.target;
        if (
          target.tagName.toLowerCase() === "button" &&
          target.nextElementSibling
        ) {
          const siblingList = target.nextElementSibling;
          e.preventDefault();
          target.classList.add(isActiveClass);
          const cloneSiblingList = siblingList.cloneNode(true);
          subMenuWrapper3.innerHTML = "";
          subMenuWrapper3.append(cloneSiblingList);
          listWrapper3.classList.add(isVisibleClass);
        }
      });
      listWrapper3.addEventListener("click", function (e) {
        const target = e.target;
        if (
          target.tagName.toLowerCase() === "button" &&
          target.nextElementSibling
        ) {
          const siblingList = target.nextElementSibling;
          e.preventDefault();
          target.classList.add(isActiveClass);
          const cloneSiblingList = siblingList.cloneNode(true);
          subMenuWrapper4.innerHTML = "";
          subMenuWrapper4.append(cloneSiblingList);
          listWrapper4.classList.add(isVisibleClass);
        }
      });

      for (const backOneLevelBtn of backOneLevelBtns) {
        backOneLevelBtn.addEventListener("click", function () {
          const parent = this.closest(".list-wrapper");
          parent.classList.remove(isVisibleClass);
          parent.previousElementSibling
            .querySelector(".is-active")
            .classList.remove(isActiveClass);
        });
      }
    }
  },
};
var navigationDesktop = {
  init: function () {
    if (document.getElementsByClassName("navi-header").length > 0) {
      const openMenu = document.querySelectorAll(
        ".main__menu__item__holder__nested"
      );

      const mainMenuNavWrapper = document.querySelector(".navi-header");
      const mainMenuNavWrapperBar = document.querySelector(
        ".navi-header-wrapper"
      );

      const mainMenuNav = document.querySelector(".main__menu");
      const closeMenu = document.querySelectorAll(".close__nav");
      const closeMenuBottom = document.querySelectorAll(".close__nav__bottom");
      const search = document.querySelector(".icon__search");
      const closeSearch = document.querySelector(".close__search_2023");
      const openLeveltwo = document.querySelectorAll(".has_sub_menu_level_two");
      const openLevelthree = document.querySelectorAll(
        ".has_sub_menu_level_three"
      );
      const sub__menu__main = document.querySelectorAll(".sub__menu__main");
      navCards = false;

      for (const [elemIndex, elem] of openMenu.entries()) {
        elem.addEventListener("click", function () {
          for (const element of openMenu) {
            if (element === elem && !element.classList.contains("is__active")) {
              element.classList.add("is__active");
              mainMenuNav.classList.add("is__active");
              mainMenuNavWrapper.classList.add("is__active");
              mainMenuNavWrapperBar.classList.add("is__active");
              document
                .querySelector(".search__navigation")
                .classList.remove("is-open");
              element.parentElement
                .querySelector(".close__nav")
                .classList.remove("is__active");
              search.classList.remove("is-open");
              document
                .querySelectorAll(".menu__nav__cards")
                .forEach((menu__nav__cards) => {
                  if (navCards) {
                    menu__nav__cards.classList.remove("not__active");
                  }
                });
              for (const item of element.parentElement.querySelectorAll(
                ".sub__menu__main .is__active"
              )) {
                item.classList.remove("is__active");
              }
            } else if (
              element === elem &&
              element.classList.contains("is__active")
            ) {
              mainMenuNav.classList.remove("is__active");
              element.classList.remove("is__active");
              mainMenuNavWrapper.classList.remove("is__active");
              mainMenuNavWrapperBar.classList.remove("is__active");
            } else {
              element.classList.remove("is__active");
              mainMenuNav.classList.remove("is__active");
              mainMenuNavWrapper.classList.remove("is__active");
              mainMenuNavWrapperBar.classList.remove("is__active");
            }
          }

          for (const [index, megaMenu] of sub__menu__main.entries()) {
            if (
              index == elemIndex &&
              !megaMenu.classList.contains("is__active")
            ) {
              megaMenu.classList.add("is__active");
              mainMenuNav.classList.add("is__active");
              mainMenuNavWrapper.classList.add("is__active");
              mainMenuNavWrapperBar.classList.add("is__active");
            } else {
              megaMenu.classList.remove("is__active");
            }
          }
        });
      }

      // level two
      for (const [levelTwoIndex, levelTwo] of openLeveltwo.entries()) {
        const menu__nav__cards = levelTwo
          .closest(".main__menu__item")
          .querySelector(".menu__nav__cards");

        levelTwo.querySelector("button").addEventListener("click", function () {
          for (const [levelTwoIndexItem, levelTwoItem] of document
            .querySelectorAll(".sub__menu__level_two")
            .entries()) {
            if (
              levelTwoIndexItem == levelTwoIndex &&
              !levelTwoItem.classList.contains("is__active")
            ) {
              levelTwoItem.classList.add("is__active");
              //menu__nav__cards.style.visibility = "hidden";
              if (navCards) {
                menu__nav__cards.classList.add("not__active");
              }
            } else if (
              levelTwoIndexItem == levelTwoIndex &&
              levelTwoItem.classList.contains("is__active")
            ) {
              //menu__nav__cards.style.visibility = "visible";
              if (navCards) {
                menu__nav__cards.classList.remove("not__active");
              }
              levelTwoItem.classList.remove("is__active");
              for (const [levelThreeIndexItem, levelThreeItem] of document
                .querySelectorAll(".sub__menu__level_three")
                .entries()) {
                levelThreeItem.classList.remove("is__active");
              }
            } else {
              levelTwoItem.classList.remove("is__active");
              for (const [levelThreeIndexItem, levelThreeItem] of document
                .querySelectorAll(".sub__menu__level_three")
                .entries()) {
                levelThreeItem.classList.remove("is__active");
              }
            }
          }
        });
      }

      //level three
      for (const [levelThreeIndex, levelThree] of openLevelthree.entries()) {
        levelThree.addEventListener("click", function () {
          for (const [levelThreeIndexItem, levelThreeItem] of document
            .querySelectorAll(".sub__menu__level_three")
            .entries()) {
            if (
              levelThreeIndexItem == levelThreeIndex &&
              !levelThreeItem.classList.contains("is__active")
            ) {
              levelThreeItem.classList.add("is__active");
            } else {
              levelThreeItem.classList.remove("is__active");
            }
          }
        });
      }

      // close menu button
      for (const closeButton of closeMenu) {
        const menu__nav__cards = closeButton
          .closest(".main__menu__item")
          .querySelector(".menu__nav__cards");

        closeButton.addEventListener("click", function () {
          closeButton.classList.toggle("is__active");
          if (closeButton.className.includes("is__active")) {
            mainMenuNav.classList.remove("is__active");
            mainMenuNavWrapper.classList.remove("is__active");
            mainMenuNavWrapperBar.classList.remove("is__active");
            //menu__nav__cards.style.visibility = "visible";

            if (menu__nav__cards != null) {
              menu__nav__cards.classList.remove("not__active");
            }

            closeButton
              .closest(".sub__menu__main")
              .classList.remove("is__active");
            closeButton
              .closest(".main__menu__item")
              .querySelector(".main__menu__item__holder")
              .classList.remove("is__active");
          }
        });
      }

      // close bottom menu button
      for (const closeButton of closeMenuBottom) {
        closeButton.addEventListener("click", function () {
          closeButton.classList.toggle("is__active");
          if (closeButton.className.includes("is__active")) {
            mainMenuNav.classList.remove("is__active");

            closeButton
              .closest(".sub__menu__main")
              .classList.remove("is__active");
            closeButton
              .closest(".main__menu__item")
              .querySelector(".main__menu__item__holder")
              .classList.remove("is__active");
          }
        });
      }
      closeSearch.addEventListener("click", function () {
        document
          .querySelector(".search__navigation")
          .classList.toggle("is-open");
        search.classList.toggle("is-open");
      });
      // search button
      search.addEventListener("click", function () {
        console.log("why isn't this working");
        search.classList.toggle("is-open");
        let expanded = search.getAttribute("aria-expanded") === "true" || false;
        search.setAttribute("aria-expanded", !expanded);
        document.querySelector(".search__navigation").hidden = expanded;

        document
          .querySelector(".search__navigation")
          .classList.toggle("is-open");
        if (search.className.includes("is-open")) {
          mainMenuNav.classList.remove("is__active");

          document
            .querySelectorAll(".sub__menu__main.is__active")
            .forEach((menu) => {
              menu.classList.remove("is__active");
            });
          document
            .querySelectorAll(".main__menu__item__holder.is__active")
            .forEach((menu) => {
              menu.classList.remove("is__active");
            });
          document
            .querySelectorAll(".menu__nav__cards")
            .forEach((menu__nav__cards) => {
              menu__nav__cards.classList.remove("not__active");
            });
        }
      });
    }
  },
};
var swiperCarousel = {
  init: function () {
    const swiperCounterElement = document.querySelector(".swiper-counter");
    const paginElement = document.querySelector(".swiper-pagination");

    if (document.getElementsByClassName("invest-caro").length > 0) {
      function updSwiperNumericPagination() {
        swiperCounterElement.innerHTML =
          '<span class="count">' +
          (this.realIndex + 1) +
          '</span>/<span class="total">' +
          this.el.slidesQuantity +
          "</span>";
      }

      document.querySelectorAll(".invest-caro").forEach(function (element) {
        // Getting slides quantity before slider clones them
        element.slidesQuantity =
          element.querySelectorAll(".swiper-slide").length;

        // Swiper initialization
        const mySwiper = new Swiper(element, {
          modules: [Navigation, Pagination],
          centeredSlides: true,
          pagination: {
            el: paginElement,
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          direction: "horizontal",
          loop: true,
          speed: 500,
          slidesPerView: 1.5,
          spaceBetween: 10,
          on: {
            init: updSwiperNumericPagination,
            slideChange: updSwiperNumericPagination,
          },
        });

        // Resize event listener
        function handleResize() {
          var ww = window.innerWidth;
          if (ww > 1600) mySwiper.params.slidesPerView = 2;
          if (ww > 468 && ww <= 1600) mySwiper.params.slidesPerView = 1.5;
          if (ww <= 468) mySwiper.params.slidesPerView = 1;
          mySwiper.update();
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        // const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

        // // eslint-disable-next-line no-inner-declarations
        // function handleMobileMediaQuery(mq) {
        //   if (mq.matches) {
        //     mySwiper.params.slidesPerView = 1;
        //     mySwiper.params.spaceBetween = 50;
        //     mySwiper.update();
        //   } else {
        //     //mySwiper.params.slidesPerView = 2.5;
        //     mySwiper.update();
        //   }
        // }
        // mobileMediaQuery.addListener(handleMobileMediaQuery);
        // handleMobileMediaQuery(mobileMediaQuery);
      });
    }
  },
};

var mediaCarousel = {
  init: function () {
    const swiperCounterElement = document.querySelector(".swiper-counter");
    const paginElement = document.querySelector(".swiper-pagination");

    if (document.getElementsByClassName("media-caro").length > 0) {
      function updSwiperNumericPagination() {
        swiperCounterElement.innerHTML =
          '<span class="count">' +
          (this.realIndex + 1) +
          '</span>/<span class="total">' +
          this.el.slidesQuantity +
          "</span>";
      }

      document.querySelectorAll(".media-caro").forEach(function (element) {
        // Getting slides quantity before slider clones them
        element.slidesQuantity =
          element.querySelectorAll(".swiper-slide").length;

        // Swiper initialization
        const mySwiper = new Swiper(element, {
          modules: [Navigation, Pagination],
          centeredSlides: true,
          pagination: {
            el: paginElement,
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          direction: "horizontal",
          loop: true,
          speed: 500,
          slidesPerView: 1,
          spaceBetween: 0,
          on: {
            init: updSwiperNumericPagination,
            slideChange: updSwiperNumericPagination,
          },
        });

        // Resize event listener
        function handleResize() {
          var ww = window.innerWidth;
          if (ww > 1600) mySwiper.params.slidesPerView = 1;
          if (ww > 468 && ww <= 1600) mySwiper.params.slidesPerView = 1;
          if (ww <= 468) mySwiper.params.slidesPerView = 1;
          mySwiper.update();
        }

        window.addEventListener("resize", handleResize);
        handleResize();
      });
    }
  },
};

var teamCarousel = {
  init: function () {
    const swiperCounterElement = document.querySelector(".team-counter");
    const paginElement = document.querySelector(".team-pagination");

    if (document.getElementsByClassName("epiris-team").length > 0) {
      function updSwiperNumericPagination() {
        swiperCounterElement.innerHTML =
          '<span class="count">' +
          (this.realIndex + 1) +
          '</span>/<span class="total">' +
          this.el.slidesQuantity +
          "</span>";
      }

      document.querySelectorAll(".epiris-team").forEach(function (element) {
        // Getting slides quantity before slider clones them
        element.slidesQuantity =
          element.querySelectorAll(".swiper-slide").length;

        // Swiper initialization
        const mySwiper = new Swiper(element, {
          modules: [Navigation, Pagination],
          watchSlidesProgress: true,
          pagination: {
            el: paginElement,
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          // direction: "horizontal",
          loop: true,
          speed: 500,
          slidesPerView: 4.2,
          spaceBetween: 10,
          on: {
            init: updSwiperNumericPagination,
            slideChange: updSwiperNumericPagination,
          },
        });

        // Resize event listener
        function handleResize() {
          var ww = window.innerWidth;
          if (ww > 1000) mySwiper.params.slidesPerView = 4;
          if (ww > 468 && ww <= 1000) mySwiper.params.slidesPerView = 2;
          if (ww <= 468) mySwiper.params.slidesPerView = 1;
          mySwiper.update();
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        // const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
        // // eslint-disable-next-line no-inner-declarations
        // function handleMobileMediaQuery(mq) {
        //   if (mq.matches) {
        //     //  mySwiper.params.slidesPerGroup = 1;
        //     mySwiper.params.slidesPerView = 1;
        //     mySwiper.params.spaceBetween = 0;

        //     mySwiper.update();
        //   } else {
        //     mySwiper.update();
        //   }
        // }
        // mobileMediaQuery.addListener(handleMobileMediaQuery);
        // handleMobileMediaQuery(mobileMediaQuery);
      });
    }
  },
};
var responsibilityCarousel = {
  init: function () {
    const swiperCounterElement = document.querySelector(".swiper-counter");
    const paginElement = document.querySelector(".swiper-pagination");

    if (document.getElementsByClassName("responsibility-caro").length > 0) {
      function updSwiperNumericPagination() {
        swiperCounterElement.innerHTML =
          '<span class="count">' +
          (this.realIndex + 1) +
          '</span>/<span class="total">' +
          this.el.slidesQuantity +
          "</span>";
      }

      document
        .querySelectorAll(".responsibility-caro")
        .forEach(function (element) {
          // Getting slides quantity before slider clones them
          element.slidesQuantity =
            element.querySelectorAll(".swiper-slide").length;

          // Swiper initialization
          const mySwiper = new Swiper(element, {
            modules: [Navigation, Pagination],
            watchSlidesProgress: true,
            pagination: {
              el: paginElement,
              type: "progressbar",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // direction: "horizontal",
            loop: true,
            speed: 500,
            slidesPerView: 1,
            spaceBetween: 0,
            on: {
              init: updSwiperNumericPagination,
              slideChange: updSwiperNumericPagination,
            },
          });

          const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
          // eslint-disable-next-line no-inner-declarations
          function handleMobileMediaQuery(mq) {
            if (mq.matches) {
              //  mySwiper.params.slidesPerGroup = 1;
              mySwiper.params.slidesPerView = 1;
              mySwiper.params.spaceBetween = 50;

              mySwiper.update();
            } else {
              mySwiper.update();
            }
          }
          mobileMediaQuery.addListener(handleMobileMediaQuery);
          handleMobileMediaQuery(mobileMediaQuery);
        });
    }
  },
};
var popupModal = {
  init: function () {
    var btn = document.querySelectorAll(".trigger");
    var modals = document.querySelectorAll(".modal-item");
    var spans = document.getElementsByClassName("close-button");

    // When the user clicks the button, open the modal
    for (var i = 0; i < btn.length; i++) {
      btn[i].onclick = function (e) {
        e.preventDefault();

        let modal = document.querySelector(e.target.getAttribute("href"));
        //console.log(modal);
        modal.classList.add("show-modal");
      };
    }

    // When the user clicks on <span> (x), close the modal
    for (var i = 0; i < spans.length; i++) {
      spans[i].onclick = function () {
        for (var index in modals) {
          if (typeof modals[index].style !== "undefined")
            modals[index].classList.remove("show-modal");
        }
      };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target.classList.contains("modal-item")) {
        for (var index in modals) {
          if (typeof modals[index].style !== "undefined")
            modals[index].classList.remove("show-modal");
        }
      }
    };
  },
};
var videoModal = {
  init: function () {
    if (document.getElementsByClassName("videomodal-content").length > 0) {
      const wrapper = document.getElementById("lvideo-wrapp");
      const element = document.querySelector(".trigger");
      if (element) {
        var btn = document.querySelectorAll(".trigger");
        var modals = document.querySelectorAll(".modal-item");
        var spans = document.getElementsByClassName("close-button");
        const vidPlaySingle = document.getElementsByClassName("trigger")[0];
        const vidModal = document.querySelector(".modal-item");

        var closeButton = document.querySelector(".close-button");

        vidModal.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            let iframe = document.querySelector("iframe");
            let parent = iframe.parentNode;
            parent.removeChild(iframe);

            wrapper.classList.remove("active");
          },
          false
        );

        closeButton.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            //console.log("close video");
            let iframe = document.querySelector("iframe");
            let parent = iframe.parentNode;
            parent.removeChild(iframe);

            wrapper.classList.remove("active");
          },
          false
        );

        vidPlaySingle.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            vidModal.classList.add("show-modal");
          },
          false
        );

        // When the user clicks on <span> (x), close the modal
        for (var i = 0; i < spans.length; i++) {
          spans[i].onclick = function () {
            body.classList.remove("lvideo-active");
            let iframe = document.querySelector("iframe");
            let parent = iframe.parentNode;
            parent.removeChild(iframe);

            for (var index in modals) {
              if (typeof modals[index].style !== "undefined")
                modals[index].classList.remove("show-modal");
            }
          };
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target.classList.contains("modal-item")) {
            for (var index in modals) {
              if (typeof modals[index].style !== "undefined")
                modals[index].classList.remove("show-modal");
              let iframe = document.querySelector("iframe");
              let parent = iframe.parentNode;
              parent.removeChild(iframe);
            }
          }
        };

        document
          .querySelectorAll(".trigger")
          .forEach((d) => d.addEventListener("click", playVideos));
        const body = document.body;

        function playVideos(e) {
          lvideo(e.currentTarget.dataset.url);

          body.classList.add("lvideo-active");

          wrapper.classList.add("active");

          const url = this.dataset.url;

          const startModal = `<span onclick="lvideoClose();" class="lvideo-overlay"></span> <div class="lvideo-container">`;
          const finishModal = `</div><button onclick="lvideoClose();" class="lvideo-close">x</button>`;

          // if (url.indexOf("youtube") !== -1) {
          if (url.indexOf("youtube") !== -1 || url.indexOf("youtu") !== -1) {
            //console.log("is youtube")
            const ytUrl = [this.dataset.url];

            var i,
              r,
              regExp =
                /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

            for (i = 0; i < ytUrl.length; ++i) {
              r = ytUrl[i].match(regExp);
              //console.log(r[1])

              document.getElementById(
                "lvideo-wrapp"
              ).innerHTML = `${startModal}<iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>${finishModal}`;
            }
          } else if (url.indexOf("vimeo") !== -1) {
            // console.log("is Vimeo")

            const vimeoURL = this.dataset.url;
            const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

            const match = vimeoURL.match(regExp);

            if (match) {
              document.getElementById(
                "lvideo-wrapp"
              ).innerHTML = `<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" class="fill-fit" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
            } else {
              alert("Not a Vimeo!  URL example:\n https://vimeo.com/120206922");
            }
          } else if (url.indexOf("mp4") !== -1 || url.indexOf("m4v") !== -1) {
            document.getElementById(
              "lvideo-wrapp"
            ).innerHTML = `<video controls loop playsinline autoplay><source src='${this.dataset.url}' type="video/mp4"></video>`;
          } else {
            alert("No video link found.");
          }
        }

        // LAUNCH
        function lvideo() {}
      }
    }
  },
};

var homeVideoModal = {
  init: function () {
    if (document.getElementsByClassName("videomodal-content-home").length > 0) {
      const wrapper = document.getElementById("lvideo-wrapp-home");
      const element = document.querySelector(".trigger-home");
      if (element) {
        var btn = document.querySelectorAll(".trigger-home");
        var modals = document.querySelectorAll(".modal-item-home");
        var spans = document.getElementsByClassName("close-button-home");
        const vidPlaySingle =
          document.getElementsByClassName("trigger-home")[0];
        const vidModal = document.querySelector(".modal-item-home");

        var closeButton2 = document.querySelector(".close-button-home");

        vidModal.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            let iframe2 = document.querySelector("iframe");
            let parent = iframe2.parentNode;
            parent.removeChild(iframe2);

            wrapper.classList.remove("active");
          },
          false
        );

        closeButton2.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            console.log("close video");
            // let iframe2 = document.querySelector("iframe");
            //let parent = iframe2.parentNode;
            //parent.removeChild(iframe2);

            wrapper.classList.remove("active");
          },
          false
        );

        vidPlaySingle.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            vidModal.classList.add("show-modal-home");
          },
          false
        );

        // When the user clicks on <span> (x), close the modal
        for (var i = 0; i < spans.length; i++) {
          spans[i].onclick = function () {
            body.classList.remove("lvideo-active-home");
            let iframe2 = document.querySelector("iframe");
            let parent = iframe2.parentNode;
            parent.removeChild(iframe2);

            for (var index in modals) {
              if (typeof modals[index].style !== "undefined")
                modals[index].classList.remove("show-modal-home");
            }
          };
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target.classList.contains("modal-item-home")) {
            for (var index in modals) {
              if (typeof modals[index].style !== "undefined")
                modals[index].classList.remove("show-modal-home");
              let iframe2 = document.querySelector("iframe");
              let parent = iframe2.parentNode;
              parent.removeChild(iframe2);
            }
          }
        };

        document
          .querySelectorAll(".trigger-home")
          .forEach((d) => d.addEventListener("click", playVideos));
        const body = document.body;

        function playVideos(e) {
          lvideo(e.currentTarget.dataset.url);

          body.classList.add("lvideo-active-home");

          wrapper.classList.add("active");

          const url = this.dataset.url;

          const startModal = `<span onclick="lvideoClose();" class="lvideo-overlay-home"></span> <div class="lvideo-container-home">`;
          const finishModal = `</div><button onclick="lvideoClose();" class="lvideo-close-home">x</button>`;

          // if (url.indexOf("youtube") !== -1) {
          if (url.indexOf("youtube") !== -1 || url.indexOf("youtu") !== -1) {
            //console.log("is youtube")
            const ytUrl = [this.dataset.url];

            var i,
              r,
              regExp =
                /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

            for (i = 0; i < ytUrl.length; ++i) {
              r = ytUrl[i].match(regExp);
              //console.log(r[1])

              document.getElementById(
                "lvideo-wrapp-home"
              ).innerHTML = `${startModal}<iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen id="homepageVid"></iframe>${finishModal}`;
            }
          } else if (url.indexOf("vimeo") !== -1) {
            // console.log("is Vimeo")

            const vimeoURL = this.dataset.url;
            const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

            const match = vimeoURL.match(regExp);

            if (match) {
              document.getElementById(
                "lvideo-wrapp-home"
              ).innerHTML = `<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" class="fill-fit" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen id="homepageVid"></iframe>`;
            } else {
              alert("Not a Vimeo!  URL example:\n https://vimeo.com/120206922");
            }
          } else if (url.indexOf("mp4") !== -1 || url.indexOf("m4v") !== -1) {
            document.getElementById(
              "lvideo-wrapp-home"
            ).innerHTML = `<video controls loop playsinline autoplay><source src='${this.dataset.url}' type="video/mp4"></video>`;
          } else {
            alert("No video link found.");
          }
        }

        // LAUNCH
        function lvideo() {}
      }
    }
  },
};
