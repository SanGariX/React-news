import News_list_item from '../News_list_item/News_list_item.jsx'
import styles from './News_list.module.css'
const News_list = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map((item, idx) =>
				//item.id крива апішка просто однакові значення кида, я  хз чому але жалується через це, коли поставив індекс то все норм
				!idx ? null : <News_list_item key={idx} elementsArray={item} />
			)}
		</ul>
	)
}

export default News_list
