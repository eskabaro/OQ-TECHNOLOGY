'use client'

import { FC, Fragment, useMemo, useState } from 'react'

import { useEntries } from '@/app/(app)/_components/entries-provider'
import { Container } from '@/app/(app)/_components/container'
import { NewsItem } from '../news-item'
import { Title } from '@/app/_shared/ui/typography/title'
import { Pagination } from '../pagination'

import styles from './NewsList.module.scss'

let PageSize = 9

export const NewsList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { news } = useEntries()

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize
        const lastPageIndex = firstPageIndex + PageSize

        return news.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, news])

    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_container}>
                <Title isObserver size='XXL' title='OQ NEWS' />

                <ul className={styles.list}>
                    {currentTableData.map(({ fields }) => {
                        return (
                            <Fragment key={fields.slug}>
                                <NewsItem {...fields} />
                            </Fragment>
                        )
                    })}
                </ul>

                <Pagination currentPage={currentPage} totalCount={news.length} pageSize={9} onPageChange={(page: number) => setCurrentPage(page)} />
            </Container>
        </section>
    )
}
