import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

import { useGameStore } from '../../stores/useGameStore'

export default function Stats() {
	const { score, timer } = useGameStore()

	return (
		<section className='w-full mb-8'>
			<div className='flex justify-between gap-4 w-1/2 m-auto'>
				<Card className='flex-1'>
					<CardHeader className='text-center pb-2 text-muted-foreground'>
						<CardTitle className='text-sm font-medium'>Score:</CardTitle>
					</CardHeader>
					<CardContent className='text-center'>
						<span className='text-2xl font-bold'>{score}</span>
					</CardContent>
				</Card>

				<Card className='flex-1'>
					<CardHeader className='text-center pb-2 text-muted-foreground'>
						<CardTitle className='text-sm font-medium'>Timer:</CardTitle>
					</CardHeader>
					<CardContent className='text-center'>
						<span className='text-2xl font-bold'>{timer}</span>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
