//格式化时间

//把毫秒数转化成具体日期   2021-06-04 00:00:00
//参数 毫秒数  
export function formatMsToDate(ms) {
    if (ms) {
        var oDate = new Date(ms),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
                addZero(oMin) + ':' + addZero(oSen);
        return oTime;
    } else {
        return ""
    }
}
//该方法用于给日期、时间补零
function addZero(num) {
    if (parseInt(num) < 10) {
        num = "0" + num
    }
    return num
}

//清除抖动
export function debounce(func, delay) {
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer); //上次还未执行 取消不执行
        }

        timer = setTimeout(func, delay);
    };
}