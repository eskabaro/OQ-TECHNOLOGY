'use client'

import { FC, PropsWithChildren } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'

import { Dots } from './_ui/dots'
import { Container } from '../container'

import styles from './Slider.module.scss'

type TSliderProps = PropsWithChildren<{
    hasContainer?: boolean
    options?: EmblaOptionsType
    plugins?: EmblaPluginType[]
}>

export const Slider: FC<TSliderProps> = ({ hasContainer = false, options = {}, plugins = [], children }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

    const Wrapper = hasContainer ? Container : 'div'

    return (
        <div className={styles.slider} ref={emblaRef}>
            <Wrapper className={styles.slider_list}>{children}</Wrapper>
            <Dots emblaApi={emblaApi} />
        </div>
    )
}
