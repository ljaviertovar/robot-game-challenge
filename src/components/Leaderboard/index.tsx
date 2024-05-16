import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

import { useLeaderboardStore } from '@/stores/useLeaderboardStore'

export default function Leaderboard() {
	const leaderboard = useLeaderboardStore(state => state.leaderboard)

	return (
		<section className='mb-8 h-96 overflow-auto'>
			<h2 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-8'>
				Leaderboard
			</h2>

			<Table className='w-1/2 mx-auto'>
				<TableCaption>A list of Players.</TableCaption>
				<TableHeader>
					<TableRow className='bg-muted/50'>
						<TableHead className='w-[100px]'>Position</TableHead>
						<TableHead className='w-[100px]'>Player</TableHead>
						<TableHead className='w-[100px] text-right'>Score</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{leaderboard.map((item, index) => (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{item.user}</TableCell>
							<TableCell className='text-right'>{item.score}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	)
}
