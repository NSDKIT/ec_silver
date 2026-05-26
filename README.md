# シルバーアクセサリーECサイト モックアップ提案

銀細工ジュエリーブランド向けECサイト＋HPの提案モックアップです。  
4つのデザインパターンを用意しており、クライアントにご提示いただけます。

---

## デザインパターン一覧

| パターン | コンセプト | ブランド名 | テーマカラー |
|---------|-----------|-----------|-------------|
| **A** | 高級感・ラグジュアリー | SILMO | 漆黒 × ゴールド |
| **B** | シンプル・モダン | ARGENT | 白 × グレー |
| **C** | ナチュラル・アーティスト | SILMO | クリーム × テラコッタ |
| **D** | ブランドストーリー重視 | SILMO | ネイビー × ゴールド |

---

## 起動方法

### 必要環境

- Node.js 18.x 以上
- npm 9.x 以上

### パターンA（高級感）

```bash
cd pattern-a
npm install
npm run dev
```

→ http://localhost:3000 でアクセス

### パターンB（シンプル・モダン）

```bash
cd pattern-b
npm install
npm run dev
```

→ http://localhost:3000 でアクセス（別ターミナルの場合は自動的に別ポートで起動）

### パターンC（ナチュラル）

```bash
cd pattern-c
npm install
npm run dev
```

→ http://localhost:3000 でアクセス

### パターンD（ブランドストーリー）

```bash
cd pattern-d
npm install
npm run dev
```

→ http://localhost:3000 でアクセス

---

## ページ構成（全パターン共通）

### 公開ページ

| URL | ページ |
|-----|--------|
| `/` | トップページ |
| `/about` | ブランドについて |
| `/products` | 商品一覧 |
| `/products/[id]` | 商品詳細 |
| `/cart` | カート |
| `/checkout` | チェックアウト |
| `/checkout/complete` | 注文完了 |
| `/login` | ログイン |
| `/register` | 会員登録 |
| `/mypage` | マイページ |
| `/mypage/orders/[id]` | 注文詳細 |
| `/contact` | お問い合わせ |
| `/legal` | 特定商取引法に基づく表記 |
| `/privacy` | プライバシーポリシー |
| `/terms` | 利用規約 |

### 管理画面

| URL | ページ |
|-----|--------|
| `/admin` | ダッシュボード |
| `/admin/products` | 商品管理 |
| `/admin/products/[id]` | 商品編集 |
| `/admin/orders` | 注文管理 |
| `/admin/pages` | ページ管理 |
| `/admin/monitoring` | **運用状況モニタリング** ← 提案の差別化ポイント |

---

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Google Fonts (next/font)
- **画像**: next/image (Unsplash)
- **SEO**: Metadata API, OGP, robots.ts, sitemap.ts, JSON-LD

---

## 運用状況モニタリング（差別化機能）

`/admin/monitoring` ページにて以下を可視化しています：

- **Vercel 帯域幅**: 80GB / 100GB（警告状態 ⚠️）
- **Supabase DB**: 150MB / 500MB（正常 ✅）
- **月間アクセス数**: 1,240 PV（30日間の折れ線グラフ）
- **今月の売上**: ¥128,400
- **今月の注文数**: 23件

お客様自身がサービス状況を一目で把握し、アップグレードの判断を自分でできるよう設計しています。

---

## ディレクトリ構成

```
ec_vercel/
├── README.md
├── pattern-a/          # 高級感パターン
├── pattern-b/          # シンプル・モダンパターン
├── pattern-c/          # ナチュラルパターン
└── pattern-d/          # ブランドストーリーパターン
```

各パターンの内部構造：

```
pattern-X/
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── src/
    ├── app/
    │   ├── layout.tsx          # ルートレイアウト（フォント + Cookie バナー）
    │   ├── globals.css
    │   ├── robots.ts
    │   ├── sitemap.ts
    │   ├── (public)/           # 公開ページ（Header + Footer あり）
    │   │   ├── layout.tsx
    │   │   └── ...
    │   └── admin/              # 管理画面（サイドバーのみ）
    │       ├── layout.tsx
    │       └── ...
    └── components/
        ├── Header.tsx
        ├── Footer.tsx
        └── CookieBanner.tsx
```
