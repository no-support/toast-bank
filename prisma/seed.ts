import { PrismaClient } from '@prisma/client'
import faq_list from '../src/mock/faq.json'
import card_list from '../src/mock/card.json'
import transaction_list from '../src/mock/transaction.json'
import credit_list from '../src/mock/credit.json'

const prisma = new PrismaClient()

async function seedData() {
  seedFaq()
  seedCard()
  seedTransaction()
  seedCredit()
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

function seedFaq() {
  faq_list.map(async (faq) => {
    const faqData = {
      question: faq.question,
      answer: faq.answer,
    }

    const res = await prisma.faq.create({
      data: faqData,
    })

    console.log('seed.ts - res: ', res)
  })
}

function seedCard() {
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

async function seedTransaction() {
  for (const transaction of transaction_list) {
    const transactionData = {
      email: transaction.email,
      type: transaction.type,
      date: transaction.date,
      displayText: transaction.displayText,
      amount: transaction.amount,
      balance: transaction.balance,
    }
    const res = await prisma.transaction.create({
      data: transactionData,
    })

    console.log('seed.ts - res: ', res)
  }
}

async function seedCredit() {
  for (const credit of credit_list) {
    const creditData = {
      email: credit.email,
      score: credit.score,
    }
    const res = await prisma.credit.create({
      data: creditData,
    })

    console.log('seed.ts - res: ', res)
  }
}
