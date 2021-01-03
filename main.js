var trafficCanvas = document.getElementById('trafficC').getContext('2d');
let weekly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    lineTension: 0,
    pointRadius: 5,
    pointBackgroundColor: 'white',
    pointBorderColor: 'rgba(116, 119, 191, 1)',
    borderColor: 'rgba(116, 119, 191, 1)'
    }]
    };

let hourly = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [3000, 2250, 1521, 2432, 3500, 950, 450, 2500, 3000, 4000,
        3100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        borderColor: 'rgba(116, 119, 191, 1)'
        }]
        };

let daily = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [1100, 2350, 2000, 1000, 2500, 2750, 2250, 3850, 1250, 2500,
        1500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        borderColor: 'rgba(116, 119, 191, 1)'
        }]
        };

let monthly = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [1000, 2250, 2000, 1000, 3500, 4750, 2250, 1250, 1250, 2500,
        1500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        borderColor: 'rgba(116, 119, 191, 1)'
        }]
        };

let trafficOptions = {
        aspectRatio: 2.5,
        maintainAspectRatio: false,
        animation: {
        duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                     beginAtZero:true
                       }
                   }]
        },
        legend : {
        display: false
        },
 
        };

var myChart = new Chart(trafficCanvas, {
    type: 'line',
    data: weekly,
    options: trafficOptions
});

const navChart = document.querySelector('.traffic-nav');
navChart.addEventListener('click', e => {
    let eventElement = e.target;
    let trafficData;
    if (eventElement.classList.contains("monthly")) {
        trafficData= monthly;
         $('.monthly').css('background-color',"greenyellow");
         $('.daily').css('background-color',"white");
         $('.hourly').css('background-color',"white");
         $('.weekly').css('background-color',"white");
    } else if (eventElement.classList.contains("daily")){
        trafficData= daily;
        $('.monthly').css('background-color',"white");
         $('.daily').css('background-color',"greenyellow");
         $('.hourly').css('background-color',"white");
         $('.weekly').css('background-color',"white");
    }else if (eventElement.classList.contains("weekly")){
        trafficData= weekly;
        $('.monthly').css('background-color',"white");
         $('.daily').css('background-color',"white");
         $('.hourly').css('background-color',"white");
         $('.weekly').css('background-color',"greenyellow");
    }else if (eventElement.classList.contains("hourly")){
        trafficData= hourly;
        $('.monthly').css('background-color',"white");
         $('.daily').css('background-color',"white");
         $('.hourly').css('background-color',"greenyellow");
         $('.weekly').css('background-color',"white");
    } else {
        trafficData= monthly;
        $('.monthly').css('background-color',"greenyellow");
         $('.daily').css('background-color',"white");
         $('.hourly').css('background-color',"white");
         $('.weekly').css('background-color',"white");
    }
    var myChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });


});







const dailyCanvas = document.getElementById('dailyC').getContext('2d');
let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    data: [75, 100, 175, 125, 225, 200, 100],
    backgroundColor: 'rgba(116, 119, 191, 1)',
    borderWidth: 1,
    barThickness: 25,
    clip: true
    }]
    };

let dailyOptions = {
        aspectRatio: 2.5,
        maintainAspectRatio: false,
        animation: {
        duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                     beginAtZero:true
                       }
                   }]
        },
        legend : {
        display: false
        }
        };
    
var myChart2 = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


const mobileCanvas = document.getElementById('mobileC').getContext('2d');
let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

    let mobileOptions = {
        maintainAspectRatio: false,
        response: false,
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }
        
    var mobileChart = new Chart(mobileCanvas, {
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
            });



/***** BUTTONs SECTION */

let text = document.querySelector('.text');
let text2 = document.querySelector('.text2');
let checkButton = document.querySelector('.checkbox1');
let checkButton2 = document.querySelector('.checkbox2');


function ON() {
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  }

  function ON2() {
    if (text2.style.display === "block") {
      text2.style.display = "none";
    } else {
      text2.style.display = "block";
    }
  }

checkButton.addEventListener('click', () => {
    ON();

});

checkButton2.addEventListener('click', () => {
    ON2();

});


/****** SAVE AND CANCEL SECTION*/

const user = document.getElementById("search-user");
const message = document.getElementById("message-user");
const send = document.getElementById("send");


send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});
    

/******************* ALERT BANNER */
const alertBanner = document.getElementById("alert");

$('#alert').hide();
$('#alert').slideDown(1000);
// $('#alert').delay(3000);
// $('#alert').slideUp();


alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }});


const bell = document.querySelector(".bell");
$('.pop-up').hide();

bell.addEventListener('click',()=>{
    if($('.pop-up').css('display') =="none"){
    $('.pop-up').slideDown(1000);
    $('.notify').hide(1000);
    }else{
        $('.pop-up').slideUp(1000);
        $('.notify').show(1000);
    }
     
});

// if($('.pop-up').css('display') =="none"){

//     bell.addEventListener('click',()=>{
//         $('.pop-up').slideUp(1000);
    
//     });
// }