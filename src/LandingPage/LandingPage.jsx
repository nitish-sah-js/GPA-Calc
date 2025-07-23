import { Link } from "react-router-dom"
import styles from "./LandingPage.module.css"
import { CgMail } from "react-icons/cg"

export default function () {
  return (
    <div className={styles.landingPage}>
      <div>
        <h1 className={styles.title}>NEB GPA Calculator</h1>
      </div>
      <div className={styles.desc}>
        <p>
          Calculate your GPA for +2 Science NEB (Computer Science and Biology)
          by entering your theory and practical grades. Get accurate results
          based on your subject credits!
        </p>
      </div>
      <div>
        <Link to="/gpa-calc" className={styles.link}>
          <button className={styles.animatedButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arr2}
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className={styles.text}>GET STARTED</span>
            <span className={styles.circle}></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arr1}
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </Link>
      </div>
      <div className={styles.inst}>
        <h3>INSTRUCTIONS</h3>
      </div>
      <div className={styles.guidelines}>
        <p>
          <ol>
            <li>
              Choose either Biology or Computer as your optional subject group.
            </li>
            <li>
              Enter marks for the 5 compulsory subjects:
              <ul>
                <li>English</li>
                <li>Nepali</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Maths</li>
              </ul>
            </li>
            <li>Enter marks for 1 optional subject: (Biology or Computer)</li>
            <li>Provide both Theory and Practical marks for each subject.</li>
            <li>
              Once all marks are entered, Click on Show Results (which will only
              appear after entering all the marks){" "}
            </li>
          </ol>
        </p>
      </div>

      <div>
        <Link to="/details" className={styles.link}>
          <button className={styles.animatedButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arr2}
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className={styles.text}>KNOW MORE</span>
            <span className={styles.circle}></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arr1}
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </Link>
      </div>
      <div className={styles.contact}>
        <a href="mailto:ngscompany25@gamil.com" className={styles.mailLink}>
          <span>Mail Us</span>
          <CgMail className={styles.gmailIcon} />
          <span>ngscompany25@gamil.com</span>
        </a>
      </div>
    </div>
  )
}
