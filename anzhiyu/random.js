var posts=["2023/06/21/python---自动登录/","2022/11/13/Ubuntu22-04美化-macos系统“/","2023/04/15/sql注入-二次注入/","2023/06/28/sql注入-宽字节注入/","2022/10/26/sql注入-报错注入攻击/","2022/12/25/sql注入——联合注入/","2022/10/22/sql注入靶场搭建/","2023/01/26/web前端-css/","2022/10/06/关于博客-ssh连接不上github仓库问题/","2022/10/01/搭建个人图床/","2023/01/13/web前端-html/","2023/06/08/浅谈暗网/","2023/07/09/文件上传漏洞靶场通关/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};