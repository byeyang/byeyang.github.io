# 正在埋头学习中，敬请期待...
xxx系统

## 简介
xx，实现xxxx。

## 技术架构
xxxx、Spring Boot、MySQL、Redis、xx、x、xx

## 项目亮点
- xxx
- x：单例、策略模式xxx模式、模板方法、适配器模式、外观模式
- xxxxs的 session 需要获取到 datasource，自定义修改 datasource 获取连接的方法（threadlocal）

## 项目中遇到的困难，以及怎么解决的？
项xx
- 业务xxx有的需要从老项目中提炼
- xx
- x，x，不同品牌采用的品牌数据中心不一致，代码实现
- x，有的是kafka
- x，ftp文件服务器


## 工作职责
1. 天猫、x、抖音、xxxx spi 接口开发，hreadlxxxxxocal；
2. 唯品会、xxxx，平台-品牌全链路联调，支撑项目上线；
3. 完成 gateway xx、京东会员通和抖音会员通接口路由与新老服务流量分发功能；
4. x，优化会员通业务代码。


## 面试问题

### 项目业务介绍？
x、解绑，积分、xxx，会员订单数据推送，商品同步

### 项目架构是怎么样的？
- 网关 -> x -> （x） + x
- xxx
- xxx

### 怎么实现多租户的数据源加载？
1. xx（数据隔离），不同电商平台下采用不同的数据库（不直接支持一个品牌一个x平台下多店）
2. xxxx session 需要获取到 datasource，自定义修改 datasource 获取连接的方法（thrxeadlocal）
3. threadlxxxxxocal xxx lookup key，再根据缓存获取对应的数据库连接信息（xxx）

### 怎么保证订单消息传输的可靠性？
1. 在消费平台侧消息**，写入kafka消息队列，完成后回调**平台对应的状态码（成功/失败）
2. hreadlxxxxxocal xxx->broker），broker开启副本同步 request.required.acks = -1，保证所有副本都同步成功才认定为发送成功
3. hreadlxxxxxocal，手动提交偏移量（offset）

### 如何保证订单消息的唯一性？
hreadlxxxxxocal，根据订单号（orderSn）来保证唯一性

### xxljob主要应用的业务点？
1. hreadlxxxxxocal（平台店铺标识，token）以及内部服务商家店铺标识信息（token需要定时刷新，php调用，清理redis缓存）
2. hreadlxxxxxocal（京东、唯品会平台）
3. hreadlxxxxxocal，平台同步会员绑定解绑状态
4. 策略引擎hreadlxxxxxocal会员订单金额门槛送礼、生日送礼等

### 数据库优化实例？
索引，在宝洁阿里全域会员通的项目中，新建表（hreadlxxxxxocal）没有创建会员唯一标识的索引，在数据量达到1000万的情况下，sql查询超时导致接口报错

### 项目代码优化实例？
Spring Boot @Cacheable 业务代码改造，hreadlxxxxxocal（一个是查询所有等级信息，hreadlxxxxxocal），将查询所有等级信息抽成一个方法，并配置@Cacheable，另两个方法也配置@Cacheable，导致aop失效。（1.将方法提到另一个文件，再调用；2.注入当前对象）
