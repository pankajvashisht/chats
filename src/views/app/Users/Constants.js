export const quillModules = {
	toolbar: [
		[ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
		[ { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' } ],
		[ 'link', 'image' ],
		[ 'clean' ]
	]
};

export const initialState = {
	first_name: '',
	email: '',
	password: '',
	last_name: '' || 0,
	phone: '',
	profile: ''
};

export const quillFormats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image'
];
