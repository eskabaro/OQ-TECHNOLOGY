'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...props }) => {
    return (
        <div className='container' {...props}>
            {children}
        </div>
    )
}
