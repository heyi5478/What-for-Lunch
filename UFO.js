import {cvs, ctx, imgs} from "./Engine.js";
import Particle from "./Particle.js";
class UFO extends Particle{
    constructor(x, y){
        super();
        this.x=x;
        this.y=y;
        this.vx=Math.random()*2-1;// -1~1
        this.size=30;
    }
    update(){
        this.x+=this.vx;
        if(this.x<0 || this.x>cvs.width){
            this.vx*=-1;
        }
    }
    render(){
        ctx.drawImage(
            imgs.ufo,
            this.x-(this.size/2), this.y-(this.size/2),
            this.size, this.size
        )
    }
}
export default UFO;