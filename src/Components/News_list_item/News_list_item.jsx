import { formatTimeAgo } from '../../helpers/formatTimeAgo.js'
import styles from './News_list_item.module.css'
const News_list_item = ({ elementsArray }) => {
	console.log(elementsArray.image)
	if (elementsArray.image === 'None') {
		return 
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
