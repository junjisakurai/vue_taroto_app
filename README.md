# vue_taroto_app
vue3で作成したタロットカードを引くアプリ
</br></br>
<div>
  <h2>概要</h2>
  <p>Tarot Card Appは、ユーザーがタロットカードを引いて解釈をするためのアプリケーションです。Vue3を使用して作成されています。
  カードをランダムに引くことができ、引いたカードの過去の履歴を見ることができます。
  また、カードをクリックすると、表と裏をめくることができ、
  マウスの動きに合わせてカードが傾くエフェクトがある。</p>
</div>
<div>
  <h2>機能</h2>
  <ul>
    <li>カードを引く</li>
    <li>引いたカードの表示</li>
    <li>過去に引いたカードの履歴の表示</li>
    <li>カードの表示面の反転</li>
    <video src="https://user-images.githubusercontent.com/54252926/232280186-dbdc7a77-42f8-4e2e-9871-c523e07d3a2d.mp4"></video>
    <li>カードが傾く</li>
    <video src="https://user-images.githubusercontent.com/54252926/232280184-d67f07ae-ff8a-4aed-ac25-0fce55f8d790.mp4"></video>
  </ul>
</div>
<div>
  <h2>画面構成</h2>
  <ul>
    <li>タロットカードの表示
      <ul>
        <li>カード画像、名前、解釈を表示する</li>
        <li>カードをクリックすると、表裏が反転する</li>
        <li>カードをマウスでドラッグすると、カードが傾く</li>
      </ul>
    </li>
    <li>カードを引くボタン
      <ul>
        <li>クリックすると、ランダムに1枚のカードが表示される</li>
      </ul>
    </li>
    <li>引いたカードの履歴
      <ul>
        <li>過去に引いたカードの履歴を表示する</li>
      </ul>
    </li>
  </ul>
</div>
<div>
  <h2>データ構造</h2>
  <ul>
    <li>cards: カードの配列
      <ul>
        <li>name: カード名</li>
        <li>image: カードの画像URL</li>
        <li>meaning: カードの解釈</li>
      </ul>
    </li>
    <li>history: 引いたカードの履歴を格納する配列</li>
    <li>showCard: カードの表示/非表示を切り替えるフラグ</li>
    <li>flipped: カードの表裏を切り替えるフラグ</li>
    <li>card: 表示されるカードオブジェクト</li>
    <li>mouseX: マウスのX座標</li>
    <li>mouseY: マウスのY座標</li>
    <li>timeout: カードの回転を制御するためのtimeoutオブジェクト</li>
  </ul>
</div>
<div>
  <h2>イベントハンドラ</h2>
  <ul>
    <li>showRandomCard(): カードを引く処理
      <ul>
        <li>cards配列からランダムにカードを選択し、cardオブジェクトに設定する</li>
        <li>showCardフラグをtrueにすることで、カードを表示する</li>
        <li>history配列に引いたカードを追加する</li>
      </ul>
    </li>
    <li>flipCard(): カードの表裏を切り替える処理
      <ul>
        <li>flippedフラグをtrue/falseで切り替えることで、表裏を切り替える</li>
      </ul>
    </li>
    <li>rotateCard(): カードをマウスで回転する処理
      <ul>
        <li>マウスの座標を取得し、カードを回転させる</li>
        <li>timeoutオブジェクトで、カードの回転速度を制御する</li>
      </ul>
    </li>
  </ul>
</div>
<div>
  <h2>認識しているバグ</h2>
  <ul>
    <li>カードの裏面を表示している時にマウスでなぞると、傾き方がオカシイ</li>
    <li>カードを裏返す時、カードが裏返る前にタイトルと解釈が表示されてしまう</li>
  </ul>
</div>
<div>
  <h2>拡張</h2>
  <ul>
    <li>API通信してサーバーからカード情報を取得出来るようにする</li>
    <li>オリジナルカードを作成できる画面を作成し、サーバーにカード情報を登録する</li>
  </ul>
</div>
