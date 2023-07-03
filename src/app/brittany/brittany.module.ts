import { NgModule } from '@angular/core';

import { BrittanyRoutingModule } from './brittany-routing.module';
import { MainComponent } from './container/main/main.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, BrittanyRoutingModule],
})
export class BrittanyModule {}
