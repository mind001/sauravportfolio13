const config = {
	folders: [
		{
			icon: 'fa fa-laptop fa-2x',
			name: 'MyProfile',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Experience',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Academics',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Skills',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Contribution',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Projects',
		},
	],
	images: {
		wallpaper: require('../images/p1.jpeg'),
		profilePic: require('../images/p2.jpeg'),
		profileBE: require('../images/beprofile.jpg'),
		wallpaperBE: require('../images/bewallpaper.jpg'),
		musicPlayer: require('../images/app.gif'),
		todoApp: require('../images/todo.gif'),
		homePage: require('../images/p3.jpeg'),
	},
	profile: {
		aboutme: 'HEY! I AM Saurav, Machine Operator',
		email: 'saurav@gmail.com',
		dob: '15/07/1996',
		location: 'Belleville, ON',
		degree: 'Bachelor in Computer System',
		designation: 'Computer System Technician',
	},
	professionalSkills: [
		{
			label: 'Quality Control',
			icon: 'fa fa-language',
			skills: [
				{
					skill: 'Machine Setup',
					icon: 'fa fa-star',
				},
				{
					skill: 'Workstation Equipment Monitoring',
					icon: 'fa fa-star',
				},
				{
					skill: 'Quality Inspections & Reporting',
					icon: 'fa fa-star',
				},
			],
			
		},
	],
	academics: [
		{
			title: 'Computer System Technician',
			university: 'Loyalist College of Applied Art And Technology',
			location: 'Belleville, ON',
		},
		
	],
	
	projects: [
		{
			title: 'Machine Operator',
			client: 'Brampton,Onatario',
			icon: 'fa fa-cloud',
			description: 'Seasoned machine operator offering experience in high volume assembly line production\n' +
				'\t\t\t\t\t\t\tDedicated to rigorous inspection with commitment to follow through preventative maintainance,\n' +
				'\t\t\t\t\t\t\tKnowledgeable in use of equipments , tools and CNC logic  ,\n' +
				'\t\t\t\t\t\t\tTalented machine operator excel in equipment operation,setup & testing\n' +
				'\t\t\t\t\t\t\tHardworking team player, skilled in maintainance and repair of metal production and plastic extrusion equipments\n' +
				'\t\t\t\t\t\t\tmotivated employee learns quick and fast high volume environments\n' +
				'\t\t\t\t\t\t\tconsistently adheres to saftey standards \n' +
				'\t\t\t\t\t\t\tmaintains open availability and flexibility to work various shifts\n',
			company: 'Aline - Consulting Oy'
		},
		],
	Work History: [
		{
			timeline: 'March 09, 2021',
			designation: 'Machine Opeartor',
			company: 'Operator',
			location: 'Brampton, Onatario',
			icon: 'fa fa-check',
			isNewStart: false,
			isLink: false,
			developed: [],
		},
		
			developed: [
				'Developed Dynamic Layout / Form Builder for Process Automation Tool (BPM)',
				'Developed common components to connect, view data from various external systems',
				'Implemented / Developed complete Environment Management tool screens which is used ' +
				'to control the complete product micro services fromUI Driven',
				'Developed Draggable / Droppable components',
				'Developed customized DataGrid to search, view , filter ,edit ,manage ,reusable',
				'Implemented JWT based Single Sign on mechanism (SSO), Session, Log Management in Front-End.',
			],
		},
		{
			timeline: 'January 25, 2020',
			designation: 'Back-End Engineer',
			company: 'Aline - Consulting Private Limited',
			location: 'Chennai, Hyderbad - India',
			icon: 'fa fa-star',
			isNewStart: false,
			isLink: false,
			developed: [
				'Operated machining equipment safely with team of operators.',
				'Compiled with company and OS safety rules and regulations.',
				'Setup and ran machinery during operation to detect sounds of malfunction and excessive vibration and adjusted machine by eliminating problems',
				'Caliberated ,tested and adjusted machine settings and controls in preperations of production operations.',
				
			],
		},
		
		{
			timeline: 'April 02, 2020',
			icon: 'fa fa-check',
			isNewStart: false,
			isLink: false,
			certifications: [
				'Developed machine language .',
		},
				],
		
	resume: '', //https://www.drive.com/sauravresume.pdf
};

export default config;
