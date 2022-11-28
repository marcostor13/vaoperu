import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IResponseApi, IResponseFront } from 'src/app/models/responses';
import { SubSink } from 'subsink';
import { CDistrict, CDistrictInvalid } from './models/district'
import { DistrictService } from './services/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})

export class DistrictComponent implements OnInit {

  public subs = new SubSink()
  displayModal: boolean = false
  items: CDistrict[]
  currentItem: CDistrict = new CDistrict
  invalid: CDistrictInvalid = new CDistrictInvalid

  constructor(
    private districtService: DistrictService,
    private general: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.subs.add(
      this.districtService.get().subscribe((response: IResponseApi) => {
        this.items = response.data

      }, error => {

        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  validate() {
    this.invalid = new CDistrictInvalid
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalid.name = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
    }
    return invalid
  }

  reset() {
    this.currentItem = new CDistrict
  }

  addEdit(item: CDistrict = null) {
    if (item) {
      this.currentItem = item
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item: CDistrict) {
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Segúro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      accept: () => {
        this.delete(item);
      },
      reject: () => {
        // Nothing
      }
    });
  }

  add() {
    if (!this.validate()){
      this.subs.add(
        this.districtService.save(this.currentItem).subscribe((response: IResponseApi) => {
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
          this.currentItem = new CDistrict
          this.get()
        }, error => {

          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        })
      )
    }
  }

  updateAll(){
    this.subs.add(
      this.districtService.updateAll(this.items).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CDistrict
        this.get()
      }, error => {

        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  delete(item: CDistrict) {
    this.subs.add(
      this.districtService.delete(item._id).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CDistrict
        this.get()
      }, error => {

        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  getElementByID(id: string) {
    return this.items.filter((item: CDistrict) => item._id === id)
  }

}
