import News_list_item from "../News_list_item/News_list_item"
import styles from "./News_list.module.css"
const News_list = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map((item, idx) =>(
                !idx ? null : <News_list_item key={item.id} elementsArray={item}/>
            ))}
		</ul>
	)
}

export default News_list
