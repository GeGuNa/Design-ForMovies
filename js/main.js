
function ScrollLeft(aqz_1) { 
	
const iDqz = document.querySelector("#"+aqz_1+"");
output.scrollLeft += 50	

}


function ScrollRight(id) { 
	
const iDqz = document.querySelector("#"+id+"");
iDqz.scrollLeft -= 50	
	
}









document.addEventListener("DOMContentLoaded", () => {
	
	
	
	
	
	
	
const slider = document.querySelector('#New_z');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  //slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  //slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});	
	
	
	
	
	
	
	
	
	




console.log(`yap`)	
	
});

