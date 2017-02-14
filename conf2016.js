/*

Conferences attended by Xiao-Nan LU in the academic year of 2016

*/

var confName=["日本数学会2017年度年会", 
			"第2回代数的組合せ論「仙台勉強会」",
			"第13回組合せ論若手研究集会",
			"科研費シンポジウム「統計的モデリングと計算アルゴリズムの数理と展開」",
			"JST CREST AIPチャレンジシンポジウム「ビッグデータ利活用のための基盤構築とその応用」",
			"2016年度応用数学合同研究集会", 
			"東北大学情報科学研究科 純粋・応用数学研究センター 第77回組合せ論セミナー", 
			"研究集会「実験計画法と符号および関連する組合せ構造 2016」", 
			"スペクトラルグラフ理論および周辺領域第5回研究集会", 
			"National Conference on Combinatorial Designs 2016 (2016年全国组合设计会议)", 
			"The 3rd Istanbul Design Theory, Graph Theory and Combinatorics Workshop", 
			"The Japanese Conference on Combinatorics and its Applications (JCCA 2016)",
			"シンポジューム「数理科学の新しい地平 (New Horizon of Mathematical Sciences)」"]
			
var confPlace=["首都大学東京",
			"東北大学", 
			"慶應義塾大学（矢上キャンパス）",
			"名古屋大学",
			"名古屋工業大学",
			"龍谷大学", 
			"東北大学", 
			"秋保リゾートホテルクレセント（宮城県）", 
			"神戸大学", 
			"Zhejiang University, China", 
			"Koç University, Turkey", 
			"Kyoto University, Japan",
			"理化学研究所（和光キャンパス）"]
			
var confData=["2017年3月24日～27日",
			"2017年3月7日～8日",
			"2017年3月1日～2日",
			"2017年2月18日〜19日",
			"2017年2月16日〜17日",
			"2016年12月15日～17日", 
			"2016年12月9日", 
			"2016年11月28日～30日", 
			"2016年11月26日〜27日", 
			"Jul 8-10, 2016", 
			"Jun 13-17, 2016", 
			"May 21-25, 2016",
			"2016年4月28日"]
			
var confURL=["http://mathsoc.jp/meeting/tmu17mar/",
			"http://www.math.is.tohoku.ac.jp/~mharada/School2017/index.html",
			"http://www.comb.math.keio.ac.jp/wakate17/",
			"https://sites.google.com/site/kibanastatisticalmodeling2017/home",
			"https://sites.google.com/site/bigdataworkshopnagoya201702/home",
			"http://infoshako.sk.tsukuba.ac.jp/~cam/2016/index.html", 
			"http://www.math.is.tohoku.ac.jp/~combin/", 
			"http://www.math.is.tohoku.ac.jp/~mharada/Akiu2016/", 
			"http://www.math.is.tohoku.ac.jp/~htanaka/docs/sgt5/", 
			"http://www.math.zju.edu.cn/~ggn/dcc/conference2/ZJU-Conference.html", 
			"http://portal.ku.edu.tr/~eyazici/Research/Design2016/index.htm", 
			"http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA16/", 
			"http://indico2.riken.jp/indico/event/ithes-math"]
			
var confRmks=["","","","","",
			"口頭発表(12/17)", 
			"口頭発表(12/9)", 
			"セッション座長", 
			"", 
			"口頭発表(7/11)", 
			"口頭発表(6/14)", 
			"口頭発表(5/24)",
			""]
			
			function generateConfList2016(){
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
			
		