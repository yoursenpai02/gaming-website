const nextbutton = document.querySelector('.next-btn');
const heroSection = document.querySelector('.hero-video');

const movielist = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4, videos/hero-4.mp4',];

let index = 0;
nextbutton.addEventListener('click', function(){

   index += 1
   video.src = movielist[index];

   if (index === 3){
    index = -1;
   }
})