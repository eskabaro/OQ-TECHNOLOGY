import { useEffect, useState } from "react"

export const useFetchData = (apiCall: () => Promise<any>, initialData: any) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        const fetchData = async () => {
            const response = await apiCall()

            setData(response.items)
        }

        fetchData()
    }, [])

    return data;
}
