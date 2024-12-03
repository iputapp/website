export default function Page() {
  // html, bodyに追加したclassNameは削除すること。
  return (
    <footer className="h-1/2 w-full bg-[#6b6b6b] font-sans">
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-12 row-span-1 h-full w-full bg-[#2b2b2b]"></div>
        <div className="col-span-12 row-span-1 h-full w-full bg-[#1b1b1b]">
          <p className="text-2xl text-white">アプリ開発サークル</p>
        </div>
        <div className="col-span-4 row-span-2 h-full w-full bg-[#2b2b2b]">
          <p className="text-2xl text-white">
            東京都新宿区西新宿1-7-2 <br />
            モード学園コクーンタワー
          </p>
        </div>

        <div className="col-span-2 row-span-2 h-full w-full bg-[#4b4b4b]">
          <p className="text-2xl font-bold text-white">サークル</p>
          <ul className="text-xl text-[#d1d1d6]">
            <li>活動方針</li>
          </ul>
        </div>
        <div className="col-span-2 row-span-2 h-full w-full bg-[#3b3b3b]">
          <p className="text-2xl font-bold text-white">プロジェクト</p>
          <ul className="text-xl text-[#d1d1d6]">
            <li>lounas</li>
            <li>ついで口座</li>
          </ul>
        </div>
        <div className="col-span-2 row-span-2 h-full w-full bg-[#4b4b4b]">
          <p className="text-2xl font-bold text-white">クリエイティブ</p>
          <ul className="text-xl text-[#d1d1d6]">
            <li>エンジニア</li>
            <li>デザイナー</li>
            <li>広報</li>
            <li>企画・運営</li>
          </ul>
        </div>
        <div className="col-span-2 row-span-2 h-full w-full bg-[#3b3b3b]">
          <p className="text-2xl font-bold text-white">その他</p>
          <ul className="text-xl text-[#d1d1d6]">
            <li>ニュース</li>
            <li>お問い合わせ</li>
            <li>プライバシーポリシー</li>
            <li>メディアキット</li>
          </ul>
        </div>

        <div className="col-span-12 row-span-1 h-full w-full bg-[#1b1b1b]">
          <p className="text-2xl text-white">©2024 アプリ開発サークル</p>
        </div>
      </div>
    </footer>
  );
}
