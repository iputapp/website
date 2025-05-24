import Image from "next/image";

export default async function SendPage() {

  return (
    <main className="flex w-full px-4 sm:px-8 pt-16 bg-white">
      <div className="flex flex-col flex-1 justify-between text-center">
        <div className="flex justify-center items-center flex-col gap-y-3 mb-8">
          <h1 className="hidden sm:block text-5xl font-extrabold text-[#333333] mb-4">加入申請ありがとうございます！</h1>
          <h1 className="block sm:hidden text-3xl font-extrabold text-[#333333] mb-4">加入申請<br/>ありがとうございます！</h1>
          <p className="text-base sm:text-xl text-gray-700 mb-8">
            後日、こちらからご連絡させていただきます。<br/>
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