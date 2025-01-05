import { useEffect, useRef, useState } from 'react'
// import { formatDate } from '../../helpers/formatDate'
import News_Banner from '../News_Banner/News_Banner.jsx'
import styles from './main.module.css'
import { getNews } from '../../api/Api_News.js'
import News_list from '../News_list/News_list.jsx'
import Skeleton from '../Skeleton/Skeleton.jsx'
import Pagination from '../Pagination/Pagination.jsx'
const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPage = 10
	const pageSize = 10
	const fetchNews = async (currentPage, pageSize) => {
		try {
			setIsLoading(true)
			const response = await getNews(currentPage, pageSize)
			setNews(response.news)
			setIsLoading(false)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchNews(currentPage, pageSize)
	}, [currentPage])
	const handleNextPage = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	const handlePage = (pageNumber) => {
		setCurrentPage(pageNumber)
	}	
	return (
		<>
			<main className={styles.main}>
				{!!news.length && !isLoading ? (
					<News_Banner item={news[0]} />
				) : (
					<Skeleton type='banner' count={1} />
				)}
				<Pagination
					handleNextPage={handleNextPage}
					handlePreviousPage={handlePreviousPage}
					handlePage={handlePage}
					currentPage={currentPage}
					totalPage={totalPage}
				/>
				{!isLoading ? (
					<News_list  news={news} />
				) : (
					<Skeleton type='list' count={10} />
				)}
				<div className='react_guard'></div>
			</main>
		</>
	)
}

export default Main
