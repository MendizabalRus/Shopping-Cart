import styles from "../style/Account.module.css"

const Account = () => {
    return(
        <div className={styles.account}>
            <form className={styles.accountForm}>
                <label htmlFor="email">E-mail:
                    <input type="email" id="email"/>
                </label>
                <label htmlFor="password">Password
                    <input type="password" id="password" />
                </label>
                <label htmlFor="passwordConfirmation">Confirm password:
                    <input type="password" id="passwordConfirmation" />
                </label>
                <input type="submit" value={"Register"} />
            </form>
        </div>
    );
}
export default Account;