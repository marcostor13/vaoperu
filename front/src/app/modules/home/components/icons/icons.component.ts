import { Component, Input, OnInit } from '@angular/core';
import { ISectionsData } from 'src/app/modules/admin/modules/section/models/section';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() sections: ISectionsData[];
  @Input() openCategoriesModal: (category: any) => void;
  @Input() getListItemsWithPrimaryItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
