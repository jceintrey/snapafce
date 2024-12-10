export class FaceSnap {

    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number
                )
    {
        this.id = crypto.randomUUID().substring(0,8);

    }

    addSnap(): void {
        this.snaps++;
    }
    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string){
        this.location = location;
    }
    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
      }

}