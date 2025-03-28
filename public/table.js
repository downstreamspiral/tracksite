async function fetchData() {
    try {
        // Fetch data from a public API that provides IP information
        const response = await fetch('https://api.ipify.org?format=json');
        const ipData = await response.json();

        
        const country = "United States"; //  replace this with a real API call to get country info

        // Get the table body
        const tableBody = document.getElementById('ipTable').getElementsByTagName('tbody')[0];

        // Clear existing rows
        tableBody.innerHTML = '';

        // Create a new row
        const newRow = tableBody.insertRow();
        const serialCell = newRow.insertCell(0);
        const ipCell = newRow.insertCell(1);
        const countryCell = newRow.insertCell(2);

        // Populate the cells
        serialCell.textContent = 1; // Serial number (you can implement a counter for multiple entries)
        ipCell.textContent = ipData.ip; // IP address from the API
        countryCell.textContent = country; // Static country for demonstration
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}