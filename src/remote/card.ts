import axios from 'axios'
import { CardRes } from '@/pages/api/card'
import { Card } from '@/interface/card'
import prisma from '@/utils/db'

export const getSearchCards = async (keyword: string) => {
  const { data }: { data: Card[] } = await axios.get(
    `/api/search?keyword=${keyword}`,
  )
  return data
}

export const getCards = async ({ pageParam = 1 }) => {
  const { data }: { data: CardRes } = await axios.get(
    `/api/card?page=${pageParam}`,
  )
  return data
}

export const getCard = async (nId: number) => {
  const card: Card | null = await prisma.card.findUnique({
    where: {
      id: nId,
    },
  })

  return card
}

export const getCardRanking = async () => {
  const cards: Card[] = await prisma.card.findMany({
    where: {
      id: {
        lte: 5,
        gte: 1,
      },
    },
  })

  return cards
}
