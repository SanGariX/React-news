import { useEffect, useState } from 'react'
// import { formatDate } from '../../helpers/formatDate'
import News_Banner from '../News_Banner/News_Banner.jsx'
import styles from './main.module.css'
import { getNews } from '../../api/Api_News.js'
import News_list from '../News_list/News_list.jsx'
const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (err) {
				console.log(err)
			}
		}
		fetchNews()
	}, [])

	return (
		<>
			<main className={styles.main}>
				{!!news.length && <News_Banner item={news[0]}/>}
				<News_list news={news}/>
			</main>
		</>
	)
}

export default Main
