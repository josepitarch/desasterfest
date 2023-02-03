import Link from "next/link"
import Script from "next/script"

const NAVIGATION_LINKS = [{
	title: 'Inicio',
	href: '#top'
}, {
	title: 'Aspanion',
	href: '#aspanion',
}, {
	title: 'Line Up',
	href: '#line-up',
}, {
	title: 'I Edición',
	href: '#first-edition',
}]

export default function Navigation() {
	return (
		<aside className='flex flex:row items-center text-primary px-4 pb-20 justify-between xl:sticky xl:top-24 xl:flex-col'>

			<input type='checkbox' id='menu' hidden className='peer' />
			<label
				for='menu'
				className='bg-zinc-500/30 w-14 h-14 border-zinc-500 flex items-center justify-center rounded-full border relative z-50 xl:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block cursor-pointer hover:scale-125 transition hover:border-white'
			>
			</label>

			<nav id='navbar' className='last absolute top-0 left-0 right-0 z-40 hidden min-h-screen py-24 px-8 bg-black/30 peer-checked:block backdrop-blur-lg text-center xl:px-0 xl:flex xl:flex-col xl:min-h-min xl:backdrop-blur-0 xl:mt-24 transition-all'>
				<ul className='flex flex-col gap-y-8 mb-20 text-5xl'>
					{
						NAVIGATION_LINKS.map(({ title, href }) => {
							return <li key={title}>
								<Link href={href}>{title}</Link>
							</li>
						})
					}
				</ul>
			</nav>
		</aside>
	)
}