import { Pipe, PipeTransform } from '@angular/core';

import { marked } from 'marked';

@Pipe({
  name: 'md',
})
export class MdPipe implements PipeTransform {
  transform(value: string): string {
    return marked(value);
  }
}
