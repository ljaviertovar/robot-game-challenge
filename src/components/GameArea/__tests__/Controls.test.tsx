import { render, fireEvent } from '@testing-library/react'
import Controls from '../Controls'

describe('Controls', () => {
	test('should call moveRobot function when Move button is clicked', () => {
		const moveRobotMock = jest.fn()
		const rotateRobotMock = jest.fn()
		const { getByText } = render(
			<Controls
				moveRobot={moveRobotMock}
				rotateRobot={rotateRobotMock}
			/>
		)

		fireEvent.click(getByText('Move'))

		expect(moveRobotMock).toHaveBeenCalled()
		expect(rotateRobotMock).not.toHaveBeenCalled()
	})

	test('should call rotateRobot function with ROTATE_DIRECTIONS.LEFT when Left button is clicked', () => {
		const moveRobotMock = jest.fn()
		const rotateRobotMock = jest.fn()
		const { getByText } = render(
			<Controls
				moveRobot={moveRobotMock}
				rotateRobot={rotateRobotMock}
			/>
		)

		fireEvent.click(getByText('Left'))

		expect(moveRobotMock).not.toHaveBeenCalled()
		expect(rotateRobotMock).toHaveBeenCalledWith('LEFT')
	})

	test('should call rotateRobot function with ROTATE_DIRECTIONS.RIGHT when Right button is clicked', () => {
		const moveRobotMock = jest.fn()
		const rotateRobotMock = jest.fn()
		const { getByText } = render(
			<Controls
				moveRobot={moveRobotMock}
				rotateRobot={rotateRobotMock}
			/>
		)

		fireEvent.click(getByText('Right'))

		expect(moveRobotMock).not.toHaveBeenCalled()
		expect(rotateRobotMock).toHaveBeenCalledWith('RIGHT')
	})
})
