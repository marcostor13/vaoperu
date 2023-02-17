import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { CCropped } from './model/crop.interfaces';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss']
})
export class CropImageComponent implements OnInit {
  @Output() events = new EventEmitter<any>();
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  imageChangedEvent: any = ''
  croppedImage: any = ''
  displayModalCroper: boolean = false
  name: string = ''
  images: File[] = []
  fileCroped: CCropped = {
    name: '',
    event: null
  }
  msgs: Message[] = [];
  file: any
  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    let fileInput = document.getElementById('fileInput') as HTMLInputElement;
    let files = Array.from(fileInput.files);
    this.file = event.target.files[0];
    if (this.file && this.file.size > 2000000) {
      this.fileInput.nativeElement.value = '';
      this.messageService.add({severity:'error', summary: files[0]?.name, detail:'El tamaño máximo es 2 MB.'});
    } else {
      this.msgs = []
      this.name = files[0]?.name;
      this.displayModalCroper = true
      this.imageChangedEvent = event;
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileCroped = {
      name: this.name,
      event: this.croppedImage
    }
  }
  croppedReset() {
    this.fileInput.nativeElement.value = '';
  }
  cropperReady() {
    this.events.emit(this.fileCroped)
    this.displayModalCroper = false
    this.croppedReset()
  }
  loadImageFailed() {
      // show message
  }

}
