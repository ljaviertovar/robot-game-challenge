import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Leaderboard from '../Leaderboard'

interface Props {
	playGame: (value: boolean) => void
	setPlayer: (player: string) => void
}

export function PlayDialog({ setPlayer, playGame }: Props) {
	const [seeLeaderboard, setSeeLeaderboard] = useState(false)
	const [playerName, setPlayerName] = useState<string | null>(null)

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
						<DialogHeader>
							<DialogTitle>Welcome to the Robot Game! 🤖</DialogTitle>
							<DialogDescription>* Name your player and start the game!</DialogDescription>
						</DialogHeader>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='player'
									className='text-right'
								>
									Player
								</Label>
								<Input
									id='namplayere'
									placeholder='Player 1'
									className='col-span-3'
									onChange={e => {
										setPlayerName(e.target.value)
									}}
								/>
							</div>
						</div>

						<DialogDescription className='text-yellow-300'>
							Note: You can use the arrow keys and the spacebar to move the robot. Reach the target to score a point!
						</DialogDescription>
						<DialogFooter>
							<div className='w-full flex justify-between'>
								<Button
									variant={'secondary'}
									onClick={() => setSeeLeaderboard(true)}
								>
									Leaderboard
								</Button>
								<Button
									disabled={!playerName}
									onClick={() => {
										if (playerName) {
											playGame(true)
											setPlayer(playerName)
										}
									}}
								>
									Start Game
								</Button>
							</div>
						</DialogFooter>
					</>
				)}
			</DialogContent>
		</Dialog>
	)
}
