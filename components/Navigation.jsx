import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"

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
		<aside className='flex flex-col-reverse content-center xl:sticky xl:top-24 xl:flex-col'>
			<Link href='/#top' className='mt-[-50px] xl:mt-0'>
				<Image src={Logo} id='logo' className='animate-zoomIn' alt='Logo Desaster Fest'/>
			</Link>
			<input type='checkbox' hidden id='menu' className='peer' />
			<label
				htmlFor='menu'
				className='z-50 self-end xl:hidden peer-checked:[&>.first]:rotate-45 peer-checked:[&>.third]:rotate-[-45deg] peer-checked:[&>.second]:opacity-0'
			>
				<div className='first'></div>
				<div className='second'></div>
				<div className='third'></div>
			</label>

			<nav id='navbar' className='last absolute top-0 left-0 right-0 z-40 hidden min-h-screen py-24 px-8 bg-black/30 peer-checked:block backdrop-blur-lg text-center xl:px-0 xl:flex xl:flex-col xl:min-h-min xl:backdrop-blur-0 xl:mt-24 transition-all'>
				<ul className='flex flex-col gap-y-8 mb-20 text-primary text-4xl'>
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