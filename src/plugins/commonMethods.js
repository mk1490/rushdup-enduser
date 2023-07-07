import {getCurrentInstance} from 'vue';
import {addCommas, digitsEnToFa, digitsFaToEn, removeCommas} from "@persian-tools/persian-tools";
import * as persianDate from 'persian-date';
import i18n from "@/locale";

export default {
    init: (instance) => {
        instance.appContext.config.globalProperties.getComma = (number) => {
            return addCommas(number);
        }
        instance.appContext.config.globalProperties.removeComma = (number) => {
            return removeCommas(number);
        }
        instance.appContext.config.globalProperties.enToFa = (number) => {
            return digitsEnToFa(number);
        }
        instance.appContext.config.globalProperties.faToEn = (number) => {
            return digitsFaToEn(number);
        }
        instance.appContext.config.globalProperties.isNumber = (event) => {
            return isNumber(event);
        }
        instance.appContext.config.globalProperties.setMaxLength = (event) => {
            if (isNaN(Number.parseInt(event.key))) {
                return;
            }
            if (event.target.value.replaceAll(',', '').length >= event.target.getAttribute('length')) event.preventDefault();
        }
        instance.appContext.config.globalProperties.convertAmountToPlainAmountValue = (irrAmountValue) => {
            return Number.parseFloat(irrAmountValue.toString().replaceAll(',', ''));
        }
        instance.appContext.config.globalProperties.getImageUrl = (suffix) => {
            return instance.appContext.config.globalProperties.serverAddress + '/api' + suffix;
        }

        instance.appContext.config.globalProperties.convertAmount = (event, vm, modelName) => {
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
        instance.appContext.config.globalProperties.convertToIRR = (data) => {
            if (!!data) {
                return instance.appContext.config.globalProperties.convertAmount(data) + ' ' + 'ریال'
            } else {
                return 'رایگان'
            }

        }


        instance.appContext.config.globalProperties.base64toBlob = (base64Data, contentType) => {
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

        instance.appContext.config.globalProperties.getPersianTime = (time, format) => {
            if (!format) {
                format = 'dddd DD MMMM YYYY - HH:mm';
            }
            let date = new Date(time);
            date.setHours(date.getHours());
            date.setMinutes(date.getMinutes());
            return new persianDate(date).format(format);
        }
        instance.appContext.config.globalProperties.removeComma = (amount) => {
            return amount.toString().replaceAll(',', '');
        }
        instance.appContext.config.globalProperties.getPublicUrl = (item) => {
            return instance.appContext.config.globalProperties.serverAddress + '/api' + item;
        }
        instance.appContext.config.globalProperties.test = () => {
            console.log("TEST")
        }

        instance.appContext.config.globalProperties.randomColor = () => {
            return '#' + Math.random().toString(16).substr(-6);
        }
        instance.appContext.config.globalProperties.regexPatterns = {
            username: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        }

        instance.appContext.config.globalProperties.convertAmount = (event, vm, modelName) => {
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
        instance.appContext.config.globalProperties.randomUUID = () => {
            return Date.now().toString(36) + Math.random().toString(36).substring(2);
        }
        instance.appContext.config.globalProperties.navigateToRoute = async (target) => {
            await instance.appContext.config.globalProperties.$router.replace(target);
        }
        instance.appContext.config.globalProperties.showLoader = () => {
            instance.appContext.config.globalProperties.$store.dispatch('setLoadingState', true).then();
        }
        instance.appContext.config.globalProperties.hideLoader = () => {
            instance.appContext.config.globalProperties.$store.dispatch('setLoadingState', false).then();
        }
    }
}


let isNumber = (event) => {
    event = digitsFaToEn(event)
    const _isNumber = /^\d+$/.test(event);
    return _isNumber;
}