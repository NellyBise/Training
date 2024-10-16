import jsPDF from 'jspdf'
import Button from './ui/Button'

export default function GeneratePDF({ orderedExercises, title, description }) {
  const rowsNumber = Math.ceil(orderedExercises.length / 3)

  const generate = () => {
    console.log(description)
    const doc = new jsPDF()
    const maxWidth = 60
    const ymargin = (5 - rowsNumber) * 10
    const mytitle = title
    const lines = description.split('\n')
    let yPosition = 20

    doc.text(mytitle, 100 - title.length * 1.1, 10)
    doc.setFontSize(12)
    lines.forEach((line) => {
      doc.text(line, 100 - line.length * 0.8, yPosition)
      yPosition += 6
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
            15 + (i - j * 3) * 64,
            ymargin + 56 + j * 52,
            25,
            15,
            orderedExercises[i].name + '_image1',
            'FAST',
            10
          )
          doc.addImage(
            orderedExercises[i].images[1],
            'JPG',
            39 + (i - j * 3) * 64,
            ymargin + 52 + j * 52,
            25,
            15,
            orderedExercises[i].name + '_image2',
            'FAST',
            -10
          )
          const lines = doc.splitTextToSize(orderedExercises[i].name, maxWidth)
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
  return <Button title="Ouvrir PDF" clickFunction={generate} />
}
