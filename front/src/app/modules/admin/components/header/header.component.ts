import { Component, OnInit } from '@angular/core';
import { faSearch, faChevronDown, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from '@services/general.service';
import { CUser } from 'src/app/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch
  faChevronDown = faChevronDown
  faSignOutAlt = faSignOutAlt
  faTimes = faTimes

  menu:boolean=false;

  user: CUser

  constructor(
    private authService: AuthService,
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.validateSession()
  }

  validateSession() {
    this.user = this.authService.isLoginUser()
  }

  slideMenu(){
    this.menu = this.menu? false: true 
  }

 
}
