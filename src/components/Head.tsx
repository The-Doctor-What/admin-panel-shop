import Head from 'next/head'
import {meta} from "@/utils/client/metaData";

export type HeadProps = {
    title?: string;
}

export default function HeadComponent({title}: HeadProps) {

    return (
        <Head>
            <title>{(title ? title + " | " : "") + meta.title}</title>
            <link rel="icon" href="/favicon.ico"/>

            <meta name="description" content={meta.description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={meta.url}/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:description" content={meta.description}/>
        </Head>
    )
}