import { DIRECTIONS } from '@/constants'
import { Direction } from '@/types'

const getDegrees = (direction: Direction) => {
	switch (direction) {
		case DIRECTIONS.UP:
			return 0
		case DIRECTIONS.DOWN:
			return 180
		case DIRECTIONS.LEFT:
			return 270
		case DIRECTIONS.RIGHT:
			return 90
		default:
			return 0
	}
}

describe('getDegrees', () => {
	test('should return 0 degrees when direction is "UP"', () => {
		const direction = 'UP'

		const result = getDegrees(direction)

		expect(result).toBe(0)
	})

	test('should return 180 degrees when direction is "DOWN"', () => {
		const direction = 'DOWN'

		const result = getDegrees(direction)

		expect(result).toBe(180)
	})

	test('should return 270 degrees when direction is "LEFT"', () => {
		const direction = 'LEFT'

		const result = getDegrees(direction)

		expect(result).toBe(270)
	})

	test('should return 90 degrees when direction is "RIGHT"', () => {
		const direction = 'RIGHT'

		const result = getDegrees(direction)

		expect(result).toBe(90)
	})
})
