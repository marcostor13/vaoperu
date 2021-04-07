import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@services/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  constructor(
    private api: ApiService,
    private router: Router
    ) { }

  login(data){
    return this.api.api({
      service:'signin',
      data: data,
      type: 'post'
    })   
  }

  register(data) {
    return this.api.api({
      service: 'signup',
      data: data,
      type: 'post'
    })
  }

  isLogin(){
    const user = localStorage.getItem('vaouser')
    if(user && user !== ''){
      return true
    }else{
      return false
    }
  }

  isLoginUser() {
    const user = localStorage.getItem('vaouser')
    if (user && user !== '') {
      return JSON.parse(user)
    } else {
      return null
    }
  }

  getRole() {
    return localStorage.getItem('vaouser') ? JSON.parse(localStorage.getItem('vaouser'))?.role : null    
  }

  getUserID() {
    return localStorage.getItem('vaouser') ? JSON.parse(localStorage.getItem('vaouser'))?._id : null
  }


  sendEmailCode(email:string){
    return this.api.api({
      service: 'send-email-code',
      data: { email },
      type: 'post'
    })
  }

  codeComprobation(email: string, code:string) {
    return this.api.api({
      service: 'code-comprobation',
      data: { email, code },
      type: 'post'
    })
  }

  issetEmail(email: string){    
    return this.api.api({
      service: 'isset-email',
      data: { email },
      type: 'post'
    })
  }

  logout(){
    localStorage.removeItem('vaouser');
    window.location.reload()
  }

}
