document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const tableBody = document.getElementById('contact-table-body');
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});