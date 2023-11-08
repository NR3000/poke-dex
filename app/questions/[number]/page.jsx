import CountDownTimer from "../../containers/CountDownTimer"
import PrimeNumbers from "../../containers/PrimeNumbers"
import SportInteractiveInterview from "../../containers/SportInteractiveInterview"

export default function page({params: {number}}) {
  return (
    <section className="question-output">
      { number === "timer" && <CountDownTimer/> }
      { number === "prime-numbers" && <PrimeNumbers/> }
      { number === "player-search" && <SportInteractiveInterview/> }
    </section>
  )
}
