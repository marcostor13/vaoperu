import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { IDataApi } from '../../../../../models/dataapi';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  model = 'section'
  model2 = 'item-section'
  model3 = 'subitem-section'

  constructor(
    private api: ApiService,
  ) { }

  save(element: any, type:string) {
    const data: IDataApi = {
      service: element._id ? `update-${this.model}/${element._id}` : `save-${type}`,
      type: element._id ? 'patch' : 'post',
      data: element
    }
    return this.api.api(data)
  }

  updateAll(items: any) {
    const data: IDataApi = {
      service: `update-${this.model}-all` ,
      type: 'patch',
      data: items
    }
    return this.api.api(data)
  }

  get() {
    const data: IDataApi = {
      service: `get-sections-and-items-${this.model}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  delete(id: string, type: string) {
    const data: IDataApi = {
      service: `delete-${type}/${id}`,
      type: 'delete',
      data: null
    }
    return this.api.api(data)
  }

  getItemsBySubitemName(subitemName: string){
    const data: IDataApi = {
      service: `get-items-by-subitem-name/${subitemName}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getSectionsAndItems(itemName: string){
    const data: IDataApi = {
      service: `get-section-and-items/${itemName}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }







}
