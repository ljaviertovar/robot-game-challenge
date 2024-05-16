import { TargetPosition } from '../types'

export function generateRandomPosition(robotX: number, robotY: number, gridSize: number): TargetPosition {
	let position: TargetPosition
	do {
		position = {
			x: Math.floor(Math.random() * gridSize),
			y: Math.floor(Math.random() * gridSize),
		}
	} while (position.x === robotX && position.y === robotY)
	return position
}
