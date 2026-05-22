# -*- coding: utf-8 -*-
"""修復 1080 和 1170 檔案的編碼問題"""
import os

quiz_dir = r"C:\trea_project\ipas_quiz"

for fname in ["qbank_all_1080_v3_data.js", "qbank_all_1170_v3_data.js"]:
    fpath = os.path.join(quiz_dir, fname)
    with open(fpath, 'rb') as f:
        raw = f.read()
    print(f"\n{fname}: {len(raw)} bytes")
    print(f"  Raw first 30 bytes: {raw[:30].hex()}")
    
    # Try CP950 (Big5 - Traditional Chinese Windows encoding)
    content = raw.decode('cp950', errors='replace')
    
    # Check if it looks correct
    has_jichu = '基礎' in content
    print(f"  CP950 decoded: has 基礎={'✓' if has_jichu else '✗'}")
    
    if has_jichu:
        # Remove BOM if present
        if content.startswith('\ufeff'):
            content = content[1:]
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Rewritten as UTF-8 (no BOM)")
    else:
        print(f"  ❌ CP950 decode failed, trying utf-8-sig...")
        content = raw.decode('utf-8-sig', errors='replace')
        has_jichu2 = '基礎' in content
        print(f"  UTF-8-SIG decoded: has 基礎={'✓' if has_jichu2 else '✗'}")
        if has_jichu2:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✅ Rewritten as UTF-8")

print("\n=== VERIFICATION ===")
for fname in ["qbank_all_810_v3_data.js", "qbank_all_1080_v3_data.js", "qbank_all_1170_v3_data.js"]:
    fpath = os.path.join(quiz_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        first = f.readline().strip()
        rest = f.read(3000)
    qcount = rest.count('"id":')
    has_jichu = '基礎' in (first + rest[:500])
    has_bom = first.startswith('\ufeff')
    print(f"  {fname}: ~{qcount}+ questions, BOM={has_bom}, 基礎={'OK' if has_jichu else 'MISSING'}")
    print(f"    First: {first[:70]}")

print("\nDONE! 如果所有檔案顯示「基礎=OK」則修復成功。")
