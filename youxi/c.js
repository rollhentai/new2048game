
function donghua(a,b,c){
	// console.log(j,j,randNumber);
	var numberCell=$('#thappy-'+a+'-'+b);
	numberCell.css('background-color', bgc(c));
	numberCell.css('color', nc(c));
	numberCell.text(c);

	numberCell.animate({
		width:xiaogezikuan,
		height:xiaogezikuan,
		top:lishang(a,b),
		left:lizuo(a,b)
	}, 500);

}

function donghuaa(fromx,fromy,tox,toy){
	var numberCell=$('#thappy-'+fromx+'-'+fromy);
	numberCell.animate({
 		top:lishang(tox,toy),
 		left:lizuo(tox,toy)
	}, 500);
}