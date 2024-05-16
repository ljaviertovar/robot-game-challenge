export default function NutIcon({ size = 24, color = 'currentColor' }) {
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
			className='icon icon-tabler icons-tabler-outline icon-tabler-nut'
			viewBox='0 0 24 24'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
			></path>
			<path d='M19 6.84a2.007 2.007 0 011 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a1.995 1.995 0 01-1.94 0l-6-3.844A2.006 2.006 0 014 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.049 2.049 0 012 0l6 3.582H19z'></path>
			<path d='M9 12a3 3 0 106 0 3 3 0 10-6 0'></path>
		</svg>
	)
}
