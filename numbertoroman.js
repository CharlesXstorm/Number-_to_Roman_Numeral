

var sheet = document.getElementById("blnk");

function convertToRoman(num) {
 const word1 = {1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'};
 const word2 = {1:'X',2:'XX',3:'XXX',4:'XL',5:'L',6:'LX',7:'LXX',8:'LXXX',9:'XC'};
 const word3 = {1:'C',2:'CC',3:'CCC',4:'CD',5:'D',6:'DC',7:'DCC',8:'DCCC',9:'CM'};
 const word4 = {1:'M',2:'MM',3:'MMM'};

 const inp = String(num).split('');

 switch(inp.length){

 	case 1:
 		return word1[Number(inp[0])];
 	case 2:
 		if (inp[1] == '0'){
 			return word2[Number(inp[0])];
 		}else{
 			return word2[Number(inp[0])] + word1[Number(inp[1])]
 		}
 	case 3:
 		if (inp[1] == '0' && inp[2]=='0'){
 			return word3[Number(inp[0])];
 		}else if (inp[1] == '0') {
 			return word3[Number(inp[0])] + word1[Number(inp[2])];
 		}else if (inp[2] == '0') {
 			return word3[Number(inp[0])] + word2[Number(inp[1])];
 		}else{
 			return word3[Number(inp[0])] + word2[Number(inp[1])] + word1[Number(inp[2])];
 		}

 	case 4:
 		if (inp[1] == '0' && inp[2]=='0' && inp[3]=='0'){
 			return word4[Number(inp[0])];
 		}else if (inp[1] == '0' || inp[2]=='0'){

 			if (inp[1] == '0' && inp[2]=='0'){
 				return word4[Number(inp[0])] + word1[Number(inp[3])];
 			}else if (inp[1] == '0'){
 				if (inp[3] == '0'){
 					return word4[Number(inp[0])] + word2[Number(inp[2])];
 				}else{
 					return word4[Number(inp[0])] + word2[Number(inp[2])] + word1[Number(inp[3])];
 				}
 			}else{
 				if (inp[3] == '0'){
 					return word4[Number(inp[0])] + word3[Number(inp[1])];
 				}else{
 					return word4[Number(inp[0])] + word3[Number(inp[1])] + word1[Number(inp[3])];
 				}
 			}

 		}else{
 			return word4[Number(inp[0])] + word3[Number(inp[1])] + word2[Number(inp[2])] + word1[Number(inp[3])];
 		}

 }

}




sheet.innerHTML = convertToRoman(3999);





















