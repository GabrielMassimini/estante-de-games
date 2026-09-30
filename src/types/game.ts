// Union types: a variável só aceita um destes valores exatos.
// Se eu digitar "zerdo" por engano, o TypeScript acusa erro antes de rodar.
export type GameStatus = 'jogando' | 'zerado' | 'quero jogar' | 'abandonado'

export type Platform =
  | 'PC'
  | 'PlayStation'
  | 'Xbox'
  | 'Nintendo Switch'
  | 'Mobile'
  | 'Outra'

export type Genre =
  | 'ação'
  | 'FPS'
  | 'RPG'
  | 'estratégia'
  | 'esporte'
  | 'corrida'
  | 'aventura'
  | 'outro'

export interface Game {
  id: string
  title: string
  platform: Platform
  status: GameStatus
  rating?: number // 0 a 10, meio ponto permitido. O "?" indica que é opcional.
  hoursPlayed: number
  genre?: Genre
  favorite: boolean
  // Datas como texto ISO ("2026-09-29T12:00:00.000Z"), porque o localStorage só guarda strings.
  createdAt: string
  updatedAt: string
}
