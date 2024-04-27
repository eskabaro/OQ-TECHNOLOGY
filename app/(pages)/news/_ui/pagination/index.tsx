'use client'

import React, { FC } from 'react'
import cn from 'classnames'
import { usePagination, DOTS } from '../../../../_shared/lib/hooks/usePagination'
import styles from './Pagination.module.scss'
import { Icon } from '@/app/_shared/ui/icon'
import { Text } from '@/app/_shared/ui/typography/text'

interface IPaginationProps {
    onPageChange: (page: number) => void
    totalCount: number
    siblingCount?: number
    currentPage: number
    pageSize: number
}

const Pagination: FC<IPaginationProps> = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
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
            <li
                onClick={onPrevious}
                className={cn(styles.wrapper_prev, {
                    [styles.disabled]: currentPage === 1
                })}
            >
                <Icon name='mini-arrow' />
            </li>

            {paginationRange?.map((pageNumber) => {
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
            })}

            <li
                onClick={onNext}
                className={cn(styles.wrapper_next, {
                    [styles.disabled]: currentPage === lastPage
                })}
            >
                <Icon name='mini-arrow' />
            </li>
        </ul>
    )
}

export default Pagination
