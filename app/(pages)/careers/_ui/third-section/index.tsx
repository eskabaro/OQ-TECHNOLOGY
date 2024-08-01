'use client'

import Image from 'next/image'

import { Article } from '@/app/_shared/ui/typography/article'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Container } from '@/app/(app)/_components/container'
import { StatsMarker } from './_ui/stats-marker'

import styles from './ThirdSection.module.scss'

export const ThirdSection = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <SubTitle upTitle='' title='LOREM IPSUM' />
            <div className={styles.content}>
                <div className={styles.content__left}>
                    <Article
                        titleIcon='star'
                        title='Welcome to Our Tech Haven'
                        paragraphs={[
                            'In the heart of Luxembourg, our workspace is a melting pot of creativity and technology, a place where ideas take flight and dreams become reality. Our company thrives on a startup vibe that is palpable from the moment you step through our doors. We believe in disrupting the status quo, in thinking differently, and in challenging ourselves every day.',
                            'We take pride in nurturing our engineers, providing them with the tools, resources, and environment they need to grow both professionally and personally. Our engineers are the backbone of our company, their work directly impacting our daily operations and shaping our future.',
                            'Every day at our company is an opportunity to make a great impact. Each line of code written, each problem solved, and each idea shared contributes to our collective success. We celebrate our wins, learn from our failures, and constantly strive for excellence.',
                            'We are always on the lookout for motivated individuals who are ready to roll up their sleeves and dive into the world of tech. So, if you’re passionate about technology, thrive in a fast-paced environment, and are ready to make a real difference, we’d love to hear from you. Join us and be a part of our exciting journey!'
                        ]}
                    />
                    <hr />
                    <div className={styles.stats_container}>
                        <StatsMarker value='16+' label='Years experience...' />
                        <StatsMarker value='5k+' label='Happy Customers...' />
                    </div>
                </div>

                <div className={styles.content__right}>
                    <Image src={require('../../_assets/image-1.webp')} alt='' />
                    <Image src={require('../../_assets/image-2.webp')} alt='' />
                    <Image src={require('../../_assets/image-3.webp')} alt='' />
                    <Image src={require('../../_assets/image-4.webp')} alt='' />
                </div>
            </div>
        </Container>
    )
}
