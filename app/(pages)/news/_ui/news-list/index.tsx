'use client'

import { FC, useMemo, useState } from 'react'

import { useEntries } from '@/app/(app)/_components/entries-provider'
import { Container } from '@/app/(app)/_components/container'
import { NewsItem } from '../news-item'
import { Title } from '@/app/_shared/ui/typography/title'
import { Pagination } from '../pagination'

import styles from './NewsList.module.scss'

const PAGE_SIZE = 12

export const NewsList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { news } = useEntries()

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0 })
    }

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PAGE_SIZE
        const lastPageIndex = firstPageIndex + PAGE_SIZE

        return news.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, news])

    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_container}>
                <Title isObserver size='XXL' title='OQ NEWS' />

                <ul className={styles.list}>
                    {currentTableData.map(({ fields }) => (
                        <NewsItem key={fields.slug} {...fields} />
                    ))}
                </ul>

                <Pagination currentPage={currentPage} totalCount={news.length} pageSize={PAGE_SIZE} onPageChange={handlePageChange} />
            </Container>
        </section>
    )
}
