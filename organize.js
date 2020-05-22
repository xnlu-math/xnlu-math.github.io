/*

Organized Workshops by Xiao-Nan LU

*/


var confPref=[
			"",
			"<del>Organizing Committee Member of</del>",
			"",
			"Organizing Committee Member of",
			"",
			"Organizing Committee Member of",
			"",
			""]
			
var confSuf=[
			", 組織委員",
			"",
			", ミニシンポジウム「符号と暗号」 世話人",
			"",
			", 世話人",
			"",
			"世話人",
			"世話人"]

var confName=[
			"Japanese Conference on Combinatorics and its Applications (JCCA-2020)・離散数学とその応用研究集会2020 (DMIA2020)・スペクトラルグラフ理論および周辺領域第9回研究集会 (SGT9)",
			"<del>the 6th Japan-Taiwan Conference on Combinatorics and its Applications (JTCCA)</del>",
			"Japanese Conference on Combinatorics and its Applications (JCCA-2019)・離散数学とその応用研究集会2019 (DMIA2019)・スペクトラルグラフ理論および周辺領域第8回研究集会 (SGT8)",
			"the 4th Japan-Sino Symposium on Graph Theory, Combinatorics and Their Applications",
			"研究集会「実験計画法ならびに情報数理と関連する組合せ構造2018」",
			"the 5th Taiwan-Japan Conference on Combinatorics and its Applications (5th TJCCA)",
			"研究集会「実験計画法と符号および関連する組合せ構造2017」",
			"研究集会「実験計画法およびその周辺の組合せ構造2014」"]
			
var confPlace=[
			"<del>高知大学</del> オンライン開催予定",
			"<del>Kumamoto-Jo Hall, Kumamoto, Japan</del>",
			"都城工業高等専門学校",
			"Tokyo University of Science（東京理科大学）, Japan",
			"神戸大学",
			"National Taiwan Normal University（國立臺灣師範大學）, Taiwan",
			"湯河原町（神奈川県）",
			"城崎国際アートセンター（兵庫県）"]
	
var confData=[
			"2020年8月18～20日", 
			"<del>March 25-27, 2020</del>. Cancelled",
			"2019年8月27日～29日",
			"Nov 2-4, 2018",
			"2018年10月31日～11月3日", 
			"Mar 28-30, 2018",
			"2017年11月23日～25日", 
			"2014年12月13日～15日"]
			
var confURL=[
			"",
			"https://sites.google.com/site/jtcca2020/",
			"https://sites.google.com/site/jccadmiasg2019/",
			"https://www.ed.tus.ac.jp/1416701/japan_sino_combin/",
			"https://sites.google.com/view/doe2018/",
			"https://sites.google.com/view/tjcc2018/",
			"https://sites.google.com/view/yugawara2017",
			"http://www.ist.aichi-pu.ac.jp/~hirao/kinosaki2014/kinosaki2014.html"]
			
var confRmks=[
			"ミニシンポジウム「符号と暗号」世話人：繆瑩, <u>盧暁南</u>, 佐竹翔平",
			"日本側組織委員：千葉周也, 籾原幸二, 城本啓介, 神保雅一, <u>盧暁南</u>, 繆瑩, 三嶋美和子, 太田克弘; <br>　台湾側組織委員：陳宏賓, 傅恆霖",
			"ミニシンポジウム「符号と暗号」世話人：繆瑩, <u>盧暁南</u>",
			"日本側組織委員：江川嘉美, 加納幹雄, 古谷倫貴, 川谷元, <u>盧暁南</u>, 趙智賢; 中国側組織委員：闫桂英",
			"世話人：<u>盧暁南</u>, 佐竹翔平, 澤正憲",
			"日本側学術委員：神保雅一, 太田克弘, 三嶋美和子; 日本側組織委員：<u>盧暁南</u>, 平尾将剛; <br>　台湾側学術委員：游森棚, 傅恆霖, 黃國卿, 李國偉, 董立大, 葉永南; 台湾側組織委員：游森棚, 徐泰煒, 張飛黃, 郭君逸, 林延輯, 張惠蘭, 陳宏賓, 賴欣豪, 李渭天, 潘志實",
			"世話人：地嵜頌子, 宮本暢子, 松原和樹, <u>盧暁南</u>",
			"世話人：繆瑩, 澤正憲, 平尾将剛, 山田紘頌, <u>盧暁南</u>"]
			
			function generateOrgList(){
				document.write("<ol reversed>")
				for (var i=0; i<confName.length; i++){
					document.write("<li>")
					document.write(confPref[i]+" ")
					if (confURL[i].length > 0)
						document.write('<a target="_blank" href="' + confURL[i] + '">' + confName[i] + "</a>")
					else
						document.write(confName[i])
					document.write(confSuf[i]+", ")
					document.write(confPlace[i]+", ")
					document.write(confData[i]+".")
					if (confRmks[i].length > 0)
						document.write("<br>〔" + confRmks[i] + "〕.")
					document.write("</li>")
				}
				document.write("</ol>")
			}
			
		