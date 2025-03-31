import Link from 'next/link';
import styles from '../Navbar/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLinks}>Home</Link>
      <Link href="/about" className={styles.navLinks}>About</Link>
      <Link href="/signup" className={styles.navLinks}>Signup</Link>
    </nav>
  );
}

export default Navbar;
