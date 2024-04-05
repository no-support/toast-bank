export interface Transaction {
  userId: string
  type: 'deposit' | 'withdrawal'
  date: string
  displayText: string
  amount: number
  balance: number
}
