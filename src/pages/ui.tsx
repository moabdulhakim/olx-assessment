import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import OlxLink from "@/components/ui/OlxLink"
import styles from "@/styles/pages/UI.module.css"
import Head from "next/head"

const ui = () => {
  return (
    <>
        <Head>
            <title>{"UI"}</title>
            <meta name="description" content={"UI"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.page}>
            <main className={styles.main}>
                <div>
                    <h2>OLX Links</h2>
                    <div className={styles.variants}>
                        <OlxLink href="/about" content="Header" header />
                        <OlxLink href="/about" content="About" />
                        <OlxLink href="/about" content="Footer" footer />
                    </div>
                </div>

                <div>
                    <h2>Buttons</h2>
                    <div className={styles.variants}>
                        <Button icon="iconSell.svg" content="Sell" primary />
                        <Button icon="search.svg" iconSize={20} secondary />
                        <Button content="Login" linkLike />
                    </div>
                </div>

                <div>
                    <h2>Inputs</h2>
                    <div className={styles.variants}>
                        <Input icon="search-black.svg" placeholder="search" type="text" />
                    </div>
                </div>
            </main>
        </div>
    </>
  )
}

export default ui