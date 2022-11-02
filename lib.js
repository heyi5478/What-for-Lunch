class Particle{
    update(){
        return false;
    }
    render(){}
}

class Plane extends Particle{
    constructor(){
        super();
        this.x=cvs.width/2;
        this.y=cvs.height-100;
        this.size=40;
    }
    update(){
        return false;
    }
    render(){
        ctx.drawImage(
            imgs.plane,
            this.x-(this.size/2), this.y-(this.size/2),
            this.size, this.size
        )
    }
}
class UFO extends Particle{
    constructor(){
        super();
        this.x=cvs.width/2;
        this.y=100;
        this.size=30;
    }
    update(){
        return false;
    }
    render(){
        ctx.drawImage(
            imgs.ufo,
            this.x-(this.size/2), this.y-(this.size/2),
            this.size, this.size
        )
    }
}