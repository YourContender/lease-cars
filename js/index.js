const tabsItem = document.querySelectorAll('.tabs_btn-item');

tabsItem.forEach(item => {
  item.addEventListener('click', open);
})

function open(e) {
  const target = e.currentTarget;

  tabsItem.forEach(item => {
    item.classList.remove('tabs_btn-item-active');
  })

  target.classList.add('tabs_btn-item-active');
}

 
const swiper = new Swiper(".mySwiper", {
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});
