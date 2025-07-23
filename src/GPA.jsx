import { useState, useEffect } from "react"
import InputComp from "./InputComponent"
import Header from "./header"
import Footer from "./footer"
import Modal from "./Modal"
import Quote from "./Quote"

function GpaCalc() {
  const [grades, setGrades] = useState({})
  const [gpa, setGpa] = useState(0)
  const [optionalSub, setOptionalSub] = useState("Computer")
  const [showResults, setShowResults] = useState(false)

  function getGrades(subject, data) {
    setGrades((g) => ({ ...g, [subject]: data }))
  }

  useEffect(() => {
    // Determine required subjects
    const requiredSubjects = [
      "English",
      "Nepali",
      "Physics",
      "Chemistry",
      "Maths",
      optionalSub,
    ]

    // Check if all required subjects have valid grades
    const isComplete = requiredSubjects.every(
      (subj) =>
        grades[subj] &&
        typeof grades[subj].totalGradePoint === "number" &&
        !isNaN(grades[subj].totalGradePoint)
    )

    if (!isComplete) {
      setGpa(0)
      return
    }

    // If complete, calculate GPA
    const allSubjects = requiredSubjects.map((subj) => grades[subj])

    let totalPoints = 0
    let totalCredits = 0

    for (const subject of allSubjects) {
      totalPoints += subject.totalGradePoint * subject.totalCr
      totalCredits += subject.totalCr
    }

    const gpa = Number((totalPoints / totalCredits).toFixed(2))
    setGpa(gpa)
  }, [grades, optionalSub])

  return (
    <div className="container">
      <Header />
      <Quote />
      <div className="input-container">
        <InputComp
          subject="English"
          totalCr={4}
          thCr={3}
          prCr={1}
          onGradeChange={getGrades}
        />
        <InputComp
          subject="Nepali"
          totalCr={3}
          thCr={2.25}
          prCr={0.75}
          onGradeChange={getGrades}
        />
        <InputComp
          subject="Physics"
          totalCr={5}
          thCr={3.75}
          prCr={1.25}
          onGradeChange={getGrades}
        />
        <InputComp
          subject="Chemistry"
          totalCr={5}
          thCr={3.75}
          prCr={1.25}
          onGradeChange={getGrades}
        />
        <InputComp
          subject="Maths"
          totalCr={5}
          thCr={3.75}
          prCr={1.25}
          onGradeChange={getGrades}
        />
        <div className="opt-sub" style={{ margin: "0 auto" }}>
          <label>optional subject: </label>
          <select
            value={optionalSub}
            onChange={(e) => setOptionalSub(e.target.value)}
            style={{ width: 90 }}
          >
            <option value="Computer">Computer</option>
            <option value="Biology">Biology</option>
          </select>
        </div>

        {optionalSub && (
          <InputComp
            subject={optionalSub}
            totalCr={5}
            thCr={optionalSub === "Computer" ? 2.5 : 3.75}
            prCr={optionalSub === "Computer" ? 2.5 : 1.25}
            onGradeChange={getGrades}
          />
        )}
      </div>
      {gpa > 0 && (
        <div  className="btn-show-container">
          <button className="btn-show" onClick={() => setShowResults(true)}>
            Show GPA
          </button>
        </div>
      )}

      {showResults && <Modal gpa={gpa} setShow={setShowResults} />}

      <Footer />
    </div>
  )
}

export default GpaCalc
