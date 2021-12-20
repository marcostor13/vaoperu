import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '@services/general.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  roles: string[]

  constructor(
    private authService: AuthService, 
    private router: Router,
    private generalService: GeneralService
  ) {
    this.getRoles()
   }

  
  ngOnInit(): void {}

  getRoles(){
    this.roles = this.authService.getRole()
  }

  setRole(role:string){
    switch (role) {
      case 'provider':
        return 'Proveedor'    
      case 'gallery':
        return 'Galería'
      case 'admin':
        return 'Administrador'
      case 'user':
        return 'Usuario'
    }
  }

  redirect(role:string){
    this.generalService.setCurrentRole(role)
    this.router.navigate([`/${role}`])
  }

}
