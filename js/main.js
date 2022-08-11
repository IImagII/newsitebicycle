//Слайдер
function slider() {
   let slideIndex = 1,
      sliderItem = document.querySelectorAll('.slider-item'),
      dotsWrap = document.querySelector('.slider-dots'),
      slider = document.querySelector('.bike__columb-slider'),
      hover,
      dots = document.querySelectorAll('.dot')

   function howSlides(n) {
      if (n > sliderItem.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = sliderItem.length
      }
      sliderItem.forEach((item) => {
         item.style.display = 'none'
      })
      dots.forEach((item) => {
         item.classList.remove('dot-active')
      })
      sliderItem[slideIndex - 1].style.display = 'block'
      dots[slideIndex - 1].classList.add('dot-active')
   }

   howSlides(slideIndex)

   function plusSlides(n) {
      howSlides((slideIndex += n))
   }
   function currentSlide(n) {
      howSlides((slideIndex = n))
   }

   dotsWrap.addEventListener('click', (e) => {
      for (let i = 0; i < dots.length + 1; i++) {
         if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
            currentSlide(i)
         }
      }
   })
   slider.addEventListener('mouseover', () => {
      hover = 0
   })
   slider.addEventListener('mouseout', () => {
      hover = 1
   })

   setInterval(() => {
      hover && plusSlides(1)
   }, 5000)
}
slider()

function sliderInfo() {
   let slideIndex = 1,
      sliderItem = document.querySelectorAll('.slider__item'),
      dotsWrap = document.querySelector('.slider__dots'),
      slider = document.querySelector('.slider__items'),
      hover,
      dots = document.querySelectorAll('.slider__dot')

   function howSlides(n) {
      if (n > sliderItem.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = sliderItem.length
      }
      sliderItem.forEach((item) => {
         item.style.display = 'none'
      })
      dots.forEach((item) => {
         item.classList.remove('slider__dot-active')
      })
      sliderItem[slideIndex - 1].style.display = 'block'
      dots[slideIndex - 1].classList.add('slider__dot-active')
   }

   howSlides(slideIndex)

   function plusSlides(n) {
      howSlides((slideIndex += n))
   }
   function currentSlide(n) {
      howSlides((slideIndex = n))
   }

   dotsWrap.addEventListener('click', (e) => {
      for (let i = 0; i < dots.length + 1; i++) {
         if (e.target.classList.contains('slider__dot') && e.target == dots[i - 1]) {
            currentSlide(i)
         }
      }
   })
   slider.addEventListener('mouseover', () => {
      hover = 0
   })
   slider.addEventListener('mouseout', () => {
      hover = 1
   })

   setInterval(() => {
      hover && plusSlides(1)
   }, 5000)
}
sliderInfo()
