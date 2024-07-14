document.addEventListener('DOMContentLoaded', function() {
    const augBtn = document.getElementById('aug-btn');
    const sepBtn = document.getElementById('sep-btn');
    const exportBtn = document.getElementById('export-btn');
    const tableBody = document.querySelector('#pricing-table tbody');

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.allDay}</td>
                <td>${item.pmFree}</td>
                <td>${item.amFree}</td>
                <td>${item.am}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function fetchData(month) {
        fetch('pricingData.json')
            .then(response => response.json())
            .then(data => renderTable(data[month]))
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('料金データの読み込みに失敗しました。');
            });
    }

    augBtn.addEventListener('click', function() {
        fetchData('august');
    });

    sepBtn.addEventListener('click', function() {
        fetchData('september');
    });

    exportBtn.addEventListener('click', function() {
        // エクセルに出力する処理を追加
    });

    // デフォルトで8月の料金表を表示
    augBtn.click();
});
