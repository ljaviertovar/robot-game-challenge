import { NutIcon, RobotIcon } from '../Icons'

import { Direction, RobotPosition, TargetPosition } from '../../types'

import styles from './Grid.module.css'
import { useGameStore } from '@/stores/useGameStore'
import { DIRECTIONS, GRID_TYPES } from '@/constants'

interface Props {
	robotPosition: RobotPosition
	targetPosition: TargetPosition
}

export default function Grid({ robotPosition, targetPosition }: Props) {
	const { gridSize, gridType } = useGameStore()

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

	const renderGrid = () => {
		const grid = []
		for (let row = 0; row < gridSize; row++) {
			const columns = []
			for (let col = 0; col < gridSize; col++) {
				const isRobot = robotPosition.x === col && robotPosition.y === row
				const isTarget = targetPosition.x === col && targetPosition.y === row

				const cellStyle = isRobot ? styles.robot : isTarget ? styles.target : ''

				columns.push(
					<div
						key={`${row}-${col}`}
						className={`${styles.cell} ${cellStyle}`}
						style={{ borderRadius: `${gridType === GRID_TYPES.CIRCLE ? '50%' : '0'}` }}
					>
						{isRobot && (
							<div
								style={{
									transform: `rotate(${getDegrees(robotPosition.direction)}deg)`,
								}}
							>
								<RobotIcon
									color='white'
									size={30}
								/>
							</div>
						)}

						{isTarget && <NutIcon color='yellow' />}
					</div>
				)
			}
			grid.push(
				<div
					key={row}
					className={styles.row}
				>
					{columns}
				</div>
			)
		}
		return grid
	}

	return <div>{renderGrid()}</div>
}
