import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Leaderboard from '../Leaderboard'

interface Props {
	score: number
	resetGame: () => void
}

export function SurvivedDialog({ score, resetGame }: Props) {
	const [seeLeaderboard, setSeeLeaderboard] = useState(false)

	return (
		<Dialog open={true}>
			<DialogContent className='sm:max-w-[425px]'>
				{seeLeaderboard ? (
					<>
						<Leaderboard />
						<DialogFooter>
							<Button onClick={() => setSeeLeaderboard(false)}>Back</Button>
						</DialogFooter>
					</>
				) : (
					<>
						<DialogHeader className=''>
							<DialogTitle>Yay, you have survived! 🎉</DialogTitle>
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<Card className='flex-1 '>
								<CardHeader className='text-center pb-2'>
									<CardTitle className='text-sm font-medium'>Score:</CardTitle>
								</CardHeader>
								<CardContent className='text-center'>
									<span className='text-2xl font-bold'>{score}</span>
								</CardContent>
							</Card>
						</div>

						<DialogFooter>
							<div className='w-full flex justify-between'>
								<Button
									variant={'secondary'}
									onClick={() => setSeeLeaderboard(true)}
								>
									Leaderboard
								</Button>
								<Button
									onClick={() => {
										resetGame()
									}}
								>
									Play Again
								</Button>
							</div>
						</DialogFooter>
					</>
				)}
			</DialogContent>
		</Dialog>
	)
}
