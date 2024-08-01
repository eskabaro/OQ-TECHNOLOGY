"use client";

import { Container } from '@/app/(app)/_components/container';
import { FeatureCard } from './_ui/feature-card';

import styles from './FourthSection.module.scss';

export const FourthSection = () => {
  return (
    <Container className={styles.wrapper} as='section'>
      <FeatureCard imageSrc={require('../../_assets/features-1.png')} title='FEATURES' description='Lorem ipsum dolor sit amet consectetur. Nec tinci d u nt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et i varius etiam. ' />
      <FeatureCard imageSrc={require('../../_assets/features-2.png')} title='COMFORT' description='Lorem ipsum dolor sit amet consectetur. Nec tinci d u nt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et i varius etiam. ' />
      <FeatureCard imageSrc={require('../../_assets/features-3.png')} title="COMBINATION" description="Lorem ipsum dolor sit amet consectetur. Nec tinci d u nt fames metus quis vitae vestibulum ut. Fringilla consequat odio sit arcu velit rhoncus ultrices vitae. Morbi condimentum vel et i varius etiam. " />
    </Container>
  )
}
