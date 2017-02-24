/*

Organized Workshops by Xiao-Nan LU in the academic year of 2014

*/


var confPref=["Co-organizer of"]

var confName=["研究集会「実験計画法およびその周辺の組合せ構造2014」"]
			
var confPlace=["城崎国際アートセンター（兵庫県）"]
	
var confData=["2014年12月13日～15日"]
			
var confURL=["http://www.ist.aichi-pu.ac.jp/~hirao/kinosaki2014/kinosaki2014.html"]
			
var confRmks=[""]
			
			function generateOrgList(){
				document.write("<ol>")
				for (var i=0; i<confName.length; i++){
					document.write("<li>")
					document.write(confPref[i]+" ")
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
			
		