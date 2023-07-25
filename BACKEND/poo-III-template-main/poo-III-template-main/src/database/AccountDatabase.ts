import { AccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    TABLE_NAME = "accounts"

    public async findAccounts() {
        const accountsDB: AccountDB[] = await BaseDatabase
            .connection(this.TABLE_NAME)

        return accountsDB
    }

    public async findAccountById(id: string) {
        const [ accountDB ]: AccountDB[] | undefined[] = await super.findById(id)

        return accountDB
    }

    public async insertAccount(newAccountDB: AccountDB) {
        await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(newAccountDB)
    }

    public async updateBalanceById(id: string, newBalance: number) {
        await BaseDatabase
            .connection(this.TABLE_NAME)
            .update({ balance: newBalance })
            .where({ id })
    }
}
