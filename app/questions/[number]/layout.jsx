import Link from "next/link";

const questions = [
	{ "name": "Prime numbers", "path": "prime-numbers" },
	{ "name": "Post message", "path": "post-message" },
	{ "name": "Timer", "path": "timer" },
	{ "name": "Roman to number", "path": "roman-to-number",  },
	{ "name": "Dropdown", "path": "drop-down" },
	{ "name": "Player search", "path": "player-search" },
]

export default function QuestionLayout({ children, params: {number} }) {
    
    console.log(number)
    return (
        <div className="question-page">
            <section className="question-nav">
                { questions.map((que,ind) => <Link href={`/questions/${que.path}`} className={ que.path === number ? "option-active" : "option"} key={ind}>{que.name}</Link>) }
            </section>
            {children}
        </div>
    )
}