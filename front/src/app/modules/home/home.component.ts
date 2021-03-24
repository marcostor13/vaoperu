import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsCarousel = [
    {
      title: 'Producto uno',
      image: 'assets/img/slide/image5.jpg',      
      text: 'Seek and enjoy. The perfect watch for the great outdoors.',
      buttonText: 'Comprar ahora',
      buttonLink: 'https://google.com'
    },
    {
      title: 'Producto dos',
      image: 'assets/img/slide/image2.jpg',
      text: 'Seek and enjoy. The perfect watch for the great outdoors.',
      buttonText: 'Comprar ahora',
      buttonLink: 'https://google.com'
    },
    {
      title: 'Producto tres',
      image: 'assets/img/slide/image6.jpg',      
      text: 'Seek and enjoy. The perfect watch for the great outdoors.',
      buttonText: 'Comprar ahora',
      buttonLink: 'https://google.com'
    }
  ]

  itemsProducts = [
    {
      name: 'Pisco La botija',
      price: '45.00',
      image: 'assets/img/products/pisco1.png',
    },
    {
      name: 'Vino Rosé Especial',
      price: '30.00',
      image: 'assets/img/products/espcial_rose.png',
    },
    {
      name: 'Espumante Tabernero',
      price: '60.00',
      image: 'assets/img/products/muscat_de_alejandria.png',
    },
    {
      name: 'Johnnie Walker black label',
      price: '200.00',
      image: 'assets/img/products/whisky_blacklabel.png',
    },
    {
      name: 'Vino LAN Crianza',
      price: '165.00',
      image: 'assets/img/products/lancrianza.png',
    },
    
  ]


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

  redirect(url){
    
  }

}
