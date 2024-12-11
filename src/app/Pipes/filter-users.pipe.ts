import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../components/Models/model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User []{
    const searchText = args[0];
    return value.filter( a => a.name.toLowerCase().includes(searchText.toLowerCase())||a.nic.toLowerCase().includes(searchText.toLowerCase())||a.email.toLowerCase().includes(searchText.toLowerCase())
);
  }

}
