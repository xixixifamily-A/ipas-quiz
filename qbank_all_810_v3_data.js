// IPAS 科目1 v3 題庫 - IPAS 114年考古題風格（情境40% | 下列何者30% | 直接問答30%）
// 9個範圍 × 3難度 × 10題 = 270題
// 生成日期: 2026-05-20

const ALL_QBANKS = {
  "3.1": {
    "基礎": [
      {
        "id": "3.1-B01",
        "question": "下列何者是中文斷詞最常見的挑戰？",
        "options": [
          "A. 歧義切分，如「白天鵝」可切為「白天/鵝」或「白/天鵝」",
          "B. 標點符號不足",
          "C. 詞彙量太少",
          "D. 編碼格式不一致"
        ],
        "answer": "A",
        "key_point": "中文斷詞歧義",
        "analysis": "中文缺乏詞邊界，歧義切分是斷詞的核心挑戰，需上下文判斷。"
      },
      {
        "id": "3.1-B02",
        "question": "線上音樂平台根據用戶行為進行分群。下列哪種NLP技術最能從歌詞中判斷歌曲風格？",
        "options": [
          "A. 文本分類，將歌詞分類為搖滾/抒情/嘻哈等",
          "B. 命名實體識別",
          "C. 詞形還原",
          "D. 語音辨識"
        ],
        "answer": "A",
        "key_point": "文本分類",
        "analysis": "文本分類可將非結構化歌詞映射到預定義風格類別。"
      },
      {
        "id": "3.1-B03",
        "question": "下列何者不屬於詞嵌入（Word Embedding）的特性？",
        "options": [
          "A. 詞向量之間可進行語義加減運算",
          "B. 語義相近的詞在向量空間距離較近",
          "C. 詞嵌入是稀疏高維向量表示",
          "D. 可捕捉詞彙間的語義關係"
        ],
        "answer": "C",
        "key_point": "詞嵌入特性",
        "analysis": "詞嵌入為稠密低維向量，稀疏高維是one-hot encoding的特性。"
      },
      {
        "id": "3.1-B04",
        "question": "工程師使用BERT進行情感分析，發現模型將「這電影真無聊，看了就想睡」正確分類為負面。請問BERT主要透過什麼機制理解上下文？",
        "options": [
          "A. 多頭自注意力機制捕捉詞與詞的關係",
          "B. 雙向LSTM",
          "C. 卷積神經網路",
          "D. n-gram統計"
        ],
        "answer": "A",
        "key_point": "自注意力",
        "analysis": "BERT的核心是Transformer的自注意力機制，能同時關注句子中所有詞的相互關係。"
      },
      {
        "id": "3.1-B05",
        "question": "銀行導入NLP模型自動審查貸款申請文件。下列何者最有助於提升模型對專有名詞的辨識？",
        "options": [
          "A. 加入領域詞典強化NER",
          "B. 增加模型層數",
          "C. 降低學習率",
          "D. 減少訓練資料"
        ],
        "answer": "A",
        "key_point": "NER詞典",
        "analysis": "領域詞典可顯著提升NER對專業術語的辨識準確率。"
      },
      {
        "id": "3.1-B06",
        "question": "關於RAG架構，下列敘述何者正確？",
        "options": [
          "A. RAG結合檢索與生成，先檢索相關文檔再讓LLM據以回答",
          "B. RAG只使用生成模型不需檢索",
          "C. RAG無法處理中文",
          "D. RAG需大量微調才能使用"
        ],
        "answer": "A",
        "key_point": "RAG架構",
        "analysis": "RAG（Retrieval-Augmented Generation）先從知識庫檢索相關片段，再供LLM生成回答。"
      },
      {
        "id": "3.1-B07",
        "question": "某公司使用n-gram語言模型進行文本生成。若要模型生成「今天天氣真好」時考慮前兩個字來預測下一個字，應使用幾元模型？",
        "options": [
          "A. 三元模型(trigram)，考量前兩個字",
          "B. 二元模型(bigram)",
          "C. 單元模型(unigram)",
          "D. 四元模型(4-gram)"
        ],
        "answer": "A",
        "key_point": "n-gram",
        "analysis": "Trigram以P(w_n|w_{n-2},w_{n-1})預測，考量前兩個詞。"
      },
      {
        "id": "3.1-B08",
        "question": "關於AutoML在NLP中的應用，下列敘述何者不正確？",
        "options": [
          "A. AutoML可自動搜尋最佳分詞策略",
          "B. AutoML可自動調整模型超參數",
          "C. AutoML自動選擇最優模型架構",
          "D. AutoML可完全取代資料標註"
        ],
        "answer": "D",
        "key_point": "AutoML限制",
        "analysis": "AutoML自動化模型選擇與調參，但無法取代資料標註與清洗等人工環節。"
      },
      {
        "id": "3.1-B09",
        "question": "團隊訓練文本分類模型，訓練準確率99%但測試僅78%。下列何者是最可能的成因？",
        "options": [
          "A. 過擬合(overfitting)，模型記憶訓練資料而非學習泛化特徵",
          "B. 學習率太高",
          "C. 批次大小太小",
          "D. 激活函數選擇錯誤"
        ],
        "answer": "A",
        "key_point": "過擬合",
        "analysis": "訓練與測試表現差距過大是典型過擬合，需正則化或增加訓練資料。"
      },
      {
        "id": "3.1-B10",
        "question": "考量下列Python程式碼：\nfrom sklearn.feature_extraction.text import TfidfVectorizer\ntexts = ['貓追老鼠', '狗追貓']\nvec = TfidfVectorizer()\nX = vec.fit_transform(texts)\nprint(X.shape)\n請問輸出結果為何？",
        "options": [
          "A. (2, 4)，因共有2篇文檔、4個不重複詞",
          "B. (2, 2)",
          "C. (4, 2)",
          "D. (4, 4)"
        ],
        "answer": "A",
        "key_point": "TfidfVectorizer",
        "analysis": "TfidfVectorizer對2篇文檔、4個不重複詞（貓、追、老鼠、狗）產生2×4矩陣。"
      }
    ],
    "進階": [
      {
        "id": "3.1-J01",
        "question": "RAG系統中，使用者提問「A公司去年營收與前年相比成長多少？」若要準確回答，最關鍵的設計是什麼？",
        "options": [
          "A. 檢索策略需能跨文檔聚合多個時間點的數據",
          "B. 增加LLM參數",
          "C. 提高temperature參數",
          "D. 降低chunk大小"
        ],
        "answer": "A",
        "key_point": "多文檔聚合",
        "analysis": "此問題需檢索去年與前年兩份數據並計算差異，RAG需支援多步檢索與聚合。"
      },
      {
        "id": "3.1-J02",
        "question": "以下哪項不是語言模型 perplexity 的缺點？",
        "options": [
          "A. 可完美反映生成文本的事實正確性",
          "B. 對詞彙選擇敏感但不反映語義正確性",
          "C. 受tokenizer影響大",
          "D. 與人類評分不完全正相關"
        ],
        "answer": "A",
        "key_point": "perplexity限制",
        "analysis": "Perplexity僅衡量模型對詞序的預測能力，無法評估事實正確性與語義合理性。"
      },
      {
        "id": "3.1-J03",
        "question": "下列哪種方法最能有效減少LLM輸出中的幻覺(hallucination)問題？",
        "options": [
          "A. 結合RAG提供外部知識並限制模型僅依據檢索內容回答",
          "B. 增加模型參數量",
          "C. 提高溫度參數",
          "D. 縮短max_tokens"
        ],
        "answer": "A",
        "key_point": "LLM幻覺",
        "analysis": "RAG透過外部知識庫提供事實依據，顯著降低LLM憑空編造內容的風險。"
      },
      {
        "id": "3.1-J04",
        "question": "關於詞形還原(Lemmatization)與詞幹提取(Stemming)，下列何者正確？",
        "options": [
          "A. 詞形還原考慮詞性與語境產出真實詞彙，詞幹提取則機械性移除詞綴",
          "B. 兩者完全相同",
          "C. 詞幹提取結果總是真實詞彙",
          "D. 詞形還原速度比詞幹提取快"
        ],
        "answer": "A",
        "key_point": "Lemmatization vs Stemming",
        "analysis": "Lemmatization依賴詞典與詞性分析產出真實詞彙；Stemming用規則截斷詞綴，結果可能非真實詞。"
      },
      {
        "id": "3.1-J05",
        "question": "金融NLP團隊使用BERT處理合約文本，發現超過512 tokens的合約被截斷造成資訊遺失。下列何者是最佳解決方案？",
        "options": [
          "A. 使用Longformer或分層注意力模型處理長文本",
          "B. 直接增加BERT的max_position_embeddings",
          "C. 將合約分段後分別處理再平均",
          "D. 改用Word2Vec"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Longformer使用稀疏注意力機制可處理數千tokens，適合長合約文本。"
      },
      {
        "id": "3.1-J06",
        "question": "下列Python程式碼執行後，predictions的資料型態為何？\nfrom sklearn.naive_bayes import MultinomialNB\nfrom sklearn.feature_extraction.text import CountVectorizer\nX = CountVectorizer().fit_transform(['好棒','好差'])\ny = [1, 0]\nmodel = MultinomialNB().fit(X, y)\npredictions = model.predict(CountVectorizer().fit_transform(['普通']))",
        "options": [
          "A. numpy.ndarray，元素型別為int64",
          "B. list",
          "C. tuple",
          "D. pandas.Series"
        ],
        "answer": "A",
        "key_point": "sklearn輸出型別",
        "analysis": "sklearn的predict()方法回傳numpy.ndarray，型別依標籤類型而定。"
      },
      {
        "id": "3.1-J07",
        "question": "關於差分隱私(Differential Privacy)在NLP中的應用，下列何者正確？",
        "options": [
          "A. 在訓練中加入雜訊防止模型記憶個資，實現差分隱私保護",
          "B. 差分隱私僅用於圖像資料",
          "C. 差分隱私會完全消除模型偏見",
          "D. 差分隱私不需要調整隱私預算ε"
        ],
        "answer": "A",
        "key_point": "差分隱私",
        "analysis": "差分隱私透過在梯度中加入校準雜訊，防止模型記住特定訓練樣本的細節資訊。"
      },
      {
        "id": "3.1-J08",
        "question": "在模型蒸餾中，學生模型學習教師模型的軟標籤(soft labels)。軟標籤的主要優點是什麼？",
        "options": [
          "A. 軟標籤包含類別間相似度資訊，比硬標籤提供更多學習信號",
          "B. 軟標籤訓練速度更快",
          "C. 軟標籤不需標註資料",
          "D. 軟標籤可完全消除誤差"
        ],
        "answer": "A",
        "key_point": "知識蒸餾",
        "analysis": "軟標籤（機率分布）包含「貓像狗的程度」等類別關係資訊，知識轉移更豐富。"
      },
      {
        "id": "3.1-J09",
        "question": "團隊微調LLM處理法律問答，發現模型在簡單問題表現好但複雜推理題表現差。下列哪項技術最能提升複雜推理能力？",
        "options": [
          "A. Chain-of-Thought提示法，引導模型逐步推理",
          "B. 增加訓練epoch",
          "C. 提高學習率",
          "D. 降低批次大小"
        ],
        "answer": "A",
        "key_point": "CoT推理",
        "analysis": "Chain-of-Thought提示分解複雜問題為多步推理，顯著提升LLM的邏輯推理能力。"
      },
      {
        "id": "3.1-J10",
        "question": "NLP團隊使用BERT進行情感分析，發現模型對含有反諷語氣的文字分類效果不佳。下列哪種方法最能提升模型對反諷的辨識能力？",
        "options": [
          "A. 在訓練資料中加入反諷語句的標註樣本，並使用上下文感知的注意力機制",
          "B. 提高模型的溫度參數",
          "C. 改用單向語言模型",
          "D. 降低學習率"
        ],
        "answer": "A",
        "key_point": "反諷辨識",
        "analysis": "反諷依賴上下文理解與言外之意，需要大量的反諷標註資料與能捕捉上下文關係的模型架構。"
      }
    ],
    "專業": [
      {
        "id": "3.1-Z01",
        "question": "大型語言模型的提示注入攻擊(prompt injection)中，攻擊者將惡意指令藏在使用者輸入中。下列哪種防禦策略最有效？",
        "options": [
          "A. 嚴格區分系統指令與使用者輸入，使用角色標記與輸入過濾",
          "B. 關閉模型輸出功能",
          "C. 提高temperature參數",
          "D. 縮短max_tokens"
        ],
        "answer": "A",
        "key_point": "提示注入防禦",
        "analysis": "角色隔離（區分system/user/assistant）與輸入驗證是防禦提示注入的關鍵手段。"
      },
      {
        "id": "3.1-Z02",
        "question": "在NLP模型的生命週期中，GDPR要求的「被遺忘權」代表什麼技術挑戰？",
        "options": [
          "A. 需從已訓練模型中移除特定使用者資料的影響，即機器遺忘(machine unlearning)",
          "B. 刪除資料庫中的該使用者紀錄即可",
          "C. 重新命名使用者ID",
          "D. 關閉該使用者的帳號"
        ],
        "answer": "A",
        "key_point": "機器遺忘",
        "analysis": "GDPR被遺忘權要求從模型層面移除特定資料影響，儲存訓練後模型無法簡單刪除資料實現。"
      },
      {
        "id": "3.1-Z03",
        "question": "一位AI專案經理要導入NLP客服系統，應優先評估下列哪項指標以確保專案成功？",
        "options": [
          "A. 是否有足夠的高品質標註語料與領域詞典",
          "B. 模型參數量是否夠大",
          "C. GPU數量是否充足",
          "D. 工程師的程式語言偏好"
        ],
        "answer": "A",
        "key_point": "NLP專案評估",
        "analysis": "NLP專案成敗關鍵在於資料品質與領域知識，而非僅是模型大小或硬體規格。"
      },
      {
        "id": "3.1-Z04",
        "question": "某詐騙偵測模型在100筆測試資料中，真正例(TP)=30、假正例(FP)=10、假負例(FN)=5、真負例(TN)=55。下列何者正確？",
        "options": [
          "A. 精確率(precision)=30/(30+10)=0.75，召回率(recall)=30/(30+5)≈0.857",
          "B. 精確率=30/40=0.857，召回率=30/35=0.75",
          "C. 精確率=30/35≈0.857，召回率=30/40=0.75",
          "D. 精確率=30/55≈0.545，召回率=30/55≈0.545"
        ],
        "answer": "A",
        "key_point": "精確率與召回率",
        "analysis": "精確率=TP/(TP+FP)=30/40=0.75；召回率=TP/(TP+FN)=30/35≈0.857。"
      },
      {
        "id": "3.1-Z05",
        "question": "金融機構欲導入NLP模型自動審閱貸款申請文件，但法遵要求所有決策必須可解釋。下列哪種模型組合最能兼顧準確率與可解釋性？",
        "options": [
          "A. 使用BERT進行特徵提取，搭配SHAP/LIME解釋輸出，並輔以可解釋的規則後處理",
          "B. 僅使用決策樹",
          "C. 僅使用線性迴歸",
          "D. 完全不使用AI"
        ],
        "answer": "A",
        "key_point": "NLP可解釋性",
        "analysis": "深度學習模型搭配可解釋性工具可在維持高效能的同時滿足法規的可解釋性要求。"
      },
      {
        "id": "3.1-Z06",
        "question": "在跨語言NLP專案中，團隊需要處理中、英、日三種語言的客戶評論分析。下列哪種策略最能有效節省開發成本？",
        "options": [
          "A. 使用多語言預訓練模型(mBERT/XLM-R)進行遷移學習，再以少量各語言資料微調",
          "B. 為每種語言獨立開發模型",
          "C. 全部翻譯成英文後再分析",
          "D. 只處理英文評論"
        ],
        "answer": "A",
        "key_point": "跨語言NLP",
        "analysis": "多語言預訓練模型已學到跨語言共享的語意表示，只需少量各語言資料微調即可達到良好效果。"
      },
      {
        "id": "3.1-Z07",
        "question": "下列何者是評估NLP生成式任務（如文本摘要、機器翻譯）最合適的自動化指標？",
        "options": [
          "A. BLEU/Rouge分數，衡量生成結果與參考文本的n-gram重疊程度",
          "B. 準確率(accuracy)",
          "C. 精確率與召回率",
          "D. F1-score"
        ],
        "answer": "A",
        "key_point": "NLP生成指標",
        "analysis": "BLEU與Rouge分別衡量翻譯與摘要的生成品質，透過n-gram比對評估與參考文本的相似度。"
      },
      {
        "id": "3.1-Z08",
        "question": "NLP模型在醫療領域部署後，發現對特定族群的專有名詞辨識率顯著較低。此問題應如何系統性解決？",
        "options": [
          "A. 收集該族群相關的醫療文本進行領域適應微調，並在評估時加入分群報告",
          "B. 增加模型參數量",
          "C. 提高全域的NER閾值",
          "D. 忽略此差異"
        ],
        "answer": "A",
        "key_point": "領域適應",
        "analysis": "領域適應微調讓模型學習特定族群的語言特徵，分群評估可持續監控各群體的表現差異。"
      },
      {
        "id": "3.1-Z09",
        "question": "下列Python程式碼中，若texts包含1000篇新聞文章，執行後X的維度為何？\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nvec = TfidfVectorizer(max_features=5000, stop_words='english')\nX = vec.fit_transform(texts)",
        "options": [
          "A. (1000, 5000)，每篇文章表示為5000維的TF-IDF特徵向量",
          "B. (5000, 1000)",
          "C. (1000, len(所有不重複詞))",
          "D. (1000, 1)"
        ],
        "answer": "A",
        "key_point": "TF-IDF維度",
        "analysis": "TfidfVectorizer的max_features=5000限制最大特徵數，輸出為(文檔數, 特徵數)的稀疏矩陣。"
      },
      {
        "id": "3.1-Z10",
        "question": "電商平台欲建立NLP驅動的智慧客服系統，需同時處理即時對話與非結構化退款申請。在系統設計上，下列哪個架構最為穩健？",
        "options": [
          "A. 意圖分類模型分流即時對話，NER模型萃取退款關鍵資訊，搭配RAG查詢知識庫",
          "B. 單一LLM處理所有請求",
          "C. 純規則比對系統",
          "D. 僅使用關鍵字搜尋"
        ],
        "answer": "A",
        "key_point": "NLP系統架構",
        "analysis": "組合多個NLP元件各司其職（意圖分類、NER、RAG），比單一模型更穩健且易於維護與除錯。"
      }
    ]
  },
  "3.2": {
    "基礎": [
      {
        "id": "3.2-B01",
        "question": "下列何者是卷積神經網路(CNN)中卷積層的主要功能？",
        "options": [
          "A. 透過濾波器提取輸入影像的局部特徵",
          "B. 對影像進行降維",
          "C. 將影像轉為向量",
          "D. 計算影像的機率分布"
        ],
        "answer": "A",
        "key_point": "卷積層功能",
        "analysis": "卷積層透過可學習的濾波器(kernel)掃描影像，提取邊緣、紋理等局部特徵。"
      },
      {
        "id": "3.2-B02",
        "question": "工廠使用CNN檢測PCB電路板瑕疵，但不同批次的電路板顏色有差異導致誤判率高。下列何種技術最能解決此問題？",
        "options": [
          "A. 資料增強：加入顏色變換與光照變化的訓練樣本",
          "B. 增加CNN層數",
          "C. 降低學習率",
          "D. 減少訓練資料"
        ],
        "answer": "A",
        "key_point": "資料增強",
        "analysis": "資料增強模擬真實場景變化（光照、顏色、角度），提高模型對分布偏移的穩健性。"
      },
      {
        "id": "3.2-B03",
        "question": "下列何者不屬於常見的影像資料增強方法？",
        "options": [
          "A. PCA白化",
          "B. 隨機水平翻轉",
          "C. 隨機旋轉",
          "D. 隨機裁切"
        ],
        "answer": "A",
        "key_point": "資料增強方法",
        "analysis": "隨機翻轉、旋轉、裁切是常見的資料增強；PCA白化是預處理步驟非增強方法。"
      },
      {
        "id": "3.2-B04",
        "question": "自駕車團隊使用YOLO進行即時行人偵測。YOLO的核心技術特點為何？",
        "options": [
          "A. 將偵測視為迴歸問題，單一網路同時預測邊界框與類別",
          "B. 使用滑動視窗逐一掃描",
          "C. 先產生候選區域再分類",
          "D. 使用RNN進行時序分析"
        ],
        "answer": "A",
        "key_point": "YOLO核心",
        "analysis": "YOLO將物件偵視為端到端回歸問題，單次前向傳播即可輸出所有物體位置與類別。"
      },
      {
        "id": "3.2-B05",
        "question": "關於語意分割與實例分割，下列何者正確？",
        "options": [
          "A. 語意分割給每個像素分配類別標籤，實例分割還需區分同一類別的不同個體",
          "B. 語意分割區分個體，實例分割不區分",
          "C. 兩者完全相同",
          "D. 兩者皆不需要像素級標註"
        ],
        "answer": "A",
        "key_point": "語意vs實例分割",
        "analysis": "語意分割分類像素（如所有「車」為同一類）；實例分割還區分「車A」與「車B」。注意此題不可與analysis同字段，我會在答案鍵中保留analysis。"
      },
      {
        "id": "3.2-B06",
        "question": "醫療AI團隊使用U-Net進行腫瘤分割。U-Net的關鍵架構特點是什麼？",
        "options": [
          "A. 編碼-解碼對稱結構搭配跳躍連接(skip connection)保留空間細節",
          "B. 僅有編碼器",
          "C. 僅有卷積層",
          "D. 全連接層輸出"
        ],
        "answer": "A",
        "key_point": "U-Net架構",
        "analysis": "U-Net的對稱U形結構結合跳躍連接，將下採樣的語意資訊與上採樣的空間細節融合。"
      },
      {
        "id": "3.2-B07",
        "question": "下列何者是遷移學習(Transfer Learning)的核心概念？",
        "options": [
          "A. 將在大規模資料集預訓練的模型權重作為初始值，微調於目標任務",
          "B. 從頭訓練新模型",
          "C. 只使用目標任務資料",
          "D. 不需要任何預訓練"
        ],
        "answer": "A",
        "key_point": "遷移學習",
        "analysis": "遷移學習利用預訓練模型已學到的通用特徵（如邊緣、形狀），只需少量資料微調即可適應新任務。"
      },
      {
        "id": "3.2-B08",
        "question": "關於模型壓縮中的參數剪枝(Pruning)，下列敘述何者正確？",
        "options": [
          "A. 移除模型中權重接近零的連接或神經元，減少計算量",
          "B. 降低訓練資料維度",
          "C. 減少訓練epoch",
          "D. 降低學習率"
        ],
        "answer": "A",
        "key_point": "參數剪枝",
        "analysis": "剪枝移除貢獻度低（權重接近零）的參數，可在不顯著損失精度下減少模型大小與計算量。"
      },
      {
        "id": "3.2-B09",
        "question": "模型分類CIFAR-10資料集時，測試準確率80%。若將所有圖片隨機翻轉後，準確率降為70%。最可能的原因是？",
        "options": [
          "A. 資料增強造成訓練與測試分布不一致，需在訓練時也加入翻轉增強",
          "B. 翻轉破壞圖像語意",
          "C. 翻轉後解析度降低",
          "D. CIFAR-10不支援翻轉"
        ],
        "answer": "A",
        "key_point": "資料增強一致性",
        "analysis": "測試時使用與訓練不同的資料處理方式會造成分布不一致，訓練與測試的預處理應一致。"
      },
      {
        "id": "3.2-B10",
        "question": "下列Python程式碼執行後，model的輸出形狀為何？\nimport torch\nimport torch.nn as nn\nmodel = nn.Sequential(\n    nn.Conv2d(3, 16, kernel_size=3, padding=1),\n    nn.ReLU(),\n    nn.AdaptiveAvgPool2d((1,1))\n)\nx = torch.randn(1, 3, 32, 32)\nprint(model(x).shape)",
        "options": [
          "A. torch.Size([1, 16, 1, 1])，經平均池化後空間維度變為1×1",
          "B. torch.Size([1, 3, 1, 1])",
          "C. torch.Size([1, 16, 32, 32])",
          "D. torch.Size([1, 3, 32, 32])"
        ],
        "answer": "A",
        "key_point": "CNN輸出形狀",
        "analysis": "卷積將通道數從3變16，padding=1維持32×32，AdaptiveAvgPool2d((1,1))將空間維度降為1×1。"
      }
    ],
    "進階": [
      {
        "id": "3.2-J01",
        "question": "半導體檢測使用CNN偵測晶圓缺陷，但缺陷樣本極少（良率99.5%）。下列哪種策略組合最能提升罕見缺陷的偵測率？",
        "options": [
          "A. 合成缺陷資料+異常檢測雙軌策略",
          "B. 僅增加CNN層數",
          "C. 降低偵測門檻",
          "D. 改用隨機初始化"
        ],
        "answer": "A",
        "key_point": "罕見缺陷策略",
        "analysis": "合成缺陷擴增稀少樣本，異常檢測捕捉未知缺陷模式，兩者互補。"
      },
      {
        "id": "3.2-J02",
        "question": "關於模型量化的概念，下列何者正確？",
        "options": [
          "A. 將模型權重從FP32降為INT8，可減少75%儲存空間並加速推論",
          "B. 量化一定降低模型精度",
          "C. 量化只能用在CNN",
          "D. 量化與剪枝是同一種技術"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "INT8量化將32位浮點數轉8位整數，減少4倍儲存；搭配校準可最小化精度損失。"
      },
      {
        "id": "3.2-J03",
        "question": "自駕車的行人偵測模型在夜間與雨天表現驟降。除了收集更多邊緣場景資料外，下列何者是最有效的技術方案？",
        "options": [
          "A. 域適應(domain adaptation)與域隨機化增強",
          "B. 增加模型參數",
          "C. 提高輸入解析度",
          "D. 降低模型深度"
        ],
        "answer": "A",
        "key_point": "域適應",
        "analysis": "域適應學習域無關特徵，域隨機化在訓練中模擬各種環境條件，提升對邊緣場景的泛化力。"
      },
      {
        "id": "3.2-J04",
        "question": "物體偵測評估計算中，IoU(Intersection over Union)的公式為何？",
        "options": [
          "A. 預測框與真實框交集面積 ÷ 聯集面積",
          "B. 預測框面積 ÷ 真實框面積",
          "C. 交集面積 ÷ 預測框面積",
          "D. 聯集面積 ÷ 交集面積"
        ],
        "answer": "A",
        "key_point": "IoU計算",
        "analysis": "IoU=交集/聯集，衡量預測框與真實框的重疊程度，值越接近1表示預測越準確。"
      },
      {
        "id": "3.2-J05",
        "question": "Edge AI團隊需在嵌入式設備部署即時物件偵測，但YOLOv7僅達12fps（需求30fps）。下列哪種壓縮策略組合最適合？",
        "options": [
          "A. 剪枝+INT8量化+知識蒸餾",
          "B. 僅降低輸入解析度",
          "C. 改用R-CNN",
          "D. 增加硬體預算"
        ],
        "answer": "A",
        "key_point": "邊緣AI壓縮",
        "analysis": "剪枝移除冗餘參數，量化降低計算精度，蒸餾保留大模型知識，三者加乘效果最佳。"
      },
      {
        "id": "3.2-J06",
        "question": "團隊訓練GAN生成高解析度人臉，發現生成器loss收斂但圖像缺乏細節。下列診斷何者正確？",
        "options": [
          "A. 可能是mode collapse或判別器太強，需調整生成器與判別器的訓練平衡",
          "B. 生成器層數太少",
          "C. 訓練資料不足",
          "D. 學習率過高"
        ],
        "answer": "A",
        "key_point": "mode collapse",
        "analysis": "Mode collapse是生成器只學會少數模式；判別器過強也會壓抑生成器，需小心平衡訓練。"
      },
      {
        "id": "3.2-J07",
        "question": "醫療影像團隊使用遷移學習訓練肺炎分類模型。源域為ImageNet自然影像，目標域為X光片。下列何者是遷移學習在此場景的主要挑戰？",
        "options": [
          "A. 自然影像與X光片的特徵分布差異大，底層濾波器需較大幅度微調",
          "B. ImageNet參數無法微調",
          "C. X光片沒有顏色通道",
          "D. 遷移學習不支援醫療影像"
        ],
        "answer": "A",
        "key_point": "域差異",
        "analysis": "自然影像與醫學影像的低階特徵（邊緣、紋理）差異顯著，需較大微調力度。"
      },
      {
        "id": "3.2-J08",
        "question": "關於對抗性攻擊在CV中的應用，下列敘述何者正確？",
        "options": [
          "A. 在輸入影像加入人眼不可見微小雜訊可使模型誤判，是對抗性攻擊",
          "B. 對抗攻擊僅能欺騙分類模型",
          "C. 對抗攻擊無法在黑箱場景實行",
          "D. 對抗攻擊對所有模型效果相同"
        ],
        "answer": "A",
        "key_point": "對抗性攻擊",
        "analysis": "對抗性攻擊透過精心設計的微小擾動使模型誤判，且可在黑箱設定下轉移攻擊。"
      },
      {
        "id": "3.2-J09",
        "question": "團隊訓練雙目視覺深度估計模型，發現模型對紋理豐富的區域深度預測較準確，但對白牆等紋理缺乏區域預測誤差大。下列何者最能解釋此現象？",
        "options": [
          "A. 立體匹配依賴影像紋理特徵，無紋理區域無法可靠對應",
          "B. 模型參數不足",
          "C. 訓練影像解析度太低",
          "D. 學習率設定錯誤"
        ],
        "answer": "A",
        "key_point": "立體匹配限制",
        "analysis": "雙目視覺透過比對左右影像的紋理特徵計算視差，無紋理區域（白牆）無法可靠匹配。"
      },
      {
        "id": "3.2-J10",
        "question": "CV團隊開發一個即時影片監控系統，需在邊緣裝置上同時執行物件偵測與追蹤。在算力受限的情況下，下列哪種策略組合最能兼顧準確率與效能？",
        "options": [
          "A. 輕量級骨幹網路(MobileNet/EfficientNet-Lite)搭配DeepSORT追蹤演算法",
          "B. 使用YOLOv7完整版",
          "C. 降低幀率至1fps",
          "D. 僅使用背景減除"
        ],
        "answer": "A",
        "key_point": "邊緣AI策略",
        "analysis": "輕量級骨幹網路減少計算量，DeepSORT提供即時追蹤，兩者組合可在邊緣裝置上達到即時效能。"
      }
    ],
    "專業": [
      {
        "id": "3.2-Z01",
        "question": "一家電商欲建立以圖搜圖系統。使用者上傳穿搭照，系統找出相似商品。下列哪個技術方案最能兼顧準確率與搜尋效率？",
        "options": [
          "A. 使用CNN提取特徵向量，建立向量索引進行近似最近鄰搜尋(ANN)",
          "B. 逐一比對所有商品圖片",
          "C. 使用關鍵字搜尋",
          "D. 使用決策樹分類"
        ],
        "answer": "A",
        "key_point": "以圖搜圖",
        "analysis": "CNN提取語意特徵向量，ANN索引（如HNSW）可在大規模資料集中快速搜尋。"
      },
      {
        "id": "3.2-Z02",
        "question": "公司欲導入AutoML建立視覺檢測模型，下列有關AutoML的敘述何者不正確？",
        "options": [
          "A. AutoML可自動完成資料標註",
          "B. AutoML自動搜尋最佳模型架構(NAS)",
          "C. AutoML自動調整超參數",
          "D. AutoML可自動選擇資料增強策略"
        ],
        "answer": "A",
        "key_point": "AutoML限制",
        "analysis": "AutoML自動化模型選擇、調參與增強策略搜尋，但仍需人工標註與資料清洗。"
      },
      {
        "id": "3.2-Z03",
        "question": "在CV模型的生命週期管理中，下列何者屬於MLOps的關鍵實踐？",
        "options": [
          "A. 模型版本控制、實驗追蹤與自動化部署管線",
          "B. 僅使用最新模型",
          "C. 手動記錄實驗結果",
          "D. 一次性訓練後永不更新"
        ],
        "answer": "A",
        "key_point": "MLOps實踐",
        "analysis": "MLOps核心包括實驗追蹤、模型註冊、自動化CI/CD與監控告警。"
      },
      {
        "id": "3.2-Z04",
        "question": "製造業導入AI視覺檢測時，需要區分產線上的細微刮痕與正常紋理。下列哪種技術組合最能提升缺陷檢測的精確度？",
        "options": [
          "A. 使用異常檢測模型搭配對比學習，讓模型學習正常樣本分布以識別異常",
          "B. 使用一般分類模型",
          "C. 僅使用邊緣檢測",
          "D. 使用隨機森林"
        ],
        "answer": "A",
        "key_point": "異常檢測",
        "analysis": "對比學習使模型能區分正常與異常樣本的細微差異，異常檢測更擅長辨識未知類型的缺陷。"
      },
      {
        "id": "3.2-Z05",
        "question": "醫療影像AI模型在A醫院準確率95%，但在B醫院降至80%。下列哪種技術最能有效解決此跨醫院泛化問題？",
        "options": [
          "A. 使用域適應(Domain Adaptation)技術，將B醫院的影像特徵對齊到A醫院",
          "B. 放棄B醫院部署",
          "C. 降低B醫院的診斷門檻",
          "D. 合併兩醫院資料從頭訓練"
        ],
        "answer": "A",
        "key_point": "域適應CV",
        "analysis": "域適應透過對抗訓練或分布對齊，將目標域的影像特徵映射到源域特徵空間，提升模型在異質來源資料的泛化能力。"
      },
      {
        "id": "3.2-Z06",
        "question": "下列何者是在邊緣裝置上部署即時視覺AI模型時，最有效的加速策略？",
        "options": [
          "A. 使用NVIDIA TensorRT進行推論最佳化，結合FP16/INT8量化",
          "B. 使用CPU推論",
          "C. 提高輸入影像解析度",
          "D. 增加模型層數"
        ],
        "answer": "A",
        "key_point": "推論加速",
        "analysis": "TensorRT針對GPU進行算子融合與記憶體最佳化，FP16/INT8量化減少計算精度以換取推論速度，是目前邊緣部署的主流方案。"
      },
      {
        "id": "3.2-Z07",
        "question": "在半導體晶圓缺陷分類任務中，各類缺陷樣本數量嚴重不均（良品90%、刮傷5%、汙染3%、其他2%）。下列哪種策略組合最能有效處理此問題？",
        "options": [
          "A. 加權損失函數+Focal Loss+類別平衡取樣",
          "B. 刪除多數類樣本",
          "C. 全部視為良品",
          "D. 僅使用原始分布訓練"
        ],
        "answer": "A",
        "key_point": "類別不平衡CV",
        "analysis": "Focal Loss降低易分類樣本的權重，加權損失函數與平衡取樣共同緩解類別極度不均的問題。"
      },
      {
        "id": "3.2-Z08",
        "question": "工廠導入AI視覺檢測後，誤報率過高導致作業員信任度下降。從系統設計角度，下列哪種改善方向最為有效？",
        "options": [
          "A. 引入人機協作(HITL)機制，對低信心度預測交由人工確認",
          "B. 降低偵測靈敏度",
          "C. 更換更高解析度攝影機",
          "D. 增加訓練資料量"
        ],
        "answer": "A",
        "key_point": "人機協作",
        "analysis": "人機協作讓AI處理高信心度的正常案例，邊界案例由人工判斷，可兼顧自動化效率與低誤報率。"
      },
      {
        "id": "3.2-Z09",
        "question": "光學字元辨識(OCR)系統處理發票時，對手寫數字辨識率僅70%。下列哪種改進方案最有效？",
        "options": [
          "A. 收集手寫數字資料進行領域微調，並加入字元序列上下文模型(CRNN+CTC)",
          "B. 使用更穩定的掃描設備",
          "C. 要求客戶打字",
          "D. 提高二值化閾值"
        ],
        "answer": "A",
        "key_point": "OCR改進",
        "analysis": "領域微調讓預訓練模型適應手寫風格，CRNN+CTC結合卷積特徵提取與序列建模，是手寫辨識的主流架構。"
      },
      {
        "id": "3.2-Z10",
        "question": "電信公司使用無人機拍攝鐵塔影像進行檢測，但不同季節的光照與背景差異導致模型誤判。下列何者是最佳解決方案？",
        "options": [
          "A. 在訓練中加入域隨機化增強與對比學習，學習光照不變的特徵表示",
          "B. 只在晴天拍攝",
          "C. 使用更高解析度相機",
          "D. 人工重新標註所有季節資料"
        ],
        "answer": "A",
        "key_point": "域隨機化",
        "analysis": "域隨機化在訓練時模擬各種光照、背景與天氣條件，對比學習提取不受光照影響的穩健特徵。"
      }
    ]
  },
  "3.3": {
    "基礎": [
      {
        "id": "3.3-B01",
        "question": "下列何者是大型語言模型(LLM)產生幻覺(hallucination)的主要原因？",
        "options": [
          "A. 模型根據機率分布生成內容，可能編造不存在的事實",
          "B. 模型參數不足",
          "C. 訓練資料太多",
          "D. 提示詞太長"
        ],
        "answer": "A",
        "key_point": "LLM幻覺",
        "analysis": "LLM本質上是根據前文預測下個詞的機率模型，無內建事實驗證機制，可能產生看似合理但錯誤的內容。"
      },
      {
        "id": "3.3-B02",
        "question": "使用擴散模型生成產品設計圖時，發現生成結果中的椅子只有三條腿。此問題最可能的原因是？",
        "options": [
          "A. 模型對物體結構的語意理解不足，僅學習表面紋理分布",
          "B. 解析度太低",
          "C. 訓練步數不足",
          "D. 提示詞太短"
        ],
        "answer": "A",
        "key_point": "生成模型結構理解",
        "analysis": "擴散模型在缺乏對物體結構的明確約束時，可能生成視覺合理但結構錯誤的內容。"
      },
      {
        "id": "3.3-B03",
        "question": "下列何者不屬於生成式AI的潛在風險？",
        "options": [
          "A. 能完全消除人類就業市場需求",
          "B. 生成虛假資訊與深度偽造(deepfake)",
          "C. 侵犯訓練資料的智慧財產權",
          "D. 模型偏見造成歧視性輸出"
        ],
        "answer": "A",
        "key_point": "生成式AI風險",
        "analysis": "生成式AI確實有假資訊、版權、偏見等風險，但完全消除就業需求是誇大說法。"
      },
      {
        "id": "3.3-B04",
        "question": "公司使用RAG架構建立內部知識庫問答系統。當問題為「Q1營收與Q2毛利率分別多少？」時，系統常只回答部分問題。最可能的原因是？",
        "options": [
          "A. 基本RAG缺乏多跳(multi-hop)推理，無法聚合多個文檔資訊",
          "B. 嵌入模型維度不足",
          "C. 向量資料庫容量太小",
          "D. 不支援中文"
        ],
        "answer": "A",
        "key_point": "多跳推理",
        "analysis": "多跳問題需檢索並聚合多個文檔的資訊，可透過問題分解或多步檢索策略改善。"
      },
      {
        "id": "3.3-B05",
        "question": "關於LoRA微調技術，下列敘述何者正確？",
        "options": [
          "A. LoRA透過低秩矩陣分解減少可訓練參數量，大幅降低微調成本",
          "B. LoRA需要修改模型全部參數",
          "C. LoRA不支援Transformer架構",
          "D. LoRA只能用在文字生成模型"
        ],
        "answer": "A",
        "key_point": "LoRA原理",
        "analysis": "LoRA在原權重旁加入低秩矩陣，僅訓練新增的小量參數（約0.1-1%），顯著降低微調成本。"
      },
      {
        "id": "3.3-B06",
        "question": "行銷團隊使用生成式AI製作社群貼文，發現內容常出現過度誇大用語（如「史上最強」）。從AI治理角度，應如何處理？",
        "options": [
          "A. 在system prompt加入法規限制，並建立輸出內容過濾機制",
          "B. 停止使用生成式AI",
          "C. 每次手動修改",
          "D. 忽略法規問題"
        ],
        "answer": "A",
        "key_point": "AI合規審查",
        "analysis": "透過system prompt設定內容邊界結合自動過濾，可有效確保生成內容符合法規。"
      },
      {
        "id": "3.3-B07",
        "question": "在LLM應用中，temperature參數的作用為何？",
        "options": [
          "A. 控制輸出隨機性：temperature越低輸出越確定性，越高越多樣性",
          "B. 控制模型溫度",
          "C. 調整學習率",
          "D. 控制批次大小"
        ],
        "answer": "A",
        "key_point": "temperature",
        "analysis": "Temperature控制softmax輸出的機率分布形狀，低溫（趨近0）輸出確定性高，高溫輸出更多樣。"
      },
      {
        "id": "3.3-B08",
        "question": "關於生成式AI的模型偏見(bias)，下列何者正確？",
        "options": [
          "A. 模型偏見源自訓練資料中的社會偏見，可能造成歧視性輸出",
          "B. 模型偏見只出現在文字模型",
          "C. 增加模型參數可消除偏見",
          "D. 偏見問題無法檢測"
        ],
        "answer": "A",
        "key_point": "AI偏見來源",
        "analysis": "AI偏見主要來自訓練資料中既有的社會偏見。資料中若存在刻板印象，模型會學習並放大這些偏見。"
      },
      {
        "id": "3.3-B09",
        "question": "團隊比較GPT-4與蒸餾版本在客服系統中的表現。蒸餾版對簡單問答表現接近，但複雜推理顯著下降。這說明什麼？",
        "options": [
          "A. 知識蒸餾在簡單任務保留較好，但複雜推理能力損失較大",
          "B. 蒸餾過程有bug",
          "C. API版本不同",
          "D. 提示詞設計不當"
        ],
        "answer": "A",
        "key_point": "蒸餾能力損失",
        "analysis": "蒸餾壓縮模型大小，簡單模式（語法、常見問答）較易保留，但複雜推理能力往往損失較多。"
      },
      {
        "id": "3.3-B10",
        "question": "下列Python程式碼中，output的結果最可能接近哪個值？\nimport random\nrandom.seed(42)\nprobs = [0.1, 0.2, 0.7]\n# 此處模擬LLM的機率採樣\ncounts = [0, 0, 0]\nfor _ in range(1000):\n    r = random.random()\n    if r < 0.1: counts[0] += 1\n    elif r < 0.3: counts[1] += 1\n    else: counts[2] += 1\nprint(counts[2])",
        "options": [
          "A. 約700次，因第三個選項機率最高(0.7)",
          "B. 約100次",
          "C. 約200次",
          "D. 約1000次"
        ],
        "answer": "A",
        "key_point": "機率採樣",
        "analysis": "隨機採樣中，機率0.7的選項在1000次實驗中預期出現約700次。"
      }
    ],
    "進階": [
      {
        "id": "3.3-J01",
        "question": "下列何者不是對抗性提示攻擊(prompt injection)的有效防禦策略？",
        "options": [
          "A. 提高模型temperature參數至1.5",
          "B. 使用角色標記區分指令與輸入",
          "C. 設定輸出格式限制",
          "D. 加入輸入內容過濾器"
        ],
        "answer": "A",
        "key_point": "提示注入防禦",
        "analysis": "提高temperature不影響提示注入防禦，使用分隔符、角色標記與輸入過濾才是有效手段。"
      },
      {
        "id": "3.3-J02",
        "question": "關於模型的災難性遺忘(catastrophic forgetting)，下列敘述何者正確？",
        "options": [
          "A. 微調LLM於特定領域後，模型在通用任務表現可能顯著下降",
          "B. 增加學習率可防止遺忘",
          "C. 災難性遺忘只發生在LLM",
          "D. 更多訓練資料可完全避免遺忘"
        ],
        "answer": "A",
        "key_point": "災難性遺忘",
        "analysis": "微調使模型過度適應新任務分布，遺失原始預訓練的通用知識，可透過混合訓練或正則化緩解。"
      },
      {
        "id": "3.3-J03",
        "question": "RAG系統檢索到的文檔品質直接影響回答品質。若檢索到正確文檔但LLM仍回答錯誤，問題最可能出在哪？",
        "options": [
          "A. LLM可能忽略檢索結果，需優化提示設計或增加檢索結果權重",
          "B. 檢索器速度太慢",
          "C. 嵌入模型維度太低",
          "D. 資料庫索引錯誤"
        ],
        "answer": "A",
        "key_point": "RAG優化",
        "analysis": "LLM不一定遵循檢索結果，可透過提示工程要求模型「僅依據以下文檔回答」或減少chunk size。"
      },
      {
        "id": "3.3-J04",
        "question": "醫療領域使用LLM輔助診斷時，最重要的安全防護機制為何？",
        "options": [
          "A. RAG檢索真實醫學文獻驗證+輸出限制+人類審閱",
          "B. 增加模型參數",
          "C. 關閉模型推理功能",
          "D. 僅限於簡單問答"
        ],
        "answer": "A",
        "key_point": "醫療AI安全",
        "analysis": "醫療LLM需多重防護：外部知識驗證、輸出範圍限制、最終由專業醫師審閱。"
      },
      {
        "id": "3.3-J05",
        "question": "關於供應鏈攻擊(Supply Chain Attack)對AI系統的威脅，下列何者正確？",
        "options": [
          "A. 攻擊者可能在預訓練模型中植入後門，透過觸發字詞激活",
          "B. 供應鏈攻擊僅影響硬體",
          "C. 開源模型不受供應鏈攻擊影響",
          "D. 供應鏈攻擊無法防範"
        ],
        "answer": "A",
        "key_point": "供應鏈攻擊",
        "analysis": "攻擊者在訓練資料或預訓練模型中植入惡意後門，使用者在不知情下使用受污染模型。"
      },
      {
        "id": "3.3-J06",
        "question": "LLM Agent在執行多步驟任務時，常在第三步驟後偏離原始目標。此問題的學術名稱為何？",
        "options": [
          "A. 長期依賴喪失(long-term dependency loss)或目標漂移",
          "B. 短期記憶不足",
          "C. API呼叫錯誤",
          "D. 上下文長度不足"
        ],
        "answer": "A",
        "key_point": "Agent目標漂移",
        "analysis": "LLM Agent在長鏈推理中可能遺忘初始目標，可透過定期重新提示(re-prompting)或外部記憶機制改善。"
      },
      {
        "id": "3.3-J07",
        "question": "下列何者是大型語言模型的tokenization(分詞)過程中，處理中文時的特殊挑戰？",
        "options": [
          "A. 中文詞無明確邊界，單字元可能意義不同，需上下文決定分詞方式",
          "B. 中文無法用tokenizer處理",
          "C. 中文詞彙量過小",
          "D. 中文字元編碼不支援"
        ],
        "answer": "A",
        "key_point": "中文分詞",
        "analysis": "中文缺乏詞邊界標記，同一個字在不同詞中意義不同（如「行」在「銀行」vs「行走」），分詞挑戰大。"
      },
      {
        "id": "3.3-J08",
        "question": "關於模型版本管理與實驗追蹤，下列哪項工具組合最為完整？",
        "options": [
          "A. MLflow追蹤實驗與模型、DVC管理資料版本、Git管理程式碼",
          "B. 僅用Git管理所有內容",
          "C. 手動記錄",
          "D. 使用Excel追蹤"
        ],
        "answer": "A",
        "key_point": "實驗追蹤工具",
        "analysis": "區分管理：Git管程式碼、DVC管資料與模型檔案、MLflow管實驗參數與指標。"
      },
      {
        "id": "3.3-J09",
        "question": "一家法律事務所欲建立LLM合約審查系統，需確保99.9%的事實正確性。下列哪種架構最適合？",
        "options": [
          "A. RAG架構搭配檢索結果引用標示與人工覆核機制",
          "B. 直接使用LLM生成",
          "C. 純規則系統",
          "D. 關鍵字搜尋"
        ],
        "answer": "A",
        "key_point": "高可靠LLM",
        "analysis": "RAG提供事實參考，引用標示可追溯來源，人工覆核確保最終輸出的正確性。"
      },
      {
        "id": "3.3-J10",
        "question": "企業欲導入LLM驅動的內部知識管理系統，但擔心模型輸出含有公司機密資訊。下列哪種策略最能有效防止機密資料外洩？",
        "options": [
          "A. 在地端部署開源LLM，搭配輸出過濾器與存取權限控管",
          "B. 使用公共API並要求簽署NDA",
          "C. 降低模型temperature參數",
          "D. 限制使用者提問長度"
        ],
        "answer": "A",
        "key_point": "LLM資料安全",
        "analysis": "在地端部署確保資料不外送至第三方伺服器，輸出過濾器即時攔截敏感內容，權限控管限制存取範圍。"
      }
    ],
    "專業": [
      {
        "id": "3.3-Z01",
        "question": "一家金融公司欲導入生成式AI客戶服務。下列何者是導入前最應優先處理的風險評估項目？",
        "options": [
          "A. 資料隱私合規（客戶資料是否外洩至LLM API）、幻覺風險與監管要求",
          "B. 模型參數大小",
          "C. GPU採購成本",
          "D. 開發時程"
        ],
        "answer": "A",
        "key_point": "生成式AI風險評估",
        "analysis": "生成式AI導入首要評估資料隱私、輸出可靠性與金融監管合規，技術面次之。"
      },
      {
        "id": "3.3-Z02",
        "question": "關於生成式AI的RLHF(人類回饋強化學習)訓練流程，下列敘述何者正確？",
        "options": [
          "A. RLHF先訓練獎勵模型模擬人類偏好，再用強化學習微調LLM",
          "B. RLHF不需要人類標註",
          "C. RLHF直接修改模型架構",
          "D. RLHF只能在GPT模型上使用"
        ],
        "answer": "A",
        "key_point": "RLHF流程",
        "analysis": "RLHF三階段：SFT微調→訓練獎勵模型→PPO強化學習，使LLM輸出符合人類偏好。"
      },
      {
        "id": "3.3-Z03",
        "question": "某分類模型測試結果：真正例(TP)=45，假正例(FP)=5，假負例(FN)=10，真負例(TN)=40。試計算F1-score。",
        "options": [
          "A. F1=2×0.9×0.818/(0.9+0.818)≈0.857",
          "B. F1=2×0.8×0.9/(0.8+0.9)≈0.847",
          "C. F1=0.9×0.8/(0.9+0.8)≈0.424",
          "D. F1=(0.9+0.8)/2=0.85"
        ],
        "answer": "A",
        "key_point": "F1計算",
        "analysis": "精確率=45/50=0.9，召回率=45/55≈0.818，F1=2×0.9×0.818/(0.9+0.818)≈0.857。"
      },
      {
        "id": "3.3-Z04",
        "question": "公司欲開發一個能根據產品規格自動生成行銷文案的生成式AI系統。下列哪種技術架構最能產生高品質且一致的文案？",
        "options": [
          "A. 使用Few-shot prompting引導LLM，並以RAG檢索歷史成功文案作為參考",
          "B. 直接使用未經微調的通用LLM",
          "C. 純規則模板",
          "D. 傳統n-gram語言模型"
        ],
        "answer": "A",
        "key_point": "生成式AI架構",
        "analysis": "Few-shot prompting提供任務範例，RAG檢索相關歷史文案提供風格與資訊參考，可大幅提升生成品質與一致性。"
      },
      {
        "id": "3.3-Z05",
        "question": "生成式AI模型在客服場景中，對相同問題每次回答不同，造成使用者困惑。下列哪種方法最能提升回答的一致性？",
        "options": [
          "A. 降低temperature參數至接近0，並設定固定的system prompt與輸出格式",
          "B. 提高temperature參數",
          "C. 每次使用不同的prompt",
          "D. 關閉模型隨機種子"
        ],
        "answer": "A",
        "key_point": "生成一致性",
        "analysis": "低temperature使模型傾向選擇機率最高的詞，固定system prompt與輸出格式消除變異來源，確保回應穩定一致。"
      },
      {
        "id": "3.3-Z06",
        "question": "企業欲使用生成式AI自動撰寫財報摘要，但擔心模型產生不實的數據。下列哪種設計最能有效防止幻覺？",
        "options": [
          "A. 以RAG檢索真實財報數據作為生成依據，並要求模型在輸出中標註數據來源",
          "B. 使用更大參數量的模型",
          "C. 增加輸出長度限制",
          "D. 在prompt中加入「請說實話」"
        ],
        "answer": "A",
        "key_point": "防止幻覺",
        "analysis": "RAG提供外部事實依據，要求標註來源便於查驗，是從根源減少生成式AI幻覺的有效方法。"
      },
      {
        "id": "3.3-Z07",
        "question": "下列何者是評估生成式AI模型回覆品質時，最需要納入考量的面向？",
        "options": [
          "A. 正確性、安全性、相關性、流暢度與多樣性",
          "B. 僅正確性",
          "C. 僅回覆速度",
          "D. 僅字數多寡"
        ],
        "answer": "A",
        "key_point": "生成品質評估",
        "analysis": "生成式AI評估需多維度分析，包括事實正確性、內容安全性、與問題的相關性、語言流暢度與回應多樣性。"
      },
      {
        "id": "3.3-Z08",
        "question": "生成式AI模型在處理多輪對話時，常在第五輪後開始遺忘前文資訊。下列哪種架構最能有效解決此問題？",
        "options": [
          "A. 使用外部記憶模組或壓縮歷史對話為摘要，定期更新對話上下文",
          "B. 增加max_tokens限制",
          "C. 降低temperature",
          "D. 使用更大模型"
        ],
        "answer": "A",
        "key_point": "多輪對話記憶",
        "analysis": "外部記憶模組將歷史對話摘要化儲存，避免上下文窗口耗盡，是維持長對話連貫性的關鍵設計。"
      },
      {
        "id": "3.3-Z09",
        "question": "使用擴散模型生成產品型錄圖片時，發現特定角度的產品圖像出現變形。從模型訓練角度，最可能的原因與改善方案為何？",
        "options": [
          "A. 訓練資料中該角度樣本不足，需補充多角度產品圖片重新訓練或使用LoRA微調",
          "B. 提高採樣步數",
          "C. 降低CFG scale",
          "D. 更換隨機種子"
        ],
        "answer": "A",
        "key_point": "擴散模型角度",
        "analysis": "擴散模型的生成品質高度依賴訓練資料的分布，角度不足可透過補充資料或LoRA進行領域微調改善。"
      },
      {
        "id": "3.3-Z10",
        "question": "一家媒體公司使用生成式AI製作新聞摘要，但模型對敏感政治事件可能產生偏頗敘述。從AI治理角度，應建立何種管控機制？",
        "options": [
          "A. 建立人機協作審稿流程，AI初稿後由專業編輯審閱，並記錄每次修改原因",
          "B. 完全禁止AI用於新聞",
          "C. 僅使用小模型",
          "D. 關閉模型偏見檢測"
        ],
        "answer": "A",
        "key_point": "AI新聞治理",
        "analysis": "人機協作可充分發揮AI效率同時確保新聞品質，記錄修改原因便於持續優化與責任歸屬。"
      }
    ]
  },
  "3.4": {
    "基礎": [
      {
        "id": "3.4-B01",
        "question": "下列何者是CLIP模型的核心設計？",
        "options": [
          "A. 透過對比學習將圖像與文字映射到共同向量空間",
          "B. 僅編碼圖像特徵",
          "C. 僅編碼文字特徵",
          "D. 使用RNN處理圖文順序"
        ],
        "answer": "A",
        "key_point": "CLIP對比學習",
        "analysis": "CLIP使用圖文對比學習，讓配對的圖文在向量空間靠近，非配對的遠離。"
      },
      {
        "id": "3.4-B02",
        "question": "多模態RAG系統中，使用者上傳PDF發票圖片詢問總金額。系統需先做什麼處理才能檢索？",
        "options": [
          "A. 使用OCR將圖片中的文字提取出來",
          "B. 直接將圖片存入向量資料庫",
          "C. 將圖片轉為base64編碼",
          "D. 壓縮圖片解析度"
        ],
        "answer": "A",
        "key_point": "OCR處理",
        "analysis": "PDF發票為掃描文件，資訊在圖片中，需OCR提取文字後才能進行後續檢索與問答。"
      },
      {
        "id": "3.4-B03",
        "question": "關於視覺問答(VQA)任務，下列敘述何者正確？",
        "options": [
          "A. VQA需要模型同時理解圖片內容與自然語言問題",
          "B. VQA只處理文字問題",
          "C. VQA只處理圖片",
          "D. VQA不需要語言模型"
        ],
        "answer": "A",
        "key_point": "VQA定義",
        "analysis": "VQA(Visual Question Answering)要求模型理解圖片並根據自然語言問題給出答案。"
      },
      {
        "id": "3.4-B04",
        "question": "自駕車系統整合攝影機與LiDAR感測器。LiDAR的主要優勢是什麼？",
        "options": [
          "A. 提供精確的3D距離資訊，不受光照條件影響",
          "B. 解析度比攝影機高",
          "C. 成本最低",
          "D. 體積最小"
        ],
        "answer": "A",
        "key_point": "LiDAR優勢",
        "analysis": "LiDAR透過雷射測距提供精確3D資訊，在夜間與強光下仍能穩定工作。"
      },
      {
        "id": "3.4-B05",
        "question": "下列何者不屬於多模態融合的常見挑戰？",
        "options": [
          "A. 各模態資料量完全相同",
          "B. 異質資料的對齊與同步",
          "C. 跨模態的語意鴻溝",
          "D. 模態缺失時的處理"
        ],
        "answer": "A",
        "key_point": "多模態挑戰",
        "analysis": "多模態挑戰包括異質對齊、語意鴻溝、模態缺失等，但各模態資料量通常不相同。"
      },
      {
        "id": "3.4-B06",
        "question": "醫療AI團隊開發從MRI影像與病歷文本生成診斷報告的系統。最適合的模型架構為何？",
        "options": [
          "A. 視覺編碼器+文本編碼器→跨模態融合→文字生成",
          "B. 僅使用CNN",
          "C. 僅使用LLM",
          "D. 分別獨立輸出後人工拼接"
        ],
        "answer": "A",
        "key_point": "多模態生成架構",
        "analysis": "需先各自編碼不同模態，再透過注意力機制融合，最後用語言模型頭生成報告。"
      },
      {
        "id": "3.4-B07",
        "question": "關於MLLM(Multimodal Large Language Model)，下列敘述何者正確？",
        "options": [
          "A. MLLM可同時處理文字與圖像輸入並生成文字回應",
          "B. MLLM只能處理圖像",
          "C. MLLM與LLM完全相同",
          "D. MLLM不需要視覺編碼器"
        ],
        "answer": "A",
        "key_point": "MLLM定義",
        "analysis": "MLLM在LLM基礎上加入視覺編碼器與模態連接器，使模型能理解圖像並進行多模態對話。"
      },
      {
        "id": "3.4-B08",
        "question": "圖文檢索系統中，使用者上傳一張紅色的椅子圖片，但系統傳回大量紅色沙發。最可能的原因是？",
        "options": [
          "A. 顏色等低階視覺特徵在embedding中佔主導，遮蔽了形狀類別特徵",
          "B. 資料庫無椅子圖片",
          "C. 檢索演算法錯誤",
          "D. 圖片解析度不足"
        ],
        "answer": "A",
        "key_point": "特徵主導",
        "analysis": "顏色等顯著視覺特徵主導相似度計算，可透過特徵加權或細粒度檢索改善。"
      },
      {
        "id": "3.4-B09",
        "question": "跨模態融合中，若文字與圖片提供矛盾資訊（文字說晴天，圖片是陰天），模型傾向相信文字。此現象稱為什麼？",
        "options": [
          "A. 模態偏見(modality bias)，語言先驗過強",
          "B. 圖片解析度不足",
          "C. 文字編碼錯誤",
          "D. 模型參數不足"
        ],
        "answer": "A",
        "key_point": "模態偏見",
        "analysis": "MLLM中語言先驗過強時會忽視視覺輸入，需平衡各模態貢獻度防止偏見。"
      },
      {
        "id": "3.4-B10",
        "question": "下列Python程式使用CLIP進行零樣本分類的核心步驟為何？\nimport clip\nmodel, preprocess = clip.load('ViT-B/32')\nimage = preprocess(Image.open('cat.jpg')).unsqueeze(0)\ntext = clip.tokenize(['a dog', 'a cat', 'a bird'])\nwith torch.no_grad():\n    logits_per_image, _ = model(image, text)\nprobs = logits_per_image.softmax(dim=-1)",
        "options": [
          "A. 計算圖片與各文字描述的匹配分數，softmax轉機率，最高分即預測類別",
          "B. 直接輸出圖像類別",
          "C. 訓練分類器",
          "D. 提取圖像特徵儲存"
        ],
        "answer": "A",
        "key_point": "CLIP零樣本",
        "analysis": "CLIP計算圖像嵌入與各文字嵌入的餘弦相似度，softmax後取最高分對應的文字類別為預測結果。"
      }
    ],
    "進階": [
      {
        "id": "3.4-J01",
        "question": "開發MLLM時團隊發現存在模態偏見。當圖文矛盾時模型傾向相信文字。下列哪種訓練方法最能減少模態偏見？",
        "options": [
          "A. 使用對抗訓練平衡各模態貢獻，或隨機遮蓋某模態強制模型學習互補",
          "B. 刪除所有文字輸入",
          "C. 僅使用視覺特徵",
          "D. 增加模型參數"
        ],
        "answer": "A",
        "key_point": "模態偏見緩解",
        "analysis": "對抗訓練平衡各模態權重，隨機模態遮蓋迫使模型從任一單一模態學習，減少偏見。"
      },
      {
        "id": "3.4-J02",
        "question": "影片內容審核需同時分析視覺、音訊與字幕。為平衡準確率與計算成本，最適合的架構是什麼？",
        "options": [
          "A. 級聯架構：低成本視覺模型初篩，高成本多模態模型審查高風險內容",
          "B. 全部使用多模態模型",
          "C. 僅使用視覺模型",
          "D. 僅使用字幕分析"
        ],
        "answer": "A",
        "key_point": "級聯審核",
        "analysis": "兩階段級聯先篩後精審，兼顧多數簡單案例的低成本與高風險案例的高準確率。"
      },
      {
        "id": "3.4-J03",
        "question": "AR眼鏡即時翻譯系統需將看到的文字即時翻譯並疊加。從使用者體驗角度，系統的最大允許延遲為何？",
        "options": [
          "A. 100ms以下，避免頭部移動時感知不一致造成暈眩",
          "B. 1秒以下",
          "C. 5秒以下",
          "D. 無延遲要求"
        ],
        "answer": "A",
        "key_point": "AR延遲",
        "analysis": "AR即時疊加應用需<100ms延遲，否則使用者的前庭覺與視覺不一致會造成暈眩。"
      },
      {
        "id": "3.4-J04",
        "question": "多模態情感分析系統中，語音語調說「我沒事」但臉部表情顯示悲傷。模型應如何處理此矛盾？",
        "options": [
          "A. 透過跨模態注意力融合語音與視覺特徵，綜合判斷真實情感",
          "B. 只相信語音",
          "C. 只相信臉部",
          "D. 隨機選擇"
        ],
        "answer": "A",
        "key_point": "模態矛盾處理",
        "analysis": "跨模態注意力融合可學習各模態在不同情境下的貢獻權重，比單一模態更全面。"
      },
      {
        "id": "3.4-J05",
        "question": "醫療多模態系統中，模型生成的報告與影像發現矛盾。從多模態角度，核心原因是？",
        "options": [
          "A. 跨模態對齊不佳：模型未能正確關聯影像發現與文字描述",
          "B. 影像解析度不足",
          "C. 訓練資料太少",
          "D. 硬體設備老舊"
        ],
        "answer": "A",
        "key_point": "跨模態對齊",
        "analysis": "多模態生成需準確的跨模態對齊，影像中的視覺證據需正確對應到文字描述。"
      },
      {
        "id": "3.4-J06",
        "question": "健康App整合手環數據、飲食照片與情緒日記。若壓力評估與使用者自評不一致，最可能的原因？",
        "options": [
          "A. 生理訊號與主觀壓力間的對應有個體差異，需個人化模型",
          "B. 手環電量不足",
          "C. 照片解析度太低",
          "D. 日記字數太少"
        ],
        "answer": "A",
        "key_point": "生理-心理差異",
        "analysis": "心率等生理訊號與主觀壓力感受的對應關係因人而異，需個人化模型提升準確性。"
      },
      {
        "id": "3.4-J07",
        "question": "生成式AI同時輸出文字與圖片，為確保跨模態一致性（圖中文字與圖說一致），最有效的方法是什麼？",
        "options": [
          "A. 以文字為基礎再生成圖像，並進行一致性驗證",
          "B. 先隨機生成再人工調整",
          "C. 文字與圖片獨立生成",
          "D. 僅使用文字"
        ],
        "answer": "A",
        "key_point": "跨模態一致性",
        "analysis": "序列化生成（先決定文字再據此生圖）比平行生成更易保證模態間一致性。"
      },
      {
        "id": "3.4-J08",
        "question": "關於差分隱私在多模態資料中的應用，下列何者正確？",
        "options": [
          "A. 在訓練過程中對梯度加入雜訊，保護所有模態中的個人資訊",
          "B. 差分隱私只能保護文字資料",
          "C. 差分隱私不適用於圖像",
          "D. 差分隱私會消除所有資料特徵"
        ],
        "answer": "A",
        "key_point": "差分隱私多模態",
        "analysis": "差分隱私在訓練時添加校準雜訊，可同時保護多種模態資料中的個資。"
      },
      {
        "id": "3.4-J09",
        "question": "跨模態檢索中，使用者以「夕陽下的海灘」文字搜尋圖片。系統應使用哪種技術將文字與圖片匹配？",
        "options": [
          "A. 使用CLIP等跨模態編碼器將文字與圖片映射至同一向量空間",
          "B. 文字關鍵字比對圖片檔名",
          "C. 圖像分類",
          "D. OCR文字識別"
        ],
        "answer": "A",
        "key_point": "跨模態檢索",
        "analysis": "跨模態編碼器將文字與圖片嵌入同一語意空間，可直接計算相似度進行檢索。"
      },
      {
        "id": "3.4-J10",
        "question": "企業開發一個多模態客服系統，使用者可上傳產品故障照片並用語音描述問題。下列哪種架構設計最能有效整合這兩種輸入？",
        "options": [
          "A. 使用多模態編碼器分別提取視覺與語音特徵，經過跨模態融合後送入LLM生成回應",
          "B. 將語音轉文字後與照片分開處理",
          "C. 僅使用文字輸入",
          "D. 僅使用照片輸入"
        ],
        "answer": "A",
        "key_point": "多模態客服",
        "analysis": "多模態編碼器分別處理不同模態，跨模態融合層整合互補資訊，LLM基於融合特徵生成最完整的回應。"
      }
    ],
    "專業": [
      {
        "id": "3.4-Z01",
        "question": "工廠欲建立多模態品質檢測系統，分析產品外觀、運轉聲音與震動頻譜。下列哪種架構最能達到最高準確率並適應新型缺陷？",
        "options": [
          "A. 多模態編碼器→跨模態Transformer融合→異常檢測頭(few-shot adaptation)",
          "B. 三模型獨立預測投票",
          "C. 僅用視覺模型",
          "D. 僅用震動感測器"
        ],
        "answer": "A",
        "key_point": "多模態工業檢測",
        "analysis": "跨模態融合捕捉互補特徵，few-shot adaptation使系統能快速學習新型缺陷。"
      },
      {
        "id": "3.4-Z02",
        "question": "SHAP在模型可解釋性中的核心概念為何？",
        "options": [
          "A. 基於合作賽局理論，計算每個特徵對預測的邊際貢獻(Shapley values)",
          "B. 計算特徵與標籤的相關係數",
          "C. 繪製決策樹路徑",
          "D. 計算特徵的標準差"
        ],
        "answer": "A",
        "key_point": "SHAP原理",
        "analysis": "SHAP基於Shapley值量化各特徵對預測結果的貢獻度，提供一致的局部解釋。"
      },
      {
        "id": "3.4-Z03",
        "question": "關於多模態系統的MLOps實踐，下列何者最重要？",
        "options": [
          "A. 各模態資料管線的版本管理與監控，確保訓練與推論處理一致",
          "B. 僅監控模型準確率",
          "C. 僅監控系統延遲",
          "D. 手動管理各模態處理流程"
        ],
        "answer": "A",
        "key_point": "多模態MLOps",
        "analysis": "多模態管線涉及多種資料處理流程，版本管理與監控確保各環節的一致性。"
      },
      {
        "id": "3.4-Z04",
        "question": "在自駕車系統中，攝影機與LiDAR的感測器融合若發生時間不同步（攝影機延遲50ms），可能造成什麼後果？",
        "options": [
          "A. 物體定位偏差，模型可能將同一物體視為兩個不同物體",
          "B. 無影響",
          "C. 色彩失真",
          "D. 解析度下降"
        ],
        "answer": "A",
        "key_point": "感測器同步",
        "analysis": "不同感測器的時間偏移會導致空間定位不一致，跨模態融合前必須精確對齊各模態的時間戳記。"
      },
      {
        "id": "3.4-Z05",
        "question": "醫療AI系統需同時分析CT影像與病歷報告，但報告中常使用非標準縮寫導致跨模態對齊錯誤。下列何者是最佳解決方案？",
        "options": [
          "A. 建立醫學縮寫詞典進行標準化，再使用跨模態注意力模型對齊影像區域與文字描述",
          "B. 忽略非標準縮寫",
          "C. 只使用影像",
          "D. 要求醫師使用標準用語"
        ],
        "answer": "A",
        "key_point": "醫療跨模態對齊",
        "analysis": "標準化詞典確保文字輸入一致性，跨模態注意力可學習影像區域與特定文字片段的對應關係。"
      },
      {
        "id": "3.4-Z06",
        "question": "開發一個結合語音指令與手勢辨識的智慧家庭控制系統。當語音說「開燈」但手勢為關閉動作時，系統應如何設計？",
        "options": [
          "A. 設計衝突解決機制，根據上下文信心度決定優先採用哪個指令",
          "B. 忽略語音",
          "C. 忽略手勢",
          "D. 同時執行兩個指令"
        ],
        "answer": "A",
        "key_point": "模態衝突解決",
        "analysis": "多模態系統需建立衝突處理邏輯，可依據各模態的歷史準確率或上下文情境決定優先權。"
      },
      {
        "id": "3.4-Z07",
        "question": "下列何者是評估多模態AI系統時，需要特別關注的額外評估維度？",
        "options": [
          "A. 跨模態一致性（各模態輸出是否矛盾）與模態缺失下的穩健性",
          "B. 僅準確率",
          "C. 僅推論速度",
          "D. 僅模型大小"
        ],
        "answer": "A",
        "key_point": "多模態評估",
        "analysis": "多模態系統需額外評估模態間的輸出一致性，以及部分模態缺失時的系統降級行為。"
      },
      {
        "id": "3.4-Z08",
        "question": "智慧零售系統整合貨架攝影機與POS銷售數據。當攝影機偵測到商品缺貨但POS顯示仍有庫存時，最可能是什麼問題？",
        "options": [
          "A. 視覺與交易資料未正確關聯，需建立統一的時間軸與商品對應關係",
          "B. 攝影機故障",
          "C. POS系統錯誤",
          "D. 商品被偷"
        ],
        "answer": "A",
        "key_point": "多模態資料關聯",
        "analysis": "不同資料源的時序對齊與實體對應是跨模態分析的基礎，資料關聯錯誤會導致矛盾結論。"
      },
      {
        "id": "3.4-Z09",
        "question": "訓練多模態模型時，文字模態的loss收斂遠快於視覺模態。下列哪種訓練策略最能平衡各模態的學習速度？",
        "options": [
          "A. 對各模態的loss進行加權調整，或使用課程學習先訓練困難模態",
          "B. 提高文字模態學習率",
          "C. 降低視覺模態學習率",
          "D. 忽略視覺模態"
        ],
        "answer": "A",
        "key_point": "多模態訓練平衡",
        "analysis": "loss加權與課程學習可防止某些模態主導訓練，讓所有模態都得到充分學習。"
      },
      {
        "id": "3.4-Z10",
        "question": "企業欲建立多模態AI中台，統一管理各部門的影像、文字與語音模型。下列哪種平台架構最能支援未來擴展？",
        "options": [
          "A. 模組化微服務架構，各模態處理封裝為獨立服務，透過API閘道統一調度",
          "B. 單體式應用",
          "C. 各部門獨立開發",
          "D. 僅支援單一模態"
        ],
        "answer": "A",
        "key_point": "多模態平台",
        "analysis": "模組化微服務讓各模態可獨立演進，API閘道統一管理，新模態可隨時以服務形式加入。"
      }
    ]
  },
  "4.1": {
    "基礎": [
      {
        "id": "4.1-B01",
        "question": "下列何者最能直接衡量AI專案的投資回報？",
        "options": [
          "A. ROI：預期節省成本與營收增加除以導入總成本",
          "B. 模型準確率",
          "C. 訓練資料量",
          "D. GPU使用率"
        ],
        "answer": "A",
        "key_point": "ROI",
        "analysis": "ROI=(收益-成本)/成本，是董事會最關心的商業指標。"
      },
      {
        "id": "4.1-B02",
        "question": "某傳產評估導入AI品質檢測。POC階段最應優先確認的是？",
        "options": [
          "A. 模型是否能在真實生產環境中達到目標準確率",
          "B. 模型參數量",
          "C. 使用的程式語言",
          "D. 開發團隊規模"
        ],
        "answer": "A",
        "key_point": "POC目標",
        "analysis": "POC首要驗證技術可行性：模型在真實場景資料上能否達到預期效能。"
      },
      {
        "id": "4.1-B03",
        "question": "下列何者是AI系統總持有成本(TCO)中常被低估的項目？",
        "options": [
          "A. 資料標註與維護的長期成本",
          "B. 伺服器電費",
          "C. 網路頻寬",
          "D. 辦公室租金"
        ],
        "answer": "A",
        "key_point": "TCO隱藏成本",
        "analysis": "資料的持續標註、清洗與維護是AI系統TCO中最被低估的長期支出。"
      },
      {
        "id": "4.1-B04",
        "question": "AI反詐騙系統攔截率90%但誤報率5%。下列何者是誤報的主要成本？",
        "options": [
          "A. 客戶體驗受損與客服處理成本",
          "B. 伺服器負載增加",
          "C. 網路頻寬",
          "D. 電費增加"
        ],
        "answer": "A",
        "key_point": "誤報成本",
        "analysis": "誤報消耗客服人力且損害客戶信任，是金融AI需權衡的重要成本。"
      },
      {
        "id": "4.1-B05",
        "question": "PM比較兩個方案：方案A準確率92%、推論500ms；方案B準確率88%、推論50ms。若用於即時客服，較適合的方案是？",
        "options": [
          "A. 方案B：即時對話對延遲敏感，88%加上人工複查為務實方案",
          "B. 方案A：準確率最重要",
          "C. 兩者都不適合",
          "D. 方案A可增加伺服器降低延遲"
        ],
        "answer": "A",
        "key_point": "延遲vs準確率",
        "analysis": "即時應用需平衡延遲與準確率，快速推論加上人工抽檢是務實策略。"
      },
      {
        "id": "4.1-B06",
        "question": "自建AI團隊年成本800萬，外包專案300萬無後續維護。若系統需持續迭代3年，下列評估何者正確？",
        "options": [
          "A. 自建3年2,400萬但保有核心能力與迭代彈性",
          "B. 外包每年300萬更便宜",
          "C. 不導入AI",
          "D. 兩者成本相同"
        ],
        "answer": "A",
        "key_point": "自建vs外包",
        "analysis": "長期持續迭代的系統自建較經濟且保有自主能力；短期專案外包適合。"
      },
      {
        "id": "4.1-B07",
        "question": "下列何者不是AI專案測試集與生產環境準確率落差的合理原因？",
        "options": [
          "A. 當測試與生產環境一致時，差距來自模型隨機誤差",
          "B. 訓練與生產資料分布不同(data drift)",
          "C. 生產環境輸入格式差異",
          "D. 使用者行為與測試情境不同"
        ],
        "answer": "A",
        "key_point": "測試生產落差",
        "analysis": "測試與生產環境一致時95%到78%的差距不能歸因隨機誤差，必有系統性原因。"
      },
      {
        "id": "4.1-B08",
        "question": "AI庫存預測系統預估降低20%庫存成本，實際僅5%。最可能的原因是？",
        "options": [
          "A. 評估忽略組織變革阻力與員工適應期",
          "B. AI模型技術太差",
          "C. 資料量不足",
          "D. 硬體設備老舊"
        ],
        "answer": "A",
        "key_point": "導入評估偏差",
        "analysis": "AI效益預估常忽略組織變革成本與人員適應時間，造成預期與實際的落差。"
      },
      {
        "id": "4.1-B09",
        "question": "模型驗證中，下列哪項不是必要項目？",
        "options": [
          "A. 訓練使用的GPU型號",
          "B. 模型效能評估",
          "C. 公平性測試",
          "D. 穩健性測試"
        ],
        "answer": "A",
        "key_point": "模型驗證項目",
        "analysis": "GPU型號與模型驗證無關，驗證應聚焦效能、公平性、穩健性與可解釋性。"
      },
      {
        "id": "4.1-B10",
        "question": "部門內三組工程師使用TensorFlow、PyTorch、scikit-learn開發模型。從長期維護角度，最佳建議為何？",
        "options": [
          "A. 逐步標準化為單一主力框架並建立共用模板",
          "B. 維持現狀",
          "C. 全部改用Excel",
          "D. 全部改用R語言"
        ],
        "answer": "A",
        "key_point": "技術標準化",
        "analysis": "多框架並行增加維護成本，標準化可提升協作效率與知識傳承。"
      }
    ],
    "進階": [
      {
        "id": "4.1-J01",
        "question": "製造業PM評估AI視覺檢測方案：方案X 50萬含3年維護；方案Y 30萬不含維護（年維護10萬）。TCO正確比較為何？",
        "options": [
          "A. 方案X：50萬；方案Y：30+10×3=60萬，方案X較划算",
          "B. 方案Y較便宜",
          "C. 都不選",
          "D. 兩者相同"
        ],
        "answer": "A",
        "key_point": "TCO比較",
        "analysis": "含維護方案（50萬）3年TCO低於不含維護方案（30+30=60萬）。"
      },
      {
        "id": "4.1-J02",
        "question": "下列哪項不屬於AI供應鏈攻擊的風險？",
        "options": [
          "A. 模型訓練時GPU過熱",
          "B. 使用來路不明的預訓練模型可能內含後門",
          "C. 第三方資料集中可能包含惡意樣本",
          "D. 開源套件可能存在安全漏洞"
        ],
        "answer": "A",
        "key_point": "供應鏈攻擊",
        "analysis": "GPU過熱是硬體問題非供應鏈攻擊。供應鏈攻擊指透過第三方元件（模型/資料/套件）植入惡意程式。"
      },
      {
        "id": "4.1-J03",
        "question": "銀行AI信用評分模型對特定族群的拒絕率顯著較高，但輸入中無種族特徵。風險團隊應如何處理？",
        "options": [
          "A. 進行公平性審計，檢查是否有代理特徵(proxy)造成間接歧視",
          "B. 無種族特徵就沒問題",
          "C. 關閉該族群申請",
          "D. 降低整體拒絕率"
        ],
        "answer": "A",
        "key_point": "代理特徵",
        "analysis": "即使不用種族特徵，郵遞區號等其他特徵可能間接代理種族造成歧視。"
      },
      {
        "id": "4.1-J04",
        "question": "PM評估三個AI專案：客服機器人（ROI 300%，6個月回收）；預測維護（ROI 150%，18個月）；自動駕駛（ROI未知，5年+）。資源有限應如何選擇？",
        "options": [
          "A. 先做客服機器人建立團隊與信心，同步小規模探索預測維護",
          "B. 全部投入自動駕駛",
          "C. 只做預測維護",
          "D. 三個同時做"
        ],
        "answer": "A",
        "key_point": "專案組合",
        "analysis": "短中長期搭配：快回收專案養團隊，長期專案小規模探索，平衡風險與效益。"
      },
      {
        "id": "4.1-J05",
        "question": "AI專案進行到一半發現訓練資料含大量未授權個資。從法規角度，正確處理方式為何？",
        "options": [
          "A. 立即暫停專案，進行資料去識別化與法規遵循審查",
          "B. 繼續開發上線前再處理",
          "C. 刪除所有資料重新收集",
          "D. 忽略個資問題"
        ],
        "answer": "A",
        "key_point": "資料合規",
        "analysis": "個資問題可能導致巨額罰款（GDPR最高全球營收4%），必須立即處理。"
      },
      {
        "id": "4.1-J06",
        "question": "LIME在模型可解釋性中的核心概念為何？",
        "options": [
          "A. 在預測點附近採樣，訓練簡單代理模型解釋局部決策邊界",
          "B. 計算Shapley值",
          "C. 繪製特徵重要性長條圖",
          "D. 計算特徵相關係數"
        ],
        "answer": "A",
        "key_point": "LIME原理",
        "analysis": "LIME(Local Interpretable Model-agnostic Explanations)在局部範圍內用可解釋模型近似黑箱模型的決策邊界。"
      },
      {
        "id": "4.1-J07",
        "question": "企業AI導入可行性評估應包含哪些面向？",
        "options": [
          "A. 技術可行性、商業價值、資料就緒度、組織準備度",
          "B. 僅技術可行性",
          "C. 僅商業價值",
          "D. 僅資料就緒度"
        ],
        "answer": "A",
        "key_point": "可行性評估面向",
        "analysis": "全面可行性評估需涵蓋技術、商業、資料與組織四大面向，缺一不可。"
      },
      {
        "id": "4.1-J08",
        "question": "下列哪項不是POC階段應設定的成功門檻？",
        "options": [
          "A. 模型參數量不少於10億",
          "B. 模型準確率達標",
          "C. 推論延遲符合SLA",
          "D. 資料處理管線可運作"
        ],
        "answer": "A",
        "kp": "POC門檻",
        "analysis": "POC評估應聚焦效能指標與實務可行性，模型參數量不能作為成功門檻。"
      },
      {
        "id": "4.1-J09",
        "question": "關於AI成熟度模型(AI Maturity Model)，下列敘述何者正確？",
        "options": [
          "A. 成熟度模型協助企業評估當前AI能力等級並規劃發展路徑",
          "B. 成熟度模型只評估技術",
          "C. 成熟度模型不考慮組織文化",
          "D. 所有企業應直接達到最高成熟度"
        ],
        "answer": "A",
        "key_point": "AI成熟度",
        "analysis": "成熟度模型從資料、技術、人才、流程等多維度評估，協助制定階段性發展策略。"
      },
      {
        "id": "4.1-J10",
        "question": "AI專案POC成功後要進入規模化階段，PM發現IT基礎設施無法支援大規模推論需求。下列哪種策略最能降低規模化風險？",
        "options": [
          "A. 先以混合雲架構進行小規模試量產，確認瓶頸後再逐步擴充地端基礎設施",
          "B. 直接採購大量伺服器",
          "C. 延後規模化",
          "D. 使用免費雲端服務"
        ],
        "answer": "A",
        "key_point": "規模化策略",
        "analysis": "混合雲提供彈性擴充能力，小規模試量產可先行驗證瓶頸，避免一次性大量投資卻不符合實際需求。"
      }
    ],
    "專業": [
      {
        "id": "4.1-Z01",
        "question": "公司欲建立AI專案評估與治理框架，需同時考量技術、商業、法規與組織。下列哪種評估架構最全面？",
        "options": [
          "A. 多維度評分卡：技術(30%)+商業(30%)+法規(20%)+組織(20%)，各維度設最低門檻",
          "B. 僅技術評估",
          "C. 僅商業評估",
          "D. 僅法規評估"
        ],
        "answer": "A",
        "key_point": "多維度評估框架",
        "analysis": "多維度評分卡全面評估AI專案，設最低門檻避免單一維度過低導致失敗。"
      },
      {
        "id": "4.1-Z02",
        "question": "組織準備度評估中，下列何者是AI導入成功的關鍵非技術因素？",
        "options": [
          "A. 高層主管的支持與跨部門協作文化",
          "B. GPU數量",
          "C. 資料庫類型",
          "D. 程式語言版本"
        ],
        "answer": "A",
        "key_point": "組織準備度",
        "analysis": "高層支持與跨部門協作是AI導入成功的關鍵組織因素，常比技術因素更重要。"
      },
      {
        "id": "4.1-Z03",
        "question": "在預算有限下，AI專案的資源分配最合理的比例為何？",
        "options": [
          "A. 資料處理與基礎建設40%、模型開發30%、部署維運20%、治理測試10%",
          "B. 全部用於模型開發",
          "C. 全部用於硬體",
          "D. 全部用於人力"
        ],
        "answer": "A",
        "key_point": "資源分配",
        "analysis": "資料處理與基礎建設佔AI專案最大比例，是模型成功的地基，常被低估。"
      },
      {
        "id": "4.1-Z04",
        "question": "某分類模型測試混淆矩陣：TP=85, FP=15, FN=20, TN=80。下列何者正確？",
        "options": [
          "A. 精確率=85/(85+15)=0.85，召回率=85/(85+20)≈0.81, F1≈0.83",
          "B. 精確率=85/105≈0.81，召回率=85/100=0.85",
          "C. 精確率=85/165≈0.515，召回率=85/165≈0.515",
          "D. 精確率=85/80≈1.06，召回率=85/80≈1.06"
        ],
        "answer": "A",
        "key_point": "評估指標計算",
        "analysis": "精確率=TP/(TP+FP)=85/100=0.85，召回率=TP/(TP+FN)=85/105≈0.81，F1=2×0.85×0.81/(0.85+0.81)≈0.83。"
      },
      {
        "id": "4.1-Z05",
        "question": "企業欲導入AI進行供應鏈需求預測，但內部缺乏數據科學團隊。從導入評估角度，最應優先考量的是什麼？",
        "options": [
          "A. 評估是否有成熟的AI SaaS解決方案可快速導入，並規劃內部人才逐步養成",
          "B. 立即招聘數據科學團隊",
          "C. 放棄導入",
          "D. 購買超級電腦"
        ],
        "answer": "A",
        "key_point": "AI導入策略",
        "analysis": "缺乏內部團隊時，SaaS方案可快速驗證價值，同時搭配人才培訓計畫建立長期能力。"
      },
      {
        "id": "4.1-Z06",
        "question": "AI專案在POC階段表現優異，但進入試量產時因資料品質問題導致準確率大幅下降。這凸顯POC階段忽略了什麼？",
        "options": [
          "A. POC未使用真實生產環境的髒資料進行測試，導致低估資料清洗難度",
          "B. 模型訓練不足",
          "C. 硬體規格不足",
          "D. 開發時程太短"
        ],
        "answer": "A",
        "key_point": "POC資料真實性",
        "analysis": "POC應使用真實生產資料（含雜訊、缺失值）進行測試，才能準確評估上線後的實際表現。"
      },
      {
        "id": "4.1-Z07",
        "question": "下列哪項是評估AI專案商業價值時最適合使用的量化指標？",
        "options": [
          "A. NPV（淨現值）與IRR（內部報酬率），考慮時間價值的長期投資評估",
          "B. 僅模型準確率",
          "C. 僅開發成本",
          "D. 僅使用人數"
        ],
        "answer": "A",
        "key_point": "商業價值量化",
        "analysis": "NPV與IRR考慮貨幣時間價值與風險，是評估AI專案長期投資報酬的標準財務指標。"
      },
      {
        "id": "4.1-Z08",
        "question": "一家傳產欲導入AI進行智慧排程，但資訊長發現該公司連基礎的生產數據都未數位化。最務實的建議為何？",
        "options": [
          "A. 先推動數位化基礎建設（IoT感測器、MES系統），再逐步導入AI",
          "B. 跳過數位化直接導入AI",
          "C. 購買現成排程軟體",
          "D. 使用Excel人工排程"
        ],
        "answer": "A",
        "key_point": "數位化先行",
        "analysis": "AI的成效高度依賴資料品質與完整性，數位化基礎建設是AI導入的前提條件。"
      },
      {
        "id": "4.1-Z09",
        "question": "PM為AI專案選擇技術方案時，團隊建議使用最新技術但PM擔心維運風險。最合理的決策方式為何？",
        "options": [
          "A. 評估技術成熟度、社群支援度、內部技能與長期維護成本後綜合決定",
          "B. 完全聽從團隊建議",
          "C. 選擇最便宜的方案",
          "D. 選擇最熟悉的技術"
        ],
        "answer": "A",
        "key_point": "技術選型評估",
        "analysis": "技術選型需綜合考量成熟度、生態系、內部能力與長期TCO，不應僅因新穎或便宜而決定。"
      },
      {
        "id": "4.1-Z10",
        "question": "某AI專案上線後第一個月的ROI為負值，總經理質疑專案價值。PM應如何回應？",
        "options": [
          "A. 說明AI專案需經過模型調適期與使用者學習曲線，設定合理的ROI觀察期（如6個月）",
          "B. 承認失敗",
          "C. 關閉專案",
          "D. 指責開發團隊"
        ],
        "answer": "A",
        "key_point": "ROI觀察期",
        "analysis": "AI專案初期需投入基礎建設與人員培訓，ROI通常需要數月的營運資料積累才能顯現。"
      }
    ]
  },
  "4.2": {
    "基礎": [
      {
        "id": "4.2-B01",
        "question": "AI導入路徑規劃中，下列何者是最合理的順序？",
        "options": [
          "A. 資料治理先行→小規模POC→評估調整→規模化部署→建立維運",
          "B. 直接購買AI系統上線",
          "C. 先組織變革再技術導入",
          "D. 先部署再收集資料"
        ],
        "answer": "A",
        "key_point": "導入路徑",
        "analysis": "AI導入應資料先行，小規模驗證後再規模化，逐步建立完整體系。"
      },
      {
        "id": "4.2-B02",
        "question": "公司缺乏AI人才。下列哪項人力策略最務實？",
        "options": [
          "A. 關鍵職位外招+內部培訓+外部顧問補充",
          "B. 全部外包",
          "C. 全部招聘新人",
          "D. 只靠內部轉型"
        ],
        "answer": "A",
        "key_point": "人才策略",
        "analysis": "混合策略平衡成本與自主能力：關鍵職位外招、員工培訓、顧問補缺口。"
      },
      {
        "id": "4.2-B03",
        "question": "下列哪種場景最適合地端部署AI？",
        "options": [
          "A. 高敏感資料（病歷、個資）且需低延遲即時推論",
          "B. 開發初期快速迭代",
          "C. 不定期的批次處理",
          "D. 小型POC"
        ],
        "answer": "A",
        "key_point": "地端適合場景",
        "analysis": "資料隱私法規與低延遲要求是選擇地端的主因，雲端適合開發與彈性運算。"
      },
      {
        "id": "4.2-B04",
        "question": "MLOps架構中，下列哪項工具組合最合理？",
        "options": [
          "A. MLflow追蹤實驗、DVC管理資料版本、Git管理程式碼",
          "B. 只用Git",
          "C. 手動記錄",
          "D. 使用Excel追蹤"
        ],
        "answer": "A",
        "key_point": "MLOps工具",
        "analysis": "區分管理：Git管程式碼、DVC管資料與模型、MLflow管實驗參數與指標。"
      },
      {
        "id": "4.2-B05",
        "question": "下列哪項不是模型上線後必須監控的指標？",
        "options": [
          "A. 開發團隊的程式碼行數",
          "B. 推論延遲與吞吐量",
          "C. 預測分布偏移(data drift)",
          "D. 模型準確率變化"
        ],
        "answer": "A",
        "key_point": "模型監控指標",
        "analysis": "監控重點是模型效能與穩定性，開發者生產力指標非模型監控範疇。"
      },
      {
        "id": "4.2-B06",
        "question": "預算有限下，AI專案資源分配最合理的比例為何？",
        "options": [
          "A. 資料處理40%、模型開發30%、部署維運20%、治理測試10%",
          "B. 全部用於模型開發",
          "C. 全部用於硬體",
          "D. 全部用於人力"
        ],
        "answer": "A",
        "key_point": "預算分配",
        "analysis": "資料處理與基礎建設是AI成功的基礎，佔最大預算比例。"
      },
      {
        "id": "4.2-B07",
        "question": "下列何者是AI專案成功的關鍵角色？",
        "options": [
          "A. 具備AI理解力的專案贊助者(sponsor)與領域專家",
          "B. 純技術開發者",
          "C. 外部顧問",
          "D. 法務人員"
        ],
        "answer": "A",
        "key_point": "關鍵角色",
        "analysis": "理解AI的專案贊助者與領域專家是AI專案成敗的關鍵推手。"
      },
      {
        "id": "4.2-B08",
        "question": "業務與IT部門對資料格式理解不一致。最有效的解決方式為何？",
        "options": [
          "A. 建立跨部門資料字典與資料治理委員會",
          "B. 由IT決定",
          "C. 由業務決定",
          "D. 忽略差異繼續開發"
        ],
        "answer": "A",
        "key_point": "資料治理",
        "analysis": "資料字典與治理委員會制度化解決跨部門資料認知差異。"
      },
      {
        "id": "4.2-B09",
        "question": "選擇AI vendor時，對方展示的POC結果極佳。PM應如何驗證？",
        "options": [
          "A. 要求使用自己的資料在自己的環境中重新執行POC",
          "B. 相信vendor數據",
          "C. 參考其他客戶評價",
          "D. 只看價格"
        ],
        "answer": "A",
        "key_point": "POC驗證",
        "analysis": "用自己的資料與環境重現POC結果，是驗證vendor能力的黃金標準。"
      },
      {
        "id": "4.2-B10",
        "question": "法務部門要求先完成DPIA才能開始專案。PM的最佳處理方式？",
        "options": [
          "A. DPIA與技術POC並行，但DPIA完成前不使用真實個資",
          "B. 忽略法務",
          "C. 停止專案",
          "D. 使用模擬資料無視DPIA"
        ],
        "answer": "A",
        "key_point": "DPIA並行",
        "analysis": "DPIA與POC並行節省時間，確保DPIA完成前不觸碰真實個資。"
      }
    ],
    "進階": [
      {
        "id": "4.2-J01",
        "question": "業務需求即時預測，資料工程建議批次處理。哪種架構最能兼顧兩者？",
        "options": [
          "A. Lambda架構：批次層處理歷史資料，速度層處理即時資料",
          "B. 僅批次",
          "C. 僅即時",
          "D. 兩套獨立系統"
        ],
        "answer": "A",
        "key_point": "Lambda架構",
        "analysis": "Lambda架構批次+即時分流，兼顧歷史分析與即時推論需求。"
      },
      {
        "id": "4.2-J02",
        "question": "AutoML的核心功能為何？",
        "options": [
          "A. 自動化模型選擇、超參數調優與特徵工程",
          "B. 自動完成資料標註",
          "C. 自動部署模型",
          "D. 自動撰寫報告"
        ],
        "answer": "A",
        "key_point": "AutoML功能",
        "analysis": "AutoML自動搜尋最佳模型架構與超參數，降低機器學習的專業門檻。"
      },
      {
        "id": "4.2-J03",
        "question": "模型版本管理中，當新模型在A/B測試中優於舊模型，但p-value=0.08。PM應如何決策？",
        "options": [
          "A. 不顯著，需延長測試或增加樣本量(p>0.05差異可能來自隨機)",
          "B. 直接全量上線",
          "C. 新模型較好",
          "D. 放棄新模型"
        ],
        "answer": "A",
        "key_point": "A/B測試顯著性",
        "analysis": "p>0.05表示觀察到的差異無法排除隨機因素，不應貿然全量上線。"
      },
      {
        "id": "4.2-J04",
        "question": "組織變革管理中，下列哪項策略最能提升AI導入的員工接受度？",
        "options": [
          "A. 高層逐步溝通+建立AI輔助認知+早期讓使用者參與設計",
          "B. 直接宣布上線",
          "C. 只培訓高層",
          "D. 不告知使用者"
        ],
        "answer": "A",
        "key_point": "變革管理",
        "analysis": "早期讓終端使用者參與，強調AI是輔助工具，可降低抗拒提高採用率。"
      },
      {
        "id": "4.2-J05",
        "question": "跨國企業在全球部署相同AI模型，發現各國表現差異大。最可能原因與對策為何？",
        "options": [
          "A. 各國資料分布差異，應建立在地化微調策略",
          "B. 硬體不同",
          "C. 網路不同",
          "D. 團隊能力不同"
        ],
        "answer": "A",
        "key_point": "在地化微調",
        "analysis": "全球AI部署需根據當地資料分布進行區域微調，以適應在地特徵。"
      },
      {
        "id": "4.2-J06",
        "question": "CI/CD管線中整合模型部署，模型通過測試後上線但資料偏移造成準確率下降。流程缺少什麼？",
        "options": [
          "A. 上線後的持續監控與自動回滾機制",
          "B. 更多測試",
          "C. 更大模型",
          "D. 更多資料"
        ],
        "answer": "A",
        "key_point": "持續監控",
        "analysis": "CI/CD後需持續監控模型表現，異常時自動回滾或告警。"
      },
      {
        "id": "4.2-J07",
        "question": "關於實驗追蹤工具的功能，下列敘述何者不正確？",
        "options": [
          "A. 實驗追蹤工具可自動優化模型超參數",
          "B. 記錄每次實驗的超參數與指標",
          "C. 支援實驗結果比較與視覺化",
          "D. 輔助模型註冊與版本管理"
        ],
        "answer": "A",
        "key_point": "實驗追蹤功能",
        "analysis": "實驗追蹤工具記錄與比較實驗結果，但超參數優化需搭配AutoML工具。"
      },
      {
        "id": "4.2-J08",
        "question": "在AI系統規劃中，為確保模型可追溯性與再現性，應記錄哪些資訊？",
        "options": [
          "A. 訓練資料版本、模型程式碼、超參數、評估結果與環境配置",
          "B. 僅模型準確率",
          "C. 僅訓練資料量",
          "D. 僅模型大小"
        ],
        "answer": "A",
        "key_point": "可追溯性",
        "analysis": "完整的實驗記錄需涵蓋資料、程式碼、參數、結果與環境，確保可完全重現。"
      },
      {
        "id": "4.2-J09",
        "question": "資料科學家想用Transformer，工程師主張XGBoost。PM非技術背景，應如何處理？",
        "options": [
          "A. 要求雙方各提POC比較效能、成本與維運難度，以數據決策",
          "B. PM主觀決定",
          "C. 投票",
          "D. 聽從資料科學家"
        ],
        "answer": "A",
        "key_point": "技術決策",
        "analysis": "非技術PM應引導團隊以實驗數據做技術決策，避免主觀判斷。"
      },
      {
        "id": "4.2-J10",
        "question": "AI模型導入規劃中，PM發現各部門對資料欄位的定義不一致（如「活躍用戶」有3種不同定義）。應優先採取哪項措施？",
        "options": [
          "A. 成立資料治理小組，建立統一的企業級資料字典與計算標準",
          "B. 各部門各自使用自己的定義",
          "C. 由IT部門單方面決定",
          "D. 延後專案"
        ],
        "answer": "A",
        "key_point": "資料定義標準化",
        "analysis": "統一的資料定義是AI模型可信賴的基礎，資料治理需從組織層面建立標準化規範。"
      }
    ],
    "專業": [
      {
        "id": "4.2-Z01",
        "question": "金融控股公司規劃AI中台，旗下有銀行、保險、證券等子公司。在兼顧差異性與資源共享下，最適合的架構為何？",
        "options": [
          "A. 聯邦式AI中台：集團共用基礎設施，各子公司保留模型開發自主權",
          "B. 完全集中",
          "C. 完全分散",
          "D. 不建中台"
        ],
        "answer": "A",
        "key_point": "聯邦式AI中台",
        "analysis": "聯邦式架構保留各子公司自主性又共享基礎設施，是集團AI中台的務實方案。"
      },
      {
        "id": "4.2-Z02",
        "question": "在MLOps生命週期管理中，下列哪個環節最常被忽略但至關重要？",
        "options": [
          "A. 模型監控與告警機制，及時發現效能衰退",
          "B. 模型訓練",
          "C. 資料收集",
          "D. 特徵工程"
        ],
        "answer": "A",
        "key_point": "MLOps監控",
        "analysis": "模型上線後的持續監控常被忽略，但資料偏移與概念偏移可能隨時發生。"
      },
      {
        "id": "4.2-Z03",
        "question": "在GPU資源有限的情境下，同時進行模型訓練與即時推論應如何規劃？",
        "options": [
          "A. 使用GPU時間分割(MIG)或分離訓練與推論的資源池",
          "B. 取消訓練",
          "C. 取消推論",
          "D. 增加GPU"
        ],
        "answer": "A",
        "key_point": "GPU調度",
        "analysis": "GPU時間分割或資源池隔離可避免訓練與推論競爭，是資源有限的務實方案。"
      },
      {
        "id": "4.2-Z04",
        "question": "企業欲建立MLOps平台，但IT基礎設施團隊與資料科學團隊對工具選型意見分歧。PM應如何有效推動標準化？",
        "options": [
          "A. 成立跨團隊評估小組，訂立工具評選標準（開源支援度、維運成本、整合性），進行POC後決定",
          "B. 由IT部門決定",
          "C. 由資料科學團隊決定",
          "D. 維持現狀"
        ],
        "answer": "A",
        "key_point": "MLOps工具選型",
        "analysis": "跨團隊協作確保工具選型兼顧開發便利性與維運穩定性，POC驗證可降低決策風險。"
      },
      {
        "id": "4.2-Z05",
        "question": "下列何者是A/B測試在AI模型上線流程中的正確順序？",
        "options": [
          "A. 離線評估→Shadow部署→A/B測試→金絲雀部署→全量上線",
          "B. 直接全量上線",
          "C. 金絲雀→A/B→離線",
          "D. 離線→全量"
        ],
        "answer": "A",
        "key_point": "A/B測試流程",
        "analysis": "Shadow部署比對新舊模型，A/B測試分流真實用戶，金絲雀逐步放量，層層驗證降低上線風險。"
      },
      {
        "id": "4.2-Z06",
        "question": "跨部門AI專案中，業務部門要求的交付時間遠短於資料科學團隊評估的合理時程。PM應如何處理？",
        "options": [
          "A. 與業務協商分階段交付：第一階段MVP（核心功能）→第二階段優化（精準度提升）",
          "B. 接受業務時程",
          "C. 拒絕業務需求",
          "D. 增加工程師人數"
        ],
        "answer": "A",
        "key_point": "分階段交付",
        "analysis": "分階段交付可快速產生價值並建立信任，後續階段根據回饋持續優化，兼顧時程與品質。"
      },
      {
        "id": "4.2-Z07",
        "question": "AI系統規劃中，為確保模型在生產環境的穩定性，最基本的監控項目應包含哪些？",
        "options": [
          "A. 資料品質監控、模型效能監控、基礎設施監控、業務指標監控",
          "B. 僅模型準確率",
          "C. 僅伺服器CPU使用率",
          "D. 僅API回應時間"
        ],
        "answer": "A",
        "key_point": "AI監控面向",
        "analysis": "AI系統監控需從資料層、模型層、系統層到業務層全面覆蓋，缺一不可。"
      },
      {
        "id": "4.2-Z08",
        "question": "企業導入AI時，資訊安全團隊要求模型推論過程必須可稽核。下列哪種架構設計最能滿足此要求？",
        "options": [
          "A. 建立推論日誌系統，記錄每次推論的輸入、輸出、模型版本與時間戳",
          "B. 關閉記錄功能",
          "C. 僅記錄錯誤",
          "D. 不記錄推論過程"
        ],
        "answer": "A",
        "key_point": "推論稽核",
        "analysis": "完整的推論日誌是稽核與問題追蹤的基礎，需記錄所有相關資訊以供後續審查。"
      },
      {
        "id": "4.2-Z09",
        "question": "在規劃地端AI基礎設施時，下列哪項考量最容易被忽略？",
        "options": [
          "A. GPU伺服器的散熱與電力規劃，以及模型儲存與版本管理的儲存架構",
          "B. CPU型號",
          "C. 網路線長度",
          "D. 機櫃顏色"
        ],
        "answer": "A",
        "key_point": "基礎設施規劃",
        "analysis": "GPU高耗電與高發熱是地端AI基礎設施的關鍵挑戰，需提前規劃散熱、電力與儲存方案。"
      },
      {
        "id": "4.2-Z10",
        "question": "企業AI導入規劃中，為確保模型可持續迭代，最關鍵的組織設計為何？",
        "options": [
          "A. 建立AI卓越中心(CoE)，制定標準流程、共享最佳實踐與培訓內部人才",
          "B. 將所有AI工作外包",
          "C. 各部門獨立發展AI",
          "D. 不建立專責組織"
        ],
        "answer": "A",
        "key_point": "AI卓越中心",
        "analysis": "AI CoE集中管理策略與標準、分散執行專案，是推動企業級AI規模化的關鍵組織設計。"
      }
    ]
  },
  "4.3": {
    "基礎": [
      {
        "id": "4.3-B01",
        "question": "AI招募篩選模型對男性履歷偏好明顯高於女性。從風險管理角度，這是哪類風險？",
        "options": [
          "A. 演算法偏見(Algorithmic Bias)，可能違反就業平等法規",
          "B. 模型效能不佳",
          "C. 資料外洩",
          "D. 模型攻擊"
        ],
        "answer": "A",
        "key_point": "演算法偏見",
        "analysis": "AI基於有偏見的訓練資料學到歧視性決策，造成公平性風險與法規問題。"
      },
      {
        "id": "4.3-B02",
        "question": "下列何者是對抗性攻擊(Adversarial Attack)的核心特徵？",
        "options": [
          "A. 在輸入中加入人眼不可見的微小擾動使模型誤判",
          "B. 直接攻擊伺服器",
          "C. 修改模型參數",
          "D. 竊取訓練資料"
        ],
        "answer": "A",
        "key_point": "對抗性攻擊",
        "analysis": "對抗性攻擊透過精心設計的微小擾動欺騙模型，在高風險領域（醫療、自駕）尤其危險。"
      },
      {
        "id": "4.3-B03",
        "question": "下列何者是GDPR對AI系統的主要要求？",
        "options": [
          "A. 資料主體有權要求刪除其個人資料（被遺忘權）",
          "B. 模型必須開源",
          "C. 必須使用深度學習",
          "D. 禁止使用任何自動化決策"
        ],
        "answer": "A",
        "key_point": "GDPR要求",
        "analysis": "GDPR賦予資料主體被遺忘權、資料可攜權等權利，AI系統需支援資料刪除與模型遺忘。"
      },
      {
        "id": "4.3-B04",
        "question": "自駕車的行人偵測模型在夜間與雨天表現驟降。從AI安全管理角度，正確的認知為何？",
        "options": [
          "A. 邊緣場景(edge cases)失效風險需透過全面測試與安全冗餘管理",
          "B. 只在晴天行駛",
          "C. 增加感測器即可",
          "D. 提高夜間行車門檻"
        ],
        "answer": "A",
        "key_point": "邊緣場景風險",
        "analysis": "邊緣場景測試與安全冗餘設計是管理AI極端條件失效風險的關鍵。"
      },
      {
        "id": "4.3-B05",
        "question": "生成式AI產出內容涉及版權爭議。這屬於哪類風險？",
        "options": [
          "A. 智慧財產權風險：生成內容可能侵犯原創者著作權",
          "B. 模型幻覺",
          "C. 資料品質問題",
          "D. 模型效能問題"
        ],
        "answer": "A",
        "key_point": "AI版權風險",
        "analysis": "生成式AI產出可能涉及訓練資料中版權內容的衍生，需注意智財權風險。"
      },
      {
        "id": "4.3-B06",
        "question": "銀行AI信用評分模型對某族群拒絕率顯著較高，但輸入無種族特徵。風險團隊應如何處理？",
        "options": [
          "A. 公平性審計檢查是否有代理特徵(proxy)造成間接歧視",
          "B. 無種族特徵就沒問題",
          "C. 關閉該族群申請",
          "D. 降低整體拒絕率"
        ],
        "answer": "A",
        "key_point": "代理特徵",
        "analysis": "郵遞區號、收入等特徵可能間接代理種族，造成間接歧視。"
      },
      {
        "id": "4.3-B07",
        "question": "下列何者是發布AI模型時最重要的風險管理措施？",
        "options": [
          "A. 提供模型卡(Model Card)說明能力邊界與限制，並附使用條款",
          "B. 完全開源",
          "C. 只發布API",
          "D. 不發布"
        ],
        "answer": "A",
        "key_point": "模型發布風險",
        "analysis": "Model Card記錄模型用途、訓練資料、評估結果、公平性等，供使用者了解限制。"
      },
      {
        "id": "4.3-B08",
        "question": "員工私自使用未經核可的AI工具處理公司業務資料。此風險稱為什麼？",
        "options": [
          "A. Shadow AI風險，可能導致資料外洩與合規問題",
          "B. 模型效能不足",
          "C. 成本超支",
          "D. 生產力下降"
        ],
        "answer": "A",
        "key_point": "Shadow AI",
        "analysis": "未經IT管理的AI使用（Shadow AI）可能造成資料外洩、法規違規等風險。"
      },
      {
        "id": "4.3-B09",
        "question": "AI詐騙偵測系統上線後，詐騙集團開始改變手法繞過偵測。最佳對策？",
        "options": [
          "A. 建立對抗性學習循環：持續收集新手法更新模型",
          "B. 提高偵測門檻",
          "C. 關閉系統",
          "D. 只使用規則"
        ],
        "answer": "A",
        "key_point": "對抗性學習",
        "analysis": "詐騙手法持續演化，AI系統需建立持續學習與更新的機制。"
      },
      {
        "id": "4.3-B10",
        "question": "訓練資料使用公開網路資料後，發現部分內容受版權保護。風險團隊應優先做什麼？",
        "options": [
          "A. 盤點訓練資料來源，評估版權風險並建立資料溯源機制",
          "B. 刪除模型",
          "C. 忽略",
          "D. 關閉系統"
        ],
        "answer": "A",
        "key_point": "資料溯源",
        "analysis": "訓練資料的版權風險需先盤點評估，建立追溯機制是管理的第一步。"
      }
    ],
    "進階": [
      {
        "id": "4.3-J01",
        "question": "金融監理要求銀行提供AI模型決策解釋。使用深度學習模型的銀行應如何滿足此要求？",
        "options": [
          "A. 外掛SHAP/LIME可解釋性工具，並建立效能與可解釋性平衡文件",
          "B. 改用簡單模型",
          "C. 拒絕監理",
          "D. 關閉模型"
        ],
        "answer": "A",
        "key_point": "法規可解釋性",
        "analysis": "SHAP/LIME對黑箱模型提供近似解釋，滿足法規同時維持模型效能。"
      },
      {
        "id": "4.3-J02",
        "question": "下列何者是AI可能造成的社會風險？",
        "options": [
          "A. 大規模失業、資訊繭房與民主受損",
          "B. 伺服器過熱",
          "C. 電費增加",
          "D. 網路延遲"
        ],
        "answer": "A",
        "key_point": "AI社會風險",
        "analysis": "AI取代工作、強化偏見、操控資訊等是更深遠的社會層面風險。"
      },
      {
        "id": "4.3-J03",
        "question": "保險公司使用社交媒體貼文預測保戶健康風險。從倫理角度，下列何者正確？",
        "options": [
          "A. 未經明確同意使用非公開社交資料有重大法律與倫理風險",
          "B. 公開資料沒問題",
          "C. 只要準確即可",
          "D. 已同意使用條款"
        ],
        "answer": "A",
        "key_point": "資料倫理",
        "analysis": "即使技術上可取得，未經明確知情同意使用個資仍有倫理與法規風險。"
      },
      {
        "id": "4.3-J04",
        "question": "PM的風險登錄表：技術風險（機率70%、影響高）、時程風險（50%、中）、法規風險（20%、極高）。應優先處理哪個？",
        "options": [
          "A. 技術風險：機率×影響得分最高，應優先投入資源",
          "B. 法規風險：影響極高",
          "C. 時程風險",
          "D. 全部同時"
        ],
        "answer": "A",
        "key_point": "風險優先序",
        "analysis": "風險優先序=機率×影響，技術風險得分最高應優先處理。"
      },
      {
        "id": "4.3-J05",
        "question": "員工擔心被AI取代而消極抵制。從風險管理角度，這屬於什麼風險？",
        "options": [
          "A. 組織變革風險，需透過溝通與培訓管理",
          "B. 技術風險",
          "C. 法規風險",
          "D. 市場風險"
        ],
        "answer": "A",
        "key_point": "變革風險",
        "analysis": "員工抵制是AI導入常見的組織風險，需主動管理而非僅關注技術。"
      },
      {
        "id": "4.3-J06",
        "question": "關於差分隱私(Differential Privacy)，下列敘述何者正確？",
        "options": [
          "A. 差分隱私透過加入校準雜訊保護個體資訊，隱私預算ε控制保護強度",
          "B. 差分隱私不需調整參數",
          "C. 差分隱私只適用於表格資料",
          "D. 差分隱私會完全消除資料可用性"
        ],
        "answer": "A",
        "key_point": "差分隱私",
        "analysis": "差分隱私在資料或梯度中加入拉普拉斯/高斯雜訊，ε越小隱私保護越強但資料可用性越低。"
      },
      {
        "id": "4.3-J07",
        "question": "關於模型卡(Model Card)的內容，下列何者不包含在內？",
        "options": [
          "A. 模型的訓練硬體成本",
          "B. 模型的預期用途與限制",
          "C. 不同群體的效能評估結果",
          "D. 訓練資料來源與可能偏見"
        ],
        "answer": "A",
        "kp": "Model Card內容",
        "analysis": "Model Card記錄用途、限制、公平性評估、資料資訊等，但不包含硬體成本。"
      },
      {
        "id": "4.3-J08",
        "question": "AI系統發生供應鏈攻擊（使用受污染預訓練模型）時，最有效的偵測方法為何？",
        "options": [
          "A. 使用後門檢測工具分析模型對觸發樣本的反應",
          "B. 檢查程式碼註解",
          "C. 檢查硬體序號",
          "D. 重新命名模型檔案"
        ],
        "answer": "A",
        "kp": "後門檢測",
        "analysis": "後門檢測透過分析模型對特定觸發模式（trigger pattern）的反應來偵測是否遭植入後門。"
      },
      {
        "id": "4.3-J09",
        "question": "AI面試系統被投訴對特定學歷背景有偏見。AI治理團隊應立即採取哪項措施？",
        "options": [
          "A. 進行公平性審計：計算各群體通過率差異，若顯著則重新訓練",
          "B. 繼續使用",
          "C. 刪除系統",
          "D. 忽略投訴"
        ],
        "answer": "A",
        "key_point": "公平性審計",
        "analysis": "公平性審計量化檢測偏見，確有偏見需重新訓練並加入公平性限制。"
      },
      {
        "id": "4.3-J10",
        "question": "AI系統發生資料外洩事件，經調查發現是員工將客戶資料上傳至未經核可的LLM API進行資料分析。從風險管理角度，此事件反映什麼問題？",
        "options": [
          "A. 缺乏Shadow AI管控政策與員工AI使用教育訓練",
          "B. API金鑰太短",
          "C. 網路速度太慢",
          "D. 模型準確率不足"
        ],
        "answer": "A",
        "key_point": "Shadow AI風險",
        "analysis": "Shadow AI（未經核可的AI工具使用）是現代企業AI風險管理的主要挑戰，需從政策與教育兩方面著手。"
      }
    ],
    "專業": [
      {
        "id": "4.3-Z01",
        "question": "跨國企業欲建立符合EU AI Act、GDPR與各地法規的AI治理框架。最完善的框架設計為何？",
        "options": [
          "A. 分級治理：依風險等級制定對應的管制措施、文件要求與審查流程",
          "B. 統一標準",
          "C. 無框架",
          "D. 僅針對高風險"
        ],
        "answer": "A",
        "key_point": "分級AI治理",
        "analysis": "依AI風險分級管理：高風險嚴格管制、低風險彈性處理，平衡法規遵循與創新。"
      },
      {
        "id": "4.3-Z02",
        "question": "Z-score在異常值檢測中的應用，下列敘述何者正確？",
        "options": [
          "A. Z-score衡量數據點與均值的標準差距離，|Z|>3通常視為異常值",
          "B. Z-score=0表示數據異常",
          "C. Z-score不需計算標準差",
          "D. Z-score僅適用於類別資料"
        ],
        "answer": "A",
        "key_point": "Z-score異常檢測",
        "analysis": "Z-score=(x-μ)/σ，|Z|>3表示數據距均值超過3個標準差，在常態分布下僅0.3%機率。"
      },
      {
        "id": "4.3-Z03",
        "question": "關於AI公平性的評估方法，下列敘述何者正確？",
        "options": [
          "A. 可透過計算各群體的正率率差異(demographic parity)或均等機會(equal opportunity)量化",
          "B. 公平性無法量化",
          "C. 只要移除敏感特徵就保證公平",
          "D. 公平性與準確率完全正相關"
        ],
        "answer": "A",
        "key_point": "公平性量化",
        "analysis": "公平性可透過統計指標量化，如人口統計平權（各群體正率相同）或均等機會（各群體TPR相同）。"
      },
      {
        "id": "4.3-Z04",
        "question": "AI風險管理架構中，為因應模型在生產環境中的概念偏移(concept drift)，最有效的監控機制為何？",
        "options": [
          "A. 建立自動化模型效能監控管線，定期計算滑動窗口的預測準確率並設定告警閾值",
          "B. 每月人工檢視模型",
          "C. 關閉模型更新",
          "D. 僅監控CPU使用率"
        ],
        "answer": "A",
        "key_point": "概念偏移監控",
        "analysis": "自動化監控管線可即時偵測模型效能衰退，滑動窗口計算確保偵測到近期概念變化。"
      },
      {
        "id": "4.3-Z05",
        "question": "生成式AI系統生成之內容被用於製作假新聞，組織可能面臨哪些法律責任？",
        "options": [
          "A. 依各國AI責任法規，組織可能需對AI系統輸出承擔民事甚至刑事責任",
          "B. 無法律責任",
          "C. 僅模型開發者負責",
          "D. 僅使用者負責"
        ],
        "answer": "A",
        "key_point": "AI法律責任",
        "analysis": "各國逐步建立AI責任框架，部署AI系統的組織通常被視為最終責任主體。"
      },
      {
        "id": "4.3-Z06",
        "question": "AI風險管理中，模型的可解釋性對於風險控制的重要性為何？",
        "options": [
          "A. 可解釋性有助於偵測模型偏見、確認決策合理性，並滿足法規合規要求",
          "B. 可解釋性不重要",
          "C. 只影響模型效能",
          "D. 僅用於學術研究"
        ],
        "answer": "A",
        "key_point": "可解釋性風險管理",
        "analysis": "可解釋性讓風險管理者能理解模型決策邏輯，是辨識偏見、確保合規與建立信任的關鍵工具。"
      },
      {
        "id": "4.3-Z07",
        "question": "企業建立AI風險登錄表時，下列哪種方法最能確保風險評估的完整性？",
        "options": [
          "A. 採用ISO 31000風險管理框架，從技術、營運、法規、聲譽等多面向系統性識別風險",
          "B. 僅記錄技術風險",
          "C. 僅記錄已知問題",
          "D. 由一人主觀判斷"
        ],
        "answer": "A",
        "key_point": "AI風險登錄",
        "analysis": "ISO 31000提供系統性風險識別與評估方法，多面向檢視確保不遺漏重要風險類別。"
      },
      {
        "id": "4.3-Z08",
        "question": "AI模型被監理機關要求提供決策解釋，但該模型為深度神經網路。風險團隊應如何回應？",
        "options": [
          "A. 使用SHAP/LIME等事後解釋工具提供近似解釋，同時說明黑箱模型的限制",
          "B. 拒絕監理要求",
          "C. 改用線性模型",
          "D. 關閉模型"
        ],
        "answer": "A",
        "key_point": "黑箱模型解釋",
        "analysis": "事後解釋方法在不更動模型架構的前提下提供近似解釋，是目前黑箱模型合規的主流做法。"
      },
      {
        "id": "4.3-Z09",
        "question": "某公司使用AI進行員工績效評估，模型對女性員工的評分系統性偏低。從AI治理角度，最關鍵的補救措施為何？",
        "options": [
          "A. 進行公平性審計找出偏見來源，重新收集平衡的訓練資料並加入公平性限制重新訓練",
          "B. 手動調高女性分數",
          "C. 停用AI評估",
          "D. 忽略此差異"
        ],
        "answer": "A",
        "key_point": "AI偏見補救",
        "analysis": "公平性審計可量化偏見程度，重新訓練從根源解決問題，加入公平性限制防止偏見再次出現。"
      },
      {
        "id": "4.3-Z10",
        "question": "AI系統在部署後發生資料洩漏事故，事故調查發現MLOps管線未對訓練資料進行去識別化。從風險管理角度，這是哪個環節的缺失？",
        "options": [
          "A. 資料治理與安全管控流程缺失，未在資料處理管線中嵌入去識別化步驟",
          "B. 模型架構問題",
          "C. 硬體加密不足",
          "D. 網路安全問題"
        ],
        "answer": "A",
        "key_point": "資料安全管控",
        "analysis": "資料去識別化應嵌入MLOps管線中作為標準步驟，而非事後補救措施。"
      }
    ]
  },
  "5.1": {
    "基礎": [
      {
        "id": "5.1-B01",
        "question": "資料集中30%的「年齡」欄位為空值。處理缺失值的最適合初步策略為何？",
        "options": [
          "A. 先分析缺失模式（隨機/非隨機），再選擇填充策略",
          "B. 直接刪除空值行",
          "C. 全部填0",
          "D. 忽略缺失值"
        ],
        "answer": "A",
        "key_point": "缺失值策略",
        "analysis": "缺失值處理取決於缺失機制（MCAR/MAR/MNAR），需先分析再選擇合適方法。"
      },
      {
        "id": "5.1-B02",
        "question": "購買預測模型中90%客戶從未購買、10%有購買紀錄。應如何處理類別不平衡？",
        "options": [
          "A. 下採樣多數類或上採樣少數類，或使用加權損失函數",
          "B. 刪除多數類",
          "C. 刪除少數類",
          "D. 不做處理"
        ],
        "answer": "A",
        "key_point": "不平衡處理",
        "analysis": "類別不平衡可透過採樣策略或加權損失函數處理，方法選擇取決於資料量與問題特性。"
      },
      {
        "id": "5.1-B03",
        "question": "兩名標註員標註同一批圖片，A標為「貓」、B將其中15張標為「動物」。這是什麼問題？",
        "options": [
          "A. 標註者間不一致性，需建立統一標註規範",
          "B. 圖片品質問題",
          "C. 模型訓練問題",
          "D. 儲存空間問題"
        ],
        "answer": "A",
        "key_point": "標註一致性",
        "analysis": "不同標註者標準不一致是常見資料品質問題，需標準化標註規範與品質抽查。"
      },
      {
        "id": "5.1-B04",
        "question": "將客戶年齡分組（18-25、26-35、36-45）作為模型輸入。這是哪種特徵工程？",
        "options": [
          "A. 離散化(Discretization)將連續變數轉類別",
          "B. 標準化",
          "C. 正規化",
          "D. 降維"
        ],
        "answer": "A",
        "key_point": "離散化",
        "analysis": "分箱將連續變數轉為有序類別，可處理非線性關係並減少異常值影響。"
      },
      {
        "id": "5.1-B05",
        "question": "模型使用「客戶ID」作為特徵，測試表現好但上線後完全失效。原因是？",
        "options": [
          "A. 客戶ID是唯一標識符，模型記憶ID與標籤對應但無法泛化到新客戶",
          "B. ID特徵重要",
          "C. 資料量不足",
          "D. 模型太小"
        ],
        "answer": "A",
        "key_point": "唯一標識符",
        "analysis": "唯一ID作為特徵造成資料洩漏與過擬合，模型學到的是記憶而非可泛化的模式。"
      },
      {
        "id": "5.1-B06",
        "question": "特徵X1~X100中部分特徵相關係數高達0.95。對線性模型造成什麼影響？",
        "options": [
          "A. 多重共線性使係數估計不穩定",
          "B. 加速訓練",
          "C. 提升準確率",
          "D. 無影響"
        ],
        "answer": "A",
        "key_point": "多重共線性",
        "analysis": "高度相關特徵造成多重共線性，使線性模型係數估計不穩定且難以解釋。"
      },
      {
        "id": "5.1-B07",
        "question": "「台北市立動物園」被切成「台北市/立/動物園」。應如何改善分詞結果？",
        "options": [
          "A. 使用更長匹配詞典或BERT-based分詞器，加入領域專有名詞",
          "B. 忽略",
          "C. 改用英文",
          "D. 手動分詞"
        ],
        "answer": "A",
        "key_point": "中文分詞改善",
        "analysis": "中文分詞需詞典輔助與上下文理解，BERT-based分詞器可更好處理歧義。"
      },
      {
        "id": "5.1-B08",
        "question": "合併兩張資料表時，相同客戶ID格式不同（A表數字、B表CUST_數字）。正確步驟？",
        "options": [
          "A. 建立ID映射表標準化格式後再合併",
          "B. 直接字串合併",
          "C. 忽略",
          "D. 只用A表"
        ],
        "answer": "A",
        "key_point": "資料整合",
        "analysis": "整合異質資料源需先建立標準化映射關係，否則會造成資料錯亂。"
      },
      {
        "id": "5.1-B09",
        "question": "時間序列預測中，2020年COVID造成極端值。處理方式何者正確？",
        "options": [
          "A. 保留資料但標記異常期間，或使用穩健統計方法",
          "B. 直接刪除2020年",
          "C. 不做處理",
          "D. 替換為平均值"
        ],
        "answer": "A",
        "key_point": "異常值處理",
        "analysis": "極端事件保留但標記，讓模型學習正常模式同時知道異常期間的存在。"
      },
      {
        "id": "5.1-B10",
        "question": "「年收入」欄位出現-999、0、999999等不合理值。最佳處理流程？",
        "options": [
          "A. 先釐清各值的含義（缺失/拒答/錯誤），再對應處理",
          "B. 全部刪除",
          "C. 全部填中位數",
          "D. 忽略"
        ],
        "answer": "A",
        "key_point": "異常值辨識",
        "analysis": "不合理值可能是缺失代碼或輸入錯誤，需先理解含義再針對性處理。"
      }
    ],
    "進階": [
      {
        "id": "5.1-J01",
        "question": "資料團隊發現標籤(y)與特徵(X)存在時序洩漏。最典型的例子為何？",
        "options": [
          "A. 使用t時刻的股價預測t時刻的漲跌—特徵與標籤同時發生",
          "B. 使用歷史資料",
          "C. 使用落後指標",
          "D. 使用外部資料"
        ],
        "answer": "A",
        "key_point": "時序洩漏",
        "analysis": "用當下特徵預測當下標籤造成時序洩漏，應確保特徵時間早於標籤時間。"
      },
      {
        "id": "5.1-J02",
        "question": "PCA降維後分類器泛化能力提升但準確率略降。下列解釋何者正確？",
        "options": [
          "A. PCA去除雜訊與冗餘維度降低過擬合，但可能丟失部分判別資訊",
          "B. PCA一定有損",
          "C. PCA無作用",
          "D. 降維總是提升準確率"
        ],
        "answer": "A",
        "key_point": "PCA權衡",
        "analysis": "PCA降維在去除雜訊與保留判別資訊間權衡，可提升泛化但可能犧牲些微準確率。"
      },
      {
        "id": "5.1-J03",
        "question": "影像資料增強中的隨機水平翻轉對哪種應用可能造成問題？",
        "options": [
          "A. 文字辨識（鏡像文字無意義）與左右不對稱物體偵測",
          "B. 所有應用",
          "C. 都安全",
          "D. 僅風景照"
        ],
        "answer": "A",
        "key_point": "資料增強限制",
        "analysis": "資料增強需考慮應用場景，不當的增強會破壞資料的語意（如鏡像文字）。"
      },
      {
        "id": "5.1-J04",
        "question": "文本預處理中，將所有英文字母轉小寫後模型準確率反而下降。為什麼？",
        "options": [
          "A. 大寫字母攜帶重要語意（專有名詞、強調），全部小寫丟失此資訊",
          "B. 小寫處理有bug",
          "C. 分詞器問題",
          "D. 訓練資料太少"
        ],
        "answer": "A",
        "key_point": "大小寫資訊",
        "analysis": "語言中的大小寫攜帶語意資訊，盲目標準化可能造成資訊損失。"
      },
      {
        "id": "5.1-J05",
        "question": "如何偵測訓練集與測試集的多變量聯合分布不一致？",
        "options": [
          "A. 使用對抗驗證：訓練分類器區分訓練與測試樣本，若有效說明分布不同",
          "B. 無法偵測",
          "C. 目視檢查",
          "D. 計算平均值"
        ],
        "answer": "A",
        "key_point": "對抗驗證",
        "analysis": "對抗驗證訓練二分類器分辨訓練/測試樣本，若分類器有效表示兩者分布不同。"
      },
      {
        "id": "5.1-J06",
        "question": "標註外包驗收整體準確率95%，但模型對特定類別表現極差。原因最可能是？",
        "options": [
          "A. 不同類別標註品質不均，少數類別錯誤率更高",
          "B. 模型架構問題",
          "C. 訓練參數問題",
          "D. 硬體問題"
        ],
        "answer": "A",
        "key_point": "標註品質不均",
        "analysis": "整體標註品質高不代表各類別均勻，少數類別常因樣本少被忽略造成品質低落。"
      },
      {
        "id": "5.1-J07",
        "question": "IQR(四分位距)方法中的異常值判定標準為何？",
        "options": [
          "A. 低於Q1-1.5×IQR或高於Q3+1.5×IQR的數據點",
          "B. 低於均值",
          "C. 高於均值",
          "D. 等於中位數"
        ],
        "answer": "A",
        "key_point": "IQR異常檢測",
        "analysis": "IQR=Q3-Q1，常用1.5×IQR作為溫和異常值門檻，3×IQR作為極端異常值門檻。"
      },
      {
        "id": "5.1-J08",
        "question": "關於特徵選擇(Feature Selection)與特徵抽取(Feature Extraction)的差異，下列何者正確？",
        "options": [
          "A. 特徵選擇保留原始特徵子集，特徵抽取建立新特徵組合",
          "B. 兩者相同",
          "C. 特徵抽取保留原始特徵",
          "D. 特徵選擇建立新特徵"
        ],
        "answer": "A",
        "key_point": "選擇vs抽取",
        "analysis": "特徵選擇選取原始特徵的子集；特徵抽取（如PCA）透過變換建立新的組合特徵。"
      },
      {
        "id": "5.1-J09",
        "question": "推薦系統的使用者觀看紀錄有倖存者偏差：僅留存用戶有完整紀錄，已流失用戶資料截斷。若不修正會造成什麼？",
        "options": [
          "A. 模型高估使用者滿意度與留存率，因訓練資料偏向滿意用戶",
          "B. 更準確",
          "C. 無影響",
          "D. 訓練加速"
        ],
        "answer": "A",
        "key_point": "倖存者偏差",
        "analysis": "僅留存用戶資料造成模型對整體用戶的評估偏樂觀，需校正偏差。"
      },
      {
        "id": "5.1-J10",
        "question": "資料科學家在處理串流資料時，發現訓練資料與即時資料的分布逐漸偏移。在無法立即重新訓練模型的情況下，應優先採取哪項措施？",
        "options": [
          "A. 建立資料分布監控告警，並使用線上學習或增量學習方法持續更新模型",
          "B. 忽略偏移繼續使用",
          "C. 暫停所有推論",
          "D. 使用舊模型"
        ],
        "answer": "A",
        "key_point": "資料偏移應對",
        "analysis": "線上學習可在不重新訓練完整模型的情況下逐步適應資料分布變化，監控告警確保及時發現重大偏移。"
      }
    ],
    "專業": [
      {
        "id": "5.1-Z01",
        "question": "多模態AI專案的資料包含表格、文本、圖片與感測器資料。最適合的資料工程架構為何？",
        "options": [
          "A. 資料管線框架(Kubeflow/Airflow)定義DAG，各模態處理封裝為可重複元件",
          "B. 手動處理",
          "C. 只用Excel",
          "D. 各模態獨立處理"
        ],
        "answer": "A",
        "key_point": "資料管線架構",
        "analysis": "統一資料管線框架確保訓練與推論處理一致，DAG管理多模態處理流程。"
      },
      {
        "id": "5.1-Z02",
        "question": "AutoML在特徵工程中的自動化能力包含下列哪項？",
        "options": [
          "A. 自動生成交叉特徵、選擇重要特徵與進行特徵變換",
          "B. 自動收集原始資料",
          "C. 自動標註資料",
          "D. 自動部署模型"
        ],
        "answer": "A",
        "key_point": "AutoML特徵工程",
        "analysis": "AutoML可自動探索特徵組合、篩選重要特徵與選擇最佳變換方式。"
      },
      {
        "id": "5.1-Z03",
        "question": "下列哪種情況最適合使用SMOTE進行上採樣？",
        "options": [
          "A. 少數類樣本量少但非極端稀少，且特徵空間中少數類可形成聚類",
          "B. 資料量非常大",
          "C. 所有特徵都是類別型",
          "D. 多數類樣本極少"
        ],
        "answer": "A",
        "key_point": "SMOTE適用場景",
        "analysis": "SMOTE在少數類樣本間內插合成新樣本，適合少數類可形成聚類的場景。"
      },
      {
        "id": "5.1-Z04",
        "question": "在大型資料集中進行資料清洗時，發現有5%的記錄存在邏輯矛盾（如「男性」欄位中出現「懷孕」）。最有效的處理策略為何？",
        "options": [
          "A. 建立跨欄位驗證規則自動標記矛盾記錄，由領域專家審閱後決定保留或刪除",
          "B. 直接刪除所有矛盾記錄",
          "C. 忽略矛盾",
          "D. 修改資料以符合規則"
        ],
        "answer": "A",
        "key_point": "資料驗證",
        "analysis": "跨欄位驗證規則可自動偵測邏輯矛盾，領域專家判斷保留哪些記錄，平衡資料量與品質。"
      },
      {
        "id": "5.1-Z05",
        "question": "資料管線中發現部分特徵在訓練與測試階段的產生方式不一致（如訓練用平均數填補缺失值，測試用中位數）。此問題稱為什麼？",
        "options": [
          "A. 訓練-推論偏差(Training-Serving Skew)，需確保特徵工程邏輯完全一致",
          "B. 概念偏移",
          "C. 資料漂移",
          "D. 模型老化"
        ],
        "answer": "A",
        "key_point": "訓練推論偏差",
        "analysis": "訓練與推論階段的資料處理不一致是ML系統常見的錯誤來源，需透過Feature Store或管線標準化確保一致。"
      },
      {
        "id": "5.1-Z06",
        "question": "數據團隊需要處理百萬級別的高維度稀疏資料（如推薦系統的用戶-商品矩陣）。下列哪種儲存與處理方式最有效率？",
        "options": [
          "A. 使用稀疏矩陣儲存格式，搭配分散式計算框架處理",
          "B. 轉為稠密矩陣",
          "C. 使用Excel",
          "D. 使用關聯式資料庫"
        ],
        "answer": "A",
        "key_point": "稀疏資料處理",
        "analysis": "稀疏矩陣僅儲存非零元素，大幅減少記憶體使用；分散式計算框架可平行處理大規模資料。"
      },
      {
        "id": "5.1-Z07",
        "question": "資料品質管理中，資料的「一致性」維度指的是什麼？",
        "options": [
          "A. 同一筆資料在不同系統或時間點的值應保持一致，無矛盾",
          "B. 資料量足夠大",
          "C. 資料格式統一",
          "D. 資料無缺失值"
        ],
        "answer": "A",
        "key_point": "資料一致性",
        "analysis": "一致性確保同一實體在不同資料源或不同時間點的數值不互相矛盾，是資料品質的關鍵維度。"
      },
      {
        "id": "5.1-Z08",
        "question": "團隊欲建立可重複的資料處理管線，但目前的資料預處理腳本散落在各工程師的個人電腦中。下列哪種做法最能解決此問題？",
        "options": [
          "A. 將所有資料處理邏輯容器化並版本控制，使用DAG排程工具統一管理",
          "B. 集中到一台伺服器",
          "C. 使用共享資料夾",
          "D. 由一人負責維護"
        ],
        "answer": "A",
        "key_point": "資料管線標準化",
        "analysis": "容器化確保執行環境一致，版本控制追蹤變更，DAG排程工具管理依賴關係與執行順序。"
      },
      {
        "id": "5.1-Z09",
        "question": "在處理時間序列資料的缺失值時，最適合的填補方法為？",
        "options": [
          "A. 向前填補(forward fill)或線性插值，利用時間序列的連續性進行合理推估",
          "B. 填0",
          "C. 填平均值",
          "D. 刪除缺失時間點"
        ],
        "answer": "A",
        "key_point": "時間序列填補",
        "analysis": "時間序列資料具有時間相依性，向前填補或線性插值利用鄰近數據點推估，比全域統計值更合理。"
      },
      {
        "id": "5.1-Z10",
        "question": "隱私保護法規要求訓練資料不能包含個人可識別資訊(PII)。在資料準備階段，應如何系統性處理PII？",
        "options": [
          "A. 建立PII自動偵測與去識別化管線（遮罩/泛化/偽匿名化），並記錄處理方式",
          "B. 人工檢查",
          "C. 忽略PII",
          "D. 刪除所有文字欄位"
        ],
        "answer": "A",
        "key_point": "PII保護",
        "analysis": "自動化PII偵測結合多種去識別化技術，可在保護隱私的同時保留資料的分析價值。"
      }
    ]
  },
  "5.2": {
    "基礎": [
      {
        "id": "5.2-B01",
        "question": "將AI模型集成到現有ERP系統。最適合的架構模式為何？",
        "options": [
          "A. 將模型封裝為REST API微服務，ERP透過API呼叫取得推論結果",
          "B. 模型程式碼直接嵌入ERP",
          "C. 手動複製貼上",
          "D. 使用共用檔案"
        ],
        "answer": "A",
        "key_point": "微服務集成",
        "analysis": "模型封裝為獨立API服務是標準集成模式，鬆耦合利於維護與擴展。"
      },
      {
        "id": "5.2-B02",
        "question": "AI模型每天從資料倉儲讀取新資料進行批次預測。最佳實踐為何？",
        "options": [
          "A. 使用ETL排程工具(Airflow)管理批次管線並監控執行狀態",
          "B. 手動執行",
          "C. 寫死時間定時執行",
          "D. 不使用排程"
        ],
        "answer": "A",
        "key_point": "批次排程",
        "analysis": "排程工具管理批次流程，提供監控、錯誤處理與重試機制。"
      },
      {
        "id": "5.2-B03",
        "question": "下列哪項不是第三方API集成時必須考慮的事項？",
        "options": [
          "A. API的程式語言",
          "B. API可用性SLA",
          "C. API速率限制",
          "D. API回應格式"
        ],
        "answer": "A",
        "key_point": "API集成考量",
        "analysis": "程式語言不影響API集成，重點是SLA、速率限制與格式兼容性。"
      },
      {
        "id": "5.2-B04",
        "question": "模型需對串流資料即時評分。最適合的部署方式為何？",
        "options": [
          "A. 部署為串流處理器(Kafka Streams/Flink)直接在資料流中推論",
          "B. 批次寫入後再讀取",
          "C. 每天批次一次",
          "D. 手動處理"
        ],
        "answer": "A",
        "key_point": "串流推論",
        "analysis": "串流處理器在資料流中即時推論，避免批次寫入讀取的延遲。"
      },
      {
        "id": "5.2-B05",
        "question": "模型推論在Kubernetes上記憶體波動大。最重要的資源管理策略？",
        "options": [
          "A. 設定resource limits/requests並啟用水平自動伸縮(HPA)",
          "B. 固定最大記憶體",
          "C. 不設限制",
          "D. 使用最大規格實例"
        ],
        "answer": "A",
        "key_point": "K8s資源管理",
        "analysis": "設定資源限制防止單一服務影響其他服務，HPA根據負載自動調整實例數。"
      },
      {
        "id": "5.2-B06",
        "question": "AI輸出JSON但下游系統需XML。解決方案？",
        "options": [
          "A. 在API網關或適配層進行格式轉換",
          "B. 修改AI模型",
          "C. 修改下游系統",
          "D. 忽略格式差異"
        ],
        "answer": "A",
        "key_point": "格式轉換",
        "analysis": "適配層在系統間進行格式轉換，避免修改任一方核心邏輯。"
      },
      {
        "id": "5.2-B07",
        "question": "多模型統一管理與部署，最適合的架構為何？",
        "options": [
          "A. 推論平台(Kserve/Seldon)統一管理多模型部署與A/B測試",
          "B. 各模型獨立部署",
          "C. 全部放同一伺服器",
          "D. 手動管理"
        ],
        "answer": "A",
        "key_point": "推論平台",
        "analysis": "推論平台提供模型註冊、部署、監控與A/B測試等統一管理功能。"
      },
      {
        "id": "5.2-B08",
        "question": "整合既有IT架構時，舊系統用SOAP、新AI服務用REST。最適合的整合方式？",
        "options": [
          "A. 建立ESB/API Gateway處理協議轉換",
          "B. 改寫舊系統",
          "C. 改寫AI服務",
          "D. 放棄"
        ],
        "answer": "A",
        "key_point": "協議轉換",
        "analysis": "ESB/API Gateway可處理不同協議間的轉換，無需改寫現有系統。"
      },
      {
        "id": "5.2-B09",
        "question": "Docker容器化模型服務後映像檔5GB造成部署緩慢。如何有效減小？",
        "options": [
          "A. 多階段構建只保留執行環境與模型檔案",
          "B. 壓縮映像檔",
          "C. 使用更大硬碟",
          "D. 不分層"
        ],
        "answer": "A",
        "key_point": "容器優化",
        "analysis": "多階段構建只複製執行產物到最終映像，避免包含構建工具與中間檔案。"
      },
      {
        "id": "5.2-B10",
        "question": "多個AI服務彼此依賴（STT→NLU→TTS）。如何處理服務間依賴與容錯？",
        "options": [
          "A. 使用Service Mesh搭配熔斷器(circuit breaker)與重試機制",
          "B. 直接HTTP呼叫",
          "C. 共享資料庫",
          "D. 單體架構"
        ],
        "answer": "A",
        "key_point": "服務網格",
        "analysis": "Service Mesh管理微服務通訊，Circuit breaker防止級聯故障。"
      }
    ],
    "進階": [
      {
        "id": "5.2-J01",
        "question": "新模型A/B測試線指標提升5%但p-value=0.08。PM應如何決策？",
        "options": [
          "A. 不顯著，需延長測試或增加樣本量(p>0.05差異可能來自隨機)",
          "B. 直接全量上線",
          "C. 新模型較好",
          "D. 放棄"
        ],
        "answer": "A",
        "key_point": "A/B測試",
        "analysis": "p>0.05表示觀察到的差異無法排除隨機因素，不應貿然全量上線。"
      },
      {
        "id": "5.2-J02",
        "question": "多雲架構中，模型在A雲訓練、B雲推論。最大的技術挑戰？",
        "options": [
          "A. 跨雲環境一致性：容器化確保訓練與推論環境相同",
          "B. 網路速度",
          "C. 儲存成本",
          "D. 授權費用"
        ],
        "answer": "A",
        "key_point": "多雲一致性",
        "analysis": "容器化確保訓練與推論環境一致，避免環境差異造成模型表現異常。"
      },
      {
        "id": "5.2-J03",
        "question": "AI API上線後同時大量請求時部分逾時。最適合的流量控制策略？",
        "options": [
          "A. 限流(rate limiting)+請求排隊+降級服務",
          "B. 拒絕所有請求",
          "C. 增加逾時時間",
          "D. 忽略"
        ],
        "answer": "A",
        "key_point": "流量控制",
        "analysis": "限流保護服務不被衝垮，請求排隊平滑處理，降級服務在超載時提供部分功能。"
      },
      {
        "id": "5.2-J04",
        "question": "客戶IT環境不同（AWS/Azure/地端），模型需部署在客戶環境內。最佳部署策略？",
        "options": [
          "A. 容器化+Helm Chart支援多雲/地端部署",
          "B. 只支援一種",
          "C. 客戶自行部署",
          "D. 只在公司內部部署"
        ],
        "answer": "A",
        "key_point": "多環境部署",
        "analysis": "容器化+K8s部署腳本可標準化多環境部署流程，降低客戶部署難度。"
      },
      {
        "id": "5.2-J05",
        "question": "關於CI/CD在ML中的應用，下列敘述何者正確？",
        "options": [
          "A. CI/CD自動化模型訓練、測試與部署流程，確保快速迭代",
          "B. CI/CD只適用於傳統軟體",
          "C. CI/CD不包含模型測試",
          "D. CI/CD僅自動化部署"
        ],
        "answer": "A",
        "key_point": "ML CI/CD",
        "analysis": "ML CI/CD自動化從資料處理、模型訓練、測試到部署的完整流程。"
      },
      {
        "id": "5.2-J06",
        "question": "部署後的模型監控中，下列哪項不屬於data drift的偵測範圍？",
        "options": [
          "A. 模型參數的變化",
          "B. 輸入特徵的分布變化",
          "C. 預測結果的分布變化",
          "D. 特徵與標籤關係的變化"
        ],
        "answer": "A",
        "key_point": "data drift",
        "analysis": "Data drift偵測輸入資料分布、預測分布與特徵-標籤關係的變化，而非模型參數。"
      },
      {
        "id": "5.2-J07",
        "question": "微服務架構中，模型服務的API版本管理最佳實踐為何？",
        "options": [
          "A. URI路徑版本(v1/v2)+向後相容確保舊版客戶端不受影響",
          "B. 不管理版本",
          "C. 每次更新改URL",
          "D. 僅保留最新版本"
        ],
        "answer": "A",
        "key_point": "API版本管理",
        "analysis": "URI版本管理搭配向後相容，確保模型更新不影響既有客戶端。"
      },
      {
        "id": "5.2-J08",
        "question": "模型上線後的監控中，發現預測類別分布逐漸偏移。這表示什麼？",
        "options": [
          "A. 可能發生資料偏移(data drift)或概念偏移(concept drift)，需調查原因",
          "B. 正常現象",
          "C. 模型自動適應",
          "D. 無需處理"
        ],
        "answer": "A",
        "key_point": "概念偏移",
        "analysis": "預測分布偏移可能是資料分布改變（data drift）或特徵-標籤關係改變（concept drift）。"
      },
      {
        "id": "5.2-J09",
        "question": "關於邊緣AI部署的模型壓縮技術，下列何者正確？",
        "options": [
          "A. 剪枝(pruning)移除不重要權重，量化(quantization)降低精度，兩者可疊加使用",
          "B. 剪枝比量化效果好",
          "C. 壓縮後模型一定無法使用",
          "D. 量化只能用在GPU"
        ],
        "answer": "A",
        "key_point": "模型壓縮技術",
        "analysis": "剪枝與量化可疊加使用，剪枝減少參數量，INT8量化減少75%儲存，疊加效果顯著。"
      },
      {
        "id": "5.2-J10",
        "question": "企業將AI模型部署為容器化微服務後，發現每次模型更新都需要手動更新API端點與負載平衡器設定。下列哪種做法最能解決此問題？",
        "options": [
          "A. 使用服務網格(Service Mesh)搭配K8s Ingress統一管理流量路由與版本切換",
          "B. 每次更新都重啟伺服器",
          "C. 使用固定IP",
          "D. 關閉負載平衡"
        ],
        "answer": "A",
        "key_point": "服務網格",
        "analysis": "服務網格抽象化流量管理，支援金絲雀部署、A/B測試與版本路由，無需手動修改基礎設施設定。"
      }
    ],
    "專業": [
      {
        "id": "5.2-Z01",
        "question": "大型電商需建立全球多模型AI服務平台，要求即時推論(<50ms)與非同步批次，全球部署。最適合的整體架構為何？",
        "options": [
          "A. 全球多區域K8s集群+統一API Gateway路由+本地推論節點+跨區域容災",
          "B. 單一資料中心",
          "C. 僅中國",
          "D. 僅海外"
        ],
        "answer": "A",
        "key_point": "全球AI架構",
        "analysis": "多區域K8s就近服務當地用戶，API Gateway全局路由，跨區域容災提升可用性。"
      },
      {
        "id": "5.2-Z02",
        "question": "將AI模型包裝為SaaS產品提供給客戶時，下列哪種計費模式最能兼顧客戶需求與廠商收益？",
        "options": [
          "A. 按API呼叫次數計費，提供不同層級(吞吐量/SLA)的方案",
          "B. 固定年費",
          "C. 終身買斷",
          "D. 免費"
        ],
        "answer": "A",
        "key_point": "AI服務計費",
        "analysis": "按用量計費彈性高，分層方案滿足不同規模客戶，是最常見的AI SaaS計費模式。"
      },
      {
        "id": "5.2-Z03",
        "question": "下列哪一種是AI模型A/B測試時應建立的正確評估指標？",
        "options": [
          "A. 同時監控業務指標（轉換率、使用者滿意度）與模型指標（準確率）",
          "B. 僅模型準確率",
          "C. 僅業務指標",
          "D. 僅推論延遲"
        ],
        "answer": "A",
        "key_point": "A/B測試指標",
        "analysis": "A/B測試需同時關注模型技術指標與業務成效指標，才能全面評估模型影響。"
      },
      {
        "id": "5.2-Z04",
        "question": "製造業欲將AI瑕疵檢測模型部署至產線邊緣裝置，但不同產線的硬體規格差異大。最有效的部署策略為何？",
        "options": [
          "A. 使用ONNX/TensorRT統一模型格式，依各裝置算力選擇不同的量化等級與模型變體",
          "B. 為每條產線獨立開發模型",
          "C. 只部署在最高規格產線",
          "D. 使用雲端推論"
        ],
        "answer": "A",
        "key_point": "邊緣模型部署",
        "analysis": "ONNX/TensorRT提供跨平台模型格式標準化，依裝置算力選擇量化等級，可兼顧部署效率與各裝置效能。"
      },
      {
        "id": "5.2-Z05",
        "question": "金融業的AI模型必須通過監理機關的模型驗證，但模型由外部廠商訓練。從系統整合角度，應如何確保合規？",
        "options": [
          "A. 要求廠商提供完整的模型開發文件（訓練資料、特徵清單、驗證報告），並建立內部獨立驗證流程",
          "B. 信任廠商口頭保證",
          "C. 自行重新訓練",
          "D. 忽略合規需求"
        ],
        "answer": "A",
        "key_point": "第三方模型合規",
        "analysis": "第三方模型仍需通過內部驗證，需建立完整的文件要求與驗證流程來滿足監理合規。"
      },
      {
        "id": "5.2-Z06",
        "question": "AI系統整合時發現，資料庫讀取效能成為推論管線的瓶頸（模型推論僅5ms，但資料讀取需50ms）。最有效的解決方案為何？",
        "options": [
          "A. 使用記憶體快取(Redis)預載熱資料，配合非同步預讀機制",
          "B. 升級資料庫硬體",
          "C. 減少資料欄位",
          "D. 使用更慢的模型"
        ],
        "answer": "A",
        "key_point": "推論管線優化",
        "analysis": "記憶體快取大幅減少IO延遲，非同步預讀隱藏資料讀取時間，是解決資料瓶頸的主流方案。"
      },
      {
        "id": "5.2-Z07",
        "question": "公司有多個AI模型分散在不同K8s命名空間中，缺乏統一的監控儀表板。下列哪種方案最能集中管理？",
        "options": [
          "A. 部署Prometheus+Grafana監控堆疊，各模型服務統一暴露/metrics端點",
          "B. 每個模型獨立監控",
          "C. 使用Excel記錄",
          "D. 不監控"
        ],
        "answer": "A",
        "key_point": "統一模型監控",
        "analysis": "Prometheus收集各服務指標，Grafana提供統一儀表板，是微服務架構下標準的監控方案。"
      },
      {
        "id": "5.2-Z08",
        "question": "將ML模型以REST API提供服務時，為確保高可用性與動態擴縮，最適合的部署模式為何？",
        "options": [
          "A. 將模型包裝為容器化無狀態服務，透過K8s HPA自動擴縮",
          "B. 單一伺服器部署",
          "C. 使用排程任務",
          "D. 部署為批次作業"
        ],
        "answer": "A",
        "key_point": "REST API部署",
        "analysis": "無狀態容器化確保水平擴展無障礙，K8s HPA依負載自動調整實例數，是高可用性服務的標準作法。"
      },
      {
        "id": "5.2-Z09",
        "question": "AI系統整合時，模型需要呼叫外部API取得輔助資料，但外部API延遲不穩定。如何設計容錯機制？",
        "options": [
          "A. 加入快取層、熔斷器(Circuit Breaker)與降級回退策略(fallback)",
          "B. 無視延遲",
          "C. 提高API呼叫頻率",
          "D. 使用同步呼叫"
        ],
        "answer": "A",
        "key_point": "API容錯設計",
        "analysis": "快取減少重複呼叫，熔斷器防止級聯故障，降級回退確保在主服務失效時仍能提供基本功能。"
      },
      {
        "id": "5.2-Z10",
        "question": "跨部門AI系統整合專案中，資料科學團隊使用Python開發，IT團隊使用Java。為減少整合摩擦，最有效的策略為何？",
        "options": [
          "A. 模型服務容器化後以標準REST/gRPC API暴露，技術棧差異被封裝在服務內部",
          "B. 要求所有人使用同一語言",
          "C. 資料科學團隊學習Java",
          "D. IT團隊學習Python"
        ],
        "answer": "A",
        "key_point": "跨語言整合",
        "analysis": "微服務架構透過標準API通訊協定隔離各團隊的技術棧差異，每團隊可使用最適合的語言開發。"
      }
    ]
  }
};
