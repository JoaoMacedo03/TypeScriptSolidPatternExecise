import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class GetTransactionBalance {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(transactions: Transaction[]): Balance {
    const balance = this.transactionsRepository.getBalance(transactions);
    return balance;
  }
}

export default GetTransactionBalance;
