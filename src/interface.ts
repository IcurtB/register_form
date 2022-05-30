export interface IAuth {
    nickName:string,
    email:string,
    password:string,
}

export interface IReg {
    firstName: string,
    lastName:string,
    nickName:string,
    email:string,
    password:string,
    confPassword:string,
    checked: boolean
}