import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../modules/auth/services/auth.service';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { faSearch, faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { CUser } from './../../../models/user';
import { GeneralService } from '@services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch
  faChevronDown = faChevronDown
  faSignOutAlt = faSignOutAlt

  menuHeader: boolean = false
  items: MenuItem[];
  items2: MegaMenuItem[];
  isShowInputSearch: boolean = false
  isCrossMenu: boolean = false
  displayModal: boolean = false
  user: CUser

  constructor(
    private router: Router,
    private authService: AuthService,
    private general: GeneralService
    ) { 
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];

    this.items2 = [
      {
        label: 'Vinos', icon: '',
        items: [
          [
            {
              label: 'Video 1',
              items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
            },
            {
              label: 'Video 2',
              items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
            }
          ],
          [
            {
              label: 'Video 3',
              items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
            },
            {
              label: 'Video 4',
              items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Piscos', icon: '',
        items: [
          [
            {
              label: 'User 1',
              items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
            },
            {
              label: 'User 2',
              items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
            },
          ],
          [
            {
              label: 'User 3',
              items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
            },
            {
              label: 'User 4',
              items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
            },
            {
              label: 'User 6',
              items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
            }
          ]
        ]
      },
      {
        label: 'Whiskys', icon: '',
        items: [
          [
            {
              label: 'Event 1',
              items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
            },
            {
              label: 'Event 2',
              items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
            }
          ],
          [
            {
              label: 'Event 3',
              items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
            },
            {
              label: 'Event 4',
              items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Espumantes', icon: '',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
            },
            {
              label: 'Setting 2',
              items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
            },
            {
              label: 'Setting 3',
              items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
            }
          ]
        ]
      }
    ]

  }
  ngOnInit(): void {
    this.validateSession()
  } 

  validateSession(){
    this.user = this.authService.isLoginUser()
  }
  
  showInputSearch(){
    this.isShowInputSearch = this.isShowInputSearch ? false : true
  }

  openMenu(){
    this.isCrossMenu = this.isCrossMenu? false : true
  }

  toogleMenu(){
    this.menuHeader = this.menuHeader ? false: true
  }

  openLogin(){
    this.displayModal = true
  }

  logout(){
    this.authService.logout()
  }

  output($event){
    this.general.c('Output', $event)
    switch ($event.type) {
      case 'user':
        this.user = {...$event.data}
        break;
      case 'close':
        this.displayModal = false
        break;
      default:
        break;
    }    
  }
  

}
