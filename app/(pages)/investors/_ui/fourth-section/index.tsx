'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { StrategyMap } from './_ui/strategy-map'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
  return (
    <Container as='section' className={styles.wrapper}>
      <SubTitle
        upTitle=''
        title='LEAD GENERATION STRATEGY:'
        isUnderline
      >
        Optimize Your Website for Lead Capture
      </SubTitle>
      <StrategyMap />
    </Container>
  )
}
