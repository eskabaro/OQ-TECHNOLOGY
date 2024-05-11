'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { INews } from '../../_const/news'

import styles from './NewsItem.module.scss'

interface INewsItemProps extends INews {}

export const NewsItem: FC<INewsItemProps> = ({ image, title, date, link }) => {
    return (
        <li className={styles.wrapper}>
            <Image src={image} width={500} height={520} alt={title} />
            <div className={styles.wrapper_heading}>
                <div className={styles.title}>
                    <Text as='h2' title={title}>
                        {title}
                    </Text>
                    <Text as='time' dateTime={date}>
                        {date}
                    </Text>
                </div>
                <Link href={link}>
                    <Text as='span' isUnderline>
                        read news
                        <Icon name='arrow' />
                    </Text>
                </Link>
            </div>
        </li>
    )
}
