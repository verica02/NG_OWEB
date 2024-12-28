

// import { Component, Input } from '@angular/core';
// import { driver } from '../../driver';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-comp',
//   imports: [CommonModule],
//   templateUrl: './comp.component.html',
//   styleUrls: ['./comp.component.css']
// })
// export class CompComponent {

//   @Input()
//   vozac: driver | undefined;

//   @Input()
//   cuci: Number | undefined;

//   @Input()
//   indeks: Number | undefined;

//   onDrvView() {
//     let link: string | undefined;

//     if (this.vozac?.iconUrl) {
//       link = this.vozac?.iconUrl;
//     } else {
//       link = "https://www.google.com";
//     }

//     window.open(link, "_blank");
//   }

//   toggleContent() {
//     const content = document.getElementById('content1');
//     const button = document.querySelector('button');
//     const isExpanded = button?.getAttribute('aria-expanded') === 'true';

//     if (button) {
//       button.setAttribute('aria-expanded', (!isExpanded).toString());
//     }
//     if (content) {
//       content.setAttribute('aria-hidden', isExpanded.toString());
//     }
//   }
// }


import { Component, Input } from '@angular/core';
import { driver } from '../../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {

  @Input()
  vozac: driver | undefined;

  @Input()
  cuci: Number | undefined;

  @Input()
  indeks: Number | undefined;

  onDrvView() {
    let link: string | undefined;

    if (this.vozac?.iconUrl) {
      link = this.vozac?.iconUrl;
    } else {
      link = "https://www.google.com";
    }

    window.open(link, "_blank");
  }

}

