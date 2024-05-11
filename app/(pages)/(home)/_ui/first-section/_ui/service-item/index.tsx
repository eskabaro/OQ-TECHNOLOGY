'use client'

import { FC } from 'react'
import Image from 'next/image'

import { IListItem } from '@/app/(pages)/(home)/_const/lists'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './ServiceItem.module.scss'

interface IServiceItemProps extends IListItem {}

export const ServiceItem: FC<IServiceItemProps> = ({ imgSrc, title, subTitile }) => {
    return (
        <li className={styles.wrapper}>
            <Image src={imgSrc} width={144} height={144} alt={title} />

            <div className={styles.wrapper_heading}>
                <Text as='h1'>{title}</Text>
                <Text as='p'>{subTitile}</Text>
            </div>
        </li>
    )
}
