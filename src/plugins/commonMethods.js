import {addCommas, digitsEnToFa, digitsFaToEn, removeCommas} from "@persian-tools/persian-tools";
import * as persianDate from 'persian-date';
import store from "@/store";
import {Subject} from 'rxjs'

export default {
    install(app) {
        app.config.globalProperties.getComma = (number) => {
            return addCommas(number);
        }
        app.config.globalProperties.removeComma = (number) => {
            return removeCommas(number);
        }
        app.config.globalProperties.enToFa = (number) => {
            return digitsEnToFa(number);
        }
        app.config.globalProperties.faToEn = (number) => {
            return digitsFaToEn(number);
        }
        app.config.globalProperties.isNumber = (event) => {
            return isNumber(event);
        }
        app.config.globalProperties.setMaxLength = (event) => {
            if (isNaN(Number.parseInt(event.key))) {
                return;
            }
            if (event.target.value.replaceAll(',', '').length >= event.target.getAttribute('length')) event.preventDefault();
        }
        app.config.globalProperties.convertAmountToPlainAmountValue = (irrAmountValue) => {
            return Number.parseFloat(irrAmountValue.toString().replaceAll(',', ''));
        }
        app.config.globalProperties.getImageUrl = (suffix) => {
            return app.config.globalProperties.serverAddress + suffix;
        }

        app.config.globalProperties.convertAmount = (event, vm, modelName) => {
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
        app.config.globalProperties.convertToIRR = (data) => {
            if (!!data) {
                return app.config.globalProperties.convertAmount(data) + ' ' + 'ریال'
            } else {
                return 'رایگان'
            }

        }


        app.config.globalProperties.base64toBlob = (base64Data, contentType) => {
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

        app.config.globalProperties.getPersianTime = (time, format) => {
            if (!format) {
                format = 'dddd DD MMMM YYYY - HH:mm';
            }
            let date = new Date(time);
            date.setHours(date.getHours());
            date.setMinutes(date.getMinutes());
            return new persianDate(date).format(format);
        }
        app.config.globalProperties.removeComma = (amount) => {
            return amount.toString().replaceAll(',', '');
        }
        app.config.globalProperties.getPublicUrl = (item) => {
            return app.config.globalProperties.serverAddress + '/api' + item;
        }
        app.config.globalProperties.test = () => {
            console.log("TEST")
        }

        app.config.globalProperties.randomColor = () => {
            return '#' + Math.random().toString(16).substr(-6);
        }
        app.config.globalProperties.regexPatterns = {
            username: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        }

        app.config.globalProperties.convertAmount = (event, vm, modelName) => {
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
        app.config.globalProperties.randomUUID = () => {
            return Date.now().toString(36) + Math.random().toString(36).substring(2);
        }
        app.config.globalProperties.navigateToRoute = async (target) => {
            await app.config.globalProperties.$router.replace(target);
        }
        app.config.globalProperties.showLoader = () => {
            app.config.globalProperties.$store.dispatch('setLoadingState', true).then();
        }
        app.config.globalProperties.hideLoader = () => {
            app.config.globalProperties.$store.dispatch('setLoadingState', false).then();
        }
        app.config.globalProperties.checkOrOpenAuthModal = async (openModal) => {
            const status = store.getters.isLogin;
            if (!status) {
                if (openModal) {
                    await store.dispatch('openLoginModal');
                }
            }
            return status;
        }
        app.config.globalProperties.authSubscriber = {
            success: new Subject(),
            unSuccess: new Subject()
        }
    },
}


let isNumber = (event) => {
    event = digitsFaToEn(event)
    const _isNumber = /^\d+$/.test(event);
    return _isNumber;
}