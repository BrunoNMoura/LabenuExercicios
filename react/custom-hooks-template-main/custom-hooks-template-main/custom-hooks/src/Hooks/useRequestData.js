import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url, inicialState) => {
    const [data, setData] = useState(inicialState)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((response) => {
                setIsLoading(false)
                // setIsError(false)
                setData(response.data)
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
                console.log(error)
            })
    }, [url])

    return [data, isLoading, isError];
}