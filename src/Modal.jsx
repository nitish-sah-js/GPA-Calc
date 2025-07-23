import { IoCloseSharp } from "react-icons/io5"

// emoji meme imports

import thong from "./assets/thong.jpg"
import whatt from "./assets/whatt.jpg"
import retard from "./assets/retard.jpg"
import nerd from "./assets/nerd.jpg"
import chad from "./assets/chad.jpg"
import kunfuCat from "./assets/kunfuCat.jpg"
import doge from "./assets/doge.webp"

export default function Modal({ setShow, gpa }) {
  let gif = ""

  if (gpa > 3.8) gif = nerd
  else if (gpa > 3.6) gif = chad
  else if (gpa > 3.2) gif = doge
  else if (gpa > 2.5) gif = kunfuCat
  else if (gpa > 1.6) gif = thong
  else if (gpa > 1) gif = whatt
  else if (gpa > 0) gif = retard

  const handleOverlayClick = (e) => {
    // If the user clicked directly on the overlay (not the modal content)
    if (e.target.classList.contains("modal-overlay")) {
      setShow(false)
    }
  }
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-content"
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p> You will achieve {gpa} GPA</p>

        <IoCloseSharp className="modal-close" onClick={() => setShow(false)} />
      </div>
    </div>
  )
}
