const canv = document.body.querySelector('canvas');
const ctx = canv.getContext('2d');
let drops = [];
const xrange = canv.width;
const yrange = canv.height;
const rrange = 10;
const dropct = 100;
let curDropct = dropct;
const fps = 1000/50;

function resizeCanvas(){
    const [ww, wh] = [window.innerWidth, window.innerHeight];
    if(ww > wh) {
        canv.style.height = ww + "px";
    }else {
        canv.style.width = wh + "px";
    }
    //console.log(ww, wh, canv.style.height,canv.style.width);
}
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function update() {

  if(curDropct <= 0){
    drops.push({
      x: Math.floor(Math.random() * xrange),
      y: Math.floor(Math.random() * yrange),
      range: Math.floor(Math.random() * rrange) * 2 + 50,
      curRange: 0
    });
    curDropct = dropct;
  }else {curDropct-=fps;}


  for(const drop of drops){
    drop.curRange += 1;
  }
  _.remove(drops, function(i){
    return i.curRange > i.range;
  });
}
function render() {
  ctx.clearRect(0,0, xrange, yrange);

  for(const drop of drops){
    //console.log(drop);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,255," +  (1 - (drop.curRange / drop.range)) + ")";
    ctx.arc(drop.x, drop.y, drop.curRange, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }

}
setInterval(function(){
  update();
  render();
}, fps);
