'use client'

import { FC } from 'react'
import Image from 'next/image'

import { IHotlineItem } from '@/app/_shared/const/hotlines'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './HotlineItem.module.scss'

interface IHotlineItemProps extends IHotlineItem {}

export const HotlineItem: FC<IHotlineItemProps> = ({ country, tel, flagImg }) => {
    return (
        <li className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <Image src={flagImg} width={32} height={32} alt={country} />
                <Text as='span'>{country}</Text>
            </div>
            <Text as='span'>{tel}</Text>
        </li>
    )
}
