import { Controls, Grid } from '.'
import { GameOverDialog, PlayDialog, SurvivedDialog } from '../Dialogs'

import { useGameStore } from '@/stores/useGameStore'
import { useLeaderboardStore } from '@/stores/useLeaderboardStore'

export default function GameArea() {
	const {
		score,
		robotPosition,
		targetPosition,
		moveRobot,
		rotateRobot,
		playGame,
		play,
		gameOver,
		resetGame,
		survided,
	} = useGameStore()

	const { setPlayer } = useLeaderboardStore()

	return (
		<section>
			<div className='flex flex-col justify-center items-center py-10'>
				{!play && survided && !gameOver && (
					<SurvivedDialog
						score={score}
						resetGame={resetGame}
					/>
				)}

				{!play && gameOver && !survided && (
					<GameOverDialog
						score={score}
						resetGame={resetGame}
					/>
				)}

				{!play && !survided && !gameOver && (
					<PlayDialog
						setPlayer={setPlayer}
						playGame={playGame}
					/>
				)}

				<Grid
					robotPosition={robotPosition}
					targetPosition={targetPosition}
				/>
				<Controls
					moveRobot={moveRobot}
					rotateRobot={rotateRobot}
				/>
			</div>
		</section>
	)
}
