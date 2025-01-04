import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import styles from './banner.module.css'
const News_Banner = ({ item }) => {
	return (
		<div className={styles.News_Banner}>
			<Image image={!!item && item.image} />
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>	
				{formatTimeAgo(item.published )} by {item.author}
			</p>
		</div>
	)
}

export default News_Banner
