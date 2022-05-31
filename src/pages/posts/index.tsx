import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import Head from 'next/head'
import styles from './styles.module.scss'
import { RichText } from 'prismic-dom'

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

  const response = await prismic.query<any>([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return {
    props: {
      posts
    }
  }
}