import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/kaue-guerra.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Kauê Guerra</strong>
            <span>Web Devoloper</span>
          </div>
        </div>

        <time title="11 de maio as 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>
          Sint ratione consequuntur commodi aperiam, nesciunt modi totam, ad
          magnam omnis aspernatur id molestiae illum doloribus maxime, fugiat
          officiis.
        </p>
        <p> Aut, cumque et.</p>
        <p>
          <a href="">#Lorem</a> <a href="">#ipsum</a> <a href="">#dolor</a>
        </p>
      </div>
    </article>
  )
}
