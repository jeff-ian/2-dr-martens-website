const hl = document.querySelectorAll('.hl');
const sideGallery = document.querySelector('.side-gallery')

function displaySideGallery () {
  if (sideGallery.classList.contains('visible')){
    sideGallery.classList.remove('visible')
  }else {
    sideGallery.classList.add('visible')
  }
  
}

hl.forEach(highlight => {
  highlight.addEventListener('mouseenter',() => {
  displaySideGallery();  
})

  highlight.addEventListener('mouseleave',() => {
    displaySideGallery(); 
  })
})



