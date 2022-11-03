import styles from '../../styles/Login.module.css'

const Login = () => {
  return (
    <div>

<div className={styles.login_box}>
  <h2>Login</h2>
  <form>
    <div className={styles.user_box}>
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div className={styles.user_box}>
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>

    </div>
  )
}

export default Login