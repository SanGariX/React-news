import styles from './skeleton.module.css'
const Skeleton = ({ count = 1, type = 'banner' }) => {
	return (
		<>
			{count > 1 ? (
				<div className={styles.wrapper}>
					<ul className={styles.list}>
						{[...Array(count)].map((_, idx) => (
							<li
								key={idx}
								className={type === 'banner' ? styles.banner : styles.item}
							></li>
						))}
					</ul>
				</div>
			) : (
				<div className={styles.wrapper}>
					<li className={type === 'banner' ? styles.banner : styles.item}></li>
				</div>
			)}
		</>
	)
}

export default Skeleton
