import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapServices } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, PercentPipe, DecimalPipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

/* title!: string;
description!: string;
createdAt!: Date;
snaps!: number;
imageUrl!: string; */
hasSnaped!: Boolean;
snapButtonText!: String;


constructor(private faceSnapsService: FaceSnapServices){}

ngOnInit(): void {

  this.hasSnaped = false;
  this.snapButtonText = "Oh Snaps!"
}

onSnap(): void {
  /*
  Si l'utilisateur a déjà liké
  */
  if (this.hasSnaped){
    this.unSnap();
  }
  else
  {
    this.snap();
  }
}
unSnap() {
  /*this.faceSnap.removeSnap();*/
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap')
  this.hasSnaped = false;
  this.snapButtonText = "Oh Snaps!"
}

snap(){
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap')
  this.hasSnaped = true;
  this.snapButtonText = "Oups, un Snap!"
}


}
