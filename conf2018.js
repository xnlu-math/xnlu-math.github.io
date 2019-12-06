/*

Conferences attended by Xiao-Nan LU in the academic year of 2018

*/

var confName18=["2019年電子情報通信学会総合大会",
"日本数学会2019年度年会",
"第15回組合せ論若手研究集会",
/*"組合せ数学セミナー(CoMaゼミ)",*/
"The 17th Japan-Korea Workshop on Algebra and Combinatorics",
"The Second Vietnam Workshop on Graph Theory and Discrete Geometry",
"東京理科大学 数理・情報科学シンポジウム",
"武蔵野大学 第26回数理工学センター（MCME）セミナー",
"RIMS共同研究「代数的組合せ論と関連する群と代数の研究」",
"The 4th Japan-Sino Symposium on Graph Theory, Combinatorics and Their Applications",
"研究集会「実験計画法ならびに情報数理と関連する組合せ構造2018」",
"The Third International Conference On Group Actions and Transitive Graphs",
"日本数学会2018年度秋季総合分科会",
"The 8th National Conference on Combinatorics and Graph Theory (第八届全国组合数学与图论大会)",
"組合せ論サマースクール2018",
"Conference on Combinatorics and its Applications: In Celebration of Charlie Colbourn's 65th Birthday",
"Japanese Conference on Combinatorics and its Applications (JCCA2018)",
"電子情報通信学会・情報理論研究会（IT）・マルチメディア情報ハイディング・エンリッチメント研究会（EMM）",
"第2回組合せ論・モデル理論セミナー"]
			
var confPlace18=["早稲田大学 (西早稲田キャンパス)",
"東京工業大学",
"慶應義塾大学（矢上キャンパス）",
/*"東京大学（駒場キャンパス）",*/
"University of Tsukuba (Tokyo Campus), Tokyo, Japan",
"Vietnam Institute for Advanced Study in Mathematics, Hanoi, Vietnam",
"東京理科大学（神楽坂キャンパス）",
"武蔵野大学（有明キャンパス）",
"京都大学",
"Tokyo University of Science (Kagurazaka Campus), Tokyo, Japan", 
"神戸大学",
"Southern University of Science and Technology (SUSTech), Shenzhen, China",
"岡山大学",
"Anhui University (安徽大学) and University of Science and Technology of China (中国科学技术大学), Hefei (合肥), China",
"静岡県伊豆の国市", 
"Nanyang Technological University, Singapore",
"Sendai International Center, Sendai, Japan",
"東京工業大学",
"神戸大学"]
			
var confData18=["2019年3月19日〜22日",
"2019年3月17日〜20日",
"2019年2月21日～22日",
/*"2019年2月1日",*/
"Jan 28-29, 2019",
"Jan 9-13, 2019",
"2018年12月26日",
"2018年12月21日",
"2018年12月10日〜13日",
"Nov 2-4, 2018",
"2018年10月31日〜11月3日",
"Oct 12-14, 2018",
"2018年9月24日～27日",
"Aug 23-26, 2018",
"2018年8月8日～11日",
"Jul 14-16, 2018",
"May 20-24, 2018",
"2018年5月17日～18日",
"2018年5月10日"]
			
var confURL18=["https://www.ieice-taikai.jp/2019general/jpn/",
"http://mathsoc.jp/meeting/titech19mar/",
"http://www.comb.math.keio.ac.jp/wakate19/",
/*"http://infoshako.sk.tsukuba.ac.jp/~hachi/coma/",*/
"https://sites.google.com/view/jk2019/",
"https://phmanhthang.wixsite.com/hanoi-secondworkshop",
"https://d-data.jp/htdocs/pdf/event181226.pdf",
"https://www.musashino-u.ac.jp/research/laboratory/mathematical_engineering/seminar_symposium.html",
"http://sphere.w3.kanazawa-u.ac.jp/2018RIMS.html",
"https://www.ed.tus.ac.jp/1416701/japan_sino_combin/",
"https://sites.google.com/view/doe2018/",
"http://math.sustc.edu.cn/conference/10858.html?lang=en",
"http://mathsoc.jp/meeting/okayama18sept/",
"http://ahuweb.ahu.cn/math/index.asp",
"https://sites.google.com/view/cos2018",
"http://www.ntu.edu.sg/home/hjwei/cjc65/index.html",
"http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA18/index.html",
"http://www.ieice.org/ken/program/index.php?tgs_regid=9330f9a761128b6907ef352400e723e5e409a63d09d1f0886fbf4290f402c5c5&tgid=IEICE-IT&lang=",
"https://sites.google.com/site/kcmseminar/2ndseminar"]
			
var confRmks18=["","", "",
/*"",*/
"",
"“Separably existentially closed graphs and block-intersection graphs of designs” (Invited Talk) 1/10",
"",
"",
"",
"Organizing Committee Member",
"世話人",
"",
"“On separably existentially closed graphs” (応用数学分科会，一般講演) 9/24",
"“Locating arrays with error tolerance” (Contributed Talk)（使用言語：中国語）  8/25",
"“Existentially closed graphs arising from combinatorial designs” (一般講演) 8/9",
"“Locating arrays with error-correcting ability” (Contributed Talk) 7/16",
"“On mutually 3-orthogonal diagonal cubes” (Contributed Talk) 5/24 \\\\“Adjacency properties of graphs analogous to the countable random graph, their links with combinatorial designs and arrays” (Special Talk in Mini Symposium: Finite Combinatorics and Infinite Combinatorics) 5/24",
"",""]

			
			function generateConfList2018(){
				var confName = confName18
				var confPlace = confPlace18
				var confData = confData18
				var confURL = confURL18
				var confRmks = confRmks18
				
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
			
		