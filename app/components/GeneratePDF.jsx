import jsPDF from 'jspdf'
import Button from './ui/Button'

export default function GeneratePDF({
  orderedExercises,
  title,
  description,
  type,
}) {
  const rowsNumber = Math.ceil(orderedExercises.length / 3)

  const generate = () => {
    const doc = new jsPDF()
    const maxTitleWidth = 60
    const ymargin = (5 - rowsNumber) * 10
    const mytitle = title
    let yPosition = 20
    const maxWidth = 180
    const paragraphs = description.split('\n')

    doc.text(mytitle, 100 - title.length * 1.1, 10)
    doc.setFontSize(12)
    paragraphs.forEach((paragraph) => {
      const lines = doc.splitTextToSize(paragraph, maxWidth)
      doc.text(lines, 10, yPosition)
      yPosition += lines.length * 6
    })

    doc.setFontSize(8)
    doc.text('Programme généré avec Train Up', 160, 295)
    for (let j = 0; j < rowsNumber; j++) {
      for (let i = j * 3; i < (j + 1) * 3; i++) {
        if (orderedExercises[i] !== undefined) {
          doc.setFillColor(140, 222, 72)
          doc.circle(40 + (i - j * 3) * 64, ymargin + 46 + j * 52, 4, 'F')
          doc.setFontSize(14)
          if (i < 9) {
            doc.text(
              `${i + 1}`,
              38.6 + (i - j * 3) * 64,
              ymargin + 47.6 + j * 52
            )
          } else {
            doc.text(
              `${i + 1}`,
              37.1 + (i - j * 3) * 64,
              ymargin + 47.6 + j * 52
            )
          }

          doc.addImage(
            orderedExercises[i].images[0],
            'JPG',
            13 + (i - j * 3) * 64,
            ymargin + 56 + j * 52,
            30,
            18,
            orderedExercises[i].name + '_image1',
            'FAST',
            10
          )
          doc.addImage(
            orderedExercises[i].images[1],
            'JPG',
            39 + (i - j * 3) * 64,
            ymargin + 51 + j * 52,
            30,
            18,
            orderedExercises[i].name + '_image2',
            'FAST',
            -10
          )
          const lines = doc.splitTextToSize(
            orderedExercises[i].name,
            maxTitleWidth
          )
          doc.setFontSize(12)
          doc.text(
            lines,
            37 - lines[0].length * 0.8 + (i - j * 3) * 64,
            ymargin + 79 + j * 52
          )
        }
      }
    }
    doc.output('dataurlnewwindow')
  }
  return type ? (
    <button onClick={generate}>
      <svg
        className="group"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 32 32"
      >
        <path
          className="fill-slate-700 group-hover:fill-lime-500 duration-300"
          d="M9 16a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5zm1.5 3H10v-1h.5a.5.5 0 0 1 0 1m3.5-2a1 1 0 0 1 1-1h.5a3.5 3.5 0 1 1 0 7H15a1 1 0 0 1-1-1zm2 3.915a1.5 1.5 0 0 0 0-2.83zM20 22v-5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0M6 5v8H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v1a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-1h1a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V9.828a3 3 0 0 0-.879-2.12l-4.828-4.83A3 3 0 0 0 18.172 2H9a3 3 0 0 0-3 3m3-1h7v5a3 3 0 0 0 3 3h5v1H8V5a1 1 0 0 1 1-1M8 27v-1h16v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1M24 9.828V10h-5a1 1 0 0 1-1-1V4h.172a1 1 0 0 1 .707.293l4.828 4.828a1 1 0 0 1 .293.707M5 15h22v9H5z"
        />
      </svg>
    </button>
  ) : (
    <Button title="Ouvrir PDF" clickFunction={generate} />
  )
}
