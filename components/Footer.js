import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className={styles.instagrampictures}>
          <img
            src="https://a.storyblok.com/f/140803/596x578/0481cadebc/screen-shot-2022-01-03-at-23-18-33.png"
            alt="Instagram foto 1"
            className=""
          />
          <img
            src="https://a.storyblok.com/f/140803/600x576/e13821c3c0/screen-shot-2022-01-03-at-23-18-25.png"
            alt="Instagram foto 2"
            className=""
          />
          <img
            src="https://a.storyblok.com/f/140803/598x580/90d8718471/screen-shot-2022-01-03-at-23-18-14.png"
            alt="Instagram foto 3"
            className=""
          />
          <img
            src="https://a.storyblok.com/f/140803/598x582/ff6ed57050/screen-shot-2022-01-03-at-23-17-52.png"
            alt="Instagram foto 4"
            className=""
          />
        </div>
        <div>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>



  )
}

export default Footer
