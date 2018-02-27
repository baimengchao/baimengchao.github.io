/*
    白梦超
    2018-02-23
    页面head部分信息
    title：页面title，必传，
    keyword：关键字，必传
    describe： 描述，必传
    sign： 页面标记，表示不同的页面，根据此标记可以显示不同的状态,（最好是数字）
*/
exports.PageHeadInfor = function(title,keyword,describe,sign) {
    return {
        title: title,
        keyword: keyword,
        describe: describe,
        sign: sign
    };
};