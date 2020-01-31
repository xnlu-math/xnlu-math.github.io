/*

Conferences attended by Xiao-Nan LU in the academic year of 2017

*/

var confName17=["The 5th Taiwan-Japan Conference on Combinatorics and its Applications (TJCCA)", 
"日本数学会2018年度年会",
"Finite Groups, VOAs, and Related Topics 2018",
"第３回代数的組合せ論「仙台勉強会」～離散構造解析を中心として～",
"Hadamard matrices and their applications",
"5th International Combinatorics Conference (5ICC)",
"研究集会「実験計画法と符号および関連する組合せ構造2017」",
"日本数学会2017年度秋季総合分科会",
"JCDCG^3 2017 (20th Japan Conference on Discrete and Computational Geometry, Graphs, and Games)",
"Japanese Conference on Combinatorics and its Applications (JCCA-2017)・離散数学とその応用研究集会2017",
"電子情報通信学会・情報理論研究会（IT）",
"第３４回代数的組合せ論シンポジウム", 
"シンポジウム「数学，アルゴリズム，計算機科学，そしてデータ科学」",
"日本品質管理学会第113回研究発表会"]
			
var confPlace17=["National Taiwan Normal University（國立臺灣師範大學）, Taiwan",
"東京大学（駒場キャンパス）",
"University of Tsukuba",
"東北大学",
"東北大学",
"Monash University, Australia",
"湯河原（神奈川県）",
"山形大学",
"Tokyo University of Science (Kagurazaka Campus)",
"熊本大学", 
"千葉大学",
"小山市立中央公民館・小山高専", 
"東京工業大学",
"日本科学技術連盟・東高円寺ビル"]
			
var confData17=["Mar 28-30, 2018",
"2018年3月18日～21日",
"Mar 12-13, 2018",
"2018年3月5日～9日",
"2018年1月26日～27日", 
"Dec 4-9, 2017", 
"2017年11月23日～25日", 
"2017年9月11日～14日",
"Aug 29 - Sept 1, 2017", 
"2017年8月17日〜19日",
"2017年7月13日〜14日",
"2017年6月15日〜17日",
"2017年6月10日",
"2017年5月27日"]
			
var confURL17=["https://sites.google.com/view/tjcc2018/",
"http://mathsoc.jp/meeting/tokyo18mar/",
"https://sites.google.com/view/fgvoart2018/home",
"http://www.math.is.tohoku.ac.jp/~mharada/School2018/",
"http://www.math.is.tohoku.ac.jp/~mharada/Hadamard2018/",
"http://www.monash.edu/5icc/index.html",
"https://sites.google.com/view/yugawara2017",
"http://mathsoc.jp/meeting/yamagata17sept/",
"http://www.jcdcgg.u-tokai.ac.jp/",
"http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA-2017/index.html",
"http://www.ieice.org/ken/program/index.php?tgs_regid=5f73a68bf5efbd38a6b90322a0b0b90b644ccc0778cf9d130e334dac44ef6c33&tgid=IEICE-IT&lang=",
"https://sites.google.com/view/2017symposium-algcombin",
"http://www.dais.is.tohoku.ac.jp/~toku60/",
"http://www.jsqc.org/q/news/events/113_program.pdf"]
			
var confRmks17=["Organizing Committee Member \\\\“Locating arrays with error-correcting ability” (Invited Talk) 3/30",
"",
"",
"",
"",
"“Locating arrays with error-correcting ability” (Contributed Talk) 12/4",
"世話人", 
"“Locating arrays with error-correcting ability”（統計数学分科会，一般講演） 9/12",
"“Public key cryptosystems using magic cubes” (Contributed Talk) 8/31",
"“On separably existentially closed graphs” (一般講演) 8/17", 
"", "", "", ""]

			
			function generateConfList2017(){
				var confName = confName17
				var confPlace = confPlace17
				var confData = confData17
				var confURL = confURL17
				var confRmks = confRmks17
				
				document.write("<ol reversed>")
				for (var i=0; i<confName.length; i++){
					document.write("<li>")
					if (confURL[i].length > 0)
						document.write('<a target="_blank" href="' + confURL[i] + '">' + confName[i] + "</a>, ")
					else
						document.write(confName[i]+", ")
					document.write(confPlace[i]+", ")
					document.write(confData[i]+".")
					if (confRmks[i].length > 0){
						var tmp_lc = confRmks[i].indexOf("\\\\")
						if  (tmp_lc > 0) {
							tmp_str1 = confRmks[i].substring(0, tmp_lc - 1)
							document.write("<br>・・・" + tmp_str1 + ".")
							tmp_str2 = confRmks[i].substring(tmp_lc+2)
							document.write("<br>・・・" + tmp_str2 + ".")
						}
						else
							document.write("<br>・・・" + confRmks[i] + ".")
					}
					document.write("</li>")
				}
				document.write("</ol>")
			}
			
		