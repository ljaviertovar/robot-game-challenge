export default function RobotIcon({ size = 24, color = 'currentColor' }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='none'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			className='icon icon-tabler icons-tabler-outline icon-tabler-robot'
			viewBox='0 0 24 24'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
			></path>
			<path d='M6 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2zM12 2v2M9 12v9M15 12v9M5 16l4-2M15 14l4 2M9 18h6M10 8v.01M14 8v.01'></path>
		</svg>
	)
}
