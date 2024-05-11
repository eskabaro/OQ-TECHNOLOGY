'use client'

import { FC } from 'react'
import Image from 'next/image'

import { IListItem } from '@/app/(pages)/(home)/_const/lists'
import { Title } from '@/app/_shared/ui/typography/title'

import styles from './ListItem.module.scss'

interface IListItemProps extends IListItem {}

export const ListItem: FC<IListItemProps> = ({ imgSrc, title, subTitile }) => {
    return (
        <li className={styles.wrapper}>
            <Image src={imgSrc} width={520} height={280} alt={title} />

            <Title size='L' className={styles.heading} title={title} text={subTitile} />
        </li>
    )
}
