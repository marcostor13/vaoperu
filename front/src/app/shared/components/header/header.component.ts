import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../modules/auth/services/auth.service';
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
  isShowInputSearch: boolean = false
  isCrossMenu: boolean = false
  displayModal: boolean = false
  user: CUser
  display: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService,
    private general: GeneralService
    ) { 
   

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


  toogleMenu(){
    this.display = this.display ? false: true
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

  redirect(role: string) {
    this.router.navigate([`/${role}`])
  }
  

}
