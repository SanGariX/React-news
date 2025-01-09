import styles from './categories.module.css'
const Categories = ({
	categories,
	setSelectedCategories,
	selectedCategories,
	setInfinity,
}) => {
	const claimInfinity = (category) => {
		setSelectedCategories(category)
		setInfinity(false)
	}
	return (
		<div className={styles.categories}>
			{categories.map((category) => (
				<button
					onClick={()=>{claimInfinity(category)}}
					className={
						selectedCategories === category ? styles.active : styles.item
					}
					key={category}
				>
					{category}
				</button>
			))}
		</div>
	)
}

export default Categories
