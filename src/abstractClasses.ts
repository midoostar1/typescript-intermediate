abstract class TakePhoto{

    constructor(public cameraMode: string, public filter: string ){}

abstract getCameraMode(): string;

geReels():number{
    return 10
}
}

//abstract methods and fields have to be implemented

class Instagram1 extends TakePhoto{
    getCameraMode(): string {
       return `taking photos in ${this.cameraMode}`
    }
    constructor(public cameraMode: string, public filter: string ){
        super( cameraMode, filter );
    }

}

//instances of classes extending abstract classes can use methods that are defined in the abstract class

let myGram = new Instagram1('take photos',' sunny')
myGram.geReels
