import {getCurrentInstance} from 'vue';
import {addCommas, digitsEnToFa, digitsFaToEn, removeCommas} from "@persian-tools/persian-tools";
import * as persianDate from 'persian-date';

const app = getCurrentInstance();
app.appContext.config.globalProperties.getComma = (number) => {
    return addCommas(number);
}
app.appContext.config.globalProperties.removeComma = (number) => {
    return removeCommas(number);
}
app.appContext.config.globalProperties.enToFa = (number) => {
    return digitsEnToFa(number);
}
app.appContext.config.globalProperties.faToEn = (number) => {
    return digitsFaToEn(number);
}
app.appContext.config.globalProperties.isNumber = (event) => {
    return isNumber(event);
}
app.appContext.config.globalProperties.setMaxLength = (event) => {
    if (isNaN(Number.parseInt(event.key))) {
        return;
    }
    if (event.target.value.replaceAll(',', '').length >= event.target.getAttribute('length')) event.preventDefault();
}
app.appContext.config.globalProperties.convertAmountToPlainAmountValue = (irrAmountValue) => {
    return Number.parseFloat(irrAmountValue.toString().replaceAll(',', ''));
}
app.appContext.config.globalProperties.getImageUrl = (suffix) => {
    return app.appContext.config.globalProperties.serverAddress + '/api' + suffix;
}

app.appContext.config.globalProperties.convertAmount = (event, vm, modelName) => {
    let stringValue = event;
    if (typeof stringValue === 'string') {
        stringValue = stringValue.replaceAll(',', '');
    } else {
        stringValue = stringValue.toString();
    }
    if (!isNumber(stringValue)) {
        if (modelName) {
            vm.model[modelName] = ''
        } else {
            return '';
        }
    }
    let total = addCommas(removeCommas(stringValue))
    if (modelName) {
        vm.model[modelName] = total;
    } else {
        return total;
    }
}


app.appContext.config.globalProperties.base64toBlob = (base64Data, contentType) => {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {type: contentType});
}

app.appContext.config.globalProperties.getPersianTime = (time, format) => {
    if (!format) {
        format = 'dddd DD MMMM YYYY - HH:mm';
    }
    let date = new Date(time);
    date.setHours(date.getHours());
    date.setMinutes(date.getMinutes());
    return new persianDate(date).format(format);
}
app.appContext.config.globalProperties.removeComma = (amount) => {
    return amount.toString().replaceAll(',', '');
}
app.appContext.config.globalProperties.getPublicUrl = (item) => {
    return app.appContext.config.globalProperties.serverAddress + '/api' + item;
}
app.appContext.config.globalProperties.test = () => {
    console.log("TEST")
}

app.appContext.config.globalProperties.randomColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
}
app.appContext.config.globalProperties.regexPatterns = {
    username: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
}

app.appContext.config.globalProperties.convertAmount = (event, vm, modelName) => {
    let stringValue = event;
    if (typeof stringValue === 'string') {
        stringValue = stringValue.replaceAll(',', '');
    } else {
        stringValue = stringValue.toString();
    }
    if (!isNumber(stringValue)) {
        if (modelName) {
            vm.model[modelName] = ''
        } else {
            return '';
        }
    }
    let total = addCommas(removeCommas(stringValue))
    if (modelName) {
        vm.model[modelName] = total;
    } else {
        return total;
    }
}
app.appContext.config.globalProperties.randomUUID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
app.appContext.config.globalProperties.navigateToRoute = async (target) => {
    await app.appContext.config.globalProperties.$router.replace(target);
}

let isNumber = (event) => {
    event = digitsFaToEn(event)
    const _isNumber = /^\d+$/.test(event);
    return _isNumber;
}