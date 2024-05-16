import { GameArea, Stats } from './components/GameArea'

import useGame from './hooks/useGame'

function App() {
	useGame()

	return (
		<main className='container w-full max-w-7xl'>
			<header className='p-8 mb-4'>
				<h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
					Robot Game 🤖
				</h1>
			</header>
			<Stats />
			<GameArea />
		</main>
	)
}

export default App
