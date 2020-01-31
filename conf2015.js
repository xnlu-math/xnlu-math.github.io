/*

Conferences attended by Xiao-Nan LU in the academic year of 2015

*/

var confName15=["日本数学会2016年度年会", 
			"ミニ集会「代数的組合せ論とその周辺」", 
			"The 4th Japan-Taiwan Conference on Combinatorics and its Applications (JTCCA)", 
			"RIMS研究集会「有限群とその表現, 頂点作用素代数, 代数的組合せ論の研究」", 
			"2015年度応用数学合同研究集会", 
			"The 39th Australasian Conference on Combinatorial Mathematics and Combinatorial Computing (39ACCMCC)", 
			"研究集会「実験計画法と符号および関連する組合せ構造2015」",
			"International Workshop on Algebraic Combinatorics",
			"日本数学会2015年度秋季総合分科会",
			"RIMS共同研究「デザイン、符号、グラフおよびその周辺」",
			"第32回代数的組合せ論シンポジウム",
			"RIMS研究集会「幾何学・組合せ論に現れる環と代数構造」",
			"第1回代数的組合せ論「仙台勉強会」"]
		
		

var confPlace15=["筑波大学", 
			"東北大学", 
			"Kitakyushu International Conference Center, Japan", 
			"京都大学", 
			"龍谷大学", 
			"University of Queensland, Australia", 
			"箱根水明荘（神奈川県）",
			"Zhejiang University, China",
			"京都産業大学",
			"京都大学",
			"石川県文教会館",
			"京都大学",
			"東北大学"]

var confData15=["2016年3月16日～19日", 
			"2016年3月8日～3月9日", 
			"Mar 5-7, 2016",
			"2016年1月5日～8日", 
			"2015年12月17日～19日", 
			"Dec 7-11, 2015", 
			"2015年12月1日～3日", 
			"Sept 18-23, 2015",
			"2015年9月13日～16日",
			"2015年7月8日～10日",
			"2015年6月22日～24日",
			"2015年6月9日～12日",
			"2015年5月8日～9日"]
			
var confURL15=["http://mathsoc.jp/meeting/tsukuba16mar/",
			"http://www.math.is.tohoku.ac.jp/~mharada/Sendai2016/",
			"https://sites.google.com/site/jtcca2016/",
			"http://www.math.is.tohoku.ac.jp/~shima/program2015.pdf",
			"http://www-mmc.es.hokudai.ac.jp/CAM/2015/index.html",
			"http://39accmcc.smp.uq.edu.au/",
			"",
			"http://www.math.zju.edu.cn/~ggn/dcc/conference/ZJU-Conference.html",
			"http://mathsoc.jp/meeting/kyoto-sangyo15sept/",
			"https://sites.google.com/site/rimsdcg2015/home",
			"http://sphere.s.kanazawa-u.ac.jp/32algcomb.html",
			"http://www.math.sci.osaka-u.ac.jp/~s-murai/meetings/AlgebraicStructures.html",
			"http://www.math.is.tohoku.ac.jp/~mharada/School2015/"]
			
var confRmks15=["口頭発表(3/18)", 
			"", 
			"スタッフ", 
			"", 
			"口頭発表(12/18)",
			"口頭発表(12/10)",
			"口頭発表(12/3)",
			"口頭発表(9/21)",  
			"口頭発表(9/16)", 
			"", 
			"",
			"口頭発表(6/10)",			
			""]
			
			function generateConfList2015(){
				var confName = confName15
				var confPlace = confPlace15
				var confData = confData15
				var confURL = confURL15
				var confRmks = confRmks15
				
				document.write("<ol reversed>")
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
			
		