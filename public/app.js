document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/prices')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('exchange-table');
            let tableHTML = '';
            data.forEach((exchange, index) => {
                tableHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${exchange.platform}</td>
                        <td>${exchange.lastPrice}</td>
                        <td>${exchange.buySell}</td>
                        <td>${exchange.diff}</td>
                        <td>${exchange.savings}</td>
                    </tr>
                `;
            });
            tableBody.innerHTML = tableHTML;
        })
        .catch(error => console.error('Error fetching exchange data:', error));
});

function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

function toggleDropdown1() {
        var dropdown = document.getElementById("myDropdown1");
        dropdown.classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    

// timer

let totalTime = 60;
let countdown = totalTime; 
const countdownElement = document.getElementById('countdown');
const leftHalf = document.getElementById('left-half');
const rightHalf = document.getElementById('right-half');


function startCountdown() {
    countdown = totalTime; 
    const interval = setInterval(() => {
        countdown--; 
        countdownElement.textContent = countdown; 
        
        let percentage = (totalTime - countdown) / totalTime * 100;
        
        if (percentage <= 50) {
            rightHalf.style.transform = `rotate(${(percentage / 50) * 180}deg)`;
        } else {
            rightHalf.style.transform = `rotate(180deg)`;
            leftHalf.style.transform = `rotate(${((percentage - 50) / 50) * 180}deg)`;
        }
        
        if (countdown === 0) {
            clearInterval(interval); 
            setTimeout(startCountdown, 1000);
        }
    }, 1000); 
}

startCountdown();


function addHomeScreen() {
   

    alert('Hodlinfo added to home screen!');
}