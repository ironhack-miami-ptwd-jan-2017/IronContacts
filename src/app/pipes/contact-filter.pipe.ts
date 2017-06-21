import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter',
  pure: false
})
export class ContactFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    console.log(items, field, value)
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }

    return items.filter(it => it[field].match(new RegExp(value, 'i')));
  }

}
