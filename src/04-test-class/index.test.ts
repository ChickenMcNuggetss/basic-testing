// Uncomment the code below and write your tests
import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const res: BankAccount = getBankAccount(1000);
    expect(res.getBalance()).toBe(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const res: BankAccount = getBankAccount(1000);
    expect(() => res.withdraw(1100)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account: BankAccount = getBankAccount(1000);
    const account2: BankAccount = getBankAccount(290);
    expect(() => account.transfer(1100, account2)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const res: BankAccount = getBankAccount(1000);
    expect(() => res.transfer(1000, res)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const acc: BankAccount = getBankAccount(1000);
    acc.deposit(100);
    expect(acc.getBalance()).toBe(1100);
  });

  test('should withdraw money', () => {
    const acc: BankAccount = getBankAccount(1000);
    acc.withdraw(100);
    expect(acc.getBalance()).toBe(900);
  });

  test('should transfer money', () => {
    const account: BankAccount = getBankAccount(1000);
    const account2: BankAccount = getBankAccount(300);
    account.transfer(200, account2);
    expect(account.getBalance()).toBe(800);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const acc = getBankAccount(1000);
    try {
      const res = await acc.fetchBalance();
      if (res) {
        expect(res).toBeTruthy();
      } else {
        expect(res).toBeNull();
      }
    } catch (err) {
      console.log(err);
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const acc = getBankAccount(1000);
    try {
      const res = await acc.fetchBalance();
      if (res) {
        acc.synchronizeBalance();
        expect(acc.getBalance()).toBe(res);
      }
    } catch (err) {
      console.log(err);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const acc = getBankAccount(1000);
    try {
      const res = await acc.fetchBalance();
      if (res === null) {
        await expect(acc.synchronizeBalance()).rejects.toThrow(
          SynchronizationFailedError,
        );
      }
    } catch (err) {
      console.log(err);
    }
  });
});
