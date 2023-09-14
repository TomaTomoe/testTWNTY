/* Components */
import { Products } from './components/Products/Products'
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart'

/* Instruments */
import styles from './styles/page.module.css'

export default async function IndexPage() {
  return (
    <main className={styles.main}>
      <ShoppingCart />
      <Products />
    </main>
  )
}

export const metadata = {
  title: 'Products',
}
