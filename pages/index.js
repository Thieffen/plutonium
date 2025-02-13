import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.saurish.com/"
        openGraph={{
          url: "https://www.plutonium.saurish.com",
          title: "Plutonium",
          description: "Plutonium – where darkness meets the web.",
          images: [
            {
              url: "https://og.saurish.com/**Plutonium**.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fsaurish.com%2Flogos%2Flogo.png&images=https%3A%2F%2Fplutonium.saurish.com%2Fplutonium.jpeg",
            },
          ],
          site_name: "Plutonium",
        }}
        twitter={{
          handle: "@saurishhh",
          site: "https://plutonium.saurish.com",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          src="https://aurora.saurish.com/aurora.js"
          aurora-id="b46b1e570b88922ca7304cfcdb6127b9"
        ></script>
      </Head>
      <Header />
      <section className="relative bg-white dark:bg-black">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Bringing darkness
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                straight to the web.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Plutonium is a Next.js template styled with TailwindCSS. It boasts
              built-in dark-mode support, configured Next-SEO for the best SEO
              optimizations, and clean, organized, easy-to-edit code.
            </p>
            <div className="mt-6 ml-6 text-center">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">Learn More</span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">See a Demo</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/photos/e9TrFZZ72DQ"
              >
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/placeholder.webp"
                  alt="Placeholder Image"
                />
              </a>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Maybe we&apos;re bringing brightness too?
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        />
      </section>
      <Sponsors />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
