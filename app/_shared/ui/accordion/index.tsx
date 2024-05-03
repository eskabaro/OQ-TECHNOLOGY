'use client'

import { FC, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react'
import styles from './Accordion.module.scss'
import cn from 'classnames'

interface IAccordionProps extends PropsWithChildren<unknown> {
    title: string
}

export const Accordion: FC<IAccordionProps> = ({ title, children }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [contentHeight, setContentHeight] = useState<string | number>(0)
    const detailsRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if (detailsRef.current) {
    //         setContentHeight(open ? `${detailsRef.current.scrollHeight + 30}px` : 0)
    //     }
    // }, [open])

    return (
        <div className={styles.wrapper}>
            <div
                onClick={() => setOpen(!open)}
                className={cn(styles.wrapper_heading, {
                    [styles.open]: open
                })}
            >
                {title}
            </div>
            <div
                className={cn(styles.wrapper_accordion, {
                    [styles.open]: open
                })}
            >
                <p>{children}</p>
            </div>
        </div>
    )
}
