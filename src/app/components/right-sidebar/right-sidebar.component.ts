import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {
  @Input({ required: true })  balance!: any;
  users:any=[
    "./../../../assets/image.jpg",
    "./../../../assets/image2.jpg",
    "./../../../assets/image3.jpg",
    "./../../../assets/image4.jpg",
    "./../../../assets/image5.jpg"
  ]
}
