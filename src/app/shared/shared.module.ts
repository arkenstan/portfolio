import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdPipe } from './pipes/md.pipe';

@NgModule({
  declarations: [MdPipe],
  exports: [CommonModule, MdPipe],
})
export class SharedModule {}
