export interface Talk {
	title: string;
	href: string;
	img: string;
	img_alt: string;
	event: string;
}

/** Public talks, most recent first */
export const talks: Talk[] = [
	{
		title: 'Gōng-fu I/O en 10 min.',
		href: '/talks/gongfu-io-en-10-min/',
		img: '/assets/talks/gongfu-io-en-10-min.jpg',
		img_alt: 'Participants of a Gōng-fu I/O session working around a table',
		event: 'Geneva JUG, 27.05.2014',
	},
];
