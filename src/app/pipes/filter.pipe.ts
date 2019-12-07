import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface} from '../interfaces/rick-morty';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: CharacterInterface) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.name.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}

