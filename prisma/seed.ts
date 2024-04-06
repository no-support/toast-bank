import { PrismaClient } from '@prisma/client'
import faq_list from '../src/mock/faq.json'
import card_list from '../src/mock/card.json'

const prisma = new PrismaClient()

async function seedData() {
  // faq_list.map(async (faq) => {
  //   const faqData = {
  //     question: faq.question,
  //     answer: faq.answer,
  //   }

  //   const res = await prisma.faq.create({
  //     data: faqData,
  //   })

  //   console.log('seed.ts - res: ', res)
  // })
  // const res = await prisma.faq.create({
  //   data: faqData,
  // })

  card_list.map(async (card) => {
    const cardData = {
      name: card.name,
      corpName: card.corpName,
      tags: card.tags,
      benefit: card.benefit,
      promotionTitle: card?.promotionTitle,
      promotionTerms: card?.promotionTerms,
      payback: card.payback,
    }

    const res = await prisma.card.create({
      data: cardData,
    })

    console.log('seed.ts - res: ', res)
  })
}

async function main() {
  await seedData()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
