'use client'

import { Container } from '@/app/(app)/_components/container'
import { FeatureCard } from './_ui/feature-card'

import styles from './FourthSection.module.scss'
import { featureCards } from '../../_const/lists'

export const FourthSection = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            {featureCards.map((card, index) => (
                <FeatureCard key={index} imageSrc={card.imageSrc} title={card.title} paragraphs={card.paragraphs} />
            ))}
        </Container>
    )
}
