import styles from '../style/Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.newsletter}>
            <div className={styles.newsletterInfo}>
                <h2>10% OFF YOUR FIRST PURCHASE!</h2>
                <p>
                    Sing up to our newsletter to get a 10% discount off your first
                    purchase!
                </p>
                <p>You will also be the first to hear about upcoming collections,</p>
                <p>sneak peaks and access to limited pieces!</p>
            </div>
            <div className={styles.newsletterSign}>
                <h2>SIGN UP NOW!</h2>
                <form>
                    <input type="email" placeholder='example@mail.com'/>
                    <input type="submit" />
                </form>
            </div>
        </div>
        <hr />
        <div className={styles.footerContent}>
            <div className={styles.list}>
                <p>Legal Terms</p>
                <ul>
                    <li>Privacy Policies</li>
                    <li>Terms & Conditions</li>
                    <li>Shipping Policies</li>
                </ul>
            </div>
            <div className={styles.list}>
                <p>About us</p>
                <ul>
                    <li>Legacy</li>
                    <li>Mission</li>
                    <li>Achievememts</li>
                </ul>
            </div>
            <div className={styles.list}>
                <p>Contact</p>
                <ul>
                    <li>Client Support</li>
                    <li>Email: fake.email@pro-iek-to.com</li>
                    <li>Whatsapp: +00 123 45 67 89</li>
                </ul>
            </div>
            <div className={styles.list}>
                <p>Phyical Shops</p>
                <ul>
                    <li>Barcelona, Spain</li>
                    <li>Madrid, Spain</li>
                    <li>Paris, France</li>
                    <li>London, UK</li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
