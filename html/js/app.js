
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN').format(number) + ' ₫';
}