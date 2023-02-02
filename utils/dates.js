export const localeDate = (date) => {
	const d = date || new Date()
	return new Date(d.toLocaleString('en-US'))
}