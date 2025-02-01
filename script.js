// Attendance data
const attendanceData = [
    { name: 'Alex Thompson', status: 'Present', timeIn: '9:00 AM', timeOut: '5:00 PM' },
    { name: 'Sarah Wilson', status: 'Late', timeIn: '9:30 AM', timeOut: '5:15 PM' },
    { name: 'Michael Chen', status: 'Present', timeIn: '8:55 AM', timeOut: '5:05 PM' },
    { name: 'Emma Davis', status: 'Absent', timeIn: '-', timeOut: '-' }
  ];
  
  // Function to create a status badge
  function createStatusBadge(status) {
    const badge = document.createElement('span');
    badge.className = `status-badge ${status.toLowerCase()}`;
    badge.textContent = status;
    return badge;
  }
  
  // Function to populate the attendance table
  function populateAttendanceTable() {
    const tableBody = document.getElementById('attendanceTableBody');
    
    attendanceData.forEach(person => {
      const row = document.createElement('tr');
      
      // Name cell
      const nameCell = document.createElement('td');
      nameCell.textContent = person.name;
      row.appendChild(nameCell);
      
      // Status cell
      const statusCell = document.createElement('td');
      statusCell.appendChild(createStatusBadge(person.status));
      row.appendChild(statusCell);
      
      // Time In cell
      const timeInCell = document.createElement('td');
      timeInCell.textContent = person.timeIn;
      row.appendChild(timeInCell);
      
      // Time Out cell
      const timeOutCell = document.createElement('td');
      timeOutCell.textContent = person.timeOut;
      row.appendChild(timeOutCell);
      
      tableBody.appendChild(row);
    });
  }
  
  // Initialize the application
  document.addEventListener('DOMContentLoaded', () => {
    populateAttendanceTable();
    
    // Add click event listeners to navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(navItem => {
          navItem.classList.remove('active');
        });
        // Add active class to clicked item
        item.classList.add('active');
      });
    });
  });