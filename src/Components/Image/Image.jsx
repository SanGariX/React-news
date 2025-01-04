import styles from "./image.module.css"
const Image = ({ image }) => {
	if(image === "None"){
		image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2aE9UAuHh0rWrhl9kq4xLrKJxcQ0oyAogw&s"
	}
	return (
		<div className={styles.wrapper}>
			{!!image && <img src={image} alt='News' className={styles.image} />}
		</div>
	)
}

export default Image
