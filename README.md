# wcpay-notify-result

[![Greenkeeper badge](https://badges.greenkeeper.io/codinggirl/wcpay-notify-result.svg)](https://greenkeeper.io/)

Read by language:
[[Engish]](#en) [[简体中文]](#zh-CN)

<a id='en' name='en'></a>

## Description

A package to build a result string for wechat pay notify callback.

<a id='zh-CN' name='zh-CN'></a>

## 概述

一个收到微信支付服务器支付结果通知后，生成用于返回的应答字符串的库。

支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理，并返回应答。
这个包就是生成这个应答字符串信息用的。

## 安装

选择下列一种方式安装即可。

- 直接安装

```bash
npm i wcpay-notify-result
```
- 作为依赖项安装

```bash
npm i --save wcpay-notify-result
```

## 使用

商户程序在处理完支付核验业务逻辑后，需要给微信支付服务器返回相应的xml应答字符串。
以下3种情况，可根据实际选择使用。

- 简单处理

```javascript
var result = require('wcpay-notify-result')

// 这里是你的处理信息
// 当业务处理成功时，msg应当为空
// 否则会被当作失败
var msg = '...'
var reply = result.result(msg)
// 使用你自己的服务器相关方法返回结果
res.setHeader('content-type', 'application/xml; charset=utf-8')
res.send(reply)
```

- 处理成功

```javascript
var result = require('wcpay-notify-result')

// 直接视为处理成功
var reply = result.success()
// 使用你自己的服务器相关方法返回结果
res.setHeader('content-type', 'application/xml; charset=utf-8')
res.send(reply)
```

- 处理失败

```javascript
var result = require('wcpay-notify-result')

// 失败信息
var msg = '签名失败'
// 获取处理失败时，返回给服务器的xml字符串
var reply = result.fail(msg)
// 使用你自己的服务器相关方法返回结果
res.setHeader('content-type', 'application/xml; charset=utf-8')
res.send(reply)
```

## API

- `function (msg)`

`msg` 失败原因

- `function success()`

- `function fail(msg)`

`msg` 失败原因

## 其他方案

本节列出社区中相关问题的其他解决方案，供大家参考。

注：这些包由社区中的其他成员维护。

- tenpay - 微信支付 for nodejs 

[npm](https://www.npmjs.com/package/tenpay) 
[GitHub](https://github.com/befinal/node-tenpay) 

这个包通过中间件的形式对支付结果通知、退款结果通知进行处理。如果你觉得中间件比较方便，可以选择此包。

## 参考

微信支付开发文档：[支付结果通知](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7)

## 协议

[MIT](LICENSE), see [LICENSE](LICENSE) file for detail.  
Copyright © 2018 Richard Libre.  
Copyright © 2018 LibreRose Studio.
