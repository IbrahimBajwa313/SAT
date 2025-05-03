import Head from "next/head";

export default function Martyrs() {
  return (
    <>
      <Head>
        <title>Tribute to Muhammad Roman Sajid</title>
        <meta
          name="description"
          content="A tribute to Muhammad Roman Sajid, a brave soul who sacrificed his life during a peaceful protest for Gaza at D-Chowk, Islamabad."
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
        <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left max-w-4xl border rounded-2xl shadow-md bg-gray-50">
          <h3 className="font-bold text-xl lg:text-2xl mb-4 text-green-600">
            Muhammad Roman Sajid
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
            Muhammad Roman Sajid was a brave soul who stood for the cause with
            unwavering courage. On May 20th, 2024, at 3:00 AM, during a peaceful
            protest at D-Chowk, Islamabad, he, along with another protestor, was
            murdered in cold blood when a car ruthlessly and intentionally ran
            over the protesters. His life was taken while he was peacefully
            standing for the rights of Gaza. His sacrifice has become a beacon
            of hope, a symbol of unwavering dedication, and a powerful call for
            justice.
          </p>
          <p className="text-gray-600 italic text-sm lg:text-base">
            &ldquo;From the river to the sea, Palestine will be free.&rdquo;
          </p>
        </div>
      </main>
    </>
  );
}
