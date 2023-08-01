import { AccountDatabase } from "../database/AccountDatabase";
import { Account } from "../models/Account";
import { AccountDB } from "../types";

export class AccountBusiness {
  public getAccounts = async (): Promise<Account[]> => {
    const accountDatabase = new AccountDatabase();
    const accountsDB: AccountDB[] = await accountDatabase.findAccounts();

    const accounts = accountsDB.map(
      (accountDB) =>
        new Account(
          accountDB.id,
          accountDB.balance,
          accountDB.owner_id,
          accountDB.created_at
        )
    );
    return accounts;
  };

  public getAccontBalance = async (
    input: any
  ): Promise<{
    value: number;
  }> => {
    const { id } = input;
    const accountDatabase = new AccountDatabase();
    const accountDB = await accountDatabase.findAccountById(id);

    if (!accountDB) {
      throw new Error("'id' not afound!");
    }

    const account = new Account(
      accountDB.id,
      accountDB.balance,
      accountDB.owner_id,
      accountDB.created_at
    );

    const balance = account.getBalance();

    const output = { value: balance };

    return output;
  };

  public createdAccount = async (input: any):Promise<{
    message: string;
    account: Account;
}> => {
    const { id, ownerId } = input;

    if (typeof id !== "string") {
      throw new Error("'id' must be string");
    }

    if (typeof ownerId !== "string") {
      throw new Error("'ownerId' must be string");
    }

    const accountDatabase = new AccountDatabase();
    const accountDBExists = await accountDatabase.findAccountById(id);

    if (accountDBExists) {
      throw new Error("'id' already exists");
    }

    const newAccount = new Account(id, 0, ownerId, new Date().toISOString());

    const newAccountDB: AccountDB = {
      id: newAccount.getId(),
      balance: newAccount.getBalance(),
      owner_id: newAccount.getOwnerId(),
      created_at: newAccount.getCreatedAt(),
    };

    await accountDatabase.insertAccount(newAccountDB);

    const output = {
      message: "account added successfully! ",
      account: newAccount,
    };
    return output;
  };

  public editAccountBalance = async (input: any):Promise<{
    message: string;
    newBalance: number;
}> => {
    
    const { id, value } = input;
    

    if (typeof value !== "number") {
      throw new Error("'value' deve ser number");
    }

    const accountDatabase = new AccountDatabase();
    const accountDB = await accountDatabase.findAccountById(id);

    if (!accountDB) {
      throw new Error("'id' not afound");
    }

    const account = new Account(
      accountDB.id,
      accountDB.balance,
      accountDB.owner_id,
      accountDB.created_at
    );

    const newBalance = account.getBalance() + value;
    account.setBalance(newBalance);

    await accountDatabase.updateBalanceById(id, newBalance);

    const output = {
      message: "NewBalance added successufully!",
      newBalance: newBalance,
    };
    return output;
  };
}
