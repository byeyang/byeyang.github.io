const personInfo = {
	name: "byeyang",
	phoneNumber: "13538774375",
	email: "2662119796@qq.com",
	birthday: "1998-07-13",
	city: "广州",
	expect: "python工程师",
	workTime: Math.round((new Date() - new Date("2020-12-01")) / 1000 / 60 / 60 / 24 / 365) + "年工作经验",
	education: {
		timestamp: "2018/09/01 - 2020/06/30",
		university: "计算机学院",
		specialty: "网络工程（大数据方向）",
		level: "全日制本科",
		certificates:"1、院校级一等奖学金; 2、担任校外实践校园合伙人、班级委员、电影协会外联部长、计算机协会干事; 3、具备较扎实专业知识(Python，Scrapy爬虫框架，ETL工具Kettle、机器学习、数据挖掘、NLP等)"
	}
};

const oscResume = {
	timestamp: "2020/10 - 2023/03",
	projectName: "CG插件",
	projectDesc: "CG软件内部插件、后台批处理插件",
	projectDuty: [
		"独立开发内部插件包括贴图管理器、模型代理流程工具等；",
		"独立开发工具包括NUKE批量本地后台渲染工具、图片处理工具、Max导出工具、wav音频转换工具、自定义文件提取工具、后台流程资产更新、资产效果工具等；",
		"过程中不断使用新的第三方库解决实际问题，",
		"类似图像处理工具会使用OpenCV进行处理，在不改变图像质量前提下缩小文件大小。"
	],
	technology: [
		"opencv", "Pyside","maya","nuke"
	],
	company: "广州金川文化有限公司",
	position: "Python插件开发工程师",
	business: "动画、电影创作出品",
	jobContent: [
		"3D制作流水线中的内容制作的各项工具的独立开发、系统二次开发；",
		"充分了解各环节开发中的需求和问题，完成开发，测试，发布；",
		"根据项目开发中策划和项目的变化，不断地维护系统流程、适配规范；",
		"为创建和优化制作开发的流程和规范提供技术性支持；",
		"维护CG制作中各环节数据能够顺利流通。"		
	],
	achievement: "负责CG任务系统的新功能开发，优化调整，修复BUG修复流程缺陷，不断适配新项目保证制作流程运行过程没有规则上的漏洞。"
};

const enbrandsResume = {
		timestamp: "2020/10 - 2023/03",
	projectName: "CG任务系统",
	projectDesc: "CG影视动画制作流程中的版本、流程、数据控制系统。",
	projectDuty: [
		"艺术家登录后按照艺术家选择项目，对应阶段和状态，展示对应的任务资产；",
		"艺术家选择对应任务完成工作后，可升版保存、提交审核、通过自检后发布文件等；",
		"对接CGTeamWork接口完成任务信息显示，任务分配和审核结果；",
		"艺术家根据不同项目资产阶段对应相关智能检查项，根据资产情况可选择自动修复问题",
		"该系统嵌入在CG制作软件中，对接CGTeamwork接口完成二次开发"
	],
	technology: [
		"MYSQL", "Pyside"
	],
	company: "广州阿戴普科技有限公司（实习）） ",
	position: "大数据团队（数据研究员）",
	business: "对接医药单位，提供技术性支持，开展创新工作",
	jobContent: [
		"推荐系统文献查找及归纳（科研方向)；",
		"通过Scrapy、Selenium、Xpath等组件编写爬虫程序，爬取目标网站医药数据，对数据处理，清洗入库分析；",
		"通过Flask独立搭建简易平台；",
		"通过NLTK优化电商文本数据分类预测算法。"
	],
	achievement: "完成各项数据收集和分析问题。"
};


const specialTalent = [
	{
		percentage: 80, status: 'success', text: '掌握使用Git、GitHub等版本管理工具',
	},
	{
		percentage: 80, status: 'success', text: '熟练掌握scrapy，kettle，Selenium等主流技术框架、工具、组件，熟练掌握数据清洗、数据预处理等',
	},
	{
		percentage: 80, status: 'success', text: '了解使用Linux平台；Python各类第三方库；数据库MYSQL等；',
	},
	{
		percentage: 80, status: '', text: '了解使用神经网络建模训练流程等，善于解决实际问题。',
	},
	{
		percentage: 80, status: '', text: '了解使用机器学习，深度学习算法基础，神经网络等',
	},
	{
		percentage: 90, status: '', text: '熟悉pyqt、pyside等window桌面组件、DCC插件开发经验',
	},
];

const summary = "具备较强的学习与适应环境能力和良好的沟通能力以及应变能力和承压能力；具备良好的全局观念，有良好的自学能力并热爱学习，具有较强的团队精神和团队协作能力；开放型、稳重型，并具有宽容精神和积极乐观的性格；";

const resumes = [oscResume, enbrandsResume];

export { resumes, specialTalent, personInfo, summary };
