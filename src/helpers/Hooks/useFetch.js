import { useEffect, useState } from 'react'

export const useFetch = (fetchFunction, params, type) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const [infinity, setInfinity] = useState(false)
	const stringParams = params ? new URLSearchParams(params).toString() : ''
	useEffect(() => {
		;(async () => {
			try {
				setIsLoading(true)
				const result = await fetchFunction(params)
				if (type === 'fetchPub') {
					if (infinity) {
						setData([...data, ...result.news])
					} else {
						setData([...result.news])
					}
				}
				if (type === 'categories') {
					setData(result)
				}
				
			} catch (error) {
				setError(error)
			}finally{
                setIsLoading(false)
            }
		})()
	}, [fetchFunction, stringParams])
	return { data, isLoading, error, setInfinity }
}
