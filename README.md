# Enhanced Snake Game with Firebase Authentication
# Firebase認証付き強化版スネークゲーム

## Features
## 特徴

- Firebase email authentication
- Coin system with persistent storage
- Multiple food types with different effects
- Score ranking system
- Dark/light theme support
- Game pause/resume functionality
- Countdown start sequence

- Firebase メール認証
- コインシステム（データ永続化）
- 複数種類のエサと効果
- スコアランキングシステム
- ダーク/ライトテーマ対応
- ゲーム一時停止/再開機能
- カウントダウン開始シーケンス

## Game Elements
## ゲーム要素

### Food Types / エサの種類
- Normal Food (60%): +1 length, 100 points / 通常エサ (60%): 長さ+1、100ポイント
- Speed Food (20%): 2x speed boost, 200 points / スピードエサ (20%): 速度2倍、200ポイント
- Bonus Food (15%): +2 length, 300 points / ボーナスエサ (15%): 長さ+2、300ポイント
- Shrink Food (5%): Halves length, 400 points / 縮小エサ (5%): 長さ半分、400ポイント

### Controls / 操作方法
- Arrow keys: Movement / 矢印キー: 移動
- Space: Pause/Resume / スペース: 一時停止/再開
- R: Reset game / R: ゲームリセット

## Technical Implementation
## 技術実装

### Firebase Configuration
### Firebase設定
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyCa4OdyDw5stXFQnz2TE2Ea9l53VXl99NE",
    authDomain: "snake-game-677e8.firebaseapp.com",
    projectId: "snake-game-677e8",
    // ...
};
```

### File Structure / ファイル構成
- Single HTML file containing: / 単一のHTMLファイルに含まれるもの:
  - Game UI components / ゲームUIコンポーネント
  - CSS styles / CSSスタイル
  - Firebase integration / Firebase統合
  - Game logic / ゲームロジック

### Authentication Flow / 認証フロー
1. User enters email / ユーザーがメールアドレスを入力
2. Receives authentication link / 認証リンクを受信
3. Clicks link to verify / リンクをクリックして認証
4. Game starts with start confirmation / 開始確認後にゲーム開始

### Data Persistence / データ永続化
- User scores stored in Firebase / ユーザースコアをFirebaseに保存
- Local rankings in localStorage / ローカルランキングをlocalStorageに保存
- Coin system with Firebase backend / Firebaseバックエンドによるコインシステム

## Installation
## インストール方法

1. Host the HTML file on a web server / HTMLファイルをWebサーバーにホスト
2. Ensure Firebase project is properly configured / Firebaseプロジェクトが適切に設定されていることを確認
3. Update Firebase configuration if needed / 必要に応じてFirebase設定を更新

## Development Notes
## 開発メモ

### Security / セキュリティ
- Email link authentication used for security / セキュリティのためメールリンク認証を使用
- Firebase security rules should be configured appropriately / Firebaseセキュリティルールを適切に設定する必要あり

### Performance / パフォーマンス
- Game loop optimized for smooth gameplay / スムーズなゲームプレイのためのゲームループ最適化
- Sprite-based rendering for efficiency / 効率的なスプライトベースのレンダリング
- Async/await patterns for Firebase operations / Firebase操作の非同期処理パターン

### Browser Support / ブラウザ対応
- Modern browsers (Chrome, Firefox, Safari, Edge) / モダンブラウザ対応
- ES6+ JavaScript features used / ES6+のJavaScript機能を使用