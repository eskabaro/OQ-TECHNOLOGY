import { EntrySkeletonType, Asset } from 'contentful'

import contentfulClient from '.'

export interface INewsFields {
    title: string
    slug: string
    image: Asset
    date: string
}

export interface INews {
    sys: {
        id: string
        createdAt: string
        updatedAt: string
    }
    fields: INewsFields
}

const newsApi = {
    getAll: async () => {
        return contentfulClient.getEntries<EntrySkeletonType<INewsFields>>({ content_type: 'news' })
    }
}

export default newsApi
