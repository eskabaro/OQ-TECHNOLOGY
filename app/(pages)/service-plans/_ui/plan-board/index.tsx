'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'

import styles from './PlanBoard.module.scss'

interface IPlanBoardProps {
    title: string
    imgSrc: string
}

export const PlanBoard: FC<IPlanBoardProps> = ({ title, imgSrc }) => {
    return (
        <div className={styles['image-box']}>
            <Image src={imgSrc} width={1600} height={540} alt='' priority />

            <Text as='h1'>{title}</Text>
        </div>
    )
}
