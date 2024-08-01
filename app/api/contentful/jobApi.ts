import { EntrySkeletonType } from 'contentful'

import contentfulClient, { IEntry } from '.'

export interface IJobFields {
  title: string;
  type: string;
  locationCountry?: string;
  locationCity?: string;
}

export interface IJob extends IEntry {
    fields: IJobFields
}

const jobApi = {
    getAll: async () => {
        return contentfulClient.getEntries<EntrySkeletonType<IJobFields>>({ content_type: 'job' })
    }
}

export default jobApi
