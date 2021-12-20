import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnChanges {

  faSearch = faSearch
  faChevronDown = faChevronDown
  faSignOutAlt = faSignOutAlt

  menuHeader: boolean = false
  isShowInputSearch: boolean = false
  isCrossMenu: boolean = false
  displayModal: boolean = false
  user: CUser
  display: boolean = false

  @Input() eventHeader: any

  constructor(
    private router: Router,
    private authService: AuthService,
    private general: GeneralService
    ) { 
   

  }
  ngOnInit(): void {
    this.validateSession()    
  } 

  ngOnChanges(changes: SimpleChanges) {
    this.general.c('open login', changes)
    if (this.eventHeader?.event === 'open-login') {
      this.openLogin()
    }
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

  redirectPlatform(){
    const role = this.authService.getRole()
    console.log('Role', role)
    if(role.indexOf('admin')>-1){
      this.router.navigate(['admin'])
    }else if(role.indexOf('provider')>-1 || role.indexOf('gallery')>-1){
      this.router.navigate(['provider'])
    }else{
      //Redirect User BackOffice
      this.router.navigate(['/'])
    }
  }
  

}
