import { Component, HostListener, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile: boolean = (window.innerWidth > 768) ? false : true

  itemsCarousel = [
    {
      imageDesktop: 'assets/img/photos/photo1-d.jpg',
      imageMobile: 'assets/img/photos/photo1.jpg'
    },
    {   
      imageDesktop: 'assets/img/photos/photo2-d.jpg',
      imageMobile: 'assets/img/photos/photo2.jpg'
    }, 
    {    
      imageDesktop: 'assets/img/photos/photo3-d.jpg',
      imageMobile: 'assets/img/photos/photo2.jpg'
    }
  ]

  items: MenuItem[];



  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isMobile = (event.target.innerWidth > 768) ? false: true
  }

  getImageType(item){
    return this.isMobile? item.imageMobile: item.imageDesktop
  }
  

  redirect(url){
    
  }

}
