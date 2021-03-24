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
        label: 'Tienda',
        items: [{
          label: 'Categorias',
          routerLink: '/admin/categories'
        },        
        { separator: true },        
        ]
      },      
      
    ];

    this.validateSession()

  }

  validateSession() {
    this.user = this.authService.isLoginUser()
  }

}
