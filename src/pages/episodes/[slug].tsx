//dangerouslySetInnerHTML: usado para manter o html recebido pela API, neste exemlpo um <p> 
import { GetStaticPaths, GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '../../services/api'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

import styles from './episode.module.scss'
import { usePlayer } from '../../contexts/PlayerContext'

type Episode = {
  id: string;
  title: string;
  thumbnail: string;  
  members: string;
  duration: number;
  durationAsString: string;
  description: string;
  url: string;
  publishedAt: string;
  // ...
}

type EpisodeProps = {
  episode: Episode;
}

export default function Episode({ episode }: EpisodeProps){
  /* usor o codigo abaixo apenas se estiver com fallback: true dentro de getStaticPaths
    const router = useRouter()

    // em carregamento
    if(router.isFallback ){
      return <p>Carregando...</p>
    }
  */

  const { play } = usePlayer()

  return (
    <div className={styles.episode}>
       <Head>
        <title>{episode.title} | Podaster </title>
      </Head>
      <div className={styles.thumbnailContainer}>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="Voltar"/>
          </button>
        </Link>
        
        <Image 
          width={700} 
          height={160} 
          src={episode.thumbnail}
          objectFit="cover"
        />
        <button type="button" onClick={() => play(episode)}>
        <img src="/play.svg" alt="Tocar episódio"/>
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>
       
      
      <div 
        className={styles.description} 
        dangerouslySetInnerHTML={{ __html: episode.description }} 
      />
    </div>

  )
}

// metodo obrigatorio para parametros dinamicos como [slug]
// e utilização de pagna staticas com getStaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map(espisode => {
    return{
      params:{
        slug: espisode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }

  // incremental static regeneration 
}

export const getStaticProps: GetStaticProps = async(ctx) => {
  const { slug } = ctx.params

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {    
      id: data.id,
      title: data.title,
      thumbnail: data.thumbnail,
      members: data.members,
      publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(data.file.duration),
      durationAsString: convertDurationToTimeString(Number(data.file.duration)),
      description: data.description,
      url: data.file.url,    
  }

  return {
    props:{
      episode
    },
    revalidate: 60 * 60 * 24, // 24 Hours
  }
}