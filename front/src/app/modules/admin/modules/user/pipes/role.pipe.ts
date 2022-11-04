import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string {
    switch (value[0]) {
      case 'admin':
        return 'Administrador'
      case 'provider':
        return 'Proveedor'
      case 'user':
        return 'Usuario'
      default:
        return value[0]
    }
  }

}
