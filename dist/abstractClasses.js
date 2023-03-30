"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    geReels() {
        return 10;
    }
}
//abstract methods and fields have to be implemented
class Instagram1 extends TakePhoto {
    getCameraMode() {
        return `taking photos in ${this.cameraMode}`;
    }
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
//instances of classes extending abstract classes can use methods that are defined in the abstract class
let myGram = new Instagram1('take photos', ' sunny');
myGram.geReels;
