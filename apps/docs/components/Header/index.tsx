import BhaiLangLogo from "./bhaiLangLogo";


export default function Header() {
  return (
    <div className="relative overflow-hidden header flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="hidden">BhaiLang</h1>
              <div className="p-4">
                <BhaiLangLogo />
              </div>
              <p className="mt-3 text-center text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A toy programming language written in Typescript
              </p>
              <div className="prose text-center pt-4 pb-4">
                {" "}
                <code className="language-js">npm i -g dad-lang</code>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#playground"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bhagwa-600 hover:bg-bhagwa-700 md:py-4 md:text-lg md:px-10"
                  >
                    Playground
                  </a>
                </div>

              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
