export class Account{
    constructor(
        private id:string,
       private ownerId:string,
        private balance:number,
        private createdAt:string
    ){}
    getId = ():string =>{
        return this.id
    }

    getOwnerId = (): string => {
        return this.ownerId
    }

    getBalance = ():number => {
        return this.balance
    }

    setBalance = (newBalance:number):void => {
        this.balance = newBalance
    }

    getCreatedAd = ():string => {
        return this.createdAt
    }
}