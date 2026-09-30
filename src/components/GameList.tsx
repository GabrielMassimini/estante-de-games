import type { Game } from '../types/game'
import { GameCard } from './GameCard'

interface GameListProps {
  games: Game[]
}

export function GameList({ games }: GameListProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* key ajuda o React a saber qual item é qual quando a lista muda */}
      {games.map((game) => (
        <li key={game.id}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  )
}
