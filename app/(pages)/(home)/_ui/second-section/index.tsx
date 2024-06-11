'use client'

import { FC } from 'react'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'

import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { Container } from '@/app/(app)/_components/container'
import { Button } from '@/app/_shared/ui/button'
import { Article } from '@/app/_shared/ui/typography/article'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Slider } from '@/app/(app)/_components/slider'
import { slides } from '../../_const/lists'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    const [onEmblaApiInit, onSliderScroll] = useScrollSlider();

    return (
        <Container as='section' className={styles.wrapper} id='products'>
            <SubTitle
                upTitle='PRODUCTS'
                title='OUR INNOVATIVE PRODUCTS'
                isButtonGroup
                prevSlideFn={() => onSliderScroll('prev')}
                nextSlideFn={() => onSliderScroll('next')}
            />
            <Slider plugins={[Fade(), Autoplay({ delay: 10000 })]} onEmblaApiInit={onEmblaApiInit}>
                {slides.map((item) => (
                    <div key={item.id} className={styles.slide}>
                        <div key={item.id} className={styles.article}>
                            <Article titleTag='h2' title={item.title} paragraphs={item.paragraphs} />
                            <div className={styles['article_btn-box']}>
                                <Button variant='short'>ORDER NOW</Button>
                                <Button variant='short' withoutBg>
                                    DOWNLOAD DATASHEET
                                </Button>
                            </div>
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
