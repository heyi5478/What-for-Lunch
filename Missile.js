import Engine, { ctx, imgs} from "./Engine.js";
import Explosion from "./Explosion.js";
import Particle from "./Particle.js";
class Missile extends Particle{
    constructor(x, y){
        super();
        this.x=x;
        this.y=y;
        this.vy=-3;
        this.size=10;
    }
    update(){
        this.y+=this.vy;
        return this.y<0;
    }
    checkCollision(){
        let ufos=Engine.ufoSystem.ufos;
        for(let i=0;i<ufos.length;i++){
            let distance=Math.sqrt(
                Math.pow(this.x-ufos[i].x, 2)+
                Math.pow(this.y-ufos[i].y, 2)
            );
            let threshold=(this.size+ufos[i].size)/2;
            if(distance<threshold){
                // 碰到了
                Engine.particles.push(new Explosion(
                    ufos[i].x, ufos[i].y
                ));
                ufos.splice(i, 1);
                return true;
            }
        }       
    }
    render(){
        ctx.drawImage(
            imgs.missile,
            this.x-(this.size/2), this.y-(this.size/2),
            this.size, this.size
        )
    }
}
export default Missile; 