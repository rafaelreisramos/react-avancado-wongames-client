import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close
} from '@styled-icons/material-outlined'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="Next image" />,
  prevArrow: <ArrowLeft aria-label="Previous image" />
}

const sliderSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const slider = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Container>
      <Slider ref={slider} settings={sliderSettings}>
        {items.map((item, index) => (
          <Image
            key={`thumb-${index}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            width={295}
            height={165}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                key={`gallery-${index}`}
                src={item.src}
                alt={`${item.label}`}
                width={1200}
                height={675}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Container>
  )
}

export default Gallery
