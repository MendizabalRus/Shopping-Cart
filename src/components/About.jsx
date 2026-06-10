import styles from "../style/About.module.css"

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutUs}>
                <h2>ABOUT US</h2>
                <h3>ORIGINS</h3>
                <h3>HISTORY</h3>
                <h3>FUTURE</h3>
            </div>
            <div className={styles.mission}>
                <h2>MISSIONS</h2>
                <h3>MISSION 1</h3>
                <h3>MISSION 2</h3>
                <h3>MISSION 3</h3>
            </div>
            <div className={styles.achievements}>
                <h2>YOUR ACHIEVEMENTS</h2>
                <h3>ACHIEVEMENT 1</h3>
                <h3>ACHIEVEMENT 2</h3>
                <h3>ACHIEVEMENT 3</h3>
            </div>
        </div>
    );
}
export default About;