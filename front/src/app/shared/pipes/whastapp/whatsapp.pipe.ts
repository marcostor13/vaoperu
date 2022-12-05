import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whatsapp'
})
export class WhatsappPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if(value?.length === 9){
      return `51${value}`
    } else if(value?.length === 12){
      return value.substring(1)
    } else{
      return value
    }
  }

}
