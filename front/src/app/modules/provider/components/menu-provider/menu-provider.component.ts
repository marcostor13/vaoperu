import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { MenuItem } from 'primeng/api';
import { CUser } from 'src/app/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Component({
  selector: 'app-menu-provider',
  templateUrl: './menu-provider.component.html',
  styleUrls: ['./menu-provider.component.scss']
})
export class MenuProviderComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  constructor(
    private authService: AuthService,
    private general: GeneralService
  ) { }

  items: MenuItem[];
  user: CUser

  ngOnInit():void {
    this.items = [
      {
        label: 'Panel',    
        routerLink: '/provider/dashboard',                  
      },
      {
        label: 'Perfil',
        routerLink: '/provider/profile',        
      },  
      {
        label: 'Productos',
        routerLink: '/provider/products',        
      }, 
      {
        label: 'Ofertas',
        routerLink: '/provider/offers',
      },
      {
        separator: true,
      },
      {
        label: 'Salir',
        icon: 'pi arrow-left',
        styleClass: 'bg-color1 text-color1',
        command: ()=>this.logout()
      },
      
    ];

    this.validateSession()

  }

  validateSession() {
    this.user = this.authService.isLoginUser()
  }

  logout() {
    this.authService.logout()
  }

}
