'use client'

import { FC } from 'react'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

import { Slider } from '../slider'

import styles from './Carousel.module.scss'

interface ICarouselProps {
    imagesSrc: string[]
}

export const Carousel: FC<ICarouselProps> = ({ imagesSrc }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper_marquee}>
                <Slider plugins={[AutoScroll({ stopOnInteraction: false, stopOnFocusIn: false, speed: 1 })]} options={{ loop: true, dragFree: true }}>
                    {[...imagesSrc, ...imagesSrc].map((image, index) => (
                        <div key={index} className={styles.image}>
                            <Image src={image} width={250} height={40} alt='' />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
