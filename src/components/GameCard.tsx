import type { Game } from '../types/game'
import { GameCover } from './GameCover'
import { StatusBadge } from './StatusBadge'

interface GameCardProps {
  game: Game
}

// Formata números no padrão brasileiro: 9.5 -> "9,5"
function formatNumber(value: number): string {
  return value.toLocaleString('pt-BR')
}

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-surface ring-1 ring-line transition hover:-translate-y-0.5 hover:ring-accent/60 hover:shadow-xl hover:shadow-accent/10">
      <div className="relative">
        <GameCover title={game.title} />

        {game.favorite && (
          <span
            className="absolute right-2 top-2 rounded-full bg-bg/70 px-2 py-1 text-sm text-amber-300 backdrop-blur"
            title="Favorito"
          >
            <span aria-hidden="true">★</span>
            <span className="sr-only">Favorito</span>
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight">{game.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {game.platform}
            {game.genre && ` · ${game.genre}`}
          </p>
        </div>

        <StatusBadge status={game.status} />

        <dl className="grid grid-cols-2 gap-2 border-t border-line pt-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Nota</dt>
            <dd className="font-semibold">
              {game.rating !== undefined ? (
                <>
                  {formatNumber(game.rating)}
                  <span className="text-muted">/10</span>
                </>
              ) : (
                <span className="font-normal text-muted">Sem nota</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Horas</dt>
            <dd className="font-semibold">{formatNumber(game.hoursPlayed)} h</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
