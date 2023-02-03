import Background from "./Background";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Background />

      <div className='pt-4 xl:pt-24 flex flex-col xl:flex-row justify-between m-auto xl:gap-x-24 xl:w-[1200px]'>
        <div className='w-full xl:w-52'>
          <Navigation />
        </div>

        <main className='flex-1 relative px-6'>
          {children}
        </main>
      </div>
    </>
  )
}