export default function SaerchNotFound({ resetFlaghandler, children }) {
  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#e3e2e2]">Try agen</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#e3e2e2] sm:text-5xl">
            No resoults
          </h1>
          <p className="mt-6 text-base leading-7 text-[#e3e2e2]">
            Sorry, we couldn’t find the search you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
