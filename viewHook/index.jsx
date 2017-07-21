const html = require('./html.jsx') ;

function viewHook() {
 return function (ctx, next) {
    ctx.render = function () {
      ctx.type = 'html';
      ctx.body = html();
    next()
    }
  }
}
module.exports=viewHook;