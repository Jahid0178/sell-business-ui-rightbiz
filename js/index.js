// RECENT BUSINESS
const recentBusinessList = document.querySelector(".carousel-container");
const allRecentBusinessItem =
  recentBusinessList.querySelectorAll(".carousel-body");
let recentBusinessIndicator = document.querySelector(
  ".recent-business-indicator"
);
let i = 0;
let indicatorLength = Math.ceil(
  recentBusinessList.scrollWidth / recentBusinessList.offsetWidth
);

for (let i = 0; i < indicatorLength; i++) {
  const spanIndicator = document.createElement("span");
  recentBusinessIndicator.appendChild(spanIndicator);
}

recentBusinessIndicator.children[0].classList.add("active");

let scrolling = setInterval(autoScroll, 2000);

let timer = null;

recentBusinessList.addEventListener("scroll", function () {
  clearInterval(scrolling);
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    let scrolled = Math.round(
      recentBusinessList.scrollLeft / recentBusinessList.offsetWidth
    );
    i = Math.round(
      recentBusinessList.scrollLeft / allRecentBusinessItem[0].offsetWidth
    );

    Array.from(recentBusinessIndicator.children).forEach((i) =>
      i.classList.remove("active")
    );
    recentBusinessIndicator.children[scrolled].classList.add("active");
    scrolling = setInterval(autoScroll, 2000);
  }, 150);
});

function autoScroll() {
  if (window.innerWidth > 768) {
    if (i === allRecentBusinessItem.length - 3) {
      i = 0;
    } else {
      i++;
    }
  } else if (window.innerWidth > 576) {
    if (i === allRecentBusinessItem.length - 2) {
      i = 0;
    } else {
      i++;
    }
  } else {
    if (i === allRecentBusinessItem.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }
  recentBusinessList.scroll({
    top: 0,
    left: i * allRecentBusinessItem[i].offsetWidth,
    behavior: "smooth",
  });
}

Array.from(recentBusinessIndicator.children).forEach((indicator, idx) => {
  indicator.addEventListener("click", function () {
    recentBusinessList.scrollLeft = idx * recentBusinessList.offsetWidth;
  });
});
