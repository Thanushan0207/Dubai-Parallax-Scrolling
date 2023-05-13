let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');
let building = document.getElementById('building');

let buildingTop = parseInt(getComputedStyle(building).top);

function updateParallax() {
  let scrollPosition = window.pageYOffset;

  dubaiText.style.left = scrollPosition * -2 + 'px';

  let maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition <= maxScrollPosition) {
    let parallaxValue = scrollPosition / maxScrollPosition;

    burjkhalifa.style.top = (parallaxValue * 500) + buildingTop + 'px';
    stars.style.top = (parallaxValue * 300) + buildingTop + 'px';
  }
}

window.addEventListener('resize', () => {
  buildingTop = parseInt(getComputedStyle(building).top);
});

window.addEventListener('scroll', () => {
  updateParallax();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});