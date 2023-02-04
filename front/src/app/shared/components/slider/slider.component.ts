import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CItem } from 'src/app/modules/admin/modules/section/models/section';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('swipe', [
      state('left', style({
        left: '{{left_indent}}px'
      }),{params: {left_indent: 0}}),
      transition('left <=> right', [
        animate('.3s')
      ]),
    ]),
  ],
})
export class SliderComponent implements OnInit {

  direction: string = 'left'
  left_indent: number = 0
  innerWidth: number = window.innerWidth
  displayCategories: boolean = false
  category: any

  @Input() items: any
  @Input() section: any
  @ViewChild('slide') slide!: ElementRef;
  @Output() openModal: EventEmitter<{name: string, value: boolean}> = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  swipeLeft() {
    const widthContainer = this.slide.nativeElement.scrollWidth
    if(this.left_indent - 400 > widthContainer*-1 ){
      this.left_indent = this.left_indent - 100
    }else{
      if(widthContainer > this.innerWidth){
        this.left_indent = this.innerWidth*-1 +100
      }
    }
  }

  swipeRight() {
    if(this.left_indent > 0 && this.left_indent > 100 ){
      this.left_indent = this.left_indent + 100
    }else{
      this.left_indent = 0
    }
  }

  redirectItem(item: CItem, sectionName: string){
    const redirect = item.name.toLowerCase().replace(/\s/g, '-')
    const section = sectionName.toLowerCase().replace(/\s/g, '-')
    this.router.navigate([`${section}/${redirect}`])
  }


  openCategoriesModal(category: any){
    this.openModal.emit({name: category, value: true});
    console.log(    this.openModal.emit({name: category, value: true}) )
  }

}
