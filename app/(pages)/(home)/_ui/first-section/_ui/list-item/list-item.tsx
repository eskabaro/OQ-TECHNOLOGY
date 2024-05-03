'use client'

import { FC } from 'react'
import Image from 'next/image'

import { IListItem } from '@/app/(pages)/(home)/const/lists'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './ListItem.module.scss'

interface IListItemProps extends IListItem {}

export const ListItem: FC<IListItemProps> = ({ imgSrc, title, subTitile }) => {
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
