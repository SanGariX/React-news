import { formatDate } from '../../helpers/formatDate'
import styles from './header.module.css'
const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div>
					<h1 className={styles.title}>Good morning</h1>
					<p className={styles.date}>{formatDate(new Date())}</p>
				</div>
			</header>
		</>
	)
}

export default Header
