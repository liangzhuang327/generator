const express = require('express');
const path = require('path');
const route = require('./controller/routes.jsx') ;
const viewHook = require('../viewHook/index.jsx') ;

const port = process.env.PORT || 8080
const app = express();

require('isomorphic-fetch');

// 通常用于加载静态资源
// app.use(express.static(__dirname + '/public'));
app.use(viewHook())
app.use(route);

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
// app.get('/', function (request, response){
//   response.sendFile(path.resolve('../'+__filename, 'viewHook', 'index.html'))
// })

app.listen(port)
console.log("server started on port " + port)