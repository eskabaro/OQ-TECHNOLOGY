import newsApi from '@/app/api/contentful/newsApi'
import { NewsList } from './_ui/news-list'

export default async function NewsPage() {
    const news = await newsApi.getAll()

    return <NewsList news={news.items} />
}
