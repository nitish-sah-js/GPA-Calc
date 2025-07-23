import { Link } from "react-router-dom"
import styles from "./Details.module.css"

export default function Details() {
  return (
    <div className={styles.details}>
      <div className={styles.calculation}>
        <h1>Credit-Based GPA Calculation Guide </h1>
        <p>
          In this grading system, each subject is evaluated based on its{" "}
          <strong>theory</strong> and <strong>practical</strong> components.
          These components are assigned separate thCr for theory and prCr for
          practical credits, which determine how much each part contributes to
          the subject's final grade. For example, if a subject has thCr = 3 and
          prCr = 1 , it means the theory carries three times more weight than
          the practical in calculating the final grade.
        </p>

        <p>
          Grades for theory and practical are given in letter format (such as
          A+, A, B+, etc.) and are first converted into{" "}
          <strong>grade points</strong>. Each letter grade corresponds to a
          specific numeric value: A+ equals 4.0, A is 3.6, B+ is 3.2, and so on
          down to E (0.8) and NG (0.0). These grade points are essential for
          computing both the <strong>final subject grade</strong> and the{" "}
          <strong>overall GPA</strong>.
        </p>

        <p>
          For subjects that include both theory and practical, the{" "}
          <strong>final grade point</strong> is calculated using a weighted
          average formula:
          <br />
          Final Grade Point = (thPoint × thCr + prPoint × prCr) / (thCr + prCr)
          .<br />
          This ensures that the grade reflects the relative importance of each
          component. For theory-only subjects, the final grade point is simply
          the theory grade point.
        </p>

        <p>
          Once all final grade points for each subject are determined, the
          overall <strong>GPA (Grade Point Average)</strong> is calculated. This
          is done by taking the sum of each subject’s final grade point
          multiplied by its total credit (theory + practical), and then dividing
          by the total credits of all subjects. This weighted approach ensures
          that subjects with more credit hours have a larger impact on the final
          GPA.
        </p>

        <p>
          This method provides a fair and accurate evaluation of student{" "}
          performance, especially when subjects vary in credit weight or include
          both theoretical and practical learning components.
        </p>
      </div>
      <Link to="/" className={styles.link}>
        <button className={styles.animatedButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arr2}
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className={styles.text}>H O M E P A G E</span>
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
  )
}
