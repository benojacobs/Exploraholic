import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveNewYork = {
    en: 'New York',
    nl: 'New York',
  }
  const resolveBarcelona = {
    en: 'Barcelona',
    nl: 'Barcelona',
  }
  const resolvePeking = {
    en: 'Peking',
    nl: 'Peking',
  }
  const resolveNairobi = {
    en: 'Nairobi',
    nl: 'Nairobi',
  }
  const resolveSydney = {
    en: 'Sydney',
    nl: 'Sydney',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
              alt="IMDBPlus Logo"
              className=""
            /> */}
            <Image src="/logo-colored-full.png" alt="IMDBPlus Logo" width="128" height="25" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/new-york`} className={styles.movie}>{resolveNewYork[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/barcelona`} className={styles.personality}>{resolveBarcelona[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/peking`} className={styles.newsitem}>{resolvePeking[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/nairobi`} className={styles.product}>{resolveNairobi[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/sydney`} className={styles.product}>{resolveSydney[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
