import { EntrySkeletonType } from 'contentful'

import contentfulClient, { IEntry } from '.'

export interface ICountryFields {
    name: string
    status: 'available' | 'waitlist'
}

export interface ICountry extends IEntry {
    fields: ICountryFields
}

const countryApi = {
    getAll: async () => {
        return contentfulClient.getEntries<EntrySkeletonType<ICountryFields>>({ content_type: 'country' })
    }
}

export default countryApi
