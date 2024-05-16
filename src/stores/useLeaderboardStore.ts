import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LeaderboardEntry {
	user: string
	score: number
}

interface State {
	leaderboard: LeaderboardEntry[]
	player: string | null
}

interface Actions {
	addScore: (user: string, score: number) => void
	setPlayer: (player: string | null) => void
}

const initialState: State = {
	leaderboard: [],
	player: null,
}

export const useLeaderboardStore = create(
	persist<State & Actions>(
		(set, get) => ({
			...initialState,
			addScore: (user: string, score: number) => {
				const { leaderboard } = get()
				const updatedLeaderboard = [...leaderboard, { user, score }].sort((a, b) => b.score - a.score)

				set({ leaderboard: updatedLeaderboard })
			},
			setPlayer: (player: string | null) => {
				set({ player })
			},
		}),
		{
			name: 'leaderboard-storage',
		}
	)
)
