import React, { useEffect, useState } from 'react'

const Carousel = (props) => {
    var currentSlide = 0;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(4)
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {   
        const slides = document.querySelectorAll(".slide")
        const dots = document.querySelectorAll('.dot')

        const init = (n) => {
        slides.forEach((slide) => {
            slide.style.display = "none"
            dots.forEach((dot) => {
            dot.classList.remove("active")
            })
        })
        slides[n].style.display = "block"
        dots[n].classList.add("active")
        }
        document.addEventListener("DOMContentLoaded", init(currentSlide))

        dots.forEach((dot, index) => {
            dot.addEventListener("click", (i) => {
              init(index)
              currentSlide = i
            })
          })
    });

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }
    return (
        <div className="carousel-container">      
            <div class="slide-container">   
            <div class="slide fade">
                <img src={require('../assets/images/1.jpeg').default} alt="placeholder" style={{width: '100%'}} />
              </div>
              <div class="slide fade">
                <img src={require('../assets/images/2.jpeg').default} alt="placeholder" style={{width: '100%'}} />
              </div>
              <div class="slide fade">
                <img src={require('../assets/images/5.jpeg').default} alt="placeholder" style={{width: '100%'}} />
              </div>
              <div class="slide fade">
                <img src={require('../assets/images/4.jpeg').default} alt="placeholder" style={{width: '100%'}} />
              </div>
            </div>
            <div class="dots-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    )
}

export default Carousel