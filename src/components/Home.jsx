import Header from './Header';
import Footer from './Footer';

import styles from '../style/Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.aboveTheFold}>
        <Header />
        <Hero />
      </div>
      <Footer />
    </>
  );
};
export default Home;

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        
      </section>
    </>
  );
};