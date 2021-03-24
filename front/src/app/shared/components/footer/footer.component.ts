import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html', 
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebookF = faFacebookF

  categories = [
    {
      name: 'Vinos',
      image: 'assets/img/categories/vinos.jpg'
    },
    {
      name: 'Piscos',
      image: 'assets/img/categories/piscos.jpg'
    },
    {
      name: 'Whiskys',
      image: 'assets/img/categories/whiskys.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
