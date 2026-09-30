// Funções puras: mesma entrada, mesma saída, sem efeitos colaterais.
// Isso facilita testar (Etapa 4).

// "The Witcher 3" -> "TW" | "Celeste" -> "CE"
export function getInitials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean)

  if (words.length === 0) return '?'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

  return (words[0][0] + words[1][0]).toUpperCase()
}

// Classes completas escritas por extenso para o Tailwind conseguir encontrá-las
// (ele não entende classes montadas pedaço por pedaço, como `from-${cor}`).
const GRADIENTS = [
  'from-violet-600 to-cyan-400',
  'from-fuchsia-600 to-orange-400',
  'from-emerald-600 to-sky-400',
  'from-rose-600 to-amber-400',
  'from-indigo-600 to-pink-400',
  'from-sky-600 to-lime-400',
  'from-amber-600 to-red-500',
  'from-teal-600 to-violet-500',
]

// Transforma o título num número e usa esse número para escolher um gradiente.
// O mesmo título sempre gera a mesma capa.
export function getCoverGradient(title: string): string {
  let hash = 0
  for (const char of title.toLowerCase()) {
    hash = (hash * 31 + char.charCodeAt(0)) % 1_000_000
  }
  return GRADIENTS[hash % GRADIENTS.length]
}
