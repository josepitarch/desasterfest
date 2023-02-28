import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"
import MenuIcon from "../icons/MenuIcon"
import { Icons } from "./Icons"

const NAVIGATION_LINKS = [
	{
		title: 'Inicio',
		href: '#top'
	},
	{
		title: 'Line Up',
		href: '#line-up',
	},
	{
		title: 'Aspanion',
		href: '#aspanion',
	},
	{
		title: 'I Edición',
		href: '#first-edition',
	},
	{
		title: 'Cómo llegar',
		href: '#localization',
	}
]

const SOCIAL_NETWORKS_LINKS = [
	{
		title: 'instagram',
		icon: Icons.instagram,
		href: 'https://instagram.com/desasterfest_'
	},
	{
		title: 'facebook',
		icon: Icons.facebook,
		href: 'https://twitter.com/midudev'
	}
]

export default function Navigation() {
	return (
		<aside className='flex flex-col-reverse content-center xl:sticky xl:top-24 xl:flex-col p-2'>
			<Link href='/#top' className='mt-[-50px] xl:mt-0'>
				<Image src={Logo} id='logo' className='animate-zoomIn' alt='Logo Desaster Fest' />
			</Link>
			<input type='checkbox' hidden id='menu' className='peer' />
			<label
				htmlFor='menu'
				className='bg-zinc-500/30 w-14 h-14 border-zinc-500 flex items-center
				justify-center rounded-full border relative z-50 xl:hidden text-primary
				peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block self-end
				cursor-pointerhover:scale-125 transition hover:border-white'
			>
				<MenuIcon />
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

				<div className='flex flex-row items-center justify-center gap-4 py-2'>
					{
						SOCIAL_NETWORKS_LINKS.map(({ icon: Icon, href, title }) => {
							return <a key={title} className='text-white hover:scale-125 transition-all hover:text-primary' href={href} target='_blank' rel='noopener noreferrer'>
								<span aria-label={title}>
									<Icon />
								</span>
							</a>
						})
					}
				</div>
			</nav>
		</aside>
	)
}