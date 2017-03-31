/*

Conferences attended by Xiao-Nan LU in the academic year of 2017

*/

var confName=["未定"]
			
var confPlace=[""]
			
var confData=[""]
			
var confURL=[""]
			
var confRmks=[""]
			
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
			
		