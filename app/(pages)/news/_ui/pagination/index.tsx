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

    // if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    //     return null
    // }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }

    let lastPage = paginationRange?.[paginationRange.length - 1]

    return (
        <ul className={styles.wrapper}>
            <li onClick={onPrevious} className={cn(styles.wrapper_prev, currentPage === 1 && styles.disabled)}>
                <Icon name='mini-arrow' />
            </li>

            {/* {paginationRange?.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return (
                        <li key={pageNumber} className='pagination-item dots'>
                            &#8230;
                        </li>
                    )
                }

                return (
                    <li
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber as number)}
                        className={cn(styles.wrapper_count, {
                            [styles.selected]: pageNumber === currentPage
                        })}
                    >
                        <Text as='span'>{pageNumber}</Text>
                    </li>
                )
            })} */}
            <li
                // className={cn(styles.wrapper_count, {
                //     // [styles.selected]: pageNumber === currentPage
                // })}
                className={cn(styles.wrapper_count)}
            >
                <Text as='span'>1</Text>
            </li>
            <li
                // className={cn(styles.wrapper_count, {
                //     [styles.selected]: currentPage
                // })}
                className={cn(styles.wrapper_count, currentPage && styles.selected)}
            >
                <Text as='span'>2</Text>
            </li>
            <li
                // className={cn(styles.wrapper_count, {
                //     // [styles.selected]: pageNumber === currentPage
                // })}
                className={cn(styles.wrapper_count)}
            >
                <Text as='span'>3</Text>
            </li>
            <li
                // className={cn(styles.wrapper_count, {
                //     // [styles.selected]: pageNumber === currentPage
                // })}
                className={cn(styles.wrapper_count)}
            >
                <Text as='span'>...</Text>
            </li>
            <li
                // className={cn(styles.wrapper_count, {
                //     // [styles.selected]: pageNumber === currentPage
                // })}
                className={cn(styles.wrapper_count)}
            >
                <Text as='span'>25</Text>
            </li>

            <li
                onClick={onNext}
                // className={cn(styles.wrapper_next, {
                //     [styles.disabled]: currentPage === lastPage
                // })}
                className={cn(styles.wrapper_next)}
            >
                <Icon name='mini-arrow' />
            </li>
        </ul>
    )
}
