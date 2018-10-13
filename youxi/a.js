

$(document).ready(function(){
	startt();
});

var shuzu=new Array();
var score=0;
var shuzuu=new Array();

var startx;
var starty;
var endx;
var endy;

function startt(){
	if(domkuan>500){
		rongqikuan=500;
		xiaogezikuan=100;
		xiaogezijulikuan=20;
	}else{
		mob();
	}
	
	start();
	suijishu();
	suijishu();
}

function mob(){
	$('.a').css('width',rongqikuan);
	// $('.b').css('width',rongqikuan);
	// $('.cc').css('width',rongqikuan);
	// $('.ccc').css('width',rongqikuan);

	$('.aa').css('width',rongqikuan-xiaogezijulikuan*2);
	$('.aa').css('height',rongqikuan-xiaogezijulikuan*2);
	$('.aa').css('padding',xiaogezijulikuan);
	$('.aa').css('border-radius',rongqikuan*0.02);

	$('.happy').css('width',xiaogezikuan);
	$('.happy').css('height',xiaogezikuan);
	$('.happy').css('border-radius',xiaogezikuan*0.06);
// 	$('.happy').css("top",lishang(a,b));
// 	$('.happy').css("left",lizuo(a,b));
	}

function start(){
	for(var a=0;a<4;a++){
		for(var b=0;b<4;b++){
			var gezi=$("#grid-cell-"+a+'-'+b);
			gezi.css("top",lishang(a,b));
			gezi.css("left",lizuo(a,b));
		}
	}

	for(var a=0;a<4;a++){
		shuzu[a]=new Array();
		shuzuu[a]=new Array();
		for(var b=0;b<4;b++){
			shuzu[a][b]=0;
			shuzuu[a][b]=false;
		}
	}
	
	
	
	upceng();
	score=0;
	chscore(score);
}


function upceng(){

	$(".thappy").remove();
	for(var a=0;a<4;a++){
		for(var b=0;b<4;b++){
			$(".aa").append("<div class='thappy' id='thappy-"+a+"-"+b+"' ></div>");
			var sgezi=$("#thappy-"+a+'-'+b);

			if(shuzu[a][b]==0){
				sgezi.css("width","0px");
				sgezi.css("height","0px");
				sgezi.css("top",lishang(a,b)+xiaogezikuan*0.5);
				sgezi.css("left",lizuo(a,b)+xiaogezikuan*0.5);
			}else{
				sgezi.css("width",xiaogezikuan);
				sgezi.css("height",xiaogezikuan);
				sgezi.css("top",lishang(a,b));
				sgezi.css("left",lizuo(a,b));
				sgezi.css('background-color',bgc(shuzu[a][b]));
				sgezi.css("color",nc(shuzu[a][b]));
				sgezi.text(shuzu[a][b]);
			}
			shuzuu[a][b]=false;
			// $('.thappy').css('width',xiaogezikuan);
			// $('.thappy').css('height',xiaogezikuan);
			$('.thappy').css('border-radius',xiaogezikuan*0.06);
			$('.thappy').css('font-size',xiaogezikuan*0.5);
			$('.thappy').css('line-height',xiaogezikuan+'px');

		}
	}
	
}

function suijishu(){
	if(nospace(shuzu)){
		return;
	}

	var count=0;
	var hfan=new Array();
	for(var a=0;a<4;a++){
		for(var b=0;b<4;b++){
			if(shuzu[a][b]==0){
				hfan[count]=a*4+b;
				count++;
			}
		}
	}

	var sd=Math.floor(Math.random()*count);
	var rx=Math.floor(hfan[sd]/4);
	var ry=Math.floor(hfan[sd]%4);



	var suis=Math.random()<0.5?2:4;

	shuzu[rx][ry]=suis;
	donghua(rx,ry,suis);
}

$(document).keydown(function(a){
	a.preventDefault();
	switch(a.keyCode){
		case 37:
			if (ifmoveleft(shuzu)){
				moveleft();
				setTimeout(suijishu,200);
				setTimeout(gg,600);
			}
			console.log(11);
			break;
		case 38: //up
			if (ifmoveup(shuzu)){
				moveup();
				setTimeout(suijishu,200);
				setTimeout(gg,600);
			}
			break;
		case 39: //right
			if (ifmoveright(shuzu)){
				moveright();
				setTimeout(suijishu,200);
				setTimeout(gg,600);
			}
			break;
		case 40: //down
			if (ifmovedown(shuzu)){
				movedown();
				setTimeout(suijishu,200);
				setTimeout(gg,600);
			}
			break;	
		default:
			break;			
	}
})

document.addEventListener('touchstart',function(a){
	startx=a.touches[0].pageX;
	starty=a.touches[0].pageY;
});

document.addEventListener('touchend',function(a){
	endx=a.changedTouches[0].pageX;
	endy=a.changedTouches[0].pageY;


	var deltax=endx-startx;
	var deltay=endy-starty;
	if(Math.abs(deltax)<domkuan*0.06&&Math.abs(deltay)<domkuan*0.06){
	return;
	}

	if(Math.abs(deltax)>=Math.abs(deltay)){ 
		if(deltax>0){ 
			if(ifmoveright(shuzu)){
				moveright();
				setTimeout(suijishu,200);
				setTimeout(gg,500);
			}
		}else{ 
			if(ifmoveleft(shuzu)){
				moveleft();
				setTimeout(suijishu,200);
				setTimeout(gg,500);
			}
		}
	}else{ 
		if(deltay>0){ 
			if(ifmovedown(shuzu)){
				movedown();
				setTimeout(suijishu,200);
				setTimeout(gg,500);
			}
		}else{ 
			if(ifmoveup(shuzu)){
				moveup();
				setTimeout(suijishu,200);
				setTimeout(gg,500);
			}
		}
	}

});
function moveleft(){

	for(var z=0;z<4;z++){
		for(var x=1;x<4;x++){
			if(shuzu[z][x]!=0){
				for(var v=0;v<x;v++){
					if(shuzu[z][v]==0&&nojm(z,v,x,shuzu) ){
						donghuaa(z,x,z,v);
						shuzu[z][v]=shuzu[z][x];
						shuzu[z][x]=0;
						break;
					}else if(shuzu[z][v]==shuzu[z][x]&&nojm(z,v,x,shuzu)&&!shuzuu[z][v]){
						donghuaa(z,x,z,v);
						shuzu[z][v]=shuzu[z][x]+shuzu[z][v];
						shuzu[z][x]=0;
						score=shuzu[z][v]+score;
						chscore(score);
						shuzuu[z][v]=true;
						break;
					}
				}
			}
		}
	}
	setTimeout(upceng,500);
}


function moveright(){

	for(var z=0;z<4;z++){
		for(var x=2;x>=0;x--){
			if(shuzu[z][x]!=0){
				for(var v=3;v>x;v--){
					if(shuzu[z][v]==0&&nojm(z,x,v,shuzu) ){
						donghuaa(z,x,z,v);
						shuzu[z][v]=shuzu[z][x];
						shuzu[z][x]=0;
						break;
					}else if(shuzu[z][v]==shuzu[z][x]&&nojm(z,x,v,shuzu)&&!shuzuu[z][v]){
						donghuaa(z,x,z,v);
						shuzu[z][v]=shuzu[z][x]+shuzu[z][v];
						shuzu[z][x]=0;
						score=shuzu[z][v]+score;
						chscore(score);
						shuzuu[z][v]=true;
						break;
					}
				}
			}
		}
	}
	setTimeout(upceng,500);
}


function moveup(){

	for(var x=0;x<4;x++){
		for(var z=1;z<4;z++){
			if(shuzu[z][x]!=0){
				for(var v=0;v<z;v++){
					if(shuzu[v][x]==0&&nojmm(x,v,z,shuzu) ){
						donghuaa(z,x,v,x);
						shuzu[v][x]=shuzu[z][x];
						shuzu[z][x]=0;
						break;
					}else if(shuzu[v][x]==shuzu[z][x]&&nojmm(x,v,z,shuzu)&&!shuzuu[v][x]){
						donghuaa(z,x,v,x);
						shuzu[v][x]=shuzu[z][x]+shuzu[v][x];
						shuzu[z][x]=0;
						score=shuzu[v][x]+score;
						chscore(score);
						shuzuu[v][x]=true;
						break;
					}
				}
			}
		}
	}
	setTimeout(upceng,500);
}

function movedown(){

	for(var x=0;x<4;x++){
		for(var z=2;z>=0;z--){
			if(shuzu[z][x]!=0){
				for(var v=3;v>z;v--){
					if(shuzu[v][x]==0&&nojmm(x,z,v,shuzu) ){
						donghuaa(z,x,v,x);
						shuzu[v][x]=shuzu[z][x];
						shuzu[z][x]=0;
						break;
					}else if(shuzu[v][x]==shuzu[z][x]&&nojmm(x,z,v,shuzu)&&!shuzuu[v][x]){
						donghuaa(z,x,v,x);
						shuzu[v][x]=shuzu[z][x]+shuzu[v][x];
						shuzu[z][x]=0;
						score=shuzu[v][x]+score;
						chscore(score);
						shuzuu[v][x]=true;
						break;
					}
				}
			}
		}
	}
	setTimeout(upceng,500);
}