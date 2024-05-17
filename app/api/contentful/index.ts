import { createClient } from 'contentful'

export interface IEntry {
    sys: {
        id: string
        createdAt: string
        updatedAt: string
    }
}

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
})

export default contentfulClient
