import type { GameStatus, Genre, Platform } from '../types/game'

// Listas usadas para montar selects e filtros (a partir da Etapa 2).
export const STATUSES: GameStatus[] = ['jogando', 'zerado', 'quero jogar', 'abandonado']

export const PLATFORMS: Platform[] = [
  'PC',
  'PlayStation',
  'Xbox',
  'Nintendo Switch',
  'Mobile',
  'Outra',
]

export const GENRES: Genre[] = [
  'ação',
  'FPS',
  'RPG',
  'estratégia',
  'esporte',
  'corrida',
  'aventura',
  'outro',
]

// Record<GameStatus, ...> obriga a ter uma entrada para CADA status.
// Se um status novo for criado no tipo, o TypeScript avisa que falta a cor dele aqui.
export const STATUS_LABELS: Record<GameStatus, string> = {
  jogando: 'Jogando',
  zerado: 'Zerado',
  'quero jogar': 'Quero jogar',
  abandonado: 'Abandonado',
}

export const STATUS_STYLES: Record<GameStatus, string> = {
  jogando: 'bg-cyan-400/10 text-cyan-300 ring-cyan-400/30',
  zerado: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30',
  'quero jogar': 'bg-amber-400/10 text-amber-300 ring-amber-400/30',
  abandonado: 'bg-rose-400/10 text-rose-300 ring-rose-400/30',
}
