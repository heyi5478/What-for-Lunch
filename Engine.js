let cvs=document.querySelector("#cvs");
let ctx=cvs.getContext("2d");
let imgs={
    plane:"plane.png", missile:"missile.png", 
    ufo:"ufo.png", explosion:"explosion.png"
};

function loadImage(name){
    let p=new Promise(function(resolve, reject){
        let img=new Image();
        img.src=imgs[name];
        img.addEventListener("load", function(){
           resolve(img);
        });
    });
    return p;    
}
async function loadImages(callback){
    for(let name in imgs){
        let result=await loadImage(name);
        imgs[name]=result;
    }
    callback();
}

let Engine={
    ctx, cvs,  imgs, loadImages,
    circle:0,
    particles:null,
    ufoSystem:null,
    keys:{
        left:false, up:false, right:false, down:false, space:false
    }
};

export default Engine;
export {cvs, ctx, imgs};