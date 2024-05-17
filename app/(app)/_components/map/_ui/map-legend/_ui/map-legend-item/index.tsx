'use client'

import { FC } from 'react'

import { Text } from '@/app/_shared/ui/typography/text'

import styles from './MapLegendItem.module.scss'

export interface IMapLegendItem {
    color: string
    text: string
}

interface IMapLegendItemProps extends IMapLegendItem {}

export const MapLegendItem: FC<IMapLegendItemProps> = ({ color, text }) => {
    return (
        <div className={styles.map_legend_item}>
            <div className={styles.map_legend_item_color} style={{ backgroundColor: color }} />
            <Text as='span'>{text}</Text>
        </div>
    )
}
