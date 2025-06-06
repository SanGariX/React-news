import styles from './skeleton.module.css'
const Skeleton = ({ count = 1, type = 'banner' }) => {
	if(type === 'banner'){
		count = 1
	}
	return (
		<>
			{count > 1 ? (
				<div className={styles.wrapper}>
					<ul className={styles.list}>
						{[...Array(10)].map((_, idx) => (
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
