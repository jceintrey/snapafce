import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {


title!: String;
description!: String;
createdAt!: Date;
snaps!: number;

ngOnInit(): void {
  throw new Error('Method not implemented.');
  this.createdAt = new Date();
  this.title = 'Archibald';
  this.description = 'Mon best briend'
  this.snaps = 0;
}

}
