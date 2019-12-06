/*

Conferences attended by Xiao-Nan LU in the academic year of 2014

*/

var confName14=["日本数学会2015年度年会", 
			"研究集会「有限幾何と組合せデザイン」", 
			"The 13th Japan-Korea Workshop on Algebra and Combinatorics", 
			"熊本組合せ論研究集会「代数的デザイン論とその周辺」", 
			"研究集会「実験計画法およびその周辺の組合せ構造2014」", 
			"日本数学会2014年度秋季総合分科会", 
			"The Japanese Conference on Combinatorics and its Applications (JCCA2014)",
			"離散数学とその応用研究集会2014",
			"International Conference on Combinatorics and Graphs -- A Satellite Conference of ICM 2014",
			"2014 Symposium for Young Combinatorialists (2014組合數學新苗研討會)",
			"RIMS共同研究「デザイン、符号、グラフおよびその周辺」",
			"第31回代数的組合せ論シンポジウム",
			"代数的組合せ論「夏の学校2014」",
			"Wilsonを囲む研究会",
			"Japan Conference on Graph Theory and Combinatorics"]
			
var confPlace14=["明治大学", 
			"東京理科大学（神楽坂キャンパス）", 
			"Kyushu Institute of Technology", 
			"熊本大学", 
			"城崎国際アートセンター（兵庫県）", 
			"広島大学", 
			"University of Tsukuba, Japan",
			"新潟総合テレビ ゆめディア",
			"Beijing Jiaotong University, China",
			"National Taiwan Normal University, Taiwan",
			"京都大学",
			"東北大学",
			"秋保リゾートホテルクレセント（宮城県）",
			"四季倶楽部フォレスト箱根（神奈川県）",
			"Nihon University, Japan"]
	
var confData14=["2015年3月21日～24日", 
			"2015年3月6日～7日", 
			"Jan 29-31, 2015", 
			"2015年1月9日～11日", 
			"2014年12月13日～15日", 
			"2014年9月25日～28日", 
			"Aug 25-29, 2014",
			"2014年8月20日～22日",
			"Aug 8-12, 2014",
			"Aug 2-3, 2014",
			"2014年7月23日～25日",
			"2014年6月19日～20日",
			"2014年6月15日～18日",
			"2014年6月12日～15日",
			"May 17-21, 2014"]
			
var confURL14=["http://infoshako.sk.tsukuba.ac.jp/~cam/2016/index.html", 
			"https://sites.google.com/site/fujihararetirement/",
			"http://w3-sogo.kct.ac.jp/~kurihara/jk2015/jk2015.html",
			"",
			"http://www.ist.aichi-pu.ac.jp/~hirao/kinosaki2014/kinosaki2014.html",
			"http://mathsoc.jp/meeting/hiroshima14sept/",
			"http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA14/index.html",
			"http://mathweb.sc.niigata-u.ac.jp/~y-suzuki/",
			"http://iccg.bjtu.edu.cn/",
			"http://2014comb.math.ntnu.edu.tw/index.html",
			"https://sites.google.com/site/rimsdcg2014/",
			"http://www.math.is.tohoku.ac.jp/~combin/ac2014/",
			"http://www.math.is.tohoku.ac.jp/~combin/ac2014/summer_school.html",
			"",
			"http://web.keio.jp/~jcgtc2014/"]
			
var confRmks14=["口頭発表", 
			"", 
			"", 
			"", 
			"世話人，口頭発表",
			"口頭発表",
			"口頭発表",
			"セッション座長",  
			"口頭発表", 
			"口頭発表（招待講演）", 
			"口頭発表",
			"",			
			"",
			"口頭発表", 
			"口頭発表"]
			
			function generateConfList2014(){
				var confName = confName14
				var confPlace = confPlace14
				var confData = confData14
				var confURL = confURL14
				var confRmks = confRmks14
				
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
			
		