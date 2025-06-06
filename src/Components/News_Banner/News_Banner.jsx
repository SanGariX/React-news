import { formatTimeAgo } from '../../helpers/formatTimeAgo.js'
import WithSkeleton from '../../helpers/Hocs/WithSkeleton.jsx'
import Image from '../Image/Image.jsx'
import styles from './banner.module.css'
const News_Banner = ({item}) => {
	return (
		<div className={styles.News_Banner}>
			<Image image={!!item && item.image} />
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</div>
	)
}
const NewsBannerWidthSkeleton = WithSkeleton(News_Banner, 'banner')
export default NewsBannerWidthSkeleton
