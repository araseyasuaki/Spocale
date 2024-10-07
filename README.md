#### Vercelリンク
* https://supokare.vercel.app/
---
#### 使用技術
* React
* * GSAP
* Swiper
* Rellax
* scss(sass)
---
今回のサイトはスポカレのLPです。

学校で勉強したReactを使いサイトを実装したいと思い、今回のサイトではReactと使い実装しました。

ファーストビューや機能説明など大まかに９個のコンポーネントに分けております。

そして、テキストデータを全部一つのファイルの書いていて、
そこから、コンポーネントごとに必要になった際に取り出したり、
今後テキストの変更があった際には全部一箇所に変更できるようにしました。

アニメーションのところでは主にGSAPのScrollTriggerを使い全体に動きをつけています、
コンテンツによってはランダムにテキストが出たり、順番一個ずつ出ています。

サイトを開いたときのファーストビューのアニメーションは背景色の変更とテキストの初期状態のx軸y軸を変更して、
時間を決めて元に戻しています。

その他に、スマホの閲覧のときにはSwiperを使いコンテンツをトランプのように一枚一枚見れるようにしました。

また、機能の説明のコンテンツではRellaxを使いテキストや写真のスクロールする量を変更しました。

最後にscssのsassを使い、入れ子の機能を使いcssコーディングをスムーズに行うことができました。

今回のサイト制作では色んなフレームワークやライブラリーを使いアニメーションを簡単に効率よく実装しましたが、
今後はこれらに頼らずにJsだけでも実装できるように挑戦したいです。
