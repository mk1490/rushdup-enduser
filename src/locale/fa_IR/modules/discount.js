module.exports = {
    title: 'مدیریت کد تخفیف', createNewDiscountCode: 'تعریف کد تخفیف جدید', editDiscountCode: 'ویرایش کد تخفیف',
    form: {
        title: 'عنوان',
        uniqueCode: 'کد',
        discountType: 'نوع کسر',
        discountValue: 'مقدار کسر',
        discountTarget: 'قابل استفاده برای',
        usableCount: 'تعداد قابل استفاده',
        minimumAmount: 'حدأقل قیمت',
        maximumAmount: 'حدأکثر قیمت',
        firstPurchase: 'قابل استفاده برای اوّلین خرید',
        expirationDate: 'تاریخ انقضاء',
        discountTargetItems: {
            generalUser: 'همۀ کاربران',
            specialUser: 'کاربر(ان) خاص',
            specialProduct: 'دوره‌(های) خاص',
            specialCategory: 'دسته‌بندی(های) خاص',
        },
        discountTypeItems: {
            percentage: 'درصدی', amountage: 'ریالی',
        },
        nameOrUsernameOfUser: 'نام، نام خانوادگی یا نام کاربر',
        nameOfCourse: 'عنوان دوره',
        nameOfCategory: 'عنوان دسته بندی',
    },
    table: {
        title: 'عنوان',
        code: 'کد',
        expirationDate: 'تاریخ اعتبار',
    },
    errors: {
        titleIsNotEmpty: 'عنوان نمی‌تواند خالی باشد!',
        minimum3CharacterRequired: 'حدأقل 3 کاراکتر موردنیاز است!',
        codeIsNotEmpty: 'کد نمی‌تواند خالی باشد!',
        codeIsInvalid: 'کد تخفیف وارد شده نامعتبر است و بایستی از کاراکترهای مجاز استفاده شود.'
    }
}