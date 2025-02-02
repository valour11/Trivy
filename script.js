
        let participantCount = 0;

        function addParticipant() {
          const nameInput = document.getElementById("new-participant");
          const name = nameInput.value.trim();
          if (name === "") return;

          participantCount++;
          const table = document.getElementById("attendance-table");
          const row = document.createElement("tr");
          row.innerHTML = `
                    <td>${name}</td>
                    <td id="status-${participantCount}">Absent</td>
                    <td id="time-in-${participantCount}">--:--</td>
                    <td id="time-out-${participantCount}">--:--</td>
                    <td><button class="mark-btn" onclick="markAttendance(${participantCount})">Mark Present</button></td>
                `;
          table.appendChild(row);
          nameInput.value = "";
        }

        function markAttendance(id) {
          const now = new Date();
          const timeString = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
          const statusCell = document.getElementById(`status-${id}`);
          const timeInCell = document.getElementById(`time-in-${id}`);
          const timeOutCell = document.getElementById(`time-out-${id}`);

          if (statusCell.innerText === "Absent") {
            statusCell.innerText = "Present";
            statusCell.style.color = "green";
            timeInCell.innerText = timeString;
          } else {
            statusCell.innerText = "Absent";
            statusCell.style.color = "red";
            timeOutCell.innerText = timeString;
          }
        }
        function loadContent(page) {
          const content = {
            attendance: `<div class="header-container">
          <header>
            <h2>Today's Attendance</h2>
            <p>Track and manage attendance for your team</p>
          </header>
        </div>
        <div class="container">
            <div class="add-participant">
                <input type="text" id="new-participant" placeholder="Enter Name">
                <button class="add-btn" onclick="addParticipant()">Add Participant</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="attendance-table">
                    
                </tbody>
            </table>
        </div>`,
            report: `<p> <div class="container">
        <h2>Attendance Report</h2>
        <table>
            <thead>
                <tr>
                    <th>Total Participants</th>
                    <th>Present</th>
                    <th>Absent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="total-participants">0</td>
                    <td id="present-count">0</td>
                    <td id="absent-count">0</td>
                </tr>
            </tbody>
        </table>
       
    </div></p>`,
            home: `<div class="header-container">
          <header>
            <h2>Create Attendance</h2>
            <p>Track and manage attendance for your team</p>
             <a href="#" onclick="loadContent('attendance')"><button type="button" class="add-btn">Create</button></a>
          </header>
        </div>`
          };
          document.getElementById("main-content").innerHTML = content[page];
        }

        // Attendance Report script

        function updateReport() {
          const total = localStorage.getItem("#new-participant") || 0;
          const present = localStorage.getItem("presentCount") || 0;
          const absent = total - present;

          document.getElementById("total-participants").innerText = total;
          document.getElementById("present-count").innerText = present;
          document.getElementById("absent-count").innerText = absent;
        }

        function goBack() {
          window.location.href = "index.html";
        }

        updateReport();