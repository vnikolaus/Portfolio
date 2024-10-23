import { Password } from '../../../../transaction/src/domain/entities/Password'
import { Token } from '../../../../transaction/src/domain/entities/Token'

export class Account {
    private number: string
    private agency: string
    private balance: number
    private token?: Token
    private pwd: Password

    private constructor(props: Account) {
        Object.assign(this, props)
    }

    static async create({ number, agency, balance, pwd }: Account): Promise<Account> {
        return new Account({
            number,
            agency,
            balance: balance ?? 0,
            token: new Token(pwd).content,
            pwd: new Password(pwd).content,
        })
    }

    static restore({ number, agency, balance, token, pwd }: Account) {
        return new Account({ number, agency, balance, token, pwd })
    }
}
