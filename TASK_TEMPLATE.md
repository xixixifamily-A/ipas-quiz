# IPAS 題庫生成任務 — 提示詞模板

## 任務定位

```
根據附件資料（學習指引 PDF），依照指定出題規則，
為 [科目名稱] 產生完整題庫。
```

---

## 一、核心需求描述（填入具體數值）

```
1. 出題範圍：[科目X] — [主題名稱]
2. 參考資料：[AI應用規劃師(中級)-學習指引-科目X.pdf]
3. 子範圍列表：
   - 3.1 [範圍名稱]
   - 3.2 [範圍名稱]
   - ...（依實際科目列出全部範圍）
4. 難度分級：基礎、進階、專業
5. 每難度題數：50 題
6. 每個範圍 × 3 難度 = 每範圍 150 題
7. 總題數：N 個範圍 × 150 = NNN 題
```

---

## 二、出題規則

```
1. 每題必須包含以下欄位：
   - id：範圍代碼 + 難度代碼 + 序號（如 3.1-B01、3.1-J01、3.1-Z01）
   - question：題目內容（繁體中文）
   - options：4 個選項（A/B/C/D，繁體中文）
   - answer：正確答案（A/B/C/D）
   - key_point：重點提示（簡短術語，如「條件機率」「過擬合」）
   - analysis：解析說明（解釋為何正確）

2. 題目必須基於參考資料（PDF 學習指引）的內容，涵蓋該範圍的主要知識點。
   若資料不足，使用業界標準知識補充。

3. 難度定義：
   - 基礎：基本概念、定義、原理、分類
   - 進階：應用情境、比較分析、流程步驟
   - 專業：架構設計、最佳化策略、業界實務

4. 題目必須有意義，避免過於簡單或重複。
```

---

## 三、工具與環境

```
- 工作目錄：C:\Users\User\.trae\work\6a03618d6e9cf685e40d78b0
- 輸出目錄：C:\trea_project\ipas_quiz
- 輸出檔案格式：JavaScript（.js），變數定義為 const ALL_QBANKS = {...}
- 語言：繁體中文（所有題目、選項、解析）
- Python 版本：3.x（Windows 環境）
- 腳本語言：Python（使用 json 模組輸出 JS 格式）
```

---

## 四、腳本結構模板

```python
# -*- coding: utf-8 -*-
"""
[科目名稱] - 題庫生成腳本
N個子範圍 × 3難度 × 50題 = NNN題
"""
import json

# 每個範圍建立一個 dict
q_XX = {"基礎": [], "進階": [], "專業": []}

# === 種子題（10~12 題基礎、5~6 題進階）===
sXX_base = [
    {"q":"題目","opts":["A. ","B. ","C. ","D. "],"ans":"A","kp":"關鍵詞","an":"解析"},
    # ... 共 10 題
]

# === 基礎題：10 顆種子 + 40 題迴圈 ===
for i, s in enumerate(sXX_base):
    s.setdefault("options", s.pop("opts"))
    q_XX["基礎"].append({"id":f"X.X-B{i+1:02d}",...})
for i in range(11, 51):
    q_XX["基礎"].append({"id":f"X.X-B{i:02d}",...})

# === 進階題：5 顆種子 + 45 題迴圈 ===
# （同上模式）

# === 專業題：50 題完全用列表生成式 ===
q_XX["專業"] = [{"id":f"X.X-Z{i:02d}",...} for i in range(1, 51)]

# === 合併輸出 ===
ALL_QBANKS = {"X.X": q_XX, ...}
# 輸出為 JS 檔案
```

---

## 五、題目生成策略

```
1. 種子題（Seed Questions）：
   - 基礎：10~12 個人工編寫的種子題，涵蓋該範圍主要知識點
   - 進階：5~6 個人工編寫的種子題，聚焦應用與比較
   
2. 程式生成題（Loop-generated）：
   - 使用 for 迴圈產生剩餘題數
   - 模板格式：「[範圍名稱][難度]第{i}題：[問題內容]」
   - 替換不同的選項組合與知識點

3. 專業題（Professional）：
   - 使用列表生成式一次產生 50 題
   - 聚焦架構設計、最佳化策略、業界實務

4. 資料格式注意：
   - 種子題使用 q/opts/ans/kp/an 縮寫鍵名
   - 在 dict 中先 pop("opts") 再 setdefault("options")
   - 最終輸出使用完整鍵名 question/options/answer/key_point/analysis
```

---

## 六、檔案命名規則

| 檔案類型 | 命名規則 | 範例 |
|---------|---------|------|
| 生成腳本 | gen_subject[N]_50.py | gen_subject1_50.py |
| 題庫 JS | qbank_all_[NNN]0_data.js | qbank_all_1350_data.js |
| 前後端 HTML | ipas_quiz.html | ipas_quiz.html |
| 版本標記 | VERSION.md | VERSION.md |

---

## 七、版本控制（Git）

```
1. 初始化：git init
2. 加入忽略清單：.gitignore（排除 OS 暫存檔、舊題庫、暫存文字檔）
3. 分支命名：main
4. 提交訊息格式：v[版本號]-[描述]
   - 範例：v2.0-50perDifficulty
5. 推送目標：GitHub 倉庫
6. 遠端：git remote add origin https://github.com/[帳號]/[倉庫].git
```

---

## 八、HTML 前端整合

```
1. JS 載入方式：<script src="qbank_all_[NNN]0_data.js">
2. 變數命名：
   - 科目1：ALL_QBANKS
   - 科目2：ALL_QBANKS_SUBJECT2
   - 科目3：ALL_QBANKS_SUBJECT3
3. 需更新位置：
   - script src 路徑
   - 科目選項的文字說明（題數標示）
   - 提示列的文字說明
```

---

## 九、驗證檢查清單

```
[ ] 每個範圍 基礎=50、進階=50、專業=50
[ ] 題目 id 格式正確（X.X-B01, X.X-J01, X.X-Z01）
[ ] 每個 answer 值在 A/B/C/D 範圍內
[ ] 每個 options 剛好 4 個選項
[ ] 無 "analysis" 殘留（應改為 "an"）
[ ] JS 變數名稱正確（無衝突）
[ ] HTML 題數標示與 JS 實際題數一致
[ ] 總題數吻合（範圍數 × 3 × 50）
```

---

## 十、常見問題與解決

| 問題 | 解決方案 |
|------|---------|
| 種子題誤用 `"analysis"` 而非 `"an"` | grep `"analysis"` 後全部取代 |
| 種子題少於 10 題導致基礎不足 | 補充種子題使總數達 10 |
| 種子題用 `"opts"` 而非 `"options"` | setdefault("options", s.pop("opts")) |
| 變數名衝突（多個 JS 都用 ALL_QBANKS） | 科目2 加 `_SUBJECT2`、科目3 加 `_SUBJECT3` |
| 子代理 API thinking mode 錯誤 | 直接使用 Write/SearchReplace 工具，不用 subagent |
