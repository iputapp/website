"use client";
/***
 * 最近のNextjsはこういう感じのを使う。
 * jsを送るのでたくさん書いてあったりすると負荷がかかる。
 * use effectなどを使うときはコンポーネント化して小さくするのが良い。
 */

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import DrowCirecle from "@/assets/icons/draw-circle.svg";
import DrowCirecle2 from "@/assets/icons/draw-circle-2.svg";
import DrawLine from "@/assets/icons/draw-line.svg";
import CardOtherProject from "@/components/element/CardOtherProject";
import CardProject from "@/components/element/CardProject";
import { Carousel } from "@/components/view/carousel";


export default function Page() {
  // [削除]検証用にhtml, bodyに追加したclassNameは削除すること。
  return (
    <div className="w-full bg-white text-black">
      <section className='flex flex-col h-screen min-h-[700px] max-w-7xl mx-auto bg-white'>
        <div className="flex flex-1 w-full items-center justify-center px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row justify-center md:justify-between flex-1">
            <div className="relative">
              <DrowCirecle 
                strokeWidth="9" 
                className="text-orange animate-line-write max-w-[450px] w-full md:max-w-none"
              />
              <h1 className="absolute inset-0 flex items-center justify-center font-bold leading-relaxed text-[clamp(1.5rem,5vw,3rem)]">
                <span className="text-start md:text-center">
                  アイデアを形に。<br />
                  新しい価値を届けます。
                </span>
              </h1>
            </div>
            <div className="flex flex-1 justify-end">
              <div className="relative
                w-[clamp(300px,10vw,300px)]
                h-[clamp(300px,60vw,300px)]
                rounded-full">
                <Image
                  src="/images/FacewithMonocle.png"
                  alt="トップイメージ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div> 
      </section>
      {/*  */}
      {/* ------- 活動方針 ------------------------------------------------------------------------------------------- */}
      {/*  */}
      <section className="flex flex-col max-w-7xl mx-auto justify-start items-center lg:items-start  bg-white p-8 mb-10">
        <div className="relative flex justify-start items-start">
          <DrowCirecle2
            strokeWidth="9" 
            className="text-green animate-line-write w-[clamp(200px,32vw,350px)]"
          />
          <h1 className="absolute inset-0 flex items-center justify-center font-bold leading-relaxed text-[clamp(2.0rem,5vw,3.0rem)]">
            <span className="text-center">
              活動方針
            </span>
          </h1>
        </div>
        <div className="flex w-full flex-row mx-auto text-2xl font-bold text-[#252525] gap-x-14 items-center py-10">
          <div className="w-full justify-center hidden lg:flex lg:w-1/2">
            <Image
              className="mb-8"
              src="/images/iputapp-mascot-ipad.png" 
              alt="Picture of the author" 
              width={320} 
              height={300} 
            />
          </div>
          <div className="w-full leading-normal text-[clamp(2.0rem,5vw,3.0rem)]">
            <p className="mb-8 font-bold">
              みんなのクリエイティブで<br/>
              アプリを創る。
            </p>
            <p className="mb-8 text-[0.5em]">
              私たちは、「価値を創造し、価値を届ける」という理念のもと、アプリ開発を進めています。企画、開発、デザイン、プロモーション、運営といった各分野の垣根を越え、全員がチームとして一体感を持って活動することを大切にしています。
            </p>
            <p className="mb-8 text-[0.5em]">
              私たちの活動は、一人ひとりのクリエイティブな力が融合し、全体で大きな成果を目指すことが特徴です。
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      {/* ------- プロジェクト紹介 ------------------------------------------------------------------------------------------- */}
      {/*  */}
      <section className="flex flex-col bg-[#FFD59A] py-20">
        <div className="flex flex-col max-w-7xl mx-auto w-full px-8">
          <p className="mb-[5%] text-[clamp(2rem,6vw,3.5rem)] leading-normal font-bold text-left">
            私たちのプロジェクト<br/>
            をご紹介します！
          </p>
          <div className="flex flex-col gap-y-10 justify-center w-full">
            <CardProject
              label="サービス"
              title="lounas"
              description="コクーンタワーの学生のためのランチ推薦サービス"
              imageSrc="/images/lounas-ui.png"
            />
            <CardProject
              label="サービス"
              title="ついで口座"
              description="日々のついで出費をもっと自分にとって価値のあるものに使うための習慣アプリ"
              imageSrc="/images/tuidebank-ui.png"
              gradient='radial-gradient(67.47% 67.47% at 50% 50%, #FF8000 0%, #FF8000 55%, #E07000 100%)'
            />
          </div>
          <p className="mt-10 md:mt-20 mb-[5%] text-[clamp(2rem,6vw,3.5rem)] font-bold">
            こんなことも。
          </p>
          <div
            className="
              relative left-1/2 w-screen -translate-x-1/2 h-full                 
              flex flex-nowrap pb-4
            "
          >
          <Carousel
            items={[
              <CardOtherProject
                key="zenn"
                card={{
                  headline: '技術記事を書いて\nアウトプット。',
                  textColor: "black",
                  bgImage: "/images/card/zenncard.png"
                }}
              />,
              <CardOtherProject
                key="kyoto"
                card={{
                  headline: '作ったアプリを\n学会で発表。',
                  textColor: "white",
                  bgImage: "/images/card/kyotocard.png"
                }}
              />,
              <CardOtherProject
                key="dev1"
                card={{
                  headline: 'みんなで知見を\n共有。',
                  textColor: "white",
                  bgImage: "/images/card/devcard.png"
                }}
              />,
              <CardOtherProject
                key="dev2"
                card={{
                  headline: 'みんなで知見を\n共有。',
                  textColor: "white",
                  bgImage: "/images/card/devcard.png"
                }}
              />
            ]}
          />
          </div>
        </div>
      </section>
      {/*  */}
      {/* ------- 言葉 ------------------------------------------------------------------------------------------- */}
      {/*  */}
      <section className="flex flex-col max-w-7xl mx-auto py-20 md:bg-white px-8">
        <div className="flex flex-col lg:flex-row justify-around items-start md:items-center w-full h-auto bg-gray-100 rounded-3xl p-8">
          <h2 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-black mb-10 lg:mb-0 ">
            <div className="relative flex flex-row items-end justify-start md:justify-center gap-x-2 md:mb-3">
              <DrawLine className="text-green w-[200px] sm:w-[300px] xl:w-[400px] h-full" />
              <h1 className="absolute inset-0 flex pl-5 md:pl-24 xl:pl-28 items-center justify-start font-bold ">
                <span className="relative whitespace-nowrap text-white">
                  “やってみたい”
                </span>
              </h1>
              <h1 className="font-bold text-black">を</h1>
            </div>
            <span className="block md:hidden leading-normal">
              最初の一歩から<br/>応援します。
            </span>
            <span className="hidden md:block">
              最初の一歩から応援します。
            </span>
          </h2>
          <div className="text-base sm:text-2xl text-start font-bold text-[#252525] lg:py-8">
            <p className="mb-8">
              未来なんて、
              <br />
              見えないほうがワクワクする。
            </p>
            <p className="mb-8">
              やったことないことをやってみて、
              <br />
              初めての人と話して、
              <br />
              悩んで、つまづいて、また進んで。
            </p>
            <p className="mb-8">
              「できない」なんて思ってたことも、
              <br />
              気づけば「できた」に変わるから。
            </p>
            <p className="mb-8">
              アプリ開発サークルには、
              <br />
              Web基礎からReact、Flutterまで、
              <br />
              はじめの一歩を支えるチュートリアルが
              <br />
              揃っています。
            </p>
            <p className="">
              「やってみたい」気持ちだけ持ってきて。
              <br />
              一緒に、面白いものを作りませんか？
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      {/* ------- JOIN US ------------------------------------------------------------------------------------------- */}
      {/*  */}
      <section className="bg-white max-w-7xl mx-auto py-20">
        <div className="flex h-full w-full flex-col items-center gap-y-10">
          <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold pl-3">
            まずはお話しましょう！
          </h1>
          <div className="w-[clamp(300px,32vw,500px)] place-content-center place-items-center">
            <svg
              viewBox="0 0 546 276"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[85%] animate-line-write"
            >
              <path
                d="M35.64 159.319C47.4565 142.658 61.0772 127.711 74.913 112.712C94.9925 90.9449 115.809 69.8738 135.79 48.0123C138.959 44.5453 142.478 38.3607 146.635 35.9218C148.69 34.7163 145.461 40.561 144.511 42.7457C139.383 54.5417 134.561 66.4504 129.929 78.451C120.065 104.008 110.397 129.704 101.812 155.723C97.1472 169.862 93.1458 184.197 88.5891 198.365C85.7415 207.22 82.3651 216.048 81.1423 225.321C80.7068 228.624 81.5369 227.596 83.5491 225.633C88.9091 220.404 94.2946 215.198 99.632 209.946C131.253 178.831 162.186 146.975 194.488 116.563C208.503 103.368 222.77 90.4964 237.385 77.9697C240.655 75.1665 243.836 72.3311 246.927 69.3336C247.912 68.3779 250.945 64.3478 252.732 64.6899C257.537 65.6101 248.091 105.018 247.777 106.653C242.493 134.145 236.389 161.327 229.881 188.54C227.891 196.863 226.696 205.096 225.408 213.514C225.018 216.062 221.9 225.52 227.39 221.159C233.607 216.22 238.061 208.166 242.736 201.99C261.604 177.063 282.639 154.086 303.982 131.287C318.418 115.866 332.796 100.361 348.069 85.7563C352.19 81.8149 356.373 77.8494 360.669 74.0905C362.365 72.6065 361.738 74.6912 361.603 76.1292C360.566 87.2054 357.835 98.1396 355.572 109.003C350.431 133.68 344.506 158.102 338.328 182.537C334.919 196.02 331.467 209.501 328.474 223.084C327.313 228.356 325.416 234.661 325.416 240.187C325.416 243.168 329.612 236.534 330.145 235.883C338.595 225.555 346.746 214.965 355.657 205.019C381.694 175.96 411.008 148.928 442.584 125.964C455.256 116.748 467.955 107.87 480.045 97.8752C488.936 90.5256 498.471 83.7164 506.888 75.8177C507.543 75.2028 508.369 73.6675 509.068 74.2321C510.929 75.7349 510.776 83.954 510.824 85.4165C511.663 111.376 503.895 137.165 498.138 162.207C492.379 187.259 486.816 212.367 480.583 237.299"
                stroke="#FF9500"
                strokeWidth="70"
                strokeLinecap="round"
              />
              <path
                d="M62.3185 189.792C55.4918 189.792 49.6892 188.427 44.9105 185.696C40.1318 182.88 36.1638 178.699 33.0065 173.152L45.9345 163.552C47.8118 166.965 49.9452 169.483 52.3345 171.104C54.7238 172.64 57.2838 173.408 60.0145 173.408C64.1958 173.408 67.3532 172.128 69.4865 169.568C71.6198 167.008 72.6865 162.443 72.6865 155.872V93.152H91.6305V157.408C91.6305 163.381 90.6065 168.843 88.5585 173.792C86.5105 178.656 83.3105 182.539 78.9585 185.44C74.6918 188.341 69.1452 189.792 62.3185 189.792ZM152.093 189.792C143.73 189.792 136.349 187.829 129.949 183.904C123.634 179.893 118.685 174.176 115.101 166.752C111.517 159.328 109.725 150.453 109.725 140.128C109.725 129.888 111.517 121.141 115.101 113.888C118.685 106.635 123.634 101.088 129.949 97.248C136.349 93.408 143.73 91.488 152.093 91.488C160.541 91.488 167.922 93.4507 174.237 97.376C180.551 101.216 185.501 106.763 189.085 114.016C192.669 121.184 194.461 129.888 194.461 140.128C194.461 150.453 192.669 159.328 189.085 166.752C185.501 174.176 180.551 179.893 174.237 183.904C167.922 187.829 160.541 189.792 152.093 189.792ZM152.093 173.408C156.786 173.408 160.839 172.043 164.253 169.312C167.751 166.581 170.439 162.741 172.317 157.792C174.194 152.757 175.132 146.869 175.132 140.128C175.132 133.387 174.194 127.627 172.317 122.848C170.439 117.984 167.751 114.272 164.253 111.712C160.839 109.067 156.786 107.744 152.093 107.744C147.399 107.744 143.303 109.067 139.805 111.712C136.391 114.272 133.746 117.984 131.869 122.848C130.077 127.627 129.181 133.387 129.181 140.128C129.181 146.869 130.077 152.757 131.869 157.792C133.746 162.741 136.391 166.581 139.805 169.312C143.303 172.043 147.399 173.408 152.093 173.408ZM212.961 188V93.152H231.905V188H212.961ZM255.211 188V93.152H274.539L302.059 143.712L311.659 164.192H312.299C311.787 159.243 311.232 153.824 310.635 147.936C310.037 142.048 309.739 136.416 309.739 131.04V93.152H327.659V188H308.331L281.067 137.312L271.467 116.96H270.827C271.253 122.08 271.765 127.499 272.363 133.216C272.96 138.933 273.259 144.523 273.259 149.984V188H255.211ZM416.566 189.792C410.678 189.792 405.472 188.981 400.95 187.36C396.427 185.653 392.544 183.008 389.302 179.424C386.144 175.84 383.755 171.232 382.134 165.6C380.512 159.968 379.702 153.227 379.702 145.376V93.152H398.518V147.04C398.518 153.611 399.243 158.816 400.694 162.656C402.144 166.496 404.192 169.269 406.838 170.976C409.568 172.597 412.811 173.408 416.566 173.408C420.32 173.408 423.563 172.597 426.294 170.976C429.024 169.269 431.115 166.496 432.566 162.656C434.102 158.816 434.87 153.611 434.87 147.04V93.152H453.046V145.376C453.046 153.227 452.235 159.968 450.614 165.6C448.992 171.232 446.603 175.84 443.446 179.424C440.288 183.008 436.448 185.653 431.926 187.36C427.403 188.981 422.283 189.792 416.566 189.792ZM501.999 189.792C495.684 189.792 489.497 188.597 483.439 186.208C477.38 183.819 472.047 180.405 467.439 175.968L478.319 162.912C481.647 166.069 485.444 168.629 489.711 170.592C494.063 172.469 498.287 173.408 502.383 173.408C507.332 173.408 511.087 172.427 513.647 170.464C516.207 168.501 517.487 165.856 517.487 162.528C517.487 160.139 516.847 158.261 515.567 156.896C514.372 155.445 512.708 154.165 510.575 153.056C508.441 151.947 505.967 150.837 503.151 149.728L490.607 144.224C487.449 142.944 484.377 141.237 481.391 139.104C478.489 136.885 476.057 134.112 474.095 130.784C472.217 127.456 471.279 123.488 471.279 118.88C471.279 113.675 472.687 109.024 475.503 104.928C478.319 100.832 482.201 97.5893 487.151 95.2C492.1 92.7253 497.732 91.488 504.047 91.488C509.679 91.488 515.097 92.5547 520.303 94.688C525.508 96.8213 530.031 99.8507 533.871 103.776L524.271 115.552C521.284 113.077 518.169 111.157 514.927 109.792C511.684 108.427 508.057 107.744 504.047 107.744C499.951 107.744 496.665 108.64 494.191 110.432C491.801 112.139 490.607 114.571 490.607 117.728C490.607 119.947 491.289 121.781 492.655 123.232C494.02 124.683 495.812 125.963 498.031 127.072C500.249 128.096 502.681 129.163 505.327 130.272L517.743 135.264C521.583 136.8 524.911 138.72 527.727 141.024C530.628 143.328 532.847 146.101 534.382 149.344C536.004 152.587 536.815 156.512 536.815 161.12C536.815 166.24 535.407 170.976 532.59 175.328C529.86 179.68 525.892 183.179 520.687 185.824C515.567 188.469 509.337 189.792 501.999 189.792Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}



