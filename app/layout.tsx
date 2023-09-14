/* Components */
import { Header } from './components/Header/Header'
import { Providers } from '@/lib/providers'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Header />
            {props.children}
          </section>
        </body>
      </html>
    </Providers>
  )
}
