/*
by Xiao-Nan LU
2024/05   
*/

async function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function getConfData(n_year) {
    try {
        const yearSuffix = n_year.toString().slice(-2);
        const modulePath = `./confs/conf${n_year}.js`;

        // Dynamically load the script
        await loadScript(modulePath);

        // Extract the data arrays from the global scope
        const confName = window[`confName${yearSuffix}`];
        const confPlace = window[`confPlace${yearSuffix}`];
        const confData = window[`confData${yearSuffix}`];
        const confURL = window[`confURL${yearSuffix}`];
        const confRmks = window[`confRmks${yearSuffix}`];

        if (!confName || !confPlace || !confData || !confURL || !confRmks) {
            console.error(`Data for year ${n_year} is incomplete or missing.`);
            return {};
        }

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

async function generateConfList(n_year) {
    const {
        confName,
        confPlace,
        confData,
        confURL,
        confRmks
    } = await getConfData(n_year);

    if (!confName || !confPlace || !confData || !confURL || !confRmks) {
        console.error(`Data for year ${n_year} is incomplete or missing.`);
        return;
    }

    document.write("<ol reversed>");
    for (let i = 0; i < confName.length; i++) {
        document.write("<li>");
        if (confURL[i].length > 0) {
            document.write('<a target="_blank" href="' + confURL[i] + '">' + confName[i] + "</a>, ");
        } else {
            document.write(confName[i] + ", ");
        }
        document.write(confPlace[i] + ", ");
        document.write(confData[i] + ".");
        if (confRmks[i].length > 0) {
            const tmp_lc = confRmks[i].indexOf("\\\\");
            if (tmp_lc > 0) {
                const tmp_str1 = confRmks[i].substring(0, tmp_lc - 1);
                document.write("<br>・・・" + tmp_str1 + ".");
                const tmp_str2 = confRmks[i].substring(tmp_lc + 2);
                document.write("<br>・・・" + tmp_str2 + ".");
            } else {
                document.write("<br>・・・" + confRmks[i] + ".");
            }
        }
        document.write("</li>");
    }
    document.write("</ol>");
}

async function generateYearConfList(from_year, to_year) {
    for (let i = to_year; i >= from_year; i--) {
        const str_div_id = "divconf" + String(i);
        //document.write(`<div style="cursor:hand" onclick="isHidden('${str_div_id}')"><h3>${i}年度 (April ${i} - March ${i + 1})</h3></div>`);
        document.write(`<div style="cursor:hand" onclick="isHidden('` + str_div_id + `')"><h3>` + String(i) + `年度 (April ` + String(i) + ` - March ` + String(i+1) + `) </h3></div>`);
		if (i == to_year) {
            document.write(`<div id="${str_div_id}">`);
        } else {
            document.write(`<div id="${str_div_id}" style="display:none">`);
        }
        await generateConfList(i);
        document.write(`</div>`);
    }
}
