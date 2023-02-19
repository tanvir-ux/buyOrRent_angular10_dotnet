import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortFiled = args[0];
    const sortDirection = args[1];

    let multiplier = 1;

    if (sortDirection === 'desc') multiplier =  -1;

    if (value) {
      value.sort((a: any, b: any) => {
        if (a[sortFiled] < b[sortFiled]) {
          return -1 * multiplier;
        } else if (a[sortFiled] > b[sortFiled]) {
          return 1 * multiplier;
        } else {
          0;
        }
      });
      return value;
    }
  }

}
