# データサイエンス倶楽部公式ブログ
![image](https://github.com/ycu-engine/DSC-Blog/assets/104000239/312935e4-e4cc-4664-803f-1de545399557)

# 概要
- 倶楽部内で雑な投稿ができるページがほしい
- 分野問わず、発信する習慣をつけてほしい


## 開発のルール
### Pull request、commitには[Gitmoji](https://gitmoji.dev/)をつける
→ 粒度･目的を適切に保つため
CLIの導入をおすすめします！

### 原則1Issue 1PR
→ Issue駆動で開発するとプロジェクト管理が楽です

### レビューを依頼する
→ コードを書くのに慣れていない, プロジェクトジョインしたては原則レビューを依頼してください！

### ブランチの切り方
| ブランチ名 | 説明 | 例 |
| --- | --- | --- |
| main | 主ブランチ。本番環境に反映させるためのブランチ。全ての変更はここにマージされ、デプロイされる。 | main |
| develop | 開発ブランチ。開発中の最新の変更を保持するブランチ。このブランチが次のリリースの基盤となる。 | develop |
| feat/{issueNo}-{description} | 新機能開発ブランチ。個々の新機能を開発するためのブランチ。開発が終了したらdevelopブランチにマージされる。 | feat/10-create-login-page |
| hotfix/{issueNo}-{description} | バグ修正ブランチ。本番環境で発生した緊急のバグの修正を行うブランチ。修正が完了したらmainとdevelopの両方にマージされる。 | hotfix/15-fix-login-bug |
| fix/{issueNo}-{description} | 一般的なバグ修正ブランチ。緊急性はないが、修正が必要な問題に対処するためのブランチ。開発が終了したらdevelopブランチにマージされる。 | fix/20-fix-scroll-issue |
| design/{issueNo}-{description} | デザイン修正ブランチ。UI/UXの改善やデザインの修正を行うブランチ。開発が終了したらdevelopブランチにマージされる。 | design/25-redesign-dashboard |
| release/v{number} | リリース準備ブランチ。新たなバージョンリリースの準備を行うブランチ。準備が完了したらmainにマージし、タグを付ける。 | release/v1.2.3 |


## コーディングのルール
anyはほとんどの場合許しません
