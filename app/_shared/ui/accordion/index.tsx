'use client'

import { FC, PropsWithChildren, useRef, useState } from 'react'
import cn from 'classnames'

import { Icon } from '../icon'
import { Text } from '../typography/text'

import styles from './Accordion.module.scss'

interface IAccordionProps extends PropsWithChildren<unknown> {
    title: string
    borderNone: 'left' | 'right'
}

export const Accordion: FC<IAccordionProps> = ({ title, borderNone, children }) => {
    const content = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>(false)
    const [height, setHeight] = useState<string>('0px')

    const toggleAccordion = () => {
        setActive(!active)
        setHeight(active ? '0px' : `${content.current?.scrollHeight}px`)
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={cn(styles.accordion, styles[borderNone], {
                    [styles.active]: active
                })}
                onClick={toggleAccordion}
            >
                <Text className={styles.accordion_title} as='p'>
                    {title}
                </Text>
                <button className={styles.accordion_btn}>
                    <Icon name='arrow-down-v2' />
                </button>
            </div>
            <div ref={content} style={{ maxHeight: height }} className={styles.accordion_content}>
                <div className={styles.accordion_text}>{children}</div>
            </div>
        </div>
    )
}
