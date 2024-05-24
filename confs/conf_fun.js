/*
by Xiao-Nan LU
2020/3   
*/

function generateConfList(n_year){
	switch (n_year){
		case 2024:
			var confName = confName24;
			var confPlace = confPlace24;
			var confData = confData24;
			var confURL = confURL24;
			var confRmks = confRmks24;
			break;
		case 2023:
			var confName = confName23;
			var confPlace = confPlace23;
			var confData = confData23;
			var confURL = confURL23;
			var confRmks = confRmks23;
			break;
		case 2022:
			var confName = confName22;
			var confPlace = confPlace22;
			var confData = confData22;
			var confURL = confURL22;
			var confRmks = confRmks22;
			break;
		case 2021:
			var confName = confName21;
			var confPlace = confPlace21;
			var confData = confData21;
			var confURL = confURL21;
			var confRmks = confRmks21;
			break;
		case 2020:
			var confName = confName20;
			var confPlace = confPlace20;
			var confData = confData20;
			var confURL = confURL20;
			var confRmks = confRmks20;
			break;
		case 2019:
			var confName = confName19;
			var confPlace = confPlace19;
			var confData = confData19;
			var confURL = confURL19;
			var confRmks = confRmks19;
			break;
		case 2018:
			var confName = confName18;
			var confPlace = confPlace18;
			var confData = confData18;
			var confURL = confURL18;
			var confRmks = confRmks18;
			break;
		case 2017:
			var confName = confName17;
			var confPlace = confPlace17;
			var confData = confData17;
			var confURL = confURL17;
			var confRmks = confRmks17;
			break;
		case 2016:
			var confName = confName16;
			var confPlace = confPlace16;
			var confData = confData16;
			var confURL = confURL16;
			var confRmks = confRmks16;
			break;
		case 2015:
			var confName = confName15;
			var confPlace = confPlace15;
			var confData = confData15;
			var confURL = confURL15;
			var confRmks = confRmks15;
			break;
		case 2014:
			var confName = confName14;
			var confPlace = confPlace14;
			var confData = confData14;
			var confURL = confURL14;
			var confRmks = confRmks14;
			break;
		case 2013:
			var confName = confName13;
			var confPlace = confPlace13;
			var confData = confData13;
			var confURL = confURL13;
			var confRmks = confRmks13;
			break;
		case 2012:
			var confName = confName12;
			var confPlace = confPlace12;
			var confData = confData12;
			var confURL = confURL12;
			var confRmks = confRmks12;
			break;
		case 2011:
			var confName = confName11;
			var confPlace = confPlace11;
			var confData = confData11;
			var confURL = confURL11;
			var confRmks = confRmks11;
			break;
	}

	document.write("<ol reversed>")
	for (var i=0; i<confName.length; i++){
		document.write("<li>")
		if (confURL[i].length > 0)
			document.write('<a target="_blank" href="' + confURL[i] + '">' + confName[i] + "</a>, ");
		else
			document.write(confName[i]+", ");
		document.write(confPlace[i]+", ");
		document.write(confData[i]+".");
		if (confRmks[i].length > 0){
			var tmp_lc = confRmks[i].indexOf("\\\\");
			if  (tmp_lc > 0) {
				tmp_str1 = confRmks[i].substring(0, tmp_lc - 1);
				document.write("<br>・・・" + tmp_str1 + ".");
				tmp_str2 = confRmks[i].substring(tmp_lc+2);
				document.write("<br>・・・" + tmp_str2 + ".");
			}
			else
				document.write("<br>・・・" + confRmks[i] + ".");
		}
		document.write("</li>");
	}
	document.write("</ol>");
}


function generateYearConfList(from_year, to_year){
	for (var i = to_year; i >= from_year; i--){
		str_div_id = "divconf" + String(i);
		document.write(`<div style="cursor:hand" onclick="isHidden('` + str_div_id + `')"><h3>` + String(i) + `年度 (April ` + String(i) + ` - March ` + String(i+1) + `) </h3></div>`);
		if (i == to_year)
			document.write(`<div id="` + str_div_id + `">`);
		else
			document.write(`<div id="` + str_div_id + `" style="display:none">`);
		generateConfList(i);
		document.write(`</div>`);
	}

}

