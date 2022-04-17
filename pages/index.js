import {Info} from '../lib/info'
import Head from 'next/head'
import {Header} from '../lib/header'
import {Footer} from '../lib/footer'
import {Overlay} from '../lib/overlay'
import {Index} from '../lib/index'
import React from 'react'

export default function Home() {
    const [filteredProducts, setFilteredProducts] = React.useState(Info.products)
    const [clicked, setClicked] = React.useState("")

    const onChipClicked = (category) => {
        if (category === clicked) {
            setClicked("");
            setFilteredProducts(Info.products);
        } else {
            setClicked(category)
            setFilteredProducts(Info.products.filter(value => value.category === category));
        }

        return undefined;
    }

    return (
        <div className="root">
            <Head>
                <title>{Info.title} | Главная страница</title>
                <meta name="description" content={Info.description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header></Header>
            <Overlay></Overlay>

            <Index onChipClicked={(item) => onChipClicked(item)} filteredProducts={filteredProducts}
                   clicked={clicked}></Index>

            <Footer/>
        </div>
    )
}
