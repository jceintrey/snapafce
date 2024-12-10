import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapServices } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];


constructor(private faceSnapsService: FaceSnapServices){

}


  ngOnInit(): void {

      this.faceSnaps = this.faceSnapsService.getFaceSnaps();
      

    }

  
}
