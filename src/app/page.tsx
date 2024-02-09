import styles from './home.module.scss'
import Logo from '../../public/logo.png'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
              <img src={Logo.src} alt="logo"/>
          </div>
          <div className={styles.headerTabs}></div>
          <div className={styles.headerProfile}></div>
        </div>
      </div>
    </div>
  );
}
