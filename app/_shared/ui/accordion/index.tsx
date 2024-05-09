'use client'

import { FC, PropsWithChildren, useRef, useState } from 'react'
import cn from 'classnames'

import { Icon } from '../icon'
import { Text } from '../typography/text'

import styles from './Accordion.module.scss'

interface IAccordionProps extends PropsWithChildren<unknown> {
    title: string
}

export const Accordion: FC<IAccordionProps> = ({ title, children }) => {
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
                onClick={toggleAccordion}
                className={cn(styles.accordion, {
                    [styles.active]: active
                })}
            >
                <Text className={styles.accordion_title} as='p'>
                    {title}
                </Text>
                <button className={styles.accordion_btn}>
                    <Icon name='arrow-down-v2' />
                </button>
            </div>
            <div ref={content} style={{ maxHeight: height }} className={cn(styles.accordion_content)}>
                <div className={styles.accordion_text}>{children}</div>
            </div>
        </div>
    )
}
