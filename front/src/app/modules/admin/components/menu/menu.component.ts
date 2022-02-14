import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { MenuItem } from 'primeng/api';
import { CUser } from 'src/app/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
        routerLink: '/admin/dashboard',                  
      },      
      {
        label: 'Comercial',
        items: [
          {
            label: 'Categorias',
            routerLink: '/admin/categories'
          },
          {
            label: 'Subcategorías',
            routerLink: '/admin/subcategories'
          },
          {
            label: 'Promociones',
            routerLink: '/admin/promotions'
          }
        ]
      },    
      {
        label: 'General',
        items: [{
          label: 'Distritos',
          routerLink: '/admin/districts'
        }]
      },
      {
        label: 'Usuarios',
        items: [
          {
            label: 'Registro',
            routerLink: '/admin/users'
          },
          {
            label: 'Urls',
            routerLink: '/admin/urls'
          },
          {
            label: 'Asignación categorías',
            routerLink: '/admin/category-subcategory-profile'
          },
        ]
      },
      
      
      {
        label: 'Salir',
        icon: 'pi arrow-left',
        styleClass: 'bg-color1 text-color1',
        command: () => this.logout()
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
