'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Article } from '@/app/_shared/ui/typography/article'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './Third.module.scss'

export const ThirdSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <SubTitle upTitle='TECHNOLOGY' title='HIGH ALTITUDE PLATFORMS AND DRONES' />

            <div className={styles.wrapper_content}>
                <div className={styles['left-side']}>
                    <Article
                        titleTag='h2'
                        title='Technology Description'
                        paragraphs={[
                            'OQ Technology developed the IP of cellular base station software and hardware that can function in power-limited non-terrestrial moving objects. Imagine the cell towers in the sky moving at more than 7 Km/s at distances of hundreds of kilometers away.',
                            'This Base Station Box (the payload) can be fitted on LEO satellites, partner GEO hubs, or even HAPS and drones to provide instantaneous local or global 5G IoT coverage in poorly connected areas, or during disasters when terrestrial networks are no longer available.',
                            'Because we build our own software we can control the quality and capacity of the service to give our users the best and most secure experience.'
                        ]}
                    />
                </div>

                <div className={styles['right-side']}>
                    <Image src={require('../../_assets/ballon-1.webp')} width={630} height={280} alt='' />
                    <Image src={require('../../_assets/ballon-2.webp')} width={630} height={280} alt='' />
                </div>
            </div>
        </div>
    )
}
