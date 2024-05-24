/*
by Xiao-Nan LU
2024/05   
*/

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
