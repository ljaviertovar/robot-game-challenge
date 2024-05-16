export default function LeftIcon({ size = 24, color = 'currentColor' }) {
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
			className='icon icon-tabler icons-tabler-outline icon-tabler-square-arrow-left'
			viewBox='0 0 24 24'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
			></path>
			<path d='M12 8l-4 4 4 4M16 12H8'></path>
			<path d='M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z'></path>
		</svg>
	)
}
