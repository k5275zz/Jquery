/**
 * 
 */

$(document).ready(function(){
	
	/*$("tr").filter(function(index){
		//td = 5~11 tr = 1~3
		return index<=2  
	}).css("backgroundColor","brown")*/
	
	$("td").filter(function(index){
		//td = 5~11 tr = 1~3
		return index==4 || 6<=index && index<=9 || 14<=index && index<=18
	}).css("backgroundColor","violet")
	
	$("td").filter(function(index){
		//td = 5~11 tr = 1~3
		return index==5 || 10<=index && index<=13
	}).css("backgroundColor","Crimson").css("color","white")
	
	
		/*$("td:nth-child(1)").css("backgroundColor","violet")
		$("td:nth-child(2)").css("backgroundColor","AliceBlue")
		$("td:nth-child(3)").css("backgroundColor","AntiqueWhite")
		$("td:nth-child(4)").css("backgroundColor","Beige")
		$("td:nth-child(5)").css("backgroundColor","Cornsilk")*/
	
	
	
})