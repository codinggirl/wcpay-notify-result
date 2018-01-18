# wcpay-notify-result

[Engish](#en) [简体中文](#zh-CN)

<a id='en' name='en'></a>

## Description

A package to build a result string for wechat pay notify callback.

<a id='zh-CN' name='zh-CN'></a>

## 说明

一个给微信支付通知接口返回通知结果的类库。

微信支付通常会有一个服务器回掉地址，用于通知商户支付结果。
在该回调地址中，商户程序需要给微信支付服务器返回状态信息。
这个包就是生成这个状态信息用的。

## 安装

选中下列一种方式安装即可。

- 直接安装

```bash
npm i wcpay-notify-result
```
- 作为依赖项安装

```bash
npm i --save wcpay-notify-result
```

## 使用

在处理完毕业务逻辑后，可以给微信支付服务器返回相应的xml字符串。

- 简单处理

```javascript
var result = require('wcpay-notify-result')

// msg from other logic code ...
var msg = <#...#>
var reply = result.result(msg)
// please use your own res
res.setHeader('content-type', 'application/xml; charset=utf-8');
res.send(reply)
```

- 处理成功
 
```javascript
var result = require('wcpay-notify-result')

var reply = result.success()
// please use your own res
res.setHeader('content-type', 'application/xml; charset=utf-8');
res.send(reply)
```

- 处理失败

```javascript
var result = require('wcpay-notify-result')

var reply = result.fail('签名失败')
// please use your own res
res.setHeader('content-type', 'application/xml; charset=utf-8');
res.send(reply)
```

## API

- `function (msg)`

`msg` 失败原因

- `function success()`

- `function fail(msg)`

`msg` 失败原因

## 参考

微信支付开发文档：[支付结果通知](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7)

## 协议

[MIT](LICENSE), see [LICENSE](LICENSE) file for detail.  
Copyright © 2018 Richard Libre.  
Copyright © 2018 LibreRose Studio.
