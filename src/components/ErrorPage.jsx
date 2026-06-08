import { Link } from "react-router";

import styles from "../style/ErrorPage.module.css"

const ErrorPage = () => {
    return(
        <div className={styles.error}>
            <h1>Ooops...</h1>
            <p>This page does not seem to exist...</p>
            <Link to="/">Go back</Link>
        </div>
    );
}
export default ErrorPage;