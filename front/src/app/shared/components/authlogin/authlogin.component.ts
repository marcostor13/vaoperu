import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from '@services/general.service';
import { CUser } from 'src/app/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { SubSink } from 'subsink';
import { IResponseApi } from './../../../models/responses';

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.scss']
})
export class AuthloginComponent implements OnInit {

  @Output() send = new EventEmitter<Object>();

  private subs = new SubSink()

  faEye = faEye
  faEyeSlash = faEyeSlash

  displayModal: boolean = true
  typeLogin: string = 'dialogLogin'
  passwordView: boolean = false
  form: any = {
    name: '',
    email: '',
    password: '',
    role: ['user']
  };
  emailRecovery: string
  user: CUser
  response: any = {
    class: '',
    message: ''
  }
  registerStep: number = 1
  code: string = ''

  invalid: any = {
    name: false,
    email: false,
    password: false,
    emailRecovery: false,
  }

  constructor(
    private authService: AuthService,
    private generalService: GeneralService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  resetLogin(){
    this.form = {
      name: '',
      email: '',
      password: '',
      role: ['user']
    }
    this.response = {
      class: '',
      message: ''
    }
  }

  resetValidation(){
    this.invalid = {
      name: false,
      email: false,
      password: false,
      emailRecovery: false,
    }
  }

  validationLogin(){
    this.resetValidation()
    let valid = true
    if (this.form.email === '' || this.form.email.indexOf('@') === -1 || this.form.email.indexOf('.') === -1) {
      this.invalid.email = true
      this.response = {
        class: 'text-danger',
        message: 'Revise su email'
      }
      valid = false
    }
    if (this.form.password === '') {
      this.invalid.password = true
      this.response = {
        class: 'text-danger',
        message: 'Revise su contraseña'
      }
      valid = false
    }
    return valid
  }

  validationPasswordRecovery(){
    this.resetValidation()
    let valid = true
    if (this.form.emailRecovery === '' || this.form.emailRecovery.indexOf('@') === -1 || this.form.emailRecovery.indexOf('.') === -1) {
      this.invalid.emailRecovery = true
      this.response = {
        class: 'text-danger',
        message: 'Revise su email'
      }
      valid = false
    }
    return valid
  }

  validationRegister() {
    this.resetValidation()
    let valid = true
    valid = this.validationLogin()
    if (this.form.name === '') {
      this.invalid.name = true
      this.response = {
        class: 'text-danger',
        message: 'Revise el campo nombre'
      }
      valid = false
    }
    return valid
  }

  login() {

    if(this.validationLogin()){
      this.generalService.isLoad(true)
      this.subs.add(
        this.authService.login(this.form).subscribe((user: CUser) => {
          this.generalService.c('USER', user)
          this.generalService.isLoad(false)
          this.send.emit({
            type: 'user',
            data: user
          })
          localStorage.setItem('vaouser', JSON.stringify(user))
          this.response = {
            class: 'text-color1',
            message: `Bienvenido ${user.name}`
          }
          if (user.role.indexOf('user') > -1){
            this.generalService.c('login', 'user')
            this.router.navigate(['/'])
          } else if (user.role.indexOf('provider') > -1) {
            this.generalService.c('login', 'provider')
            this.router.navigate(['/provider/dashboard'])
          } else if (user.role.indexOf('admin') > -1) {
            this.generalService.c('login', 'admin')
            this.router.navigate(['/admin/dashboard'])
          } else{
            this.resetLogin()
          }
          setTimeout(()=>{
            this.send.emit({
              type: 'close',
              data: null
            })
            this.displayModal = false
          }, 3000)

        }, error => {
          this.generalService.isLoad(false)
          this.generalService.c('Login Error', error)
          this.response = {
            class: 'text-danger',
            message: error.error.message
          }
        })
      )
    }

  }


  registerStart(){

    if(this.validationRegister()){
      this.generalService.isLoad(true)
      this.authService.codeComprobation(this.form.email, this.code).subscribe(_ => {
        this.generalService.c('Register Finish', this.form)
        this.subs.add(
          this.authService.register(this.form).subscribe((user: CUser) => {
            if (user.role.indexOf('admin') > -1) {
              this.router.navigate(['/admin'])
            }
            this.send.emit({
              type: 'user',
              data: user
            })
            this.generalService.isLoad(false)
            localStorage.setItem('vaouser', JSON.stringify(user))
            this.registerStep = 3
            this.response = {
              class: 'text-color1',
              message: `Gracias por registrarse Bienvenido ${user.name}`
            }
          }, error => {
            this.generalService.isLoad(false)
            this.generalService.c('Login Error', error)
            this.response = {
              class: 'text-danger',
              message: error.error.message
            }
          })
        )

      }, error => {
        this.generalService.isLoad(false)
        this.generalService.c('Login Error', error)
        this.response = {
          class: 'text-danger',
          message: error.error.message
        }
      }
      )
    }

  }

  registerFinish(){
    this.generalService.isLoad(true)
    this.subs.add(
      this.authService.codeComprobation(this.form.email, this.code).subscribe(_=>{
        this.generalService.c('Register Finish', this.form)
        this.subs.add(
          this.authService.register(this.form).subscribe((user: CUser) => {
            if (user.role.indexOf('admin') > -1) {
              this.router.navigate(['/admin'])
            }
            this.send.emit({
              type: 'user',
              data: user
            })
            this.generalService.isLoad(false)
            localStorage.setItem('vaouser', JSON.stringify(user))
            this.registerStep = 3
            this.response = {
              class: 'text-color1',
              message: `Gracias por registrarse Bienvenido ${user.name}`
            }
          }, error => {
            this.generalService.isLoad(false)
            this.generalService.c('Login Error', error)
            this.response = {
              class: 'text-danger',
              message: error.error.message
            }
          })
        )

      }, error => {
          this.generalService.isLoad(false)
          this.generalService.c('Login Error', error)
          this.response = {
            class: 'text-danger',
            message: error.error.message
          }
        }
      )
    )
  }

  recovery(){

  }



}
