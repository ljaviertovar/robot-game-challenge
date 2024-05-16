import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Leaderboard from '../Leaderboard'

interface Props {
	score: number
	resetGame: () => void
}

export function GameOverDialog({ score, resetGame }: Props) {
	const [seeLeaderboard, setSeeLeaderboard] = useState(false)

	return (
		<Dialog open={true}>
			<DialogContent className='sm:max-w-[425px] border-destructive bg-destructive'>
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
							<DialogTitle>Oops, you lose! 😵</DialogTitle>
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<Card className='flex-1 bg-destructive'>
								<CardHeader className='text-center pb-2 text-muted-foreground'>
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
