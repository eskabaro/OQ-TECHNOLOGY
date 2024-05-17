import { EntrySkeletonType, Asset } from 'contentful'

import contentfulClient, { IEntry } from '.'

export interface INewsFields {
    title: string
    slug: string
    image: Asset
    date: string
}

export interface INews extends IEntry {
    fields: INewsFields
}

const newsApi = {
    getAll: async () => {
        return contentfulClient.getEntries<EntrySkeletonType<INewsFields>>({ content_type: 'news' })
    }
}

export default newsApi
