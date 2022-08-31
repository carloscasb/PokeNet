
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/Navbar.module.css"


export default function Navbar (){

return (
<nav className={styles.navbar}>
    <div className={styles.logo}>
        <Image src="/images/sol.jpg" width="40" height="40" alt="sol da cidade"  />
        <h1>PokeNet</h1>
    </div>
    <ul className={styles.link_items}>
        <li>
            <Link href="/"  ><a>Home</a></Link>
        </li>
        <li>
            <Link href="/about"  ><a>Sobre</a></Link>
        </li>
    </ul>

</nav>

)

}