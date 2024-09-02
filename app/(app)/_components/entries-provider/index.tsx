'use client'

import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'

import { useFetchData } from '@/app/_shared/lib/hooks/useFetchData'
import newsApi, { INews } from '@/app/api/contentful/newsApi'
import countryApi, { ICountry } from '@/app/api/contentful/countryApi'
import jobApi, { IJob } from '@/app/api/contentful/jobApi'

interface IEntriesContext {
    news: INews[]
    countries: ICountry[]
    jobs: IJob[]
    cart: { title: string; price: string }[] | []
    addToCart: (item: { title: string; price: string }) => void
}

const defaultEntries: IEntriesContext = {
    news: [],
    countries: [],
    jobs: [],
    cart: [],
    addToCart: () => {}
}

const EntriesContext = createContext<IEntriesContext>(defaultEntries)

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const news = useFetchData(newsApi.getAll, [])
    const countries = useFetchData(countryApi.getAll, [])
    const jobs = useFetchData(jobApi.getAll, [])
    const [cart, setCart] = useState<{ title: string; price: string }[]>([])

    const addToCart = (item: { title: string; price: string }) => {
        setCart((prevState) => [...prevState, item])
    }

    return <EntriesContext.Provider value={{ news, countries, jobs, cart, addToCart }}>{children}</EntriesContext.Provider>
}

export const useEntries = () => useContext(EntriesContext)
