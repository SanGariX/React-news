import styles from './categories.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

const Categories = ({
	categories,
	setSelectedCategories,
	selectedCategories,
	setInfinity,
	setCurrentPage,
}) => {
	const claimInfinity = (category) => {
		setCurrentPage(1)
		setSelectedCategories(category)
		setInfinity(false)
	}
	return (
		<div className={styles.categories}>
			<Swiper
				className={styles.swiper}
				spaceBetween={10}
				slidesPerView='auto'
				freeMode={true}
				grabCursor={true}
			>
				{categories.map((category) => (
					<SwiperSlide
						key={category}
						style={{ width: 'auto' }}
						onClick={() => {
							claimInfinity(category)
						}}
						className={
							selectedCategories === category ? styles.active : styles.item
						}
					>
						{category}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Categories
