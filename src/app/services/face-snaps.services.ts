import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapServices{
    private faceSnaps: FaceSnap[] = [

        new FaceSnap(
         'Archibald',
         'Mon best briend',
         'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
         new Date(),
         128)
         ,
       new FaceSnap(
         'Three Rock Montain',
         'Un endroit pour les randonnées',
         'https://media.istockphoto.com/id/1996377443/fr/photo/diverse-friends-enjoying-sunny-mountain-hike.webp?s=2048x2048&w=is&k=20&c=sg_bAXza-Bn6eNZqJEoINjYU-zwNSBhNlZAkeW1bRA0=',
         new Date(),
         64
         ).withLocation("à la montagne"),
         new FaceSnap(
           'Un bon repas',
           'Que c\'est bon',
           'https://media.istockphoto.com/id/536665840/fr/photo/d%C3%AEner-en-famille.webp?s=2048x2048&w=is&k=20&c=1FKff_8Midq7DV18P5etO5dn87tcOlc_5SKrCneQw2o=',
           new Date(),
           10
           )
         ];
    
         getFaceSnaps(): FaceSnap[] {
          return [...this.faceSnaps];
         }

         snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
            const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
            if (!foundFaceSnap) {
              throw new Error('FaceSnap not found!');
            }
            foundFaceSnap.snap(snapType);

        }
        



}