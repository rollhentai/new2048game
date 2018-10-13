var domkuan=document.documentElement.clientWidth;
var rongqikuan=domkuan*0.92;
var xiaogezikuan=domkuan*0.18;
var xiaogezijulikuan = domkuan*0.04;


function lishang(a,b){
	return xiaogezijulikuan+(xiaogezikuan+xiaogezijulikuan)*a;
}


function lizuo(a,b){
	return xiaogezijulikuan+(xiaogezikuan+xiaogezijulikuan)*b;
}
function bgc(num){
	switch(num){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
	}
}


function nc(a){
	if(a<=4){
		return "#776e65";
	}else{
		return '#fff';
	}
}


function nospace(shuzu){
	for(var m=0;m<4;m++){
		for(var n=0;n<4;n++){
			if(shuzu[m][n]==0){
				return false;
			}
		}
	}
	return true;
}
function ifmoveleft(b){
	for(var a=0;a<4;a++){
		for(var b=1;b<4;b++){
			if(shuzu[a][b]!=0){
				if(shuzu[a][b-1]==0||shuzu[a][b-1]==shuzu[a][b]){
					return true;
				}
			}
		}
	}
	return false;
}
function ifmoveright(b){
	for(var a=0;a<4;a++){
		for(var b=0;b<3;b++){
			if(shuzu[a][b]!=0){
				if(shuzu[a][b+1]==0||shuzu[a][b+1]==shuzu[a][b]){
					return true;
				}
			}
		}
	}
	return false;
}

function ifmoveup(b){
	for(var a=1;a<4;a++){
		for(var b=0;b<4;b++){
			if(shuzu[a][b]!=0){
				if(shuzu[a-1][b]==0||shuzu[a-1][b]==shuzu[a][b]){
					return true;
				}
			}
		}
	}
	return false;
}

function ifmovedown(b){
	for(var a=0;a<3;a++){
		for(var b=0;b<4;b++){
			if(shuzu[a][b]!=0){
				if(shuzu[a+1][b]==0||shuzu[a+1][b]==shuzu[a][b]){
					return true;
				}
			}
		}
	}
	return false;
}

function stop(shuzu){
	if(ifmoveleft(shuzu) || ifmoveright(shuzu) || ifmoveup(shuzu) || ifmovedown(shuzu)){
		return false;
	}else{
		return true;
	}

}

function nojm(q,w,e,shuzu){
	for(var a=w+1;a<e;a++){
		if(shuzu[q][a]!=0){
			return false;
		}
	}
	return true;
}


function nojmm(q,w,e,shuzu){
	for(var a=w+1;a<e;a++){
		if(shuzu[a][q]!=0){
			return false;
		}
	}
	return true;
}

function chscore(score){
	$(".d").text(score);
}

function gg(){
	if(nospace(shuzu)&&stop(shuzu)){
		alert('my turn');
	}
}