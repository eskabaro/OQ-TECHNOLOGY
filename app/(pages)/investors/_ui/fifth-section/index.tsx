'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Article } from '@/app/_shared/ui/typography/article'

import styles from './FifthSection.module.scss'

export const FifthSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <SubTitle upTitle='OQ TECHNOLOGY ENABLES SUSTAINABLE GROWTH TO VITAL INDUSTRIES​​' title='PROBLEM / SOLUTION OVERVIEW' />
            <div className={styles.wrapper_content}>
                <div className={styles['left-side']}>
                    <Article
                        title='Problem'
                        paragraphs={[
                            '80% of the world has no mobile coverage​',
                            'Limited sustainable growth for vital sectors such as logistics, energy, agritech and utilities without connectivity'
                        ]}
                    />
                </div>
                <div className={styles['right-side']}>
                    <Image src={require('../../_assets/problem.webp')} width={725} height={250} alt='' priority />
                </div>
            </div>
            <div className={styles.wrapper_content}>
                <div className={styles['left-side']}>
                    <Image src={require('../../_assets/solution.webp')} width={725} height={250} alt='' priority />
                </div>
                <div className={styles['right-side']}>
                    <Article
                        title='Solution'
                        paragraphs={[
                            'OQ is a comprehensive solution providing full coverage IoT connectivity in (4G/5G) offering a global roaming service for all IoT applications based on a LEO constellation of nanosatellites​',
                            'Billion of devices can be accommodated on OQ’s network with a truly global coverage, no gaps, ultra-low & ultra-reliable latency'
                        ]}
                    />
                </div>
            </div>
        </Container>
    )
}
