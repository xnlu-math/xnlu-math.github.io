/*

Conferences attended by Xiao-Nan LU in the academic year of 2017

*/

var confName=["第３４回代数的組合せ論シンポジウム", 
				"Japanese Conference on Combinatorics and its Applications (JCCA-2017)・離散数学とその応用研究集会2017",
				"JCDCG^3 2017 (20th Japan Conference on Discrete and Computational Geometry, Graphs, and Games)",
				"日本数学会2017年度秋季総合分科会"]
			
var confPlace=["小山市立中央公民館・小山高専", 
				"熊本大学", 
				"Tokyo University of Science (Kagurazaka)",
				"山形大学"]
			
var confData=["2017年6月15日〜17日",
				"2017年8月20日〜22日",
				"Aug 29 - Sept 1, 2017", 
				"2017年9月11日～14日"]
			
var confURL=["",
				"http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA-2017/index.html",
				"http://www.alg.cei.uec.ac.jp/itohiro/JCDCGG/",
				"http://mathsoc.jp/meeting/yamagata17sept/"]
			
var confRmks=["", "", "", ""]
			
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
			
		