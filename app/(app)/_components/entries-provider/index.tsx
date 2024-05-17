'use client'

import { FC, PropsWithChildren, createContext, useContext } from 'react'

import newsApi, { INews } from '@/app/api/contentful/newsApi'
import countryApi, { ICountry } from '@/app/api/contentful/countryApi'
import { useFetchData } from '@/app/_shared/lib/hooks/useFetchData'

interface IEntriesContext {
    news: INews[]
    countries: ICountry[]
}

const defaultEntries: IEntriesContext = {
    news: [],
    countries: []
}

const EntriesContext = createContext<IEntriesContext>(defaultEntries)

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const news = useFetchData(newsApi.getAll, [])
    const countries = useFetchData(countryApi.getAll, [])

    return <EntriesContext.Provider value={{ news, countries }}>{children}</EntriesContext.Provider>
}

export const useEntries = () => useContext(EntriesContext)
