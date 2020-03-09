const data = [
	{
		id: 'dashboards',
		icon: 'iconsminds-shop-4',
		label: 'Dashboards',
		to: '/'
	},
	{
		id: 'Users',
		icon: 'simple-icon-people',
		label: 'Users',
		to: '/users',
		subs: [
			{
				icon: 'simple-icon-user',
				label: 'Users',
				to: '/users'
			},
			{
				icon: 'iconsminds-add-user',
				label: 'Add User',
				to: '/add-user'
			}
		]
	},
	{
		id: 'Gif',
		icon: 'iconsminds-shop-2',
		label: 'Gif',
		to: '/gif',
		subs: [
			{
				icon: 'iconsminds-shop',
				label: 'Gif',
				to: '/gifs'
			},
			{
				icon: 'iconsminds-add-basket',
				label: 'Add Gif',
				to: '/add-gif'
			}
		]
	},
	{
		id: 'Posts',
		icon: 'iconsminds-crown-2',
		label: 'Posts',
		to: '/posts',
		subs: [
			{
				icon: 'iconsminds-crown-2',
				label: 'posts',
				to: '/posts'
			}
		]
	},

	{
		id: 'App Informations',
		icon: 'iconsminds-monitor---phone',
		label: 'App Informations',
		to: '/app-information'
	}
];
export default data;
