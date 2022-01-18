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
  role: string[]

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
    if (this.eventHeader?.event === 'open-login') {
      this.openLogin()
    }
    this.role = this.authService.getRole()
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
    this.role = this.authService.getRole()
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

  redirect(role: string[]) {
    this.router.navigate([`/${role[0]}`])
  }

  redirectPlatform(route: string){
    this.general.c('redirectPlatform', route)
    this.router.navigate([route])
  }

  isAdminOrProvider(){
    let res = false
    this.user.role.map((role:string)=>{
      if(role === 'admin' || role === 'provider'){
        res = true
      }
    })

    return res
  }
  
  redirectFavorites(){
    this.general.c('redirectFavorites', this.role)
    if (this.role){
      this.router.navigate(['/favoritos'])
    }else{
      this.displayModal = true
    }
  }
  

}
