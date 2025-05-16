window.addEventListener('scroll', function () {
  const skillsSection = document.getElementById('competences');
  const progressBars = document.querySelectorAll('.progress');

  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight >= sectionTop + sectionHeight / 4) {
    progressBars.forEach(bar => bar.classList.add('animate'));
  }
});
