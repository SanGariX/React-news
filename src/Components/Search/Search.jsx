import styles from './search.module.css'

const Search = (keywords) => {
	return (
		<div className={styles.search}>
			<input
				type='text'
				onChange={(e) => {
					keywords.setKeywords(e.target.value)
				}}
				className={styles.input}
				placeholder='Enter your text'
			/>
		</div>
	)
}

export default Search
