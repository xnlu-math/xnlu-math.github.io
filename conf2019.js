/*

Conferences attended by Xiao-Nan LU in the academic year of 2019

*/

var confName19=[
	"2020 Taipei International Workshop on Combinatorics and Graph Theory",
	"電子情報通信学会・情報理論研究会（IT）・信号処理研究会（SIP）・無線通信システム研究会（RCS）",
	"第11回 暗号及び情報セキュリティと数学の相関ワークショップ (CRISMATH 2019)",
	"RIMS共同研究「代数的組合せ論と関連する群と代数の研究」",
	"2019年度応用数学合同研究集会",
	"研究集会「実験計画法と符号および関連する組合せ構造」2019",
	"日本数学会2019年度秋季総合分科会",
	"JCCA-2019・離散数学とその応用研究集会2019・スペクトラルグラフ理論および周辺領域 第8回研究集会",
	"The 11th Hungarian-Japanese Symposium on Discrete Mathematics and Its Applications"
]
			
var confPlace19=[
	"Institute of Mathematics, Academia Sinica, Taipei, Taiwan",
	"広島市青少年センター",
"東京大学本郷キャンパス",
"京都大学",
"龍谷大学瀬田キャンパス",
"湯田温泉（山口県）",
"金沢大学",
"都城工業高等専門学校（宮崎県）", 
"University of Tokyo (Hongo Campus), Tokyo, Japan"
]
			
var confData19=[
	"Feb 6-8, 2020",
	"2020年1月23日〜24日",
"2019年12月27日",
"2019年12月16日〜19日",
"2019年12月12日〜14日",
"2019年11月14日〜16日",
"2019年9月17日～9月20日",
"2019年8月27日～29日",
"May 27-30, 2019"
/*"2018年5月17日～18日",*/
]
			
var confURL19=[
	"https://www.math.sinica.edu.tw/www/file_upload/conference/202002Comb/Comb.html",
	"https://www.ieice.org/ken/program/index.php?tgs_regid=0a96b5760f81cf3ba0c590264a4bf9bfd296a9e900905aee73bee06d69dbab54&tgid=IEICE-IT",
"http://crypto.mist.i.u-tokyo.ac.jp/events/crismath2019.html",
"https://hnozaki.jimdo.com/conference/rims2019/",
"http://infoshako.sk.tsukuba.ac.jp/~cam/2019/index.html",
"http://manau.jp/onsn2019/",
"https://mathsoc.jp/meeting/kanazawa19sept/",
"https://sites.google.com/site/jccadmiasg2019/",
"https://www.opt.mist.i.u-tokyo.ac.jp/hj2019/"
]
			
var confRmks19=["","","","","","グループテスト入門（招待講演）", "", "ミニシンポジウム「符号と暗号」世話人", ""
/*"“Locating arrays with error-correcting ability” (Contributed Talk) 7/16",*/]

			
			function generateConfList2019(){
				var confName = confName19
				var confPlace = confPlace19
				var confData = confData19
				var confURL = confURL19
				var confRmks = confRmks19
				
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
			
		