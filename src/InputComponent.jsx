import { useEffect, useState } from "react"

export default function InputComp(props) {
  const [thGrade, setThGrade] = useState("")
  const [prGrade, setPrGrade] = useState("")
  const [finalGrade, setFinalGrade] = useState("")

  const gradePointsMap = {
    "A+": 4.0,
    A: 3.6,
    "B+": 3.2,
    B: 2.8,
    "C+": 2.4,
    C: 2.0,
    D: 1.6,
    NG: 0.0,
  }

  function getGradePoint(letter) {
    return gradePointsMap[letter.toUpperCase()] ?? undefined
  }

  function getGradeLetter(gp) {
    if (gp > 3.6) return "A+"
    else if (gp > 3.2) return "A"
    else if (gp > 2.8) return "B+"
    else if (gp > 2.4) return "B"
    else if (gp > 2.0) return "C+"
    else if (gp > 1.6) return "C"
    else if (gp > 1.2) return "D"
    else return "NG"
  }

  useEffect(() => {
    // Incomplete input — don't send anything to parent

    if (thGrade === "" || prGrade === "") {
      props.onGradeChange(props.subject, null)
      setFinalGrade("")
      return
    }

    const thPoint = getGradePoint(thGrade)
    const prPoint = getGradePoint(prGrade)

    const totalGradePoint =
      (thPoint * props.thCr + prPoint * props.prCr) / props.totalCr

    const gradeLetter = getGradeLetter(totalGradePoint)

    setFinalGrade(`${gradeLetter}`)

    props.onGradeChange(props.subject, {
      totalGradePoint,
      totalCr: props.totalCr,
      finalGrade,
    })
  }, [thGrade, prGrade])

  return (
    <div className="subject-container">
      <div className="subject-name" style={{ width: "9.6rem" }}>
        <label>{props.subject}</label>
      </div>
      <div className="theory">
        <label>Theory </label>
        <select value={thGrade} onChange={(e) => setThGrade(e.target.value)}>
          <option value="">choose</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="NG">NG</option>
        </select>
      </div>
      <div className="practical">
        <label>Practical </label>
        <select value={prGrade} onChange={(e) => setPrGrade(e.target.value)}>
          <option value="">choose</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="NG">NG</option>
        </select>
      </div>
      <div className="final-grade">Final Grade: {finalGrade}</div>
    </div>
  )
}
