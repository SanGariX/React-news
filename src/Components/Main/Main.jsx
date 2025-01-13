import { useEffect, useRef, useState } from 'react'
import styles from './main.module.css'
import { getCategoryes, getNews } from '../../api/Api_News.js'
import News_list from '../News_list/News_list.jsx'
import News_Banner from '../News_Banner/News_Banner.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import Categories from '../Categories/Categories.jsx'
import Search from '../Search/Search.jsx'
import { useDebounce } from '../../helpers/Hooks/useDebounce.js'
import { PAGE_SIZE, TOTAL_PAGES } from '../../helpers/Constant/Constant.js'
import { useFetch } from '../../helpers/Hooks/useFetch.js'
const Main = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [countt, setCount] = useState(0)
	const [selectedCategories, setSelectedCategories] = useState('All')
	const [keywords, setKeywords] = useState('')
	const triggerRef = useRef(null)
	const debouncedKeywords = useDebounce(keywords, 1500)
	const options = {
		page_number: currentPage,
		page_size: PAGE_SIZE,
		category: selectedCategories === 'All' ? null : selectedCategories,
		keywords: debouncedKeywords,
	}
	const { data, isLoading, setInfinity } = useFetch(
		getNews,
		options,
		'fetchPub'
	)
	const { data: dataCategories } = useFetch(getCategoryes, '', 'categories')
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
		if (currentPage < TOTAL_PAGES) {
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
				{dataCategories ? (
					<Categories
						categories={dataCategories.categories}
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						setInfinity={setInfinity}
						setCurrentPage={setCurrentPage}
					/>
				) : null}
				<Search keywords={keywords} setKeywords={setKeywords} />
				<News_Banner isLoading={isLoading} item={!!data && data[0]} />
				<Pagination
					handleNextPage={handleNextPage}
					handlePreviousPage={handlePreviousPage}
					handlePage={handlePage}
					currentPage={currentPage}
				/>
				<News_list
					isLoading={isLoading}
					item={!!data && data}
					countt={countt}
				/>
				<div ref={triggerRef} id='trigger'></div>
				{!isLoading && <button onClick={handelPages}>Load More</button>}
			</main>
		</>
	)
}

export default Main
