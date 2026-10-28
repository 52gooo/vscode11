// 获取轮播图及控制按钮
const slides = document.querySelectorAll('.slide');
const dotsBox = document.querySelector('.carousel-dots');
let currentSlide = 0;
let timer;

// 根据轮播图数量创建分页圆点
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `切换到第${index + 1}张轮播图`);
  dot.addEventListener('click', () => showSlide(index));
  dotsBox.appendChild(dot);
});

// 切换轮播图，并同步分页圆点状态
function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dotsBox.children[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsBox.children[currentSlide].classList.add('active');
}

// 自动轮播及手动切换
function restartTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(currentSlide + 1), 4500);
}
document.querySelector('.prev').addEventListener('click', () => { showSlide(currentSlide - 1); restartTimer(); });
document.querySelector('.next').addEventListener('click', () => { showSlide(currentSlide + 1); restartTimer(); });
showSlide(0);
restartTimer();
