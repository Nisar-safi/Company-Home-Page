const open_btn = document.getElementById("open");
const close_btn = document.getElementById("close");
const navbar_resp = document.getElementById("navbar_resp")
open_btn.addEventListener("click", onOpen)
function onOpen() {
  navbar_resp.style.left = "0px";
  open_btn.style.display="none";
  close_btn.style.display="block";

}
close_btn.addEventListener("click", onClose)
function onClose() {
  navbar_resp.style.left = "-100%";
  close_btn.style.display="none";
  open_btn.style.display="block";
}




// /    Carousele section





const buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    console.log(offset);
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})




// work on accordion

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  title.addEventListener('click', () => {
   
    
        // toggle the accordion item
        item.classList.toggle('active');
      
  

  });
});











