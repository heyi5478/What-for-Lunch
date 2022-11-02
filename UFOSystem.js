import {cvs, ctx, imgs} from "./Engine.js";
import Particle from "./Particle.js";
import UFO from "./UFO.js";
class UFOSystem extends Particle{
    constructor(){
        super();
        this.max=20;
        this.ufos=[];
    }
    update(){
        // 新增 UFO
        if(this.ufos.length<this.max){
            this.ufos.push(new UFO(
                Math.random()*cvs.width,
                Math.random()*200
            ));
        }
        // 更新每個 UFO
        for(let i=0;i<this.ufos.length;i++){
            if(this.ufos[i].update()){
                this.ufos.splice(i, 1);
                i--;
            }
        }
    }
    render(){
        for(let i=0;i<this.ufos.length;i++){
            this.ufos[i].render()
        }
    }
}
export default UFOSystem;