import { create } from 'zustand'
import { Direction, RobotPosition, TargetPosition, GridType } from '../types'
import { generateRandomPosition } from '../utils'
import { toast } from '@/components/ui/use-toast'
import confetti from 'canvas-confetti'
import { DIRECTIONS, GRID_TYPES, ROTATE_DIRECTIONS } from '@/constants'

const scoreAudio = new Audio('/sounds/bit.mp3')
const gameOverAudio = new Audio('/sounds/fail.mp3')
const playAudio = new Audio('/sounds/start.mp3')
const levelUpAudio = new Audio('/sounds/level-up.mp3')
const stepAudio = new Audio('/sounds/step.mp3')

interface State {
	play: boolean
	gameOver: boolean
	survided: boolean
	robotPosition: RobotPosition
	targetPosition: TargetPosition
	gridSize: number
	gridType: GridType
	score: number
	timer: number
	stopTimer: boolean
}

interface Actions {
	moveRobot: () => void
	rotateRobot: (direction: Direction) => void
	playGame: (value: boolean) => void
	resetGame: () => void
	decreaseTimer: () => void
	setSurvived: () => void
}

const gridSize = 5

const initialState: State = {
	play: false,
	gameOver: false,
	survided: false,
	robotPosition: { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2), direction: 'UP' },
	targetPosition: generateRandomPosition(Math.floor(gridSize / 2), Math.floor(gridSize / 2), gridSize),
	gridSize,
	gridType: GRID_TYPES.CIRCLE,
	score: 0,
	timer: 60,
	stopTimer: false,
}

export const useGameStore = create<State & Actions>((set, get) => ({
	...initialState,
	moveRobot: () => {
		if (!get().play) return

		const { robotPosition, targetPosition, gridSize, score } = get()
		let { x, y } = robotPosition
		const { direction } = robotPosition

		switch (direction) {
			case DIRECTIONS.UP:
				y -= 1
				break
			case DIRECTIONS.DOWN:
				y += 1
				break
			case DIRECTIONS.LEFT:
				x -= 1
				break
			case DIRECTIONS.RIGHT:
				x += 1
				break
		}

		if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
			gameOverAudio.play()
			set({
				gameOver: true,
			})
		} else if (x === targetPosition.x && y === targetPosition.y) {
			set({
				robotPosition: { x, y, direction },
				targetPosition: generateRandomPosition(x, y, gridSize),
				score: score + 1,
			})

			scoreAudio.play()

			toast({
				title: '🤖 Bravo! 🎉',
			})
		} else {
			stepAudio.play()
			set({ robotPosition: { x, y, direction } })
		}
	},
	rotateRobot: (direction: Direction) => {
		if (!get().play) return

		const directions: Direction[] = [DIRECTIONS.UP, DIRECTIONS.RIGHT, DIRECTIONS.DOWN, DIRECTIONS.LEFT]
		const { robotPosition } = get()
		let index = directions.indexOf(robotPosition.direction)

		index = direction === ROTATE_DIRECTIONS.LEFT ? index - 1 : index + 1
		index = (index + 4) % 4

		set({ robotPosition: { ...robotPosition, direction: directions[index] } })
	},
	resetGame: () => {
		set({
			...initialState,
		})
	},
	playGame: (value = true) => {
		if (value) {
			playAudio.play()
		}
		set({ play: value })
	},
	decreaseTimer: () => {
		const { timer } = get()
		if (timer > 0) {
			set({ timer: timer - 1 })
		} else {
			set({ play: false })
		}
	},
	setSurvived: () => {
		levelUpAudio.play()

		set({ survided: true })

		confetti({
			particleCount: 100,
			spread: 100,
			origin: { y: 0.6 },
		})
	},
}))
