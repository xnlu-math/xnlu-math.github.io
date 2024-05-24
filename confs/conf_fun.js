/*
by Xiao-Nan LU
2020/3   
*/

<<<<<<< HEAD
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function getConfData(n_year) {
    const yearSuffix = n_year.toString().slice(-2);
    const modulePath = `./confs/conf${n_year}.js`;

    try {
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
=======
function generateConfList(n_year){
	switch (n_year){
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
>>>>>>> parent of 454896d (refactor conf js)

    if (!confName || !confPlace || !confData || !confURL || !confRmks) {
        console.error(`Data for year ${n_year} is incomplete or missing.`);
        return;
    }

    const list = document.createElement('ol');
    list.setAttribute('reversed', '');

    for (let i = 0; i < confName.length; i++) {
        const listItem = document.createElement('li');
        if (confURL[i].length > 0) {
            const link = document.createElement('a');
            link.target = "_blank";
            link.href = confURL[i];
            link.textContent = confName[i];
            listItem.appendChild(link);
            listItem.appendChild(document.createTextNode(', '));
        } else {
            listItem.textContent = `${confName[i]}, `;
        }
        listItem.appendChild(document.createTextNode(`${confPlace[i]}, ${confData[i]}.`));
        
        if (confRmks[i].length > 0) {
            const remarks = confRmks[i].split('\\\\');
            remarks.forEach(remark => {
                const remarkElement = document.createElement('br');
                remarkElement.textContent = `・・・${remark}.`;
                listItem.appendChild(remarkElement);
            });
        }

        list.appendChild(listItem);
    }

    document.body.appendChild(list);
}

/*
async function generateYearConfList(from_year, to_year){
	for (var i = to_year; i >= from_year; i--){
		str_div_id = "divconf" + String(i);
		document.write(`<div style="cursor:hand" onclick="isHidden('` + str_div_id + `')"><h3>` + String(i) + `年度 (April ` + String(i) + ` - March ` + String(i+1) + `) </h3></div>`);
		if (i == to_year)
			document.write(`<div id="` + str_div_id + `">`);
		else
			document.write(`<div id="` + str_div_id + `" style="display:none">`);
		await generateConfList(i);
		document.write(`</div>`);
	}

}
*/
/*
async function generateYearConfList(from_year, to_year) {
    for (let i = to_year; i >= from_year; i--) {
        const div = document.createElement('div');
        const heading = document.createElement('h3');
        heading.style.cursor = 'pointer';
        heading.textContent = `${i}年度 (April ${i} - March ${i + 1})`;
        heading.onclick = () => {
            const content = document.getElementById(`divconf${i}`);
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        };
        div.appendChild(heading);

        const contentDiv = document.createElement('div');
        contentDiv.id = `divconf${i}`;
        contentDiv.style.display = i === to_year ? '' : 'none';
        div.appendChild(contentDiv);

        document.body.appendChild(div);

        await generateConfList(i);
    }
}
*/

async function generateYearConfList(from_year, to_year) {
    for (let i = to_year; i >= from_year; i--) {
        const div = document.createElement('div');
        const heading = document.createElement('h3');
        heading.style.cursor = 'pointer';
        heading.textContent = `${i}年度 (April ${i} - March ${i + 1})`;
        heading.onclick = () => {
            const content = document.getElementById(`divconf${i}`);
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        };
        div.appendChild(heading);

        const contentDiv = document.createElement('div');
        contentDiv.id = `divconf${i}`;
        contentDiv.style.display = i === to_year ? '' : 'none';
        div.appendChild(contentDiv);

        document.body.appendChild(div);

        // Generate and append conference data to the contentDiv for each year
        const confData = await generateConfList(i);
        for (let j = 0; j < confData.length; j++) {
            const listItem = document.createElement('li');
            // Append conference data to the listItem as needed
            // Example: listItem.textContent = confData[j];
            contentDiv.appendChild(listItem);
        }
    }
}



// Export the function to be used in the HTML file
window.generateYearConfList = generateYearConfList;
