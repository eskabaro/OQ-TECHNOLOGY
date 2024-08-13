'use client'

import { FC } from 'react'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'

import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { Container } from '@/app/(app)/_components/container'
import { Article } from '@/app/_shared/ui/typography/article'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Slider } from '@/app/(app)/_components/slider'
import { slides } from '../../_const/lists'

import styles from './SixthSection.module.scss'

export const SixthSection: FC = () => {
    const { onEmblaApiInit, onSliderScroll } = useScrollSlider()

    return (
        <Container as='section' className={styles.wrapper}>
            <SubTitle
                upTitle='OQ TECHNOLOGY ADVANTAGES'
                title='VALUE PROPOSITION'
                isButtonGroup
                prevSlideFn={() => onSliderScroll('prev')}
                nextSlideFn={() => onSliderScroll('next')}
            />
            <Slider plugins={[Fade(), Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true, delay: 5000 })]} onEmblaApiInit={onEmblaApiInit} hasDots>
                {slides.map((item) => (
                    <div key={item.id} className={styles.slide}>
                        <div className={styles.article}>
                            <Article titleTag='h2' title={item.title} paragraphs={item.paragraphs} />
                        </div>

                        <div className={styles['image-box']}>
                            <Image src={item.imgSrc} height={666} width={773} priority alt='' />
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    )
}
