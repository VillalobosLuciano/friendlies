'use client'
import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

export default function ImageSlider({ images }: any) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3500)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <>
      <div className="bg-[#E2DFDB]">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image: any, i: number) => (
            <div key={i} className="keen-slider__slide">
              <Image
                className="h-80 min-w-fit object-cover md:h-[80vh]"
                src={image}
                alt="snapshot"
                width={1200}
                height={1200}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
