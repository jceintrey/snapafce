import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

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


ngOnInit(): void {

  this.hasSnaped = false;
  this.snapButtonText = "Oh Snaps!"
}

onSnap(): void {
  /*
  Si l'utilisateur a déjà liké
  */
  if (this.hasSnaped){
    this.faceSnap.removeSnap();
    this.hasSnaped = false;
    this.snapButtonText = "Oh Snaps!"
  }
  else
  {
    this.faceSnap.addSnap();
    this.hasSnaped = true;
    this.snapButtonText = "Oups, un Snap!"
  }
}
}
