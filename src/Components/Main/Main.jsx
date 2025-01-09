import { useEffect, useRef, useState } from 'react'
import News_Banner from '../News_Banner/News_Banner.jsx'
import styles from './main.module.css'
import { getCategoryes, getNews } from '../../api/Api_News.js'
import News_list from '../News_list/News_list.jsx'
import Skeleton from '../Skeleton/Skeleton.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import Categories from '../Categories/categories.jsx'
const Main = () => {
	const [news, setNews] = useState([])
	const [categories, setCategories] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [countt, setCount] = useState(0)
	const [infinity, setInfinity] = useState(false)
	const [selectedCategories, setSelectedCategories] = useState('All')
	const triggerRef = useRef(null)
	const totalPage = 10
	const pageSize = 10
	const fetchNews = async (currentPage, pageSize) => {
		try {
			setIsLoading(true)
			const response = await getNews({
				currentPage: currentPage,
				pageSize: pageSize,
				category: categories === 'All' ? null : categories,
			})
			if (infinity) {
				setNews([...news, ...response.news])
			} else {
				setNews([...response.news])
			}
			setIsLoading(false)
		} catch (err) {
			console.log(err)
		}
	}
	const fetchCategories = async () => {
		try {
			const response = await getCategoryes()
			setCategories(['All', ...response.categories])
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchCategories()
	}, [])
	useEffect(() => {
		fetchNews(currentPage, pageSize)
	}, [currentPage, selectedCategories])
	useEffect(() => {
		let option = {
			rootMargin: '200px',
		}
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setInfinity(true)
				setCount(countt + 10)
				setCurrentPage(currentPage + 1)
			}
		}, option)

		if (triggerRef.current) {
			observer.observe(triggerRef.current)
		}

		return () => {
			if (triggerRef.current) {
				observer.unobserve(triggerRef.current)
			}
		}
	}, [isLoading])
	const handleNextPage = () => {
		if (currentPage < totalPage) {
			setInfinity(false)
			setCount(10)
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setInfinity(false)
			setCount(10)
			setCurrentPage(currentPage - 1)
		}
	}
	const handlePage = (pageNumber) => {
		setInfinity(false)
		setCount(10)
		setCurrentPage(pageNumber)
	}
	const handelPages = () => {
		setInfinity(true)
		setCount(countt + 10)
		setCurrentPage(currentPage + 1)
	}
	return (
		<>
			<main className={styles.main}>
				<Categories
					categories={categories}
					selectedCategories={selectedCategories}
					setSelectedCategories={setSelectedCategories}
					setInfinity={setInfinity}
				/>
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
					<News_list news={news} />
				) : (
					<Skeleton type='list' count={countt} />
				)}
				<div ref={triggerRef} id='trigger'></div>
				<button onClick={handelPages}>Load More</button>
			</main>
		</>
	)
}

export default Main
