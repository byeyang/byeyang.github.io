const personInfo = {
	name: "byeyang",
	phoneNumber: "19536382030",
	email: "2662119796@qq.com",
	birthday: "1998-07-13",
	city: "广州",
	expect: "AI工程师",
	workTime: Math.round((new Date() - new Date("2020-12-01")) / 1000 / 60 / 60 / 24 / 365) + "年工作经验",
	education: {
		timestamp: "2018/09/01 - 2020/06/30",
		university: "计算机学院",
		specialty: "网络工程（大数据方向）",
		level: "全日制本科",
		certificates:`1、院校级一等奖学金; 
2、担任校外实践校园合伙人、班级委员、电影协会外联部长、计算机协会干事; 
3、具备较扎实专业知识(Python，Scrapy爬虫框架，ETL工具Kettle、机器学习、数据挖掘、NLP等)`
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
		"对接 CGTeamWork 接口，实现任务信息的实时同步和审核结果的反馈；",
		"设计并开发智能检查项和自动修复功能，降低艺术家工作中的错误率；",
		"负责系统的性能优化和缺陷修复，确保系统的稳定性和高效性。"
	],
	technology: [
		"Qt 开发", "Python 编程语言","Mel 语言","数据结构","算法设计"
	]
};

const oscResume2 = {
	timestamp: "2024/04 - 2025/03",
	projectName: "全过程跨域数据共享平台",
	projectDesc: "通过良好的分层设计及开箱即用的隐私保护数据分析及机器学习等功能，降低隐私计算开发者和使用者的技术门槛，助力隐私计算更广泛应用到 AI、数据分析等场景中，解决隐私保护和数据孤岛等行业痛点。",
	projectDuty: [
		"技术问题攻克，通过专业知识和经验，成功解决了多个项目开发中的技术问题，为项目的顺利进行提供了有力保障;",
		"环境搭建与优化，成功搭建了稳定、高效的开发环境，并对开发流程进行了优化，提高了开发效率和质量。"
	],
	technology: [
		"Python 编程语言","linux 平台","docker 容器技术"
	],
	company: "深圳市华汇数据服务有限公司",
	position: "研发部 隐私计算工程师 ",
	business: "政府合作、运维服务",
	jobContent: [
		"开源项目部署与研究，负责隐语平台的部署、脚本开发、编译工作，并深入研究平台的各个环节技术，确保平台的稳定运行和高效性能;",
		"二次开发支持，积极配合二次开发团队，进行环境配置、可行性分析以及流程研究，确保开发工作的顺利进行和项目的成功交付。"	
	],
	achievement: "负责隐私计算开源引擎研究，部署搭建，确保项目顺利交付。"
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
		percentage: 100, status: 'success', text: '软件开发与工具：熟练使用 Git 进行版本控制，熟悉 Linux 操作系统，熟悉使用 Docker 容器化部署。'
	},
];

const summary = "致力AI方向发展";

const resumes = [oscResume2, enbrandsResume, oscResume];

export { resumes, specialTalent, personInfo, summary };
