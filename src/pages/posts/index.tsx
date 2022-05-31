import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  return {
    props: {

    }
  }
}