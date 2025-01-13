import { TOTAL_PAGES } from '../../helpers/Constant/Constant'
import styles from './pagination.module.css'
const Pagination = ({
	handleNextPage,
	handlePreviousPage,
	handlePage,
	currentPage,
}) => {
	const totalPage = TOTAL_PAGES
	return (
		<>
			<div className={styles.pagination}>
				<button
					disabled={currentPage <= 1 ? true : false}
					onClick={handlePreviousPage}
					className={`${styles.arrow} ${
						currentPage <= 1 ? styles.arrowActive : ''
					}`}
				>
					{'<'}
				</button>
				<div className={styles.list}>
					{[...Array(totalPage)].map((_, idx) => (
						<button
							onClick={() => {
								handlePage(idx + 1)
							}}
							className={`${styles.pageNumber} ${
								idx + 1 === currentPage ? styles.pageNumberActive : null
							}`}
							key={idx}
							disabled={idx + 1 === currentPage ? true : false}
						>
							{idx + 1}
						</button>
					))}
				</div>
				<button
					disabled={currentPage >= 10 ? true : false}
					onClick={handleNextPage}
					className={`${styles.arrow} ${
						currentPage >= 10 ? styles.arrowActive : ''
					}`}
				>
					{'>'}
				</button>
			</div>
		</>
	)
}

export default Pagination
