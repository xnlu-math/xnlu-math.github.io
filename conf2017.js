/*

Conferences attended by Xiao-Nan LU in the academic year of 2017

*/

var confName=["第３４回代数的組合せ論シンポジウム", 
				"JCDCG^3 2017 (20th Japan Conference on Discrete and Computational Geometry, Graphs, and Games)",
				"日本数学会2017年度秋季総合分科会"]
			
var confPlace=["小山市立中央公民館・小山高専",
				"Tokyo University of Science (Kagurazaka)",
				"山形大学"]
			
var confData=["6月29日〜7月1日",
				"Aug 29 - Sept 1, 2017", 
				"9月11日～14日"]
			
var confURL=["",
				"http://www.alg.cei.uec.ac.jp/itohiro/JCDCGG/",
				"http://mathsoc.jp/meeting/yamagata17sept/"]
			
var confRmks=["", "", ""]
			
			function generateConfList2017(){
				document.write("<ol>")
				for (var i=0; i<confName.length; i++){
					document.write("<li>")
					if (confURL[i].length > 0)
						document.write('<a target="_blank" href="' + confURL[i] + '">' + confName[i] + "</a>, ")
					else
						document.write(confName[i]+", ")
					document.write(confPlace[i]+", ")
					document.write(confData[i]+".")
					if (confRmks[i].length > 0)
						document.write("<br>・・・" + confRmks[i] + ".")
					document.write("</li>")
				}
				document.write("</ol>")
			}
			
		