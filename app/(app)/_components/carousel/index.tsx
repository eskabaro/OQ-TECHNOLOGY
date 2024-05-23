'use client'

import { FC } from 'react'
import Image from 'next/image'

import styles from './Carousel.module.scss'

interface ICarouselProps {
    imagesSrc: string[]
}

export const Carousel: FC<ICarouselProps> = ({ imagesSrc }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper_marquee}>
                <div className={styles.group}>
                    {[...imagesSrc, ...imagesSrc].map((image, index) => (
                        <div key={index} className={styles.group_image}>
                            <Image src={image} width={250} height={40} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
