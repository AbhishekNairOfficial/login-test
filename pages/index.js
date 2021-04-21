import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Login Example</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Head>
			<div>See the old or the new one?</div>
			<Link href='/old'>
				<Button variant='contained' color='primary'>
					Old
				</Button>
			</Link>
			<Link href='/new'>
				<Button variant='contained' color='primary'>
					New
				</Button>
			</Link>
		</div>
	)
}
