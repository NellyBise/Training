import Button from '../components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import circuit from '../src/circuit-training-maison.jpg'
import sport from '../src/sport-sans-materiel.jpg'

export default function planifier() {
  return (
    <section className="bg-slate-50 p-8 flex flex-col gap-6 md:gap-20">
      <h1 className="uppercase flex justify-center text-center text-3xl md:text-5xl py-8 font-bold">
        Planifie ton entraînement : conseils et astuces pour un circuit efficace
      </h1>
      <article className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col md:w-2/3 gap-3">
          <h2 className="uppercase flex justify-center text-center text-2xl md:text-4xl py-8 font-bold">
            Qu’est-ce qu’un circuit training ?
          </h2>
          <p>
            Un circuit training est un programme d’entraînement composé d’une
            série d’exercices enchaînés avec peu ou pas de repos entre chaque.
            Il est souvent recommandé de structurer ses circuits avec 9 à 12
            exercices différents.
          </p>
          <p>
            La durée de chaque exercice et du temps de repos peut varier selon
            ton niveau :
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Débutant : 30 secondes d’effort pour 30 secondes de repos.</li>
            <li>
              Intermédiaire : 45 secondes d’effort pour 15 secondes de repos.
            </li>
            <li>Avancé : 55 secondes d’effort pour 5 secondes de repos.</li>
          </ul>
          <p>
            Pour une séance efficace, vise une durée totale entre{' '}
            <span className="font-bold">30 et 60 minutes</span>, soit au moins
            trois répétitions complètes de ton circuit.
          </p>
          <p>
            <span className="font-bold">Astuce :</span> Utilise une application
            de timer pour suivre facilement les temps d’effort et de repos.
          </p>
          <p>
            Train Up est conçu pour t’accompagner dans la création de circuits
            sur mesure, mais il peut aussi être utilisé pour structurer tout
            type d’entraînement sportif, que ce soit du cardio, du renforcement
            musculaire ou des exercices fonctionnels.
          </p>
        </div>
        <Image
          src={circuit}
          alt=""
          className="md:w-1/3 object-cover mx-auto my-4 rounded"
          width={6000}
          height="auto"
        />
      </article>
      <article className="flex flex-col-reverse md:flex-row gap-8">
        <Image
          src={sport}
          alt=""
          className="md:w-1/3 object-cover mx-auto my-4 rounded"
          width={6000}
          height="auto"
        />
        <div className="flex flex-col md:w-2/3 gap-3">
          <h2 className="uppercase flex justify-center text-center text-2xl md:text-4xl py-8 font-bold">
            Fais du sport à la maison ou en salle
          </h2>
          <p>
            Avec <span className="font-bold">Train Up</span>, accède à une
            bibliothèque variée d’exercices adaptés à ton niveau, que tu sois
            débutant ou expérimenté. Tu peux utiliser les filtres pour
            personnaliser ton entraînement en fonction de :
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Ton niveau de difficulté.</li>
            <li>
              Le matériel à disposition (haltères, élastiques, aucun équipement,
              etc.).
            </li>
            <li>
              Les muscles que tu souhaites cibler (jambes, dos, bras, abdos…).
            </li>
          </ul>
          <p>
            Que tu sois chez toi ou dans une salle de sport, Train Up te permet
            de concevoir facilement un programme d’exercices adapté à tes
            objectifs.
          </p>
        </div>
      </article>
      <article className="flex flex-col items-center gap-8 pb-12">
        <h2 className="uppercase flex justify-center text-center text-2xl md:text-4xl py-8 font-bold">
          Il est temps de passer à l’action !
        </h2>
        <p className="self-left pb-8">
          Grâce à ces conseils, tu es prêt à planifier des séances
          d’entraînement efficaces. Commence ton programme dès aujourd’hui avec
          Train Up et prends le contrôle de ta routine sportive !
        </p>
        <Link href="./creer-programme-entrainement">
          <Button title="Crée ton circuit" />
        </Link>
      </article>
    </section>
  )
}
