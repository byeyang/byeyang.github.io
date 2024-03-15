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
		certificates:"1、院校级一等奖学金; \
			      2、担任校外实践校园合伙人、班级委员、电影协会外联部长、计算机协会干事; \
			      3、具备较扎实专业知识(Python，Scrapy爬虫框架，ETL工具Kettle、机器学习、数据挖掘、NLP等)"
	}
};

const oscResume = {
	timestamp: "2020/10 - 2023/03",
	projectName: "CG 插件开发",
	projectDesc: "负责一系列 CG 插件的独立开发工作，包括贴图管理、模型代理、批量渲染等多个方面，旨在提升 CG 制作的效率和质量。",
	projectDuty: [
		"开发贴图管理器和模型代理流程工具，简化艺术家的工作流程，提高操作效率；",
		"开发 NUKE 批量本地后台渲染工具，实现高效并行渲染，缩短项目周期；",
		"开发图片处理、Max 导出、音频转换等辅助工具，提升制作过程中的数据处理能力；",
		"利用 OpenCV 等第三方库优化图像处理工具，实现文件大小的有效压缩而不损失图像质量；",
		"不断学习和应用新的技术和工具，解决项目中的实际问题，提升插件的功能和性能。"
	],
	technology: [
		"Qt 开发", "Python 编程语言","Mel 语言","数据结构","算法设计"
	],
	company: "广州金川文化有限公司",
	position: "Python插件开发工程师",
	business: "动画、电影创作出品",
	jobContent: [
		"3D 制作工具开发：独立开发并维护 3D 制作流水线中的各项工具，包括系统二次开发，确保各环节数据能够顺利流通；",
		"需求分析与实现：深入了解各环节开发中的需求和问题，完成工具的开发、测试与发布，确保满足项目需求；",
		"流程优化与技术支持：根据项目开发中的变化，维护系统流程、适配规范，为制作开发的流程和规范提供技术性支持。"	
	],
	achievement: "负责CG任务系统的新功能开发，优化调整，修复BUG修复流程缺陷，确保项目高效完成。"
};

const enbrandsResume = {
		timestamp: "2020/10 - 2023/03",
	projectName: "CG任务系统",
	projectDesc: "负责一个嵌入在 CG 制作软件中的 CG 任务系统的开发与维护。该系统旨在提升艺术家的工作效率，确保任务分配、审核和文件发布的顺畅进行。",
	projectDuty: [
		"设计和实现艺术家登录后的任务展示与选择功能，确保艺术家能够清晰地看到各自的任务资产；",
		"开发任务升版保存、提交审核、自检发布等核心功能，优化艺术家的工作流程；",
		"对接 CGTeamWork 接口，实现任务信息的实时同步和审核结果的反馈；；",
		"设计并开发智能检查项和自动修复功能，降低艺术家工作中的错误率；",
		"负责系统的性能优化和缺陷修复，确保系统的稳定性和高效性。"
	],
	technology: [
		"Qt 开发", "Python 编程语言","Mel 语言","数据结构","算法设计"
	],
	company: "广州阿戴普科技有限公司（实习） ",
	position: "大数据团队（数据研究员）",
	business: "对接医药单位，提供技术性支持，开展创新工作",
	jobContent: [
		"文献研究与数据爬取：负责推荐系统相关文献的查找与归纳，通过 Scrapy、Selenium 等工具编写爬虫程序，爬取目标网站医药数据，进行清洗、整理并入库分析；",
		"平台搭建与算法优化：利用 Flask 框架搭建简易数据展示平台，通过 NLTK 等库优化电商文本数据分类预测算法，提升分类准确性和预测精度。"
	],
	achievement: "完成各项数据收集和分析问题。"
};


const specialTalent = [
	{
		percentage: 100, status: 'success', text: '编程语言与框架：熟练使用 Python 编程语言，熟悉 TensorFlow、PyTorch 等深度学习框架，能够高效实现算法模型;',
	},
	{
		percentage: 100, status: 'success', text: '机器学习技术：熟练掌握监督学习、无监督学习、强化学习等机器学习算法，具备模型调优和性能评估能力;',
	},
	{
		percentage: 100, status: 'success', text: '数据处理与分析：熟悉数据处理流程，包括数据清洗、特征工程、数据可视化等，能够运用 Pandas、NumPy 等工具进行高效数据处理;',
	},
	{
		percentage: 100, status: 'success', text: '自然语言处理：了解 NLP 基本原理和常用技术，如文本分类、情感分析、命名实体识别等，具备相关项目实践经验;',
	},
	{
		percentage: 100, status: 'success', text: '软件开发与工具：熟练使用 Git 进行版本控制，熟悉 Linux 操作系统，能够使用 Docker 进行容器化部署。',
	},
];

const summary = "致力AI方向发展";

const resumes = [oscResume, enbrandsResume];

export { resumes, specialTalent, personInfo, summary };
