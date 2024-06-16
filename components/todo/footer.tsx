import styles from '../../styles/footer.module.css';

const Footing = () => {
    return ( 
        <>
        <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          <div className={styles['footer-links']}>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className={styles['footer-socials']}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" width="24" height
              ="24" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" width="24" height="24" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" width="24" height="24" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" width="24" height="24" />
            </a>
          </div>
          <div className={styles['footer-contact']}>
            <p>1234 Street Name</p>
            <p>City, State, 12345</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
        </>
     );
}
 
export default Footing;