'use client'

import { FC } from 'react'
import Image from 'next/image'

import { ISlideItem } from './_const/slide-item'
import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Text } from '@/app/_shared/ui/typography/text'
import { Slider } from '@/app/(app)/_components/slider'

import styles from './CompanyTeam.module.scss'

interface ICompanyTeamProps {
    upTitle: string
    title: string
    subTitle: string
    slides: ISlideItem[]
}

export const CompanyTeam: FC<ICompanyTeamProps> = ({ upTitle, title, subTitle, slides }) => {
    const { onEmblaApiInit, onSliderScroll } = useScrollSlider()

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <SubTitle
                    upTitle={upTitle}
                    title={title}
                    isButtonGroup
                    prevSlideFn={() => onSliderScroll('prev')}
                    nextSlideFn={() => onSliderScroll('next')}
                >
                    {subTitle}
                </SubTitle>
            </Container>
            <Slider hasDots hasContainer onEmblaApiInit={onEmblaApiInit}>
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <Image src={slide.imgSrc} width={512} height={512} alt='' />
                        <div className={styles.slide_content}>
                            <Text as='span'>{slide.name}</Text>
                            <Text as='p'>{slide.title}</Text>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
