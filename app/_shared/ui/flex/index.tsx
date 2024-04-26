'use client'

import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

interface IFlexProps extends PropsWithChildren<unknown> {
    direction: 'horizontal' | 'vertical'
    gap: string
}

export const Flex: FC<IFlexProps> = ({ children, direction, gap }) => {
    return (
        <div
            className={cn(`flex gap-${gap}`, {
                'flex-row': direction === 'horizontal',
                'flex-col': direction === 'vertical'
            })}
        >
            {children}
        </div>
    )
}
