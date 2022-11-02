import Engine, { ctx, imgs} from "./Engine.js";
import Particle from "./Particle.js";
class Explosion extends Particle{
    constructor(x, y){
        super();
        this.x=x;
        this.y=y;
        this.size=60;
        this.life=20;
       
    }
    update(){
        this.life--;
        return this.life===0;    
    }
    
    render(){
        ctx.drawImage(imgs.explosion,
            this.x-(this.size/2), this.y-(this.size/2),
            this.size, this.size
        )
    }
}
export default Explosion; 