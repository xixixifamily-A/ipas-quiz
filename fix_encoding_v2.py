# -*- coding: utf-8 -*-
"""緊急修復腳本 - 修正 1080 和 1170 檔案的編碼問題"""

import os
quiz_dir = r"C:\trea_project\ipas_quiz"

for fn in ["qbank_all_1080_v3_data.js", "qbank_all_1170_v3_data.js"]:
    fp = os.path.join(quiz_dir, fn)
    
    # 讀取原始位元組
    with open(fp, 'rb') as f:
        raw = f.read()
    
    # 跳過 UTF-8 BOM (3 bytes: EF BB BF)
    if raw[:3] == b'\xef\xbb\xbf':
        raw = raw[3:]
    
    # 用 Big5 (CP950) 解碼 → 這才是中文字實際的編碼
    txt = raw.decode('cp950', errors='replace')
    
    # 驗證
    if '基礎' in txt:
        print(f"✅ {fn}: Big5解碼成功！")
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(txt)
        print(f"   已寫回 UTF-8（無 BOM）")
    else:
        print(f"❌ {fn}: Big5解碼後仍無「基礎」，嘗試其他方式...")
        txt2 = raw.decode('utf-8-sig', errors='replace')
        if '基礎' in txt2:
            print(f"   改用 UTF-8-SIG 成功！")
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(txt2)
        else:
            print(f"   無法修復，原始內容: {raw[:100]}")

# 驗證
print("\n=== 最終驗證 ===")
for fn in ["qbank_all_810_v3_data.js", "qbank_all_1080_v3_data.js", "qbank_all_1170_v3_data.js"]:
    fp = os.path.join(quiz_dir, fn)
    if not os.path.exists(fp):
        print(f"❌ {fn}: 不存在")
        continue
    with open(fp, 'r', encoding='utf-8') as f:
        first = f.readline().strip()
        rest = f.read(3000)
    q = rest.count('"id":')
    ji = '基礎' in rest[:500]
    bom = first.startswith('\ufeff')
    print(f"  {fn}: {q}+題, 基礎={'✓' if ji else '✗'}, BOM={'有' if bom else '無'}")
    print(f"    首行: {first[:60]}")
print("完成！如果基礎=✓則修復成功。")
