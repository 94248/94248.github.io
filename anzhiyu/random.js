var posts=["2023/11/13/FFUF工具使用指南/","2023/07/31/SSRF漏洞学习记录/","2022/11/13/Ubuntu22-04美化-macos系统“/","2023/12/01/burp+xray联动漏扫/","2023/08/05/SSRF相关靶场通关/","2023/12/07/ctfRCE篇/","2023/09/04/evli-minwrm工具/","2023/06/21/python---自动登录/","2023/06/28/sql注入-宽字节注入/","2023/08/22/os命令注入靶场/","2023/04/15/sql注入-二次注入/","2022/10/26/sql注入-报错注入攻击/","2022/12/25/sql注入——联合注入/","2022/10/22/sql注入靶场搭建/","2023/01/13/web前端-html/","2023/01/26/web前端-css/","2023/10/02/xee漏洞学习/","2023/07/25/信息收集相关/","2022/10/01/搭建个人图床/","2022/10/06/关于博客-ssh连接不上github仓库问题/","2023/10/17/强网杯2019-随便注/","2023/07/09/文件上传漏洞靶场通关/","2023/06/08/浅谈暗网/","2023/08/25/身份认证漏洞靶场/","2023/08/16/目录遍历相关靶场/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};