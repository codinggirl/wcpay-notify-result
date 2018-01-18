module.exports = {

    /**
     * 返回字符串
     * return result string
     * This is a short usage method, if `msg` param provide, it take it as fail.
     * @param msg 失败原因 如果为成功，则留空
     * @returns {*}
     */
    result: function (msg) {
       return msg ?  _this.fail(msg) : _this.success()
    },

    /**
     * 返回成功的字符串
     * @returns {string}
     */
    success: function () {
        return '<xml>\n' +
            '  <return_code><![CDATA[SUCCESS]]></return_code>\n' +
            '  <return_msg><![CDATA[OK]]></return_msg>\n' +
            '</xml>'
    },

    /**
     * 返回失败的字符串
     * @param msg 失败原因
     * @returns {string}
     */
    fail: function (msg) {
        return '<xml>\n' +
            '  <return_code><![CDATA[FAIL]]></return_code>\n' +
            '  <return_msg><![CDATA[' + msg + ']]></return_msg>\n' +
            '</xml>'
    }
}

var _this = module.exports
