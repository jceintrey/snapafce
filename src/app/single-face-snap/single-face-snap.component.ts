import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapServices } from '../services/face-snaps.services';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, PercentPipe, DecimalPipe, CurrencyPipe, TitleCasePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
faceSnap!: FaceSnap;

hasSnaped!: Boolean;
snapButtonText!: String;


constructor(private faceSnapsService: FaceSnapServices, private route: ActivatedRoute){}

ngOnInit(): void {

  const faceSnapId = this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);

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
