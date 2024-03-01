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
		specialty: "网络工程",
		level: "本科"
	}
};

const oscResume = {
	timestamp: "2020/10 - 2023/03",
	projectName: "CG任务系统",
	projectDesc: "CG影视动画制作流程中的版本、流程、数据控制系统。",
	projectDuty: [
		"1.艺术家登录后按照艺术家选择项目，对应阶段和状态，展示对应的任务资产；",
		"艺术家选择对应任务完成工作后，可升版保存、提交审核、通过自检后发布文件等；",
		"对接CGTeamWork接口完成任务信息显示，任务分配和审核结果；",
		"艺术家根据不同项目资产阶段对应相关智能检查项，根据资产情况可选择自动修复问题",
		"该系统嵌入在CG制作软件中，对接CGTeamwork接口完成二次开发"
	],
	technology: [
		"MYSQL", "Pyside"
	],
	company: "广州金川文化有限公司",
	position: "Python插件开发工程师",
	business: "动画、电影创作出品",
	jobContent: [
		"3D制作流水线中的内容制作的各项工具的独立开发、系统二次开发；",
		"充分了解各环节开发中的需求和问题，完成开发，测试，发布；",
		"根据项目开发中策划和项目的变化，不断地维护系统流程、适配规范。"，
		"为创建和优化制作开发的流程和规范提供技术性支持；",
		"维护CG制作中各环节数据能够顺利流通。"		
	],
	achievement: "负责CG任务系统的新功能开发，优化调整，修复BUG修复流程缺陷，不断适配新项目保证制作流程运行过程没有规则上的漏洞。"
};

const enbrandsResume = {
	timestamp: "2019/11 - 2020/09",
	projectName: "云积分电商会员通系统",
	projectDesc: "分布式微服务项目，实现了品牌CRM系统与电商平台线上线下会员绑定、解绑，积分、等级变更同步，会员订单数据推送，商品同步等业务，提供内部商家后台管理系统和电商平台内嵌小程序的接口。",
	projectDuty: [
		"天猫、唯品会、抖音、京东会员通平台标准化 spi 接口开发，积分等级调整业务的重试与最终一致性保障代码开发；",
		"唯品会、抖音平台会员通品牌数据中心对接，平台-云积分-品牌全链路联调，支撑项目上线；",
		"完成 gateway 网关服务阿里全域会员通、京东会员通和抖音会员通接口路由与新老服务流量分发功能；",
		"结合日志文件排查新老会员通服务线上问题，优化会员通项目业务代码。"
	],
	technology: [
		"Spring Cloud Alibaba", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka", "XXL-JOB"
	],
	company: "广州阿戴普科技有限公司（实习）） ",
	position: "大数据团队（数据研究员）",
	business: "对接医药单位，提供技术性支持，开展创新工作",
	jobContent: [
		"推荐系统文献查找及归纳（科研方向)；",
		"通过Scrapy、Selenium、Xpath等组件编写爬虫程序，爬取目标网站医药数据，对数据处理，清洗入库分析；",
		"通过Flask独立搭建简易平台；"，
		"通过NLTK优化电商文本数据分类预测算法。"
	],
	achievement: "基本完成各项数据收集和分析问题。"
};


const specialTalent = [
	{
		percentage: 80, status: 'success', text: '掌握使用Git、GitHub等版本管理工具',
	},
	{
		percentage: 80, status: 'success', text: '熟练掌握scrapy等主流技术框架',
	},
	{
		percentage: 80, status: 'success', text: '了解使用Linux平台；Python各类第三方库；MYSQL,Redis；',
	},
	{
		percentage: 80, status: '', text: '了解使用NLTK进行算法优化；',
	},
	{
		percentage: 80, status: '', text: '了解使用机器学习，深度学习算法基础，神经网络等',
	},
	{
		percentage: 90, status: '', text: '熟悉pyqt、pyside等window桌面组件',
	},
	{
		percentage: 90, status: 'warning', text: 'DCC插件开发经验'
	},
];

const summary = "具备较强的学习与适应环境能力和良好的沟通能力以及应变能力和承压能力；具备良好的全局观念，有良好的自学能力并热爱学习，具有较强的团队精神和团队协作能力；开放型、稳重型，并具有宽容精神和积极乐观的性格；";

const resumes = [oscResume, enbrandsResume, ktccResume];

export { resumes, specialTalent, personInfo, summary };
