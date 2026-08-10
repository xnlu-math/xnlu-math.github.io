/*
 * Conference data and rendering for Xiao-Nan LU's homepage.
 *
 * To add a new academic year, add a key near the top of CONFERENCES_BY_YEAR.
 * confs.html automatically shows the newest available year.
 */

const CONFERENCES_BY_YEAR = {
	"2026": [
		{
			"name": "The International Symposium on Information Theory and Its Applications (ISITA) 2026",
			"place": "Okinawa Convention Center, Okinawa",
			"date": "November 1-4, 2026",
			"url": "https://isita.ieice.org/2026/",
			"remarks": "Contributed talk ?/?"
		},
		{
			"name": "九州大学IMI共同利用「エクスパンダーグラフにまつわる数理科学と応用2」",
			"place": "九州大学 伊都キャンパス・Zoom (オンライン参加)",
			"date": "9月7日～11日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-21453/"
		},
		{
			"name": "日本数学会2026年度秋季総合分科会",
			"place": "神戸大学",
			"date": "9月1日～4日",
			"url": "https://www.mathsoc.jp/activity/meeting/kobe26sept/",
			"remarks": "“有理的区間デザインの明示的構成法について II” (応用数学分科会) 9/1"
		},
		{
			"name": "The 9th International Conference on Econometrics and Statistics (EcoSta 2026)",
			"place": "Ryukoku University, Kyoto",
			"date": "August 8-10, 2026",
			"url": "https://www.cmstatistics.org/EcoSta2026/",
			"remarks": "“D-optimality of multi-level circulant almost orthogonal arrays” 8/8"
		},
		{
			"name": "九州大学IMI共同利用「マトロイド理論と暗号理論の交差点（離散構造・符号・情報理論・計算)」",
			"place": "九州大学 伊都キャンパス・Zoom",
			"date": "8月3日〜4日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-20894/",
			"remarks": "招待講演 “組合せデザイン・グループテスト行列とマトロイドとの接点” 8/3"
		},
		{
			"name": "東北大学組合せ論セミナー",
			"place": "東北大学・Google Meet (オンライン参加)",
			"date": "6月3日",
			"url": "https://www.math.is.tohoku.ac.jp/~combin/"
		},
		{
			"name": "大阪組合せ論セミナー",
			"place": "大阪公立大学文化交流センター",
			"date": "5月22日",
			"url": "http://sv2-mat.ist.osaka-u.ac.jp/~higashitani/seminar.html"
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "京都テルサ（京都市）",
			"date": "5月21日～22日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=bc5288095d3cf7a27f7646a81e9fdd6bd78bdba48a49af8c89a765677de5353f&tgid=IEICE-IT"
		}
	],
	"2025": [
		{
			"name": "日本数学会2026年度年会",
			"place": "東京理科大学 神楽坂キャンパス",
			"date": "3月23日～26日",
			"url": "https://www.mathsoc.jp/activity/meeting/tus26mar/index.html",
			"remarks": "“Completely uniform nested pairings of Carmichael’s Steiner quadruple systems on projective lines” (応用数学分科会) 3/24"
		},
		{
			"name": "2026 早稲田離散数理研究集会",
			"place": "早稲田大学 西早稲田キャンパス",
			"date": "3月22日",
			"url": "https://sites.google.com/view/waseda-dm"
		},
		{
			"name": "Algebraic Combinatorics Mini-Workshop: Honoring the Mathematical Journey of Professor Akihiro Munemasa",
			"place": "Tohoku University",
			"date": "March 20 - 21, 2026",
			"url": "https://sites.google.com/view/alg-comb-miniworkshop2026/home"
		},
		{
			"name": "第136回人工知能基本問題研究会",
			"place": "京都大学 楽友会館・Zoom (オンライン参加)",
			"date": "3月18日～19日",
			"url": "https://sig-fpai.org/past/fpai136.html"
		},
		{
			"name": "第22回組合せ論若手研究集会",
			"place": "慶應義塾大学 矢上キャンパス",
			"date": "2月19日～20日",
			"url": "https://www.comb.math.keio.ac.jp/wakate26/"
		},
		{
			"name": "第9回数理新人セミナー",
			"place": "名古屋大学",
			"date": "2月17日～20日",
			"url": "https://sites.google.com/view/math-graduate/MATHSCI-FRESHMAN-SEMINAR/2026?authuser=0"
		},
		{
			"name": "2025年度応用数学合同研究集会",
			"place": "龍谷大学 瀬田キャンパス",
			"date": "12月18日～20日",
			"url": "https://www.mathsoc.jp/section/appliedmath/CAM/2025/"
		},
		{
			"name": "量子誤り訂正理論 若手ワークショップ",
			"place": "名古屋大学",
			"date": "12月17日～19日",
			"url": "https://sites.google.com/view/qecminiworkshopjp2025/home"
		},
		{
			"name": "研究集会「デザインと符号および関連する組合せ構造2025」",
			"place": "熊本市国際交流会館",
			"date": "12月13日～14日",
			"url": "https://sites.google.com/view/design-code-comb-2025/",
			"remarks": "世話人 & 学生発表5件"
		},
		{
			"name": "第134回人工知能基本問題研究会 (SIG-FPAI)",
			"place": "慶應義塾大学 日吉キャンパス・Zoom (オンライン参加)",
			"date": "12月1日",
			"url": "https://sig-fpai.org/past/fpai134.html"
		},
		{
			"name": "大阪組合せ論セミナー",
			"place": "大阪公立大学文化交流センター",
			"date": "10月31日",
			"url": "http://sv2-mat.ist.osaka-u.ac.jp/~higashitani/seminar.html",
			"remarks": "招待講演 “代数的手法による組合せデザインの構成法について”"
		},
		{
			"name": "RIMS共同研究「数論・幾何・ランダムネスとその展開」",
			"place": "京都大学数理解析研究所・Zoom (オンライン参加)",
			"date": "10月27日～31日",
			"url": "https://sites.google.com/view/ngr2025/jp"
		},
		{
			"name": "組合せ論サマースクール2025",
			"place": "大分県別府市 ふれあい広場 サザンクロス",
			"date": "9月27日～30日",
			"url": "https://sites.google.com/view/cos2025/",
			"remarks": "入門講義（招待講演）“組合せテスト入門 〜極値組合せ論・組合せデザイン・符号の交差点〜” 9/29"
		},
		{
			"name": "日本数学会2025年度秋季総合分科会",
			"place": "名古屋大学",
			"date": "9月16日～19日",
			"url": "https://www.mathsoc.jp/activity/meeting/nagoya25sept/",
			"remarks": "“Completely uniform nested pairings in Boolean Steiner quadruple systems” (応用数学分科会) 9/16"
		},
		{
			"name": "九州大学IMI共同利用「エクスパンダーグラフにまつわる数理科学と応用」",
			"place": "九州大学 伊都キャンパス・Zoom (オンライン参加)",
			"date": "8月25日～27日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-17970/"
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications 2025 離散数学とその応用研究集会2025",
			"place": "広島YMCA 国際文化センター・Zoom (オンライン参加)",
			"date": "8月19日～21日",
			"url": "https://sites.google.com/view/jcca-dmia-2025/home"
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "東京工業高等専門学校・Zoom (オンライン参加)",
			"date": "8月5日～6日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=0245ed58df1f0a21cfc1acafe0217cc1f8c9f80fba062f68e530176e22219c3e&tgid=IEICE-IT"
		},
		{
			"name": "大阪組合せ論セミナー",
			"place": "大阪公立大学文化交流センター",
			"date": "8月1日",
			"url": "http://sv2-mat.ist.osaka-u.ac.jp/~higashitani/seminar.html"
		},
		{
			"name": "The 26th Conference of the International Linear Algebra Society",
			"place": "National Sun Yat-sen University (國立中山大學), Kaohsiung, Taiwan",
			"date": "June 23 - 27, 2025",
			"url": "https://ilas2025.tw/",
			"remarks": "Contributed talk at MS25: Enumerative/Algebraic Combinatorics and Matrices: “Ternary circulant almost orthogonal arrays with (near) D-optimality and good binary sequence pairs” 6/26"
		},
		{
			"name": "2025年度人工知能学会全国大会",
			"place": "大阪国際会議場（グランキューブ大阪）＋ オンライン",
			"date": "5月27日～30日",
			"url": "https://www.ai-gakkai.or.jp/jsai2025/"
		},
		{
			"name": "New Developments in Combinatorics and Information Science (組合せ論と情報科学の新展開)",
			"place": "京都大学数理解析研究所",
			"date": "5月21日～23日",
			"url": "https://sites.google.com/view/rims-math-info-2025/"
		}
	],
	"2024": [
		{
			"name": "日本数学会2025年度年会",
			"place": "早稲田大学",
			"date": "3月18日～21日",
			"url": "https://www.mathsoc.jp/activity/meeting/waseda25mar/index.html",
			"remarks": "“Existentially closed critical Cayley graphs” 3/18"
		},
		{
			"name": "2025早稲田離散数理研究集会",
			"place": "早稲田大学",
			"date": "3月16日～17日",
			"url": "https://sites.google.com/view/waseda-dm"
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "大阪大学中之島センター",
			"date": "3月5日～6日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=8451807f7254aa941b2649ca5a232e06e19e40d93e835088d0426b3970092cba"
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "海峡メッセ下関・Zoom (オンライン参加)",
			"date": "1月29日～30日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=888ee1cbec09a76efd8dc131b42018cdd5440254183a559e0b306ef581f93632"
		},
		{
			"name": "スペクトラルグラフ理論および周辺領域 第13回研究集会",
			"place": "早稲田大学・Zoom (オンライン参加)",
			"date": "1月26日～28日",
			"url": "https://hajimetanaka.org/docs/sgt13/"
		},
		{
			"name": "NII共同研究「解集合プログラミングの実用化に向けた並列解法に関する研究開発」第3回全体会合",
			"place": "高松センタービル",
			"date": "12月23日～24日",
			"url": "https://nabesima.github.io/nii2024/#3RD"
		},
		{
			"name": "2024年度応用数学合同研究集会",
			"place": "龍谷大学 (瀬田キャンパス)",
			"date": "12月5日～7日",
			"url": "https://www.mathsoc.jp/section/appliedmath/CAM/2024/index.html",
			"remarks": "“Cop number and capture time of incidence graphs of combinatorial designs” 12/7"
		},
		{
			"name": "The International Symposium on Information Theory and Its Applications (ISITA) 2024",
			"place": "National Taiwan University of Science and Technology (國立臺灣科技大學), Taipei, Taiwan",
			"date": "Nov 10 - 13, 2024",
			"url": "https://isita.ieice.org/2024/",
			"remarks": "“Improved Quasi-Random Designs with Constant Pool Sizes for Group Testing” 11/12"
		},
		{
			"name": "NII共同研究「解集合プログラミングの実用化に向けた並列解法に関する研究開発」第2回全体会合",
			"place": "名古屋大学",
			"date": "10月28日～29日",
			"url": "https://nabesima.github.io/nii2024/#2ND"
		},
		{
			"name": "研究集会「情報・計算・暗号の融合による新しい数理基盤の創出」",
			"place": "JR博多シティとZoomによるハイブリッド開催 (オンライン参加)",
			"date": "9月25日～27日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-14912/"
		},
		{
			"name": "日本応用数理学会 2024年度年会",
			"place": "京都大学",
			"date": "9月14日～16日",
			"url": "https://jsiam.org/annual2024/"
		},
		{
			"name": "電子情報通信学会 2024年度ソサイエティ大会",
			"place": "日本工業大学",
			"date": "9月10日～13日",
			"url": "https://www.ieice.org/jpn_r/activities/taikai/society/2024/"
		},
		{
			"name": "The 26th Japan Conference on Discrete and Computational Geometry, Graphs, and Games (JCDCG^3)",
			"place": "Tokyo University of Science (Kagurazaka Campus)",
			"date": "Sept 10 - 12, 2024",
			"url": "https://sites.google.com/view/jcdcg2024",
			"remarks": "“Cop number and capture time on incidence graphs of Steiner 2-designs” 9/11"
		},
		{
			"name": "日本数学会 2024年度秋季総合分科会",
			"place": "大阪大学 (豊中キャンパス)",
			"date": "9月3日～6日",
			"url": "https://www.mathsoc.jp/activity/meeting/osaka24sept/index.html"
		},
		{
			"name": "第８回日本組合せゲーム理論研究集会",
			"place": "名古屋大学・オンライン",
			"date": "8月23日～24日",
			"url": "https://sites.google.com/view/jcgtw/%E7%A0%94%E7%A9%B6%E9%9B%86%E4%BC%9A"
		},
		{
			"name": "RIMS 共同研究「組合せ最適化セミナー」",
			"place": "京都大学",
			"date": "8月6日～8日",
			"url": "https://www.kurims.kyoto-u.ac.jp/coss/coss2024/coss2024.html"
		},
		{
			"name": "第7回金沢暗号理論勉強会",
			"place": "石川県政しいのき迎賓館・オンライン (オンライン参加)",
			"date": "7月26日～27日",
			"url": "https://sites.google.com/view/kanazawacryptgraphy2024/"
		},
		{
			"name": "NII共同研究「解集合プログラミングの実用化に向けた並列解法に関する研究開発」第1回全体会合",
			"place": "松本商工会議所(長野県松本市)",
			"date": "6月26日～27日",
			"url": "https://nabesima.github.io/nii2024/"
		},
		{
			"name": "2024年度人工知能学会全国大会",
			"place": "アクトシティ浜松(静岡県浜松市)・オンライン",
			"date": "5月28日～31日",
			"url": "https://www.ai-gakkai.or.jp/jsai2024/"
		},
		{
			"name": "公開講演会「プライバシー保護とデータサイエンス」",
			"place": "統計数理研究所・オンライン (オンライン参加)",
			"date": "5月24日",
			"url": "https://www.ism.ac.jp/openhouse/2024/index.html"
		}
	],
	"2023": [
		{
			"name": "NII共同研究「SAT技術を用いた組合せ遷移問題の解法に関する研究」第4回全体会合",
			"place": "長良川国際会議場 (岐阜市)",
			"date": "3月28日〜29日",
			"url": "https://www.xnlu.info.gifu-u.ac.jp/nii2023_4/",
			"remarks": "ローカルオーガナイザー"
		},
		{
			"name": "日本数学会2024年度年会",
			"place": "大阪公立大学 杉本キャンパス",
			"date": "3月17日〜20日",
			"url": "https://www.mathsoc.jp/activity/meeting/omu24mar/index.html",
			"remarks": "“グループテスト・組合せテストにおける組合せ構造について” (応用数学分科会，特別講演) 3/17"
		},
		{
			"name": "スペクトラルグラフ理論および周辺領域 第12回研究集会",
			"place": "熊本大学とオンライン (Zoom) によるハイブリッド開催",
			"date": "1月25日〜27日",
			"url": "https://hajimetanaka.org/docs/sgt12/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "東北大学 青葉記念会館とオンライン (Zoom) によるハイブリッド開催",
			"date": "1月18日〜19日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=5192842b30069b548b52fea1c95faf8beb6c2d3e54141d4d0430eedcb54a821f&tgid=IT"
		},
		{
			"name": "暗号及び情報セキュリティと数学の相関ワークショップ (CRISMATH 2023)",
			"place": "九州大学 (伊都キャンパス) とZoomによるハイブリッド開催",
			"date": "12月26日〜27日",
			"url": "https://imi.kyushu-u.ac.jp/~lmdac/event/crismath2023.html"
		},
		{
			"name": "2023年度応用数学合同研究集会",
			"place": "龍谷大学 (瀬田キャンパス)",
			"date": "12月14日〜16日",
			"url": "https://www.mathsoc.jp/section/appliedmath/CAM/2023/index.html",
			"remarks": "“Error Tolerance of Paley Matrices as Detecting Arrays” 12/16"
		},
		{
			"name": "NII共同研究「SAT技術を用いた組合せ遷移問題の解法に関する研究」第3回全体会合",
			"place": "神戸大学",
			"date": "12月6日〜7日",
			"url": ""
		},
		{
			"name": "研究集会「実験計画法と関連する組合せ構造および統計教育」",
			"place": "広島大学教育学部 (東広島キャンパス)",
			"date": "11月24日〜25日",
			"url": "https://sites.google.com/view/hiroshima2023/",
			"remarks": "“巡回準直交配列と関連する組合せデザイン” 11/24"
		},
		{
			"name": "早稲田大学組合せ論セミナー",
			"place": "早稲田大学 (西早稲田キャンパス)",
			"date": "11月17日",
			"url": "https://sites.google.com/site/tmiezakij/algcombseminar",
			"remarks": "“非適応型グループテストのための組合せ構造について”"
		},
		{
			"name": "電子情報通信学会 情報セキュリティ研究会 (ISEC)",
			"place": "サテライトキャンパスひろしま・Zoomによるハイブリッド開催",
			"date": "11月9日〜10日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=e98d0a7b406d133e218141718f22750b8875eae182b40fe1652955bb883eb9fe&tgid=IEICE-ISEC"
		},
		{
			"name": "日本数学会 2023年度秋季総合分科会",
			"place": "東北大学 (川内北キャンパス)",
			"date": "9月20日〜23日",
			"url": "https://www.mathsoc.jp/activity/meeting/tohoku23sept/index.html",
			"remarks": "“An algebraic sufficient condition for a circulant almost orthogonal array to be D-optimal” (統計数学分科会) 9/23"
		},
		{
			"name": "電子情報通信学会 2023年度ソサイエティ大会",
			"place": "名古屋大学 (東山キャンパス)",
			"date": "9月12日〜15日",
			"url": "https://www.ieice.org/jpn_r/activities/taikai/society/2023/index.html",
			"remarks": "企画セッション「組合せ論と情報理論 ー最新動向と展望ー」オーガナイザー \\\\“複数種類の陽性検体のための非適応型グループテスト: 組合せ構造と事後確率推定” (企画セッション) 9/14"
		},
		{
			"name": "ワークショップ「エクスパンダーグラフの新しい構成手法の確立とその応用2」",
			"place": "九州大学 (伊都キャンパス) とZoomによるハイブリッド開催",
			"date": "9月4日〜5日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-9243/"
		},
		{
			"name": "NII共同研究「SAT技術を用いた組合せ遷移問題の解法に関する研究」第2回全体会合",
			"place": "アクトシティ浜松 研修交流センター (浜松市)",
			"date": "8月31日〜9月1日",
			"url": ""
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications 2023 (離散数学とその応用研究集会2023)",
			"place": "愛知教育大学とオンライン (Zoom) によるハイブリッド開催",
			"date": "8月28日〜30日",
			"url": "https://sites.google.com/view/jcca-dmia-2023/",
			"remarks": "ミニシンポジウム「符号・暗号・人工知能」世話人"
		},
		{
			"name": "第8回豊田理研異分野若手交流会",
			"place": "ミッドランドホール (名古屋市) ",
			"date": "8月7日〜8日",
			"url": "https://www.toyotariken.jp/exchange/2023%e5%b9%b4%e5%ba%a6%e9%96%8b%e5%82%ac%e5%a0%b1%e5%91%8a/",
			"remarks": "ポスター発表"
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "湘南工科大学",
			"date": "8月3日〜4日",
			"url": "https://ken.ieice.org/ken/program/index.php?mode=program&tgs_regid=2ff100216935555f3c8d48a678a463715fb99fc0d542b624e78a3f8db9d78875&tgid=IT",
			"remarks": "“SAT技術を用いた複数画像からなる視覚暗号の構成” (発表者: 田光宏章) 8/4"
		},
		{
			"name": "The 10th Slovenian International Conference on Graph Theory",
			"place": "Kranjska Gora, Slovenia",
			"date": "June 18-24, 2023",
			"url": "https://sicgt.si/",
			"remarks": "“Circulant almost orthogonal arrays and related combinatorial designs” (Contributed Talk in Minisymposium ‘Combinatorial Designs and their Applications’) 6/22"
		},
		{
			"name": "NII共同研究「SAT技術を用いた組合せ遷移問題の解法に関する研究」第1回全体会合",
			"place": "神戸大学",
			"date": "5月22日〜23日",
			"url": ""
		},
		{
			"name": "電子情報通信学会 情報理論研究会 (IT)",
			"place": "京都大学 楽友会館とオンライン (Zoom) によるハイブリッド開催",
			"date": "5月11日〜12日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=48be74bf3b9b592380289aa37d74ab8abf968167bbde5359cb324bc0fdd88bc7&tgid=IEICE-IT"
		}
	],
	"2022": [
		{
			"name": "日本数学会2023年度年会",
			"place": "中央大学理工学部",
			"date": "2023年3月15日～18日",
			"url": "https://www.mathsoc.jp/activity/meeting/chuo23mar/index.html",
			"remarks": "“Covering arrays guaranteeing a passing test” (3/16)"
		},
		{
			"name": "NII共同研究「数理最適化手法を取り入れた新しい SAT 解法」第3回全体会合",
			"place": "神戸大学",
			"date": "2023年3月13日～14日",
			"url": ""
		},
		{
			"name": "日本応用数理学会第19回研究部会連合発表会",
			"place": "岡山理科大学（ハイブリッド）",
			"date": "2023年3月8日～10日",
			"url": "https://jsiam.org/union2023",
			"remarks": "“二種類の変種を検出するためのグループテストにおける組合せ構造” (3/9)"
		},
		{
			"name": "第19回組合せ論若手研究集会",
			"place": "慶應義塾大学矢上キャンパス",
			"date": "2023年2月17日～18日",
			"url": "http://www.comb.math.keio.ac.jp/wakate23/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）・信号処理研究会（SIP）・無線通信システム研究会（RCS）",
			"place": "前橋テルサ（ハイブリッド）",
			"date": "2023年1月24日～25日",
			"url": "https://ken.ieice.org/ken/program/index.php?tgs_regid=0799a272a2a8049c0a69d3bc94a694ca608208a0ac044fe9dbdf86353fd391b1&tgid=IEICE-IT"
		},
		{
			"name": "研究集会「直交デザインと関連する組合せ論」",
			"place": "明治大学中野キャンパス (Zoom配信あり)",
			"date": "2023年1月21日～22日",
			"url": "https://sites.google.com/view/kojimomihara/Workshop/Orthogonal-Designs-and-Related-Combinatorics",
			"remarks": "“Circulant almost orthogonal arrays and their statistical optimality” (1/21)"
		},
		{
			"name": "44th Australasian Combinatorics Conference (44ACC)",
			"place": "Zoom (Delivered Online from University of Otago, New Zealand)",
			"date": "Dec 12-15, 2022",
			"url": "https://acc44.cspages.otago.ac.nz/"
		},
		{
			"name": "Online workshop “Developments in Combinatorics”",
			"place": "Zoom (Delivered Online from Institute for Basic Science (IBS), Korea)",
			"date": "Nov 28-29, 2022",
			"url": "https://www.ibs.re.kr/ecopro/online-workshop-developments-in-combinatorics/"
		},
		{
			"name": "武蔵野大学数理工学シンポジウム2022",
			"place": "武蔵野大学有明キャンパス (Zoom配信あり)",
			"date": "2022年11月16日～17日",
			"url": "https://www.musashino-u.ac.jp/research/laboratory/mathematical_engineering/seminar_symposium.html#anchor2"
		},
		{
			"name": "ワークショップ「高度化する暗号技術と数学的技法の進展」",
			"place": "九州大学マス・フォア・インダストリ研究所 (Zoom配信あり)",
			"date": "2022年11月7日～9日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-6068/"
		},
		{
			"name": "IEEE Information Theory Workshop (ITW) 2022",
			"place": "Mumbai, India (with virtual delivery)",
			"date": "Nov 1-2 (online) & 6-9 (in-person), 2022",
			"url": "https://itw2022.in/"
		},
		{
			"name": "Colloquium on Combinatorial Designs (组合设计青年论坛)",
			"place": "腾讯会议",
			"date": "2022年9月24日",
			"url": "https://yue-zhou-ovgu.github.io/Colloquium/"
		},
		{
			"name": "「組合せ遷移」 第5回公開シンポジウム",
			"place": "TKP札幌ビジネスセンター赤れんが前 (Zoom配信あり)",
			"date": "2022年9月22日～23日",
			"url": "https://core.dais.is.tohoku.ac.jp/report/event/detail/---id-136.html"
		},
		{
			"name": "ワークショップ「機械学習への組合せ論的アプローチ」",
			"place": "九州大学伊都キャンパス (Zoom配信あり)",
			"date": "2022年9月20日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-5765/"
		},
		{
			"name": "NII共同研究「数理最適化手法を取り入れた新しい SAT 解法」第2回全体会合",
			"place": "山梨大学",
			"date": "2022年9月8日～9日",
			"url": "",
			"remarks": "ローカルオーガナイザー"
		},
		{
			"name": "九州大学IMI暗号学セミナー",
			"place": "Zoom",
			"date": "2022年9月6日, 13:30-15:00",
			"url": "https://www.imi.kyushu-u.ac.jp/seminars/view/3045"
		},
		{
			"name": "ワークショップ「エクスパンダーグラフの新しい構成手法の確立とその応用」",
			"place": "九州大学伊都キャンパス (Zoom配信あり)",
			"date": "2022年8月22日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-4988/"
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications (JCCA-2022)・離散数学とその応用研究集会2022",
			"place": "成蹊大学 (Zoom配信あり)",
			"date": "2022年8月17日～19日",
			"url": "https://sites.google.com/view/jcca-dmia-2022/",
			"remarks": "ミニシンポジウム「符号・暗号・人工知能」世話人"
		},
		{
			"name": "ワークショップ「耐量子計算機暗号と量子情報の数理」",
			"place": "九州大学伊都キャンパス (Zoom配信あり)",
			"date": "2022年8月1日～4日",
			"url": "https://joint.imi.kyushu-u.ac.jp/post-5123/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）",
			"place": "岡山理科大学 (Zoom配信あり)",
			"date": "2022年7月21日～22日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=b94df07222a5c4c7c6e5dfed26a4d37f70f33fa1ad565c8a503a2c2b5e8b2b95&tgid=IEICE-IT"
		},
		{
			"name": "The 2022 IEEE International Symposium on Information Theory (ISIT)",
			"place": "Aalto University, Finland",
			"date": "June 26-July 1, 2022",
			"url": "https://www.isit2022.org/",
			"remarks": "“Error-Correcting Locating Arrays for Interaction Fault Location in Combinatorial Testing”"
		},
		{
			"name": "第38回代数的組合せ論シンポジウム",
			"place": "Zoom",
			"date": "2022年6月16日～18日",
			"url": "https://sites.google.com/view/2022-symposium-algcombin"
		},
		{
			"name": "2022年度 人工知能学会全国大会",
			"place": "国立京都国際会館 (Zoom配信あり)",
			"date": "2022年6月14日～17日",
			"url": "https://www.ai-gakkai.or.jp/jsai2022/"
		},
		{
			"name": "Stinson66 - New Advances in Designs, Codes and Cryptography",
			"place": "The Fields Institute, Toronto (with virtual delivery)",
			"date": "June 13-17, 2022",
			"url": "http://www.fields.utoronto.ca/activities/21-22/Stinson66"
		},
		{
			"name": "International Conference on Coding and Cryptography 2022",
			"place": "Zoom (Delivered Online from Shanghai Jiao Tong University)",
			"date": "May 27-29, 2022",
			"url": "https://iisec.sjtu.edu.cn/info/1076/1170.htm"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）・マルチメディア情報ハイディング・エンリッチメント研究会（EMM）",
			"place": "岐阜大学 サテライトキャンパス (Zoom配信あり)",
			"date": "2022年5月17日～18日",
			"url": ""
		},
		{
			"name": "NII共同研究「数理最適化手法を取り入れた新しい SAT 解法」第1回全体会合",
			"place": "名古屋大学",
			"date": "2022年5月12日～13日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=e3fe4e4e507fe427114d46ad78260f19bd61c15f7e210ca2f5af1dc2f50bfb3b&tgid=IEICE-IT"
		},
		{
			"name": "早稲田整数論セミナー",
			"place": "Zoom",
			"date": "2022年4月22日, 16:30-18:00",
			"url": "http://www.waseda.jp/sem-wnt/"
		},
		{
			"name": "Catch-all Mathematical Colloquium of Japan",
			"place": "Zoom",
			"date": "2022年4月11日, 10:00-12:00",
			"url": "https://sites.google.com/view/catch-allmathematicscolloquium/schedule?authuser=0"
		}
	],
	"2021": [
		{
			"name": "日本数学会2022年度年会",
			"place": "<del>埼玉大学</del> オンライン",
			"date": "2022年3月28日～31日",
			"url": "https://www.mathsoc.jp/activity/meeting/saitama22mar/index.html",
			"remarks": "“講演題目：Almost external difference families via cyclotomy” (応用数学分科会) 3/28"
		},
		{
			"name": "Colloquium on Combinatorial Designs (组合设计青年论坛)",
			"place": "腾讯会议",
			"date": "2022年3月26日",
			"url": "https://yue-zhou-ovgu.github.io/Colloquium/",
			"remarks": "Invited talk: “Circulant almost orthogonal arrays: statistical optimality and related combinatorial structures”"
		},
		{
			"name": "2022年電子情報通信学会総合大会",
			"place": "Zoom",
			"date": "2022年3月15日～18日",
			"url": "https://www.ieice-taikai.jp/2022general/jpn/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）・情報セキュリティ研究会（ISEC）・ワイドバンドシステム研究会（WBS）・高信頼制御通信研究会（RCC）",
			"place": "Zoom",
			"date": "2022年3月10日～11日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=5f15027e3cce7282dc4d4617ed75d5ad7b45a303e384dd98b4c1987044db70c6&tgid=IEICE-IT"
		},
		{
			"name": "WCC 2022: The Twelfth International Workshop on Coding and Cryptography",
			"place": "Zoom (Delivered Online from University of Rostock, Germany)",
			"date": "March 7-11, 2022",
			"url": "https://www.wcc2022.uni-rostock.de/en/"
		},
		{
			"name": "第16回組合せゲーム・パズル研究集会",
			"place": "Zoom",
			"date": "2022年3月7日～8日",
			"url": "http://www.alg.cei.uec.ac.jp/itohiro/Games/Game220307.html"
		},
		{
			"name": "第18回組合せ論若手研究集会",
			"place": "ハイブリット形式 (慶應義塾大学+Zoom)",
			"date": "2022年2月17日～18日",
			"url": "http://www.comb.math.keio.ac.jp/wakate22/"
		},
		{
			"name": "人工知能学会 第119回人工知能基本問題研究会・情報処理学会 第186回アルゴリズム研究会",
			"place": "Zoom",
			"date": "2022年1月27日～28日",
			"url": "https://sig-fpai.org/past/fpai119.html"
		},
		{
			"name": "Workshop on Algebraic Combinatorics",
			"place": "WebEx (Delivered Online from Academia Sinica, Taiwan)",
			"date": "January 24-26, 2022",
			"url": "https://www.math.sinica.edu.tw/www/file_upload/conference/202201Alg/index.html"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）・信号処理研究会（SIP）・無線通信システム研究会（RCS）",
			"place": "<del>サンポートホール高松</del>・Zoom",
			"date": "2022年1月20日～21日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=2fe1e4949931112c9b600c2aa141a14f63b9a5ff3b337c63008591099b15ddae&tgid=IEICE-IT"
		},
		{
			"name": "2021年度応用数学合同研究集会",
			"place": "Zoom",
			"date": "2021年12月17日～19日",
			"url": "https://infoshako.sk.tsukuba.ac.jp/~cam/2021/"
		},
		{
			"name": "43rd Australasian Combinatorics Conference",
			"place": "Zoom (Delivered Online from the University of Melbourne)",
			"date": "December 13-17, 2021",
			"url": "https://43acc.ms.unimelb.edu.au/",
			"remarks": "Contributed talk: “Almost external difference families via cyclotomy”"
		},
		{
			"name": "実験計画法とその周辺・オンラインセミナー",
			"place": "Zoom (愛知県立大学より配信)",
			"date": "2021年12月10日, 11:30-12:30",
			"url": "http://www.ist.aichi-pu.ac.jp/~hirao/design_seminar.html"
		},
		{
			"name": "Colloquium on Combinatorial Designs (组合设计青年论坛)",
			"place": "腾讯会议",
			"date": "2021年12月5日, 8:30-16:30 (UTC+8)",
			"url": "https://yue-zhou-ovgu.github.io/Colloquium/"
		},
		{
			"name": "信息安全中的编码与数论问题研讨会",
			"place": "腾讯会议 (南京师范大学)",
			"date": "2021年12月3日～4日",
			"url": ""
		},
		{
			"name": "2021北京编码密码研讨会",
			"place": "腾讯会议 (中国科学院信息工程研究所)",
			"date": "2021年11月27日～28日",
			"url": ""
		},
		{
			"name": "実験計画法とその周辺・オンラインセミナー",
			"place": "Zoom",
			"date": "2021年11月25日, 10:30-12:00",
			"url": "http://www.ist.aichi-pu.ac.jp/~hirao/design_seminar.html"
		},
		{
			"name": "Catch-all Mathematical Colloquium of Japan",
			"place": "Zoom",
			"date": "2021年11月24日, 15:00-17:00",
			"url": "https://sites.google.com/view/catch-allmathematicscolloquium/schedule?authuser=0"
		},
		{
			"name": "実験計画法とその周辺・オンラインセミナー",
			"place": "Zoom (愛知県立大学より配信)",
			"date": "2021年11月4日, 13:00-14:30",
			"url": "http://www.ist.aichi-pu.ac.jp/~hirao/design_seminar.html"
		},
		{
			"name": "大阪大学AI・データ利活用研究会 第21回",
			"place": "Zoom",
			"date": "2021年10月22日, 18:15-20:15",
			"url": "http://www-mmds.sigmath.es.osaka-u.ac.jp/structure/activity/ai_data.php?id=24"
		},
		{
			"name": "Catch-all Mathematical Colloquium of Japan",
			"place": "Zoom",
			"date": "2021年10月21日, 9:00-11:00",
			"url": "https://sites.google.com/view/catch-allmathematicscolloquium/past-event/2021-october?authuser=0"
		},
		{
			"name": "The 2021 IEEE Information Theory Workshop (ITW2021)",
			"place": "Zoom",
			"date": "October 17-21, 2021",
			"url": "http://itw2021.org/"
		},
		{
			"name": "Colloquium on Combinatorial Designs (组合设计青年论坛)",
			"place": "腾讯会议",
			"date": "2021年10月17日, 8:30-12:00 (UTC+8)",
			"url": "https://yue-zhou-ovgu.github.io/Colloquium/"
		},
		{
			"name": "第62回大阪組合せ論セミナー",
			"place": "Zoom (大阪梅田より配信)",
			"date": "2021年10月16日, 13:30-17:00",
			"url": "http://sv2-mat.ist.osaka-u.ac.jp/~higashitani/seminar.html"
		},
		{
			"name": "CMSA (Combinatorial Mathematics Society of Australasia) Seminar",
			"place": "Zoom",
			"date": "September 29, 2021, 17:00 AEST",
			"url": "http://combinatorics-australasia.org/seminars.html#Kamcev"
		},
		{
			"name": "IEICE ICT PIONEERS WEBINARシリーズ～第15弾～",
			"place": "Zoom",
			"date": "2021年9月22日, 13:30-15:00",
			"url": "https://www.ieice.org/jpn_r/activities/webinar/pioneers/20210922.html"
		},
		{
			"name": "日本数学会2021年度秋季総合分科会",
			"place": "Zoom (千葉大学主催)",
			"date": "2021年9月14日～17日",
			"url": "http://www.mathsoc.jp/activity/meeting/chiba21sept/",
			"remarks": "講演題目：Searching for edges in a multi-partite graph (応用数学分科会) 9/14"
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications 2021・離散数学とその応用研究集会2021",
			"place": "Zoom (慶應義塾大学三田キャンパスより配信)",
			"date": "2021年8月17日～19日",
			"url": "https://sites.google.com/view/jcca-dmia-2021/"
		},
		{
			"name": "名古屋組合せ論セミナー (実験計画法とその周辺・オンラインセミナーと共同開催)",
			"place": "Zoom",
			"date": "2021年7月19日, 14:30-16:00",
			"url": "http://www.ist.aichi-pu.ac.jp/~hirao/nagoya_seminar.html",
			"remarks": "講演題目：SATソルバーの組合せデザイン問題への応用事例"
		},
		{
			"name": "Colloquium on Combinatorial Designs (组合设计青年论坛)",
			"place": "腾讯会议",
			"date": "2021年7月10日, 14:30-18:00 (UTC+8)",
			"url": "https://yue-zhou-ovgu.github.io/Colloquium/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）",
			"place": "Zoom",
			"date": "2021年7月8日～9日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=ffc5d04f41fcd91fced6f6b914da72b809b2f575219ea2d7818f28af6f6e54b3&tgid=IEICE-IT"
		},
		{
			"name": "28th British Combinatorial Conference",
			"place": "Zoom (Delivered Online from Durham University)",
			"date": "July 5-9, 2021",
			"url": "https://bcc2021.webspace.durham.ac.uk/"
		},
		{
			"name": "第37回代数的組合せ論シンポジウム",
			"place": "Zoom",
			"date": "2021年6月14日～16日",
			"url": "https://sites.google.com/view/2021-algcomb/"
		},
		{
			"name": "2021年度 人工知能学会全国大会",
			"place": "Zoom",
			"date": "2021年6月8日～11日",
			"url": "https://www.ai-gakkai.or.jp/jsai2021/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）・マルチメディア情報ハイディング・エンリッチメント研究会（EMM）",
			"place": "Zoom",
			"date": "2021年5月20日～21日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=b89ac771658a1759bad9b5946c11b043e0c38a10dc1c7dfe10a0121327860683&tgid=IEICE-IT"
		},
		{
			"name": "第33回「Friday Tea Time Zoom Seminar」",
			"place": "Zoom",
			"date": "2021年5月14日, 15:30-16:30",
			"url": "https://sites.google.com/view/fridayteatime/"
		},
		{
			"name": "信阳师范学院数学与统计学院学术报告会",
			"place": "腾讯会议",
			"date": "2021年4月30日, 15:00-16:30",
			"url": "http://maths.xynu.edu.cn/info/1072/4748.htm",
			"remarks": "Invited talk: “Circulant almost orthogonal arrays and related problems in statistics and combinatorics” (in Chinese)"
		},
		{
			"name": "第60回大阪組合せ論セミナー",
			"place": "Zoom (大阪梅田より配信)",
			"date": "2021年4月17日, 13:30-17:00",
			"url": "http://sv2-mat.ist.osaka-u.ac.jp/~higashitani/seminar.html"
		},
		{
			"name": "2021年度第1回の早稲田大学整数論セミナー",
			"place": "Zoom",
			"date": "2021年4月9日, 16:30-18:00",
			"url": "http://www.waseda.jp/sem-wnt/index.html"
		},
		{
			"name": "CMSA (Center of Mathematical Sciences and Applications, Harvard) Math-Science Literature Lecture Series",
			"place": "Zoom",
			"date": "April 8, 2021, 9:00-10:30 ET",
			"url": "https://www.math.harvard.edu/event/math-science-literature-lecture-series-6-3-3-3-2-2-2-2-2-2-2/"
		}
	],
	"2020": [
		{
			"name": "组合设计青年论坛 (Colloquium on Combinatorial Designs)",
			"place": "腾讯会议",
			"date": "2021年3月27日",
			"url": "http://cse.sustech.edu.cn/faculty/~wangqi/colloquium.html"
		},
		{
			"name": "RIKEN iTHEMS Math Seminar",
			"place": "Zoom",
			"date": "2021年3月22日, 16:00-18:00",
			"url": "https://ithems.riken.jp/en/events/green-tao-theorem-number-fields"
		},
		{
			"name": "日本数学会2021年度年会",
			"place": "<del>慶應義塾大学</del> Zoom",
			"date": "2021年3月15日～18日",
			"url": "https://www.mathsoc.jp/activity/meeting/keio21mar/",
			"remarks": "“Enumeration and classification of two-level circulant almost orthogonal arrays with strength 2 and bandwidth 1” (統計数学分科会) 3/17"
		},
		{
			"name": "研究会「直観幾何学2021」",
			"place": "Zoom",
			"date": "2021年3月6日～7日",
			"url": ""
		},
		{
			"name": "電子情報通信学会 情報理論研究会(IT)・情報セキュリティ研究会(ISEC)・ワイドバンドシステム研究会(WBS)",
			"place": "Zoom, Webex",
			"date": "2021年3月4日～5日",
			"url": "https://www.ieice.org/ken/program/index.php?mode=program&tgs_regid=cd67a42f2e22a3c37eec55dfb3068dded905b2a4f8be61ab97c92a3f5e9a0c49&tgid=IT"
		},
		{
			"name": "電子情報通信学会 情報理論研究会(IT)・信号処理研究会(SIP)・無線通信システム研究会(RCS)",
			"place": "Zoom",
			"date": "2021年1月21日～22日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=a6b0214f16b10cf8818d5f274b3bbb636ba27b8ea2e0dfb4ec02ca18c7a67a2d&tgid=IEICE-IT"
		},
		{
			"name": "组合设计青年论坛 (Colloquium on Combinatorial Designs)",
			"place": "腾讯会议",
			"date": "2020年12月27日",
			"url": "http://cse.sustech.edu.cn/faculty/~wangqi/colloquium.html"
		},
		{
			"name": "第12回暗号及び情報セキュリティと数学の相関ワークショップ（CRISMATH 2020）",
			"place": "Zoom",
			"date": "2020年12月22日",
			"url": "http://crypto.mist.i.u-tokyo.ac.jp/events/crismath2020.html"
		},
		{
			"name": "2020年度応用数学合同研究集会",
			"place": "Zoom",
			"date": "2020年12月18日～20日",
			"url": "http://infoshako.sk.tsukuba.ac.jp/~cam/2020/index.html"
		},
		{
			"name": "2020年度第5回の早稲田大学整数論セミナー",
			"place": "Zoom",
			"date": "2020年12月18日, 16:30-18:00",
			"url": "http://www.waseda.jp/sem-wnt/index.html"
		},
		{
			"name": "CMSA one-day workshop",
			"place": "Zoom",
			"date": "Dec. 15, 2020",
			"url": "http://combinatorics-australasia.org/CMSA-Day.html"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）",
			"place": "Zoom",
			"date": "2020年12月1日～3日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=64338f28241e91d522abfadd227d9a7ea639a4ba6fe1792d7e6b924d4254a074&tgid=IEICE-IT"
		},
		{
			"name": "2020成都数论及其应用线上研讨会",
			"place": "腾讯会议（四川大学）",
			"date": "2020年11月21日～23日",
			"url": "http://math.scu.edu.cn/info/1031/7623.htm"
		},
		{
			"name": "CMSA (Combinatorial Mathematics Society of Australasia) seminar",
			"place": "Zoom",
			"date": "Nov. 10, 2020",
			"url": "http://combinatorics-australasia.org/seminars.html#Dujmovic"
		},
		{
			"name": "第32回RAMP数理最適化シンポジウム (RAMP 2020)",
			"place": "Zoom",
			"date": "2020年10月26日～27日",
			"url": "http://www.orsj.or.jp/ramp/2020/index.html"
		},
		{
			"name": "CW 2020: International Conference on Cyberworlds",
			"place": "<del>Caen, France</del> Zoom",
			"date": "Sep. 29 - Oct. 1, 2020",
			"url": "https://cyberworlds2020.sciencesconf.org/",
			"remarks": "“Evaluation criteria for visual cryptography schemes via neural networks” (presenting author: Yunchao Wang)"
		},
		{
			"name": "第6回有限体理論とその擬似乱数系列生成への応用ワークショップ",
			"place": "WebEx",
			"date": "2020年9月28日～29日",
			"url": "http://isec.ec.okayama-u.ac.jp/fftprsws2020/"
		},
		{
			"name": "组合设计青年论坛 (Colloquium on Combinatorial Designs)",
			"place": "腾讯会议",
			"date": "2020年9月26日",
			"url": "http://cse.sustech.edu.cn/faculty/~wangqi/colloquium.html"
		},
		{
			"name": "日本数学会2020年度秋季総合分科会",
			"place": "<del>熊本大学</del> オンライン",
			"date": "2020年9月22日～25日",
			"url": "https://www.mathsoc.jp/activity/meeting/kumamoto20sept/",
			"remarks": "“Circulant almost orthogonal arrays and perfect binary sequences” (統計数学分科会) 9/23"
		},
		{
			"name": "CMSA (Combinatorial Mathematics Society of Australasia) seminar",
			"place": "Zoom",
			"date": "Sep. 22, 2020",
			"url": "http://combinatorics-australasia.org/seminars.html#Conlon"
		},
		{
			"name": "2020年電子情報通信学会ソサイエティ大会",
			"place": "Zoom",
			"date": "2020年9月15日～18日",
			"url": "https://www.ieice-taikai.jp/2020society/jpn/program.html"
		},
		{
			"name": "第9回誤り訂正符号のワークショップ",
			"place": "Zoom",
			"date": "2020年9月2日～3日",
			"url": "https://manau.jp/WS/ECCWS/"
		},
		{
			"name": "2020成都有限域及其应用线上研讨会",
			"place": "腾讯会议（四川大学）",
			"date": "2020年8月29日～30日",
			"url": "http://math.scu.edu.cn/info/1031/7377.htm"
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications (JCCA-2020)・離散数学とその応用研究集会2020 (DMIA2020)・スペクトラルグラフ理論および周辺領域第9回研究集会 (SGT9)",
			"place": "<del>高知大学</del> Zoom",
			"date": "2020年8月18日～20日",
			"url": "https://sites.google.com/view/jcca2020-dmia2020-sgt9",
			"remarks": "組織委員, ミニシンポジウム「符号と暗号」世話人"
		},
		{
			"name": "组合与信息交叉学术研讨会",
			"place": "腾讯会议（首都师范大学）",
			"date": "2020年8月9日",
			"url": "https://math.cnu.edu.cn/xzhd1/177080.htm"
		},
		{
			"name": "第17回 RIMS 共同研究「組合せ最適化セミナー」",
			"place": "Zoom",
			"date": "2020年8月5日～7日",
			"url": "http://www.kurims.kyoto-u.ac.jp/coss/coss2020/coss2020.html"
		},
		{
			"name": "Shandong University Mathamtics Summer Course 2020 <a target=\"_blank\" href=\"https://www.math.sdu.edu.cn/info/1020/13396.htm\">\"Extremal Combinatorics\"</a> and <a target=\"_blank\" href=\"https://www.math.sdu.edu.cn/info/1020/13584.htm\">\"Ergodic Ramsey Theory\"</a>",
			"place": "Zoom",
			"date": "July 26 - August 8, 2020",
			"url": ""
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）",
			"place": "Zoom",
			"date": "2020年7月16日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=b0a94091e8a8603701ba9a59b930eced5e05082424beec1c1d461927e35a6e12&tgid=IEICE-IT"
		},
		{
			"name": "CMSA (Combinatorial Mathematics Society of Australasia) seminar",
			"place": "Zoom",
			"date": "July 15, 11:00 AEST",
			"url": "http://combinatorics-australasia.org/seminars.html#Horsley"
		},
		{
			"name": "CMSA (Combinatorial Mathematics Society of Australasia) seminar",
			"place": "Zoom",
			"date": "July 1, 17:00 AEST",
			"url": "http://combinatorics-australasia.org/seminars.html#Szabo"
		},
		{
			"name": "IEICE東京支部オンライン地域イベント(茨城)「講演会：ビッグデータ利活用のためのプライバシ保護技術」",
			"place": "WebEx",
			"date": "2020年6月15日, 13:30-15:30",
			"url": "https://www.ieice.org/tokyo/tiiki.html#menu15"
		},
		{
			"name": "2020年度人工知能学会全国大会",
			"place": "<del>熊本城ホール</del> Zoom",
			"date": "2020年6月9日〜12日",
			"url": "https://www.ai-gakkai.or.jp/jsai2020/"
		},
		{
			"name": "IWOCA 2020: 31st International Workshop on Combinatorial Algorithms",
			"place": "<del>Bordeaux, France</del> Zoom",
			"date": "June 8-10, 2020",
			"url": "https://iwoca2020.labri.fr/"
		},
		{
			"name": "電子情報通信学会 情報理論研究会（IT）・マルチメディア情報ハイディング・エンリッチメント研究会（EMM）",
			"place": "<del>東北学院大学 多賀城キャンパス</del> Zoom",
			"date": "2020年5月28日〜29日",
			"url": "https://www.ieice.org/ken/program/index.php?mode=program&tgs_regid=84d6ca3005303698f18489b41d008d02e51886163760dfeb2aea4cc9cdeaa987&tgid=IT&layout=&lang="
		},
		{
			"name": "日本品質管理学会 第2回Webトーク",
			"place": "Zoom",
			"date": "2020年5月20日, 10:30-11:30",
			"url": ""
		},
		{
			"name": "第1回「Friday Tea Time Zoom Seminar」",
			"place": "Zoom",
			"date": "2020年5月15日, 15:30-16:30",
			"url": "https://sites.google.com/view/fridayteatime/"
		}
	],
	"2019": [
		{
			"name": "<del>The 6th Japan-Taiwan Conference on Combinatorics and its Applications (JTCCA)</del>",
			"place": "<del>Kumamoto-Jo Hall, Kumamoto, Japan</del>",
			"date": "<del>March 25-27, 2020</del>",
			"url": "https://sites.google.com/site/jtcca2020/",
			"remarks": "<del>Organizing Committee Member</del> \\\\ <del>“Circulant almost orthogonal arrays and perfect binary sequences” (Contributed Talk) </del>  Cancelled"
		},
		{
			"name": "<del>日本数学会2020年度年会</del>",
			"place": "<del>日本大学駿河台キャンパス</del>",
			"date": "<del>2020年3月16日〜19日</del>",
			"url": "https://mathsoc.jp/meeting/nichidai20mar/",
			"remarks": "開催中止"
		},
		{
			"name": "<del>人工知能学会 第112回人工知能基本問題研究会(SIG-FPAI)</del>",
			"place": "<del>柳川市藤吉コミュニティセンター（福岡県）</del>",
			"date": "<del>2020年3月8日〜9日</del>",
			"url": "https://sig-fpai.org/past/fpai112_cfp.html",
			"remarks": "開催中止"
		},
		{
			"name": "<del>第16回組合せ論若手研究集会</del>",
			"place": "<del>慶應義塾大学矢上キャンパス</del>",
			"date": "<del>2020年2月27日〜28日</del>",
			"url": "http://www.comb.math.keio.ac.jp/wakate20/",
			"remarks": "開催中止"
		},
		{
			"name": "<del>2020 Taipei International Workshop on Combinatorics and Graph Theory</del>",
			"place": "<del>Institute of Mathematics, Academia Sinica, Taipei, Taiwan</del>",
			"date": "<del>Feb 6-8, 2020</del>",
			"url": "https://www.math.sinica.edu.tw/www/file_upload/conference/202002Comb/Comb.html",
			"remarks": "Cancelled"
		},
		{
			"name": "電子情報通信学会 情報理論研究会(IT)・信号処理研究会(SIP)・無線通信システム研究会(RCS)",
			"place": "広島市青少年センター",
			"date": "2020年1月23日〜24日",
			"url": "https://www.ieice.org/ken/program/index.php?tgs_regid=0a96b5760f81cf3ba0c590264a4bf9bfd296a9e900905aee73bee06d69dbab54&tgid=IEICE-IT"
		},
		{
			"name": "第11回 暗号及び情報セキュリティと数学の相関ワークショップ (CRISMATH 2019)",
			"place": "東京大学本郷キャンパス",
			"date": "2019年12月27日",
			"url": "http://crypto.mist.i.u-tokyo.ac.jp/events/crismath2019.html"
		},
		{
			"name": "RIMS共同研究「代数的組合せ論と関連する群と代数の研究」",
			"place": "京都大学",
			"date": "2019年12月16日〜19日",
			"url": "https://hnozaki.jimdo.com/conference/rims2019/"
		},
		{
			"name": "2019年度応用数学合同研究集会",
			"place": "龍谷大学瀬田キャンパス",
			"date": "2019年12月12日〜14日",
			"url": "http://infoshako.sk.tsukuba.ac.jp/~cam/2019/index.html"
		},
		{
			"name": "研究集会「実験計画法と符号および関連する組合せ構造」2019",
			"place": "湯田温泉（山口県）",
			"date": "2019年11月14日〜16日",
			"url": "http://manau.jp/onsn2019/",
			"remarks": "“グループテスト入門”（招待講演）11/16"
		},
		{
			"name": "日本数学会2019年度秋季総合分科会",
			"place": "金沢大学",
			"date": "2019年9月17日～9月20日",
			"url": "https://mathsoc.jp/meeting/kanazawa19sept/"
		},
		{
			"name": "JCCA-2019・離散数学とその応用研究集会2019・スペクトラルグラフ理論および周辺領域 第8回研究集会",
			"place": "都城工業高等専門学校",
			"date": "2019年8月27日～29日",
			"url": "https://sites.google.com/site/jccadmiasg2019/",
			"remarks": "ミニシンポジウム「符号と暗号」世話人"
		},
		{
			"name": "The 11th Hungarian-Japanese Symposium on Discrete Mathematics and Its Applications",
			"place": "University of Tokyo (Hongo Campus), Tokyo, Japan",
			"date": "May 27-30, 2019",
			"url": "https://www.opt.mist.i.u-tokyo.ac.jp/hj2019/"
		}
	],
	"2018": [
		{
			"name": "2019年電子情報通信学会総合大会",
			"place": "早稲田大学 (西早稲田キャンパス)",
			"date": "2019年3月19日〜22日",
			"url": "https://www.ieice-taikai.jp/2019general/jpn/"
		},
		{
			"name": "日本数学会2019年度年会",
			"place": "東京工業大学",
			"date": "2019年3月17日〜20日",
			"url": "http://mathsoc.jp/meeting/titech19mar/"
		},
		{
			"name": "第15回組合せ論若手研究集会",
			"place": "慶應義塾大学（矢上キャンパス）",
			"date": "2019年2月21日～22日",
			"url": "http://www.comb.math.keio.ac.jp/wakate19/"
		},
		{
			"name": "The 17th Japan-Korea Workshop on Algebra and Combinatorics",
			"place": "University of Tsukuba (Tokyo Campus), Tokyo, Japan",
			"date": "Jan 28-29, 2019",
			"url": "https://sites.google.com/view/jk2019/"
		},
		{
			"name": "The Second Vietnam Workshop on Graph Theory and Discrete Geometry",
			"place": "Vietnam Institute for Advanced Study in Mathematics, Hanoi, Vietnam",
			"date": "Jan 9-13, 2019",
			"url": "https://phmanhthang.wixsite.com/hanoi-secondworkshop",
			"remarks": "“Separably existentially closed graphs and block-intersection graphs of designs” (Invited Talk) 1/10"
		},
		{
			"name": "東京理科大学 数理・情報科学シンポジウム",
			"place": "東京理科大学（神楽坂キャンパス）",
			"date": "2018年12月26日",
			"url": "https://d-data.jp/htdocs/pdf/event181226.pdf"
		},
		{
			"name": "武蔵野大学 第26回数理工学センター（MCME）セミナー",
			"place": "武蔵野大学（有明キャンパス）",
			"date": "2018年12月21日",
			"url": "https://www.musashino-u.ac.jp/research/laboratory/mathematical_engineering/seminar_symposium.html"
		},
		{
			"name": "RIMS共同研究「代数的組合せ論と関連する群と代数の研究」",
			"place": "京都大学",
			"date": "2018年12月10日〜13日",
			"url": "http://sphere.w3.kanazawa-u.ac.jp/2018RIMS.html"
		},
		{
			"name": "The 4th Japan-Sino Symposium on Graph Theory, Combinatorics and Their Applications",
			"place": "Tokyo University of Science (Kagurazaka Campus), Tokyo, Japan",
			"date": "Nov 2-4, 2018",
			"url": "https://www.ed.tus.ac.jp/1416701/japan_sino_combin/",
			"remarks": "Organizing Committee Member"
		},
		{
			"name": "研究集会「実験計画法ならびに情報数理と関連する組合せ構造2018」",
			"place": "神戸大学",
			"date": "2018年10月31日〜11月3日",
			"url": "https://sites.google.com/view/doe2018/",
			"remarks": "世話人"
		},
		{
			"name": "The Third International Conference On Group Actions and Transitive Graphs",
			"place": "Southern University of Science and Technology (SUSTech), Shenzhen, China",
			"date": "Oct 12-14, 2018",
			"url": "http://math.sustc.edu.cn/conference/10858.html?lang=en"
		},
		{
			"name": "日本数学会2018年度秋季総合分科会",
			"place": "岡山大学",
			"date": "2018年9月24日～27日",
			"url": "http://mathsoc.jp/meeting/okayama18sept/",
			"remarks": "“On separably existentially closed graphs” (応用数学分科会) 9/24"
		},
		{
			"name": "The 8th National Conference on Combinatorics and Graph Theory (第八届全国组合数学与图论大会)",
			"place": "Anhui University (安徽大学) and University of Science and Technology of China (中国科学技术大学), Hefei (合肥), China",
			"date": "Aug 23-26, 2018",
			"url": "http://ahuweb.ahu.cn/math/index.asp",
			"remarks": "“Locating arrays with error tolerance” (Contributed Talk)（使用言語：中国語）8/25"
		},
		{
			"name": "組合せ論サマースクール2018",
			"place": "静岡県伊豆の国市",
			"date": "2018年8月8日～11日",
			"url": "https://sites.google.com/view/cos2018",
			"remarks": "“Existentially closed graphs arising from combinatorial designs” 8/9"
		},
		{
			"name": "Conference on Combinatorics and its Applications: In Celebration of Charlie Colbourn's 65th Birthday",
			"place": "Nanyang Technological University, Singapore",
			"date": "Jul 14-16, 2018",
			"url": "http://www.ntu.edu.sg/home/hjwei/cjc65/index.html",
			"remarks": "“Locating arrays with error-correcting ability” (Contributed Talk) 7/16"
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications (JCCA2018)",
			"place": "Sendai International Center, Sendai, Japan",
			"date": "May 20-24, 2018",
			"url": "http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA18/index.html",
			"remarks": "“On mutually 3-orthogonal diagonal cubes” (Contributed Talk) 5/24 \\\\“Adjacency properties of graphs analogous to the countable random graph, their links with combinatorial designs and arrays” (Special Talk in Mini Symposium: Finite Combinatorics and Infinite Combinatorics) 5/24"
		},
		{
			"name": "電子情報通信学会・情報理論研究会（IT）・マルチメディア情報ハイディング・エンリッチメント研究会（EMM）",
			"place": "東京工業大学",
			"date": "2018年5月17日～18日",
			"url": "http://www.ieice.org/ken/program/index.php?tgs_regid=9330f9a761128b6907ef352400e723e5e409a63d09d1f0886fbf4290f402c5c5&tgid=IEICE-IT&lang="
		},
		{
			"name": "第2回組合せ論・モデル理論セミナー",
			"place": "神戸大学",
			"date": "2018年5月10日",
			"url": "https://sites.google.com/site/kcmseminar/2ndseminar"
		}
	],
	"2017": [
		{
			"name": "The 5th Taiwan-Japan Conference on Combinatorics and its Applications (TJCCA)",
			"place": "National Taiwan Normal University（國立臺灣師範大學）, Taiwan",
			"date": "Mar 28-30, 2018",
			"url": "https://sites.google.com/view/tjcc2018/",
			"remarks": "Organizing Committee Member \\\\“Locating arrays with error-correcting ability” (Invited Talk) 3/30"
		},
		{
			"name": "日本数学会2018年度年会",
			"place": "東京大学（駒場キャンパス）",
			"date": "2018年3月18日～21日",
			"url": "http://mathsoc.jp/meeting/tokyo18mar/"
		},
		{
			"name": "Finite Groups, VOAs, and Related Topics 2018",
			"place": "University of Tsukuba",
			"date": "Mar 12-13, 2018",
			"url": "https://sites.google.com/view/fgvoart2018/home"
		},
		{
			"name": "第３回代数的組合せ論「仙台勉強会」～離散構造解析を中心として～",
			"place": "東北大学",
			"date": "2018年3月5日～9日",
			"url": "http://www.math.is.tohoku.ac.jp/~mharada/School2018/"
		},
		{
			"name": "Hadamard matrices and their applications",
			"place": "東北大学",
			"date": "2018年1月26日～27日",
			"url": "http://www.math.is.tohoku.ac.jp/~mharada/Hadamard2018/"
		},
		{
			"name": "5th International Combinatorics Conference (5ICC)",
			"place": "Monash University, Australia",
			"date": "Dec 4-9, 2017",
			"url": "http://www.monash.edu/5icc/index.html",
			"remarks": "“Locating arrays with error-correcting ability” (Contributed Talk) 12/4"
		},
		{
			"name": "研究集会「実験計画法と符号および関連する組合せ構造2017」",
			"place": "湯河原（神奈川県）",
			"date": "2017年11月23日～25日",
			"url": "https://sites.google.com/view/yugawara2017",
			"remarks": "世話人"
		},
		{
			"name": "日本数学会2017年度秋季総合分科会",
			"place": "山形大学",
			"date": "2017年9月11日～14日",
			"url": "http://mathsoc.jp/meeting/yamagata17sept/",
			"remarks": "“Locating arrays with error-correcting ability”（統計数学分科会） 9/12"
		},
		{
			"name": "JCDCG^3 2017 (20th Japan Conference on Discrete and Computational Geometry, Graphs, and Games)",
			"place": "Tokyo University of Science (Kagurazaka Campus)",
			"date": "Aug 29 - Sept 1, 2017",
			"url": "http://www.jcdcgg.u-tokai.ac.jp/",
			"remarks": "“Public key cryptosystems using magic cubes” (Contributed Talk) 8/31"
		},
		{
			"name": "Japanese Conference on Combinatorics and its Applications (JCCA-2017)・離散数学とその応用研究集会2017",
			"place": "熊本大学",
			"date": "2017年8月17日〜19日",
			"url": "http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA-2017/index.html",
			"remarks": "“On separably existentially closed graphs” 8/17"
		},
		{
			"name": "電子情報通信学会・情報理論研究会（IT）",
			"place": "千葉大学",
			"date": "2017年7月13日〜14日",
			"url": "http://www.ieice.org/ken/program/index.php?tgs_regid=5f73a68bf5efbd38a6b90322a0b0b90b644ccc0778cf9d130e334dac44ef6c33&tgid=IEICE-IT&lang="
		},
		{
			"name": "第３４回代数的組合せ論シンポジウム",
			"place": "小山市立中央公民館・小山高専",
			"date": "2017年6月15日〜17日",
			"url": "https://sites.google.com/view/2017symposium-algcombin"
		},
		{
			"name": "シンポジウム「数学，アルゴリズム，計算機科学，そしてデータ科学」",
			"place": "東京工業大学",
			"date": "2017年6月10日",
			"url": "http://www.dais.is.tohoku.ac.jp/~toku60/"
		},
		{
			"name": "日本品質管理学会第113回研究発表会",
			"place": "日本科学技術連盟・東高円寺ビル",
			"date": "2017年5月27日",
			"url": "http://www.jsqc.org/q/news/events/113_program.pdf"
		}
	],
	"2016": [
		{
			"name": "日本数学会2017年度年会",
			"place": "首都大学東京",
			"date": "2017年3月24日～27日",
			"url": "http://mathsoc.jp/meeting/tmu17mar/"
		},
		{
			"name": "第2回代数的組合せ論「仙台勉強会」",
			"place": "東北大学",
			"date": "2017年3月7日～8日",
			"url": "http://www.math.is.tohoku.ac.jp/~mharada/School2017/index.html"
		},
		{
			"name": "第13回組合せ論若手研究集会",
			"place": "慶應義塾大学（矢上キャンパス）",
			"date": "2017年3月1日～2日",
			"url": "http://www.comb.math.keio.ac.jp/wakate17/"
		},
		{
			"name": "科研費シンポジウム「統計的モデリングと計算アルゴリズムの数理と展開」",
			"place": "名古屋大学",
			"date": "2017年2月18日〜19日",
			"url": "https://sites.google.com/site/kibanastatisticalmodeling2017/home"
		},
		{
			"name": "JST CREST AIPチャレンジシンポジウム「ビッグデータ利活用のための基盤構築とその応用」",
			"place": "名古屋工業大学",
			"date": "2017年2月16日〜17日",
			"url": "https://sites.google.com/site/bigdataworkshopnagoya201702/home"
		},
		{
			"name": "2016年度応用数学合同研究集会",
			"place": "龍谷大学",
			"date": "2016年12月15日～17日",
			"url": "http://infoshako.sk.tsukuba.ac.jp/~cam/2016/index.html",
			"remarks": "口頭発表(12/17)"
		},
		{
			"name": "東北大学情報科学研究科 純粋・応用数学研究センター 第77回組合せ論セミナー",
			"place": "東北大学",
			"date": "2016年12月9日",
			"url": "http://www.math.is.tohoku.ac.jp/~combin/",
			"remarks": "口頭発表(12/9)"
		},
		{
			"name": "研究集会「実験計画法と符号および関連する組合せ構造 2016」",
			"place": "秋保リゾートホテルクレセント（宮城県）",
			"date": "2016年11月28日～30日",
			"url": "http://www.math.is.tohoku.ac.jp/~mharada/Akiu2016/",
			"remarks": "セッション座長"
		},
		{
			"name": "スペクトラルグラフ理論および周辺領域第5回研究集会",
			"place": "神戸大学",
			"date": "2016年11月26日〜27日",
			"url": "http://www.math.is.tohoku.ac.jp/~htanaka/docs/sgt5/"
		},
		{
			"name": "National Conference on Combinatorial Designs 2016 (2016年全国组合设计会议)",
			"place": "Zhejiang University (浙江大学), China",
			"date": "Jul 8-10, 2016",
			"url": "http://www.math.zju.edu.cn/~ggn/dcc/conference2/ZJU-Conference.html",
			"remarks": "口頭発表(7/11)"
		},
		{
			"name": "The 3rd Istanbul Design Theory, Graph Theory and Combinatorics Workshop",
			"place": "Koç University, Turkey",
			"date": "Jun 13-17, 2016",
			"url": "http://portal.ku.edu.tr/~eyazici/Research/Design2016/index.htm",
			"remarks": "口頭発表(6/14)"
		},
		{
			"name": "The Japanese Conference on Combinatorics and its Applications (JCCA 2016)",
			"place": "Kyoto University, Japan",
			"date": "May 21-25, 2016",
			"url": "http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA16/",
			"remarks": "口頭発表(5/24)"
		},
		{
			"name": "シンポジューム「数理科学の新しい地平 (New Horizon of Mathematical Sciences)」",
			"place": "理化学研究所（和光キャンパス）",
			"date": "2016年4月28日",
			"url": "http://indico2.riken.jp/indico/event/ithes-math"
		}
	],
	"2015": [
		{
			"name": "日本数学会2016年度年会",
			"place": "筑波大学",
			"date": "2016年3月16日～19日",
			"url": "http://mathsoc.jp/meeting/tsukuba16mar/",
			"remarks": "口頭発表(3/18)"
		},
		{
			"name": "ミニ集会「代数的組合せ論とその周辺」",
			"place": "東北大学",
			"date": "2016年3月8日～3月9日",
			"url": "http://www.math.is.tohoku.ac.jp/~mharada/Sendai2016/"
		},
		{
			"name": "The 4th Japan-Taiwan Conference on Combinatorics and its Applications (JTCCA)",
			"place": "Kitakyushu International Conference Center, Japan",
			"date": "Mar 5-7, 2016",
			"url": "https://sites.google.com/site/jtcca2016/",
			"remarks": "スタッフ"
		},
		{
			"name": "RIMS研究集会「有限群とその表現, 頂点作用素代数, 代数的組合せ論の研究」",
			"place": "京都大学",
			"date": "2016年1月5日～8日",
			"url": "http://www.math.is.tohoku.ac.jp/~shima/program2015.pdf"
		},
		{
			"name": "2015年度応用数学合同研究集会",
			"place": "龍谷大学",
			"date": "2015年12月17日～19日",
			"url": "http://www-mmc.es.hokudai.ac.jp/CAM/2015/index.html",
			"remarks": "口頭発表(12/18)"
		},
		{
			"name": "The 39th Australasian Conference on Combinatorial Mathematics and Combinatorial Computing (39ACCMCC)",
			"place": "University of Queensland, Australia",
			"date": "Dec 7-11, 2015",
			"url": "http://39accmcc.smp.uq.edu.au/",
			"remarks": "口頭発表(12/10)"
		},
		{
			"name": "研究集会「実験計画法と符号および関連する組合せ構造2015」",
			"place": "箱根水明荘（神奈川県）",
			"date": "2015年12月1日～3日",
			"url": "",
			"remarks": "口頭発表(12/3)"
		},
		{
			"name": "International Workshop on Algebraic Combinatorics",
			"place": "Zhejiang University, China",
			"date": "Sept 18-23, 2015",
			"url": "http://www.math.zju.edu.cn/~ggn/dcc/conference/ZJU-Conference.html",
			"remarks": "口頭発表(9/21)"
		},
		{
			"name": "日本数学会2015年度秋季総合分科会",
			"place": "京都産業大学",
			"date": "2015年9月13日～16日",
			"url": "http://mathsoc.jp/meeting/kyoto-sangyo15sept/",
			"remarks": "口頭発表(9/16)"
		},
		{
			"name": "RIMS共同研究「デザイン、符号、グラフおよびその周辺」",
			"place": "京都大学",
			"date": "2015年7月8日～10日",
			"url": "https://sites.google.com/site/rimsdcg2015/home"
		},
		{
			"name": "第32回代数的組合せ論シンポジウム",
			"place": "石川県文教会館",
			"date": "2015年6月22日～24日",
			"url": "http://sphere.s.kanazawa-u.ac.jp/32algcomb.html"
		},
		{
			"name": "RIMS研究集会「幾何学・組合せ論に現れる環と代数構造」",
			"place": "京都大学",
			"date": "2015年6月9日～12日",
			"url": "http://www.math.sci.osaka-u.ac.jp/~s-murai/meetings/AlgebraicStructures.html",
			"remarks": "口頭発表(6/10)"
		},
		{
			"name": "第1回代数的組合せ論「仙台勉強会」",
			"place": "東北大学",
			"date": "2015年5月8日～9日",
			"url": "http://www.math.is.tohoku.ac.jp/~mharada/School2015/"
		}
	],
	"2014": [
		{
			"name": "日本数学会2015年度年会",
			"place": "明治大学",
			"date": "2015年3月21日～24日",
			"url": "http://infoshako.sk.tsukuba.ac.jp/~cam/2016/index.html",
			"remarks": "口頭発表"
		},
		{
			"name": "研究集会「有限幾何と組合せデザイン」",
			"place": "東京理科大学（神楽坂キャンパス）",
			"date": "2015年3月6日～7日",
			"url": "https://sites.google.com/site/fujihararetirement/"
		},
		{
			"name": "The 13th Japan-Korea Workshop on Algebra and Combinatorics",
			"place": "Kyushu Institute of Technology",
			"date": "Jan 29-31, 2015",
			"url": "http://w3-sogo.kct.ac.jp/~kurihara/jk2015/jk2015.html"
		},
		{
			"name": "熊本組合せ論研究集会「代数的デザイン論とその周辺」",
			"place": "熊本大学",
			"date": "2015年1月9日～11日",
			"url": ""
		},
		{
			"name": "研究集会「実験計画法およびその周辺の組合せ構造2014」",
			"place": "城崎国際アートセンター（兵庫県）",
			"date": "2014年12月13日～15日",
			"url": "http://www.ist.aichi-pu.ac.jp/~hirao/kinosaki2014/kinosaki2014.html",
			"remarks": "世話人，口頭発表"
		},
		{
			"name": "日本数学会2014年度秋季総合分科会",
			"place": "広島大学",
			"date": "2014年9月25日～28日",
			"url": "http://mathsoc.jp/meeting/hiroshima14sept/",
			"remarks": "口頭発表"
		},
		{
			"name": "The Japanese Conference on Combinatorics and its Applications (JCCA2014)",
			"place": "University of Tsukuba, Japan",
			"date": "Aug 25-29, 2014",
			"url": "http://infoshako.sk.tsukuba.ac.jp/jcca/JCCA14/index.html",
			"remarks": "口頭発表"
		},
		{
			"name": "離散数学とその応用研究集会2014",
			"place": "新潟総合テレビ ゆめディア",
			"date": "2014年8月20日～22日",
			"url": "http://mathweb.sc.niigata-u.ac.jp/~y-suzuki/",
			"remarks": "セッション座長"
		},
		{
			"name": "International Conference on Combinatorics and Graphs -- A Satellite Conference of ICM 2014",
			"place": "Beijing Jiaotong University, China",
			"date": "Aug 8-12, 2014",
			"url": "http://iccg.bjtu.edu.cn/",
			"remarks": "口頭発表"
		},
		{
			"name": "2014 Symposium for Young Combinatorialists (2014組合數學新苗研討會)",
			"place": "National Taiwan Normal University, Taiwan",
			"date": "Aug 2-3, 2014",
			"url": "http://2014comb.math.ntnu.edu.tw/index.html",
			"remarks": "口頭発表（招待講演）"
		},
		{
			"name": "RIMS共同研究「デザイン、符号、グラフおよびその周辺」",
			"place": "京都大学",
			"date": "2014年7月23日～25日",
			"url": "https://sites.google.com/site/rimsdcg2014/",
			"remarks": "口頭発表"
		},
		{
			"name": "第31回代数的組合せ論シンポジウム",
			"place": "東北大学",
			"date": "2014年6月19日～20日",
			"url": "http://www.math.is.tohoku.ac.jp/~combin/ac2014/"
		},
		{
			"name": "代数的組合せ論「夏の学校2014」",
			"place": "秋保リゾートホテルクレセント（宮城県）",
			"date": "2014年6月15日～18日",
			"url": "http://www.math.is.tohoku.ac.jp/~combin/ac2014/summer_school.html"
		},
		{
			"name": "Wilsonを囲む研究会",
			"place": "四季倶楽部フォレスト箱根（神奈川県）",
			"date": "2014年6月12日～15日",
			"url": "",
			"remarks": "口頭発表"
		},
		{
			"name": "Japan Conference on Graph Theory and Combinatorics",
			"place": "Nihon University, Japan",
			"date": "May 17-21, 2014",
			"url": "http://web.keio.jp/~jcgtc2014/",
			"remarks": "口頭発表"
		}
	],
	"2013": [
		{
			"name": "日本数学会2014年度年会",
			"place": "学習院大学",
			"date": "2014年3月15日～18日",
			"url": "http://mathsoc.jp/meeting/gakushuin14mar/",
			"remarks": "口頭発表"
		},
		{
			"name": "研究集会「組合せ論とその実験計画法への応用」",
			"place": "熊本県阿蘇郡南小町瀬の本高原",
			"date": "2013年11月13日～15日",
			"url": "",
			"remarks": "口頭発表"
		},
		{
			"name": "JSPS-DST Asian Academic Seminar 2013 -- Discrete Mathematics & its Applications",
			"place": "University of Tokyo, Japan",
			"date": "Nov 3-10, 2013",
			"url": "http://faculty.ms.u-tokyo.ac.jp/users/aas2013/",
			"remarks": "口頭発表（Special Recognition Award 受賞）"
		},
		{
			"name": "The 11th International Conference on Finite Fields and their Applications (Fq11)",
			"place": "Otto-von-Guericke University Magdeburg, Germany",
			"date": "Jul 22-26, 2013",
			"url": "http://www.math.uni-magdeburg.de/~fq11/index.html",
			"remarks": "口頭発表"
		}
	],
	"2012": [
		{
			"name": "Workshop on Algebraic Graph Theory, Spectral Graph Theory and Related Topics",
			"place": "Nagoya University, Japan",
			"date": "Jan 5-6, 2013",
			"url": "https://sites.google.com/site/tetsuzitagt2013e/"
		},
		{
			"name": "The 2nd Japan-Taiwan Conference on Combinatorics and its Applications (2nd JTCCA)",
			"place": "Nagoya University, Japan",
			"date": "Nov 10-12, 2012",
			"url": "",
			"remarks": "ポスター発表"
		},
		{
			"name": "RIMS共同研究 「デザイン、符号、グラフおよびその周辺」",
			"place": "京都大学数理解析研究所",
			"date": "2012年7月17日～19日",
			"url": "https://sites.google.com/a/lab.twcu.ac.jp/rims_dcg2012/"
		}
	],
	"2011": [
		{
			"name": "研究集会「離散数理構造とその応用」",
			"place": "名古屋大学",
			"date": "2011年11月18日～19日",
			"url": ""
		}
	]
};

function getConferenceYears(fromYear, toYear) {
	return Object.keys(CONFERENCES_BY_YEAR)
		.map(Number)
		.filter(function(year) {
			return (!fromYear || year >= fromYear) && (!toYear || year <= toYear);
		})
		.sort(function(a, b) { return b - a; });
}

function appendHtml(parent, html) {
	var span = document.createElement('span');
	span.innerHTML = html;
	Array.prototype.forEach.call(span.querySelectorAll('a[target="_blank"]'), function(link) {
		link.rel = 'noopener';
	});
	while (span.firstChild) {
		parent.appendChild(span.firstChild);
	}
}

function toggleConferenceSection(elementId) {
	if (typeof toggleVisibility === 'function') {
		toggleVisibility(elementId);
		return;
	}

	var element = document.getElementById(elementId);
	if (!element) return;
	element.style.display = element.style.display === 'none' ? '' : 'none';
}

function createConferenceList(year) {
	var conferences = CONFERENCES_BY_YEAR[year] || [];
	var list = document.createElement('ol');
	list.reversed = true;

	conferences.forEach(function(conf) {
		var item = document.createElement('li');

		if (conf.url) {
			var link = document.createElement('a');
			link.href = conf.url;
			link.target = '_blank';
			link.rel = 'noopener';
			link.innerHTML = conf.name;
			item.appendChild(link);
		} else {
			appendHtml(item, conf.name);
		}

		appendHtml(item, ', ' + conf.place + ', ' + conf.date + '.');

		if (conf.remarks) {
			conf.remarks.split('\\\\').forEach(function(remark) {
				var text = remark.trim();
				if (!text) return;
				item.appendChild(document.createElement('br'));
				appendHtml(item, '・・・' + text + '.');
			});
		}

		list.appendChild(item);
	});

	return list;
}

function renderYearConfList(containerId, fromYear, toYear) {
	var container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
	if (!container) return;

	var years = getConferenceYears(fromYear, toYear);
	container.innerHTML = '';

	years.forEach(function(year, index) {
		var sectionId = 'divconf' + year;
		var header = document.createElement('div');
		header.className = 'conference-year-toggle';
		header.style.cursor = 'pointer';
		header.addEventListener('click', function() {
			toggleConferenceSection(sectionId);
		});

		var heading = document.createElement('h3');
		heading.textContent = year + '年度 (April ' + year + ' - March ' + (year + 1) + ')';
		header.appendChild(heading);
		container.appendChild(header);

		var section = document.createElement('div');
		section.id = sectionId;
		if (index !== 0) {
			section.style.display = 'none';
		}
		section.appendChild(createConferenceList(year));
		container.appendChild(section);
	});
}

function generateYearConfList(fromYear, toYear) {
	var script = document.currentScript;
	var container = document.createElement('div');
	if (script && script.parentNode) {
		script.parentNode.insertBefore(container, script);
	}
	renderYearConfList(container, fromYear, toYear);
}
