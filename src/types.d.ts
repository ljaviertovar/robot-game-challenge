export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export type RobotPosition = {
	x: number
	y: number
	direction: Direction
}

export type TargetPosition = {
	x: number
	y: number
}

export type RotateDirection = 'LEFT' | 'RIGHT'

export type Leaderboard = {
	user: string
	score: number
}

export type GridType = 'SQUARE' | 'CIRCLE'
