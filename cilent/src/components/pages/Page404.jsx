import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Page404() {
  const location = useLocation()
  const path = location.pathname.substring(1,8);
  // console.log(path);
    const nav = useNavigate();
  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#e3e2e2]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#e3e2e2] sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-[#e3e2e2]">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={ path === "manager" ? "/manager/products" : "/home"}
              className="rounded-sm btn bg-slate-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#353434] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go { path === "manager" ? "to products" : "home"}
            </Link>
            <a onClick={()=>nav(-1)} className="text-sm font-semibold rounded-sm text-slate-300 cursor-pointer border-2 border-[#e3e2e2] btn bg-black hover:bg-[#353434]">
              Back <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
