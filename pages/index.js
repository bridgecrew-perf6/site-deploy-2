import {Info} from '../lib/info'
import Head from 'next/head'
import {Header} from '../lib/header'
import {Footer} from '../lib/footer'
import {Index} from '../lib/index'
import React, {useState} from 'react'

import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZGQxMSIsImEiOiJja3o0NXE2eTUwNTNzMnFtdHluZWRndGNsIn0.9ZXfdy5x_ii-c7Ur-PYbxQ';

export default function Home() {
    const [filteredProducts, setFilteredProducts] = useState(Info.products)
    const [clicked, setClicked] = useState("")

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

            <Index onChipClicked={(item) => onChipClicked(item)} filteredProducts={filteredProducts}
                   clicked={clicked}></Index>

            <Footer/>
        </div>
    )
}
