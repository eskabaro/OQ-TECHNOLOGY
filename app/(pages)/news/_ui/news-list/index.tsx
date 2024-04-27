'use client'

import { FC, useMemo, useState } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Text } from '@/app/_shared/ui/typography/text'
import { data } from '@/app/_shared/const/news'
import { NewsItem } from '../news-item'

import Pagination from '../pagination'
import styles from './NewsList.module.scss'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'

let PageSize = 9

export const NewsList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize
        const lastPageIndex = firstPageIndex + PageSize

        return data.slice(firstPageIndex, lastPageIndex)
    }, [currentPage])

    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_container}>
                <HeadingAnimate>
                    <Text className={styles.title} as='h1'>
                        OQ NEWS
                    </Text>
                </HeadingAnimate>

                <ul className={styles.list}>
                    {currentTableData.map((item) => {
                        return <NewsItem key={item.id} {...item} />
                    })}
                </ul>

                <Pagination currentPage={currentPage} totalCount={20} pageSize={data.length} onPageChange={(page: number) => setCurrentPage(page)} />
            </Container>
        </section>
    )
}
