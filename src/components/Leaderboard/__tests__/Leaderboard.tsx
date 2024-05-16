import { render, screen } from '@testing-library/react'
import Leaderboard from '../index'
import { useGameStore } from '@/stores/useGameStore'

// Mockear la tienda de Zustand
jest.mock('@/stores/useGameStore', () => ({
	useGameStore: jest.fn(),
}))

describe('Leaderboard', () => {
	const mockLeaderboard = [
		{ user: 'Player 1', score: 100 },
		{ user: 'Player 2', score: 200 },
		{ user: 'Player 3', score: 300 },
	]

	beforeEach(() => {
		// eslint-disable-next-line @typescript-eslint/no-extra-semi
		;(useGameStore as unknown as jest.Mock).mockReturnValue({
			leaderboard: mockLeaderboard,
		})
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('should render the leaderboard component', () => {
		render(<Leaderboard />)
		const leaderboardElement = screen.getByText('Leaderboard')
		expect(leaderboardElement).toBeInTheDocument()
	})

	test('should render the correct number of rows in the leaderboard', () => {
		render(<Leaderboard />)
		const rows = screen.getAllByRole('row')
		expect(rows.length).toBe(mockLeaderboard.length + 1) // +1 for the table header row
	})

	test('should render the correct data in each row of the leaderboard', () => {
		render(<Leaderboard />)
		mockLeaderboard.forEach((item, index) => {
			const positionCell = screen.getByText((index + 1).toString())
			const userCell = screen.getByText(item.user)
			const scoreCell = screen.getByText(item.score.toString())

			expect(positionCell).toBeInTheDocument()
			expect(userCell).toBeInTheDocument()
			expect(scoreCell).toBeInTheDocument()
		})
	})
})
