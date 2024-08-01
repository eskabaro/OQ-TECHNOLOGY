'use client'

import { FC, PropsWithChildren, createContext, useContext } from 'react'

import { useFetchData } from '@/app/_shared/lib/hooks/useFetchData'
import newsApi, { INews } from '@/app/api/contentful/newsApi'
import countryApi, { ICountry } from '@/app/api/contentful/countryApi'
import jobApi, { IJob } from '@/app/api/contentful/jobApi'

interface IEntriesContext {
    news: INews[]
    countries: ICountry[]
    jobs: IJob[]
}

const defaultEntries: IEntriesContext = {
    news: [],
    countries: [],
    jobs: []
}

const EntriesContext = createContext<IEntriesContext>(defaultEntries)

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const news = useFetchData(newsApi.getAll, [])
    const countries = useFetchData(countryApi.getAll, [])
    const jobs = useFetchData(jobApi.getAll, [])

    return <EntriesContext.Provider value={{ news, countries, jobs }}>{children}</EntriesContext.Provider>
}

export const useEntries = () => useContext(EntriesContext)
