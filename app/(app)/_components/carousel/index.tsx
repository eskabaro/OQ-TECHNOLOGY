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
                    {imagesSrc.map((e, i) => (
                        <div key={i} className={styles.group_image}>
                            <Image src={e} width={250} height={95} alt='' />
                        </div>
                    ))}
                </div>
                <div className={styles.group}>
                    {imagesSrc.map((e, i) => (
                        <div key={i} className={styles.group_image}>
                            <Image src={e} width={250} height={95} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
