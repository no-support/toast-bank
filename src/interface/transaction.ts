export interface Transaction {
  email: string
  type: 'deposit' | 'withdrawal'
  date: string
  displayText: string
  amount: number
  balance: number
}
