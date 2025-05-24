import Image from "next/image";

export default async function SendPage() {
  return (
    <main className="flex w-full bg-white px-4 pt-16 sm:px-8">
      <div className="flex flex-1 flex-col justify-between text-center">
        <div className="mb-8 flex flex-col items-center justify-center gap-y-3">
          <h1 className="mb-4 hidden text-5xl font-extrabold text-[#333333] sm:block">
            加入申請ありがとうございます！
          </h1>
          <h1 className="mb-4 block text-3xl font-extrabold text-[#333333] sm:hidden">
            加入申請
            <br />
            ありがとうございます！
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-xl">
            後日、こちらからご連絡させていただきます。
            <br />
            リアルが忙しい場合にお時間を頂戴する可能性があります。何卒ご了承ください。
          </p>
        </div>
        <Image
          src="/images/chara-happy.png"
          alt="Thank You"
          width={400}
          height={300}
          className="mx-auto"
        />
      </div>
    </main>
  );
}
