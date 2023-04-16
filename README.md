# vue_taroto_app
vue3で作成したタロットカードを引くアプリ
</br></br>


<video src="https://user-images.githubusercontent.com/54252926/232280184-d67f07ae-ff8a-4aed-ac25-0fce55f8d790.mp4"></video>
<video src="https://user-images.githubusercontent.com/54252926/232280186-dbdc7a77-42f8-4e2e-9871-c523e07d3a2d.mp4"></video>



</br></br>
【仕様】</br>
</br>
■概要</br>
Tarot Card Appは、ユーザーがタロットカードを引いて解釈をするためのアプリケーションです。Vue3を使用して作成されています。</br>
カードをランダムに引くことができ、引いたカードの過去の履歴を見ることができます。</br>
また、カードをクリックすると、表と裏をめくることができ、</br>
マウスの動きに合わせてカードが傾くエフェクトがある。</br>
</br>
■機能</br>
・カードを引く</br>
・引いたカードの表示</br>
・引いたカードの解釈の表示</br>
・過去に引いたカードの履歴の表示</br>
・カードの表示面の反転</br>
・カードの回転</br>
</br>
■画面構成</br>
・タロットカードの表示</br>
	カード画像、名前、解釈を表示する</br>
	カードをクリックすると、表裏が反転する</br>
	カードをマウスでドラッグすると、カードが傾く</br>
・カードを引くボタン</br>
	クリックすると、ランダムに1枚のカードが表示される</br>
・引いたカードの履歴</br>
	過去に引いたカードの履歴を表示する</br>
</br>
■データ構造</br>
・cards: カードの配列</br>
	name: カード名</br>
	image: カードの画像URL</br>
	meaning: カードの解釈</br>
・history: 引いたカードの履歴を格納する配列</br>
・showCard: カードの表示/非表示を切り替えるフラグ</br>
・flipped: カードの表裏を切り替えるフラグ</br>
・card: 表示されるカードオブジェクト</br>
・mouseX: マウスのX座標</br>
・mouseY: マウスのY座標</br>
・timeout: カードの回転を制御するためのtimeoutオブジェクト</br>
</br>
■イベントハンドラ</br>
・showRandomCard(): カードを引く処理</br>
	cards配列からランダムにカードを選択し、cardオブジェクトに設定する</br>
	showCardフラグをtrueにすることで、カードを表示する</br>
	history配列に引いたカードを追加する</br>
・flipCard(): カードの表裏を切り替える処理</br>
	flippedフラグをtrue/falseで切り替えることで、表裏を切り替える</br>
・rotateCard(): カードをマウスで回転する処理</br>
	マウスの座標を取得し、カードを回転させる</br>
	timeoutオブジェクトで、カードの回転速度を制御する
