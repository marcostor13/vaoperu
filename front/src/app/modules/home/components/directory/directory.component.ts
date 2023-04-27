import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CItem, ISectionsData } from 'src/app/modules/admin/modules/section/models/section';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  @Input() sections: ISectionsData[];
  @Input() getListItemsWithPrimaryItem: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  redirectItem(item: CItem, sectionName: string){
    const redirect = item.name.toLowerCase().replace(/\s/g, '-')
    const section = sectionName.toLowerCase().replace(/\s/g, '-')
    this.router.navigate([`${section}/${redirect}`])
  }

}
