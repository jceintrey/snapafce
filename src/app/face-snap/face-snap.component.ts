import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import {  NgClass,  TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapServices } from '../services/face-snaps.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [ UpperCasePipe, TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

 
@Input() faceSnap!: FaceSnap;


constructor(private router: Router){


}

ngOnInit(): void {
 
}

onViewFaceSnap() {
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  





}
