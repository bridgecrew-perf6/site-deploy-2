import {Info} from '../lib/info'
import Head from 'next/head'
import {Header} from '../lib/header'
import {Footer} from '../lib/footer'
import {Overlay} from '../lib/overlay'
import {Index} from '../lib/index'


export default function Home() {
    return (
        <div className="root">
            <Head>
                <title>{Info.title} | Главная страница</title>
                <meta name="description" content={Info.description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header></Header>
            <Overlay></Overlay>

            <Index></Index>

            <Footer/>
        </div>
    )
}
