'use client'

import { FC, PropsWithChildren, createContext, useContext } from 'react'

import newsApi, { INews } from '@/app/api/contentful/newsApi'
import { useFetchData } from '@/app/_shared/lib/hooks/useFetchData'

interface IEntriesContext {
    news: INews[]
}

const defaultEntries: IEntriesContext = {
    news: []
}

export const EntriesContext = createContext<IEntriesContext>(defaultEntries)

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const news = useFetchData(newsApi.getAll, [])

    return <EntriesContext.Provider value={{ news }}>{children}</EntriesContext.Provider>
}

export const useEntries = () => useContext(EntriesContext)
