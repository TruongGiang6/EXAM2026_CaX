
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN').format(number) + ' ₫';
}

function renderTable() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    products.forEach((product, index) => {
        const statusClass = product.status ? 'status-in-stock' : 'status-out-stock';
        const statusText = product.status ? 'Còn hàng' : 'Hết hàng';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="fw-medium text-dark">${product.name}</td>
            <td>${product.category}</td>
            <td>${formatCurrency(product.price)}</td>
            <td>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});