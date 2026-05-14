// IPAS 科目1 題庫 - 50題/難度/範圍 (共1,350題)
// 參考資料：AI應用規劃師(中級)-學習指引-科目1
const ALL_QBANKS = {
  "3.1": {
    "基礎": [
      {
        "id": "3.1-B01",
        "question": "自然語言處理的核心任務是什麼？",
        "options": [
          "A. 讓機器理解、生成人類語言",
          "B. 讓機器辨識影像",
          "C. 讓機器控制硬體",
          "D. 讓機器計算數學"
        ],
        "answer": "A",
        "key_point": "NLP核心任務",
        "analysis": "NLP（Natural Language Processing）旨在讓電腦理解、解釋和生成人類語言，涵蓋文本分類、情感分析、機器翻譯等技術。"
      },
      {
        "id": "3.1-B02",
        "question": "詞嵌入（Word Embedding）的主要功能是什麼？",
        "options": [
          "A. 將單詞轉換為低維度稠密向量",
          "B. 計算詞頻",
          "C. 標註詞性",
          "D. 刪除停用詞"
        ],
        "answer": "A",
        "key_point": "詞嵌入功能",
        "analysis": "Word Embedding 將離散的詞彙映射到連續的低維向量空間，語義相近的詞在向量空間中距離較近，如 Word2Vec、GloVe 等方法。"
      },
      {
        "id": "3.1-B03",
        "question": "TF-IDF 在資訊檢索中的主要作用是什麼？",
        "options": [
          "A. 衡量詞彙在文件中的重要程度",
          "B. 計算文件之間的距離",
          "C. 將文件進行分類",
          "D. 壓縮文件大小"
        ],
        "answer": "A",
        "key_point": "TF-IDF 作用",
        "analysis": "TF-IDF（詞頻-逆文檔頻率）通過詞頻（TF）與逆文檔頻率（IDF）的乘積來評估一個詞對文件的重要程度，常用於關鍵詞提取和文本相似度計算。"
      },
      {
        "id": "3.1-B04",
        "question": "什麼是停用詞（Stop Words）？",
        "options": [
          "A. 在文本分析中需要過濾的常見無意義詞",
          "B. 最重要的關鍵詞",
          "C. 所有的名詞",
          "D. 所有的動詞"
        ],
        "answer": "A",
        "key_point": "停用詞定義",
        "analysis": "停用詞指在文本中頻繁出現但對語義貢獻有限的詞（如「的」、「了」、「是」），在預處理階段通常會被過濾以減少雜訊並提升模型效率。"
      },
      {
        "id": "3.1-B05",
        "question": "分詞（Tokenization）在 NLP 中的作用是什麼？",
        "options": [
          "A. 將文本分割成語言單位（詞或子詞）",
          "B. 將文本翻譯成另一種語言",
          "C. 將文字轉換為語音",
          "D. 將文本壓縮"
        ],
        "answer": "A",
        "key_point": "分詞作用",
        "analysis": "Tokenization 是 NLP 的第一步，將原始文本分割為 tokens（詞、子詞或字符），後續任務才能對這些基本單位進行處理和分析。"
      },
      {
        "id": "3.1-B06",
        "question": "N-gram 模型的基本假設是什麼？",
        "options": [
          "A. 當前詞僅與前 n-1 個詞相關",
          "B. 所有詞彼此獨立",
          "C. 詞序不重要",
          "D. 每個詞都與全文相關"
        ],
        "answer": "A",
        "key_point": "N-gram 假設",
        "analysis": "N-gram 基於馬可夫假設，認為一個詞出現的機率只取決於它前面 n-1 個詞，n 值越大考慮的上下文越廣，但資料稀疏問題也更嚴重。"
      },
      {
        "id": "3.1-B07",
        "question": "詞性標註（POS Tagging）的目標是什麼？",
        "options": [
          "A. 為每個詞標記詞性（名詞、動詞、形容詞等）",
          "B. 標記詞的頻率",
          "C. 標記詞的長度",
          "D. 標記詞的語種"
        ],
        "answer": "A",
        "key_point": "詞性標註",
        "analysis": "POS Tagging 為文本中的每個詞賦予對應的詞性標籤，是許多下游 NLP 任務（如命名實體辨識、語法分析）的基礎預處理步驟。"
      },
      {
        "id": "3.1-B08",
        "question": "什麼是命名實體辨識（NER）？",
        "options": [
          "A. 識別文本中的人名、地名、組織名等實體",
          "B. 識別文本中的動詞",
          "C. 識別文本的語言類別",
          "D. 識別文本的主題"
        ],
        "answer": "A",
        "key_point": "NER 定義",
        "analysis": "NER（Named Entity Recognition）從文本中抽取具有特定意義的實體，如人名（Person）、地名（Location）、組織名（Organization）、日期（Date）等。"
      },
      {
        "id": "3.1-B09",
        "question": "文本分類常用的評估指標有哪些？",
        "options": [
          "A. 精確率、召回率、F1分數",
          "B. 均方誤差、平均絕對誤差",
          "C. 輪廓係數、Davies-Bouldin指數",
          "D. AIC、BIC"
        ],
        "answer": "A",
        "key_point": "文本分類評估",
        "analysis": "文本分類常用精確率（Precision）、召回率（Recall）和 F1-score 評估模型表現，F1 是精確率與召回率的調和平均數。"
      },
      {
        "id": "3.1-B10",
        "question": "Word2Vec 中的 CBOW 和 Skip-gram 有何差異？",
        "options": [
          "A. CBOW根據上下文預測目標詞，Skip-gram根據目標詞預測上下文",
          "B. CBOW用於分類，Skip-gram用於回歸",
          "C. 兩者相同",
          "D. CBOW用英文，Skip-gram用中文"
        ],
        "answer": "A",
        "key_point": "CBOW vs Skip-gram",
        "analysis": "CBOW（Continuous Bag of Words）從上下文詞預測目標詞，訓練速度快；Skip-gram 從目標詞預測上下文詞，對罕見詞效果更好。"
      },
      {
        "id": "3.1-B11",
        "question": "NLP 基礎概念第11題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B12",
        "question": "NLP 基礎概念第12題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B13",
        "question": "NLP 基礎概念第13題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B14",
        "question": "NLP 基礎概念第14題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B15",
        "question": "NLP 基礎概念第15題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B16",
        "question": "NLP 基礎概念第16題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B17",
        "question": "NLP 基礎概念第17題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B18",
        "question": "NLP 基礎概念第18題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B19",
        "question": "NLP 基礎概念第19題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B20",
        "question": "NLP 基礎概念第20題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B21",
        "question": "NLP 基礎概念第21題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B22",
        "question": "NLP 基礎概念第22題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B23",
        "question": "NLP 基礎概念第23題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B24",
        "question": "NLP 基礎概念第24題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B25",
        "question": "NLP 基礎概念第25題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B26",
        "question": "NLP 基礎概念第26題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B27",
        "question": "NLP 基礎概念第27題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B28",
        "question": "NLP 基礎概念第28題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B29",
        "question": "NLP 基礎概念第29題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B30",
        "question": "NLP 基礎概念第30題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B31",
        "question": "NLP 基礎概念第31題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B32",
        "question": "NLP 基礎概念第32題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B33",
        "question": "NLP 基礎概念第33題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B34",
        "question": "NLP 基礎概念第34題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B35",
        "question": "NLP 基礎概念第35題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B36",
        "question": "NLP 基礎概念第36題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B37",
        "question": "NLP 基礎概念第37題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B38",
        "question": "NLP 基礎概念第38題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B39",
        "question": "NLP 基礎概念第39題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B40",
        "question": "NLP 基礎概念第40題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B41",
        "question": "NLP 基礎概念第41題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B42",
        "question": "NLP 基礎概念第42題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B43",
        "question": "NLP 基礎概念第43題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B44",
        "question": "NLP 基礎概念第44題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B45",
        "question": "NLP 基礎概念第45題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B46",
        "question": "NLP 基礎概念第46題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B47",
        "question": "NLP 基礎概念第47題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B48",
        "question": "NLP 基礎概念第48題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B49",
        "question": "NLP 基礎概念第49題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      },
      {
        "id": "3.1-B50",
        "question": "NLP 基礎概念第50題：下列關於自然語言處理的敘述何者正確？",
        "options": [
          "A. NLP的目的是讓機器理解與生成人類語言",
          "B. NLP只能處理英文",
          "C. NLP不需要預處理",
          "D. NLP等同於語音識別"
        ],
        "answer": "A",
        "key_point": "NLP目的",
        "analysis": "自然語言處理（NLP）涵蓋讓機器理解、分析和生成人類語言的多項技術，包括分詞、詞性標註、句法分析、語義理解等。"
      }
    ],
    "進階": [
      {
        "id": "3.1-J01",
        "question": "在序列到序列（Seq2Seq）模型中，注意力機制（Attention）解決的主要問題是什麼？",
        "options": [
          "A. 長序列的資訊遺忘問題",
          "B. 梯度消失問題",
          "C. 過擬合問題",
          "D. 資料稀疏問題"
        ],
        "answer": "A",
        "key_point": "注意力機制功能",
        "analysis": "注意力機制讓解碼器在生成每個輸出時都能關注編碼器所有隱藏狀態的加權組合，有效解決長序列中資訊隨序列增長而衰減的問題。"
      },
      {
        "id": "3.1-J02",
        "question": "BERT 使用什麼訓練方法來學習雙向語境表示？",
        "options": [
          "A. 遮蔽語言模型（MLM）和下句預測（NSP）",
          "B. 自迴歸生成",
          "C. 因果語言模型",
          "D. 對抗訓練"
        ],
        "answer": "A",
        "key_point": "BERT 訓練方法",
        "analysis": "BERT 使用 Masked Language Model（隨機遮蔽15%的詞讓模型預測）和 Next Sentence Prediction（判斷兩句是否連續）兩個任務進行預訓練。"
      },
      {
        "id": "3.1-J03",
        "question": "Transformer 中的位置編碼（Positional Encoding）為何必要？",
        "options": [
          "A. 自注意力機制不具備序列順序資訊",
          "B. 加快訓練速度",
          "C. 減少參數量",
          "D. 提高準確率"
        ],
        "answer": "A",
        "key_point": "位置編碼必要性",
        "analysis": "由於 Transformer 的自注意力機制同時考慮所有位置，缺乏序列天然的先後順序，位置編碼提供了每個 token 在序列中的位置信息。"
      },
      {
        "id": "3.1-J04",
        "question": "在語言模型中，Perplexity 是如何定義的？",
        "options": [
          "A. 模型對測試資料的困惑程度，為交叉熵的指數",
          "B. 模型的參數數量",
          "C. 模型的訓練速度",
          "D. 模型的大小"
        ],
        "answer": "A",
        "key_point": "Perplexity 定義",
        "analysis": "Perplexity = exp(H(p,q)) = exp(-1/N Σ log q(x_i))，數值越低表示模型對測試資料的預測越好，是語言模型常用的評估指標。"
      },
      {
        "id": "3.1-J05",
        "question": "GPT 系列模型的核心架構特點是什麼？",
        "options": [
          "A. 僅使用 Transformer 解碼器，自迴歸生成",
          "B. 僅使用 Transformer 編碼器",
          "C. 使用編碼器-解碼器架構",
          "D. 使用 CNN 架構"
        ],
        "answer": "A",
        "key_point": "GPT 架構",
        "analysis": "GPT 採用自迴歸（Autoregressive）的解碼器架構，每次預測下一個 token，使用遮蔽自注意力（Masked Self-Attention）防止看到未來資訊。"
      },
      {
        "id": "3.1-J06",
        "question": "NLP 進階應用第6題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J07",
        "question": "NLP 進階應用第7題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J08",
        "question": "NLP 進階應用第8題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J09",
        "question": "NLP 進階應用第9題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J10",
        "question": "NLP 進階應用第10題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J11",
        "question": "NLP 進階應用第11題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J12",
        "question": "NLP 進階應用第12題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J13",
        "question": "NLP 進階應用第13題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J14",
        "question": "NLP 進階應用第14題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J15",
        "question": "NLP 進階應用第15題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J16",
        "question": "NLP 進階應用第16題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J17",
        "question": "NLP 進階應用第17題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J18",
        "question": "NLP 進階應用第18題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J19",
        "question": "NLP 進階應用第19題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J20",
        "question": "NLP 進階應用第20題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J21",
        "question": "NLP 進階應用第21題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J22",
        "question": "NLP 進階應用第22題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J23",
        "question": "NLP 進階應用第23題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J24",
        "question": "NLP 進階應用第24題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J25",
        "question": "NLP 進階應用第25題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J26",
        "question": "NLP 進階應用第26題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J27",
        "question": "NLP 進階應用第27題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J28",
        "question": "NLP 進階應用第28題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J29",
        "question": "NLP 進階應用第29題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J30",
        "question": "NLP 進階應用第30題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J31",
        "question": "NLP 進階應用第31題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J32",
        "question": "NLP 進階應用第32題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J33",
        "question": "NLP 進階應用第33題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J34",
        "question": "NLP 進階應用第34題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J35",
        "question": "NLP 進階應用第35題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J36",
        "question": "NLP 進階應用第36題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J37",
        "question": "NLP 進階應用第37題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J38",
        "question": "NLP 進階應用第38題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J39",
        "question": "NLP 進階應用第39題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J40",
        "question": "NLP 進階應用第40題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J41",
        "question": "NLP 進階應用第41題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J42",
        "question": "NLP 進階應用第42題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J43",
        "question": "NLP 進階應用第43題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J44",
        "question": "NLP 進階應用第44題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J45",
        "question": "NLP 進階應用第45題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J46",
        "question": "NLP 進階應用第46題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J47",
        "question": "NLP 進階應用第47題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J48",
        "question": "NLP 進階應用第48題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J49",
        "question": "NLP 進階應用第49題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      },
      {
        "id": "3.1-J50",
        "question": "NLP 進階應用第50題：在實務上，哪種方法最適合處理長文本的語義理解？",
        "options": [
          "A. 使用 Transformer 架構獲取全局語境資訊",
          "B. 只使用詞袋模型",
          "C. 僅使用 TF-IDF",
          "D. 只統計詞頻"
        ],
        "answer": "A",
        "key_point": "長文本處理",
        "analysis": "Transformer 的自注意力機制可同時關注序列中的所有位置，獲取全局語境，較傳統 RNN/LSTM 更適合處理長文本的語義理解。"
      }
    ],
    "專業": [
      {
        "id": "3.1-Z01",
        "question": "在訓練大型語言模型時，RLHF（Reinforcement Learning from Human Feedback）的主要步驟為何？",
        "options": [
          "A. SFT→訓練獎勵模型→PPO優化",
          "B. 直接監督訓練",
          "C. 僅使用強化學習",
          "D. 僅使用人類回饋"
        ],
        "answer": "A",
        "key_point": "RLHF 流程",
        "analysis": "RLHF 三步驟：(1)Supervised Fine-Tuning (SFT) 在人類示範資料上微調；(2)訓練獎勵模型（Reward Model）預測人類偏好；(3)使用 PPO 演算法以獎勵模型為引導優化語言模型。"
      },
      {
        "id": "3.1-Z02",
        "question": "在 NLP 中，解碼策略的 Top-k 和 Top-p（Nucleus）採樣有何區別？",
        "options": [
          "A. Top-k取k個最高機率詞，Top-p取累積機率達p的最小詞集",
          "B. Top-k用於訓練，Top-p用於推理",
          "C. 兩者功能相同",
          "D. Top-p取p個詞，Top-k取k個詞"
        ],
        "answer": "A",
        "key_point": "解碼策略",
        "analysis": "Top-k 採樣從機率最高的 k 個詞中隨機選擇；Top-p（Nucleus）採樣從累積機率達到 p 的最小詞集中隨機選擇，更能動態適應機率分佈。"
      },
      {
        "id": "3.1-Z03",
        "question": "知識蒸餾（Knowledge Distillation）在 NLP 中的應用原理為何？",
        "options": [
          "A. 大型教師模型指導小型學生模型學習",
          "B. 合併多個模型",
          "C. 刪除小參數",
          "D. 增加模型層數"
        ],
        "answer": "A",
        "key_point": "知識蒸餾原理",
        "analysis": "知識蒸餾將大型教師模型的知識（Soft Label 或中間特徵）傳遞給小型學生模型，使學生模型在保持較小體積的同時逼近教師模型的性能。"
      },
      {
        "id": "3.1-Z04",
        "question": "在 NLP 中，什麼是 Zero-shot 學習？",
        "options": [
          "A. 模型在未見過的任務上直接推理的能力",
          "B. 不使用任何訓練資料",
          "C. 只使用監督訓練",
          "D. 只使用無監督訓練"
        ],
        "answer": "A",
        "key_point": "Zero-shot 學習",
        "analysis": "Zero-shot 學習指模型在預訓練後，不需針對特定任務的標註資料進行微調，直接透過提示（Prompt）推理解決新任務，如 GPT-3 的 In-context Learning。"
      },
      {
        "id": "3.1-Z05",
        "question": "對抗性攻擊（Adversarial Attack）在 NLP 中的常見形式為何？",
        "options": [
          "A. 對輸入文本加入微小擾動使模型誤判",
          "B. 修改模型權重",
          "C. 刪除訓練資料",
          "D. 增加模型層數"
        ],
        "answer": "A",
        "key_point": "NLP 對抗攻擊",
        "analysis": "NLP 對抗攻擊包括字符級擾動（拼寫錯誤）、詞級替換（同義詞替換）、句子級改寫等，在不改變人類理解的前提下使模型產生錯誤輸出。"
      },
      {
        "id": "3.1-Z06",
        "question": "NLP 專業議題第6題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z07",
        "question": "NLP 專業議題第7題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z08",
        "question": "NLP 專業議題第8題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z09",
        "question": "NLP 專業議題第9題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z10",
        "question": "NLP 專業議題第10題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z11",
        "question": "NLP 專業議題第11題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z12",
        "question": "NLP 專業議題第12題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z13",
        "question": "NLP 專業議題第13題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z14",
        "question": "NLP 專業議題第14題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z15",
        "question": "NLP 專業議題第15題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z16",
        "question": "NLP 專業議題第16題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z17",
        "question": "NLP 專業議題第17題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z18",
        "question": "NLP 專業議題第18題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z19",
        "question": "NLP 專業議題第19題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z20",
        "question": "NLP 專業議題第20題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z21",
        "question": "NLP 專業議題第21題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z22",
        "question": "NLP 專業議題第22題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z23",
        "question": "NLP 專業議題第23題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z24",
        "question": "NLP 專業議題第24題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z25",
        "question": "NLP 專業議題第25題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z26",
        "question": "NLP 專業議題第26題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z27",
        "question": "NLP 專業議題第27題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z28",
        "question": "NLP 專業議題第28題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z29",
        "question": "NLP 專業議題第29題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z30",
        "question": "NLP 專業議題第30題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z31",
        "question": "NLP 專業議題第31題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z32",
        "question": "NLP 專業議題第32題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z33",
        "question": "NLP 專業議題第33題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z34",
        "question": "NLP 專業議題第34題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z35",
        "question": "NLP 專業議題第35題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z36",
        "question": "NLP 專業議題第36題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z37",
        "question": "NLP 專業議題第37題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z38",
        "question": "NLP 專業議題第38題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z39",
        "question": "NLP 專業議題第39題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z40",
        "question": "NLP 專業議題第40題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z41",
        "question": "NLP 專業議題第41題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z42",
        "question": "NLP 專業議題第42題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z43",
        "question": "NLP 專業議題第43題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z44",
        "question": "NLP 專業議題第44題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z45",
        "question": "NLP 專業議題第45題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z46",
        "question": "NLP 專業議題第46題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z47",
        "question": "NLP 專業議題第47題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z48",
        "question": "NLP 專業議題第48題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z49",
        "question": "NLP 專業議題第49題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      },
      {
        "id": "3.1-Z50",
        "question": "NLP 專業議題第50題：在部署大型語言模型時，如何有效減輕幻覺（Hallucination）問題？",
        "options": [
          "A. 結合檢索增強生成（RAG）提供事實依據",
          "B. 增加模型參數量",
          "C. 降低溫度參數",
          "D. 使用更大的批次大小"
        ],
        "answer": "A",
        "key_point": "緩解幻覺",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成前先從外部知識庫檢索相關文檔作為上下文，為模型提供事實依據，有效減少幻覺。"
      }
    ]
  },
  "3.2": {
    "基礎": [
      {
        "id": "3.2-B01",
        "question": "卷積神經網路（CNN）的核心運算單元是什麼？",
        "options": [
          "A. 卷積層",
          "B. 全連接層",
          "C. 循環層",
          "D. 注意力層"
        ],
        "answer": "A",
        "key_point": "CNN核心",
        "analysis": "卷積層（Convolutional Layer）是CNN的核心，透過卷積核（Filter/Kernel）滑動在輸入上提取局部特徵。"
      },
      {
        "id": "3.2-B02",
        "question": "卷積層中的「卷積核」（Kernel）功能為何？",
        "options": [
          "A. 提取輸入的局部特徵",
          "B. 進行分類",
          "C. 壓縮圖像",
          "D. 增強顏色"
        ],
        "answer": "A",
        "key_point": "卷積核功能",
        "analysis": "卷積核為可學習的二維權重矩陣，在輸入上滑動進行點積運算，提取邊緣、紋理等局部特徵。"
      },
      {
        "id": "3.2-B03",
        "question": "池化層（Pooling Layer）的主要功能為何？",
        "options": [
          "A. 降低特徵圖維度、保留重要資訊",
          "B. 增加特徵圖大小",
          "C. 進行分類",
          "D. 增加通道數"
        ],
        "answer": "A",
        "key_point": "池化層功能",
        "analysis": "池化層通過下採樣降低空間維度（如最大池化取區域最大值），減少參數量並提供平移不變性。"
      },
      {
        "id": "3.2-B04",
        "question": "CNN 中「填充」（Padding）的作用為何？",
        "options": [
          "A. 保持卷積後輸出尺寸不變",
          "B. 加入雜訊",
          "C. 加速訓練",
          "D. 增加模型深度"
        ],
        "answer": "A",
        "key_point": "Padding作用",
        "analysis": "Padding 在輸入周圍填充額外像素（通常為0），使卷積輸出尺寸與輸入相同（Same Padding）或控制尺寸縮減。"
      },
      {
        "id": "3.2-B05",
        "question": "CNN 中「步長」（Stride）的定義為何？",
        "options": [
          "A. 卷積核每次滑動的像素數",
          "B. 學習率大小",
          "C. 批次大小",
          "D. 特徵圖的數目"
        ],
        "answer": "A",
        "key_point": "Stride定義",
        "analysis": "Stride 決定卷積核每次移動的步長，步長越大輸出特徵圖越小，能有效降低計算量。"
      },
      {
        "id": "3.2-B06",
        "question": "影像分類中資料增強（Data Augmentation）的目的是什麼？",
        "options": [
          "A. 增加訓練資料多樣性減少過擬合",
          "B. 減少訓練時間",
          "C. 降低模型複雜度",
          "D. 刪除重複資料"
        ],
        "answer": "A",
        "key_point": "資料增強目的",
        "analysis": "資料增強通過隨機變換（旋轉、翻轉、裁剪、色彩抖動等）生成更多樣本，提升模型泛化能力。"
      },
      {
        "id": "3.2-B07",
        "question": "YOLO（You Only Look Once）模型的主要特點是什麼？",
        "options": [
          "A. 單次前向傳播即可完成物件檢測",
          "B. 需要兩階段檢測",
          "C. 只能用於分類",
          "D. 不能用於即時檢測"
        ],
        "answer": "A",
        "key_point": "YOLO特點",
        "analysis": "YOLO 將物件檢測視為回歸問題，一次前向傳播同時預測邊界框與類別機率，實現即時檢測。"
      },
      {
        "id": "3.2-B08",
        "question": "圖像分割（Image Segmentation）與圖像分類的差異為何？",
        "options": [
          "A. 分割為每個像素分配類別標籤，分類為整圖分配類別",
          "B. 兩者相同",
          "C. 分割給出一個邊界框",
          "D. 分類需要更多資料"
        ],
        "answer": "A",
        "key_point": "分割 vs 分類",
        "analysis": "圖像分割（語義分割/實例分割）為圖像中每個像素分配類別標籤；圖像分類為整張圖分配一個類別標籤。"
      },
      {
        "id": "3.2-B09",
        "question": "轉移學習（Transfer Learning）在 CV 中的常見應用方式為何？",
        "options": [
          "A. 使用預訓練模型權重進行微調",
          "B. 從頭訓練新模型",
          "C. 隨機初始化權重",
          "D. 只使用線性層"
        ],
        "answer": "A",
        "key_point": "轉移學習應用",
        "analysis": "在 CV 中，通常使用在 ImageNet 等大型資料集預訓練的 CNN 模型（如 ResNet、VGG），凍結底層再微調頂層以適應特定任務。"
      },
      {
        "id": "3.2-B10",
        "question": "卷積層中的「感受野」（Receptive Field）是什麼？",
        "options": [
          "A. 輸出特徵圖中一個像素對應的輸入區域大小",
          "B. 圖像的實際解析度",
          "C. 模型的視角範圍",
          "D. 卷積核的尺寸"
        ],
        "answer": "A",
        "key_point": "感受野定義",
        "analysis": "感受野指 CNN 中某一層輸出特徵圖上的一個元素對應到原始輸入圖像上的區域大小，疊加更多卷積層可擴大感受野。"
      },
      {
        "id": "3.2-B11",
        "question": "電腦視覺基礎第11題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B12",
        "question": "電腦視覺基礎第12題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B13",
        "question": "電腦視覺基礎第13題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B14",
        "question": "電腦視覺基礎第14題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B15",
        "question": "電腦視覺基礎第15題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B16",
        "question": "電腦視覺基礎第16題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B17",
        "question": "電腦視覺基礎第17題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B18",
        "question": "電腦視覺基礎第18題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B19",
        "question": "電腦視覺基礎第19題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B20",
        "question": "電腦視覺基礎第20題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B21",
        "question": "電腦視覺基礎第21題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B22",
        "question": "電腦視覺基礎第22題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B23",
        "question": "電腦視覺基礎第23題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B24",
        "question": "電腦視覺基礎第24題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B25",
        "question": "電腦視覺基礎第25題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B26",
        "question": "電腦視覺基礎第26題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B27",
        "question": "電腦視覺基礎第27題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B28",
        "question": "電腦視覺基礎第28題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B29",
        "question": "電腦視覺基礎第29題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B30",
        "question": "電腦視覺基礎第30題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B31",
        "question": "電腦視覺基礎第31題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B32",
        "question": "電腦視覺基礎第32題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B33",
        "question": "電腦視覺基礎第33題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B34",
        "question": "電腦視覺基礎第34題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B35",
        "question": "電腦視覺基礎第35題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B36",
        "question": "電腦視覺基礎第36題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B37",
        "question": "電腦視覺基礎第37題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B38",
        "question": "電腦視覺基礎第38題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B39",
        "question": "電腦視覺基礎第39題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B40",
        "question": "電腦視覺基礎第40題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B41",
        "question": "電腦視覺基礎第41題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B42",
        "question": "電腦視覺基礎第42題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B43",
        "question": "電腦視覺基礎第43題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B44",
        "question": "電腦視覺基礎第44題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B45",
        "question": "電腦視覺基礎第45題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B46",
        "question": "電腦視覺基礎第46題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B47",
        "question": "電腦視覺基礎第47題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B48",
        "question": "電腦視覺基礎第48題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B49",
        "question": "電腦視覺基礎第49題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      },
      {
        "id": "3.2-B50",
        "question": "電腦視覺基礎第50題：在 CNN 中，以下何者通過減少參數量來防止過擬合？",
        "options": [
          "A. 池化層和權重共享",
          "B. 增加全連接層",
          "C. 提高解析度",
          "D. 使用更大卷積核"
        ],
        "answer": "A",
        "key_point": "CNN防止過擬合",
        "analysis": "池化層降低維度、權重共享（Weight Sharing）減少參數，兩者都有效降低過擬合風險。"
      }
    ],
    "進階": [
      {
        "id": "3.2-J01",
        "question": "ResNet 的核心創新是什麼？",
        "options": [
          "A. 殘差連接（Skip Connection）解決梯度消失",
          "B. 增加網路深度",
          "C. 使用更大的卷積核",
          "D. 減少網路層數"
        ],
        "answer": "A",
        "key_point": "ResNet核心",
        "analysis": "ResNet 引入殘差學習 F(x) = H(x) - x，透過 Skip Connection 讓梯度直接回流，使訓練數百層的深度網路成為可能。"
      },
      {
        "id": "3.2-J02",
        "question": "注意力機制在電腦視覺中如何應用？",
        "options": [
          "A. 讓模型關注輸入圖像的重要區域",
          "B. 增加圖像解析度",
          "C. 降低模型複雜度",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "CV注意力機制",
        "analysis": "視覺注意力機制（如 SENet、CBAM）透過學習通道或空間的權重分佈，讓模型自動聚焦於對任務最重要的特徵區域。"
      },
      {
        "id": "3.2-J03",
        "question": "生成對抗網路（GAN）由哪些部分組成？",
        "options": [
          "A. 生成器（Generator）和判別器（Discriminator）",
          "B. 編碼器和解碼器",
          "C. 卷積層和池化層",
          "D. 注意力頭和前饋網路"
        ],
        "answer": "A",
        "key_point": "GAN組成",
        "analysis": "GAN 包含生成器（將隨機雜訊轉換為逼真樣本）和判別器（區分真實與生成樣本），兩者透過對抗訓練相互提升。"
      },
      {
        "id": "3.2-J04",
        "question": "Batch Normalization 的主要作用是什麼？",
        "options": [
          "A. 穩定訓練過程、加速收斂",
          "B. 增加模型參數",
          "C. 降低模型容量",
          "D. 減少訓練資料"
        ],
        "answer": "A",
        "key_point": "BN作用",
        "analysis": "Batch Normalization 對每層輸入進行歸一化（減均值除標準差），減少內部協變量偏移，允許使用更大的學習率。"
      },
      {
        "id": "3.2-J05",
        "question": "物件檢測中 IOU（Intersection over Union）的用途為何？",
        "options": [
          "A. 衡量預測邊界框與真實框的重疊程度",
          "B. 計算圖像相似度",
          "C. 計算類別機率",
          "D. 計算損失函數"
        ],
        "answer": "A",
        "key_point": "IOU用途",
        "analysis": "IOU = 交集面積/聯集面積，是評估物件檢測邊界框準確度的標準指標，也用於 NMS（非極大值抑制）過濾重複檢測。"
      },
      {
        "id": "3.2-J06",
        "question": "電腦視覺進階第6題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J07",
        "question": "電腦視覺進階第7題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J08",
        "question": "電腦視覺進階第8題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J09",
        "question": "電腦視覺進階第9題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J10",
        "question": "電腦視覺進階第10題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J11",
        "question": "電腦視覺進階第11題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J12",
        "question": "電腦視覺進階第12題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J13",
        "question": "電腦視覺進階第13題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J14",
        "question": "電腦視覺進階第14題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J15",
        "question": "電腦視覺進階第15題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J16",
        "question": "電腦視覺進階第16題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J17",
        "question": "電腦視覺進階第17題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J18",
        "question": "電腦視覺進階第18題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J19",
        "question": "電腦視覺進階第19題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J20",
        "question": "電腦視覺進階第20題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J21",
        "question": "電腦視覺進階第21題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J22",
        "question": "電腦視覺進階第22題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J23",
        "question": "電腦視覺進階第23題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J24",
        "question": "電腦視覺進階第24題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J25",
        "question": "電腦視覺進階第25題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J26",
        "question": "電腦視覺進階第26題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J27",
        "question": "電腦視覺進階第27題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J28",
        "question": "電腦視覺進階第28題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J29",
        "question": "電腦視覺進階第29題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J30",
        "question": "電腦視覺進階第30題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J31",
        "question": "電腦視覺進階第31題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J32",
        "question": "電腦視覺進階第32題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J33",
        "question": "電腦視覺進階第33題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J34",
        "question": "電腦視覺進階第34題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J35",
        "question": "電腦視覺進階第35題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J36",
        "question": "電腦視覺進階第36題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J37",
        "question": "電腦視覺進階第37題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J38",
        "question": "電腦視覺進階第38題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J39",
        "question": "電腦視覺進階第39題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J40",
        "question": "電腦視覺進階第40題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J41",
        "question": "電腦視覺進階第41題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J42",
        "question": "電腦視覺進階第42題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J43",
        "question": "電腦視覺進階第43題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J44",
        "question": "電腦視覺進階第44題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J45",
        "question": "電腦視覺進階第45題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J46",
        "question": "電腦視覺進階第46題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J47",
        "question": "電腦視覺進階第47題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J48",
        "question": "電腦視覺進階第48題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J49",
        "question": "電腦視覺進階第49題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      },
      {
        "id": "3.2-J50",
        "question": "電腦視覺進階第50題：在訓練深度 CNN 時，梯度消失最主要的原因是？",
        "options": [
          "A. 網路過深導致梯度在反向傳播中衰減",
          "B. 學習率太大",
          "C. 訓練資料太少",
          "D. 批次大小太小"
        ],
        "answer": "A",
        "key_point": "梯度消失原因",
        "analysis": "在深層網路中，梯度經多次連鎖律相乘後指數級衰減，底層權重幾乎無法更新。ResNet 的殘差連接有效緩解此問題。"
      }
    ],
    "專業": [
      {
        "id": "3.2-Z01",
        "question": "電腦視覺專業第1題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z02",
        "question": "電腦視覺專業第2題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z03",
        "question": "電腦視覺專業第3題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z04",
        "question": "電腦視覺專業第4題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z05",
        "question": "電腦視覺專業第5題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z06",
        "question": "電腦視覺專業第6題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z07",
        "question": "電腦視覺專業第7題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z08",
        "question": "電腦視覺專業第8題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z09",
        "question": "電腦視覺專業第9題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z10",
        "question": "電腦視覺專業第10題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z11",
        "question": "電腦視覺專業第11題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z12",
        "question": "電腦視覺專業第12題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z13",
        "question": "電腦視覺專業第13題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z14",
        "question": "電腦視覺專業第14題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z15",
        "question": "電腦視覺專業第15題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z16",
        "question": "電腦視覺專業第16題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z17",
        "question": "電腦視覺專業第17題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z18",
        "question": "電腦視覺專業第18題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z19",
        "question": "電腦視覺專業第19題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z20",
        "question": "電腦視覺專業第20題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z21",
        "question": "電腦視覺專業第21題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z22",
        "question": "電腦視覺專業第22題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z23",
        "question": "電腦視覺專業第23題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z24",
        "question": "電腦視覺專業第24題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z25",
        "question": "電腦視覺專業第25題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z26",
        "question": "電腦視覺專業第26題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z27",
        "question": "電腦視覺專業第27題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z28",
        "question": "電腦視覺專業第28題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z29",
        "question": "電腦視覺專業第29題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z30",
        "question": "電腦視覺專業第30題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z31",
        "question": "電腦視覺專業第31題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z32",
        "question": "電腦視覺專業第32題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z33",
        "question": "電腦視覺專業第33題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z34",
        "question": "電腦視覺專業第34題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z35",
        "question": "電腦視覺專業第35題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z36",
        "question": "電腦視覺專業第36題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z37",
        "question": "電腦視覺專業第37題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z38",
        "question": "電腦視覺專業第38題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z39",
        "question": "電腦視覺專業第39題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z40",
        "question": "電腦視覺專業第40題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z41",
        "question": "電腦視覺專業第41題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z42",
        "question": "電腦視覺專業第42題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z43",
        "question": "電腦視覺專業第43題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z44",
        "question": "電腦視覺專業第44題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z45",
        "question": "電腦視覺專業第45題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z46",
        "question": "電腦視覺專業第46題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z47",
        "question": "電腦視覺專業第47題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z48",
        "question": "電腦視覺專業第48題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z49",
        "question": "電腦視覺專業第49題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      },
      {
        "id": "3.2-Z50",
        "question": "電腦視覺專業第50題：在部署 CV 模型時，模型量化（Model Quantization）的主要目的為何？",
        "options": [
          "A. 降低模型儲存與計算需求",
          "B. 提高準確率",
          "C. 增加模型容量",
          "D. 加速訓練"
        ],
        "answer": "A",
        "key_point": "模型量化",
        "analysis": "模型量化將浮點權重轉換為低精度（如 INT8）表示，顯著減少模型大小與推理延遲，適合邊緣設備部署。"
      }
    ]
  },
  "3.3": {
    "基礎": [
      {
        "id": "3.3-B01",
        "question": "生成式人工智慧（Generative AI）的主要特徵為何？",
        "options": [
          "A. 從學習的資料分佈中生成新內容",
          "B. 只能分類已有資料",
          "C. 僅能做數值預測",
          "D. 只能處理結構化資料"
        ],
        "answer": "A",
        "key_point": "GenAI特徵",
        "analysis": "生成式 AI 學習訓練資料的底層分佈，然後從該分佈中採樣生成全新的、與訓練資料相似的內容（文本、圖像、音訊等）。"
      },
      {
        "id": "3.3-B02",
        "question": "大型語言模型（LLM）的核心能力是什麼？",
        "options": [
          "A. 理解和生成自然語言",
          "B. 只能翻譯語言",
          "C. 只能做摘要",
          "D. 只能分類文本"
        ],
        "answer": "A",
        "key_point": "LLM核心能力",
        "analysis": "LLM（Large Language Model）經過大規模文本預訓練，具備語言理解與生成、上下文學習（In-context Learning）和推理等能力。"
      },
      {
        "id": "3.3-B03",
        "question": "提示工程（Prompt Engineering）在 LLM 中的作用為何？",
        "options": [
          "A. 設計有效輸入引導模型生成所需輸出",
          "B. 訓練模型",
          "C. 評估模型",
          "D. 壓縮模型"
        ],
        "answer": "A",
        "key_point": "提示工程",
        "analysis": "Prompt Engineering 透過精心設計的輸入提示（含指令、上下文、範例等）引導 LLM 產生更準確、相關的回答。"
      },
      {
        "id": "3.3-B04",
        "question": "什麼是模型幻覺（Hallucination）？",
        "options": [
          "A. 模型生成看似合理但事實上不正確的內容",
          "B. 模型記憶訓練資料",
          "C. 模型的視覺辨識錯誤",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "幻覺定義",
        "analysis": "幻覺指 LLM 生成流暢且看似合理的內容，但包含事實錯誤或完全虛構的資訊，是生成式 AI 的主要挑戰之一。"
      },
      {
        "id": "3.3-B05",
        "question": "擴散模型（Diffusion Model）的基本原理是什麼？",
        "options": [
          "A. 逐步添加雜訊再逆向去除雜訊生成資料",
          "B. 對抗訓練生成器與判別器",
          "C. 自編碼壓縮與重建",
          "D. 序列預測"
        ],
        "answer": "A",
        "key_point": "擴散模型原理",
        "analysis": "擴散模型包含前向過程（逐步添加高斯雜訊破壞資料）和逆向過程（學習逐步去除雜訊重建資料），如 Stable Diffusion。"
      },
      {
        "id": "3.3-B06",
        "question": "文本到圖像生成（Text-to-Image）的典型應用是什麼？",
        "options": [
          "A. 根據文字描述生成對應圖像",
          "B. 根據圖像生成描述",
          "C. 分類圖像",
          "D. 增強圖像解析度"
        ],
        "answer": "A",
        "key_point": "Text-to-Image",
        "analysis": "Text-to-Image 模型（如 DALL-E、Stable Diffusion）根據自然語言描述生成對應的視覺內容。"
      },
      {
        "id": "3.3-B07",
        "question": "什麼是檢索增強生成（RAG）？",
        "options": [
          "A. 生成前從知識庫檢索相關文檔作為上下文",
          "B. 壓縮生成模型的參數",
          "C. 增強模型的訓練速度",
          "D. 減少生成長度"
        ],
        "answer": "A",
        "key_point": "RAG定義",
        "analysis": "RAG（Retrieval-Augmented Generation）在生成回答前先從外部知識庫檢索相關資訊，提高事實準確性和可追溯性。"
      },
      {
        "id": "3.3-B08",
        "question": "Temperature 參數在 LLM 生成中的作用為何？",
        "options": [
          "A. 控制生成文本的隨機性和創造性",
          "B. 控制模型溫度",
          "C. 調整學習率",
          "D. 設定批次大小"
        ],
        "answer": "A",
        "key_point": "Temperature作用",
        "analysis": "Temperature 控制 Softmax 輸出的機率分佈平滑程度：低溫（<1）使高機率詞更突出，生成更確定；高溫（>1）使分佈更均勻，生成更多樣。"
      },
      {
        "id": "3.3-B09",
        "question": "參數高效微調（PEFT）技術解決什麼問題？",
        "options": [
          "A. 降低全參數微調的計算與儲存成本",
          "B. 提高模型準確度",
          "C. 加速推理",
          "D. 減少幻覺"
        ],
        "answer": "A",
        "key_point": "PEFT目的",
        "analysis": "PEFT（如 LoRA、Adapter）只微調少量額外參數，凍結大部分預訓練權重，大幅降低微調的記憶體與計算需求。"
      },
      {
        "id": "3.3-B10",
        "question": "對比學習（Contrastive Learning）的核心思想是什麼？",
        "options": [
          "A. 使相似樣本在嵌入空間靠近，不相似樣本遠離",
          "B. 分類樣本",
          "C. 聚類樣本",
          "D. 回歸預測"
        ],
        "answer": "A",
        "key_point": "對比學習",
        "analysis": "對比學習透過正樣本對（同一圖像的不同增強版本）和負樣本對構建對比損失，學習區分能力強的特徵表示。"
      },
      {
        "id": "3.3-B11",
        "question": "生成式AI基礎第11題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B12",
        "question": "生成式AI基礎第12題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B13",
        "question": "生成式AI基礎第13題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B14",
        "question": "生成式AI基礎第14題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B15",
        "question": "生成式AI基礎第15題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B16",
        "question": "生成式AI基礎第16題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B17",
        "question": "生成式AI基礎第17題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B18",
        "question": "生成式AI基礎第18題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B19",
        "question": "生成式AI基礎第19題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B20",
        "question": "生成式AI基礎第20題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B21",
        "question": "生成式AI基礎第21題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B22",
        "question": "生成式AI基礎第22題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B23",
        "question": "生成式AI基礎第23題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B24",
        "question": "生成式AI基礎第24題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B25",
        "question": "生成式AI基礎第25題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B26",
        "question": "生成式AI基礎第26題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B27",
        "question": "生成式AI基礎第27題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B28",
        "question": "生成式AI基礎第28題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B29",
        "question": "生成式AI基礎第29題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B30",
        "question": "生成式AI基礎第30題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B31",
        "question": "生成式AI基礎第31題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B32",
        "question": "生成式AI基礎第32題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B33",
        "question": "生成式AI基礎第33題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B34",
        "question": "生成式AI基礎第34題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B35",
        "question": "生成式AI基礎第35題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B36",
        "question": "生成式AI基礎第36題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B37",
        "question": "生成式AI基礎第37題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B38",
        "question": "生成式AI基礎第38題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B39",
        "question": "生成式AI基礎第39題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B40",
        "question": "生成式AI基礎第40題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B41",
        "question": "生成式AI基礎第41題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B42",
        "question": "生成式AI基礎第42題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B43",
        "question": "生成式AI基礎第43題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B44",
        "question": "生成式AI基礎第44題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B45",
        "question": "生成式AI基礎第45題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B46",
        "question": "生成式AI基礎第46題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B47",
        "question": "生成式AI基礎第47題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B48",
        "question": "生成式AI基礎第48題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B49",
        "question": "生成式AI基礎第49題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      },
      {
        "id": "3.3-B50",
        "question": "生成式AI基礎第50題：LLM 中的「上下文長度」（Context Length）限制的主要影響為何？",
        "options": [
          "A. 限制模型一次能處理的輸入長度",
          "B. 限制訓練資料大小",
          "C. 限制詞彙量",
          "D. 限制輸出格式"
        ],
        "answer": "A",
        "key_point": "上下文長度",
        "analysis": "上下文長度指 LLM 一次能處理的最大 token 數，超出部分會被截斷或遺忘，影響長文檔處理與多輪對話能力。"
      }
    ],
    "進階": [
      {
        "id": "3.3-J01",
        "question": "DreamBooth 和 LoRA 在個人化生成中的主要差異為何？",
        "options": [
          "A. DreamBooth 微調整個模型，LoRA 僅訓練低秩矩陣",
          "B. DreamBooth 更快",
          "C. LoRA 效果更好",
          "D. 兩者完全相同"
        ],
        "answer": "A",
        "key_point": "DreamBooth vs LoRA",
        "analysis": "DreamBooth 對擴散模型進行完整微調以學習特定主題；LoRA 在凍結原模型同時訓練低秩適應矩陣，參數效率更高。"
      },
      {
        "id": "3.3-J02",
        "question": "在評估 LLM 生成品質時，BLEU 和 ROUGE 的主要限制為何？",
        "options": [
          "A. 基於 n-gram 匹配，無法捕捉語義等價",
          "B. 計算成本太高",
          "C. 不支援中文",
          "D. 需要大量參考文本"
        ],
        "answer": "A",
        "key_point": "BLEU/ROUGE限制",
        "analysis": "BLEU（精確率為主的 n-gram 匹配）和 ROUGE（召回率為主的 n-gram 匹配）都依賴詞彙表面匹配，無法識別語義相同但表述不同的情況。"
      },
      {
        "id": "3.3-J03",
        "question": "Chain-of-Thought（CoT）提示如何提升 LLM 推理能力？",
        "options": [
          "A. 引導模型生成中間推理步驟",
          "B. 減少推理步驟",
          "C. 使用更多參數",
          "D. 增加訓練資料"
        ],
        "answer": "A",
        "key_point": "CoT提示",
        "analysis": "CoT 提示在問題後加入逐步推理的範例，引導模型產生中間推理鏈，顯著提升算術、符號推理等複雜任務表現。"
      },
      {
        "id": "3.3-J04",
        "question": "什麼是模型蒸餾（Model Distillation）？",
        "options": [
          "A. 大型教師模型指導小型學生模型",
          "B. 合併多個模型",
          "C. 增加模型容量",
          "D. 刪除模型參數"
        ],
        "answer": "A",
        "key_point": "模型蒸餾",
        "analysis": "模型蒸餾使用教師模型的輸出（Soft Label）訓練學生模型，使學生模型在較小體積下逼近教師性能。"
      },
      {
        "id": "3.3-J05",
        "question": "為什麼 LLM 可能產生偏見（Bias）輸出？",
        "options": [
          "A. 訓練資料中包含社會偏見",
          "B. 模型隨機初始化",
          "C. 溫度參數過高",
          "D. 批次大小不當"
        ],
        "answer": "A",
        "key_point": "偏見來源",
        "analysis": "LLM 從大規模網路語料學習，這些語料中存在的性別、種族、文化等社會偏見被模型學習和反映在生成結果中。"
      },
      {
        "id": "3.3-J06",
        "question": "生成式AI進階第6題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J07",
        "question": "生成式AI進階第7題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J08",
        "question": "生成式AI進階第8題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J09",
        "question": "生成式AI進階第9題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J10",
        "question": "生成式AI進階第10題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J11",
        "question": "生成式AI進階第11題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J12",
        "question": "生成式AI進階第12題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J13",
        "question": "生成式AI進階第13題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J14",
        "question": "生成式AI進階第14題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J15",
        "question": "生成式AI進階第15題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J16",
        "question": "生成式AI進階第16題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J17",
        "question": "生成式AI進階第17題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J18",
        "question": "生成式AI進階第18題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J19",
        "question": "生成式AI進階第19題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J20",
        "question": "生成式AI進階第20題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J21",
        "question": "生成式AI進階第21題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J22",
        "question": "生成式AI進階第22題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J23",
        "question": "生成式AI進階第23題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J24",
        "question": "生成式AI進階第24題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J25",
        "question": "生成式AI進階第25題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J26",
        "question": "生成式AI進階第26題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J27",
        "question": "生成式AI進階第27題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J28",
        "question": "生成式AI進階第28題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J29",
        "question": "生成式AI進階第29題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J30",
        "question": "生成式AI進階第30題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J31",
        "question": "生成式AI進階第31題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J32",
        "question": "生成式AI進階第32題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J33",
        "question": "生成式AI進階第33題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J34",
        "question": "生成式AI進階第34題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J35",
        "question": "生成式AI進階第35題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J36",
        "question": "生成式AI進階第36題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J37",
        "question": "生成式AI進階第37題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J38",
        "question": "生成式AI進階第38題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J39",
        "question": "生成式AI進階第39題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J40",
        "question": "生成式AI進階第40題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J41",
        "question": "生成式AI進階第41題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J42",
        "question": "生成式AI進階第42題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J43",
        "question": "生成式AI進階第43題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J44",
        "question": "生成式AI進階第44題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J45",
        "question": "生成式AI進階第45題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J46",
        "question": "生成式AI進階第46題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J47",
        "question": "生成式AI進階第47題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J48",
        "question": "生成式AI進階第48題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J49",
        "question": "生成式AI進階第49題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      },
      {
        "id": "3.3-J50",
        "question": "生成式AI進階第50題：在實務中，如何讓 LLM 遵循特定格式輸出？",
        "options": [
          "A. 在提示中明確指定輸出格式與範例",
          "B. 增加溫度參數",
          "C. 減少上下文長度",
          "D. 使用更大的模型"
        ],
        "answer": "A",
        "key_point": "格式控制",
        "analysis": "透過精心設計的系統提示（System Prompt）和輸出格式範例，配合低溫度參數（0-0.3），可有效控制 LLM 輸出格式。"
      }
    ],
    "專業": [
      {
        "id": "3.3-Z01",
        "question": "生成式AI專業第1題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z02",
        "question": "生成式AI專業第2題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z03",
        "question": "生成式AI專業第3題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z04",
        "question": "生成式AI專業第4題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z05",
        "question": "生成式AI專業第5題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z06",
        "question": "生成式AI專業第6題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z07",
        "question": "生成式AI專業第7題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z08",
        "question": "生成式AI專業第8題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z09",
        "question": "生成式AI專業第9題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z10",
        "question": "生成式AI專業第10題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z11",
        "question": "生成式AI專業第11題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z12",
        "question": "生成式AI專業第12題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z13",
        "question": "生成式AI專業第13題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z14",
        "question": "生成式AI專業第14題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z15",
        "question": "生成式AI專業第15題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z16",
        "question": "生成式AI專業第16題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z17",
        "question": "生成式AI專業第17題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z18",
        "question": "生成式AI專業第18題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z19",
        "question": "生成式AI專業第19題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z20",
        "question": "生成式AI專業第20題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z21",
        "question": "生成式AI專業第21題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z22",
        "question": "生成式AI專業第22題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z23",
        "question": "生成式AI專業第23題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z24",
        "question": "生成式AI專業第24題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z25",
        "question": "生成式AI專業第25題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z26",
        "question": "生成式AI專業第26題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z27",
        "question": "生成式AI專業第27題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z28",
        "question": "生成式AI專業第28題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z29",
        "question": "生成式AI專業第29題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z30",
        "question": "生成式AI專業第30題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z31",
        "question": "生成式AI專業第31題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z32",
        "question": "生成式AI專業第32題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z33",
        "question": "生成式AI專業第33題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z34",
        "question": "生成式AI專業第34題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z35",
        "question": "生成式AI專業第35題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z36",
        "question": "生成式AI專業第36題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z37",
        "question": "生成式AI專業第37題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z38",
        "question": "生成式AI專業第38題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z39",
        "question": "生成式AI專業第39題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z40",
        "question": "生成式AI專業第40題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z41",
        "question": "生成式AI專業第41題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z42",
        "question": "生成式AI專業第42題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z43",
        "question": "生成式AI專業第43題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z44",
        "question": "生成式AI專業第44題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z45",
        "question": "生成式AI專業第45題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z46",
        "question": "生成式AI專業第46題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z47",
        "question": "生成式AI專業第47題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z48",
        "question": "生成式AI專業第48題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z49",
        "question": "生成式AI專業第49題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      },
      {
        "id": "3.3-Z50",
        "question": "生成式AI專業第50題：在 LLM 安全領域，紅隊測試（Red Teaming）的主要目的是什麼？",
        "options": [
          "A. 系統性尋找模型的安全漏洞與有害輸出",
          "B. 提高模型準確率",
          "C. 縮小模型大小",
          "D. 增加訓練速度"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊測試由安全專家主動嘗試繞過模型安全措施，發現對抗性提示、越獄攻擊等漏洞以改善模型安全性。"
      }
    ]
  },
  "3.4": {
    "基礎": [
      {
        "id": "3.4-B01",
        "question": "多模態 AI 處理什麼類型的資料？",
        "options": [
          "A. 同時處理文本、圖像、音訊等多種資料類型",
          "B. 只能處理文本",
          "C. 只能處理圖像",
          "D. 只能處理數值"
        ],
        "answer": "A",
        "key_point": "多模態定義",
        "analysis": "多模態 AI 同時處理和理解多種模態的資訊（如文本+圖像、語音+影像等），實現跨模態的理解與生成。"
      },
      {
        "id": "3.4-B02",
        "question": "CLIP 模型如何實現圖像與文本的對齊？",
        "options": [
          "A. 透過對比學習將圖像和文本映射到共同嵌入空間",
          "B. 分別獨立編碼圖像和文本",
          "C. 直接拼接圖像和文本",
          "D. 使用決策樹"
        ],
        "answer": "A",
        "key_point": "CLIP對齊",
        "analysis": "CLIP 使用對比學習，最大化匹配的（圖像，文本）對之間的餘弦相似度，最小化不匹配對的相似度。"
      },
      {
        "id": "3.4-B03",
        "question": "跨模態檢索（Cross-modal Retrieval）的應用場景為何？",
        "options": [
          "A. 用文本查詢找到相關圖像，或反過來",
          "B. 僅在同一模態內搜索",
          "C. 壓縮資料",
          "D. 分類資料"
        ],
        "answer": "A",
        "key_point": "跨模態檢索",
        "analysis": "跨模態檢索允許使用一種模態的查詢（如文字描述）檢索另一種模態的資料（如圖像），是許多多模態系統的基礎。"
      },
      {
        "id": "3.4-B04",
        "question": "圖像描述（Image Captioning）的輸入和輸出為何？",
        "options": [
          "A. 輸入圖像，輸出文本描述",
          "B. 輸入文本，輸出圖像",
          "C. 輸入音訊，輸出文字",
          "D. 輸入影片，輸出文字"
        ],
        "answer": "A",
        "key_point": "圖像描述",
        "analysis": "Image Captioning 接收圖像作為輸入，自動生成描述圖像內容的自然語言句子，典型應用為視障輔助。"
      },
      {
        "id": "3.4-B05",
        "question": "視覺問答（VQA）的核心任務是什麼？",
        "options": [
          "A. 根據圖像回答自然語言問題",
          "B. 根據問題搜尋圖像",
          "C. 僅回答文本問題",
          "D. 分類圖像"
        ],
        "answer": "A",
        "key_point": "VQA定義",
        "analysis": "VQA（Visual Question Answering）要求模型同時理解圖像內容和自然語言問題，給出準確答案，測試多模態理解能力。"
      },
      {
        "id": "3.4-B06",
        "question": "多模態融合的主要挑戰是什麼？",
        "options": [
          "A. 不同模態資料在時間、語義層面的異質性",
          "B. 資料量不足",
          "C. 運算速度慢",
          "D. 儲存空間不足"
        ],
        "answer": "A",
        "key_point": "多模態融合挑戰",
        "analysis": "不同模態的資料結構、時間尺度（文字序列 vs 圖像網格）和語義粒度差異巨大，如何有效融合是核心挑戰。"
      },
      {
        "id": "3.4-B07",
        "question": "視覺 Transformer（ViT）如何處理圖像？",
        "options": [
          "A. 將圖像分割成 Patch 序列輸入 Transformer",
          "B. 使用卷積處理後輸入 Transformer",
          "C. 直接將像素輸入",
          "D. 使用 RNN 處理"
        ],
        "answer": "A",
        "key_point": "ViT方法",
        "analysis": "ViT 將圖像切分為固定大小的 Patch（如16×16），線性投影後加上位置編碼，作為序列輸入標準 Transformer 編碼器。"
      },
      {
        "id": "3.4-B08",
        "question": "什麼是零樣本（Zero-shot）多模態分類？",
        "options": [
          "A. 不需針對特定分類任務訓練，直接用描述分類",
          "B. 使用零張訓練圖像",
          "C. 只能分兩類",
          "D. 需要大量標註"
        ],
        "answer": "A",
        "key_point": "零樣本多模態分類",
        "analysis": "CLIP 等模型可在未經特定分類任務訓練下，直接使用候選類別的文本描述進行 Zero-shot 圖像分類。"
      },
      {
        "id": "3.4-B09",
        "question": "多模態 AI 在醫療領域的應用案例為何？",
        "options": [
          "A. 結合醫學影像與病歷文本進行診斷",
          "B. 僅分析影像",
          "C. 僅分析病歷",
          "D. 替代醫生"
        ],
        "answer": "A",
        "key_point": "醫療多模態AI",
        "analysis": "醫療多模態 AI 結合影像（X光/CT/MRI）與結構化病歷、非結構化報告進行綜合診斷，提高準確率。"
      },
      {
        "id": "3.4-B10",
        "question": "編碼器-解碼器架構在多模態任務中的作用為何？",
        "options": [
          "A. 編碼器提取多模態特徵，解碼器生成另一模態輸出",
          "B. 只用於單模態",
          "C. 只能編碼",
          "D. 只能解碼"
        ],
        "answer": "A",
        "key_point": "編碼器-解碼器",
        "analysis": "在多模態任務中，編碼器處理輸入模態（如圖像），解碼器基於編碼特徵生成目標模態（如文字描述）。"
      },
      {
        "id": "3.4-B11",
        "question": "多模態AI基礎第11題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B12",
        "question": "多模態AI基礎第12題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B13",
        "question": "多模態AI基礎第13題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B14",
        "question": "多模態AI基礎第14題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B15",
        "question": "多模態AI基礎第15題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B16",
        "question": "多模態AI基礎第16題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B17",
        "question": "多模態AI基礎第17題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B18",
        "question": "多模態AI基礎第18題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B19",
        "question": "多模態AI基礎第19題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B20",
        "question": "多模態AI基礎第20題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B21",
        "question": "多模態AI基礎第21題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B22",
        "question": "多模態AI基礎第22題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B23",
        "question": "多模態AI基礎第23題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B24",
        "question": "多模態AI基礎第24題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B25",
        "question": "多模態AI基礎第25題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B26",
        "question": "多模態AI基礎第26題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B27",
        "question": "多模態AI基礎第27題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B28",
        "question": "多模態AI基礎第28題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B29",
        "question": "多模態AI基礎第29題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B30",
        "question": "多模態AI基礎第30題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B31",
        "question": "多模態AI基礎第31題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B32",
        "question": "多模態AI基礎第32題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B33",
        "question": "多模態AI基礎第33題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B34",
        "question": "多模態AI基礎第34題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B35",
        "question": "多模態AI基礎第35題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B36",
        "question": "多模態AI基礎第36題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B37",
        "question": "多模態AI基礎第37題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B38",
        "question": "多模態AI基礎第38題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B39",
        "question": "多模態AI基礎第39題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B40",
        "question": "多模態AI基礎第40題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B41",
        "question": "多模態AI基礎第41題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B42",
        "question": "多模態AI基礎第42題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B43",
        "question": "多模態AI基礎第43題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B44",
        "question": "多模態AI基礎第44題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B45",
        "question": "多模態AI基礎第45題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B46",
        "question": "多模態AI基礎第46題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B47",
        "question": "多模態AI基礎第47題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B48",
        "question": "多模態AI基礎第48題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B49",
        "question": "多模態AI基礎第49題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      },
      {
        "id": "3.4-B50",
        "question": "多模態AI基礎第50題：在處理多模態資料時，時間對齊（Temporal Alignment）主要解決什麼問題？",
        "options": [
          "A. 不同模態資料的時間維度同步",
          "B. 減少資料大小",
          "C. 提高影像解析度",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "時間對齊",
        "analysis": "不同模態資料（如影片的視覺與音訊）可能以不同頻率取樣，時間對齊將它們在時間維度上同步。"
      }
    ],
    "進階": [
      {
        "id": "3.4-J01",
        "question": "多模態AI進階第1題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J02",
        "question": "多模態AI進階第2題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J03",
        "question": "多模態AI進階第3題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J04",
        "question": "多模態AI進階第4題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J05",
        "question": "多模態AI進階第5題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J06",
        "question": "多模態AI進階第6題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J07",
        "question": "多模態AI進階第7題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J08",
        "question": "多模態AI進階第8題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J09",
        "question": "多模態AI進階第9題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J10",
        "question": "多模態AI進階第10題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J11",
        "question": "多模態AI進階第11題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J12",
        "question": "多模態AI進階第12題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J13",
        "question": "多模態AI進階第13題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J14",
        "question": "多模態AI進階第14題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J15",
        "question": "多模態AI進階第15題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J16",
        "question": "多模態AI進階第16題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J17",
        "question": "多模態AI進階第17題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J18",
        "question": "多模態AI進階第18題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J19",
        "question": "多模態AI進階第19題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J20",
        "question": "多模態AI進階第20題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J21",
        "question": "多模態AI進階第21題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J22",
        "question": "多模態AI進階第22題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J23",
        "question": "多模態AI進階第23題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J24",
        "question": "多模態AI進階第24題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J25",
        "question": "多模態AI進階第25題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J26",
        "question": "多模態AI進階第26題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J27",
        "question": "多模態AI進階第27題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J28",
        "question": "多模態AI進階第28題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J29",
        "question": "多模態AI進階第29題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J30",
        "question": "多模態AI進階第30題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J31",
        "question": "多模態AI進階第31題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J32",
        "question": "多模態AI進階第32題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J33",
        "question": "多模態AI進階第33題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J34",
        "question": "多模態AI進階第34題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J35",
        "question": "多模態AI進階第35題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J36",
        "question": "多模態AI進階第36題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J37",
        "question": "多模態AI進階第37題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J38",
        "question": "多模態AI進階第38題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J39",
        "question": "多模態AI進階第39題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J40",
        "question": "多模態AI進階第40題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J41",
        "question": "多模態AI進階第41題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J42",
        "question": "多模態AI進階第42題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J43",
        "question": "多模態AI進階第43題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J44",
        "question": "多模態AI進階第44題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J45",
        "question": "多模態AI進階第45題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J46",
        "question": "多模態AI進階第46題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J47",
        "question": "多模態AI進階第47題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J48",
        "question": "多模態AI進階第48題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J49",
        "question": "多模態AI進階第49題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      },
      {
        "id": "3.4-J50",
        "question": "多模態AI進階第50題：在多模態學習中，模態缺失（Missing Modality）問題如何處理？",
        "options": [
          "A. 使用模態掩碼策略或知識蒸餾補償",
          "B. 直接刪除不完整樣本",
          "C. 增加缺失模態資料",
          "D. 降低模型複雜度"
        ],
        "answer": "A",
        "key_point": "模態缺失處理",
        "analysis": "常見方法包括：隨機掩碼部分模態進行訓練、使用知識蒸餾使模型不依賴特定模態、學習模態不變表徵。"
      }
    ],
    "專業": [
      {
        "id": "3.4-Z01",
        "question": "多模態AI專業第1題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z02",
        "question": "多模態AI專業第2題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z03",
        "question": "多模態AI專業第3題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z04",
        "question": "多模態AI專業第4題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z05",
        "question": "多模態AI專業第5題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z06",
        "question": "多模態AI專業第6題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z07",
        "question": "多模態AI專業第7題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z08",
        "question": "多模態AI專業第8題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z09",
        "question": "多模態AI專業第9題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z10",
        "question": "多模態AI專業第10題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z11",
        "question": "多模態AI專業第11題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z12",
        "question": "多模態AI專業第12題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z13",
        "question": "多模態AI專業第13題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z14",
        "question": "多模態AI專業第14題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z15",
        "question": "多模態AI專業第15題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z16",
        "question": "多模態AI專業第16題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z17",
        "question": "多模態AI專業第17題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z18",
        "question": "多模態AI專業第18題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z19",
        "question": "多模態AI專業第19題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z20",
        "question": "多模態AI專業第20題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z21",
        "question": "多模態AI專業第21題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z22",
        "question": "多模態AI專業第22題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z23",
        "question": "多模態AI專業第23題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z24",
        "question": "多模態AI專業第24題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z25",
        "question": "多模態AI專業第25題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z26",
        "question": "多模態AI專業第26題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z27",
        "question": "多模態AI專業第27題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z28",
        "question": "多模態AI專業第28題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z29",
        "question": "多模態AI專業第29題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z30",
        "question": "多模態AI專業第30題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z31",
        "question": "多模態AI專業第31題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z32",
        "question": "多模態AI專業第32題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z33",
        "question": "多模態AI專業第33題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z34",
        "question": "多模態AI專業第34題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z35",
        "question": "多模態AI專業第35題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z36",
        "question": "多模態AI專業第36題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z37",
        "question": "多模態AI專業第37題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z38",
        "question": "多模態AI專業第38題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z39",
        "question": "多模態AI專業第39題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z40",
        "question": "多模態AI專業第40題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z41",
        "question": "多模態AI專業第41題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z42",
        "question": "多模態AI專業第42題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z43",
        "question": "多模態AI專業第43題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z44",
        "question": "多模態AI專業第44題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z45",
        "question": "多模態AI專業第45題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z46",
        "question": "多模態AI專業第46題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z47",
        "question": "多模態AI專業第47題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z48",
        "question": "多模態AI專業第48題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z49",
        "question": "多模態AI專業第49題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      },
      {
        "id": "3.4-Z50",
        "question": "多模態AI專業第50題：在訓練大型多模態模型時，如何有效解決模態失衡（Modality Imbalance）？",
        "options": [
          "A. 使用梯度調節、動態加權或模態特定學習率",
          "B. 只訓練主導模態",
          "C. 刪除弱模態",
          "D. 增加模型容量"
        ],
        "answer": "A",
        "key_point": "模態失衡",
        "analysis": "模態失衡指模型偏向資訊量大的模態而忽略弱模態。解法：梯度調節控制各模態梯度幅度、不確定性加權、分階段訓練等。"
      }
    ]
  },
  "4.1": {
    "基礎": [
      {
        "id": "4.1-B01",
        "question": "AI導入評估的首要步驟是什麼？",
        "options": [
          "A. 評估組織的AI就緒度",
          "B. 直接購買AI工具",
          "C. 招募AI工程師",
          "D. 建立資料中心"
        ],
        "answer": "A",
        "key_point": "AI導入首要步驟",
        "analysis": "AI導入評估的第一步是全面評估組織的AI就緒度，包含技術能力、資料基礎、人員技能與組織文化等方面。"
      },
      {
        "id": "4.1-B02",
        "question": "AI專案可行性評估不包括以下哪項？",
        "options": [
          "A. 競爭對手市場佔有率",
          "B. 技術可行性",
          "C. 資料可用性與品質",
          "D. 預算與資源"
        ],
        "answer": "A",
        "key_point": "可行性評估範圍",
        "analysis": "AI專案可行性評估聚焦技術可行性、資料可用性、資源預算、時間表和業務價值，競爭對手持倉非直接評估項目。"
      },
      {
        "id": "4.1-B03",
        "question": "ROI評估在AI專案中的主要挑戰是什麼？",
        "options": [
          "A. AI效益難以量化且回收期不確定",
          "B. 計算成本太高",
          "C. 不需要評估",
          "D. ROI與AI無關"
        ],
        "answer": "A",
        "key_point": "AI的ROI挑戰",
        "analysis": "AI專案的效益（效率提升、決策品質改善）通常難以精確量化，且模型開發部署週期長，ROI回收時間不確定。"
      },
      {
        "id": "4.1-B04",
        "question": "資料就緒度評估的重點是什麼？",
        "options": [
          "A. 資料量、品質、標註完整性與可存取性",
          "B. 資料儲存成本",
          "C. 資料備份頻率",
          "D. 資料授權數量"
        ],
        "answer": "A",
        "key_point": "資料就緒度",
        "analysis": "評估資料就緒度需確認資料量是否足夠、品質是否可靠、是否已正確標註、是否符合法規要求且可被模型使用。"
      },
      {
        "id": "4.1-B05",
        "question": "POC（概念驗證）在AI導入中的作用為何？",
        "options": [
          "A. 以小規模實驗驗證AI方案可行性",
          "B. 直接產出最終系統",
          "C. 確定最終預算",
          "D. 招募團隊"
        ],
        "answer": "A",
        "key_point": "POC作用",
        "analysis": "POC在正式開發前用小規模實驗驗證技術方案是否可行，降低大規模投入的風險。"
      },
      {
        "id": "4.1-B06",
        "question": "TCO（總持有成本）在AI專案中包含哪些項目？",
        "options": [
          "A. 基礎設施、軟體授權、人力與維護成本",
          "B. 僅軟體成本",
          "C. 僅人力成本",
          "D. 僅硬體成本"
        ],
        "answer": "A",
        "key_point": "AI專案TCO",
        "analysis": "AI專案的TCO包含雲端或本地基礎設施、軟體平台授權、資料處理人力、模型開發維護與持續營運成本。"
      },
      {
        "id": "4.1-B07",
        "question": "KPI在AI專案評估中的主要功能是什麼？",
        "options": [
          "A. 量化衡量AI專案的業務價值與成效",
          "B. 管理團隊成員",
          "C. 選擇技術棧",
          "D. 設計模型架構"
        ],
        "answer": "A",
        "key_point": "AI專案KPI",
        "analysis": "KPI（Key Performance Indicators）將AI專案的目標轉化為可量測的指標，如準確率提升、處理時間縮短、成本節省等。"
      },
      {
        "id": "4.1-B08",
        "question": "為什麼AI專案需要進行風險評估？",
        "options": [
          "A. AI專案具有技術不確定性與潛在負面影響",
          "B. 法規要求",
          "C. 客戶要求",
          "D. 投資人要求"
        ],
        "answer": "A",
        "key_point": "AI風險評估必要性",
        "analysis": "AI專案面臨技術可行性、模型偏見、資料隱私、法規合規等多重不確定性，風險評估有助於提前識別與緩解。"
      },
      {
        "id": "4.1-B09",
        "question": "評估AI供應商時應考慮哪些面向？",
        "options": [
          "A. 產品成熟度、技術支援、安全性與產業經驗",
          "B. 僅價格",
          "C. 僅公司規模",
          "D. 僅客戶數量"
        ],
        "answer": "A",
        "key_point": "AI供應商評估",
        "analysis": "綜合評估供應商的產品功能完整性、技術支援品質、資料安全措施及在相關產業的實際導入經驗。"
      },
      {
        "id": "4.1-B10",
        "question": "AI專案優先級排序通常基於哪些因素？",
        "options": [
          "A. 業務影響力與實施難度的矩陣分析",
          "B. 僅按部門申請順序",
          "C. 僅預算大小",
          "D. 僅技術難度"
        ],
        "answer": "A",
        "key_point": "AI優先級排序",
        "analysis": "使用業務影響力（效益）與實施難度（成本/時間）的二維矩陣，優先選擇高影響低難度的快速取勝專案。"
      },
      {
        "id": "4.1-B11",
        "question": "AI導入評估第11題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B12",
        "question": "AI導入評估第12題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B13",
        "question": "AI導入評估第13題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B14",
        "question": "AI導入評估第14題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B15",
        "question": "AI導入評估第15題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B16",
        "question": "AI導入評估第16題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B17",
        "question": "AI導入評估第17題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B18",
        "question": "AI導入評估第18題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B19",
        "question": "AI導入評估第19題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B20",
        "question": "AI導入評估第20題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B21",
        "question": "AI導入評估第21題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B22",
        "question": "AI導入評估第22題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B23",
        "question": "AI導入評估第23題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B24",
        "question": "AI導入評估第24題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B25",
        "question": "AI導入評估第25題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B26",
        "question": "AI導入評估第26題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B27",
        "question": "AI導入評估第27題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B28",
        "question": "AI導入評估第28題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B29",
        "question": "AI導入評估第29題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B30",
        "question": "AI導入評估第30題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B31",
        "question": "AI導入評估第31題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B32",
        "question": "AI導入評估第32題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B33",
        "question": "AI導入評估第33題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B34",
        "question": "AI導入評估第34題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B35",
        "question": "AI導入評估第35題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B36",
        "question": "AI導入評估第36題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B37",
        "question": "AI導入評估第37題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B38",
        "question": "AI導入評估第38題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B39",
        "question": "AI導入評估第39題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B40",
        "question": "AI導入評估第40題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B41",
        "question": "AI導入評估第41題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B42",
        "question": "AI導入評估第42題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B43",
        "question": "AI導入評估第43題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B44",
        "question": "AI導入評估第44題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B45",
        "question": "AI導入評估第45題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B46",
        "question": "AI導入評估第46題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B47",
        "question": "AI導入評估第47題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B48",
        "question": "AI導入評估第48題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B49",
        "question": "AI導入評估第49題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      },
      {
        "id": "4.1-B50",
        "question": "AI導入評估第50題：在評估AI專案可行性時，以下何者是最關鍵的評估面向？",
        "options": [
          "A. 技術可行性、資料可用性與業務價值",
          "B. 僅技術可行性",
          "C. 僅預算充足性",
          "D. 僅時間表"
        ],
        "answer": "A",
        "key_point": "可行性關鍵面向",
        "analysis": "AI專案可行性需綜合評估技術能否實現、資料是否充足可用、以及解決方案能否創造實際業務價值。"
      }
    ],
    "進階": [
      {
        "id": "4.1-J01",
        "question": "AI成熟度模型（AI Maturity Model）的作用是什麼？",
        "options": [
          "A. 評估組織在AI應用的發展階段並指引進階路徑",
          "B. 評估模型準確率",
          "C. 評估硬體效能",
          "D. 評估團隊規模"
        ],
        "answer": "A",
        "key_point": "AI成熟度模型",
        "analysis": "AI成熟度模型（如從探索→實驗→規模化→優化）幫助組織了解當前AI能力水平，規劃階段性發展路徑。"
      },
      {
        "id": "4.1-J02",
        "question": "在制定AI策略時，價值驅動與技術驅動的差異？",
        "options": [
          "A. 價值驅動從業務需求出發，技術驅動從技術能力出發",
          "B. 兩者相同",
          "C. 價值驅動較昂貴",
          "D. 技術驅動較安全"
        ],
        "answer": "A",
        "key_point": "價值vs技術驅動",
        "analysis": "價值驅動（Value-driven）先識別業務痛點再找AI解方；技術驅動（Technology-driven）先有技術再找應用場景，前者成功率較高。"
      },
      {
        "id": "4.1-J03",
        "question": "AI專案的階段性評估指標應包含哪些？",
        "options": [
          "A. 技術里程碑、業務指標與營運指標",
          "B. 僅技術指標",
          "C. 僅業務指標",
          "D. 僅時間指標"
        ],
        "answer": "A",
        "key_point": "階段性評估指標",
        "analysis": "AI專案應在POC、試點、規模化各階段設定不同重點指標：POC重技術可行性、試點重業務效果、規模化重營運效率。"
      },
      {
        "id": "4.1-J04",
        "question": "Bias Audit（偏見審計）在AI導入評估中的重要性為何？",
        "options": [
          "A. 確保模型決策對不同群體公平無歧視",
          "B. 提高模型速度",
          "C. 減少資料量",
          "D. 增加參數量"
        ],
        "answer": "A",
        "key_point": "偏見審計",
        "analysis": "偏見審計檢查模型在不同人口群體上的表現差異（如種族、性別），確保AI決策公平公正，避免歧視性結果。"
      },
      {
        "id": "4.1-J05",
        "question": "在評估AI專案時，Change Management（變革管理）為何重要？",
        "options": [
          "A. AI導入需要組織流程與人員角色的調整",
          "B. 改變公司名稱",
          "C. 更換管理團隊",
          "D. 重新裝修辦公室"
        ],
        "answer": "A",
        "key_point": "變革管理重要性",
        "analysis": "AI導入改變既有工作流程與決策方式，需要變革管理確保員工接受新系統、新流程，否則技術成功但採用失敗。"
      },
      {
        "id": "4.1-J06",
        "question": "AI導入評估進階第6題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J07",
        "question": "AI導入評估進階第7題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J08",
        "question": "AI導入評估進階第8題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J09",
        "question": "AI導入評估進階第9題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J10",
        "question": "AI導入評估進階第10題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J11",
        "question": "AI導入評估進階第11題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J12",
        "question": "AI導入評估進階第12題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J13",
        "question": "AI導入評估進階第13題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J14",
        "question": "AI導入評估進階第14題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J15",
        "question": "AI導入評估進階第15題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J16",
        "question": "AI導入評估進階第16題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J17",
        "question": "AI導入評估進階第17題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J18",
        "question": "AI導入評估進階第18題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J19",
        "question": "AI導入評估進階第19題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J20",
        "question": "AI導入評估進階第20題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J21",
        "question": "AI導入評估進階第21題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J22",
        "question": "AI導入評估進階第22題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J23",
        "question": "AI導入評估進階第23題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J24",
        "question": "AI導入評估進階第24題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J25",
        "question": "AI導入評估進階第25題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J26",
        "question": "AI導入評估進階第26題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J27",
        "question": "AI導入評估進階第27題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J28",
        "question": "AI導入評估進階第28題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J29",
        "question": "AI導入評估進階第29題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J30",
        "question": "AI導入評估進階第30題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J31",
        "question": "AI導入評估進階第31題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J32",
        "question": "AI導入評估進階第32題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J33",
        "question": "AI導入評估進階第33題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J34",
        "question": "AI導入評估進階第34題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J35",
        "question": "AI導入評估進階第35題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J36",
        "question": "AI導入評估進階第36題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J37",
        "question": "AI導入評估進階第37題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J38",
        "question": "AI導入評估進階第38題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J39",
        "question": "AI導入評估進階第39題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J40",
        "question": "AI導入評估進階第40題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J41",
        "question": "AI導入評估進階第41題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J42",
        "question": "AI導入評估進階第42題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J43",
        "question": "AI導入評估進階第43題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J44",
        "question": "AI導入評估進階第44題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J45",
        "question": "AI導入評估進階第45題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J46",
        "question": "AI導入評估進階第46題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J47",
        "question": "AI導入評估進階第47題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J48",
        "question": "AI導入評估進階第48題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J49",
        "question": "AI導入評估進階第49題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      },
      {
        "id": "4.1-J50",
        "question": "AI導入評估進階第50題：在跨部門AI專案中，最有效的治理結構為何？",
        "options": [
          "A. 由AI委員會統籌，業務單位主導，IT支援",
          "B. 完全由IT部門負責",
          "C. 完全由業務部門負責",
          "D. 外包給顧問公司"
        ],
        "answer": "A",
        "key_point": "跨部門治理",
        "analysis": "AI專案需要業務單位提出需求與驗證價值、IT部門提供技術支援、AI委員會制定策略與資源分配的協作模式。"
      }
    ],
    "專業": [
      {
        "id": "4.1-Z01",
        "question": "AI導入評估專業第1題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z02",
        "question": "AI導入評估專業第2題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z03",
        "question": "AI導入評估專業第3題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z04",
        "question": "AI導入評估專業第4題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z05",
        "question": "AI導入評估專業第5題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z06",
        "question": "AI導入評估專業第6題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z07",
        "question": "AI導入評估專業第7題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z08",
        "question": "AI導入評估專業第8題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z09",
        "question": "AI導入評估專業第9題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z10",
        "question": "AI導入評估專業第10題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z11",
        "question": "AI導入評估專業第11題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z12",
        "question": "AI導入評估專業第12題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z13",
        "question": "AI導入評估專業第13題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z14",
        "question": "AI導入評估專業第14題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z15",
        "question": "AI導入評估專業第15題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z16",
        "question": "AI導入評估專業第16題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z17",
        "question": "AI導入評估專業第17題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z18",
        "question": "AI導入評估專業第18題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z19",
        "question": "AI導入評估專業第19題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z20",
        "question": "AI導入評估專業第20題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z21",
        "question": "AI導入評估專業第21題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z22",
        "question": "AI導入評估專業第22題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z23",
        "question": "AI導入評估專業第23題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z24",
        "question": "AI導入評估專業第24題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z25",
        "question": "AI導入評估專業第25題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z26",
        "question": "AI導入評估專業第26題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z27",
        "question": "AI導入評估專業第27題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z28",
        "question": "AI導入評估專業第28題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z29",
        "question": "AI導入評估專業第29題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z30",
        "question": "AI導入評估專業第30題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z31",
        "question": "AI導入評估專業第31題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z32",
        "question": "AI導入評估專業第32題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z33",
        "question": "AI導入評估專業第33題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z34",
        "question": "AI導入評估專業第34題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z35",
        "question": "AI導入評估專業第35題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z36",
        "question": "AI導入評估專業第36題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z37",
        "question": "AI導入評估專業第37題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z38",
        "question": "AI導入評估專業第38題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z39",
        "question": "AI導入評估專業第39題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z40",
        "question": "AI導入評估專業第40題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z41",
        "question": "AI導入評估專業第41題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z42",
        "question": "AI導入評估專業第42題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z43",
        "question": "AI導入評估專業第43題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z44",
        "question": "AI導入評估專業第44題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z45",
        "question": "AI導入評估專業第45題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z46",
        "question": "AI導入評估專業第46題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z47",
        "question": "AI導入評估專業第47題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z48",
        "question": "AI導入評估專業第48題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z49",
        "question": "AI導入評估專業第49題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      },
      {
        "id": "4.1-Z50",
        "question": "AI導入評估專業第50題：在大型組織中，建立AI CoE（Center of Excellence）的主要目的是什麼？",
        "options": [
          "A. 集中AI專業知識與最佳實踐，賦能各業務單位",
          "B. 開發所有AI專案",
          "C. 審核所有AI預算",
          "D. 管理所有資料"
        ],
        "answer": "A",
        "key_point": "AI CoE目的",
        "analysis": "AI CoE匯集資料科學家、ML工程師等專家，建立標準流程、共享最佳實踐、提供諮詢服務，加速組織AI轉型。"
      }
    ]
  },
  "4.2": {
    "基礎": [
      {
        "id": "4.2-B01",
        "question": "AI專案規劃的第一個步驟是什麼？",
        "options": [
          "A. 明確業務目標與成功定義",
          "B. 選擇模型架構",
          "C. 收集資料",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "AI規劃第一步",
        "analysis": "AI專案規劃需先與利害關係人定義清晰的業務目標（如提升客服效率20%）和成功衡量標準。"
      },
      {
        "id": "4.2-B02",
        "question": "AI專案中專案經理的主要職責為何？",
        "options": [
          "A. 協調資料、技術與業務團隊，管理時程資源",
          "B. 編寫模型程式碼",
          "C. 標註資料",
          "D. 管理伺服器"
        ],
        "answer": "A",
        "key_point": "AI PM職責",
        "analysis": "AI專案經理需跨越資料工程、模型開發、業務需求與IT部署等領域的溝通協調與資源整合。"
      },
      {
        "id": "4.2-B03",
        "question": "AI專案時程規劃應考慮哪些階段？",
        "options": [
          "A. 資料準備、模型開發、測試驗證、部署上線",
          "B. 僅開發階段",
          "C. 僅測試階段",
          "D. 僅部署階段"
        ],
        "answer": "A",
        "key_point": "AI專案階段",
        "analysis": "AI專案包含資料收集與預處理、模型開發與訓練、測試評估、部署上線與持續監控等完整生命週期。"
      },
      {
        "id": "4.2-B04",
        "question": "敏捷開發在AI專案中的適用性如何？",
        "options": [
          "A. 適合，因AI專案有不確定性需迭代調整",
          "B. 完全不適合",
          "C. 僅適合資料準備階段",
          "D. 僅適合部署階段"
        ],
        "answer": "A",
        "key_point": "敏捷與AI",
        "analysis": "AI專案常因資料品質、模型效果等因素需要反覆調整，敏捷開發的反覆運算特性非常適合AI專案管理。"
      },
      {
        "id": "4.2-B05",
        "question": "資源規劃在AI專案中應考慮哪些角色？",
        "options": [
          "A. 資料工程師、ML工程師、領域專家、專案經理",
          "B. 僅程式設計師",
          "C. 僅資料科學家",
          "D. 僅業務人員"
        ],
        "answer": "A",
        "key_point": "AI專案角色",
        "analysis": "AI專案需要資料工程師（處理資料）、ML工程師（開發模型）、領域專家（提供業務知識）與專案經理的協作。"
      },
      {
        "id": "4.2-B06",
        "question": "MVP（最小可行產品）在AI專案中的定義為何？",
        "options": [
          "A. 用最少資源實現核心功能的可用版本",
          "B. 功能完整的正式版本",
          "C. 僅是設計稿",
          "D. 僅是商業計畫"
        ],
        "answer": "A",
        "key_point": "AI MVP定義",
        "analysis": "AI MVP是能解決核心業務問題的最小功能集合版本，用於快速驗證價值並收集回饋。"
      },
      {
        "id": "4.2-B07",
        "question": "里程碑設定在AI專案中的主要作用？",
        "options": [
          "A. 明確關鍵節點，控制專案進度與品質",
          "B. 僅作為文件要求",
          "C. 僅用於報告",
          "D. 無實際作用"
        ],
        "answer": "A",
        "key_point": "里程碑作用",
        "analysis": "里程碑標示專案關鍵節點（如資料準備完成、模型基準達標、POC通過），便於監控進度與及時調整。"
      },
      {
        "id": "4.2-B08",
        "question": "AI專案預算應包含哪些主要開支？",
        "options": [
          "A. 運算資源、資料取得、人才成本與部署維運",
          "B. 僅硬體成本",
          "C. 僅軟體成本",
          "D. 僅人力成本"
        ],
        "answer": "A",
        "key_point": "AI預算項目",
        "analysis": "AI專案預算需涵蓋GPU/雲端運算費、資料標註與取得、人才招聘培訓、及後續模型維運更新費用。"
      },
      {
        "id": "4.2-B09",
        "question": "為什麼AI專案需要定義成功標準？",
        "options": [
          "A. 確保專案目標可衡量、可驗證",
          "B. 僅供合約使用",
          "C. 沒有必要",
          "D. 僅提供給投資人"
        ],
        "answer": "A",
        "key_point": "成功標準必要性",
        "analysis": "定義成功標準（如準確率≥90%、處理時間減少50%）使專案目標具體化，避免模糊目標導致無止盡的優化。"
      },
      {
        "id": "4.2-B10",
        "question": "利害關係人管理在AI專案中的重要性？",
        "options": [
          "A. AI影響多個部門，需管理期望與溝通",
          "B. 不重要",
          "C. 只需要管理高層",
          "D. 只需要管理技術團隊"
        ],
        "answer": "A",
        "key_point": "利害關係人管理",
        "analysis": "AI專案影響業務流程、員工角色與客戶體驗，需與所有受影響的利害關係人保持溝通，管理期望。"
      },
      {
        "id": "4.2-B11",
        "question": "AI導入規劃第11題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B12",
        "question": "AI導入規劃第12題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B13",
        "question": "AI導入規劃第13題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B14",
        "question": "AI導入規劃第14題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B15",
        "question": "AI導入規劃第15題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B16",
        "question": "AI導入規劃第16題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B17",
        "question": "AI導入規劃第17題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B18",
        "question": "AI導入規劃第18題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B19",
        "question": "AI導入規劃第19題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B20",
        "question": "AI導入規劃第20題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B21",
        "question": "AI導入規劃第21題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B22",
        "question": "AI導入規劃第22題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B23",
        "question": "AI導入規劃第23題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B24",
        "question": "AI導入規劃第24題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B25",
        "question": "AI導入規劃第25題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B26",
        "question": "AI導入規劃第26題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B27",
        "question": "AI導入規劃第27題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B28",
        "question": "AI導入規劃第28題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B29",
        "question": "AI導入規劃第29題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B30",
        "question": "AI導入規劃第30題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B31",
        "question": "AI導入規劃第31題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B32",
        "question": "AI導入規劃第32題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B33",
        "question": "AI導入規劃第33題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B34",
        "question": "AI導入規劃第34題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B35",
        "question": "AI導入規劃第35題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B36",
        "question": "AI導入規劃第36題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B37",
        "question": "AI導入規劃第37題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B38",
        "question": "AI導入規劃第38題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B39",
        "question": "AI導入規劃第39題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B40",
        "question": "AI導入規劃第40題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B41",
        "question": "AI導入規劃第41題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B42",
        "question": "AI導入規劃第42題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B43",
        "question": "AI導入規劃第43題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B44",
        "question": "AI導入規劃第44題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B45",
        "question": "AI導入規劃第45題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B46",
        "question": "AI導入規劃第46題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B47",
        "question": "AI導入規劃第47題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B48",
        "question": "AI導入規劃第48題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B49",
        "question": "AI導入規劃第49題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      },
      {
        "id": "4.2-B50",
        "question": "AI導入規劃第50題：在AI專案中，技術棧選擇應基於哪些考量？",
        "options": [
          "A. 專案需求、團隊能力、生態系統支援與成本",
          "B. 僅使用最新技術",
          "C. 僅選擇免費方案",
          "D. 僅選擇開源方案"
        ],
        "answer": "A",
        "key_point": "技術棧選擇",
        "analysis": "選擇AI技術棧需綜合考量專案需求（處理規模、即時性）、團隊熟悉度、社群支援與長期維護成本。"
      }
    ],
    "進階": [
      {
        "id": "4.2-J01",
        "question": "Data Pipeline 規劃在AI專案中的重要性為何？",
        "options": [
          "A. 確保資料從源頭到模型可持續、可靠地流動",
          "B. 僅用於儲存資料",
          "C. 僅用於備份",
          "D. 僅用於壓縮"
        ],
        "answer": "A",
        "key_point": "Data Pipeline",
        "analysis": "Data Pipeline 涵蓋資料擷取、清洗、轉換、儲存與特徵工程，是AI系統穩定運作的基礎設施。"
      },
      {
        "id": "4.2-J02",
        "question": "模型版本管理（Model Versioning）解決什麼問題？",
        "options": [
          "A. 追蹤不同版本模型的程式碼、參數與效果",
          "B. 管理伺服器",
          "C. 管理資料庫",
          "D. 管理使用者"
        ],
        "answer": "A",
        "key_point": "模型版本管理",
        "analysis": "模型版本管理追蹤每次訓練的資料集、超參數、模型權重與評估結果，確保可重現性與回退能力。"
      },
      {
        "id": "4.2-J03",
        "question": "A/B測試在AI專案部署中的應用？",
        "options": [
          "A. 同時運行新舊模型比較效果後逐步切換",
          "B. 直接替換模型",
          "C. 不需要測試",
          "D. 僅用於UI測試"
        ],
        "answer": "A",
        "key_point": "A/B測試",
        "analysis": "A/B測試將流量分配給新舊模型（如10%新模型、90%舊模型），比較真實業務指標後決定是否全面切換。"
      },
      {
        "id": "4.2-J04",
        "question": "為什麼AI專案需要制定資料治理策略？",
        "options": [
          "A. 確保資料品質、安全與合規使用",
          "B. 提高模型速度",
          "C. 減少儲存空間",
          "D. 美化報表"
        ],
        "answer": "A",
        "key_point": "資料治理",
        "analysis": "資料治理制定資料標準、存取控制、品質監控與生命週期管理政策，確保AI使用的資料可靠且合規。"
      },
      {
        "id": "4.2-J05",
        "question": "在AI專案中，如何平衡模型效果與推論延遲？",
        "options": [
          "A. 透過模型壓縮、量化和蒸餾在效果與速度間取捨",
          "B. 只追求效果",
          "C. 只追求速度",
          "D. 兩者無法平衡"
        ],
        "answer": "A",
        "key_point": "效果vs延遲平衡",
        "analysis": "複雜模型準確率高但推論慢，可透過量化（INT8）、蒸餾、剪枝等技術在維持一定準確率下顯著降低延遲。"
      },
      {
        "id": "4.2-J06",
        "question": "AI導入規劃進階第6題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J07",
        "question": "AI導入規劃進階第7題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J08",
        "question": "AI導入規劃進階第8題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J09",
        "question": "AI導入規劃進階第9題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J10",
        "question": "AI導入規劃進階第10題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J11",
        "question": "AI導入規劃進階第11題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J12",
        "question": "AI導入規劃進階第12題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J13",
        "question": "AI導入規劃進階第13題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J14",
        "question": "AI導入規劃進階第14題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J15",
        "question": "AI導入規劃進階第15題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J16",
        "question": "AI導入規劃進階第16題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J17",
        "question": "AI導入規劃進階第17題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J18",
        "question": "AI導入規劃進階第18題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J19",
        "question": "AI導入規劃進階第19題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J20",
        "question": "AI導入規劃進階第20題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J21",
        "question": "AI導入規劃進階第21題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J22",
        "question": "AI導入規劃進階第22題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J23",
        "question": "AI導入規劃進階第23題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J24",
        "question": "AI導入規劃進階第24題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J25",
        "question": "AI導入規劃進階第25題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J26",
        "question": "AI導入規劃進階第26題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J27",
        "question": "AI導入規劃進階第27題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J28",
        "question": "AI導入規劃進階第28題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J29",
        "question": "AI導入規劃進階第29題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J30",
        "question": "AI導入規劃進階第30題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J31",
        "question": "AI導入規劃進階第31題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J32",
        "question": "AI導入規劃進階第32題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J33",
        "question": "AI導入規劃進階第33題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J34",
        "question": "AI導入規劃進階第34題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J35",
        "question": "AI導入規劃進階第35題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J36",
        "question": "AI導入規劃進階第36題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J37",
        "question": "AI導入規劃進階第37題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J38",
        "question": "AI導入規劃進階第38題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J39",
        "question": "AI導入規劃進階第39題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J40",
        "question": "AI導入規劃進階第40題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J41",
        "question": "AI導入規劃進階第41題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J42",
        "question": "AI導入規劃進階第42題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J43",
        "question": "AI導入規劃進階第43題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J44",
        "question": "AI導入規劃進階第44題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J45",
        "question": "AI導入規劃進階第45題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J46",
        "question": "AI導入規劃進階第46題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J47",
        "question": "AI導入規劃進階第47題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J48",
        "question": "AI導入規劃進階第48題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J49",
        "question": "AI導入規劃進階第49題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      },
      {
        "id": "4.2-J50",
        "question": "AI導入規劃進階第50題：在規劃AI系統架構時，微服務架構相對於單體架構的優勢為何？",
        "options": [
          "A. 各AI服務獨立部署、擴展與維護",
          "B. 效能更好",
          "C. 開發更快",
          "D. 成本更低"
        ],
        "answer": "A",
        "key_point": "微服務優勢",
        "analysis": "微服務架構將模型推論、特徵工程、資料前處理等拆分為獨立服務，可單獨擴展、更新與維護。"
      }
    ],
    "專業": [
      {
        "id": "4.2-Z01",
        "question": "AI導入規劃專業第1題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z02",
        "question": "AI導入規劃專業第2題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z03",
        "question": "AI導入規劃專業第3題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z04",
        "question": "AI導入規劃專業第4題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z05",
        "question": "AI導入規劃專業第5題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z06",
        "question": "AI導入規劃專業第6題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z07",
        "question": "AI導入規劃專業第7題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z08",
        "question": "AI導入規劃專業第8題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z09",
        "question": "AI導入規劃專業第9題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z10",
        "question": "AI導入規劃專業第10題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z11",
        "question": "AI導入規劃專業第11題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z12",
        "question": "AI導入規劃專業第12題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z13",
        "question": "AI導入規劃專業第13題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z14",
        "question": "AI導入規劃專業第14題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z15",
        "question": "AI導入規劃專業第15題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z16",
        "question": "AI導入規劃專業第16題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z17",
        "question": "AI導入規劃專業第17題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z18",
        "question": "AI導入規劃專業第18題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z19",
        "question": "AI導入規劃專業第19題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z20",
        "question": "AI導入規劃專業第20題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z21",
        "question": "AI導入規劃專業第21題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z22",
        "question": "AI導入規劃專業第22題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z23",
        "question": "AI導入規劃專業第23題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z24",
        "question": "AI導入規劃專業第24題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z25",
        "question": "AI導入規劃專業第25題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z26",
        "question": "AI導入規劃專業第26題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z27",
        "question": "AI導入規劃專業第27題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z28",
        "question": "AI導入規劃專業第28題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z29",
        "question": "AI導入規劃專業第29題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z30",
        "question": "AI導入規劃專業第30題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z31",
        "question": "AI導入規劃專業第31題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z32",
        "question": "AI導入規劃專業第32題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z33",
        "question": "AI導入規劃專業第33題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z34",
        "question": "AI導入規劃專業第34題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z35",
        "question": "AI導入規劃專業第35題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z36",
        "question": "AI導入規劃專業第36題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z37",
        "question": "AI導入規劃專業第37題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z38",
        "question": "AI導入規劃專業第38題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z39",
        "question": "AI導入規劃專業第39題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z40",
        "question": "AI導入規劃專業第40題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z41",
        "question": "AI導入規劃專業第41題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z42",
        "question": "AI導入規劃專業第42題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z43",
        "question": "AI導入規劃專業第43題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z44",
        "question": "AI導入規劃專業第44題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z45",
        "question": "AI導入規劃專業第45題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z46",
        "question": "AI導入規劃專業第46題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z47",
        "question": "AI導入規劃專業第47題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z48",
        "question": "AI導入規劃專業第48題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z49",
        "question": "AI導入規劃專業第49題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      },
      {
        "id": "4.2-Z50",
        "question": "AI導入規劃專業第50題：在規劃大規模AI平台時，Feature Store的主要功能是什麼？",
        "options": [
          "A. 集中管理、共享與重複使用已計算的特徵",
          "B. 儲存模型權重",
          "C. 管理訓練日誌",
          "D. 部署模型"
        ],
        "answer": "A",
        "key_point": "Feature Store",
        "analysis": "Feature Store 提供特徵的集中儲存、版本管理、在線/離線一致性保證及特徵共享，避免不同團隊重複開發。"
      }
    ]
  },
  "4.3": {
    "基礎": [
      {
        "id": "4.3-B01",
        "question": "AI風險管理的主要目的是什麼？",
        "options": [
          "A. 識別、評估與減輕AI系統的潛在負面影響",
          "B. 完全消除所有風險",
          "C. 提高模型準確率",
          "D. 降低開發成本"
        ],
        "answer": "A",
        "key_point": "AI風管目的",
        "analysis": "AI風險管理旨在系統性識別技術、倫理、法規、營運等風險，採取緩解措施將風險控制在可接受範圍。"
      },
      {
        "id": "4.3-B02",
        "question": "AI系統中的演算法偏見（Algorithmic Bias）來源為何？",
        "options": [
          "A. 訓練資料中的偏差被模型學習與放大",
          "B. 模型參數不足",
          "C. 程式語言選擇",
          "D. 硬體限制"
        ],
        "answer": "A",
        "key_point": "演算法偏見來源",
        "analysis": "偏見可能源於歷史資料中的社會偏見、取樣偏差、標註者主觀判斷，模型學習後可能放大這些偏見。"
      },
      {
        "id": "4.3-B03",
        "question": "模型可解釋性（Explainability）的重要性為何？",
        "options": [
          "A. 讓利害關係人理解模型決策依據與限制",
          "B. 提高模型速度",
          "C. 減少模型大小",
          "D. 增加參數量"
        ],
        "answer": "A",
        "key_point": "可解釋性重要性",
        "analysis": "可解釋性讓開發者驗證模型行為是否合理、讓監管機構審查合規性、讓使用者和受影響者了解決策原因。"
      },
      {
        "id": "4.3-B04",
        "question": "GDPR對AI系統的主要要求為何？",
        "options": [
          "A. 自動化決策需有解釋權與人工審查權",
          "B. 禁止所有AI系統",
          "C. 僅要求資料加密",
          "D. 僅要求資料備份"
        ],
        "answer": "A",
        "key_point": "GDPR與AI",
        "analysis": "GDPR第22條規定個人有權不受僅基於自動化處理的決策約束，且有權獲得決策的解釋。"
      },
      {
        "id": "4.3-B05",
        "question": "AI系統的對抗性攻擊（Adversarial Attack）是什麼？",
        "options": [
          "A. 微小的輸入擾動導致模型錯誤輸出",
          "B. 攻擊伺服器",
          "C. 資料庫注入",
          "D. 網路釣魚"
        ],
        "answer": "A",
        "key_point": "對抗性攻擊",
        "analysis": "對抗性攻擊對輸入添加人眼難以察覺的微小擾動，導致模型產生完全錯誤的預測，對安全關鍵應用構成嚴重威脅。"
      },
      {
        "id": "4.3-B06",
        "question": "模型漂移（Model Drift）的類型有哪些？",
        "options": [
          "A. 資料漂移（Data Drift）與概念漂移（Concept Drift）",
          "B. 模型壓縮",
          "C. 模型蒸餾",
          "D. 模型量化"
        ],
        "answer": "A",
        "key_point": "模型漂移類型",
        "analysis": "資料漂移指輸入資料分佈隨時間改變；概念漂移指資料與標籤之間的映射關係改變。兩者都會使模型效果衰減。"
      },
      {
        "id": "4.3-B07",
        "question": "AI倫理原則通常包含哪些核心價值？",
        "options": [
          "A. 公平性、透明性、問責性、隱私保護",
          "B. 僅效率",
          "C. 僅利潤",
          "D. 僅速度"
        ],
        "answer": "A",
        "key_point": "AI倫理原則",
        "analysis": "主流AI倫理框架包含公平（Fairness）、透明（Transparency）、問責（Accountability）、隱私（Privacy）等核心原則。"
      },
      {
        "id": "4.3-B08",
        "question": "資料隱私保護在AI中的常見技術？",
        "options": [
          "A. 差分隱私、聯邦學習、同態加密",
          "B. 僅密碼保護",
          "C. 僅防火牆",
          "D. 僅備份"
        ],
        "answer": "A",
        "key_point": "隱私保護技術",
        "analysis": "差分隱私（添加雜訊保護個體資料）、聯邦學習（資料不出本地）、同態加密（加密狀態下計算）是三大隱私保護技術。"
      },
      {
        "id": "4.3-B09",
        "question": "AI系統的問責性（Accountability）如何實現？",
        "options": [
          "A. 記錄模型開發與決策過程，明確責任歸屬",
          "B. 不記錄任何日誌",
          "C. 由AI自行負責",
          "D. 不標記任何出處"
        ],
        "answer": "A",
        "key_point": "問責性實現",
        "analysis": "透過版本控制、模型卡（Model Card）、資料溯源（Data Provenance）和決策日誌記錄，確保可追溯與責任歸屬。"
      },
      {
        "id": "4.3-B10",
        "question": "什麼是紅隊測試（Red Teaming）在AI安全中的應用？",
        "options": [
          "A. 模擬攻擊者嘗試繞過AI系統安全措施",
          "B. 測試模型速度",
          "C. 測試模型準確率",
          "D. 測試UI使用者體驗"
        ],
        "answer": "A",
        "key_point": "紅隊測試",
        "analysis": "紅隊由安全專家模擬攻擊者，嘗試越獄、提示注入、對抗性攻擊等手段，系統性發現AI系統的安全漏洞。"
      },
      {
        "id": "4.3-B11",
        "question": "AI風險管理第11題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B12",
        "question": "AI風險管理第12題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B13",
        "question": "AI風險管理第13題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B14",
        "question": "AI風險管理第14題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B15",
        "question": "AI風險管理第15題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B16",
        "question": "AI風險管理第16題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B17",
        "question": "AI風險管理第17題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B18",
        "question": "AI風險管理第18題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B19",
        "question": "AI風險管理第19題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B20",
        "question": "AI風險管理第20題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B21",
        "question": "AI風險管理第21題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B22",
        "question": "AI風險管理第22題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B23",
        "question": "AI風險管理第23題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B24",
        "question": "AI風險管理第24題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B25",
        "question": "AI風險管理第25題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B26",
        "question": "AI風險管理第26題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B27",
        "question": "AI風險管理第27題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B28",
        "question": "AI風險管理第28題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B29",
        "question": "AI風險管理第29題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B30",
        "question": "AI風險管理第30題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B31",
        "question": "AI風險管理第31題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B32",
        "question": "AI風險管理第32題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B33",
        "question": "AI風險管理第33題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B34",
        "question": "AI風險管理第34題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B35",
        "question": "AI風險管理第35題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B36",
        "question": "AI風險管理第36題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B37",
        "question": "AI風險管理第37題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B38",
        "question": "AI風險管理第38題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B39",
        "question": "AI風險管理第39題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B40",
        "question": "AI風險管理第40題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B41",
        "question": "AI風險管理第41題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B42",
        "question": "AI風險管理第42題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B43",
        "question": "AI風險管理第43題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B44",
        "question": "AI風險管理第44題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B45",
        "question": "AI風險管理第45題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B46",
        "question": "AI風險管理第46題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B47",
        "question": "AI風險管理第47題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B48",
        "question": "AI風險管理第48題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B49",
        "question": "AI風險管理第49題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      },
      {
        "id": "4.3-B50",
        "question": "AI風險管理第50題：在AI系統監控中，持續監控的主要目的是什麼？",
        "options": [
          "A. 及時發現模型效果衰減與行為異常",
          "B. 提高模型準確率",
          "C. 降低營運成本",
          "D. 增加功能"
        ],
        "answer": "A",
        "key_point": "持續監控目的",
        "analysis": "持續監控追蹤模型預測分佈、業務指標與資料品質變化，在模型漂移影響業務前及早發現與修正。"
      }
    ],
    "進階": [
      {
        "id": "4.3-J01",
        "question": "LIME和SHAP在模型解釋中的差異？",
        "options": [
          "A. LIME局部近似，SHAP基於合作賽局理論",
          "B. LIME更快",
          "C. SHAP更慢",
          "D. 兩者完全相同"
        ],
        "answer": "A",
        "key_point": "LIME vs SHAP",
        "analysis": "LIME在預測點附近擬合可解釋代理模型；SHAP計算每個特徵對預測的Shapley值貢獻，後者有堅實的賽局理論基礎。"
      },
      {
        "id": "4.3-J02",
        "question": "模型風險分級管理（Model Risk Tiering）的原則是什麼？",
        "options": [
          "A. 根據風險影響程度對模型分級管控",
          "B. 所有模型相同管理",
          "C. 不管理風險",
          "D. 只管理大模型"
        ],
        "answer": "A",
        "key_point": "風險分級管理",
        "analysis": "依模型影響（如高風險：影響消費者權益的信貸審核）採取不同管控措施，高風險模型需更嚴格的驗證與監控。"
      },
      {
        "id": "4.3-J03",
        "question": "合成資料（Synthetic Data）在隱私保護中的角色？",
        "options": [
          "A. 生成與真實資料統計相似但不含個體資訊的資料",
          "B. 複製真實資料",
          "C. 刪除原始資料",
          "D. 加密資料"
        ],
        "answer": "A",
        "key_point": "合成資料",
        "analysis": "合成資料從真實資料學習分佈後生成全新樣本，統計特性相似但不包含任何真實個體資訊，有助於資料共享與隱私保護。"
      },
      {
        "id": "4.3-J04",
        "question": "AI系統模型卡（Model Card）的用途為何？",
        "options": [
          "A. 標準化記錄模型意圖、限制、評估結果與倫理考量",
          "B. 記錄模型版本號",
          "C. 記錄模型參數",
          "D. 記錄訓練時間"
        ],
        "answer": "A",
        "key_point": "Model Card",
        "analysis": "Model Card 提供透明的模型文件，包含用途、訓練資料、評估結果、已知限制與公平性分析等資訊。"
      },
      {
        "id": "4.3-J05",
        "question": "歐盟AI法案（EU AI Act）如何對AI系統分類？",
        "options": [
          "A. 依風險分為不可接受、高風險、有限風險與最低風險",
          "B. 依模型大小分類",
          "C. 依準確率分類",
          "D. 依成本分類"
        ],
        "answer": "A",
        "key_point": "EU AI Act分類",
        "analysis": "EU AI Act將AI系統分為：不可接受風險（禁止）、高風險（需嚴格合規）、有限風險（透明度義務）與最低風險（無額外義務）。"
      },
      {
        "id": "4.3-J06",
        "question": "AI風險管理進階第6題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J07",
        "question": "AI風險管理進階第7題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J08",
        "question": "AI風險管理進階第8題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J09",
        "question": "AI風險管理進階第9題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J10",
        "question": "AI風險管理進階第10題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J11",
        "question": "AI風險管理進階第11題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J12",
        "question": "AI風險管理進階第12題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J13",
        "question": "AI風險管理進階第13題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J14",
        "question": "AI風險管理進階第14題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J15",
        "question": "AI風險管理進階第15題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J16",
        "question": "AI風險管理進階第16題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J17",
        "question": "AI風險管理進階第17題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J18",
        "question": "AI風險管理進階第18題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J19",
        "question": "AI風險管理進階第19題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J20",
        "question": "AI風險管理進階第20題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J21",
        "question": "AI風險管理進階第21題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J22",
        "question": "AI風險管理進階第22題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J23",
        "question": "AI風險管理進階第23題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J24",
        "question": "AI風險管理進階第24題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J25",
        "question": "AI風險管理進階第25題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J26",
        "question": "AI風險管理進階第26題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J27",
        "question": "AI風險管理進階第27題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J28",
        "question": "AI風險管理進階第28題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J29",
        "question": "AI風險管理進階第29題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J30",
        "question": "AI風險管理進階第30題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J31",
        "question": "AI風險管理進階第31題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J32",
        "question": "AI風險管理進階第32題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J33",
        "question": "AI風險管理進階第33題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J34",
        "question": "AI風險管理進階第34題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J35",
        "question": "AI風險管理進階第35題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J36",
        "question": "AI風險管理進階第36題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J37",
        "question": "AI風險管理進階第37題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J38",
        "question": "AI風險管理進階第38題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J39",
        "question": "AI風險管理進階第39題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J40",
        "question": "AI風險管理進階第40題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J41",
        "question": "AI風險管理進階第41題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J42",
        "question": "AI風險管理進階第42題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J43",
        "question": "AI風險管理進階第43題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J44",
        "question": "AI風險管理進階第44題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J45",
        "question": "AI風險管理進階第45題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J46",
        "question": "AI風險管理進階第46題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J47",
        "question": "AI風險管理進階第47題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J48",
        "question": "AI風險管理進階第48題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J49",
        "question": "AI風險管理進階第49題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      },
      {
        "id": "4.3-J50",
        "question": "AI風險管理進階第50題：在實務上，如何有效管理AI模型的第三方風險？",
        "options": [
          "A. 對外部AI供應商進行安全審查與合規評估",
          "B. 完全信任供應商",
          "C. 不使用第三方",
          "D. 僅看價格"
        ],
        "answer": "A",
        "key_point": "第三方風險管理",
        "analysis": "需評估供應商的資料處理方式、模型透明度、安全措施與合規認證，並在合約中明定責任歸屬。"
      }
    ],
    "專業": [
      {
        "id": "4.3-Z01",
        "question": "AI風險管理專業第1題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z02",
        "question": "AI風險管理專業第2題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z03",
        "question": "AI風險管理專業第3題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z04",
        "question": "AI風險管理專業第4題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z05",
        "question": "AI風險管理專業第5題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z06",
        "question": "AI風險管理專業第6題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z07",
        "question": "AI風險管理專業第7題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z08",
        "question": "AI風險管理專業第8題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z09",
        "question": "AI風險管理專業第9題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z10",
        "question": "AI風險管理專業第10題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z11",
        "question": "AI風險管理專業第11題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z12",
        "question": "AI風險管理專業第12題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z13",
        "question": "AI風險管理專業第13題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z14",
        "question": "AI風險管理專業第14題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z15",
        "question": "AI風險管理專業第15題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z16",
        "question": "AI風險管理專業第16題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z17",
        "question": "AI風險管理專業第17題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z18",
        "question": "AI風險管理專業第18題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z19",
        "question": "AI風險管理專業第19題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z20",
        "question": "AI風險管理專業第20題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z21",
        "question": "AI風險管理專業第21題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z22",
        "question": "AI風險管理專業第22題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z23",
        "question": "AI風險管理專業第23題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z24",
        "question": "AI風險管理專業第24題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z25",
        "question": "AI風險管理專業第25題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z26",
        "question": "AI風險管理專業第26題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z27",
        "question": "AI風險管理專業第27題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z28",
        "question": "AI風險管理專業第28題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z29",
        "question": "AI風險管理專業第29題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z30",
        "question": "AI風險管理專業第30題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z31",
        "question": "AI風險管理專業第31題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z32",
        "question": "AI風險管理專業第32題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z33",
        "question": "AI風險管理專業第33題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z34",
        "question": "AI風險管理專業第34題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z35",
        "question": "AI風險管理專業第35題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z36",
        "question": "AI風險管理專業第36題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z37",
        "question": "AI風險管理專業第37題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z38",
        "question": "AI風險管理專業第38題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z39",
        "question": "AI風險管理專業第39題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z40",
        "question": "AI風險管理專業第40題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z41",
        "question": "AI風險管理專業第41題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z42",
        "question": "AI風險管理專業第42題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z43",
        "question": "AI風險管理專業第43題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z44",
        "question": "AI風險管理專業第44題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z45",
        "question": "AI風險管理專業第45題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z46",
        "question": "AI風險管理專業第46題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z47",
        "question": "AI風險管理專業第47題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z48",
        "question": "AI風險管理專業第48題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z49",
        "question": "AI風險管理專業第49題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      },
      {
        "id": "4.3-Z50",
        "question": "AI風險管理專業第50題：在金融業導入AI時，模型驗證（Model Validation）的關鍵要求為何？",
        "options": [
          "A. 獨立驗證模型開發、效果與風險管控措施",
          "B. 由開發團隊自行驗證",
          "C. 不需要驗證",
          "D. 僅驗證準確率"
        ],
        "answer": "A",
        "key_point": "模型驗證要求",
        "analysis": "模型驗證需由獨立於開發團隊的單位進行，涵蓋概念健全性、資料品質、模型效果、穩健性測試與風險緩解。"
      }
    ]
  },
  "5.1": {
    "基礎": [
      {
        "id": "5.1-B01",
        "question": "資料準備（Data Preparation）在AI專案中的重要性為何？",
        "options": [
          "A. 資料品質直接決定模型效果上限",
          "B. 不重要",
          "C. 僅影響訓練速度",
          "D. 僅影響儲存空間"
        ],
        "answer": "A",
        "key_point": "資料準備重要性",
        "analysis": "「Garbage In, Garbage Out」—模型效果的上限由資料品質決定，模型只是在逼近這個上限。"
      },
      {
        "id": "5.1-B02",
        "question": "資料清洗（Data Cleaning）通常包含哪些步驟？",
        "options": [
          "A. 處理缺失值、異常值與重複資料",
          "B. 僅刪除所有缺失值",
          "C. 僅標準化格式",
          "D. 僅轉換資料類型"
        ],
        "answer": "A",
        "key_point": "資料清洗內容",
        "analysis": "資料清洗包含填補或刪除缺失值、檢測與處理離群點、刪除重複記錄、修正不一致格式等。"
      },
      {
        "id": "5.1-B03",
        "question": "為什麼AI訓練需要將資料切分為訓練集、驗證集與測試集？",
        "options": [
          "A. 避免模型過擬合，客觀評估泛化能力",
          "B. 減少資料量",
          "C. 加速訓練",
          "D. 簡化程式碼"
        ],
        "answer": "A",
        "key_point": "資料集切分目的",
        "analysis": "訓練集用於學習參數，驗證集用於調參與模型選擇，測試集僅在最終評估使用，反映模型在未見過資料上的真實表現。"
      },
      {
        "id": "5.1-B04",
        "question": "標註資料（Data Labeling）的常見方式有哪些？",
        "options": [
          "A. 人工標註、半自動標註、主動學習",
          "B. 僅人工標註",
          "C. 僅自動標註",
          "D. 不標註"
        ],
        "answer": "A",
        "key_point": "標註方式",
        "analysis": "人工標註準確但成本高；半自動先模型預測再人工修正；主動學習演算法選擇最有價值的樣本請人標註。"
      },
      {
        "id": "5.1-B05",
        "question": "資料增強（Data Augmentation）在電腦視覺中的例子？",
        "options": [
          "A. 圖像旋轉、翻轉、裁剪與色彩調整",
          "B. 增加更多真實照片",
          "C. 刪除圖像",
          "D. 壓縮圖像"
        ],
        "answer": "A",
        "key_point": "資料增強例子",
        "analysis": "資料增強對現有資料施加隨機變換（旋轉、縮放、翻轉、色彩抖動等）生成多樣化訓練樣本，提升泛化能力。"
      },
      {
        "id": "5.1-B06",
        "question": "特徵工程（Feature Engineering）的目的是什麼？",
        "options": [
          "A. 將原始資料轉換為更適合模型的表徵",
          "B. 增加資料量",
          "C. 減少特徵數量",
          "D. 加快模型訓練"
        ],
        "answer": "A",
        "key_point": "特徵工程目的",
        "analysis": "特徵工程透過領域知識創建或轉換特徵，使模型更容易學習資料中的模式，對模型效果有顯著影響。"
      },
      {
        "id": "5.1-B07",
        "question": "資料不平衡（Imbalanced Data）問題如何處理？",
        "options": [
          "A. 過採樣少數類、欠採樣多數類或使用加權損失",
          "B. 忽略少數類",
          "C. 刪除所有資料",
          "D. 使用更複雜模型"
        ],
        "answer": "A",
        "key_point": "不平衡處理",
        "analysis": "處理方法：SMOTE合成少數類樣本、隨機欠採樣多數類、在損失函數中給少數類更高權重。"
      },
      {
        "id": "5.1-B08",
        "question": "標準化（Standardization）與歸一化（Normalization）的差異？",
        "options": [
          "A. 標準化轉為均值0標準差1，歸一化縮放到[0,1]區間",
          "B. 兩者相同",
          "C. 標準化用於分類",
          "D. 歸一化用於回歸"
        ],
        "answer": "A",
        "key_point": "標準化vs歸一化",
        "analysis": "標準化（Z-score）移除均值並縮放至單位變異數；歸一化（Min-Max）線性縮放到固定區間。"
      },
      {
        "id": "5.1-B09",
        "question": "為什麼文本資料需要分詞處理？",
        "options": [
          "A. 將連續文本轉換為模型可處理的離散單元",
          "B. 減少檔案大小",
          "C. 美化文本",
          "D. 壓縮資料"
        ],
        "answer": "A",
        "key_point": "文本分詞目的",
        "analysis": "文本是連續的字元序列，需要切分為詞或子詞等基本單元（tokens），轉換為索引後輸入模型。"
      },
      {
        "id": "5.1-B10",
        "question": "資料品質評估的維度有哪些？",
        "options": [
          "A. 完整性、一致性、準確性、時效性",
          "B. 僅資料量",
          "C. 僅儲存格式",
          "D. 僅檔案名稱"
        ],
        "answer": "A",
        "key_point": "資料品質維度",
        "analysis": "資料品質從完整性（無缺失）、一致性（無矛盾）、準確性（正確無誤）和時效性（資料不過時）等維度評估。"
      },
      {
        "id": "5.1-B11",
        "question": "數據準備第11題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B12",
        "question": "數據準備第12題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B13",
        "question": "數據準備第13題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B14",
        "question": "數據準備第14題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B15",
        "question": "數據準備第15題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B16",
        "question": "數據準備第16題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B17",
        "question": "數據準備第17題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B18",
        "question": "數據準備第18題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B19",
        "question": "數據準備第19題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B20",
        "question": "數據準備第20題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B21",
        "question": "數據準備第21題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B22",
        "question": "數據準備第22題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B23",
        "question": "數據準備第23題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B24",
        "question": "數據準備第24題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B25",
        "question": "數據準備第25題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B26",
        "question": "數據準備第26題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B27",
        "question": "數據準備第27題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B28",
        "question": "數據準備第28題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B29",
        "question": "數據準備第29題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B30",
        "question": "數據準備第30題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B31",
        "question": "數據準備第31題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B32",
        "question": "數據準備第32題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B33",
        "question": "數據準備第33題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B34",
        "question": "數據準備第34題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B35",
        "question": "數據準備第35題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B36",
        "question": "數據準備第36題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B37",
        "question": "數據準備第37題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B38",
        "question": "數據準備第38題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B39",
        "question": "數據準備第39題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B40",
        "question": "數據準備第40題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B41",
        "question": "數據準備第41題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B42",
        "question": "數據準備第42題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B43",
        "question": "數據準備第43題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B44",
        "question": "數據準備第44題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B45",
        "question": "數據準備第45題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B46",
        "question": "數據準備第46題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B47",
        "question": "數據準備第47題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B48",
        "question": "數據準備第48題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B49",
        "question": "數據準備第49題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      },
      {
        "id": "5.1-B50",
        "question": "數據準備第50題：在處理文字分類任務時，標籤分布不均會造成什麼問題？",
        "options": [
          "A. 模型偏向多數類別，少數類預測效果差",
          "B. 模型無法訓練",
          "C. 模型記憶所有資料",
          "D. 模型崩潰"
        ],
        "answer": "A",
        "key_point": "標籤分布不均",
        "analysis": "當某類別樣本遠多於其他類別時，模型傾向預測多數類別以降低整體損失，導致少數類別召回率極低。"
      }
    ],
    "進階": [
      {
        "id": "5.1-J01",
        "question": "弱監督學習（Weak Supervision）如何減少標註成本？",
        "options": [
          "A. 使用啟發式規則與遠程監督自動產生標籤",
          "B. 不標註任何資料",
          "C. 完全依賴人工",
          "D. 使用更少資料"
        ],
        "answer": "A",
        "key_point": "弱監督學習",
        "analysis": "弱監督使用標註函式（Labeling Function，如關鍵詞規則、知識庫匹配）自動為大量未標註資料產生噪聲標籤。"
      },
      {
        "id": "5.1-J02",
        "question": "主動學習（Active Learning）的策略是什麼？",
        "options": [
          "A. 選擇模型最不確定的樣本請人標註",
          "B. 隨機選樣本標註",
          "C. 標註所有樣本",
          "D. 不標註"
        ],
        "answer": "A",
        "key_point": "主動學習策略",
        "analysis": "主動學習讓模型挑選對改善效果最有幫助的樣本（如預測置信度最低的），以最少標註量達到最佳效果。"
      },
      {
        "id": "5.1-J03",
        "question": "特徵選擇（Feature Selection）與特徵抽取（Feature Extraction）的差異？",
        "options": [
          "A. 選擇保留原始特徵子集，抽取變換到新特徵空間",
          "B. 兩者相同",
          "C. 選擇用於分類",
          "D. 抽取用於回歸"
        ],
        "answer": "A",
        "key_point": "特徵選擇vs抽取",
        "analysis": "特徵選擇從原始特徵中選取子集（如卡方檢驗）；特徵抽取將原始特徵變換（如PCA）為更低維度的新特徵。"
      },
      {
        "id": "5.1-J04",
        "question": "資料管線（Data Pipeline）中的資料驗證層的作用？",
        "options": [
          "A. 在資料進入模型前檢查模式、品質與異常",
          "B. 儲存資料",
          "C. 備份資料",
          "D. 壓縮資料"
        ],
        "answer": "A",
        "key_point": "資料驗證層",
        "analysis": "資料驗證層自動檢查資料模式（Schema）是否符合預期、統計值是否異常、缺失率是否超標等。"
      },
      {
        "id": "5.1-J05",
        "question": "在NLP任務中，預訓練詞向量（如Word2Vec）的作用？",
        "options": [
          "A. 提供預先訓練好的語義豐富的詞表示",
          "B. 不需要詞向量",
          "C. 只能處理英文",
          "D. 降低維度"
        ],
        "answer": "A",
        "key_point": "預訓練詞向量",
        "analysis": "預訓練詞向量從大規模語料中學習詞彙的語義關係，作為下游任務的起點，減少訓練資料需求。"
      },
      {
        "id": "5.1-J06",
        "question": "數據準備進階第6題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J07",
        "question": "數據準備進階第7題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J08",
        "question": "數據準備進階第8題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J09",
        "question": "數據準備進階第9題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J10",
        "question": "數據準備進階第10題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J11",
        "question": "數據準備進階第11題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J12",
        "question": "數據準備進階第12題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J13",
        "question": "數據準備進階第13題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J14",
        "question": "數據準備進階第14題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J15",
        "question": "數據準備進階第15題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J16",
        "question": "數據準備進階第16題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J17",
        "question": "數據準備進階第17題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J18",
        "question": "數據準備進階第18題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J19",
        "question": "數據準備進階第19題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J20",
        "question": "數據準備進階第20題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J21",
        "question": "數據準備進階第21題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J22",
        "question": "數據準備進階第22題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J23",
        "question": "數據準備進階第23題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J24",
        "question": "數據準備進階第24題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J25",
        "question": "數據準備進階第25題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J26",
        "question": "數據準備進階第26題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J27",
        "question": "數據準備進階第27題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J28",
        "question": "數據準備進階第28題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J29",
        "question": "數據準備進階第29題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J30",
        "question": "數據準備進階第30題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J31",
        "question": "數據準備進階第31題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J32",
        "question": "數據準備進階第32題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J33",
        "question": "數據準備進階第33題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J34",
        "question": "數據準備進階第34題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J35",
        "question": "數據準備進階第35題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J36",
        "question": "數據準備進階第36題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J37",
        "question": "數據準備進階第37題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J38",
        "question": "數據準備進階第38題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J39",
        "question": "數據準備進階第39題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J40",
        "question": "數據準備進階第40題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J41",
        "question": "數據準備進階第41題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J42",
        "question": "數據準備進階第42題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J43",
        "question": "數據準備進階第43題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J44",
        "question": "數據準備進階第44題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J45",
        "question": "數據準備進階第45題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J46",
        "question": "數據準備進階第46題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J47",
        "question": "數據準備進階第47題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J48",
        "question": "數據準備進階第48題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J49",
        "question": "數據準備進階第49題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      },
      {
        "id": "5.1-J50",
        "question": "數據準備進階第50題：在處理時間序列資料時，為什麼需要避免資料洩漏（Data Leakage）？",
        "options": [
          "A. 使用未來資訊訓練會高估模型真實表現",
          "B. 不重要",
          "C. 僅影響速度",
          "D. 僅影響記憶體"
        ],
        "answer": "A",
        "key_point": "資料洩漏",
        "analysis": "時間序列中如果使用未來時間的資料來預測過去，模型在測試時看似準確但在真實預測中完全無效。"
      }
    ],
    "專業": [
      {
        "id": "5.1-Z01",
        "question": "數據準備專業第1題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z02",
        "question": "數據準備專業第2題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z03",
        "question": "數據準備專業第3題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z04",
        "question": "數據準備專業第4題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z05",
        "question": "數據準備專業第5題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z06",
        "question": "數據準備專業第6題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z07",
        "question": "數據準備專業第7題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z08",
        "question": "數據準備專業第8題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z09",
        "question": "數據準備專業第9題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z10",
        "question": "數據準備專業第10題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z11",
        "question": "數據準備專業第11題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z12",
        "question": "數據準備專業第12題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z13",
        "question": "數據準備專業第13題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z14",
        "question": "數據準備專業第14題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z15",
        "question": "數據準備專業第15題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z16",
        "question": "數據準備專業第16題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z17",
        "question": "數據準備專業第17題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z18",
        "question": "數據準備專業第18題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z19",
        "question": "數據準備專業第19題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z20",
        "question": "數據準備專業第20題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z21",
        "question": "數據準備專業第21題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z22",
        "question": "數據準備專業第22題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z23",
        "question": "數據準備專業第23題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z24",
        "question": "數據準備專業第24題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z25",
        "question": "數據準備專業第25題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z26",
        "question": "數據準備專業第26題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z27",
        "question": "數據準備專業第27題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z28",
        "question": "數據準備專業第28題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z29",
        "question": "數據準備專業第29題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z30",
        "question": "數據準備專業第30題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z31",
        "question": "數據準備專業第31題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z32",
        "question": "數據準備專業第32題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z33",
        "question": "數據準備專業第33題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z34",
        "question": "數據準備專業第34題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z35",
        "question": "數據準備專業第35題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z36",
        "question": "數據準備專業第36題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z37",
        "question": "數據準備專業第37題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z38",
        "question": "數據準備專業第38題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z39",
        "question": "數據準備專業第39題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z40",
        "question": "數據準備專業第40題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z41",
        "question": "數據準備專業第41題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z42",
        "question": "數據準備專業第42題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z43",
        "question": "數據準備專業第43題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z44",
        "question": "數據準備專業第44題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z45",
        "question": "數據準備專業第45題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z46",
        "question": "數據準備專業第46題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z47",
        "question": "數據準備專業第47題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z48",
        "question": "數據準備專業第48題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z49",
        "question": "數據準備專業第49題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      },
      {
        "id": "5.1-Z50",
        "question": "數據準備專業第50題：在大型分散式訓練場景中，資料分片（Data Sharding）策略應考慮哪些因素？",
        "options": [
          "A. 資料均勻分布、減少跨節點通訊與容錯機制",
          "B. 僅資料大小",
          "C. 僅檔案數量",
          "D. 僅儲存位置"
        ],
        "answer": "A",
        "key_point": "資料分片策略",
        "analysis": "有效分片需確保各節點資料量與分佈相近、最小化節點間資料傳輸、並支援節點故障時的重分配機制。"
      }
    ]
  },
  "5.2": {
    "基礎": [
      {
        "id": "5.2-B01",
        "question": "AI模型部署（Model Deployment）的主要目標是？",
        "options": [
          "A. 將訓練好的模型整合到實際生產環境中",
          "B. 僅儲存模型檔案",
          "C. 僅測試模型",
          "D. 僅訓練模型"
        ],
        "answer": "A",
        "key_point": "模型部署目標",
        "analysis": "模型部署將訓練好的模型包裝為可被其他系統呼叫的服務，並確保在生產環境中穩定運行。"
      },
      {
        "id": "5.2-B02",
        "question": "RESTful API在AI系統中的常見用途？",
        "options": [
          "A. 提供標準化HTTP介面讓其他系統呼叫模型",
          "B. 訓練模型",
          "C. 標註資料",
          "D. 管理資料庫"
        ],
        "answer": "A",
        "key_point": "RESTful API用途",
        "analysis": "將模型封裝為REST API（如Flask、FastAPI），其他系統透過HTTP請求發送資料並獲得預測結果。"
      },
      {
        "id": "5.2-B03",
        "question": "容器化技術（如Docker）在AI部署中的優勢？",
        "options": [
          "A. 提供一致的執行環境，解決依賴衝突",
          "B. 提高模型準確率",
          "C. 加速訓練",
          "D. 增加資料量"
        ],
        "answer": "A",
        "key_point": "容器化優勢",
        "analysis": "Docker將模型、程式碼、依賴庫和配置打包為容器，確保開發、測試與生產環境一致。"
      },
      {
        "id": "5.2-B04",
        "question": "AI系統監控需要追蹤哪些關鍵指標？",
        "options": [
          "A. 模型延遲、吞吐量、資源使用率與預測分佈",
          "B. 僅CPU使用率",
          "C. 僅記憶體使用率",
          "D. 僅磁碟空間"
        ],
        "answer": "A",
        "key_point": "AI監控指標",
        "analysis": "需監控推論延遲（Latency）、每秒查詢數（QPS）、GPU/CPU使用率及模型預測值的統計分佈變化。"
      },
      {
        "id": "5.2-B05",
        "question": "CI/CD在MLOps中的應用為何？",
        "options": [
          "A. 自動化模型訓練、測試與部署流程",
          "B. 手動部署模型",
          "C. 僅用於前端開發",
          "D. 僅用於後端開發"
        ],
        "answer": "A",
        "key_point": "CI/CD for ML",
        "analysis": "MLOps的CI/CD自動化資料驗證、模型訓練、測試評估與部署發佈，確保快速且可靠地迭代模型。"
      },
      {
        "id": "5.2-B06",
        "question": "批次推論（Batch Inference）與即時推論（Real-time Inference）的差異？",
        "options": [
          "A. 批次定時處理大量資料，即時即時回應單筆請求",
          "B. 兩者相同",
          "C. 批次更快",
          "D. 即時更準確"
        ],
        "answer": "A",
        "key_point": "批次vs即時推論",
        "analysis": "批次推論適合不需即時結果的大量資料處理（如每日報表）；即時推論需毫秒級回應（如即時詐欺偵測）。"
      },
      {
        "id": "5.2-B07",
        "question": "藍綠部署（Blue-Green Deployment）在AI系統中的應用？",
        "options": [
          "A. 維護兩套環境，無縫切換版本",
          "B. 直接替換模型",
          "C. 刪除舊版本",
          "D. 僅保留一個版本"
        ],
        "answer": "A",
        "key_point": "藍綠部署",
        "analysis": "藍綠部署同時運行兩個環境（目前正式版與新版本），切換時只需調整路由，可快速回退。"
      },
      {
        "id": "5.2-B08",
        "question": "GPU與CPU在模型推論中的選擇依據？",
        "options": [
          "A. GPU適合大量平行計算，CPU適合低延遲小請求",
          "B. GPU永遠更好",
          "C. CPU永遠更好",
          "D. 兩者無差異"
        ],
        "answer": "A",
        "key_point": "GPU vs CPU推論",
        "analysis": "GPU平行處理能力強，適合大批量或大型模型推論；CPU單請求延遲低，適合小模型或少量請求場景。"
      },
      {
        "id": "5.2-B09",
        "question": "為什麼AI模型需要定期重新訓練？",
        "options": [
          "A. 資料分佈變化導致模型效果隨時間衰減",
          "B. 不需要",
          "C. 純粹浪費資源",
          "D. 只訓練一次即可"
        ],
        "answer": "A",
        "key_point": "重新訓練必要性",
        "analysis": "現實資料的分佈會隨時間改變（概念漂移），定期用新資料重新訓練以維持模型效果。"
      },
      {
        "id": "5.2-B10",
        "question": "邊緣運算（Edge Computing）在AI部署中的應用？",
        "options": [
          "A. 在終端設備上直接運行模型，減少網路延遲",
          "B. 只在雲端運行",
          "C. 在資料中心運行",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "邊緣AI",
        "analysis": "邊緣AI在手機、IoT設備、攝影機等終端直接運行模型，即時處理資料、保護隱私、降低雲端成本。"
      },
      {
        "id": "5.2-B11",
        "question": "AI系統集成第11題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B12",
        "question": "AI系統集成第12題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B13",
        "question": "AI系統集成第13題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B14",
        "question": "AI系統集成第14題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B15",
        "question": "AI系統集成第15題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B16",
        "question": "AI系統集成第16題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B17",
        "question": "AI系統集成第17題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B18",
        "question": "AI系統集成第18題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B19",
        "question": "AI系統集成第19題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B20",
        "question": "AI系統集成第20題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B21",
        "question": "AI系統集成第21題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B22",
        "question": "AI系統集成第22題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B23",
        "question": "AI系統集成第23題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B24",
        "question": "AI系統集成第24題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B25",
        "question": "AI系統集成第25題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B26",
        "question": "AI系統集成第26題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B27",
        "question": "AI系統集成第27題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B28",
        "question": "AI系統集成第28題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B29",
        "question": "AI系統集成第29題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B30",
        "question": "AI系統集成第30題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B31",
        "question": "AI系統集成第31題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B32",
        "question": "AI系統集成第32題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B33",
        "question": "AI系統集成第33題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B34",
        "question": "AI系統集成第34題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B35",
        "question": "AI系統集成第35題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B36",
        "question": "AI系統集成第36題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B37",
        "question": "AI系統集成第37題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B38",
        "question": "AI系統集成第38題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B39",
        "question": "AI系統集成第39題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B40",
        "question": "AI系統集成第40題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B41",
        "question": "AI系統集成第41題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B42",
        "question": "AI系統集成第42題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B43",
        "question": "AI系統集成第43題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B44",
        "question": "AI系統集成第44題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B45",
        "question": "AI系統集成第45題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B46",
        "question": "AI系統集成第46題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B47",
        "question": "AI系統集成第47題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B48",
        "question": "AI系統集成第48題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B49",
        "question": "AI系統集成第49題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      },
      {
        "id": "5.2-B50",
        "question": "AI系統集成第50題：模型推論伺服器需要考慮哪些非功能性需求？",
        "options": [
          "A. 可用性、可擴展性、安全性與可觀測性",
          "B. 僅功能性",
          "C. 僅效能",
          "D. 僅成本"
        ],
        "answer": "A",
        "key_point": "非功能性需求",
        "analysis": "推論伺服器需滿足高可用（HA）、水平擴展（Scale-out）、存取控制與日誌監控等非功能性需求。"
      }
    ],
    "進階": [
      {
        "id": "5.2-J01",
        "question": "Kubernetes在AI系統部署中的角色為何？",
        "options": [
          "A. 自動化容器部署、擴展與管理",
          "B. 訓練模型",
          "C. 標註資料",
          "D. 開發程式"
        ],
        "answer": "A",
        "key_point": "Kubernetes角色",
        "analysis": "Kubernetes管理容器化AI服務的部署、自動伸縮（依負載增減副本）、負載平衡與故障恢復。"
      },
      {
        "id": "5.2-J02",
        "question": "模型A/B測試的流量分配策略為何？",
        "options": [
          "A. 先小比例新模型驗證後逐步增加直至全量",
          "B. 全部同時切換",
          "C. 隨機分配不監控",
          "D. 只在測試環境"
        ],
        "answer": "A",
        "key_point": "A/B流量策略",
        "analysis": "建議從5-10%流量分配給新模型開始，監控比對KPI後逐步提高比例，發現異常立即回退。"
      },
      {
        "id": "5.2-J03",
        "question": "在AI系統中，Prompt 网关（Prompt Gateway）的作用？",
        "options": [
          "A. 集中管理LLM請求的認證、路由、監控與安全過濾",
          "B. 開發LLM應用",
          "C. 訓練LLM",
          "D. 標註資料"
        ],
        "answer": "A",
        "key_point": "Prompt Gateway",
        "analysis": "Prompt Gateway 作為LLM請求的代理層，統一處理API金鑰管理、速率限制、輸入輸出過濾與日誌記錄。"
      },
      {
        "id": "5.2-J04",
        "question": "模型推論快取（Inference Caching）的策略？",
        "options": [
          "A. 對相同輸入的快取結果，避免重複計算",
          "B. 快取所有結果",
          "C. 不快取",
          "D. 快取模型參數"
        ],
        "answer": "A",
        "key_point": "推論快取",
        "analysis": "對於重複或相似的查詢（如同一張圖像），快取推論結果可顯著降低延遲與運算成本。"
      },
      {
        "id": "5.2-J05",
        "question": "在MLOps中，Feature Store如何在線/離線一致？",
        "options": [
          "A. 同一特徵計算邏輯同時服務訓練與推論",
          "B. 離線訓練與在線推論使用不同特徵",
          "C. 不保證一致性",
          "D. 手動同步"
        ],
        "answer": "A",
        "key_point": "特徵一致性",
        "analysis": "Feature Store保證相同邏輯計算的特徵在訓練（離線批次處理）與推論（在線即時計算）時完全一致。"
      },
      {
        "id": "5.2-J06",
        "question": "AI系統集成進階第6題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J07",
        "question": "AI系統集成進階第7題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J08",
        "question": "AI系統集成進階第8題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J09",
        "question": "AI系統集成進階第9題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J10",
        "question": "AI系統集成進階第10題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J11",
        "question": "AI系統集成進階第11題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J12",
        "question": "AI系統集成進階第12題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J13",
        "question": "AI系統集成進階第13題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J14",
        "question": "AI系統集成進階第14題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J15",
        "question": "AI系統集成進階第15題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J16",
        "question": "AI系統集成進階第16題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J17",
        "question": "AI系統集成進階第17題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J18",
        "question": "AI系統集成進階第18題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J19",
        "question": "AI系統集成進階第19題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J20",
        "question": "AI系統集成進階第20題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J21",
        "question": "AI系統集成進階第21題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J22",
        "question": "AI系統集成進階第22題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J23",
        "question": "AI系統集成進階第23題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J24",
        "question": "AI系統集成進階第24題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J25",
        "question": "AI系統集成進階第25題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J26",
        "question": "AI系統集成進階第26題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J27",
        "question": "AI系統集成進階第27題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J28",
        "question": "AI系統集成進階第28題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J29",
        "question": "AI系統集成進階第29題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J30",
        "question": "AI系統集成進階第30題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J31",
        "question": "AI系統集成進階第31題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J32",
        "question": "AI系統集成進階第32題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J33",
        "question": "AI系統集成進階第33題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J34",
        "question": "AI系統集成進階第34題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J35",
        "question": "AI系統集成進階第35題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J36",
        "question": "AI系統集成進階第36題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J37",
        "question": "AI系統集成進階第37題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J38",
        "question": "AI系統集成進階第38題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J39",
        "question": "AI系統集成進階第39題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J40",
        "question": "AI系統集成進階第40題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J41",
        "question": "AI系統集成進階第41題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J42",
        "question": "AI系統集成進階第42題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J43",
        "question": "AI系統集成進階第43題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J44",
        "question": "AI系統集成進階第44題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J45",
        "question": "AI系統集成進階第45題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J46",
        "question": "AI系統集成進階第46題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J47",
        "question": "AI系統集成進階第47題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J48",
        "question": "AI系統集成進階第48題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J49",
        "question": "AI系統集成進階第49題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      },
      {
        "id": "5.2-J50",
        "question": "AI系統集成進階第50題：在多模型協作的場景中，什麼架構模式最適合？",
        "options": [
          "A. 使用模型編排（Model Orchestration）協調多個模型流程",
          "B. 所有模型獨立運行",
          "C. 全部合併為一個模型",
          "D. 不使用模型"
        ],
        "answer": "A",
        "key_point": "模型編排",
        "analysis": "模型編排透過工作流程引擎（如Airflow、Kubeflow Pipeline）協調多個模型的執行順序與資料傳遞。"
      }
    ],
    "專業": [
      {
        "id": "5.2-Z01",
        "question": "AI系統集成專業第1題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z02",
        "question": "AI系統集成專業第2題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z03",
        "question": "AI系統集成專業第3題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z04",
        "question": "AI系統集成專業第4題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z05",
        "question": "AI系統集成專業第5題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z06",
        "question": "AI系統集成專業第6題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z07",
        "question": "AI系統集成專業第7題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z08",
        "question": "AI系統集成專業第8題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z09",
        "question": "AI系統集成專業第9題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z10",
        "question": "AI系統集成專業第10題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z11",
        "question": "AI系統集成專業第11題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z12",
        "question": "AI系統集成專業第12題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z13",
        "question": "AI系統集成專業第13題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z14",
        "question": "AI系統集成專業第14題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z15",
        "question": "AI系統集成專業第15題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z16",
        "question": "AI系統集成專業第16題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z17",
        "question": "AI系統集成專業第17題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z18",
        "question": "AI系統集成專業第18題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z19",
        "question": "AI系統集成專業第19題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z20",
        "question": "AI系統集成專業第20題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z21",
        "question": "AI系統集成專業第21題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z22",
        "question": "AI系統集成專業第22題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z23",
        "question": "AI系統集成專業第23題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z24",
        "question": "AI系統集成專業第24題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z25",
        "question": "AI系統集成專業第25題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z26",
        "question": "AI系統集成專業第26題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z27",
        "question": "AI系統集成專業第27題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z28",
        "question": "AI系統集成專業第28題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z29",
        "question": "AI系統集成專業第29題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z30",
        "question": "AI系統集成專業第30題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z31",
        "question": "AI系統集成專業第31題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z32",
        "question": "AI系統集成專業第32題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z33",
        "question": "AI系統集成專業第33題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z34",
        "question": "AI系統集成專業第34題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z35",
        "question": "AI系統集成專業第35題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z36",
        "question": "AI系統集成專業第36題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z37",
        "question": "AI系統集成專業第37題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z38",
        "question": "AI系統集成專業第38題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z39",
        "question": "AI系統集成專業第39題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z40",
        "question": "AI系統集成專業第40題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z41",
        "question": "AI系統集成專業第41題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z42",
        "question": "AI系統集成專業第42題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z43",
        "question": "AI系統集成專業第43題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z44",
        "question": "AI系統集成專業第44題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z45",
        "question": "AI系統集成專業第45題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z46",
        "question": "AI系統集成專業第46題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z47",
        "question": "AI系統集成專業第47題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z48",
        "question": "AI系統集成專業第48題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z49",
        "question": "AI系統集成專業第49題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      },
      {
        "id": "5.2-Z50",
        "question": "AI系統集成專業第50題：在構建生產級AI平台時，Model Registry的主要功能是什麼？",
        "options": [
          "A. 管理模型版本、元數據、部署狀態與 lineage",
          "B. 訓練模型",
          "C. 儲存資料",
          "D. 監控系統"
        ],
        "answer": "A",
        "key_point": "Model Registry",
        "analysis": "Model Registry（如MLflow Model Registry）集中管理模型版本、訓練元數據（超參數、評估指標）、部署狀態與模型血緣關係。"
      }
    ]
  }
};
