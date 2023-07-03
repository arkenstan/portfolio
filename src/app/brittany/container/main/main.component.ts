import { Component, HostBinding, HostListener } from '@angular/core';
import { Info } from '@app/data/personal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  data = Info;

  @HostBinding('style.background') bg =
    'radial-gradient(600px at center, rgba(29, 78, 216, 0.15), transparent 80%)';

  @HostListener('document:mousemove', ['$event'])
  documentMouseMove(ev: MouseEvent) {
    console.log(ev);

    const { clientX, clientY } = ev;

    this.bg = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  }
}
