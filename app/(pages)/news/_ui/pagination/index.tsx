'use client'

import { FC } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { usePagination, DOTS } from '../../../../_shared/lib/hooks/usePagination'
import { Icon } from '@/app/_shared/ui/icon'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './Pagination.module.scss'

interface IPaginationProps {
    onPageChange: (page: number) => void
    totalCount: number
    siblingCount?: number
    currentPage: number
    pageSize: number
}

export const Pagination: FC<IPaginationProps> = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    })

    const lastPage = paginationRange?.[paginationRange.length - 1]

    const onNext = () => onPageChange(Math.min(currentPage + 1, +lastPage))
    const onPrevious = () => onPageChange(Math.max(currentPage - 1, 1))

    return (
        <ul className={styles.wrapper}>
            <li onClick={onPrevious} className={cn(styles.wrapper_prev, currentPage === 1 && styles.disabled)}>
                <Icon name='mini-arrow' />
            </li>

            {paginationRange.map((pageNumber, index) => (
                <li
                    key={index}
                    onClick={() => pageNumber !== DOTS && onPageChange(pageNumber as number)}
                    className={cn(pageNumber === DOTS ? 'pagination-item dots' : styles.wrapper_count, pageNumber === currentPage && styles.selected)}
                >
                    <Text as='span'>{pageNumber}</Text>
                </li>
            ))}

            <li onClick={onNext} className={cn(styles.wrapper_next, currentPage === lastPage && styles.disabled)}>
                <Icon name='mini-arrow' />
            </li>
        </ul>
    )
}
