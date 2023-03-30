interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}



//class have to implement all fields of the interface its implementing
class Instagram implements TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {}
   
}


//has to implement all fields of both interface its implementing
class Youtube implements TakePhoto, Story {
    constructor(public cameraMode: string, public filter: string, public burst: number, public shorts: string) {}
    createStory(): void {
        console.log('story');
        
    }
}

interface Story {
    createStory(): void;
}