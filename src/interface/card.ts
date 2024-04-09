export interface Card {
  id: number
  name: string
  corpName: string
  tags: string[]
  benefit: string[]
  promotionTitle?: string | null
  promotionTerms?: string | null
  payback?: string | null
}
