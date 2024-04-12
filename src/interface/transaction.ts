export interface Transaction {
  id: number
  email: string
  type: 'deposit' | 'withdrawal'
  date: Date
  displayText: string
  amount: number
  balance: number
}
