import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Título bla bla bla</strong>
            <p>Parágrafo do post.</p>
          </a>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Título bla bla bla</strong>
            <p>Parágrafo do post.</p>
          </a>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Título bla bla bla</strong>
            <p>Parágrafo do post.</p>
          </a>
        </div>
      </main>
    </>
  )
}