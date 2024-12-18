import Button from '../components/ui/Button'
import Link from 'next/link'
import circuit from '../src/circuit-training-maison.jpg'
import sport from '../src/sport-sans-materiel.jpg'
import Article from '../components/Article'

export default function planifier() {
  return (
    <section className="bg-slate-50 p-8 flex flex-col gap-6 md:gap-20">
      <h1 className="uppercase flex justify-center text-center text-3xl md:text-5xl py-8 font-bold">
        Planifie ton entraînement : conseils et astuces pour un circuit efficace
      </h1>
      <Article
        title="Qu’est-ce qu’un circuit training ?"
        image={circuit}
        altText=""
        content={[
          <p key="1">
            Un circuit training est un programme d’entraînement composé d’une
            série d’exercices enchaînés avec peu ou pas de repos entre chaque.
            Il est souvent recommandé de structurer ses circuits avec 9 à 12
            exercices différents.
          </p>,
          <p key="2">
            La durée de chaque exercice et du temps de repos peut varier selon
            ton niveau :
          </p>,
          <ul key="3" className="list-disc list-inside pl-4">
            <li>Débutant : 30 secondes d’effort pour 30 secondes de repos.</li>
            <li>
              Intermédiaire : 45 secondes d’effort pour 15 secondes de repos.
            </li>
            <li>Avancé : 55 secondes d’effort pour 5 secondes de repos.</li>
          </ul>,
          <p key="4">
            Pour une séance efficace, vise une durée totale entre{' '}
            <span className="font-bold">30 et 60 minutes</span>, soit au moins
            trois répétitions complètes de ton circuit.
          </p>,
          <p key="5">
            <span className="font-bold">Astuce :</span> Utilise une application
            de timer pour suivre facilement les temps d’effort et de repos.
          </p>,
          <p key="6">
            Train Up est conçu pour t’accompagner dans la création de circuits
            sur mesure, mais il peut aussi être utilisé pour structurer tout
            type d’entraînement sportif, que ce soit du cardio, du renforcement
            musculaire ou des exercices fonctionnels.
          </p>,
        ]}
        reverse={false}
      />
      <Article
        title="Fais du sport à la maison ou en salle"
        image={sport}
        altText=""
        content={[
          <p key="1">
            Avec <span className="font-bold">Train Up</span>, accède à une
            bibliothèque variée d’exercices adaptés à ton niveau, que tu sois
            débutant ou expérimenté. Tu peux utiliser les filtres pour
            personnaliser ton entraînement en fonction de :
          </p>,
          <ul key="2" className="list-disc list-inside pl-4">
            <li>Ton niveau de difficulté.</li>
            <li>
              Le matériel à disposition (haltères, élastiques, aucun équipement,
              etc.).
            </li>
            <li>
              Les muscles que tu souhaites cibler (jambes, dos, bras, abdos…).
            </li>
          </ul>,
          <p key="3">
            Que tu sois chez toi ou dans une salle de sport, Train Up te permet
            de concevoir facilement un programme d’exercices adapté à tes
            objectifs.
          </p>,
        ]}
        reverse={true}
      />
      <Article
        title="Il est temps de passer à l’action !"
        image=""
        altText=""
        content={[
          <p key="1" className="self-left pb-8">
            Grâce à ces conseils, tu es prêt à planifier des séances
            d’entraînement efficaces. Commence ton programme dès aujourd’hui
            avec Train Up et prends le contrôle de ta routine sportive !
          </p>,
          <Link key="2" href="./creer-programme-entrainement">
            <Button title="Crée ton circuit" />
          </Link>,
        ]}
        reverse="false"
      />
    </section>
  )
}
