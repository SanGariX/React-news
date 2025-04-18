import WithSkeleton from '../../helpers/Hocs/WithSkeleton.jsx'
import News_list_item from '../News_list_item/News_list_item.jsx'
import styles from './News_list.module.css'
const News_list = ({ item: news }) => {
	return (
		<ul className={styles.list}>
			{!!news &&
				news.map((item, idx) =>
					//item.id крива апішка, однакові значення кида
					!idx ? null : <News_list_item key={idx} elementsArray={item} />
				)}
		</ul>
	)
}

const NewsListWidthSkeleton = WithSkeleton(News_list, 'item')

export default NewsListWidthSkeleton
