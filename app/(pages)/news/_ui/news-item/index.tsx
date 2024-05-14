'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { INewsFields } from '@/app/api/contentful/newsApi'
import formatDate from '@/app/_shared/lib/format-date'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './NewsItem.module.scss'

interface INewsItemProps extends INewsFields {}

export const NewsItem: FC<INewsItemProps> = ({ image, title, date, slug }) => {
    const imgSrc = `https:${image.fields.file?.url}`
    const formattedDate = formatDate(date)

    return (
        <li className={styles.wrapper}>
            <Image src={imgSrc} width={500} height={520} alt={title} />
            <div className={styles.wrapper_heading}>
                <div className={styles.title}>
                    <Text as='h2' title={title}>
                        {title}
                    </Text>
                    <Text as='time' dateTime={formattedDate}>
                        {formattedDate}
                    </Text>
                </div>
                <Link href={slug}>
                    <Text as='span' isUnderline>
                        read news
                        <Icon name='arrow' />
                    </Text>
                </Link>
            </div>
        </li>
    )
}
