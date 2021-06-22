const ci = require('miniprogram-ci')
const path = require('path')

console.log(process.argv)

// const project = new ci.Project({
//     appid: 'wx81f975e777e79a8e',
//     type: 'miniProgram',
//     projectPath: path.join(__dirname, '../dist/build/mp-weixin/'),
//     privateKeyPath: path.join(__dirname, './private.wx81f975e777e79a8e.key'),
//     ignores: ['node_modules/**/*'],
// })

// /** 上传 */
// async function upload() {
//     let uploadResult = await ci.upload({
//         project,
//         version: '2.2.333',
//         desc: '333333',
//         setting: {
//             es7: true,
//             minify: true,
//             autoPrefixWXSS: true
//         },
//         robot: 1,
//         onProgressUpdate: console.log
//     })

//     console.log(uploadResult);
// }

// upload()
