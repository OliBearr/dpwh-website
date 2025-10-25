// Simple carousel logic for the "projects" carousel
document.addEventListener('DOMContentLoaded', function(){
  const carousel = document.getElementById('projectsCarousel');
  if(!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const dotsContainer = carousel.querySelector('.dots');
  let idx = 0;

  function renderDots(){
    dotsContainer.innerHTML = '';
    slides.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.setAttribute('aria-label','Go to slide '+(i+1));
      if(i===idx) btn.classList.add('active');
      btn.addEventListener('click', ()=> {goTo(i)});
      dotsContainer.appendChild(btn);
    });
  }

  function update(){
    slides.forEach((s,i)=> s.classList.toggle('active', i===idx));
    const dots = Array.from(dotsContainer.children);
    dots.forEach((d,i)=> d.classList.toggle('active', i===idx));
  }

  function goTo(i){
    idx = (i + slides.length) % slides.length;
    update();
  }

  carousel.querySelector('.prev').addEventListener('click', ()=> goTo(idx-1));
  carousel.querySelector('.next').addEventListener('click', ()=> goTo(idx+1));

  renderDots();
  update();

  // auto-advance
  setInterval(()=> goTo(idx+1), 6000);
});