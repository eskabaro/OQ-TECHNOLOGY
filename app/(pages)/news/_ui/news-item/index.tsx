'use client'

import { INews } from '@/app/_shared/const/news'
import { FC } from 'react'
import Image from 'next/image'
import styles from './NewsItem.module.scss'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import Link from 'next/link'

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