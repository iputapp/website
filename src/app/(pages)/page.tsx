export default function Page() {
  // [削除]検証用にhtml, bodyに追加したclassNameは削除すること。
  return (
    // [削除]下記divは検証用のため、完了後削除予定
    <div className="bg-[#4b4b4b] p-6">
      <footer className="bg-[#4b4b4b] font-sans">
        <div className="grid auto-rows-fr grid-cols-12">
          {/* [削除]写真のradius背景部分はimgの下に#4b4b4bのbgを設定するほうが簡単かも？
              その場合下記ののりしろ部分は削除 */}
          <div className="col-span-12 row-span-1 bg-[#4b4b4b]"></div>
          <div className="col-span-12 row-span-3 flex flex-row items-center bg-[#4b4b4b]">
            <svg
              width="68"
              height="70"
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M199.558 71.857C192.716 80.2934 182.267 85.6855 170.558 85.6855C149.948 85.6855 133.24 68.9777 133.24 48.3675C133.24 40.9849 135.384 34.103 139.083 28.3103C132.339 28.1262 124.442 28.1262 114.999 28.1262C86.1562 28.1262 71.7347 28.1262 60.5628 33.3716C48.879 38.8573 39.4809 48.2554 33.9952 59.9392C28.7499 71.1111 28.7499 85.5326 28.7499 114.376C28.7499 143.219 28.7499 157.64 33.9952 168.812C39.4809 180.496 48.879 189.894 60.5628 195.38C71.7347 200.625 86.403 200.625 115.74 200.625C145.439 200.625 160.289 200.625 171.504 195.071C181.999 189.874 190.498 181.375 195.695 170.88C201.249 159.665 201.249 144.815 201.249 115.116C201.249 95.0004 201.249 81.7813 199.558 71.857Z"
                fill="white"
              />
              <circle cx="170.67" cy="48.4791" r="32.9518" fill="#FF2215" />
            </svg>

            <p className="text-4xl text-white">
              <span className="inline-block">アプリ開発</span>
              <span className="inline-block">サークル</span>
            </p>
          </div>
          <div className="col-span-12 row-span-2 bg-[#4b4b4b] md:col-span-4">
            <p className="ml-2 text-2xl text-white">
              東京都新宿区西新宿1-7-2 <br />
              モード学園コクーンタワー
            </p>
          </div>

          <div className="col-span-6 row-span-3 bg-[#4b4b4b] md:col-span-2 md:row-span-6">
            <p className="text-2xl font-bold text-white">サークル</p>
            <ul className="text-xl leading-10 text-[#d1d1d6]">
              <li>活動方針</li>
            </ul>
          </div>
          <div className="col-span-6 row-span-3 bg-[#4b4b4b] md:col-span-2 md:row-span-6">
            <p className="text-2xl font-bold text-white">プロジェクト</p>
            <ul className="text-xl leading-10 text-[#d1d1d6]">
              <li>lounas</li>
              <li>ついで口座</li>
            </ul>
          </div>
          <div className="col-span-6 row-span-3 bg-[#4b4b4b] md:col-span-2 md:row-span-6">
            <p className="text-2xl font-bold text-white">クリエイティブ</p>
            <ul className="text-xl leading-10 text-[#d1d1d6]">
              <li>エンジニア</li>
              <li>デザイナー</li>
              <li>広報</li>
              <li>企画・運営</li>
            </ul>
          </div>
          <div className="col-span-6 row-span-3 bg-[#4b4b4b] md:col-span-2 md:row-span-6">
            <p className="text-2xl font-bold text-white">その他</p>
            <ul className="text-xl leading-10 text-[#d1d1d6]">
              <li>ニュース</li>
              <li>お問い合わせ</li>
              <li>プライバシーポリシー</li>
              <li>メディアキット</li>
            </ul>
          </div>

          <div className="col-span-12 row-span-1 bg-[#4b4b4b]"></div>

          <div className="col-span-12 row-span-2 bg-[#4b4b4b]">
            <div>
              <svg
                width="45"
                height="45"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7421 44.1329L7.97549 8.43276C7.32411 7.59528 7.92092 6.375 8.98191 6.375H14.2514C14.6449 6.375 15.0163 6.55665 15.2578 6.86724L43.0244 42.5672C43.676 43.4048 43.0791 44.625 42.018 44.625H36.7487C36.3551 44.625 35.9837 44.4433 35.7421 44.1329Z"
                  stroke="white"
                  stroke-width="4.16667"
                />
                <path
                  d="M42.5 6.375L8.5 44.625"
                  stroke="white"
                  stroke-width="4.16667"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className="mx-auto w-fit text-sm text-white">
              ©2024 アプリ開発サークル
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
