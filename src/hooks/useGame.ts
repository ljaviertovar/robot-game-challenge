import { ROTATE_DIRECTIONS } from '@/constants'
import { useGameStore } from '@/stores/useGameStore'
import { useLeaderboardStore } from '@/stores/useLeaderboardStore'
import { useEffect } from 'react'

const countdownAudio = new Audio('/sounds/countdown.mp3')

export default function useGame() {
	const { play, decreaseTimer, timer, resetGame, score, gameOver, playGame, setSurvived, moveRobot, rotateRobot } =
		useGameStore()
	const { player, setPlayer, addScore } = useLeaderboardStore()

	useEffect(() => {
		if (play && timer === 10) {
			countdownAudio.play()
		}

		if (play && timer === 0) {
			if (player) {
				addScore(player, score)
				setPlayer(null)
			}
			setSurvived()
		}
	}, [play, timer, score, addScore, resetGame, gameOver, player, setPlayer, setSurvived])

	useEffect(() => {
		if (gameOver) {
			if (player) {
				addScore(player, score)
				setPlayer(null)
			}
			playGame(false)
		}
	}, [score, addScore, gameOver, playGame, player, setPlayer])

	useEffect(() => {
		let interval: any

		if (play) {
			interval = setInterval(() => {
				decreaseTimer()
			}, 1000)
		}

		return () => {
			if (interval) {
				clearInterval(interval)
			}
		}
	}, [play, decreaseTimer])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Space' || event.key === ' ' || event.keyCode === 32) {
				moveRobot()
			} else if (event.key === 'ArrowLeft') {
				rotateRobot(ROTATE_DIRECTIONS.LEFT)
			} else if (event.key === 'ArrowRight') {
				rotateRobot(ROTATE_DIRECTIONS.RIGHT)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [moveRobot, rotateRobot])
}
