import { getCoverGradient, getInitials } from '../utils/cover'

interface GameCoverProps {
  title: string
}

// Capa gerada: gradiente + iniciais. Não usamos artes oficiais dos jogos.
export function GameCover({ title }: GameCoverProps) {
  return (
    <div
      className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${getCoverGradient(title)}`}
      aria-hidden="true"
    >
      {/* Linhas diagonais decorativas para dar "textura" à capa */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgb(255_255_255/0.06)_0_2px,transparent_2px_14px)]" />
      <span className="relative font-display text-5xl font-bold tracking-wider text-white drop-shadow-[0_2px_8px_rgb(0_0_0/0.45)]">
        {getInitials(title)}
      </span>
    </div>
  )
}
