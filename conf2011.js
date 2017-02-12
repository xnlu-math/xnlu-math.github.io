/*

Conferences attended by Xiao-Nan LU in the academic year of 2011, 2012, and 2013

*/




var confName=["日本数学会2014年度年会",
			"研究集会「組合せ論とその実験計画法への応用」",
			"JSPS-DST Asian Academic Seminar 2013 -- Discrete Mathematics & its Applications", 
			"The 11th International Conference on Finite Fields and their Applications (Fq11)",
			"Workshop on Algebraic Graph Theory, Spectral Graph Theory and Related Topics",
			"The 2nd Japan-Taiwan Conference on Combinatorics and its Applications (2nd JTCCA)",
			"RIMS共同研究 「デザイン、符号、グラフおよびその周辺」",
			"研究集会「離散数理構造とその応用」"]
			
var confPlace=["学習院大学", "熊本県阿蘇郡南小町瀬の本高原", "University of Tokyo, Japan", "Otto-von-Guericke University Magdeburg, Germany",  
			"Nagoya University, Japan", "Nagoya University, Japan", "京都大学数理解析研究所",
			"名古屋大学多元数理科学研究科"]
			
var confData=["2014年3月15日～18日", "2013年11月13日～15日", "Nov 3-10, 2013", "Jul 22-26, 2013", 
			"Jan 5-6, 2013", "Nov 10-12, 2012", "2012年7月17日～19日",
			"2011年11月18日～19日"]
			
var confURL=["http://mathsoc.jp/meeting/gakushuin14mar/", 
			"", 
			"http://faculty.ms.u-tokyo.ac.jp/users/aas2013/",  
			"http://www.math.uni-magdeburg.de/~fq11/index.html",
			"https://sites.google.com/site/tetsuzitagt2013e/",
			"",
			"https://sites.google.com/a/lab.twcu.ac.jp/rims_dcg2012/",
			""]
			
var confRmks=["口頭発表", "口頭発表", "口頭発表", "口頭発表", 
				"", "ポスター発表", "",
				""]
			
			function generateConfList2011(){
				document.write("<ol>")
				for (var i=confName.length-1; i<confName.length; i++){
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
			
			function generateConfList2012(){
				document.write("<ol>")
				for (var i=confName.length-4; i<confName.length-1; i++){
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
			
			
			function generateConfList2013(){
				document.write("<ol>")
				for (var i=0; i<4; i++){
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
		