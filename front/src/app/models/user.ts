export class CUser{    
    _id: string = null
    name: string = ''
    email: string = ''
    password: string = ''
    role: string[] = []
}


export class CUserInvalid {  
    _id: boolean = false
    name: boolean = false
    email: boolean = false
    password: boolean = false
    role: boolean = false
}