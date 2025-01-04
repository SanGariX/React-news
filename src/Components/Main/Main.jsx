import { useEffect, useState } from 'react'
// import { formatDate } from '../../helpers/formatDate'
import News_Banner from '../News_Banner/News_Banner.jsx'
import styles from './main.module.css'
import { getNews } from '../../api/Api_News.js'
import News_list from '../News_list/News_list.jsx'
import Skeleton from '../Skeleton/Skeleton.jsx'
const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true)
				const response = await getNews()
				setNews(response.news)
				setIsLoading(false)
			} catch (err) {
				console.log(err)
			}
		}
		fetchNews()
	}, [])

	return (
		<>
			<main className={styles.main}>
				{!!news.length && !isLoading ? <News_Banner item={news[0]}/> : <Skeleton type='banner' count={1}/>}
				{!isLoading ? <News_list news={news}/>: <Skeleton type='list' count={30}/>}
			</main>
		</>
	)
}

export default Main
