import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CImages } from 'src/app/models/images';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'subsink';
import { CProduct, CProductInvalid, ICategoryProduct } from './models/product'
import { ProductService } from './services/product.service';
import { ProfileProviderService } from './../profile-provider/services/profile-provider.service';
import { CProfileProvider } from '../profile-provider/models/profile-provider';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild('angularCropper') public angularCropper: CropperComponent;

  public subs = new SubSink()
  displayModal: boolean = false
  displayCategories: boolean = false
  items: CProduct[]
  currentItem: CProduct = new CProduct
  invalid: CProductInvalid = new CProductInvalid
  profileProvider: CProfileProvider
  categories: ICategoryProduct[]
  listCat: boolean = false
  listCats: string[] = []
  listCatsTmp: string[] = []
  currentCategory: ICategoryProduct = {
    name: '',
    profileProviderId: ''
  }
  currentCategoryTmp: ICategoryProduct = {
    name: '',
    profileProviderId: ''
  }
  responseCategory: string
  editState: boolean = false
  deleteState: boolean = false
  //IMAGES
  currentImages: CImages[] = []
  images: File[] = []
  uploadPercent: number
  deleteImages: CImages[] = []
  fileUpload: any
  imageUrl: string
  dataImage: string
  displayModalCroper: boolean = false
  currentFile: File
  config = {
    aspectRatio: 16/16,
    dragMode: 'none',
    autoCropArea: 100
  }

  constructor(
    private productService: ProductService,
    private general: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private profileProviderService: ProfileProviderService
  ) { }

  ngOnInit(): void {
    this.getProfileProvider()
  }

  getProfileProvider() {
    this.profileProviderService.get().subscribe((response: IResponseApi) => {
      this.profileProvider = response.data
      this.getProducts()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  getProducts() {
    this.subs.add(
      this.productService.getByProfileProviderId(this.profileProvider._id).subscribe((response: IResponseApi) => {
        this.items = response.data
        this.getCategories()
        if (response.data?.length === 0) {
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }


  getCategories(){
    this.productService.getCategoryByProfileProviderId(this.profileProvider._id).subscribe((response: IResponseApi) => {
      this.categories = response.data
    })
  }

  issetCategory(categoryName){
    if(this.categories.find(c => c.name === categoryName)){
      return true
    }else {
      return false
    }
  }

  validateCategory(){
    let res = true
    if(!this.currentCategory.name){
      res = false
      this.responseCategory = 'Debe completar todo los campos'
    }
    if(this.issetCategory(this.currentCategory.name)){
      res = false
      this.responseCategory = 'La categoria ya existe'
    }
    if(this.editState){
      res = false
      this.responseCategory = 'La categoria fue editada'
    }
    if(this.deleteState){
      res = false
      this.responseCategory = 'La categoria fue eliminada'
    }
    return res
  }

  saveCategory(){
    if(this.validateCategory()){
      const peyload: ICategoryProduct = {
        name: this.currentCategory?.name,
        profileProviderId: this.profileProvider._id
      }
      this.productService.saveCategory(peyload).subscribe((response: IResponseApi) => {
        this.responseCategory = 'Categoria guardada'
        this.resetCategory()
        this.getCategories()
        console.log('edit', response)
      })
      this.currentCategory
    }
  }

  editCategory(category: ICategoryProduct){
      this.currentCategory = category
      this.editState = true
  }
  deleteCategory(){
      this.currentCategory = this.currentCategoryTmp
      this.deleteState = true
  }

  resetCategory(){
    this.currentCategory.name = ''
  }

  validate() {
    this.invalid = new CProductInvalid
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalid.name = true
    }
    if (this.currentImages?.length === 0) {
      invalid = true
      this.invalid.images = true
    }
    if (invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }

  reset() {
    this.currentItem = new CProduct
    this.currentImages = []
    this.uploadPercent = 0
  }

  addEdit(item: CProduct = null) {
    this.listCat = false
    this.currentImages = []
    if (item) {
      this.currentItem = item
      if (item.images) {
        item.images.map((image:string)=>{
          this.currentImages = [...this.currentImages, { file: null, blob: null, url: image }]
        })
      }
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item: CProduct) {
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Segúro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      accept: () => {
        this.preDelete(item);
      },
      reject: () => {
        // Nothing
      }
    });
  }

  add() {
    this.currentItem.profileProviderId = this.profileProvider._id
    this.productService.save(this.currentItem).subscribe((response: IResponseApi) => {
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      if(!this.currentItem?._id){
        this.reset()
      }
      this.getProducts()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  delete(item:CProduct){
    this.currentImages = []
    this.subs.add(
      this.productService.delete(item._id).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CProduct
        this.getProducts()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  async preDelete(item: CProduct) {
    if (item.images) {
      await this.general.deleteImages(item.images)
      this.delete(item)
    }else{
      this.delete(item)
    }
  }

  //IMAGE

  removeImage(image: CImages) {
    if (image.url) {
      this.deleteImages = [...this.deleteImages, image]
      this.currentItem.images = [...this.currentItem.images.filter((ima: string) => ima !== image.url)]
    }
    this.currentImages = [...this.currentImages.filter((ima: CImages) => ima.url !== image.url)]
  }

   onUpload(event: any, fileUpload:any) {
    event.currentFiles.map((file: File) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentFile = file
        this.openModalCrroper(reader.result)
        this.fileUpload = fileUpload
      };
    })
  }

  openModalCrroper(image: string) {
    this.imageUrl = image
    this.dataImage = image
    this.displayModalCroper = true
  }

  resetUploadButton(){
    this.fileUpload.clear()
  }

  moveCropper() {
    this.dataImage = this.angularCropper.cropper.crop().getCroppedCanvas({
      width: 400,
      height: 400
    }).toDataURL();
  }

  cropper() {
    this.currentImages = [...this.currentImages, { file: this.currentFile, blob: this.dataImage, url: null }]
    this.displayModalCroper = false
    this.fileUpload.clear()
  }

  async presave() {
    if (!this.validate()) {
      this.general.isLoad(true)
      if (this.deleteImages?.length > 0) {
        const images = []
        this.deleteImages.map((image: CImages)=>{
          if (image.url){
            images.push(image.url)
          }
        })
        const deleteImages = await this.general.deleteImages(images)
        this.uploadImages()
      }else{
        this.uploadImages()
      }
    }
  }

  uploadImages(){
    if (this.currentImages?.length > 0) {
        let count = 1
        this.currentImages.map(async (images:CImages)=>{
          if (images.file){
            const url: any = await this.general.uploadImage(images.file, 'products/')?.toPromise()
            if (url) {
              this.currentItem.images = [...this.currentItem.images, url]
            }
          }
          this.uploadPercent = count*100/this.currentImages.length
          count++
          if(count === this.currentImages.length+1){
            this.add()
          }
        })
    } else {
      this.add()
    }
  }

  getBlobOrImage(image: CImages) {
    return image.blob || image.url
  }

  //PRODUCT LIST COMPONENT
  productListEvent($event){
    switch ($event.function) {
      case 'edit':
        this.addEdit($event.data)
        break;

      default:
        break;
    }
  }


  selectCat(category:string){

  }

  addEditCategories(){
    this.displayCategories = true
  }


}
