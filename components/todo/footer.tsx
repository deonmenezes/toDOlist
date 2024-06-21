import styles from "../../styles/footer.module.css";

const Footing = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-links"]}>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className={styles["footer-socials"]}>
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Facebook"
                height="24"
                src="/icons/facebook.svg"
                width="24"
              />
            </a>
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Twitter"
                height="24"
                src="/icons/twitter.svg"
                width="24"
              />
            </a>
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Instagram"
                height="24"
                src="/icons/instagram.svg"
                width="24"
              />
            </a>
            <a
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="LinkedIn"
                height="24"
                src="/icons/linkedin.svg"
                width="24"
              />
            </a>
          </div>
          <div className={styles["footer-contact"]}>
            <p>1234 Street Name</p>
            <p>City, State, 12345</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footing;
