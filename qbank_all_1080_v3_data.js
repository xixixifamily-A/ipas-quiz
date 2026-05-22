// IPAS 科目3 v3 題庫 - IPAS 114年考古題風格（情境40% | 下列何者30% | 直接問答30%）
// 13個範圍 × 3難度 × 10題 = 390題
// 生成日期: 2026-05-20

const ALL_QBANKS_SUBJECT3 = {
  "3.1": {
    "基礎": [
      {
        "id": "3.1-B01",
        "question": "某班學生考試成績為：50,60,70,80,90,100。下列何者正確？",
        "options": [
          "A. 中位數為75，平均數為75",
          "B. 中位數為70，平均數為75",
          "C. 中位數為75，平均數為70",
          "D. 中位數為80，平均數為75"
        ],
        "answer": "A",
        "key_point": "中位數與平均數",
        "analysis": "中位數=(70+80)/2=75，平均數=(50+60+70+80+90+100)/6=75。"
      },
      {
        "id": "3.1-B02",
        "question": "資料集經標準化(Standardization)後，其平均數與標準差分別為？",
        "options": [
          "A. 平均數=0，標準差=1",
          "B. 平均數=1，標準差=0",
          "C. 平均數=0，標準差=0",
          "D. 平均數=1，標準差=1"
        ],
        "answer": "A",
        "key_point": "標準化",
        "analysis": "Z=(X-μ)/σ，轉換後平均數=0，標準差=1。"
      },
      {
        "id": "3.1-B03",
        "question": "下列何者不是常用的集中趨勢量數？",
        "options": [
          "A. 平均數",
          "B. 中位數",
          "C. 標準差",
          "D. 眾數"
        ],
        "answer": "C",
        "key_point": "集中趨勢",
        "analysis": "標準差屬於離散量數，非集中趨勢量數。"
      },
      {
        "id": "3.1-B04",
        "question": "某公司兩部門月績效標準差：A部=8萬、B部=15萬。下列敘述何者正確？",
        "options": [
          "A. A部績效波動較小，較穩定",
          "B. B部績效較穩定",
          "C. 兩者穩定度相同",
          "D. 標準差無法反映穩定度"
        ],
        "answer": "A",
        "key_point": "標準差解讀",
        "analysis": "標準差越小表示波動越小、越穩定。"
      },
      {
        "id": "3.1-B05",
        "question": "資料分布呈常態時，約有多少百分比落在平均數±1個標準差內？",
        "options": [
          "A. 68%",
          "B. 95%",
          "C. 99.7%",
          "D. 50%"
        ],
        "answer": "A",
        "key_point": "68-95-99.7法則",
        "analysis": "常態分布中約68%資料落在μ±1σ範圍內。"
      },
      {
        "id": "3.1-B06",
        "question": "分析師計算月營收，平均=100萬、標準差=20萬。變異係數(CV)為？",
        "options": [
          "A. 0.2",
          "B. 0.02",
          "C. 20",
          "D. 5"
        ],
        "answer": "A",
        "key_point": "變異係數",
        "analysis": "CV=σ/μ=20/100=0.2(20%)，可比較不同單位的離散程度。"
      },
      {
        "id": "3.1-B07",
        "question": "箱形圖(Box Plot)中，Q1=25、Q3=75、IQR=50。若最小值=10、最大值=100，下列何者為離群值判斷標準？",
        "options": [
          "A. 小於25-1.5×50=-50或大於75+1.5×50=150",
          "B. 小於10或大於100",
          "C. 小於50或大於50",
          "D. 小於0或大於200"
        ],
        "answer": "A",
        "key_point": "IQR離群值",
        "analysis": "離群值標準為Q1-1.5×IQR 與 Q3+1.5×IQR。"
      },
      {
        "id": "3.1-B08",
        "question": "學生資料：65,72,78,82,85,90,95。若要報告典型成績，使用哪個統計量最合適？",
        "options": [
          "A. 中位數82",
          "B. 平均數81",
          "C. 眾數",
          "D. 標準差"
        ],
        "answer": "A",
        "key_point": "中位數適用",
        "analysis": "資料不含極端值時中位數與平均數接近，但中位數更具穩健性。"
      },
      {
        "id": "3.1-B09",
        "question": "下列何者對極端值最敏感？",
        "options": [
          "A. 平均數",
          "B. 中位數",
          "C. 眾數",
          "D. IQR"
        ],
        "answer": "A",
        "key_point": "平均數敏感度",
        "analysis": "平均數利用所有數值計算，受極端值影響最大。"
      },
      {
        "id": "3.1-B10",
        "question": "執行Python：\nimport statistics\ndata=[1,2,2,3,3,3,4,4,5]\nprint(statistics.mode(data))",
        "options": [
          "A. 3",
          "B. 2",
          "C. 4",
          "D. 2.5"
        ],
        "answer": "A",
        "key_point": "Python眾數",
        "analysis": "眾數為出現最多次的數值，3出現3次最多。"
      }
    ],
    "進階": [
      {
        "id": "3.1-J01",
        "question": "下列何者正確？當資料分布呈右偏時，欲移除極端值影響應使用：",
        "options": [
          "A. 中位數搭配IQR",
          "B. 平均數搭配標準差",
          "C. 眾數搭配全距",
          "D. 中位數搭配變異數"
        ],
        "answer": "A",
        "key_point": "穩健統計",
        "analysis": "中位數和IQR均對極端值穩健，適合偏態資料。"
      },
      {
        "id": "3.1-J02",
        "question": "人資部比較兩部門績效：A部平均85分、中位數88分；B部平均85分、中位數80分。下列何者正確？",
        "options": [
          "A. A部左偏，B部右偏",
          "B. A部右偏，B部左偏",
          "C. 兩者對稱",
          "D. 無法判斷"
        ],
        "answer": "A",
        "key_point": "偏態判斷",
        "analysis": "平均<中位數為左偏，平均>中位數為右偏。A部85<88左偏，B部85>80右偏。"
      },
      {
        "id": "3.1-J03",
        "question": "金融分析師計算某股票200日報酬率，平均0.05%、標準差1.2%。若某日報酬2.5%，其Z-score約為？",
        "options": [
          "A. 2.04",
          "B. 2.50",
          "C. 1.50",
          "D. 0.05"
        ],
        "answer": "A",
        "key_point": "Z-score計算",
        "analysis": "Z=(2.5-0.05)/1.2≈2.04，表示偏離平均約2.04個標準差。"
      },
      {
        "id": "3.1-J04",
        "question": "大數據分析中，各國分公司使用不同評分量尺(5點vs7點量表)。應如何比較？",
        "options": [
          "A. 標準化為Z-score後再比較",
          "B. 直接比較原始分數",
          "C. 全部換算為百分制",
          "D. 使用中位數比較"
        ],
        "answer": "A",
        "key_point": "跨尺度比較",
        "analysis": "Z-score將不同量尺的標準化為共同尺度，可進行比較。"
      },
      {
        "id": "3.1-J05",
        "question": "分析師發現某月營收分布中平均=500萬但中位數=200萬。下列敘述何者最可能？",
        "options": [
          "A. 少數大額訂單拉高平均數，營收為右偏分布",
          "B. 營收為左偏分布",
          "C. 營收為常態分布",
          "D. 營收為均勻分布"
        ],
        "answer": "A",
        "key_point": "偏態解讀",
        "analysis": "平均數>中位數為右偏，少數大額訂單產生極大值。"
      },
      {
        "id": "3.1-J06",
        "question": "在實務上使用IQR偵測離群值時，若資料為偏態分布，下列何者正確？",
        "options": [
          "A. IQR法假設分布對稱，偏態時可能誤判離群值",
          "B. IQR法完全不受偏態影響",
          "C. IQR法只能用於常態分布",
          "D. IQR法無使用限制"
        ],
        "answer": "A",
        "key_point": "IQR限制",
        "analysis": "IQR法的1.5×IQR標準在偏態分布中可能不適用，需調整或使用其他方法。"
      },
      {
        "id": "3.1-J07",
        "question": "Python中，若資料含缺失值，np.mean(array)的回傳值為何？",
        "options": [
          "A. NaN",
          "B. 忽略缺失值後的平均",
          "C. 0",
          "D. 報錯"
        ],
        "answer": "A",
        "key_point": "numpy缺失值",
        "analysis": "numpy對含NaN的陣列計算平均預設回傳NaN。"
      },
      {
        "id": "3.1-J08",
        "question": "在Power BI中建立銷售報表，管理者想同時看到各產品總銷售額與佔比。最適合的視覺化方式為？",
        "options": [
          "A. 組合圖（長條圖+折線圖）",
          "B. 純長條圖",
          "C. 純圓餅圖",
          "D. 純折線圖"
        ],
        "answer": "A",
        "key_point": "視覺化設計",
        "analysis": "長條圖顯示絕對值，疊加折線圖顯示佔比，是組合圖的典型應用。"
      },
      {
        "id": "3.1-J09",
        "question": "下列何者正確？當兩組資料變異數差異很大時，直接比較平均數可能？",
        "options": [
          "A. 產生誤導，應先檢定變異數同質性",
          "B. 完全正確",
          "C. 標準化後即可比較",
          "D. 無法解決"
        ],
        "answer": "A",
        "key_point": "變異數同質性",
        "analysis": "比較平均數前應先檢定變異數是否相等(如Levene檢定)。"
      },
      {
        "id": "3.1-J10",
        "question": "在描述統計中，若資料呈現強烈右偏，下列何種集中趨勢指標最能反映典型資料點？",
        "options": [
          "A. 中位數",
          "B. 平均數",
          "C. 眾數",
          "D. 全距"
        ],
        "answer": "A",
        "key_point": "右偏與中位數",
        "analysis": "右偏分布中平均數受極端值影響偏大，中位數較能代表典型資料點。"
      }
    ],
    "專業": [
      {
        "id": "3.1-Z01",
        "question": "銀行分析數百萬筆信用卡交易金額，分布呈現冪律(Power Law)。下列何者正確？",
        "options": [
          "A. 少數大額交易占總金額絕大部分，平均數無法反映典型交易",
          "B. 分布為常態",
          "C. 中位數等於平均數",
          "D. 標準差無意義"
        ],
        "answer": "A",
        "key_point": "冪律分布",
        "analysis": "冪律分布中少數極大值主導總和，平均數嚴重偏離典型值。"
      },
      {
        "id": "3.1-Z02",
        "question": "數據科學家需從10億筆交易即時計算串流中位數，傳統排序不可行。應使用？",
        "options": [
          "A. T-Digest等近似演算法",
          "B. 直接排序",
          "C. 使用平均數替代",
          "D. 隨機抽樣"
        ],
        "answer": "A",
        "key_point": "串流中位數",
        "analysis": "T-Digest可在有限記憶體下高效計算串流資料的近似分位數。"
      },
      {
        "id": "3.1-Z03",
        "question": "下列敘述何者不正確？",
        "options": [
          "A. 偏態係數為負表示右偏",
          "B. 標準差對極端值比IQR敏感",
          "C. 箱形圖可顯示離群值",
          "D. CV可比較不同單位的離散程度"
        ],
        "answer": "A",
        "key_point": "偏態係數",
        "analysis": "偏態係數為負表示左偏(負偏)，為正才是右偏。"
      },
      {
        "id": "3.1-Z04",
        "question": "執行Python：\nimport numpy as np\ndata=[1,2,3,4,5,6,7,8,9,10]\nprint(np.std(data,ddof=1))\n輸出值約為？",
        "options": [
          "A. 3.03",
          "B. 2.87",
          "C. 2.50",
          "D. 3.50"
        ],
        "answer": "A",
        "key_point": "樣本標準差",
        "analysis": "ddof=1為樣本標準差，分母n-1=9，計算得約3.028。"
      },
      {
        "id": "3.1-Z05",
        "question": "在大數據分析中，使用樣本標準差而非母體標準差的主要原因為何？",
        "options": [
          "A. 樣本標準差以n-1為分母提供不偏估計",
          "B. 樣本標準差計算較快",
          "C. 母體標準差不適用大數據",
          "D. 兩者無差異"
        ],
        "answer": "A",
        "key_point": "樣本標準差不偏性",
        "analysis": "Bessel's correction以n-1取代n使樣本變異數成為母體變異數的不偏估計量。"
      },
      {
        "id": "3.1-Z06",
        "question": "使用箱形圖(Box Plot)檢視銷售資料時，發現多個離群值位於Q3+1.5×IQR之上。下列何者正確？",
        "options": [
          "A. 這些離群值可能代表高價值交易或資料錯誤，需進一步調查",
          "B. 直接刪除所有離群值",
          "C. 離群值不影響分析",
          "D. 箱形圖不適用於銷售資料"
        ],
        "answer": "A",
        "key_point": "離群值調查",
        "analysis": "離群值可能是重要的商業訊號或資料錯誤，需區分處理。"
      },
      {
        "id": "3.1-Z07",
        "question": "在比較兩組量綱不同的資料（如體重kg與身高cm）的離散程度時，應使用哪個指標？",
        "options": [
          "A. 變異係數(CV)",
          "B. 標準差",
          "C. 變異數",
          "D. 全距"
        ],
        "answer": "A",
        "key_point": "變異係數應用",
        "analysis": "CV=σ/μ為無量綱比值，可比較不同單位的資料離散程度。"
      },
      {
        "id": "3.1-Z08",
        "question": "統計報表中常使用的百分位數(Percentile)中，第25百分位數也稱為？",
        "options": [
          "A. 下四分位數(Q1)",
          "B. 中位數",
          "C. 上四分位數(Q3)",
          "D. 第3四分位數"
        ],
        "answer": "A",
        "key_point": "四分位數",
        "analysis": "第25百分位數即下四分位數Q1，第75百分位數為上四分位數Q3。"
      },
      {
        "id": "3.1-Z09",
        "question": "資料視覺化時，使用散佈圖矩陣(Scatter Plot Matrix)的主要目的為何？",
        "options": [
          "A. 同時檢視多個變數兩兩之間的關係",
          "B. 顯示單一變數分布",
          "C. 顯示時間趨勢",
          "D. 顯示類別比較"
        ],
        "answer": "A",
        "key_point": "散佈圖矩陣",
        "analysis": "散佈圖矩陣可快速探索多變數間的相關性與異常模式。"
      },
      {
        "id": "3.1-Z10",
        "question": "在Power BI/Tableau報表中，欲呈現各產品線銷售額佔總銷售額的百分比，最適合的圖表為？",
        "options": [
          "A. 100%堆疊長條圖或圓餅圖",
          "B. 折線圖",
          "C. 散佈圖",
          "D. 雷達圖"
        ],
        "answer": "A",
        "key_point": "佔比視覺化",
        "analysis": "100%堆疊長條圖或圓餅圖適合顯示各類別佔整體的比例。"
      }
    ]
  },
  "3.2": {
    "基礎": [
      {
        "id": "3.2-B01",
        "question": "統計學中，大樣本下二項分布會近似於哪種分布？",
        "options": [
          "A. 常態分布",
          "B. 波松分布",
          "C. 指數分布",
          "D. t分布"
        ],
        "answer": "A",
        "key_point": "二項近似常態",
        "analysis": "當np≥5且n(1-p)≥5時，二項分布可近似常態分布。"
      },
      {
        "id": "3.2-B02",
        "question": "客服中心平均每10分鐘接3通電話。下列何種分布最適合建模？",
        "options": [
          "A. 波松分布",
          "B. 二項分布",
          "C. 常態分布",
          "D. 均勻分布"
        ],
        "answer": "A",
        "key_point": "波松分布應用",
        "analysis": "固定時間內隨機事件發生次數適用波松分布。"
      },
      {
        "id": "3.2-B03",
        "question": "某校學生身高服從常態分布μ=170、σ=6，身高大於182的機率約為？",
        "options": [
          "A. 2.5%",
          "B. 5%",
          "C. 16%",
          "D. 0.5%"
        ],
        "answer": "A",
        "key_point": "常態分布機率",
        "analysis": "Z=(182-170)/6=2，P(Z>2)≈0.025。"
      },
      {
        "id": "3.2-B04",
        "question": "下列何者為連續機率分布？",
        "options": [
          "A. 常態分布",
          "B. 二項分布",
          "C. 波松分布",
          "D. 超幾何分布"
        ],
        "answer": "A",
        "key_point": "連續vs離散",
        "analysis": "常態分布為連續分布，其餘均為離散分布。"
      },
      {
        "id": "3.2-B05",
        "question": "若X~N(50,100)，則P(X>60)約為？",
        "options": [
          "A. 0.16",
          "B. 0.025",
          "C. 0.05",
          "D. 0.32"
        ],
        "answer": "A",
        "key_point": "標準化求機率",
        "analysis": "Z=(60-50)/10=1，P(Z>1)≈0.1587。"
      },
      {
        "id": "3.2-B06",
        "question": "中央極限定理(Central Limit Theorem)的核心概念為何？",
        "options": [
          "A. 無論母體分布為何，大樣本下樣本平均數的抽樣分布趨近常態",
          "B. 樣本數須達1000以上",
          "C. 只適用於常態母體",
          "D. 樣本平均數等於母體平均數"
        ],
        "answer": "A",
        "key_point": "CLT核心",
        "analysis": "CLT指出任意分布的母體，大樣本下樣本平均數的分布趨近常態。"
      },
      {
        "id": "3.2-B07",
        "question": "已知Z為標準常態隨機變數，P(-1.96<Z<1.96)約為？",
        "options": [
          "A. 95%",
          "B. 99%",
          "C. 90%",
          "D. 68%"
        ],
        "answer": "A",
        "key_point": "常態臨界值",
        "analysis": "±1.96涵蓋中央95%的機率。"
      },
      {
        "id": "3.2-B08",
        "question": "下列何種分布常用於建模「單位時間內罕見事件發生次數」？",
        "options": [
          "A. 波松分布",
          "B. 二項分布",
          "C. 指數分布",
          "D. 均勻分布"
        ],
        "answer": "A",
        "key_point": "波松分布",
        "analysis": "波松分布建模固定區間內罕見事件發生次數。"
      },
      {
        "id": "3.2-B09",
        "question": "標準常態分布的偏態係數與峰度係數分別為？",
        "options": [
          "A. 0與3",
          "B. 1與0",
          "C. 0與0",
          "D. 3與0"
        ],
        "answer": "A",
        "key_point": "常態分布特性",
        "analysis": "常態分布偏態係數=0(對稱)，峰度係數=3。"
      },
      {
        "id": "3.2-B10",
        "question": "製造業每天不良品數服從波松分布λ=5。某天出現12個不良品，應如何解讀？",
        "options": [
          "A. 可能為異常，因12超出λ±3√λ≈5±6.7的範圍",
          "B. 正常波動",
          "C. 分布錯誤",
          "D. 資料有誤"
        ],
        "answer": "A",
        "key_point": "波松管制",
        "analysis": "波松分布λ±3√λ可作為管制界限，12>11.7屬異常。"
      }
    ],
    "進階": [
      {
        "id": "3.2-J01",
        "question": "執行Python：\nfrom scipy import stats\nprob=stats.binom.pmf(30,100,0.3)\n計算的是什麼？",
        "options": [
          "A. 100次試驗中成功30次的精確機率",
          "B. 成功次數≤30的機率",
          "C. 成功次數≥30的機率",
          "D. 30次試驗的成功機率"
        ],
        "answer": "A",
        "key_point": "二項PMF",
        "analysis": "binom.pmf計算P(X=k)的精確機率。"
      },
      {
        "id": "3.2-J02",
        "question": "某投資組合年報酬率N(12%,20%)。損失超過8%(即<-8%)的機率約為？",
        "options": [
          "A. 16%",
          "B. 2.5%",
          "C. 5%",
          "D. 32%"
        ],
        "answer": "A",
        "key_point": "VaR計算",
        "analysis": "Z=(-8-12)/20=-1，P(Z<-1)≈0.1587。"
      },
      {
        "id": "3.2-J03",
        "question": "品質管制中，製程平均偏移1.5σ且規格為μ±3σ。使用常態假設，不良率約為？",
        "options": [
          "A. 約6.68%",
          "B. 0.27%",
          "C. 約5%",
          "D. 約1%"
        ],
        "answer": "A",
        "key_point": "製程偏移",
        "analysis": "偏移1.5σ後一側4.5σ另一側1.5σ，不良率約6.68%。"
      },
      {
        "id": "3.2-J04",
        "question": "大數據分析中，數百萬筆樣本的平均數抽樣分布的標準誤(Standard Error)會？",
        "options": [
          "A. 非常小，因SE=σ/√n，n極大時趨近0",
          "B. 非常大",
          "C. 與樣本無關",
          "D. 等於母體標準差"
        ],
        "answer": "A",
        "key_point": "標準誤",
        "analysis": "SE=σ/√n，n極大時SE趨近0，估計非常精確。"
      },
      {
        "id": "3.2-J05",
        "question": "下列何者是使用常態分布假設計算VaR的主要缺點？",
        "options": [
          "A. 金融報酬常具厚尾特性，會低估極端損失",
          "B. 計算太慢",
          "C. 假設太保守",
          "D. 無缺點"
        ],
        "answer": "A",
        "key_point": "VaR限制",
        "analysis": "金融資產呈厚尾分布，常態假設嚴重低估極端風險。"
      },
      {
        "id": "3.2-J06",
        "question": "在貝氏統計中，Beta分布常作為二項分布的共軛先驗。原因為何？",
        "options": [
          "A. 後驗分布仍為Beta分布，計算閉式可解",
          "B. Beta計算最快",
          "C. Beta最簡單",
          "D. Beta無參數"
        ],
        "answer": "A",
        "key_point": "Beta共軛",
        "analysis": "Beta是二項分布的共軛先驗，貝氏更新後後驗仍為Beta。"
      },
      {
        "id": "3.2-J07",
        "question": "理賠金額分布為右偏，若抽取大樣本(n=500)，樣本平均數的抽樣分布為何？",
        "options": [
          "A. 根據CLT，近似常態分布",
          "B. 仍為右偏",
          "C. 左偏",
          "D. 均勻"
        ],
        "answer": "A",
        "key_point": "CLT與偏態",
        "analysis": "即使母體為偏態，大樣本下樣本平均數分布仍趨近常態。"
      },
      {
        "id": "3.2-J08",
        "question": "執行Python模擬：\nnp.random.seed(42)\ndata=np.random.exponential(scale=2,size=10000)\n此分布的特性為何？",
        "options": [
          "A. 右偏，平均=2",
          "B. 左偏，平均=2",
          "C. 常態分布",
          "D. 均勻分布"
        ],
        "answer": "A",
        "key_point": "指數分布",
        "analysis": "np.random.exponential(scale=2)產生平均=2的指數分布，為右偏。"
      },
      {
        "id": "3.2-J09",
        "question": "下列何者正確？關於中央極限定理的應用限制：",
        "options": [
          "A. 時間序列具強烈自相關時CLT不直接適用",
          "B. CLT永遠適用",
          "C. CLT只適用常態母體",
          "D. CLT需樣本>1000"
        ],
        "answer": "A",
        "key_point": "CLT限制",
        "analysis": "CLT假設獨立隨機抽樣，時間序列的自相關違反獨立性假設。"
      },
      {
        "id": "3.2-J10",
        "question": "在品質管制中，若規格上下限設定為μ±3σ且製程穩定，根據常態分布假設，不良率約為？",
        "options": [
          "A. 0.27%",
          "B. 5%",
          "C. 16%",
          "D. 32%"
        ],
        "answer": "A",
        "key_point": "3σ品質",
        "analysis": "常態分布下μ±3σ涵蓋99.73%的資料，超出範圍的機率約0.27%。"
      }
    ],
    "專業": [
      {
        "id": "3.2-Z01",
        "question": "何謂共軛先驗(Conjugate Prior)？",
        "options": [
          "A. 先驗與後驗屬同一分布族，計算方便",
          "B. 兩個獨立分布",
          "C. 兩個相關分布",
          "D. 先驗與資料分布相同"
        ],
        "answer": "A",
        "key_point": "共軛先驗",
        "analysis": "共軛先驗使貝氏更新後後驗與先驗同族，簡化計算。"
      },
      {
        "id": "3.2-Z02",
        "question": "執行Python：\nfrom scipy import stats\nX=stats.norm(0,1)\nprint(X.cdf(1.96))\n計算結果約為？",
        "options": [
          "A. 0.975",
          "B. 0.95",
          "C. 0.025",
          "D. 0.05"
        ],
        "answer": "A",
        "key_point": "CDF計算",
        "analysis": "norm.cdf(1.96)=P(Z≤1.96)≈0.975。"
      },
      {
        "id": "3.2-Z03",
        "question": "在處理高頻金融資料時，常態分布假設的主要問題為何？",
        "options": [
          "A. 金融報酬具厚尾與波動叢聚性，常態假設嚴重不足",
          "B. 計算太慢",
          "C. 無法離散化",
          "D. 參數過多"
        ],
        "answer": "A",
        "key_point": "金融資料特性",
        "analysis": "金融資料具厚尾、偏態及波動叢聚(volatility clustering)。"
      },
      {
        "id": "3.2-Z04",
        "question": "執行Python模擬擲公正骰子10000次：\nrolls=np.random.randint(1,7,10000)\np1=np.mean(rolls==1)\n此p1值在統計上代表？",
        "options": [
          "A. 點1出現的比例，理論上接近1/6",
          "B. 點1出現的期望值",
          "C. 點1出現的變異數",
          "D. 點1出現的標準差"
        ],
        "answer": "A",
        "key_point": "蒙地卡羅估計",
        "analysis": "大數法則下模擬比例趨近理論機率1/6≈0.1667。"
      },
      {
        "id": "3.2-Z05",
        "question": "在風險管理中，使用蒙地卡羅模擬(Monte Carlo Simulation)相較於解析解的主要優勢為何？",
        "options": [
          "A. 可處理複雜非線性與非常態情境，靈活性高",
          "B. 計算更快",
          "C. 結果更精確",
          "D. 不需設定參數"
        ],
        "answer": "A",
        "key_point": "蒙地卡羅優勢",
        "analysis": "蒙地卡羅模擬可處理解析法無法解決的複雜模型與分布假設。"
      },
      {
        "id": "3.2-Z06",
        "question": "在統計模擬中，設定np.random.seed(42)的主要目的為何？",
        "options": [
          "A. 確保隨機結果可重現，方便除錯與驗證",
          "B. 提高隨機性",
          "C. 加速計算",
          "D. 避免重複"
        ],
        "answer": "A",
        "key_point": "隨機種子",
        "analysis": "設定種子使隨機數生成序列固定，實驗結果可重現。"
      },
      {
        "id": "3.2-Z07",
        "question": "某地區年降雨量服從Gamma分布，形狀參數α=2、尺度參數β=100。平均降雨量為？",
        "options": [
          "A. 200mm",
          "B. 100mm",
          "C. 50mm",
          "D. 400mm"
        ],
        "answer": "A",
        "key_point": "Gamma分布平均",
        "analysis": "Gamma分布的平均數E[X]=α×β=2×100=200。"
      },
      {
        "id": "3.2-Z08",
        "question": "在機器學習中，將連續型特徵使用分位數(Quantile)轉換成均勻分布，這屬於何種處理？",
        "options": [
          "A. 分布映射(Quantile Transformation)",
          "B. 標準化",
          "C. 歸一化",
          "D. 離散化"
        ],
        "answer": "A",
        "key_point": "分位數轉換",
        "analysis": "分位數轉換將資料映射為指定的目標分布（如均勻或常態）。"
      },
      {
        "id": "3.2-Z09",
        "question": "貝氏統計中，事後機率(Posterior Probability)的計算公式為何？",
        "options": [
          "A. P(θ|X) = P(X|θ)P(θ) / P(X)",
          "B. P(X|θ) = P(θ|X)P(θ) / P(X)",
          "C. P(θ|X) = P(θ)P(X) / P(X|θ)",
          "D. P(θ|X) = P(X)P(θ) / P(X|θ)"
        ],
        "answer": "A",
        "key_point": "貝氏定理",
        "analysis": "後驗機率∝似然×先驗，分母P(X)為歸一化常數。"
      },
      {
        "id": "3.2-Z10",
        "question": "在假設檢定中，若樣本數增加但效果量不變，p值通常會如何變化？",
        "options": [
          "A. p值變小，更容易達到統計顯著",
          "B. p值變大",
          "C. p值不變",
          "D. p值與樣本數無關"
        ],
        "answer": "A",
        "key_point": "樣本數與p值",
        "analysis": "大樣本降低標準誤，使檢定統計量增大，p值隨之減小。"
      }
    ]
  },
  "3.3": {
    "基礎": [
      {
        "id": "3.3-B01",
        "question": "假設檢定中，p值的正確解讀為何？",
        "options": [
          "A. 虛無假設為真時，觀察到目前結果或更極端結果的機率",
          "B. 虛無假設為真的機率",
          "C. 對立假設為真的機率",
          "D. 犯錯的機率"
        ],
        "answer": "A",
        "key_point": "p值定義",
        "analysis": "p值是在H0為真下觀察到極端結果的條件機率。"
      },
      {
        "id": "3.3-B02",
        "question": "型一誤差(Type I Error)的定義為何？",
        "options": [
          "A. 拒絕真的虛無假設",
          "B. 接受假的虛無假設",
          "C. 拒絕假的虛無假設",
          "D. 接受真的虛無假設"
        ],
        "answer": "A",
        "key_point": "型一誤差",
        "analysis": "型一誤差=偽陽性，將真的H0誤判為假的。"
      },
      {
        "id": "3.3-B03",
        "question": "新藥試驗p=0.04(α=0.05)，但效果量很小。正確結論是？",
        "options": [
          "A. 統計顯著但需評估實務重要性",
          "B. 效果很好",
          "C. 應拒絕藥物",
          "D. 統計不顯著"
        ],
        "answer": "A",
        "key_point": "統計vs實務顯著",
        "analysis": "統計顯著不代表效果量夠大或有實務價值。"
      },
      {
        "id": "3.3-B04",
        "question": "電商A/B測試中，比較新版與舊版轉換率應使用？",
        "options": [
          "A. 兩母體比例檢定(z-test)",
          "B. 獨立t檢定",
          "C. 配對t檢定",
          "D. ANOVA"
        ],
        "answer": "A",
        "key_point": "比例檢定",
        "analysis": "轉換率為二元結果，比較兩組比例使用z-test for proportion。"
      },
      {
        "id": "3.3-B05",
        "question": "若α=0.05且為雙尾檢定，Z臨界值為？",
        "options": [
          "A. ±1.96",
          "B. ±2.58",
          "C. ±1.645",
          "D. ±1.00"
        ],
        "answer": "A",
        "key_point": "臨界值",
        "analysis": "雙尾α=0.05，每尾0.025，Z=±1.96。"
      },
      {
        "id": "3.3-B06",
        "question": "同一組受試者在訓練前後各測一次成績，應使用？",
        "options": [
          "A. 配對樣本t檢定",
          "B. 獨立樣本t檢定",
          "C. 卡方檢定",
          "D. ANOVA"
        ],
        "answer": "A",
        "key_point": "配對t檢定",
        "analysis": "同一受試者的前後測為相依樣本，使用配對t檢定。"
      },
      {
        "id": "3.3-B07",
        "question": "型二誤差(Type II Error)的定義為何？",
        "options": [
          "A. 接受假的虛無假設",
          "B. 拒絕真的虛無假設",
          "C. 拒絕假的虛無假設",
          "D. 接受真的虛無假設"
        ],
        "answer": "A",
        "key_point": "型二誤差",
        "analysis": "型二誤差=偽陰性，將假的H0誤判為真的。"
      },
      {
        "id": "3.3-B08",
        "question": "下列何者不是p值的常見誤用？",
        "options": [
          "A. p值越大效果量越大",
          "B. p<0.05代表H0為假",
          "C. p>0.05代表H0為真",
          "D. p值可重複性良好"
        ],
        "answer": "D",
        "key_point": "p值誤用",
        "analysis": "p值可重複性差是同領域知名問題，非p值的直接誤用。"
      },
      {
        "id": "3.3-B09",
        "question": "比較三組以上平均數是否有顯著差異，應使用？",
        "options": [
          "A. ANOVA(變異數分析)",
          "B. t檢定",
          "C. 卡方檢定",
          "D. Z檢定"
        ],
        "answer": "A",
        "key_point": "ANOVA",
        "analysis": "比較三組以上平均數使用ANOVA，避免多重比較問題。"
      },
      {
        "id": "3.3-B10",
        "question": "下列何者會影響檢定力(Statistical Power)？",
        "options": [
          "A. 樣本數、效果量、顯著水準",
          "B. 僅樣本數",
          "C. 僅效果量",
          "D. 僅顯著水準"
        ],
        "answer": "A",
        "key_point": "檢定力",
        "analysis": "檢定力由樣本數、效果量、α水準三者共同決定。"
      }
    ],
    "進階": [
      {
        "id": "3.3-J01",
        "question": "醫療檢驗敏感度95%、特異度95%、盛行率1%。陽性者患病的機率約？",
        "options": [
          "A. 約16%",
          "B. 95%",
          "C. 50%",
          "D. 80%"
        ],
        "answer": "A",
        "key_point": "PPV計算",
        "analysis": "PPV=(0.01×0.95)/(0.01×0.95+0.99×0.05)≈0.16。"
      },
      {
        "id": "3.3-J02",
        "question": "Python中執行單因子ANOVA應使用哪個函式？",
        "options": [
          "A. scipy.stats.f_oneway",
          "B. scipy.stats.ttest_ind",
          "C. scipy.stats.chisquare",
          "D. scipy.stats.pearsonr"
        ],
        "answer": "A",
        "key_point": "Python ANOVA",
        "analysis": "scipy.stats.f_oneway執行單因子變異數分析。"
      },
      {
        "id": "3.3-J03",
        "question": "欲比較兩組中位數且資料非常態，應使用？",
        "options": [
          "A. Mann-Whitney U檢定",
          "B. 獨立t檢定",
          "C. 配對t檢定",
          "D. ANOVA"
        ],
        "answer": "A",
        "key_point": "無母數檢定",
        "analysis": "Mann-Whitney U是t檢定的無母數替代法，不需常態假設。"
      },
      {
        "id": "3.3-J04",
        "question": "樣本數越大p值越容易顯著，原因為何？",
        "options": [
          "A. SE=σ/√n，n越大SE越小",
          "B. α變大",
          "C. β變小",
          "D. 效果量變大"
        ],
        "answer": "A",
        "key_point": "標準誤與樣本數",
        "analysis": "大樣本降低標準誤，使檢定統計量更容易達到顯著水準。"
      },
      {
        "id": "3.3-J05",
        "question": "ANOVA顯著後使用Tukey HSD事後比較，與直接兩兩t檢定有何差異？",
        "options": [
          "A. Tukey HSD控制整體型一誤差率",
          "B. Tukey HSD檢定力更高",
          "C. 兩者相同",
          "D. t檢定更準確"
        ],
        "answer": "A",
        "key_point": "Tukey HSD",
        "analysis": "Tukey HSD校正多重比較問題，控制整體α水準。"
      },
      {
        "id": "3.3-J06",
        "question": "因果推論中RCT(隨機對照試驗)的gold standard地位來自？",
        "options": [
          "A. 隨機化消除可觀測與不可觀測的混淆變數",
          "B. 樣本數最大",
          "C. 分析最簡單",
          "D. p值最小"
        ],
        "answer": "A",
        "key_point": "RCT優點",
        "analysis": "隨機化確保處理組與控制組在潛在結果上可比。"
      },
      {
        "id": "3.3-J07",
        "question": "大數據A/B測試當樣本數達百萬時，極小效果也能達統計顯著。解決方案為？",
        "options": [
          "A. 關注效果量(Effect Size)與實務顯著性",
          "B. 降低α",
          "C. 減少樣本",
          "D. 使用無母數檢定"
        ],
        "answer": "A",
        "key_point": "效果量",
        "analysis": "大樣本下應同時報告Cohen's d等效果量，評估實務重要性。"
      },
      {
        "id": "3.3-J08",
        "question": "A/B測試中，若同時比較5個不同版本的轉換率，何者正確？",
        "options": [
          "A. 需校正多重比較問題(如Bonferroni或FDR)",
          "B. 直接兩兩比較",
          "C. 選p值最小的版本",
          "D. 不需特別處理"
        ],
        "answer": "A",
        "key_point": "多重比較",
        "analysis": "同時比較多組會增加型一誤差，需校正。"
      },
      {
        "id": "3.3-J09",
        "question": "下列何者正確？關於多重假設檢定的校正：",
        "options": [
          "A. Bonferroni校正將α除以比較次數，但可能過度保守",
          "B. Bonferroni增加檢定力",
          "C. FDR比Bonferroni更保守",
          "D. 不需校正"
        ],
        "answer": "A",
        "key_point": "Bonferroni",
        "analysis": "Bonferroni控制FWER，但降低檢定力。"
      },
      {
        "id": "3.3-J10",
        "question": "效果量(Effect Size)指標Cohen's d越大代表什麼意義？",
        "options": [
          "A. 兩組平均數的差異在標準化尺度下越大",
          "B. p值越小",
          "C. 樣本數越大",
          "D. 顯著水準越高"
        ],
        "answer": "A",
        "key_point": "Cohen's d",
        "analysis": "Cohen's d = (μ1-μ2)/σ，以標準差為單位衡量組間差異大小。"
      }
    ],
    "專業": [
      {
        "id": "3.3-Z01",
        "question": "統計顯著性與實務顯著性的差異為何？",
        "options": [
          "A. 統計顯著只表示差異非隨機，實務顯著需評估效果量是否夠大",
          "B. 兩者相同",
          "C. 統計顯著等於實務重要",
          "D. 實務顯著不需統計檢定"
        ],
        "answer": "A",
        "key_point": "顯著性區別",
        "analysis": "大樣本下微小差距也能達統計顯著，但可能無實務價值。"
      },
      {
        "id": "3.3-Z02",
        "question": "執行Python卡方獨立性檢定：\nfrom scipy.stats import chi2_contingency\nct=pd.crosstab(df['gender'],df['buy'])\nchi2,p,dof,expected=chi2_contingency(ct)\n若p<0.05，結論為何？",
        "options": [
          "A. 性別與購買行為非獨立，有關聯",
          "B. 性別與購買獨立",
          "C. 性別影響購買金額",
          "D. 無法判斷"
        ],
        "answer": "A",
        "key_point": "卡方檢定",
        "analysis": "卡方獨立性檢定p<0.05表示兩變數非獨立。"
      },
      {
        "id": "3.3-Z03",
        "question": "下列何者不屬於無母數檢定的優點？",
        "options": [
          "A. 檢定力通常高於母數檢定",
          "B. 不需常態分布假設",
          "C. 對離群值較穩健",
          "D. 適用於順序尺度資料"
        ],
        "answer": "A",
        "key_point": "無母數優缺點",
        "analysis": "無母數檢定的檢定力通常低於母數檢定。"
      },
      {
        "id": "3.3-Z04",
        "question": "執行統計檢定前應先進行哪項檢查？",
        "options": [
          "A. 檢視資料是否符合檢定假設（常態性、變異數同質性等）",
          "B. 直接進行檢定",
          "C. 刪除所有離群值",
          "D. 增加樣本數"
        ],
        "answer": "A",
        "key_point": "檢定前檢查",
        "analysis": "檢定前需確認資料滿足該檢定的基本假設。"
      },
      {
        "id": "3.3-Z05",
        "question": "在進行兩組獨立樣本t檢定前，除了常態性假設外，還需檢查哪項假設？",
        "options": [
          "A. 變異數同質性(Levene檢定)",
          "B. 樣本獨立性",
          "C. 線性關係",
          "D. 無離群值"
        ],
        "answer": "A",
        "key_point": "變異數同質性",
        "analysis": "獨立t檢定假設兩組母體變異數相等，可用Levene檢定驗證。"
      },
      {
        "id": "3.3-Z06",
        "question": "A/B測試中，若同時比較10個版本的轉換率，使用Bonferroni校正後的顯著水準為？",
        "options": [
          "A. α/10 = 0.005",
          "B. α×10 = 0.5",
          "C. α不變",
          "D. α/2 = 0.025"
        ],
        "answer": "A",
        "key_point": "Bonferroni校正",
        "analysis": "Bonferroni校正將α除以比較次數K=10，0.05/10=0.005。"
      },
      {
        "id": "3.3-Z07",
        "question": "在統計檢定中，當樣本數極大時（如n=100,000），下列何者最可能發生？",
        "options": [
          "A. 極小的實務差異也能達統計顯著",
          "B. 檢定力下降",
          "C. p值不變",
          "D. 型一誤差率上升"
        ],
        "answer": "A",
        "key_point": "大樣本效應",
        "analysis": "大樣本下標準誤極小，任何微小差異都能被偵測為顯著。"
      },
      {
        "id": "3.3-Z08",
        "question": "重複抽樣100次並每次進行假設檢定，在H0為真的情況下，約有幾次會錯誤地拒絕H0？",
        "options": [
          "A. 約5次（α=0.05）",
          "B. 約1次",
          "C. 約50次",
          "D. 約0次"
        ],
        "answer": "A",
        "key_point": "型一誤差率",
        "analysis": "顯著水準α=0.05表示H0為真時仍有5%機率誤拒，100次約5次。"
      },
      {
        "id": "3.3-Z09",
        "question": "在統計推論中，信賴區間(Confidence Interval)的寬度受哪些因素影響？",
        "options": [
          "A. 樣本數、信賴水準、資料變異性",
          "B. 僅樣本數",
          "C. 僅信賴水準",
          "D. 僅資料變異性"
        ],
        "answer": "A",
        "key_point": "信賴區間",
        "analysis": "信賴區間寬度與樣本數成反比，與標準差和Z值成正比。"
      },
      {
        "id": "3.3-Z10",
        "question": "當資料違反常態假設且樣本數很小時，比較兩組中位數應使用？",
        "options": [
          "A. Mann-Whitney U檢定",
          "B. 獨立t檢定",
          "C. 配對t檢定",
          "D. 單因子ANOVA"
        ],
        "answer": "A",
        "key_point": "無母數替代",
        "analysis": "Mann-Whitney U檢定為t檢定的無母數版本，不需常態假設。"
      }
    ]
  },
  "4.1": {
    "基礎": [
      {
        "id": "4.1-B01",
        "question": "下列何者不是常見的資料品質維度？",
        "options": [
          "A. 複雜性",
          "B. 準確性",
          "C. 完整性",
          "D. 一致性"
        ],
        "answer": "A",
        "key_point": "資料品質維度",
        "analysis": "準確性、完整性、一致性、時效性等為常見資料品質維度。"
      },
      {
        "id": "4.1-B02",
        "question": "從所有員工中隨機選取10%進行滿意度調查，屬何種抽樣？",
        "options": [
          "A. 簡單隨機抽樣",
          "B. 分層抽樣",
          "C. 叢集抽樣",
          "D. 系統抽樣"
        ],
        "answer": "A",
        "key_point": "抽樣方法",
        "analysis": "隨機選取個體屬簡單隨機抽樣。"
      },
      {
        "id": "4.1-B03",
        "question": "檢查發現同一客戶出現兩次且資料相同，應做什麼？",
        "options": [
          "A. 去重複處理(Deduplication)",
          "B. 刪除所有資料",
          "C. 保留兩個",
          "D. 合併平均"
        ],
        "answer": "A",
        "key_point": "去重複",
        "analysis": "完全重複的記錄應移除以確保資料正確性。"
      },
      {
        "id": "4.1-B04",
        "question": "分層抽樣(Stratified Sampling)的優點為何？",
        "options": [
          "A. 確保各子群體按比例在樣本中代表",
          "B. 最簡單",
          "C. 最快",
          "D. 成本最低"
        ],
        "answer": "A",
        "key_point": "分層抽樣",
        "analysis": "分層抽樣保證各層(如性別、年齡層)的代表性。"
      },
      {
        "id": "4.1-B05",
        "question": "電話調查僅在白天進行，可能造成？",
        "options": [
          "A. 覆蓋偏差(Coverage Bias)",
          "B. 回應偏差",
          "C. 回憶偏差",
          "D. 確認偏差"
        ],
        "answer": "A",
        "key_point": "覆蓋偏差",
        "analysis": "白天不在家的人無法被調查，產生覆蓋偏差。"
      },
      {
        "id": "4.1-B06",
        "question": "在資料清理中，處理缺失值的第一步應為？",
        "options": [
          "A. 分析缺失機制（隨機/非隨機）",
          "B. 直接刪除",
          "C. 全部填0",
          "D. 全部填平均數"
        ],
        "answer": "A",
        "key_point": "缺失值處理",
        "analysis": "需先了解缺失原因再選擇適當處理策略。"
      },
      {
        "id": "4.1-B07",
        "question": "下列何者屬於非隨機缺失(MNAR)？",
        "options": [
          "A. 收入越高者越不願填寫收入",
          "B. 資料隨機缺失",
          "C. 系統錯誤造成隨機缺失",
          "D. 問卷漏印"
        ],
        "answer": "A",
        "key_point": "MNAR",
        "analysis": "MNAR指缺失與未觀測的數值本身有關。"
      },
      {
        "id": "4.1-B08",
        "question": "客戶年齡欄位中有-1、999等不合理值。最佳處理方式？",
        "options": [
          "A. 先釐清數值含義（缺失代碼/輸入錯誤）再對應處理",
          "B. 全部刪除",
          "C. 全部填中位數",
          "D. 忽略異常"
        ],
        "answer": "A",
        "key_point": "異常值處理",
        "analysis": "不合理值可能是缺失代碼或錯誤，需先理解含義。"
      },
      {
        "id": "4.1-B09",
        "question": "網路問卷中同一IP短時間內提交多份回覆，應如何處理？",
        "options": [
          "A. 使用IP與時間戳過濾可疑重複提交",
          "B. 全部保留",
          "C. 全部刪除",
          "D. 隨機保留一份"
        ],
        "answer": "A",
        "key_point": "問卷品質",
        "analysis": "同一IP短時間提交多份可能為機器人或重複填答。"
      },
      {
        "id": "4.1-B10",
        "question": "資料集中「年收入」欄位缺失率達40%。下列何者是最適合的處理策略？",
        "options": [
          "A. 利用其他欄位(如職業、學歷)建立模型預測填入",
          "B. 直接刪除該欄位",
          "C. 全部填0",
          "D. 全部填平均數"
        ],
        "answer": "A",
        "key_point": "缺失值插補",
        "analysis": "高缺失率不宜刪除，使用模型插補可保留更多資訊。"
      }
    ],
    "進階": [
      {
        "id": "4.1-J01",
        "question": "執行Python：\ndf.dropna(thresh=10)\n參數thresh=10的意義為何？",
        "options": [
          "A. 保留至少10個非缺失值的列",
          "B. 刪除10列",
          "C. 保留10個樣本",
          "D. 刪除缺失率>10%的列"
        ],
        "answer": "A",
        "key_point": "pandas dropna",
        "analysis": "thresh=10表示該列若非缺失值數≥10則保留。"
      },
      {
        "id": "4.1-J02",
        "question": "大規模資料清理中，自動化管線的主要挑戰為何？",
        "options": [
          "A. 異常情況需人工判斷，完全自動化可能導入系統性錯誤",
          "B. 速度太慢",
          "C. 成本太高",
          "D. 不需要自動化"
        ],
        "answer": "A",
        "key_point": "自動化清理挑戰",
        "analysis": "自動化清理需謹慎設計規則，邊界案例仍需人工介入。"
      },
      {
        "id": "4.1-J03",
        "question": "文字資料清理中，將「lol」「laughing out loud」「😂」統一轉為「開心」屬於？",
        "options": [
          "A. 正規化(Normalization)",
          "B. 標準化",
          "C. 標記化",
          "D. 詞幹提取"
        ],
        "answer": "A",
        "key_point": "文字正規化",
        "analysis": "將不同表達方式的同義詞轉為標準形式屬文字正規化。"
      },
      {
        "id": "4.1-J04",
        "question": "整合客戶資料時，同一客戶在不同系統中的姓名、電話略有差異，應使用？",
        "options": [
          "A. 機率性記錄連結(Probabilistic Record Linkage)",
          "B. 精確比對",
          "C. 隨機選擇",
          "D. 合併所有欄位"
        ],
        "answer": "A",
        "key_point": "記錄連結",
        "analysis": "機率性記錄連結可處理跨系統間不完全一致的記錄比對。"
      },
      {
        "id": "4.1-J05",
        "question": "Python中處理CSV大型檔案(>10GB)的最佳方式？",
        "options": [
          "A. 使用chunksize參數分批讀取",
          "B. 直接pandas.read_csv",
          "C. 用Excel開啟",
          "D. 轉為JSON"
        ],
        "answer": "A",
        "key_point": "大檔案處理",
        "analysis": "chunksize分批讀取避免記憶體不足。"
      },
      {
        "id": "4.1-J06",
        "question": "大數據清理中，發現同一欄位混雜日期的多種格式(2024/1/1, Jan 1 2024, 01/01/24)。應如何處理？",
        "options": [
          "A. 使用日期解析庫(dateutil/pandas)統一標準化為ISO格式",
          "B. 刪除該欄位",
          "C. 保留所有格式",
          "D. 轉為文字"
        ],
        "answer": "A",
        "key_point": "日期標準化",
        "analysis": "多種日期格式需統一解析並標準化為ISO 8601格式。"
      },
      {
        "id": "4.1-J07",
        "question": "處理IoT感測器資料時，時間戳偏移問題如何解決？",
        "options": [
          "A. NTP對時+串流時間窗口校正亂序事件",
          "B. 忽略時間戳",
          "C. 使用接收時間",
          "D. 重新排序"
        ],
        "answer": "A",
        "key_point": "時間戳校正",
        "analysis": "IoT裝置時鐘不同步需NTP及窗口機制校正。"
      },
      {
        "id": "4.1-J08",
        "question": "ML專案中發現訓練資料的標籤有雜訊(Label Noise)，應如何處理？",
        "options": [
          "A. 使用雜訊穩健的損失函數或清洗標籤",
          "B. 直接訓練",
          "C. 刪除所有資料",
          "D. 增加更多資料"
        ],
        "answer": "A",
        "key_point": "標籤雜訊",
        "analysis": "使用對標籤雜訊穩健的損失函數(如對稱交叉熵)可降低影響。"
      },
      {
        "id": "4.1-J09",
        "question": "下列何者正確？關於資料譜系(Data Lineage)：",
        "options": [
          "A. 記錄資料從來源到最終使用的完整轉換過程",
          "B. 資料的基因序列",
          "C. 資料的血型分類",
          "D. 資料的家族樹"
        ],
        "answer": "A",
        "key_point": "資料譜系",
        "analysis": "資料譜系是資料治理的關鍵，用於追溯與稽核。"
      },
      {
        "id": "4.1-J10",
        "question": "資料清理中，若年齡欄位出現負值或超過150的不合理值，最佳處理方式為何？",
        "options": [
          "A. 設定合理範圍並將異常值標記為缺失或進行修正",
          "B. 直接刪除所有含異常值的記錄",
          "C. 忽略異常值直接分析",
          "D. 全部填0"
        ],
        "answer": "A",
        "key_point": "異常值處理策略",
        "analysis": "設定領域合理範圍（如0~120）後，將超出範圍的值視為缺失並進行插補。"
      }
    ],
    "專業": [
      {
        "id": "4.1-Z01",
        "question": "隱私保護下的資料合成(Synthetic Data)在資料收集中的應用是？",
        "options": [
          "A. 生成與原始統計特性相似的合成資料，避免隱私風險",
          "B. 複製原始資料",
          "C. 刪除敏感欄位",
          "D. 加密資料"
        ],
        "answer": "A",
        "key_point": "合成資料",
        "analysis": "合成資料保留分布但不含真實個體資訊，可用於隱私保護。"
      },
      {
        "id": "4.1-Z02",
        "question": "在串流資料處理中，使用視窗(Window)機制的主要目的為何？",
        "options": [
          "A. 將無限串流切割為有限區間進行分析",
          "B. 增加資料量",
          "C. 減少延遲",
          "D. 提高精確度"
        ],
        "answer": "A",
        "key_point": "串流視窗",
        "analysis": "串流資料是無限的，需透過時間/計數視窗切割為可處理的批次。"
      },
      {
        "id": "4.1-Z03",
        "question": "下列何者正確？關於大數據清理中的ETL與ELT差異：",
        "options": [
          "A. ELT先載入後轉換，適合資料湖架構",
          "B. 兩者完全相同",
          "C. ETL先載入後轉換",
          "D. ELT需要更多儲存空間"
        ],
        "answer": "A",
        "key_point": "ETL vs ELT",
        "analysis": "ELT(raw data→載入→轉換)利用資料庫運算力，適合非結構化資料。"
      },
      {
        "id": "4.1-Z04",
        "question": "處理資料偏差(Data Bias)時，若訓練資料缺少年長使用者族群，下列何者正確？",
        "options": [
          "A. 需針對該族群補充收集資料，否則模型無法泛化",
          "B. 增加訓練次數即可",
          "C. 標準化可解決此問題",
          "D. 使用更複雜的模型"
        ],
        "answer": "A",
        "key_point": "資料偏差補救",
        "analysis": "訓練資料缺失特定族群會造成模型對該族群的表現不佳。"
      },
      {
        "id": "4.1-Z05",
        "question": "資料清理中，處理「重複記錄」時，若兩筆記錄除ID外所有欄位完全相同，最適合的做法是？",
        "options": [
          "A. 保留一筆並記錄重複次數",
          "B. 全部保留",
          "C. 隨機刪除一筆",
          "D. 合併平均"
        ],
        "answer": "A",
        "key_point": "重複記錄處理",
        "analysis": "完全重複的記錄應去重，並可記錄重複次數作為權重或品質指標。"
      },
      {
        "id": "4.1-Z06",
        "question": "處理大型CSV檔案（超過記憶體）時，使用pandas應如何讀取？",
        "options": [
          "A. 設定chunksize參數分批讀取",
          "B. 直接read_csv",
          "C. 改用Excel",
          "D. 轉為JSON"
        ],
        "answer": "A",
        "key_point": "大檔案分批讀取",
        "analysis": "pd.read_csv('file.csv', chunksize=10000)回傳迭代器，可分批處理。"
      },
      {
        "id": "4.1-Z07",
        "question": "在資料品質評估中，資料的「時效性」(Timeliness)指的是？",
        "options": [
          "A. 資料的更新頻率是否滿足分析需求",
          "B. 資料是否完整",
          "C. 資料是否準確",
          "D. 資料是否一致"
        ],
        "answer": "A",
        "key_point": "時效性",
        "analysis": "時效性評估資料從產生到可用之間的時間延遲是否在可接受範圍內。"
      },
      {
        "id": "4.1-Z08",
        "question": "使用Python進行資料清理時，df['col'].str.strip()的作用為何？",
        "options": [
          "A. 移除字串欄位前後的空白字元",
          "B. 移除所有空白",
          "C. 刪除該欄位",
          "D. 將字串轉為大寫"
        ],
        "answer": "A",
        "key_point": "strip()函數",
        "analysis": "strip()移除字串開頭和結尾的空白字元，是常見的文字清理步驟。"
      },
      {
        "id": "4.1-Z09",
        "question": "在資料整合中，不同系統對「客戶性別」分別使用(M/F)與(1/2)編碼，應如何處理？",
        "options": [
          "A. 建立統一編碼映射表進行標準化",
          "B. 保留原始編碼",
          "C. 全部刪除",
          "D. 使用其中一種"
        ],
        "answer": "A",
        "key_point": "編碼標準化",
        "analysis": "跨系統資料整合需建立統一的編碼標準，確保資料一致性。"
      },
      {
        "id": "4.1-Z10",
        "question": "在資料收集階段，為了避免取樣偏差(Sampling Bias)，應採用何種策略？",
        "options": [
          "A. 隨機抽樣確保母體中各群體均有代表性",
          "B. 方便抽樣",
          "C. 只收集活躍用戶",
          "D. 只收集完整資料"
        ],
        "answer": "A",
        "key_point": "避免取樣偏差",
        "analysis": "隨機抽樣是避免選擇偏差的基本方法，確保樣本代表母體。"
      }
    ]
  },
  "4.2": {
    "基礎": [
      {
        "id": "4.2-B01",
        "question": "下列何者不屬於關聯式資料庫的特性？",
        "options": [
          "A. Schema-on-write：寫入前需定義結構",
          "B. ACID交易保證",
          "C. 支援SQL查詢",
          "D. Schema-on-read：讀取時才定義結構"
        ],
        "answer": "D",
        "key_point": "關聯式DB特性",
        "analysis": "Schema-on-read是NoSQL的特性，關聯式資料庫需先定義結構。"
      },
      {
        "id": "4.2-B02",
        "question": "資料庫正規化(Normalization)的主要目的是？",
        "options": [
          "A. 減少資料重複與更新異常",
          "B. 增加查詢速度",
          "C. 減少儲存空間",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "正規化目的",
        "analysis": "正規化將資料拆分為多個表格，減少冗餘與避免更新異常。"
      },
      {
        "id": "4.2-B03",
        "question": "資料庫ACID中的C代表？",
        "options": [
          "A. 一致性(Consistency)",
          "B. 持續性(Continuity)",
          "C. 正確性(Correctness)",
          "D. 完整性(Completeness)"
        ],
        "answer": "A",
        "key_point": "ACID的C",
        "analysis": "Consistency確保交易前後資料庫保持完整性。"
      },
      {
        "id": "4.2-B04",
        "question": "NoSQL資料庫的四大分類不包括下列何者？",
        "options": [
          "A. 關聯式",
          "B. 文件型(Document)",
          "C. 鍵值型(Key-Value)",
          "D. 圖形型(Graph)"
        ],
        "answer": "A",
        "key_point": "NoSQL分類",
        "analysis": "NoSQL四大類：文件型、鍵值型、欄位型、圖形型。"
      },
      {
        "id": "4.2-B05",
        "question": "資料倉儲(Data Warehouse)與資料庫的主要差異為何？",
        "options": [
          "A. 資料倉儲整合多來源資料，支援分析型查詢",
          "B. 資料倉儲速度更快",
          "C. 資料庫儲存更多資料",
          "D. 兩者無差異"
        ],
        "answer": "A",
        "key_point": "資料倉儲",
        "analysis": "資料倉儲專為分析設計，整合異質來源資料。"
      },
      {
        "id": "4.2-B06",
        "question": "資料湖(Data Lake)的核心概念為何？",
        "options": [
          "A. 以原始格式儲存大量結構化與非結構化資料",
          "B. 只能儲存結構化資料",
          "C. 資料需先清理才能存入",
          "D. 等同於資料倉儲"
        ],
        "answer": "A",
        "key_point": "資料湖",
        "analysis": "資料湖儲存原始格式的大量多樣資料，schema-on-read。"
      },
      {
        "id": "4.2-B07",
        "question": "CAP定理中的P代表？",
        "options": [
          "A. 分區容錯(Partition Tolerance)",
          "B. 效能(Performance)",
          "C. 持久性(Persistence)",
          "D. 處理能力(Processing)"
        ],
        "answer": "A",
        "key_point": "CAP定理",
        "analysis": "Partition Tolerance指系統在網路分區故障時仍能正常運行。"
      },
      {
        "id": "4.2-B08",
        "question": "索引(Index)在資料庫中的主要功能？",
        "options": [
          "A. 加速資料查詢速度",
          "B. 壓縮資料",
          "C. 加密資料",
          "D. 備份資料"
        ],
        "answer": "A",
        "key_point": "索引功能",
        "analysis": "索引透過建立額外資料結構加速查詢。"
      },
      {
        "id": "4.2-B09",
        "question": "下列何者為NoSQL資料庫的典型應用場景？",
        "options": [
          "A. 大規模社群媒體即時資料",
          "B. 銀行交易系統",
          "C. 庫存管理系統",
          "D. 薪資計算系統"
        ],
        "answer": "A",
        "key_point": "NoSQL應用",
        "analysis": "NoSQL適合大規模、高併發、schema靈活的場景。"
      },
      {
        "id": "4.2-B10",
        "question": "關聯式資料庫中，用來唯一識別每筆記錄的欄位是？",
        "options": [
          "A. 主鍵(Primary Key)",
          "B. 外鍵(Foreign Key)",
          "C. 索引(Index)",
          "D. 唯一鍵(Unique Key)"
        ],
        "answer": "A",
        "key_point": "主鍵",
        "analysis": "主鍵唯一標識表格中的每一筆記錄。"
      }
    ],
    "進階": [
      {
        "id": "4.2-J01",
        "question": "將原始CSV檔案直接載入Hadoop再進行資料轉換，此模式稱為？",
        "options": [
          "A. ELT(Extract-Load-Transform)",
          "B. ETL(Extract-Transform-Load)",
          "C. ETLT",
          "D. LTE"
        ],
        "answer": "A",
        "key_point": "ELT",
        "analysis": ""
      },
      {
        "id": "4.2-J02",
        "question": "一家跨國企業需即時同步分布全球的訂單資料。使用CAP定理分析，應優先滿足哪兩項？",
        "options": [
          "A. 可用性(Availability)與分區容錯(Partition Tolerance)",
          "B. 一致性與可用性",
          "C. 一致性與分區容錯",
          "D. 三者皆需"
        ],
        "answer": "A",
        "key_point": "CAP取捨",
        "analysis": ""
      },
      {
        "id": "4.2-J03",
        "question": "資料倉儲中使用星狀模型(Star Schema)，事實表(Fact Table)的核心特性是？",
        "options": [
          "A. 儲存可量化的指標資料，透過外鍵連接維度表",
          "B. 儲存所有維度資訊",
          "C. 儲存中繼資料",
          "D. 儲存索引資訊"
        ],
        "answer": "A",
        "key_point": "星狀模型",
        "analysis": ""
      },
      {
        "id": "4.2-J04",
        "question": "資料湖方案中最容易出現的問題是？",
        "options": [
          "A. 資料沼澤(Data Swamp)：缺乏治理造成資料無法使用",
          "B. 儲存空間不足",
          "C. 查詢速度太慢",
          "D. 成本太高"
        ],
        "answer": "A",
        "key_point": "資料沼澤",
        "analysis": ""
      },
      {
        "id": "4.2-J05",
        "question": "執行Python SQL查詢：\nimport sqlite3\nconn=sqlite3.connect('test.db')\nc=conn.cursor()\nc.execute('SELECT COUNT(*) FROM sales WHERE year=2024')\n此查詢回傳的資料型別為？",
        "options": [
          "A. tuple",
          "B. list",
          "C. dict",
          "D. int"
        ],
        "answer": "A",
        "key_point": "sqlite回傳型別",
        "analysis": ""
      },
      {
        "id": "4.2-J06",
        "question": "Cassandra資料庫使用哪種資料模型？",
        "options": [
          "A. 寬列儲存(Wide-column Store)",
          "B. 文件儲存",
          "C. 鍵值儲存",
          "D. 圖形儲存"
        ],
        "answer": "A",
        "key_point": "Cassandra型別",
        "analysis": ""
      },
      {
        "id": "4.2-J07",
        "question": "某公司將所有資料以原始CSV/JSON格式存入HDFS/S3，需要時才定義結構。此架構為？",
        "options": [
          "A. 資料湖(Data Lake)",
          "B. 資料倉儲",
          "C. 關聯式資料庫",
          "D. OLAP Cube"
        ],
        "answer": "A",
        "key_point": "資料湖辨識",
        "analysis": "資料湖以原始格式儲存多樣資料，Schema-on-read。"
      },
      {
        "id": "4.2-J08",
        "question": "執行Python pandas：\ndf=pd.read_sql('SELECT * FROM orders',conn)\ndf.groupby('region')['amount'].sum()\n此操作對應SQL中的哪個語句？",
        "options": [
          "A. SELECT region, SUM(amount) FROM orders GROUP BY region",
          "B. SELECT * FROM orders",
          "C. SELECT SUM(amount) FROM orders",
          "D. SELECT region FROM orders"
        ],
        "answer": "A",
        "key_point": "pandas對應SQL",
        "analysis": "groupby+sum對應SQL的GROUP BY配合聚合函數。"
      },
      {
        "id": "4.2-J09",
        "question": "下列何者正確？關於反規化(Denormalization)在數據倉儲中的應用：",
        "options": [
          "A. 反規化犧牲部分正規化以換取查詢效能",
          "B. 反規化增加資料冗餘無優點",
          "C. 正規化永遠優於反規化",
          "D. 反規化違反資料庫原則"
        ],
        "answer": "A",
        "key_point": "反規化",
        "analysis": "數據倉儲中適度反規化可減少JOIN，提升查詢效能。"
      },
      {
        "id": "4.2-J10",
        "question": "在資料庫中，使用VIEW（視圖）的主要優點為何？",
        "options": [
          "A. 封裝複雜查詢邏輯、提供安全性與資料抽象層",
          "B. 加快查詢速度",
          "C. 減少儲存空間",
          "D. 取代原始表格"
        ],
        "answer": "A",
        "key_point": "資料庫視圖",
        "analysis": "視圖為虛擬表格，可封裝複雜SQL邏輯並限制用戶存取特定資料。"
      }
    ],
    "專業": [
      {
        "id": "4.2-Z01",
        "question": "大數據架構中Lambda Architecture與Kappa Architecture的主要差異為何？",
        "options": [
          "A. Lambda有批次與串流雙路徑，Kappa僅串流",
          "B. Kappa有雙路徑",
          "C. 兩者相同",
          "D. Lambda僅批次"
        ],
        "answer": "A",
        "key_point": "Lambda vs Kappa",
        "analysis": "Lambda同時維護批次與串流兩套資料路徑，Kappa僅保留串流。"
      },
      {
        "id": "4.2-Z02",
        "question": "設計大規模資料管線時，選擇SLA為事件一致(Eventual Consistency)的後端儲存，可能帶來的挑戰為？",
        "options": [
          "A. 讀取可能讀到舊資料，應用需容忍不一致",
          "B. 無法寫入資料",
          "C. 查詢速度變慢",
          "D. 儲存空間不足"
        ],
        "answer": "A",
        "key_point": "最終一致性",
        "analysis": "最終一致性允許短暫不一致，需應用層設計補償機制。"
      },
      {
        "id": "4.2-Z03",
        "question": "下列何者正確？關於資料倉儲中的緩慢維度變更(SCD Type 2)：",
        "options": [
          "A. 新增記錄保存維度成員的歷史變更",
          "B. 覆蓋原記錄",
          "C. 刪除舊記錄",
          "D. 不做任何變更"
        ],
        "answer": "A",
        "key_point": "SCD Type 2",
        "analysis": "SCD Type 2為每個維度值變更新增一筆記錄，完整保留歷史。"
      },
      {
        "id": "4.2-Z04",
        "question": "金融業選擇資料庫時，優先要求交易一致性與持久化。最適合的方案為？",
        "options": [
          "A. 關聯式資料庫(支援ACID)",
          "B. NoSQL文件資料庫",
          "C. 鍵值資料庫",
          "D. 記憶體資料庫"
        ],
        "answer": "A",
        "key_point": "ACID場景",
        "analysis": "金融交易對一致性要求嚴苛，ACID關聯式資料庫為首選。"
      },
      {
        "id": "4.2-Z05",
        "question": "在資料倉儲設計中，星狀模型(Star Schema)的核心組成為？",
        "options": [
          "A. 一個事實表連接多個維度表",
          "B. 多個事實表",
          "C. 只有維度表",
          "D. 正規化表格"
        ],
        "answer": "A",
        "key_point": "星狀模型",
        "analysis": "星狀模型由中央事實表與周邊維度表組成，適合OLAP查詢。"
      },
      {
        "id": "4.2-Z06",
        "question": "NoSQL資料庫中，文件型資料庫(Document Store)如MongoDB的資料儲存格式為？",
        "options": [
          "A. JSON/BSON格式的靈活結構文件",
          "B. 關聯式表格",
          "C. 鍵值對",
          "D. 圖形結構"
        ],
        "answer": "A",
        "key_point": "文件資料庫",
        "analysis": "MongoDB以BSON(類似JSON)格式儲存文件，結構靈活。"
      },
      {
        "id": "4.2-Z07",
        "question": "在CAP定理中，當網路分區發生時(P)，系統需要在C與A之間取捨。CP系統的選擇是？",
        "options": [
          "A. 犧牲可用性，確保一致性",
          "B. 犧牲一致性",
          "C. 兩者兼顧",
          "D. 犧牲分區容錯"
        ],
        "answer": "A",
        "key_point": "CP系統",
        "analysis": "CP系統(如HBase)在分區發生時停止服務以確保資料一致。"
      },
      {
        "id": "4.2-Z08",
        "question": "SQL中，LEFT JOIN與INNER JOIN的主要差異為何？",
        "options": [
          "A. LEFT JOIN保留左表所有記錄，右表無匹配則為NULL",
          "B. LEFT JOIN只回傳匹配的記錄",
          "C. 兩者相同",
          "D. INNER JOIN保留左表所有記錄"
        ],
        "answer": "A",
        "key_point": "JOIN類型",
        "analysis": "LEFT JOIN保留左表全部記錄，右表無匹配欄位以NULL填充。"
      },
      {
        "id": "4.2-Z09",
        "question": "資料庫索引(Index)下列何種操作無法加速？",
        "options": [
          "A. UPDATE大量資料時的寫入操作",
          "B. SELECT查詢",
          "C. WHERE過濾",
          "D. JOIN關聯"
        ],
        "answer": "A",
        "key_point": "索引限制",
        "analysis": "索引加速讀取但降低寫入效能，因每次寫入需同步更新索引。"
      },
      {
        "id": "4.2-Z10",
        "question": "在資料儲存中，列式儲存(Columnar Storage)如Parquet最適合哪種查詢場景？",
        "options": [
          "A. 僅讀取部分欄位的分析型查詢",
          "B. 頻繁更新單筆記錄的OLTP",
          "C. 每次讀取全部欄位",
          "D. 大量INSERT操作"
        ],
        "answer": "A",
        "key_point": "列式儲存",
        "analysis": "列式儲存僅讀取需要的欄位，大幅減少I/O，適合分析型工作負載。"
      }
    ]
  },
  "4.3": {
    "基礎": [
      {
        "id": "4.3-B01",
        "question": "Hadoop生態系統中，負責分散式儲存的組件是？",
        "options": [
          "A. HDFS(Hadoop Distributed File System)",
          "B. MapReduce",
          "C. YARN",
          "D. Hive"
        ],
        "answer": "A",
        "key_point": "HDFS",
        "analysis": "HDFS為Hadoop的分散式檔案系統，提供大規模資料儲存。"
      },
      {
        "id": "4.3-B02",
        "question": "Apache Spark的核心資料抽象概念為何？",
        "options": [
          "A. RDD(Resilient Distributed Dataset)",
          "B. DataFrame",
          "C. Dataset",
          "D. SQL Table"
        ],
        "answer": "A",
        "key_point": "Spark RDD",
        "analysis": "RDD是Spark最基本的分散式資料抽象。"
      },
      {
        "id": "4.3-B03",
        "question": "下列何者不是雲端運算的服務模型？",
        "options": [
          "A. DaaS(Data as a Service)",
          "B. IaaS(Infrastructure as a Service)",
          "C. PaaS(Platform as a Service)",
          "D. SaaS(Software as a Service)"
        ],
        "answer": "A",
        "key_point": "雲端服務模型",
        "analysis": "IaaS/PaaS/SaaS為三大雲端服務模型。"
      },
      {
        "id": "4.3-B04",
        "question": "Hive與Pig在Hadoop生態系中的定位為何？",
        "options": [
          "A. Hive用SQL-like分析，Pig用資料流程",
          "B. 兩者完全相同",
          "C. 都是資料庫",
          "D. 都是排程工具"
        ],
        "answer": "A",
        "key_point": "Hive vs Pig",
        "analysis": "Hive將類SQL轉MapReduce，Pig以腳本定義資料流程。"
      },
      {
        "id": "4.3-B05",
        "question": "大數據批次處理(Batch Processing)與串流處理的主要差異？",
        "options": [
          "A. 批次處理固定間隔處理大量累積資料，串流即時處理",
          "B. 批次更快",
          "C. 串流更準確",
          "D. 兩者相同"
        ],
        "answer": "A",
        "key_point": "批次vs串流",
        "analysis": "批次處理延遲高但準確，串流處理延遲低但可能不精確。"
      },
      {
        "id": "4.3-B06",
        "question": "Apache Kafka的核心應用場景為何？",
        "options": [
          "A. 分散式串流訊息佇列與事件流平台",
          "B. 資料庫儲存",
          "C. 批次處理",
          "D. 機器學習"
        ],
        "answer": "A",
        "key_point": "Kafka",
        "analysis": "Kafka是高吞吐量的分散式串流平台。"
      },
      {
        "id": "4.3-B07",
        "question": "Spark SQL的主要功能？",
        "options": [
          "A. 在Spark上支援結構化資料的SQL查詢",
          "B. 取代Hive",
          "C. 儲存資料",
          "D. 排程任務"
        ],
        "answer": "A",
        "key_point": "Spark SQL",
        "analysis": "Spark SQL提供結構化資料的SQL查詢接口。"
      },
      {
        "id": "4.3-B08",
        "question": "資料處理管線中，如果一個步驟失敗，需要有機制重新執行。此概念稱為？",
        "options": [
          "A. 容錯(Fault Tolerance)",
          "B. 監控",
          "C. 警告",
          "D. 備份"
        ],
        "answer": "A",
        "key_point": "容錯",
        "analysis": "容錯確保部分失敗時可重新執行不影響整體結果。"
      },
      {
        "id": "4.3-B09",
        "question": "下列何者屬於Apache Spark的串流處理引擎？",
        "options": [
          "A. Spark Streaming",
          "B. HDFS",
          "C. MapReduce",
          "D. Oozie"
        ],
        "answer": "A",
        "key_point": "Spark Streaming",
        "analysis": "Spark Streaming將串流切成微批次(micro-batch)處理。"
      },
      {
        "id": "4.3-B10",
        "question": "Data Pipeline中Orchestration(編排)工具的主要功能？",
        "options": [
          "A. 協調多個任務的依賴關係與執行順序",
          "B. 儲存資料",
          "C. 視覺化資料",
          "D. 清洗資料"
        ],
        "answer": "A",
        "key_point": "工作流編排",
        "analysis": "Airflow等Orchestration工具管理任務依賴與排程。"
      }
    ],
    "進階": [
      {
        "id": "4.3-J01",
        "question": "下列關於MapReduce的敘述何者正確？",
        "options": [
          "A. Map階段處理Key-Value對，Reduce階段彙總結果",
          "B. Map和Reduce同時執行",
          "C. Reduce先於Map",
          "D. 只有Map階段"
        ],
        "answer": "A",
        "key_point": "MapReduce流程",
        "analysis": ""
      },
      {
        "id": "4.3-J02",
        "question": "Spark中RDD轉DataFrame的優點為何？",
        "options": [
          "A. DataFrame經Catalyst優化器最佳化執行計畫",
          "B. 兩者速度相同",
          "C. DataFrame無法使用SQL",
          "D. RDD功能更強"
        ],
        "answer": "A",
        "key_point": "Catalyst優化",
        "analysis": ""
      },
      {
        "id": "4.3-J03",
        "question": "大數據系統中採用資料本地性(Data Locality)的主要目的？",
        "options": [
          "A. 將計算移至資料所在節點，減少網路傳輸",
          "B. 將資料移至計算節點",
          "C. 複製資料到所有節點",
          "D. 集中儲存所有資料"
        ],
        "answer": "A",
        "key_point": "資料本地性",
        "analysis": ""
      },
      {
        "id": "4.3-J04",
        "question": "使用Spark處理100GB的CSV檔案時，下列何種策略最佳？",
        "options": [
          "A. 以Parquet格式儲存，利用列式儲存壓縮與選擇性讀取",
          "B. 原樣使用CSV",
          "C. 轉為JSON",
          "D. 轉為XML"
        ],
        "answer": "A",
        "key_point": "Parquet",
        "analysis": ""
      },
      {
        "id": "4.3-J05",
        "question": "Airflow DAG中依賴關係的定義方式？",
        "options": [
          "A. task1 >> task2 表示task2依賴task1",
          "B. task2 >> task1",
          "C. task1 -> task2",
          "D. task1 | task2"
        ],
        "answer": "A",
        "key_point": "Airflow DAG",
        "analysis": ""
      },
      {
        "id": "4.3-J06",
        "question": "資料工程團隊需要即時串流處理百萬級IoT裝置事件，同時需支援狀態管理。最適合選擇？",
        "options": [
          "A. Apache Flink",
          "B. HDFS",
          "C. Hive",
          "D. MapReduce"
        ],
        "answer": "A",
        "key_point": "Flink",
        "analysis": ""
      },
      {
        "id": "4.3-J07",
        "question": "使用Spark讀取資料時，如何優化小檔案過多的問題？",
        "options": [
          "A. 先合併(Coalesce)檔案，減少檔案數量",
          "B. 增加分割區數",
          "C. 使用CSV格式",
          "D. 忽略小檔案"
        ],
        "answer": "A",
        "key_point": "小檔案問題",
        "analysis": "HDFS/Spark中小檔案過多會造成NameNode負擔與Task overhead。"
      },
      {
        "id": "4.3-J08",
        "question": "企業採用混合雲(Multi-Cloud)資料處理策略時，下列何者是最重要的考量？",
        "options": [
          "A. 跨雲資料傳輸成本與延遲，需設計資料局部性策略",
          "B. 選擇最便宜的雲",
          "C. 選擇效能最好的雲",
          "D. 統一使用同一雲端"
        ],
        "answer": "A",
        "key_point": "混合雲策略",
        "analysis": "跨雲傳輸成本高且延遲大，需合理規劃資料放置。"
      },
      {
        "id": "4.3-J09",
        "question": "下列何者正確？關於Spark的Shuffle階段效能影響：",
        "options": [
          "A. Shuffle涉及磁碟I/O與網路傳輸，是效能瓶頸",
          "B. Shuffle僅在記憶體中",
          "C. Shuffle不影響效能",
          "D. Shuffle只在Reduce階段"
        ],
        "answer": "A",
        "key_point": "Shuffle",
        "analysis": "Shuffle需要排序、磁碟寫入與網路傳輸，是Spark最昂貴的操作。"
      },
      {
        "id": "4.3-J10",
        "question": "在Spark中，reduceByKey與groupByKey的主要差異為何？",
        "options": [
          "A. reduceByKey先在本機合併再Shuffle，效能更佳",
          "B. groupByKey效能更好",
          "C. 兩者完全相同",
          "D. reduceByKey不可用於數值資料"
        ],
        "answer": "A",
        "key_point": "reduceByKey",
        "analysis": "reduceByKey在map端先進行局部合併(map-side combine)，減少Shuffle資料量。"
      }
    ],
    "專業": [
      {
        "id": "4.3-Z01",
        "question": "在即時推薦系統中，使用Lambda架構的批次層與串流層處理的資料最終需合併。挑戰為何？",
        "options": [
          "A. 批次與串流結果可能不一致，需合併邏輯處理",
          "B. 兩層計算結果永遠一致",
          "C. 串流層取代批次層",
          "D. 無需合併"
        ],
        "answer": "A",
        "key_point": "Lambda架構",
        "analysis": "Lambda架構中批次與串流結果不一致是主要挑戰。"
      },
      {
        "id": "4.3-Z02",
        "question": "1000台伺服器的大數據叢集中，單台故障機率不低。Spark如何處理Executor失敗？",
        "options": [
          "A. 透過RDD血統(Lineage)在其他節點重新計算",
          "B. 整個任務重跑",
          "C. 忽略失敗",
          "D. 手動處理"
        ],
        "answer": "A",
        "key_point": "RDD血統",
        "analysis": "Spark利用RDD的Lineage記錄重新計算丟失的分割。"
      },
      {
        "id": "4.3-Z03",
        "question": "下列何者正確？關於串流處理中Exactly-Once語意的實現策略？",
        "options": [
          "A. 分散式快照與冪等輸出結合可達成Exactly-Once",
          "B. 重複傳輸無法避免",
          "C. At-least-once已足夠",
          "D. Exactly-Once無法實現"
        ],
        "answer": "A",
        "key_point": "Exactly-Once",
        "analysis": "Flink的Chandy-Lamport快照與冪等輸出可確保Exactly-Once。"
      },
      {
        "id": "4.3-Z04",
        "question": "設計PB級資料管線時，選擇批次頻率的考量因素不包括？",
        "options": [
          "A. 批次頻率越高越好",
          "B. 資料時效性要求",
          "C. 計算資源成本",
          "D. 下游系統負載"
        ],
        "answer": "A",
        "key_point": "批次頻率",
        "analysis": "過高頻率增加成本與系統負載，需綜合考量。"
      },
      {
        "id": "4.3-Z05",
        "question": "在Hadoop生態系中，YARN(Yet Another Resource Negotiator)的主要功能為何？",
        "options": [
          "A. 集群資源管理與任務調度",
          "B. 分散式儲存",
          "C. SQL查詢",
          "D. 資料串流"
        ],
        "answer": "A",
        "key_point": "YARN",
        "analysis": "YARN負責Hadoop叢集的計算資源分配與應用程式調度。"
      },
      {
        "id": "4.3-Z06",
        "question": "在Data Pipeline中，Airflow DAG（有向無環圖）的核心概念為何？",
        "options": [
          "A. 將任務定義為節點，依賴關係定義為邊的有向無環圖",
          "B. 隨機執行任務",
          "C. 所有任務並行執行",
          "D. 任務可形成迴圈"
        ],
        "answer": "A",
        "key_point": "Airflow DAG",
        "analysis": "Airflow以Python程式碼定義DAG，管理任務的依賴與執行順序。"
      },
      {
        "id": "4.3-Z07",
        "question": "Spark中DataFrame與RDD相比的主要優勢為何？",
        "options": [
          "A. Catalyst優化器產生最佳化執行計畫",
          "B. DataFrame語法更複雜",
          "C. RDD效能更好",
          "D. DataFrame無法處理結構化資料"
        ],
        "answer": "A",
        "key_point": "Catalyst優化器",
        "analysis": "DataFrame經Catalyst查詢優化器進行邏輯與物理計畫最佳化。"
      },
      {
        "id": "4.3-Z08",
        "question": "Apache Kafka中，Topic與Partition的關係為何？",
        "options": [
          "A. Topic可分為多個Partition實現平行處理",
          "B. Topic與Partition等價",
          "C. Partition可包含多個Topic",
          "D. 一個Topic只能有一個Partition"
        ],
        "answer": "A",
        "key_point": "Kafka Partition",
        "analysis": "Kafka將Topic分割為多個Partition以達到水平擴展與高吞吐。"
      },
      {
        "id": "4.3-Z09",
        "question": "在雲端資料處理中，物件儲存(Object Storage)如AWS S3的主要特性為何？",
        "options": [
          "A. 無限擴展、高持久性、以HTTP API存取",
          "B. 低延遲隨機存取",
          "C. 僅支援檔案系統語義",
          "D. 不支援版本控制"
        ],
        "answer": "A",
        "key_point": "物件儲存",
        "analysis": "物件儲存將資料以物件形式儲存於扁平命名空間，適合大規模非結構化資料。"
      },
      {
        "id": "4.3-Z10",
        "question": "使用Docker容器化大數據應用程式的優點為何？",
        "options": [
          "A. 環境一致性、快速部署、資源隔離",
          "B. 效能更好",
          "C. 安全性更高",
          "D. 儲存更多資料"
        ],
        "answer": "A",
        "key_point": "容器化優勢",
        "analysis": "Docker確保開發與生產環境一致，簡化部署與跨平台移植。"
      }
    ]
  },
  "5.1": {
    "基礎": [
      {
        "id": "5.1-B01",
        "question": "決策樹(Decision Tree)中，用來評選分割特徵的指標不包括？",
        "options": [
          "A. 準確率",
          "B. 吉尼不純度(Gini Impurity)",
          "C. 資訊增益(Information Gain)",
          "D. 增益率(Gain Ratio)"
        ],
        "answer": "A",
        "key_point": "分割指標",
        "analysis": "決策樹用Gini、資訊增益、增益率等選擇分割點。"
      },
      {
        "id": "5.1-B02",
        "question": "隨機森林(Random Forest)的核心概念為何？",
        "options": [
          "A. 多棵決策樹的集成，每棵樹使用隨機子集",
          "B. 單棵深度很大的樹",
          "C. 線性模型",
          "D. 神經網路"
        ],
        "answer": "A",
        "key_point": "隨機森林",
        "analysis": "隨機森林同時對樣本和特徵進行隨機抽樣訓練多棵決策樹。"
      },
      {
        "id": "5.1-B03",
        "question": "SVM中，軟邊界(Soft Margin)參數C的意義為何？",
        "options": [
          "A. 控制錯誤分類的懲罰強度",
          "B. 控制學習率",
          "C. 控制樹深度",
          "D. 控制K值"
        ],
        "answer": "A",
        "key_point": "SVM C參數",
        "analysis": "C越大對錯誤分類懲罰越大，邊界越窄；C越小容錯越大。"
      },
      {
        "id": "5.1-B04",
        "question": "KNN(K-Nearest Neighbors)中，K值越小會導致？",
        "options": [
          "A. 模型越複雜，容易過擬合",
          "B. 模型越簡單",
          "C. 訓練越快",
          "D. 預測越穩定"
        ],
        "answer": "A",
        "key_point": "KNN K值",
        "analysis": "K越小決策邊界越複雜，對雜訊敏感易過擬合。"
      },
      {
        "id": "5.1-B05",
        "question": "羅吉斯回歸(Logistic Regression)中，使用sigmoid函數的目的？",
        "options": [
          "A. 將線性組合映射到0~1的機率值",
          "B. 提高運算速度",
          "C. 減少過擬合",
          "D. 增加非線性"
        ],
        "answer": "A",
        "key_point": "Sigmoid函數",
        "analysis": "Sigmoid將任意實數輸出轉換為[0,1]間的機率值。"
      },
      {
        "id": "5.1-B06",
        "question": "下列何者是分類問題的評估指標？",
        "options": [
          "A. 精確率(Precision)與召回率(Recall)",
          "B. RMSE",
          "C. MAE",
          "D. R-squared"
        ],
        "answer": "A",
        "key_point": "分類評估",
        "analysis": "精確率、召回率、F1-score為分類常見評估指標。"
      },
      {
        "id": "5.1-B07",
        "question": "混淆矩陣(Confusion Matrix)中，TP的真正意義為？",
        "options": [
          "A. 實際為正類且預測為正類",
          "B. 實際為正類但預測為負類",
          "C. 實際為負類但預測為正類",
          "D. 實際為負類且預測為負類"
        ],
        "answer": "A",
        "key_point": "混淆矩陣",
        "analysis": "TP為True Positive，正確預測的正類樣本。"
      },
      {
        "id": "5.1-B08",
        "question": "決策樹中過擬合(Overfitting)的最佳解決方案？",
        "options": [
          "A. 剪枝(Pruning)、設定最大深度",
          "B. 增加樹深度",
          "C. 增加訓練資料",
          "D. 減少特徵"
        ],
        "answer": "A",
        "key_point": "決策樹剪枝",
        "analysis": "限制樹深度、葉節點最小樣本數等正規化方法可防止過擬合。"
      },
      {
        "id": "5.1-B09",
        "question": "KNN中，特徵尺度不同時應如何處理？",
        "options": [
          "A. 進行特徵標準化或歸一化",
          "B. 不需要處理",
          "C. 增加K值",
          "D. 減少K值"
        ],
        "answer": "A",
        "key_point": "KNN尺度",
        "analysis": "KNN基於距離計算，不同尺度會使較大尺度主導。"
      },
      {
        "id": "5.1-B10",
        "question": "SVM使用核函數(Kernel Function)的主要目的？",
        "options": [
          "A. 將資料映射到高維空間使其線性可分",
          "B. 加快計算",
          "C. 減少記憶體",
          "D. 簡化模型"
        ],
        "answer": "A",
        "key_point": "核函數",
        "analysis": "核技巧在高維空間計算內積，無需顯式計算映射。"
      }
    ],
    "進階": [
      {
        "id": "5.1-J01",
        "question": "隨機森林中特徵重要性(Feature Importance)的計算方式？",
        "options": [
          "A. 基於各特徵在決策樹分割時減少不純度的總和",
          "B. 隨機分配",
          "C. 手動設定",
          "D. 基於係數大小"
        ],
        "answer": "A",
        "key_point": "特徵重要性",
        "analysis": ""
      },
      {
        "id": "5.1-J02",
        "question": "下列何者正確？關於羅吉斯回歸的係數解讀：",
        "options": [
          "A. 係數增加一單位，勝算比(Odds Ratio)乘以e^係數",
          "B. 係數增加一單位，機率增加係數值",
          "C. 係數與機率線性相關",
          "D. 係數無意義"
        ],
        "answer": "A",
        "key_point": "勝算比",
        "analysis": ""
      },
      {
        "id": "5.1-J03",
        "question": "執行Python：\nfrom sklearn.svm import SVC\nmodel=SVC(kernel='rbf',gamma=0.1)\ngamma參數對模型的影響為何？",
        "options": [
          "A. gamma越大決策邊界越複雜，越易過擬合",
          "B. gamma越大模型越簡單",
          "C. gamma不影響結果",
          "D. gamma控制樹深度"
        ],
        "answer": "A",
        "key_point": "SVM gamma",
        "analysis": ""
      },
      {
        "id": "5.1-J04",
        "question": "不平衡分類中，AUC-ROC曲線的優勢為何？",
        "options": [
          "A. 對類別不平衡不敏感，可評估模型排序能力",
          "B. 對不平衡敏感",
          "C. 只能評估平衡資料",
          "D. 等於準確率"
        ],
        "answer": "A",
        "key_point": "AUC優點",
        "analysis": ""
      },
      {
        "id": "5.1-J05",
        "question": "KNN中維度詛咒(Curse of Dimensionality)的影響？",
        "options": [
          "A. 高維空間中所有點間距趨近相等，KNN失效",
          "B. KNN不受維度影響",
          "C. 維度越高KNN越好",
          "D. 維度影響不大"
        ],
        "answer": "A",
        "key_point": "維度詛咒",
        "analysis": ""
      },
      {
        "id": "5.1-J06",
        "question": "Bagging與Boosting的主要差異？",
        "options": [
          "A. Bagging並行訓練降低變異數，Boosting序列訓練降低偏差",
          "B. Bagging序列訓練",
          "C. 兩者相同",
          "D. Boosting並行訓練"
        ],
        "answer": "A",
        "key_point": "Bagging vs Boosting",
        "analysis": ""
      },
      {
        "id": "5.1-J07",
        "question": "銀行建立詐欺偵測模型，詐欺僅占0.1%。使用SMOTE後訓練模型，SMOTE的作用為何？",
        "options": [
          "A. 合成少數類別的樣本，平衡類別分布",
          "B. 刪除多數類別",
          "C. 複製少數類別",
          "D. 增加權重"
        ],
        "answer": "A",
        "key_point": "SMOTE",
        "analysis": "SMOTE在特徵空間中插值合成少數類別樣本。"
      },
      {
        "id": "5.1-J08",
        "question": "執行Python：\nfrom sklearn.ensemble import RandomForestClassifier\nrf=RandomForestClassifier(n_estimators=100,oob_score=True)\noob_score=True的意義？",
        "options": [
          "A. 使用袋外資料評估模型，無需額外驗證集",
          "B. 只使用訓練集評估",
          "C. 使用測試集評估",
          "D. 需要交叉驗證"
        ],
        "answer": "A",
        "key_point": "OOB評估",
        "analysis": "OOB(Out-of-Bag)使用未被抽樣的資料進行內部驗證。"
      },
      {
        "id": "5.1-J09",
        "question": "下列何者正確？關於SVM的軟邊界(Soft Margin)與正規化：",
        "options": [
          "A. C越大容忍錯誤越小，邊界越窄",
          "B. C越大模型越簡單",
          "C. C控制樹深度",
          "D. C與邊界無關"
        ],
        "answer": "A",
        "key_point": "C參數",
        "analysis": "C值大=對錯誤高懲罰=窄邊界=複雜模型。"
      },
      {
        "id": "5.1-J10",
        "question": "在隨機森林中，增加n_estimators（樹的數量）對模型的影響為何？",
        "options": [
          "A. 增加模型穩定性，但超過一定數量後效益遞減",
          "B. 一定導致過擬合",
          "C. 增加訓練速度",
          "D. 減少記憶體使用"
        ],
        "answer": "A",
        "key_point": "n_estimators",
        "analysis": "更多的樹降低預測變異數，但超過臨界值後邊際效益遞減且計算成本增加。"
      }
    ],
    "專業": [
      {
        "id": "5.1-Z01",
        "question": "AutoML工具(如AutoGluon)在分類任務中如何處理模型選擇？",
        "options": [
          "A. 自動嘗試多種模型架構與超參數組合，選取最佳模型",
          "B. 只訓練一個模型",
          "C. 隨機選取模型",
          "D. 使用者需手動指定"
        ],
        "answer": "A",
        "key_point": "AutoML",
        "analysis": "AutoML自動化模型選擇與超參數調優。"
      },
      {
        "id": "5.1-Z02",
        "question": "執行Python：\nfrom sklearn.model_selection import cross_val_score\nscores=cross_val_score(model,X,y,cv=5,scoring='f1_macro')\n使用f1_macro的意義？",
        "options": [
          "A. 計算各類別F1後取平均，適合多類別任務",
          "B. 只計算正類的F1",
          "C. 計算加權平均",
          "D. 計算準確率"
        ],
        "answer": "A",
        "key_point": "F1 macro",
        "analysis": "macro平均對各類別等權處理，適合各類別樣本數差異大的情況。"
      },
      {
        "id": "5.1-Z03",
        "question": "銀行風控模型需在逾期率<5%下最大化核准率。最佳策略？",
        "options": [
          "A. 調整模型決策閾值(Threshold)，在精確率與召回率間取捨",
          "B. 使用不同模型",
          "C. 增加訓練資料",
          "D. 增加特徵"
        ],
        "answer": "A",
        "key_point": "決策閾值",
        "analysis": "透過PR曲線選擇合適的決策閾值取得平衡。"
      },
      {
        "id": "5.1-Z04",
        "question": "在深度學習興起的時代，決策樹/隨機森林仍廣泛應用的主要原因？",
        "options": [
          "A. 在表格資料(Tabular Data)上表現優異且可解釋性高",
          "B. 計算最快",
          "C. 不需要GPU",
          "D. 最簡單易用"
        ],
        "answer": "A",
        "key_point": "樹模型優勢",
        "analysis": "樹模型在結構化表格資料上仍有競爭力。"
      },
      {
        "id": "5.1-Z05",
        "question": "SVM中使用RBF核函數時，gamma參數的預設值通常會產生何種影響？",
        "options": [
          "A. gamma過大易過擬合，過小易欠擬合",
          "B. gamma不影響",
          "C. gamma越大模型越簡單",
          "D. gamma控制學習率"
        ],
        "answer": "A",
        "key_point": "RBF gamma",
        "analysis": "gamma控制單個樣本的影響半徑，是SVM調參的關鍵超參數。"
      },
      {
        "id": "5.1-Z06",
        "question": "執行Python羅吉斯回歸時，設定class_weight='balanced'的作用為何？",
        "options": [
          "A. 自動根據各類別樣本數調整權重，處理不平衡資料",
          "B. 刪除多數類別",
          "C. 複製少數類別",
          "D. 提高學習率"
        ],
        "answer": "A",
        "key_point": "class_weight",
        "analysis": "'balanced'模式以各類別樣本數的反比設定權重，自動補償類別不平衡。"
      },
      {
        "id": "5.1-Z07",
        "question": "在KNN中，使用曼哈頓距離(Manhattan Distance)相較歐氏距離的優勢為何？",
        "options": [
          "A. 高維空間中曼哈頓距離比歐氏距離更穩定",
          "B. 計算更快",
          "C. 分類更準確",
          "D. 不受尺度影響"
        ],
        "answer": "A",
        "key_point": "曼哈頓距離",
        "analysis": "高維空間中歐氏距離的區分力下降，曼哈頓距離相對更穩健。"
      },
      {
        "id": "5.1-Z08",
        "question": "隨機森林中，特徵重要性(Feature Importance)的計算基礎為何？",
        "options": [
          "A. 各特徵在所有決策樹分割節點中減少不純度的總和",
          "B. 各特徵的相關係數",
          "C. 各特徵的p值",
          "D. 各特徵的變異數"
        ],
        "answer": "A",
        "key_point": "Gini重要性",
        "analysis": "隨機森林以Gini不純度的平均減少量作為特徵重要性指標。"
      },
      {
        "id": "5.1-Z09",
        "question": "羅吉斯回歸中，若某特徵的係數為0.5，對應的勝算比(Odds Ratio)為？",
        "options": [
          "A. exp(0.5) ≈ 1.65",
          "B. 0.5",
          "C. ln(0.5) ≈ -0.69",
          "D. 2.0"
        ],
        "answer": "A",
        "key_point": "勝算比計算",
        "analysis": "羅吉斯回歸中係數的指數exp(β)即為勝算比。"
      },
      {
        "id": "5.1-Z10",
        "question": "在決策樹中，使用資訊增益(Information Gain)進行分割時，傾向選擇何種特徵？",
        "options": [
          "A. 類別數多的高基數特徵",
          "B. 數值型特徵",
          "C. 二元特徵",
          "D. 缺失率高的特徵"
        ],
        "answer": "A",
        "key_point": "資訊增益偏誤",
        "analysis": "資訊增益偏向選擇類別數多的特徵，可改用增益率(Gain Ratio)修正。"
      }
    ]
  },
  "5.2": {
    "基礎": [
      {
        "id": "5.2-B01",
        "question": "線性回歸中最小平方法(OLS)最小化的目標為何？",
        "options": [
          "A. 殘差平方和(SSE)",
          "B. 絕對誤差和",
          "C. 交叉熵",
          "D. Hinge Loss"
        ],
        "answer": "A",
        "key_point": "OLS目標",
        "analysis": "OLS目標為最小化∑(yi-ŷi)²。"
      },
      {
        "id": "5.2-B02",
        "question": "R-squared(R²)的意義為何？",
        "options": [
          "A. 模型解釋的變異比例",
          "B. 模型的準確率",
          "C. 模型的誤差",
          "D. 模型的複雜度"
        ],
        "answer": "A",
        "key_point": "R²",
        "analysis": "R²表示自變數可解釋的應變數變異比例。"
      },
      {
        "id": "5.2-B03",
        "question": "線性回歸的基本假設不包括？",
        "options": [
          "A. 自變數須為常態分布",
          "B. 殘差須獨立于自變數",
          "C. 殘差須為常態分布",
          "D. 殘差須等變異數"
        ],
        "answer": "A",
        "key_point": "回歸假設",
        "analysis": "線性回歸不要求自變數為常態分布。"
      },
      {
        "id": "5.2-B04",
        "question": "Lasso回歸(L1正規化)的特點為何？",
        "options": [
          "A. 會使不重要特徵的係數變為0，達到特徵選擇",
          "B. 係數會趨近於0但不為0",
          "C. 無正規化效果",
          "D. 增加模型複雜度"
        ],
        "answer": "A",
        "key_point": "Lasso",
        "analysis": "L1正規化可產生稀疏解，自動特徵選擇。"
      },
      {
        "id": "5.2-B05",
        "question": "Ridge回歸(L2正規化)的優點為何？",
        "options": [
          "A. 減少多重共線性(multicollinearity)的影響",
          "B. 使係數變為0",
          "C. 特徵選擇",
          "D. 無正規化"
        ],
        "answer": "A",
        "key_point": "Ridge",
        "analysis": "Ridge懲罰係數平方和，穩定多重共線性下的估計。"
      },
      {
        "id": "5.2-B06",
        "question": "下列何者不是回歸模型的評估指標？",
        "options": [
          "A. 準確率(Accuracy)",
          "B. RMSE",
          "C. MAE",
          "D. R²"
        ],
        "answer": "A",
        "key_point": "回歸評估",
        "analysis": "準確率是分類問題的評估指標。"
      },
      {
        "id": "5.2-B07",
        "question": "迴歸分析中，調整後R²(Adjusted R²)的作用？",
        "options": [
          "A. 懲罰加入無用特徵，避免R²虛假提升",
          "B. 提高R²",
          "C. 計算更簡單",
          "D. 與R²相同"
        ],
        "answer": "A",
        "key_point": "調整後R²",
        "analysis": "調整後R²對特徵數進行懲罰。"
      },
      {
        "id": "5.2-B08",
        "question": "多項式回歸(Polynomial Regression)可能產生的問題？",
        "options": [
          "A. 過擬合(高自由度)",
          "B. 無法擬合非線性",
          "C. 計算太慢",
          "D. 參數太多"
        ],
        "answer": "A",
        "key_point": "多項式過擬合",
        "analysis": "高階多項式易於在訓練集過擬合，需搭配正規化。"
      },
      {
        "id": "5.2-B09",
        "question": "殘差圖(Residual Plot)中殘差呈現漏斗型，表示違反哪項假設？",
        "options": [
          "A. 等變異數(Homoscedasticity)",
          "B. 常態性",
          "C. 獨立性",
          "D. 線性"
        ],
        "answer": "A",
        "key_point": "異變異數",
        "analysis": "漏斗狀殘差表示異變異數，違反等變異數假設。"
      },
      {
        "id": "5.2-B10",
        "question": "羅吉斯回歸(Logistic Regression)的分類邊界為何？",
        "options": [
          "A. 線性決策邊界",
          "B. 非線性決策邊界",
          "C. 樹狀邊界",
          "D. 圓形邊界"
        ],
        "answer": "A",
        "key_point": "羅吉斯邊界",
        "analysis": "羅吉斯回歸的特徵加權組合為線性，決策邊界為線性。"
      }
    ],
    "進階": [
      {
        "id": "5.2-J01",
        "question": "Lasso回歸使用L1正規化，在特徵高度相關時的表現？",
        "options": [
          "A. 傾向只選其中一個相關特徵，係數稀疏",
          "B. 兩者係數相同",
          "C. 兩者係數各半",
          "D. 無法處理"
        ],
        "answer": "A",
        "key_point": "Lasso相關特徵",
        "analysis": ""
      },
      {
        "id": "5.2-J02",
        "question": "執行Python：\nimport statsmodels.api as sm\nmodel=sm.OLS(y,sm.add_constant(X)).fit()\nprint(model.summary())\n若要檢查多重共線性應看哪個指標？",
        "options": [
          "A. VIF(Variance Inflation Factor)",
          "B. p值",
          "C. R²",
          "D. AIC"
        ],
        "answer": "A",
        "key_point": "VIF",
        "analysis": ""
      },
      {
        "id": "5.2-J03",
        "question": "OLS回歸中，某一自變數的係數為正且p<0.05，代表？",
        "options": [
          "A. 該變數對應變數有統計顯著的正向影響",
          "B. 該變數影響很大",
          "C. 該變數是最重要的",
          "D. 模型很好"
        ],
        "answer": "A",
        "key_point": "係數解讀",
        "analysis": ""
      },
      {
        "id": "5.2-J04",
        "question": "時間序列預測中，自變數與誤差項相關時(內生性)，OLS估計會？",
        "options": [
          "A. 產生偏誤且不一致",
          "B. 仍然有效",
          "C. 標準誤變小",
          "D. 無影響"
        ],
        "answer": "A",
        "key_point": "內生性",
        "analysis": ""
      },
      {
        "id": "5.2-J05",
        "question": "Elastic Net正規化結合L1與L2，適合何種場景？",
        "options": [
          "A. 特徵數量遠大於樣本數且有分組相關結構",
          "B. 小型資料集",
          "C. 無正規化需求",
          "D. 僅L1就夠"
        ],
        "answer": "A",
        "key_point": "Elastic Net",
        "analysis": ""
      },
      {
        "id": "5.2-J06",
        "question": "執行Python：\nfrom sklearn.preprocessing import PolynomialFeatures\npoly=PolynomialFeatures(degree=3,include_bias=False)\ndegree=3會產生多少特徵(原始p=2)？",
        "options": [
          "A. p=2時degree=3產生2+3+1=6個特徵(不含常數項)",
          "B. 2個",
          "C. 3個",
          "D. 8個"
        ],
        "answer": "A",
        "key_point": "多項式展開",
        "analysis": ""
      },
      {
        "id": "5.2-J07",
        "question": "房價預測中，原始資料房價範圍100~10000萬元。欲使用線性回歸，最佳預處理？",
        "options": [
          "A. 對房價取對數(log transform)，使分布更接近常態",
          "B. 直接訓練",
          "C. 標準化即可",
          "D. 歸一化"
        ],
        "answer": "A",
        "key_point": "對數轉換",
        "analysis": "正數且偏態的目標變數取對數可改善模型擬合。"
      },
      {
        "id": "5.2-J08",
        "question": "執行Python：\nfrom sklearn.linear_model import RidgeCV\nmodel=RidgeCV(alphas=[0.1,1,10,100],cv=5)\nRidgeCV如何選擇最佳alpha？",
        "options": [
          "A. 透過交叉驗證選擇使驗證誤差最小的alpha",
          "B. 隨機選擇",
          "C. 手動指定",
          "D. 使用訓練誤差"
        ],
        "answer": "A",
        "key_point": "RidgeCV",
        "analysis": "RidgeCV對每組alpha進行交叉驗證選取最佳值。"
      },
      {
        "id": "5.2-J09",
        "question": "下列何者正確？關於正規化回歸的偏差-變異權衡：",
        "options": [
          "A. L1/L2正規化增加些許偏差但顯著降低變異數",
          "B. 正規化降低偏差",
          "C. 正規化不影響",
          "D. 正規化只影響變異數"
        ],
        "answer": "A",
        "key_point": "偏差變異權衡",
        "analysis": "正規化引入懲罰增加偏差但降低變異數，可提升泛化。"
      },
      {
        "id": "5.2-J10",
        "question": "在線性回歸中，若殘差圖顯示殘差隨預測值增大而發散（喇叭形），違反哪項基本假設？",
        "options": [
          "A. 等變異數性(Homoscedasticity)",
          "B. 常態性",
          "C. 獨立性",
          "D. 線性"
        ],
        "answer": "A",
        "key_point": "異變異數診斷",
        "analysis": "喇叭形殘差圖為異變異數(Heteroscedasticity)的典型徵兆。"
      }
    ],
    "專業": [
      {
        "id": "5.2-Z01",
        "question": "高維稀疏資料在線性回歸(如基因資料p>>n)中，何種正規化最適合？",
        "options": [
          "A. Lasso(L1)可產生稀疏解，進行特徵選擇",
          "B. Ridge(L2)",
          "C. 無正規化",
          "D. Elastic Net"
        ],
        "answer": "A",
        "key_point": "高維稀疏",
        "analysis": "p>>n時需特徵選擇，Lasso的稀疏性最為關鍵。"
      },
      {
        "id": "5.2-Z02",
        "question": "計數資料(count data)作為應變數時(如每日來電次數)，應使用？",
        "options": [
          "A. 波松回歸(Poisson Regression)",
          "B. 一般線性回歸",
          "C. 羅吉斯回歸",
          "D. SVM"
        ],
        "answer": "A",
        "key_point": "波松回歸",
        "analysis": "計數資料非負且離散，波松回歸為適合的廣義線性模型。"
      },
      {
        "id": "5.2-Z03",
        "question": "貝氏線性回歸(Bayesian Linear Regression)與一般OLS的主要差異？",
        "options": [
          "A. 對迴歸係數引入先驗分布，產出係數的後驗機率分布而非點估計",
          "B. 計算更快",
          "C. 不需假設",
          "D. 結果不確定"
        ],
        "answer": "A",
        "key_point": "貝氏回歸",
        "analysis": "貝氏方法提供不確定性量化。"
      },
      {
        "id": "5.2-Z04",
        "question": "因果推論中，工具變數(Instrumental Variable)解決的問題是？",
        "options": [
          "A. 內生性(自變數與誤差相關)，需滿足排他性與相關性的工具",
          "B. 多重共線性",
          "C. 異變異數",
          "D. 非線性"
        ],
        "answer": "A",
        "key_point": "工具變數",
        "analysis": "IV透過不直接影響應變數但與自變數相關的工具來估計因果效應。"
      },
      {
        "id": "5.2-Z05",
        "question": "在線性回歸診斷中，Q-Q Plot(分位數圖)主要用來檢查哪項假設？",
        "options": [
          "A. 殘差的常態性",
          "B. 變異數同質性",
          "C. 線性關係",
          "D. 樣本獨立性"
        ],
        "answer": "A",
        "key_point": "Q-Q Plot",
        "analysis": "Q-Q Plot將樣本分位數與理論常態分位數比對，檢視殘差常態性。"
      },
      {
        "id": "5.2-Z06",
        "question": "執行Python：\nimport statsmodels.api as sm\nmodel=sm.OLS(y,X).fit()\nprint(model.summary())\n若要檢查模型整體顯著性應看哪個p值？",
        "options": [
          "A. F-statistic的p值",
          "B. 各係數的t檢定p值",
          "C. Durbin-Watson統計量",
          "D. Jarque-Bera檢定"
        ],
        "answer": "A",
        "key_point": "F檢定",
        "analysis": "F檢定檢驗所有自變數的聯合顯著性。"
      },
      {
        "id": "5.2-Z07",
        "question": "Ridge迴歸中，alpha參數越大對係數的影響為何？",
        "options": [
          "A. 係數越接近0，但不會完全為0",
          "B. 係數變為0",
          "C. 係數不變",
          "D. 係數變大"
        ],
        "answer": "A",
        "key_point": "Ridge正規化",
        "analysis": "L2正規化將係數向0收縮但不為0，alpha控制收縮強度。"
      },
      {
        "id": "5.2-Z08",
        "question": "在多元線性回歸中，調整後R²(Adjusted R²)與R²的主要差異為何？",
        "options": [
          "A. 調整後R²對無用特徵進行懲罰",
          "B. 調整後R²永遠大於R²",
          "C. 兩者相同",
          "D. 調整後R²不使用SSE"
        ],
        "answer": "A",
        "key_point": "調整後R²",
        "analysis": "調整後R²引入特徵數的懲罰項，避免加入無用變數虛假提升R²。"
      },
      {
        "id": "5.2-Z09",
        "question": "時間序列預測中使用ARIMA模型時，差分(differencing)的主要目的為何？",
        "options": [
          "A. 使非平穩序列轉為平穩",
          "B. 增加預測精度",
          "C. 減少參數量",
          "D. 提高計算速度"
        ],
        "answer": "A",
        "key_point": "時間序列差分",
        "analysis": "差分可移除趨勢與季節性使序列平穩，滿足ARIMA的平穩性假設。"
      },
      {
        "id": "5.2-Z10",
        "question": "在Elastic Net正規化中，l1_ratio參數=0.5代表的意義為何？",
        "options": [
          "A. L1與L2懲罰各佔一半",
          "B. 只使用L1",
          "C. 只使用L2",
          "D. 不使用正規化"
        ],
        "answer": "A",
        "key_point": "Elastic Net l1_ratio",
        "analysis": "l1_ratio控制L1與L2的混合比例，0.5表示各半。"
      }
    ]
  },
  "5.3": {
    "基礎": [
      {
        "id": "5.3-B01",
        "question": "集成學習(Ensemble Learning)的核心思想？",
        "options": [
          "A. 結合多個弱學習器形成強學習器",
          "B. 單一模型的深度學習",
          "C. 使用更多資料",
          "D. 更複雜的模型"
        ],
        "answer": "A",
        "key_point": "集成學習",
        "analysis": "集成學習結合多個模型的預測結果提升整體表現。"
      },
      {
        "id": "5.3-B02",
        "question": "Bagging中，Bootstrapping的意義為何？",
        "options": [
          "A. 從原始資料中有放回抽樣產生多個訓練子集",
          "B. 無放回抽樣",
          "C. 加權抽樣",
          "D. 隨機選取特徵"
        ],
        "answer": "A",
        "key_point": "Bootstrapping",
        "analysis": "自助抽樣(Bootstrap)對N筆資料進行N次有放回抽樣。"
      },
      {
        "id": "5.3-B03",
        "question": "Boosting演算法的核心機制為？",
        "options": [
          "A. 序列訓練，每輪加權關注前一輪錯誤的樣本",
          "B. 並行訓練所有模型",
          "C. 隨機訓練",
          "D. 獨立訓練"
        ],
        "answer": "A",
        "key_point": "Boosting",
        "analysis": "Boosting依序訓練，每輪提高錯誤分類樣本的權重。"
      },
      {
        "id": "5.3-B04",
        "question": "XGBoost相比Gradient Boosting的主要改進為何？",
        "options": [
          "A. 正規化項、平行計算、缺失值處理",
          "B. 更深的樹",
          "C. 更多的樹",
          "D. 更慢的學習率"
        ],
        "answer": "A",
        "key_point": "XGBoost優點",
        "analysis": "XGBoost加入L1/L2正規化、平行計算與缺失值方向學習。"
      },
      {
        "id": "5.3-B05",
        "question": "交叉驗證(Cross Validation)的主要目的？",
        "options": [
          "A. 評估模型泛化能力",
          "B. 提高訓練準確率",
          "C. 加速訓練",
          "D. 減少特徵"
        ],
        "answer": "A",
        "key_point": "交叉驗證",
        "analysis": "CV將資料分割為K份輪流訓練驗證，評估模型的泛化能力。"
      },
      {
        "id": "5.3-B06",
        "question": "學習率(Learning Rate)在Gradient Boosting中的作用？",
        "options": [
          "A. 控制每棵樹的貢獻程度，小學習率需更多樹",
          "B. 控制樹深",
          "C. 控制樣本數",
          "D. 控制特徵數"
        ],
        "answer": "A",
        "key_point": "學習率",
        "analysis": "學習率縮放每棵樹的貢獻，小學習率需更多樹達到相同效果。"
      },
      {
        "id": "5.3-B07",
        "question": "下列何者是超參數(Hyperparameter)的定義？",
        "options": [
          "A. 訓練前須設定的模型參數",
          "B. 模型從資料中學習的參數",
          "C. 資料的參數",
          "D. 評估指標"
        ],
        "answer": "A",
        "key_point": "超參數",
        "analysis": "超參數是訓練前手動設定的模型配置參數。"
      },
      {
        "id": "5.3-B08",
        "question": "Grid Search與Random Search的主要差異？",
        "options": [
          "A. Grid Search窮舉所有組合，Random Search隨機抽樣",
          "B. 兩者相同",
          "C. Grid Search隨機",
          "D. Random Search更系統化"
        ],
        "answer": "A",
        "key_point": "Grid vs Random",
        "analysis": "Random Search高維空間中更高效，可發現相近的最佳參數。"
      },
      {
        "id": "5.3-B09",
        "question": "堆疊(Stacking)集成學習的特點為何？",
        "options": [
          "A. 使用元學習器(Meta-learner)組合多個基礎模型的預測",
          "B. 簡單平均",
          "C. 加權投票",
          "D. 隨機選取"
        ],
        "answer": "A",
        "key_point": "Stacking",
        "analysis": "Stacking以基礎模型的輸出作為元學習器的輸入。"
      },
      {
        "id": "5.3-B10",
        "question": "模型的偏差高(Bias)表示？",
        "options": [
          "A. 預測與真實值平均差距大，過度簡化",
          "B. 預測波動大",
          "C. 預測完全正確",
          "D. 預測變異大"
        ],
        "answer": "A",
        "key_point": "高偏差",
        "analysis": "高偏差表示模型對訓練資料的擬合不足(Underfitting)。"
      }
    ],
    "進階": [
      {
        "id": "5.3-J01",
        "question": "XGBoost中max_depth與subsample參數的主要作用？",
        "options": [
          "A. max_depth控制樹深度，subsample控制行採樣比例",
          "B. 兩者皆控制學習率",
          "C. max_depth控制學習率",
          "D. subsample控制樹深度"
        ],
        "answer": "A",
        "key_point": "XGBoost參數",
        "analysis": ""
      },
      {
        "id": "5.3-J02",
        "question": "LightGBM的GOSS(Gradient-based One-Side Sampling)技術目的？",
        "options": [
          "A. 保留大梯度樣本，隨機採樣小梯度樣本，加速訓練",
          "B. 對所有樣本加權",
          "C. 刪除小梯度樣本",
          "D. 複製大梯度樣本"
        ],
        "answer": "A",
        "key_point": "GOSS",
        "analysis": ""
      },
      {
        "id": "5.3-J03",
        "question": "CatBoost處理類別特徵的獨特方式？",
        "options": [
          "A. 使用目標編碼(Target Encoding)搭配排序處理類別特徵",
          "B. One-Hot編碼",
          "C. 標籤編碼",
          "D. 忽略類別特徵"
        ],
        "answer": "A",
        "key_point": "CatBoost編碼",
        "analysis": ""
      },
      {
        "id": "5.3-J04",
        "question": "超參數優化中使用貝氏優化(Bayesian Optimization)相較Grid Search的優勢？",
        "options": [
          "A. 利用先驗資訊引導搜索，更高效",
          "B. 更簡單",
          "C. 結果更確定",
          "D. 不需設定範圍"
        ],
        "answer": "A",
        "key_point": "貝氏優化",
        "analysis": ""
      },
      {
        "id": "5.3-J05",
        "question": "下列何者正確？關於早停法(Early Stopping)在Gradient Boosting中的應用：",
        "options": [
          "A. 當驗證集指標不再改善時停止訓練，防止過擬合",
          "B. 會使模型欠擬合",
          "C. 只適用深度學習",
          "D. 會降低訓練速度"
        ],
        "answer": "A",
        "key_point": "早停法",
        "analysis": ""
      },
      {
        "id": "5.3-J06",
        "question": "執行Python：\nfrom sklearn.model_selection import GridSearchCV\nparam_grid={'n_estimators':[50,100,200],'max_depth':[3,5,7]}\ngs=GridSearchCV(model,param_grid,cv=5,scoring='roc_auc')\n以上總共訓練多少模型？",
        "options": [
          "A. 3×3×5=45個模型",
          "B. 9個",
          "C. 5個",
          "D. 15個"
        ],
        "answer": "A",
        "key_point": "GridSearch計算",
        "analysis": ""
      },
      {
        "id": "5.3-J07",
        "question": "時間序列預測中使用k-fold交叉驗證的問題為何？",
        "options": [
          "A. 時間序列具時間依賴，標準k-fold會造成資料洩漏",
          "B. 完全沒問題",
          "C. CV不適用時間序列",
          "D. 可使用但須修正"
        ],
        "answer": "A",
        "key_point": "時間序列CV",
        "analysis": "時間序列需使用時間序列交叉驗證(TSCV)。"
      },
      {
        "id": "5.3-J08",
        "question": "AutoML中神經網路架構搜索(NAS)的主要挑戰？",
        "options": [
          "A. 搜索空間巨大且計算成本高",
          "B. 神經網路效果不好",
          "C. 不可行",
          "D. 無需搜索"
        ],
        "answer": "A",
        "key_point": "NAS",
        "analysis": "NAS需大量計算資源，現有方法如權重共享可降低。"
      },
      {
        "id": "5.3-J09",
        "question": "下列何者正確？關於模型集成時異質模型(不同演算法)集成的優點：",
        "options": [
          "A. 不同模型類型(樹/SVM/線性)的錯誤模式不同，集成更穩健",
          "B. 同質模型更好",
          "C. 異質模型太複雜",
          "D. 無差異"
        ],
        "answer": "A",
        "key_point": "異質集成",
        "analysis": "異質模型的錯誤相關性低，集成效果更佳。"
      },
      {
        "id": "5.3-J10",
        "question": "在LightGBM中，使用leaf-wise樹生長策略相較於level-wise的主要優點為何？",
        "options": [
          "A. 收斂更快、損失更低，但需控制葉節點數以防過擬合",
          "B. 訓練更穩定",
          "C. 記憶體使用更少",
          "D. 不需要調參"
        ],
        "answer": "A",
        "key_point": "leaf-wise生長",
        "analysis": "LightGBM的leaf-wise每次分裂損失最大的葉節點，效率高但需限制葉數。"
      }
    ],
    "專業": [
      {
        "id": "5.3-Z01",
        "question": "聯邦學習(Federated Learning)中的模型聚合策略FedAvg的步驟為何？",
        "options": [
          "A. 各客戶端本地訓練後上傳權重，伺服器加權平均",
          "B. 集中所有資料訓練",
          "C. 各客戶端獨立訓練不聚合",
          "D. 伺服器訓練後分發"
        ],
        "answer": "A",
        "key_point": "FedAvg",
        "analysis": "FedAvg在客戶端訓練後聚合權重更新全局模型。"
      },
      {
        "id": "5.3-Z02",
        "question": "可解釋AI(Explainable AI)中SHAP值的核心概念？",
        "options": [
          "A. 基於Shapley值分配各特徵對預測的貢獻",
          "B. 特徵重要性排序",
          "C. 模型可視化",
          "D. 資料分布"
        ],
        "answer": "A",
        "key_point": "SHAP",
        "analysis": "SHAP利用合作賽局理論計算各特徵的邊際貢獻。"
      },
      {
        "id": "5.3-Z03",
        "question": "模型壓縮(Model Compression)中的蒸餾(Distillation)訓練方式？",
        "options": [
          "A. 小型學生模型模仿大型教師模型的軟標籤輸出",
          "B. 縮小模型架構",
          "C. 減少訓練資料",
          "D. 降低精度"
        ],
        "answer": "A",
        "key_point": "知識蒸餾",
        "analysis": "知識蒸餾將教師模型的知識轉移至學生模型。"
      },
      {
        "id": "5.3-Z04",
        "question": "MLOps中的模型版本控制(Model Versioning)主要解決？",
        "options": [
          "A. 追蹤模型、資料、程式碼版本的對應關係，確保可重現",
          "B. 增加模型數量",
          "C. 降低儲存",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "MLOps版本控制",
        "analysis": "模型版本控制是MLOps的基礎，確保實驗可追溯。"
      },
      {
        "id": "5.3-Z05",
        "question": "在XGBoost中，使用早停法(Early Stopping)時，eval_metric與eval_set的作用為何？",
        "options": [
          "A. 指定驗證集與評估指標，當指標不再改善時終止訓練",
          "B. 僅限於訓練集",
          "C. 控制學習率",
          "D. 自動調整樹深"
        ],
        "answer": "A",
        "key_point": "XGBoost早停",
        "analysis": "早停法監控驗證集指標防過擬合，需指定eval_set與eval_metric。"
      },
      {
        "id": "5.3-Z06",
        "question": "CatBoost中處理類別特徵時，為何不建議預先進行One-Hot編碼？",
        "options": [
          "A. CatBoost內建有序目標編碼，預先One-Hot反而降低效率",
          "B. One-Hot更準確",
          "C. CatBoost不接受數值輸入",
          "D. 預先處理會報錯"
        ],
        "answer": "A",
        "key_point": "CatBoost編碼策略",
        "analysis": "CatBoost使用ordered target encoding，可避免目標洩漏。"
      },
      {
        "id": "5.3-Z07",
        "question": "在超參數優化中，Halving Grid Search與傳統Grid Search的主要差異為何？",
        "options": [
          "A. Halving先用少量資源淘汰差組合，再集中評估好組合",
          "B. 兩者完全相同",
          "C. Halving搜索更全面",
          "D. Halving需要更多資源"
        ],
        "answer": "A",
        "key_point": "Halving Grid Search",
        "analysis": "Halving以逐輪淘汰策略分配資源，效率高於窮舉搜索。"
      },
      {
        "id": "5.3-Z08",
        "question": "在集成學習中，使用加權平均(Weighted Average)取代簡單平均的動機為何？",
        "options": [
          "A. 根據各模型的驗證表現賦予不同權重，提升整體效能",
          "B. 降低計算量",
          "C. 減少模型數量",
          "D. 簡化程式碼"
        ],
        "answer": "A",
        "key_point": "加權集成",
        "analysis": "加權平均讓表現好的模型貢獻更大，但需注意過擬合驗證集。"
      },
      {
        "id": "5.3-Z09",
        "question": "在Stacking集成中，元學習器(Meta-learner)的訓練資料來自何處？",
        "options": [
          "A. 基礎模型在交叉驗證中的預測結果",
          "B. 原始訓練資料",
          "C. 測試資料",
          "D. 隨機生成的資料"
        ],
        "answer": "A",
        "key_point": "Stacking訓練",
        "analysis": "Stacking使用cross-val prediction避免資料洩漏，基礎模型的預測為元特徵。"
      },
      {
        "id": "5.3-Z10",
        "question": "當資料集中存在缺失值、類別特徵與數值特徵混合時，XGBoost相比傳統機器學習模型的優勢為何？",
        "options": [
          "A. XGBoost內建處理缺失值與類別特徵的機制",
          "B. 需要繁瑣的預處理",
          "C. 無法處理缺失值",
          "D. 需手動編碼"
        ],
        "answer": "A",
        "key_point": "XGBoost實用性",
        "analysis": "XGBoost可自動學習缺失值的最佳分裂方向，降低預處理需求。"
      }
    ]
  },
  "6.1": {
    "基礎": [
      {
        "id": "6.1-B01",
        "question": "特徵工程(Feature Engineering)的主要目的？",
        "options": [
          "A. 提升模型預測能力與泛化表現",
          "B. 減少資料量",
          "C. 使模型更複雜",
          "D. 增加訓練時間"
        ],
        "answer": "A",
        "key_point": "特徵工程目的",
        "analysis": "特徵工程從原始資料中提取更能表達問題本質的特徵。"
      },
      {
        "id": "6.1-B02",
        "question": "標準化(Standardization)與歸一化(Normalization)的主要差異？",
        "options": [
          "A. 標準化使用Z-score轉為平均0標準差1，歸一化縮放到特定範圍",
          "B. 兩者相同",
          "C. 標準化不使用平均數",
          "D. 歸一化使用Z-score"
        ],
        "answer": "A",
        "key_point": "標準化vs歸一化",
        "analysis": "標準化：(x-μ)/σ；歸一化：(x-min)/(max-min)映射到[0,1]。"
      },
      {
        "id": "6.1-B03",
        "question": "One-Hot Encoding的主要缺點？",
        "options": [
          "A. 類別數多時會產生高維稀疏矩陣",
          "B. 無法處理類別資料",
          "C. 編碼速度慢",
          "D. 不常用"
        ],
        "answer": "A",
        "key_point": "One-Hot缺點",
        "analysis": "高基數類別特徵使用One-Hot會導致維度爆炸。"
      },
      {
        "id": "6.1-B04",
        "question": "標籤編碼(Label Encoding)不適合用於哪種模型？",
        "options": [
          "A. 線性回歸",
          "B. 決策樹",
          "C. 隨機森林",
          "D. LightGBM"
        ],
        "answer": "A",
        "key_point": "Label編碼限制",
        "analysis": "標籤編碼隱含序數關係，對線性模型造成誤導。"
      },
      {
        "id": "6.1-B05",
        "question": "PCA(主成分分析)的主要應用？",
        "options": [
          "A. 降維與去除特徵間的相關性",
          "B. 預測",
          "C. 分類",
          "D. 聚類"
        ],
        "answer": "A",
        "key_point": "PCA",
        "analysis": "PCA透過線性變換將原始特徵轉為不相關的主成分。"
      },
      {
        "id": "6.1-B06",
        "question": "特徵選擇(Feature Selection)的方法不包括？",
        "options": [
          "A. 隨機森林進行預測",
          "B. 過濾法(Filter)",
          "C. 包裝法(Wrapper)",
          "D. 嵌入法(Embedded)"
        ],
        "answer": "A",
        "key_point": "特徵選擇方法",
        "analysis": "過濾法、包裝法、嵌入法為三大特徵選擇方法。"
      },
      {
        "id": "6.1-B07",
        "question": "建立新特徵：年收入/家庭人數 = 人均收入，屬於何種特徵工程？",
        "options": [
          "A. 比值特徵建立",
          "B. 特徵選擇",
          "C. PCA降維",
          "D. 特徵編碼"
        ],
        "answer": "A",
        "key_point": "比值特徵",
        "analysis": "領域知識導向的比值特徵常比原始特徵更有預測力。"
      },
      {
        "id": "6.1-B08",
        "question": "標準化對哪些模型特別重要？",
        "options": [
          "A. SVM、KNN、PCA",
          "B. 決策樹、隨機森林",
          "C. XGBoost",
          "D. LightGBM"
        ],
        "answer": "A",
        "key_point": "標準化必要性",
        "analysis": "基於距離與梯度計算的模型對尺度敏感。"
      },
      {
        "id": "6.1-B09",
        "question": "目標編碼(Target Encoding)的風險為何？",
        "options": [
          "A. 目標洩漏(Target Leakage)導致過擬合",
          "B. 編碼太慢",
          "C. 編碼錯誤",
          "D. 無法處理類別"
        ],
        "answer": "A",
        "key_point": "目標編碼風險",
        "analysis": "目標編碼若不搭配折疊(CV)處理會造成嚴重的目標洩漏。"
      },
      {
        "id": "6.1-B10",
        "question": "下列何者不是常用的缺失值填補方法？",
        "options": [
          "A. PCA",
          "B. 平均數填補",
          "C. 中位數填補",
          "D. 模型預測填補"
        ],
        "answer": "A",
        "key_point": "缺失值填補",
        "analysis": "PCA是降維方法，非缺失值填補。"
      }
    ],
    "進階": [
      {
        "id": "6.1-J01",
        "question": "執行Python：\nfrom sklearn.decomposition import PCA\npca=PCA(n_components=0.95)\n參數n_components=0.95的意義？",
        "options": [
          "A. 保留95%的累積解釋變異",
          "B. 保留95個主成分",
          "C. 保留95%的資料",
          "D. 保留95%的特徵"
        ],
        "answer": "A",
        "key_point": "PCA解釋變異",
        "analysis": ""
      },
      {
        "id": "6.1-J02",
        "question": "高基數類別特徵(如郵遞區號有數千類)的最佳編碼策略？",
        "options": [
          "A. 目標編碼配合折疊(Cross-validation Target Encoding)",
          "B. One-Hot Encoding",
          "C. Label Encoding",
          "D. Binary Encoding"
        ],
        "answer": "A",
        "key_point": "高基數編碼",
        "analysis": ""
      },
      {
        "id": "6.1-J03",
        "question": "特徵之間相關係數>0.9，對線性模型的影響？",
        "options": [
          "A. 多重共線性使回歸係數估計不穩定",
          "B. 無影響",
          "C. 模型更穩定",
          "D. 預測更準確"
        ],
        "answer": "A",
        "key_point": "多重共線性",
        "analysis": ""
      },
      {
        "id": "6.1-J04",
        "question": "使用t-SNE進行降維可視化時，應注意的重點？",
        "options": [
          "A. t-SNE保留局部結構，全局距離與簇大小無意義",
          "B. t-SNE保留全局結構",
          "C. t-SNE不須設定參數",
          "D. t-SNE可用於預測"
        ],
        "answer": "A",
        "key_point": "t-SNE特性",
        "analysis": ""
      },
      {
        "id": "6.1-J05",
        "question": "執行Python：\nfrom sklearn.feature_selection import SelectKBest, f_classif\nselector=SelectKBest(f_classif,k=10)\n此處使用f_classif的作用？",
        "options": [
          "A. 基於ANOVA F統計量評估每個特徵與目標的關聯性",
          "B. 評估特徵間的相關性",
          "C. 計算特徵重要性",
          "D. 隨機選取"
        ],
        "answer": "A",
        "key_point": "SelectKBest",
        "analysis": ""
      },
      {
        "id": "6.1-J06",
        "question": "自動特徵工程(Automated Feature Engineering)工具如Featuretools的核心概念？",
        "options": [
          "A. 基於深度特徵合成(Deep Feature Synthesis)自動生成多層次聚合特徵",
          "B. 隨機生成特徵",
          "C. 手動挑選",
          "D. 刪除特徵"
        ],
        "answer": "A",
        "key_point": "自動特徵工程",
        "analysis": ""
      },
      {
        "id": "6.1-J07",
        "question": "處理文字資料時，使用TF-IDF相較於CountVectorizer(BOW)的優點？",
        "options": [
          "A. TF-IDF降低常見詞的權重，凸顯重要詞",
          "B. 兩者相同",
          "C. TF-IDF更快",
          "D. CountVectorizer更常用"
        ],
        "answer": "A",
        "key_point": "TF-IDF",
        "analysis": "TF-IDF校正詞頻，降低停用詞等常見詞的影響。"
      },
      {
        "id": "6.1-J08",
        "question": "時間序列預測中，建立滯後特徵(Lag Features)時要注意？",
        "options": [
          "A. 訓練與測試資料需按時間順序分割，避免未來資料洩漏",
          "B. 隨機分割",
          "C. 不須處理",
          "D. 使用交叉驗證"
        ],
        "answer": "A",
        "key_point": "滯後特徵",
        "analysis": "時間序列的滯後特徵若使用隨機分割會造成未來資料洩漏。"
      },
      {
        "id": "6.1-J09",
        "question": "下列何者正確？關於特徵選擇中的Boruta演算法：",
        "options": [
          "A. 與隨機森林配合，比較原始與陰影(Shuffle)特徵的重要性",
          "B. 使用PCA選擇",
          "C. 基於線性模型",
          "D. 使用t檢定"
        ],
        "answer": "A",
        "key_point": "Boruta",
        "analysis": "Boruta創建隨機陰影特徵比較重要性，選出真正重要的特徵。"
      },
      {
        "id": "6.1-J10",
        "question": "在特徵工程中，將連續變數切割為離散區間（如年齡分組），此技術稱為？",
        "options": [
          "A. 離散化(Discretization)",
          "B. 標準化",
          "C. 歸一化",
          "D. 正規化"
        ],
        "answer": "A",
        "key_point": "離散化",
        "analysis": "離散化將連續特徵轉為有序類別，可捕捉非線性關係與處理離群值。"
      }
    ],
    "專業": [
      {
        "id": "6.1-Z01",
        "question": "深度學習中自動編碼器(Autoencoder)用於特徵學習的優點？",
        "options": [
          "A. 無監督學習高效的非線性特徵壓縮",
          "B. 監督學習",
          "C. 線性降維",
          "D. 不需訓練"
        ],
        "answer": "A",
        "key_point": "Autoencoder特徵",
        "analysis": "Autoencoder可學習資料的非線性低維表示。"
      },
      {
        "id": "6.1-Z02",
        "question": "在圖像分類中，為什麼使用卷積神經網路(CNN)提取特徵而非手動特徵？",
        "options": [
          "A. CNN自動從原始像素端到端學習層次化的視覺特徵",
          "B. CNN更快",
          "C. 手動特徵不可行",
          "D. CNN不使用特徵"
        ],
        "answer": "A",
        "key_point": "CNN特徵",
        "analysis": "CNN可自動學習從邊緣到物件的層次化特徵。"
      },
      {
        "id": "6.1-Z03",
        "question": "特徵漂移(Feature Drift)監控在MLOps中的重要性為何？",
        "options": [
          "A. 特徵分布隨時間改變會導致模型效能下降，需即時監控與重新訓練",
          "B. 無需監控",
          "C. 只在訓練時檢查",
          "D. 與模型無關"
        ],
        "answer": "A",
        "key_point": "特徵漂移",
        "analysis": "特徵漂移是預測服務失效的主要原因之一。"
      },
      {
        "id": "6.1-Z04",
        "question": "在隱私保護下進行特徵工程，差分隱私(Differential Privacy)的概念為？",
        "options": [
          "A. 在統計結果中加入校準雜訊，保護個體資料",
          "B. 加密所有資料",
          "C. 刪除敏感欄位",
          "D. 匿名化資料"
        ],
        "answer": "A",
        "key_point": "差分隱私",
        "analysis": "差分隱私透過加入Laplace/Gaussian雜訊保護個體資訊。"
      },
      {
        "id": "6.1-Z05",
        "question": "在處理高基數類別特徵（如 zip code 有數千類）時，Binary Encoding 的運作原理為何？",
        "options": [
          "A. 將類別ID轉為二進位碼並拆分為多個欄位",
          "B. 使用One-Hot Encoding",
          "C. 使用Label Encoding",
          "D. 隨機編碼"
        ],
        "answer": "A",
        "key_point": "Binary Encoding",
        "analysis": "Binary Encoding將整數ID的二進位表示展開為多個二元特徵，維度低於One-Hot。"
      },
      {
        "id": "6.1-Z06",
        "question": "使用PCA降維後，主成分的解釋變異比例總和為100%。下列何者正確？",
        "options": [
          "A. 100%解釋變異表示原始資訊完全保留",
          "B. 表示降維成功",
          "C. 表示無資訊損失",
          "D. 表示所有主成分都被選取"
        ],
        "answer": "A",
        "key_point": "PCA解釋變異",
        "analysis": "解釋變異100%表示所有主成分都被選取，等於未降維。"
      },
      {
        "id": "6.1-Z07",
        "question": "在自然語言處理中，Word2Vec 嵌入(Embedding)相較於 TF-IDF 的主要優勢為何？",
        "options": [
          "A. 捕捉詞彙的語義相似性與上下文關係",
          "B. 計算更快",
          "C. 不需要訓練",
          "D. 維度更高"
        ],
        "answer": "A",
        "key_point": "Word2Vec",
        "analysis": "Word2Vec透過分散式表示捕捉詞彙間的語義與類比關係。"
      },
      {
        "id": "6.1-Z08",
        "question": "特徵選擇中的包裝法(Wrapper Method)如遞迴特徵消除(RFE)，其主要缺點為何？",
        "options": [
          "A. 計算成本高，需反覆訓練模型",
          "B. 無法處理非線性",
          "C. 只能選固定數量",
          "D. 不穩定"
        ],
        "answer": "A",
        "key_point": "RFE缺點",
        "analysis": "RFE每次疊代都需重新訓練模型，特徵數多時計算成本很高。"
      },
      {
        "id": "6.1-Z09",
        "question": "執行Python：\nfrom sklearn.preprocessing import RobustScaler\nscaler=RobustScaler()\nRobustScaler使用哪些統計量進行縮放？",
        "options": [
          "A. 中位數與IQR",
          "B. 平均數與標準差",
          "C. 最小值與最大值",
          "D. 眾數與全距"
        ],
        "answer": "A",
        "key_point": "RobustScaler",
        "analysis": "RobustScaler使用中位數與IQR，對離群值較不敏感。"
      },
      {
        "id": "6.1-Z10",
        "question": "時間序列特徵工程中，建立滾動統計量(Rolling Statistics)如滾動平均的主要目的為何？",
        "options": [
          "A. 平滑短期波動，捕捉趨勢與季節性模式",
          "B. 預測未來值",
          "C. 減少資料量",
          "D. 去除離群值"
        ],
        "answer": "A",
        "key_point": "滾動統計量",
        "analysis": "滾動平均可過濾高頻雜訊，揭示資料的長期趨勢。"
      }
    ]
  },
  "6.2": {
    "基礎": [
      {
        "id": "6.2-B01",
        "question": "混淆矩陣中，精確率(Precision)的公式為？",
        "options": [
          "A. TP/(TP+FP)",
          "B. TP/(TP+FN)",
          "C. TP/(TP+TN)",
          "D. (TP+TN)/N"
        ],
        "answer": "A",
        "key_point": "精確率",
        "analysis": "Precision = TP/(TP+FP)，預測為正類中實際為正的比例。"
      },
      {
        "id": "6.2-B02",
        "question": "混淆矩陣中，召回率(Recall)的公式為？",
        "options": [
          "A. TP/(TP+FN)",
          "B. TP/(TP+FP)",
          "C. TP/(TP+TN)",
          "D. (TP+TN)/N"
        ],
        "answer": "A",
        "key_point": "召回率",
        "analysis": "Recall = TP/(TP+FN)，實際正類中被正確預測的比例。"
      },
      {
        "id": "6.2-B03",
        "question": "F1-score的公式為何？",
        "options": [
          "A. 2×P×R/(P+R)",
          "B. (P+R)/2",
          "C. P×R",
          "D. P+R"
        ],
        "answer": "A",
        "key_point": "F1-score",
        "analysis": "F1為精確率與召回率的調和平均。"
      },
      {
        "id": "6.2-B04",
        "question": "模型的過擬合(Overfitting)徵兆為何？",
        "options": [
          "A. 訓練誤差低但驗證誤差高",
          "B. 訓練與驗證誤差都低",
          "C. 訓練與驗證誤差都高",
          "D. 驗證誤差低但訓練誤差高"
        ],
        "answer": "A",
        "key_point": "過擬合徵兆",
        "analysis": "過擬合時模型記住訓練資料的雜訊，無法泛化至新資料。"
      },
      {
        "id": "6.2-B05",
        "question": "ROC曲線的X軸與Y軸分別為？",
        "options": [
          "A. FPR(偽陽率)與TPR(真陽率)",
          "B. Precision與Recall",
          "C. TPR與FPR",
          "D. Recall與Precision"
        ],
        "answer": "A",
        "key_point": "ROC曲線",
        "analysis": "ROC以FPR為X軸、TPR為Y軸。"
      },
      {
        "id": "6.2-B06",
        "question": "訓練集、驗證集、測試集的正確使用方式？",
        "options": [
          "A. 訓練集訓練，驗證集調參，測試集最終評估",
          "B. 訓練集與驗證集訓練，測試集調參",
          "C. 全部一起訓練",
          "D. 訓練集測試，驗證集訓練"
        ],
        "answer": "A",
        "key_point": "資料集分割",
        "analysis": "三組分別用於訓練、模型選擇、最終評估。"
      },
      {
        "id": "6.2-B07",
        "question": "PR曲線(Precision-Recall Curve)適合用於？",
        "options": [
          "A. 不平衡分類問題",
          "B. 平衡分類問題",
          "C. 回歸問題",
          "D. 聚類問題"
        ],
        "answer": "A",
        "key_point": "PR曲線",
        "analysis": "不平衡資料中PR曲線比ROC更敏感。"
      },
      {
        "id": "6.2-B08",
        "question": "回歸問題中，MSE(均方誤差)的單位問題為何？",
        "options": [
          "A. MSE單位為目標變數的平方，不易直觀理解",
          "B. 無單位",
          "C. 單位為目標變數",
          "D. 單位為百分比"
        ],
        "answer": "A",
        "key_point": "MSE單位",
        "analysis": "MSE因平方操作導致單位為平方單位。"
      },
      {
        "id": "6.2-B09",
        "question": "下列何者是留存法(Holdout)的缺點？",
        "options": [
          "A. 結果受資料分割方式影響較大",
          "B. 計算太久",
          "C. 太複雜",
          "D. 需大量記憶體"
        ],
        "answer": "A",
        "key_point": "Holdout缺點",
        "analysis": "單次資料分割的隨機性可能造成評估結果不穩定。"
      },
      {
        "id": "6.2-B10",
        "question": "模型欠擬合(Underfitting)時應如何改善？",
        "options": [
          "A. 增加模型複雜度或增加有效特徵",
          "B. 增加更多資料",
          "C. 增加正規化",
          "D. 減少訓練次數"
        ],
        "answer": "A",
        "key_point": "欠擬合處理",
        "analysis": "欠擬合表示模型太簡單，需提升模型容量。"
      }
    ],
    "進階": [
      {
        "id": "6.2-J01",
        "question": "K-fold交叉驗證(K=5)時，每個樣本被用於驗證的次數？",
        "options": [
          "A. 恰好1次",
          "B. 5次",
          "C. 4次",
          "D. 0次"
        ],
        "answer": "A",
        "key_point": "K-fold特性",
        "analysis": ""
      },
      {
        "id": "6.2-J02",
        "question": "留一法(Leave-One-Out, LOO)交叉驗證的缺點？",
        "options": [
          "A. 計算成本極高，N筆資料需訓練N次",
          "B. 評估不準確",
          "C. 資料浪費",
          "D. 偏差大"
        ],
        "answer": "A",
        "key_point": "LOO",
        "analysis": ""
      },
      {
        "id": "6.2-J03",
        "question": "多分類問題中，Macro-F1與Weighted-F1的差異？",
        "options": [
          "A. Macro對各類別等權，Weighted以各類樣本數加權",
          "B. 兩者相同",
          "C. Macro加權",
          "D. Weighted等權"
        ],
        "answer": "A",
        "key_point": "Macro vs Weighted",
        "analysis": ""
      },
      {
        "id": "6.2-J04",
        "question": "AUC=0.5的模型代表？",
        "options": [
          "A. 無區分能力，等同隨機猜測",
          "B. 完美模型",
          "C. 模型很好",
          "D. 區分能力差但可用"
        ],
        "answer": "A",
        "key_point": "AUC=0.5",
        "analysis": ""
      },
      {
        "id": "6.2-J05",
        "question": "執行Python：\nfrom sklearn.metrics import classification_report\nprint(classification_report(y_true,y_pred))\n此函數回傳的內容不包括？",
        "options": [
          "A. R²分數",
          "B. Precision",
          "C. Recall",
          "D. F1-score"
        ],
        "answer": "A",
        "key_point": "classification_report",
        "analysis": ""
      },
      {
        "id": "6.2-J06",
        "question": "模型的學習曲線(Learning Curve)在評估中的用途？",
        "options": [
          "A. 判斷模型是否過擬合或欠擬合",
          "B. 判斷模型速度",
          "C. 判斷資料大小",
          "D. 判斷特徵重要性"
        ],
        "answer": "A",
        "key_point": "學習曲線",
        "analysis": ""
      },
      {
        "id": "6.2-J07",
        "question": "時間序列預測中使用隨機K-fold交叉驗證的問題？",
        "options": [
          "A. 隨機分割會破壞時間順序，造成未來資料預測過去",
          "B. 完全沒問題",
          "C. CV不適用時間序列",
          "D. K-fold無法使用"
        ],
        "answer": "A",
        "key_point": "時間序列CV",
        "analysis": "時間序列需使用時間序列專用CV如TimeSeriesSplit。"
      },
      {
        "id": "6.2-J08",
        "question": "執行Python：\nfrom sklearn.metrics import roc_auc_score\ny_prob=model.predict_proba(X)[:,1]\nprint(roc_auc_score(y_true,y_prob))\n為何使用predict_proba而非predict？",
        "options": [
          "A. AUC需要機率值而非硬分類以評估排序能力",
          "B. 兩者相同",
          "C. predict更快",
          "D. predict_proba更準確"
        ],
        "answer": "A",
        "key_point": "AUC計算",
        "analysis": "AUC基於預測分數的排序，需機率值計算。"
      },
      {
        "id": "6.2-J09",
        "question": "下列何者正確？關於資料洩漏(Data Leakage)的常見來源：",
        "options": [
          "A. 標準化時使用全資料集的μ與σ而非僅訓練集",
          "B. 特徵選擇",
          "C. 遺漏值填補",
          "D. 模型訓練"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "標準化應在訓練集擬合後轉換訓練與測試集。"
      },
      {
        "id": "6.2-J10",
        "question": "在分類模型中，若測試集的F1-score遠低於訓練集F1-score，代表何種問題？",
        "options": [
          "A. 過擬合(Overfitting)",
          "B. 欠擬合(Underfitting)",
          "C. 資料洩漏",
          "D. 類別不平衡"
        ],
        "answer": "A",
        "key_point": "過擬合診斷",
        "analysis": "訓練與測試表現差距大為過擬合的典型徵兆，模型缺乏泛化能力。"
      }
    ],
    "專業": [
      {
        "id": "6.2-Z01",
        "question": "在A/B測試結果分析中，除p值外還應關注哪些指標？",
        "options": [
          "A. 效果量(Effect Size)、信賴區間、實務顯著性",
          "B. 只有p值",
          "C. 只有樣本數",
          "D. 只有平均數"
        ],
        "answer": "A",
        "key_point": "A/B評估",
        "analysis": "p值僅回答是否顯著，效果量與信賴區間提供實務資訊。"
      },
      {
        "id": "6.2-Z02",
        "question": "模型校準(Calibration)不佳的影響？",
        "options": [
          "A. 預測機率不代表真實機率，如預測80%實際僅60%正確",
          "B. 不影響排序",
          "C. 只影響分類",
          "D. 無影響"
        ],
        "answer": "A",
        "key_point": "模型校準",
        "analysis": "校準差的模型機率值不可靠，需進行Platt Scaling等校準。"
      },
      {
        "id": "6.2-Z03",
        "question": "模型可重現性(Reproducibility)在評估中的重要性？",
        "options": [
          "A. 設定隨機種子(random_state)確保結果可重複",
          "B. 與評估無關",
          "C. 隨機結果更好",
          "D. 不需固定種子"
        ],
        "answer": "A",
        "key_point": "可重現性",
        "analysis": "固定隨機種子使實驗結果可重複驗證。"
      },
      {
        "id": "6.2-Z04",
        "question": "Uplift Modeling(增量模型)的評估方式與傳統分類模型不同之處？",
        "options": [
          "A. Uplift評估處理組與對照組的增量效果，需要隨機實驗資料",
          "B. 使用準確率評估",
          "C. 與分類相同",
          "D. 使用AUC評估"
        ],
        "answer": "A",
        "key_point": "Uplift評估",
        "analysis": "Uplift模型評估的是因果增量效果，需隨機對照實驗。"
      },
      {
        "id": "6.2-Z05",
        "question": "在模型評估中，使用Stratified K-fold優於一般K-fold的場景為何？",
        "options": [
          "A. 類別不平衡時，確保每折保留各類別比例",
          "B. 資料量大時",
          "C. 回歸問題",
          "D. 特徵數多時"
        ],
        "answer": "A",
        "key_point": "Stratified K-fold",
        "analysis": "Stratified K-fold維持各折的類別比例，減少評估偏差。"
      },
      {
        "id": "6.2-Z06",
        "question": "執行Python：\nfrom sklearn.model_selection import cross_val_score\nscores=cross_val_score(model,X,y,cv=5,scoring='neg_mean_squared_error')\n回傳的scores為負值的原因為何？",
        "options": [
          "A. sklearn約定最大化方向，MSE越小越好故取負值",
          "B. 計算錯誤",
          "C. 應取絕對值",
          "D. 資料有問題"
        ],
        "answer": "A",
        "key_point": "neg_MSE",
        "analysis": "sklearn的scoring參數遵循最大化慣例，故誤差指標須取負值。"
      },
      {
        "id": "6.2-Z07",
        "question": "在模型選擇中，使用AIC(Akaike Information Criterion)進行比較時，何者正確？",
        "options": [
          "A. AIC越小越好",
          "B. AIC越大越好",
          "C. AIC須搭配p值",
          "D. AIC與模型無關"
        ],
        "answer": "A",
        "key_point": "AIC",
        "analysis": "AIC = -2ln(L) + 2k，同時考量模型擬合度與複雜度，值越小越好。"
      },
      {
        "id": "6.2-Z08",
        "question": "Bootstrap評估法與K-fold交叉驗證的主要差異為何？",
        "options": [
          "A. Bootstrap有放回抽樣，K-fold無放回分折",
          "B. 兩者相同",
          "C. Bootstrap無需訓練",
          "D. K-fold需更多資料"
        ],
        "answer": "A",
        "key_point": "Bootstrap vs K-fold",
        "analysis": "Bootstrap從原始資料有放回抽樣，K-fold將資料平分為K份。"
      },
      {
        "id": "6.2-Z09",
        "question": "在評估迴歸模型時，R²=0.85代表何種意義？",
        "options": [
          "A. 模型解釋85%的應變數變異",
          "B. 模型準確率為85%",
          "C. 85%的預測正確",
          "D. 誤差率為15%"
        ],
        "answer": "A",
        "key_point": "R²意義",
        "analysis": "R²衡量模型解釋的變異比例，越接近1表示擬合越好。"
      },
      {
        "id": "6.2-Z10",
        "question": "在A/B測試中，若樣本數固定且希望同時降低型一與型二誤差，下列何者正確？",
        "options": [
          "A. 兩者互相權衡，無法同時降低",
          "B. 增加樣本數",
          "C. 降低顯著水準",
          "D. 提高檢定力"
        ],
        "answer": "A",
        "key_point": "誤差權衡",
        "analysis": "樣本數固定時，型一與型二誤差呈反向關係，需適當取捨。"
      }
    ]
  },
  "6.3": {
    "基礎": [
      {
        "id": "6.3-B01",
        "question": "K-means聚類演算法中，K值的選擇方法不包括？",
        "options": [
          "A. 使用準確率評估",
          "B. 肘部法則(Elbow Method)",
          "C. 輪廓係數(Silhouette Score)",
          "D. 間距統計量(Gap Statistic)"
        ],
        "answer": "A",
        "key_point": "K值選擇",
        "analysis": "K-means為非監督學習，無準確率可用。"
      },
      {
        "id": "6.3-B02",
        "question": "K-means演算法的核心步驟？",
        "options": [
          "A. 隨機初始化K個中心點，迭代分配與更新直到收斂",
          "B. 一次計算完成",
          "C. 無需迭代",
          "D. 由大往小合併"
        ],
        "answer": "A",
        "key_point": "K-means步驟",
        "analysis": "K-means交替進行樣本分配與中心更新直至收斂。"
      },
      {
        "id": "6.3-B03",
        "question": "層次聚類(Hierarchical Clustering)的優點？",
        "options": [
          "A. 不需預設K值，可產生樹狀圖",
          "B. 計算最快",
          "C. 處理大資料",
          "D. 結果唯一"
        ],
        "answer": "A",
        "key_point": "層次聚類",
        "analysis": "層次聚類產生完整的階層式聚類樹。"
      },
      {
        "id": "6.3-B04",
        "question": "DBSCAN與K-means的主要差異？",
        "options": [
          "A. DBSCAN自動偵測任意形狀的簇並標記離群點",
          "B. DBSCAN需預設K值",
          "C. 兩者相同",
          "D. DBSCAN僅球形簇"
        ],
        "answer": "A",
        "key_point": "DBSCAN",
        "analysis": "DBSCAN基於密度，可發現任意形狀的聚類。"
      },
      {
        "id": "6.3-B05",
        "question": "降維(Dimensionality Reduction)在非監督學習中的應用？",
        "options": [
          "A. 可視化高維資料、去噪、減少運算量",
          "B. 增加特徵",
          "C. 使模型更複雜",
          "D. 降低可解釋性"
        ],
        "answer": "A",
        "key_point": "降維目的",
        "analysis": "降維可視化、壓縮、去噪、加速後續任務。"
      },
      {
        "id": "6.3-B06",
        "question": "關聯規則(Association Rule)中，支持度(Support)的定義？",
        "options": [
          "A. 包含某項集的交易數/總交易數",
          "B. 包含某項集的交易數/包含前提的交易數",
          "C. 規則的預測力",
          "D. 規則的可信度"
        ],
        "answer": "A",
        "key_point": "支持度",
        "analysis": "Support(A→B)=P(A∩B)，表示項集的普遍性。"
      },
      {
        "id": "6.3-B07",
        "question": "關聯規則中，信心度(Confidence)的公式？",
        "options": [
          "A. Support(A∪B)/Support(A)",
          "B. Support(A∪B)/Support(B)",
          "C. Support(A)/Support(B)",
          "D. Support(A∪B)"
        ],
        "answer": "A",
        "key_point": "信心度",
        "analysis": "Confidence=P(B|A)=P(A∩B)/P(A)。"
      },
      {
        "id": "6.3-B08",
        "question": "K-means的初始化方法(K-means++)的改進為何？",
        "options": [
          "A. 使初始中心點彼此相距較遠，提高收斂品質",
          "B. 隨機初始化",
          "C. 使用前K個樣本",
          "D. 使用最後K個樣本"
        ],
        "answer": "A",
        "key_point": "K-means++",
        "analysis": "K-means++按距離加權機率選擇初始化中心。"
      },
      {
        "id": "6.3-B09",
        "question": "高斯混合模型(GMM)與K-means的主要差異？",
        "options": [
          "A. GMM提供軟聚類(機率分配)，K-means為硬聚類",
          "B. 兩者相同",
          "C. GMM更快",
          "D. GMM不需參數"
        ],
        "answer": "A",
        "key_point": "GMM vs K-means",
        "analysis": "GMM的EM演算法估計每個樣本屬於各聚類的機率。"
      },
      {
        "id": "6.3-B10",
        "question": "輪廓係數(Silhouette Score)的範圍為何？",
        "options": [
          "A. -1到1，越接近1表示聚類效果越好",
          "B. 0到1",
          "C. -∞到∞",
          "D. -1到0"
        ],
        "answer": "A",
        "key_point": "輪廓係數",
        "analysis": "輪廓係數接近1表示樣本在正確簇內且與鄰近簇分離良好。"
      }
    ],
    "進階": [
      {
        "id": "6.3-J01",
        "question": "K-means中初始K值設定為3但真實有5群，可能發生？",
        "options": [
          "A. 部分自然簇被強行合併，聚類結果失真",
          "B. 自動調整為5群",
          "C. 無法執行",
          "D. 結果完美"
        ],
        "answer": "A",
        "key_point": "K值設定不當",
        "analysis": ""
      },
      {
        "id": "6.3-J02",
        "question": "DBSCAN的eps(鄰域半徑)與min_samples(最小樣本數)參數的影響？",
        "options": [
          "A. eps越大簇越少越合併，min_samples越大越容易產生離群點",
          "B. eps越大簇越多",
          "C. 無影響",
          "D. eps控制離群點"
        ],
        "answer": "A",
        "key_point": "DBSCAN參數",
        "analysis": ""
      },
      {
        "id": "6.3-J03",
        "question": "執行Python：\nfrom sklearn.cluster import KMeans\nkm=KMeans(n_clusters=5,random_state=42,n_init=10)\nn_init=10的意義？",
        "options": [
          "A. 以10次不同初始化執行，選擇最佳結果避免局部最優",
          "B. 執行10次迭代",
          "C. 10次隨機抽樣",
          "D. 10折交叉驗證"
        ],
        "answer": "A",
        "key_point": "n_init",
        "analysis": ""
      },
      {
        "id": "6.3-J04",
        "question": "非監督式異常檢測(Anomaly Detection)中，Isolation Forest的原理？",
        "options": [
          "A. 隨機分割特徵，異常點因孤立難度低所需分割次數少",
          "B. 距離計算",
          "C. 密度估計",
          "D. 聚類"
        ],
        "answer": "A",
        "key_point": "Isolation Forest",
        "analysis": ""
      },
      {
        "id": "6.3-J05",
        "question": "主題模型(Topic Model)LDA的輸出為何？",
        "options": [
          "A. 每個文件的主題分布與每個主題的詞分布",
          "B. 文件的類別標籤",
          "C. 文件的聚類結果",
          "D. 文件的分數"
        ],
        "answer": "A",
        "key_point": "LDA",
        "analysis": ""
      },
      {
        "id": "6.3-J06",
        "question": "協同過濾(Collaborative Filtering)在推薦系統中的兩種主要形式？",
        "options": [
          "A. 基於用戶(User-based)與基於物品(Item-based)",
          "B. 分類與回歸",
          "C. 監督與非監督",
          "D. 線性與非線性"
        ],
        "answer": "A",
        "key_point": "協同過濾",
        "analysis": ""
      },
      {
        "id": "6.3-J07",
        "question": "在客戶分群專案中，使用K-means後各群客戶量差異極大(10000,5,9995)。可能原因？",
        "options": [
          "A. 資料本身有明顯的核心群體與離群群體",
          "B. K值過大",
          "C. 資料標準化不足",
          "D. 迭代次數不足"
        ],
        "answer": "A",
        "key_point": "聚類不平衡",
        "analysis": "聚類大小極度不均可能是資料結構所致或K值選擇問題。"
      },
      {
        "id": "6.3-J08",
        "question": "執行Python：\nfrom sklearn.cluster import AgglomerativeClustering\nmodel=AgglomerativeClustering(n_clusters=3,linkage='ward')\nward連結法(Linkage)的特點？",
        "options": [
          "A. 最小化合併後簇內變異的增加量",
          "B. 使用最短距離",
          "C. 使用最長距離",
          "D. 使用平均距離"
        ],
        "answer": "A",
        "key_point": "Ward連結",
        "analysis": "Ward法最小化合併兩群後的SSE增量。"
      },
      {
        "id": "6.3-J09",
        "question": "下列何者正確？關於非監督式學習中的異常檢測場景：",
        "options": [
          "A. 信用卡詐欺偵測中，正常交易眾多但異常極少，適合用非監督學習",
          "B. 需大量標記資料",
          "C. 異常檢測不適用",
          "D. 只能用監督學習"
        ],
        "answer": "A",
        "key_point": "異常檢測",
        "analysis": "詐欺偵測中異常樣本稀缺且多變，非監督方法更實用。"
      },
      {
        "id": "6.3-J10",
        "question": "在非監督式學習中，使用t-SNE進行降維可視化時，perplexity參數的影響為何？",
        "options": [
          "A. perplexity控制局部與全局結構的平衡",
          "B. perplexity控制學習率",
          "C. perplexity控制迭代次數",
          "D. perplexity控制輸出維度"
        ],
        "answer": "A",
        "key_point": "t-SNE perplexity",
        "analysis": "perplexity可視為有效鄰近點數，太小重視局部結構，太大可能忽略細節。"
      }
    ],
    "專業": [
      {
        "id": "6.3-Z01",
        "question": "在非監督式表示學習中，對比學習(Contrastive Learning)的核心思想？",
        "options": [
          "A. 拉近正樣本對(增強/鄰近)在嵌入空間的距離，推遠負樣本對",
          "B. 直接分類",
          "C. 聚類",
          "D. 降維"
        ],
        "answer": "A",
        "key_point": "對比學習",
        "analysis": "SimCLR等透過資料增強後的對比損失學習有用表示。"
      },
      {
        "id": "6.3-Z02",
        "question": "在序列資料中，使用HMM(隱馬可夫模型)進行非監督建模時，Baum-Welch演算法的作用？",
        "options": [
          "A. EM演算法估計HMM的轉移與發射機率",
          "B. Viterbi解碼",
          "C. 前向演算法",
          "D. 後向演算法"
        ],
        "answer": "A",
        "key_point": "Baum-Welch",
        "analysis": "Baum-Welch是EM演算法應用於HMM參數估計。"
      },
      {
        "id": "6.3-Z03",
        "question": "使用GMM進行密度估計時，BIC與AIC選擇分量數的準則？",
        "options": [
          "A. BIC懲罰更重傾向簡單模型，AIC較寬容",
          "B. AIC懲罰更重",
          "C. 兩者相同",
          "D. BIC無懲罰"
        ],
        "answer": "A",
        "key_point": "BIC vs AIC",
        "analysis": "BIC對參數數量的懲罰力度大於AIC。"
      },
      {
        "id": "6.3-Z04",
        "question": "在譜聚類(Spectral Clustering)中，拉普拉斯矩陣(Laplacian Matrix)的作用？",
        "options": [
          "A. 將資料映射到譜空間中，使非球形簇線性可分",
          "B. 計算距離",
          "C. 降維",
          "D. 歸一化"
        ],
        "answer": "A",
        "key_point": "譜聚類",
        "analysis": "譜聚類透過拉普拉斯矩陣的特徵分解處理複雜流形結構。"
      },
      {
        "id": "6.3-Z05",
        "question": "在K-means中，使用K-means++初始化方法的主要改善為何？",
        "options": [
          "A. 以距離加權機率選擇初始中心，提高收斂品質",
          "B. 加快每次迭代",
          "C. 減少記憶體使用",
          "D. 自動決定K值"
        ],
        "answer": "A",
        "key_point": "K-means++",
        "analysis": "K-means++使初始中心點分布更廣，降低收斂到局部最優的機率。"
      },
      {
        "id": "6.3-Z06",
        "question": "DBSCAN中，參數eps與min_samples對離群點偵測的影響為何？",
        "options": [
          "A. eps越小、min_samples越大，越多點被標記為離群點",
          "B. eps越大離群點越多",
          "C. min_samples越小離群點越多",
          "D. 不影響離群點"
        ],
        "answer": "A",
        "key_point": "DBSCAN參數影響",
        "analysis": "小eps與大min_samples使核心區域條件更嚴格，更多點成為離群點。"
      },
      {
        "id": "6.3-Z07",
        "question": "在推薦系統中，矩陣分解(Matrix Factorization)如SVD的核心概念為何？",
        "options": [
          "A. 將用戶-物品互動矩陣分解為低維的用戶與物品隱含特徵",
          "B. 計算用戶相似度",
          "C. 計算物品相似度",
          "D. 使用分類模型"
        ],
        "answer": "A",
        "key_point": "矩陣分解",
        "analysis": "SVD將評分矩陣分解為用戶與物品的潛在因子，預測未觀測評分。"
      },
      {
        "id": "6.3-Z08",
        "question": "關聯規則中，提升度(Lift)的計算公式為何？",
        "options": [
          "A. Confidence(A→B) / Support(B)",
          "B. Support(A∪B)",
          "C. Confidence(A→B)",
          "D. 1 / Support(A)"
        ],
        "answer": "A",
        "key_point": "提升度",
        "analysis": "Lift > 1表示A與B正相關，Lift = 1表示獨立。"
      },
      {
        "id": "6.3-Z09",
        "question": "高斯混合模型(GMM)使用EM演算法進行參數估計時，E步驟(Expectation)計算的是？",
        "options": [
          "A. 每個樣本屬於各高斯分量的後驗機率",
          "B. 更新分量參數",
          "C. 計算對數似然",
          "D. 初始化參數"
        ],
        "answer": "A",
        "key_point": "EM的E步驟",
        "analysis": "E步驟計算責任值(responsibility)，即樣本由各分量生成的機率。"
      },
      {
        "id": "6.3-Z10",
        "question": "在客戶分群專案中，若使用K-means且特徵包含金額（萬元）與年齡（歲），下列何者正確？",
        "options": [
          "A. 需先標準化特徵，否則金額會主導距離計算",
          "B. 不需標準化，K-means自動處理",
          "C. 年齡應刪除",
          "D. 金額應取對數"
        ],
        "answer": "A",
        "key_point": "K-means標準化",
        "analysis": "K-means基於歐氏距離，未標準化時量級大的特徵主導聚類結果。"
      }
    ]
  },
  "6.4": {
    "基礎": [
      {
        "id": "6.4-B01",
        "question": "神經網路中，激活函數(Activation Function)的主要功能？",
        "options": [
          "A. 引入非線性，使網路能學習複雜模式",
          "B. 線性變換",
          "C. 降維",
          "D. 歸一化"
        ],
        "answer": "A",
        "key_point": "激活函數",
        "analysis": "若無非線性激活函數，多層網路等價於單層。"
      },
      {
        "id": "6.4-B02",
        "question": "ReLU激活函數的優點？",
        "options": [
          "A. 計算簡單且緩解梯度消失問題",
          "B. 輸出有界",
          "C. 可導",
          "D. 零中心"
        ],
        "answer": "A",
        "key_point": "ReLU優點",
        "analysis": "ReLU=max(0,x)，梯度在正區間恆為1。"
      },
      {
        "id": "6.4-B03",
        "question": "梯度下降(Gradient Descent)中，學習率(Learning Rate)過大的後果？",
        "options": [
          "A. 可能跳過最優點，損失震盪不收斂",
          "B. 收斂更快",
          "C. 結果更準確",
          "D. 無影響"
        ],
        "answer": "A",
        "key_point": "學習率過大",
        "analysis": "學習率過大會使最佳化過程不穩定。"
      },
      {
        "id": "6.4-B04",
        "question": "SGD(隨機梯度下降)與Batch GD的主要差異？",
        "options": [
          "A. SGD每次用一個樣本更新，Batch GD用全部樣本",
          "B. SGD更穩定",
          "C. Batch GD更快",
          "D. 兩者相同"
        ],
        "answer": "A",
        "key_point": "SGD vs Batch GD",
        "analysis": "SGD高頻率更新，可逃離局部最優。"
      },
      {
        "id": "6.4-B05",
        "question": "在CNN中，池化層(Pooling Layer)的作用？",
        "options": [
          "A. 降採樣減少特徵圖尺寸，降低參數量",
          "B. 增加特徵圖",
          "C. 學習特徵",
          "D. 分類"
        ],
        "answer": "A",
        "key_point": "池化層",
        "analysis": "最大池化(Max Pooling)保留最重要特徵。"
      },
      {
        "id": "6.4-B06",
        "question": "Dropout正規化的原理？",
        "options": [
          "A. 訓練時隨機丟棄部分神經元，防止共適應",
          "B. 測試時丟棄神經元",
          "C. 降低學習率",
          "D. 減少訓練資料"
        ],
        "answer": "A",
        "key_point": "Dropout",
        "analysis": "Dropout打破神經元間的共適應，類似集成學習。"
      },
      {
        "id": "6.4-B07",
        "question": "損失函數(Loss Function)的作用？",
        "options": [
          "A. 量化模型預測與真實值的差距",
          "B. 決定模型架構",
          "C. 控制學習率",
          "D. 選擇優化器"
        ],
        "answer": "A",
        "key_point": "損失函數",
        "analysis": "最佳化目標是最小化損失函數。"
      },
      {
        "id": "6.4-B08",
        "question": "Sigmoid激活函數的主要缺點？",
        "options": [
          "A. 梯度飽和(梯度消失)與非零中心",
          "B. 計算太快",
          "C. 輸出範圍大",
          "D. 不可導"
        ],
        "answer": "A",
        "key_point": "Sigmoid缺點",
        "analysis": "Sigmoid兩端梯度趨近0，造成深層網路訓練困難。"
      },
      {
        "id": "6.4-B09",
        "question": "批次正規化(Batch Normalization)的作用？",
        "options": [
          "A. 每層輸入歸一化，加速訓練與穩定",
          "B. 增加模型深度",
          "C. 減少參數",
          "D. 提高準確率"
        ],
        "answer": "A",
        "key_point": "Batch Norm",
        "analysis": "Batch Norm減少內部協變數偏移，允許較高學習率。"
      },
      {
        "id": "6.4-B10",
        "question": "卷積層中，卷積核(Kernel)的作用？",
        "options": [
          "A. 滑動提取局部特徵模式",
          "B. 降維",
          "C. 分類",
          "D. 池化"
        ],
        "answer": "A",
        "key_point": "卷積核",
        "analysis": "卷積核在輸入上滑動進行卷積運算提取特徵。"
      }
    ],
    "進階": [
      {
        "id": "6.4-J01",
        "question": "Adam優化器結合了哪兩種方法的優點？",
        "options": [
          "A. Momentum(動量)與RMSprop(自適應學習率)",
          "B. SGD與Momentum",
          "C. AdaGrad與SGD",
          "D. RMSprop與SGD"
        ],
        "answer": "A",
        "key_point": "Adam",
        "analysis": ""
      },
      {
        "id": "6.4-J02",
        "question": "遞歸神經網路(RNN)面臨的主要挑戰？",
        "options": [
          "A. 長序列梯度消失或爆炸，難以學習長期依賴",
          "B. 無法處理序列",
          "C. 計算太快",
          "D. 模型太簡單"
        ],
        "answer": "A",
        "key_point": "RNN梯度消失",
        "analysis": ""
      },
      {
        "id": "6.4-J03",
        "question": "在CNN分類任務中，卷積層後通常接全連接層的原因？",
        "options": [
          "A. 卷積層提取特徵，全連接層整合特徵進行分類",
          "B. 無需全連接層",
          "C. 全連接層提取特徵",
          "D. 兩者功能相同"
        ],
        "answer": "A",
        "key_point": "全連接層",
        "analysis": ""
      },
      {
        "id": "6.4-J04",
        "question": "轉移學習(Transfer Learning)適合的場景？",
        "options": [
          "A. 目標任務資料少但可借用預訓練模型的知識",
          "B. 資料量很大",
          "C. 任務完全不同",
          "D. 不需訓練"
        ],
        "answer": "A",
        "key_point": "轉移學習",
        "analysis": ""
      },
      {
        "id": "6.4-J05",
        "question": "GAN(生成對抗網路)中，生成器與鑑別器的關係？",
        "options": [
          "A. 生成器產生假樣本欺騙鑑別器，鑑別器區分真假",
          "B. 兩者合作",
          "C. 兩者獨立",
          "D. 生成器分類"
        ],
        "answer": "A",
        "key_point": "GAN",
        "analysis": ""
      },
      {
        "id": "6.4-J06",
        "question": "Transformer模型中自注意力(Self-Attention)的核心計算？",
        "options": [
          "A. Query、Key、Value的點積注意力加權",
          "B. 卷積運算",
          "C. 全連接",
          "D. 池化"
        ],
        "answer": "A",
        "key_point": "Self-Attention",
        "analysis": ""
      },
      {
        "id": "6.4-J07",
        "question": "GPU訓練深度網路時，CUDA Out of Memory錯誤的解決方案？",
        "options": [
          "A. 降低batch size或使用梯度累積",
          "B. 增加batch size",
          "C. 增加層數",
          "D. 增加參數"
        ],
        "answer": "A",
        "key_point": "GPU記憶體",
        "analysis": "batch size是GPU記憶體消耗的主要因素。"
      },
      {
        "id": "6.4-J08",
        "question": "執行Python PyTorch：\nmodel.train()\nfor X,y in dataloader:\n   optimizer.zero_grad()\n   loss=loss_fn(model(X),y)\n   loss.backward()\n   optimizer.step()\noptimizer.zero_grad()的必要性？",
        "options": [
          "A. 每個batch都需要重置梯度，避免梯度累積",
          "B. 可省略",
          "C. 只在最後執行",
          "D. 批次歸一化用"
        ],
        "answer": "A",
        "key_point": "梯度清零",
        "analysis": "Pytorch預設累積梯度，需手動清零。"
      },
      {
        "id": "6.4-J09",
        "question": "下列何者正確？關於深度學習中過擬合的最佳處理策略組合：",
        "options": [
          "A. Dropout + 資料增強 + 正規化 + 早停法",
          "B. 僅增加層數",
          "C. 僅增加參數",
          "D. 移除正規化"
        ],
        "answer": "A",
        "key_point": "過擬合組合",
        "analysis": "多種正規化策略組合效果最佳。"
      },
      {
        "id": "6.4-J10",
        "question": "在卷積神經網路(CNN)中，使用1×1卷積核的主要作用為何？",
        "options": [
          "A. 通道數升降維與跨通道特徵融合",
          "B. 提取空間特徵",
          "C. 替代池化層",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "1×1卷積",
        "analysis": "1×1卷積透過線性組合跨通道特徵實現降維或升維，不影響空間尺寸。"
      }
    ],
    "專業": [
      {
        "id": "6.4-Z01",
        "question": "在大型語言模型(LLM)的預訓練中，FP16混合精度訓練的主要目的？",
        "options": [
          "A. 減少記憶體用量與加速運算，同時維持模型準確度",
          "B. 提高精度",
          "C. 增加模型大小",
          "D. 降低訓練速度"
        ],
        "answer": "A",
        "key_point": "混合精度",
        "analysis": "FP16降低記憶體與加速，配合FP32主權重維持精度。"
      },
      {
        "id": "6.4-Z02",
        "question": "模型蒸餾(Model Distillation)中軟標籤(Soft Label)的溫度參數(Temperature)作用？",
        "options": [
          "A. 控制機率分布的平滑度，高溫使分布更均勻攜帶更多資訊",
          "B. 控制學習率",
          "C. 控制模型大小",
          "D. 控制訓練速度"
        ],
        "answer": "A",
        "key_point": "溫度參數",
        "analysis": "高溫軟化機率分布，使學生模型學到類別間相似性。"
      },
      {
        "id": "6.4-Z03",
        "question": "在強化學習(Reinforcement Learning)中，折扣因子γ(Gamma)的作用？",
        "options": [
          "A. 權衡即時獎勵與未來獎勵的重要性",
          "B. 控制學習率",
          "C. 控制探索率",
          "D. 控制模型大小"
        ],
        "answer": "A",
        "key_point": "折扣因子",
        "analysis": "γ越接近1越重視長期獎勵。"
      },
      {
        "id": "6.4-Z04",
        "question": "邊緣裝置(Edge Device)部署深度學習模型時，模型量化(Quantization)的作用？",
        "options": [
          "A. 將FP32權重轉為INT8，減少模型大小與加速推論",
          "B. 增加精度",
          "C. 增加參數量",
          "D. 重新訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "INT8量化的模型尺寸為FP32的1/4，推論速度提升2-4倍。"
      },
      {
        "id": "6.4-Z05",
        "question": "在Transformer模型中，位置編碼(Positional Encoding)的主要目的為何？",
        "options": [
          "A. 提供序列中每個位置的順序資訊",
          "B. 加速訓練",
          "C. 減少參數量",
          "D. 提高準確率"
        ],
        "answer": "A",
        "key_point": "位置編碼",
        "analysis": "Self-Attention不具備序列順序感知能力，需位置編碼注入位置資訊。"
      },
      {
        "id": "6.4-Z06",
        "question": "在訓練深層神經網路時，梯度爆炸(Gradient Explosion)的常見解決方案為何？",
        "options": [
          "A. 梯度裁剪(Gradient Clipping)",
          "B. 降低學習率",
          "C. 增加Batch Size",
          "D. 增加層數"
        ],
        "answer": "A",
        "key_point": "梯度裁剪",
        "analysis": "梯度裁剪將梯度的範數限制在閾值內，防止更新步長過大。"
      },
      {
        "id": "6.4-Z07",
        "question": "遷移學習(Transfer Learning)中，微調(Fine-tuning)與特徵提取(Feature Extraction)的主要差異為何？",
        "options": [
          "A. 微調更新預訓練權重，特徵提取只訓練新分類層",
          "B. 兩者相同",
          "C. 特徵提取更新所有層",
          "D. 微調只訓練分類層"
        ],
        "answer": "A",
        "key_point": "微調 vs 特徵提取",
        "analysis": "微調以較小學習率更新預訓練權重適應新任務；特徵提取凍結權重當作特徵抽取器。"
      },
      {
        "id": "6.4-Z08",
        "question": "在CNN中，使用全局平均池化(Global Average Pooling)取代全連接層的優點為何？",
        "options": [
          "A. 減少參數量、防止過擬合、可處理任意尺寸輸入",
          "B. 提高準確率",
          "C. 加速訓練",
          "D. 增加模型深度"
        ],
        "answer": "A",
        "key_point": "全局平均池化",
        "analysis": "GAP將每個特徵圖縮為單一數值，大幅減少參數且具空間不變性。"
      },
      {
        "id": "6.4-Z09",
        "question": "在GAN訓練中，生成器與鑑別器需維持平衡，若鑑別器太強會發生何種問題？",
        "options": [
          "A. 生成器梯度消失無法學習",
          "B. 生成器更強",
          "C. 訓練加速",
          "D. 鑑別器不再更新"
        ],
        "answer": "A",
        "key_point": "GAN平衡",
        "analysis": "鑑別器過強時生成器的損失梯度消失，無法有效更新。"
      },
      {
        "id": "6.4-Z10",
        "question": "在RNN/LSTM中，使用雙向(Bidirectional)架構的主要優點為何？",
        "options": [
          "A. 同時利用序列的前向與後向上下文資訊",
          "B. 減少參數量",
          "C. 加速訓練",
          "D. 降低記憶體使用"
        ],
        "answer": "A",
        "key_point": "雙向RNN",
        "analysis": "雙向RNN從兩個方向處理序列，捕捉完整的上下文資訊。"
      }
    ]
  }
};
