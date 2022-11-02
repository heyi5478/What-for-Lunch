import Engine, {cvs, ctx, imgs} from "./Engine.js";
import Missile from "./Missile.js";
import Particle from "./Particle.js";
class Plane extends Particle{
    constructor(){
        super();
        this.x=cvs.width/2;
        this.y=cvs.height-100;
        this.size=40;
        this.freq=20;
    }
    update(){
        let keys=Engine.keys;
        let speeds=2;
        if(keys.left){
            this.x-=speeds;
        }
        if(keys.up){
            this.y-=speeds;
        }
        if(keys.right){
            this.x+=speeds;
        }
        if(keys.down){
            this.y+=speeds;
        }
        if(this.x<0){
            this.x=0;
        }
        if(this.x>cvs.width){
            this.x=cvs.width;
        }
        if(this.y<0){
            this.y=0;
        }
        if(this.y>cvs.height){
            this.y=cvs.height;
        }

        if(keys.space){
            if(Engine.circle%this.freq===0){  // 發射頻率
                Engine.particles.push(new Missile(
                    this.x, this.y-(this.size/2)
                ));
            }
        }
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
export default Plane;