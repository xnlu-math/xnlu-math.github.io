/*
by Xiao-Nan LU
2024/05   
*/

async function getConfData(n_year) {
    try {
        // Construct the variable names based on the year suffix
        const yearSuffix = n_year.toString().slice(-2);
        const confNameVar = `confName${yearSuffix}`;
        const confPlaceVar = `confPlace${yearSuffix}`;
        const confDataVar = `confData${yearSuffix}`;
        const confURLVar = `confURL${yearSuffix}`;
        const confRmksVar = `confRmks${yearSuffix}`;

        // Import the conference data for the specified year
        const yearData = await import(`./conf${n_year}.js`);

        // Extract the data arrays from the imported module using the constructed variable names
        const {
            [confNameVar]: confName,
            [confPlaceVar]: confPlace,
            [confDataVar]: confData,
            [confURLVar]: confURL,
            [confRmksVar]: confRmks
        } = yearData;

        // Return the conference data object
        return {
            confName,
            confPlace,
            confData,
            confURL,
            confRmks
        };
    } catch (error) {
        console.error(`Error importing conference data for year ${n_year}:`, error);
        return {};
    }
}

async function generateConfList(n_year){
    // Wait for the conference data to be fetched
    const { confName, confPlace, confData, confURL, confRmks } = await getConfData(n_year);

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

