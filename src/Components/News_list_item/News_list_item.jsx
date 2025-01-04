import { formatTimeAgo } from '../../helpers/formatTimeAgo.js'
import styles from './News_list_item.module.css'
const News_list_item = ({ elementsArray }) => {
	if (elementsArray.image === 'None') {
		elementsArray.image =
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2aE9UAuHh0rWrhl9kq4xLrKJxcQ0oyAogw&s'
	}
	return (
		<li className={styles.list_item}>
			<div className={styles.wrapper_img}>
				<img
					className={styles.item_img}
					src={elementsArray.image}
					alt='image'
				/>
			</div>
			<div>
				<h3 className={styles.title_item}>{elementsArray.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(elementsArray.published)} by {elementsArray.author}
				</p>
			</div>
		</li>
	)
}

export default News_list_item
