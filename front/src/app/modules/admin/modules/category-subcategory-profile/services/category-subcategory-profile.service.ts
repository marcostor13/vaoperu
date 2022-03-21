import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { IDataApi } from '../../../../../models/dataapi';
import { IPayloadCategorySubcategoryProfile } from './../interfaces/category-subcategory-profile.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategorySubcategoryProfileService {

  model = 'category-subcategory-profile'

  constructor(
    private api: ApiService,
  ) { }

  save(element: any) {
    const data: IDataApi = {
      service: `save-${this.model}`,
      type: 'post',
      data: element
    }
    return this.api.api(data)
  }

  get() {
    const data: IDataApi = {
      service: `get-${this.model}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getByIdAndType(payload: IPayloadCategorySubcategoryProfile) {
    const data: IDataApi = {
      service: `get-${this.model}-by-id-and-type`,
      type: 'post',
      data: payload
    }
    return this.api.api(data)
  }

  getByProfileProviderId(profileProviderId:string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-profile-provider-id/${profileProviderId}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getByCategorySubcategoryId(categorySubcategoryId: string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-category-subcategory-id/${categorySubcategoryId}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getByCategorySubcategoryIds(categorySubcategoryIds: string[]) {
    const data: IDataApi = {
      service: `get-${this.model}-by-category-subcategory-ids`,
      type: 'post',
      data: {ids: categorySubcategoryIds}
    }
    return this.api.api(data)
  }

  delete(id: string) {
    const data: IDataApi = {
      service: `delete-${this.model}/${id}`,
      type: 'delete',
      data: null
    }
    return this.api.api(data)
  }



}
