'use client'

import { FC, useMemo, useState } from 'react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'

import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Slider } from '@/app/(app)/_components/slider'
import { ProductItem } from './_ui/product-item'
import { FormModal } from './_ui/form-modal'
import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { onEmblaApiInit, onSliderScroll } = useScrollSlider()

    const products = useMemo(
        () => [
            {
                id: 1,
                title: 'OQ ONE',
                paragraphs: [
                    'OQ ONE is a flexible, rugged, and programmable IoT terminal offering pre-paid data packages, This terminal is specifically designed for remote monitoring and controlling of both fixed and mobile assets across various industries such as transportation, oil and gas, utilities, maritime, agriculture, and more.'
                ],
                imgSrc: require('../../_assets/innovation/slide-1.webp'),
                buttonText: 'ORDER NOW A DEMO KIT',
                onClick: () => setIsModalOpen(true)
            },
            {
                id: 2,
                title: 'OQ TrackME',
                paragraphs: [
                    'OQ TrackME is a compact personal and commercial GPS/GNSS tracker with cellular and satellite 5G IoT connectivity offering pre-paid data packages and equipped with long life battery. This makes it an ideal companion for hikers, climbers, mountaineers and seafarers. Panic button also included.'
                ],
                imgSrc: require('../../_assets/innovation/slide-2.webp'),
                buttonText: 'ORDER NOW',
                onClick: () => setIsModalOpen(true)
            },
            {
                id: 3,
                title: 'Multimode LTE-M / NB-IoT / Satellite / GNSS SoC',
                paragraphs: [
                    'Designed for applications requiring continuous network connectivity, the module leverages the new 3GPP Release 17 features to ensure seamless coverage across the globe. On top of the satellite connectivity, the module supports terrestrial LTE Cat Ml and LTE Cat NB2 optimized for IoT applications.'
                ],
                imgSrc: require('../../_assets/innovation/slide-3.webp'),
                buttonText: 'ORDER NOW',
                onClick: () => console.log('clicked')
            }
        ],
        []
    )

    return (
        <Container as='section' className={styles.wrapper} id='products'>
            <SubTitle
                upTitle=''
                title='OUR INNOVATIVE PRODUCTS'
                isButtonGroup
                prevSlideFn={() => onSliderScroll('prev')}
                nextSlideFn={() => onSliderScroll('next')}
            />
            <Slider
                plugins={[Fade(), Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true, delay: 5000 })]}
                onEmblaApiInit={onEmblaApiInit}
                hasDots
            >
                {products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </Slider>
            <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Container>
    )
}
