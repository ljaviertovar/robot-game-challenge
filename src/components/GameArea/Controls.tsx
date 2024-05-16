import { Button } from '../ui/button'
import { LeftIcon, MoveIcon, RightIcon } from '../Icons'

import { ROTATE_DIRECTIONS } from '../../constants'
import { RotateDirection } from '../../types'

interface Props {
	moveRobot: () => void
	rotateRobot: (direction: RotateDirection) => void
}

export default function Controls({ moveRobot, rotateRobot }: Props) {
	return (
		<div className='flex gap-4 justify-between p-8'>
			<Button
				className='flex gap-2'
				onClick={() => rotateRobot(ROTATE_DIRECTIONS.LEFT)}
			>
				<LeftIcon />
				Left
			</Button>
			<Button
				className='flex gap-2'
				onClick={moveRobot}
			>
				<MoveIcon />
				Move
			</Button>
			<Button
				className='flex gap-2'
				onClick={() => rotateRobot(ROTATE_DIRECTIONS.RIGHT)}
			>
				<RightIcon />
				Right
			</Button>
		</div>
	)
}
