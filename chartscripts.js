    
    // Bar Chart
    const ctx1 = document.getElementById('MS').getContext('2d');
    const MS = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {plugins:{
            legend:{display:false,},
            title:{display:true, text:'How much money have spent each months', font:{size:15}}
        }}
    });
    
    // this the pie chart 'Where you spent money'
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['👕 Clothes', '🍔 Food', '🚗 Car', '🎉 Fun', '🏠 House', '👷 Job'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        options:{
            plugins:{
                legend:{display:true, position:'right', font:{size:50}},
                title:{display:true, text:'Where you spent money', font:{size:15}}
            }
        },
        

    });


    // this the chart how much money you get each month
    const ctx2 = document.getElementById('MG').getContext('2d');
    const MG = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        options:{
            plugins:{
                legend:{display:false},
                title:{display:true, text:'How much money you get each month', font:{size:15}}
            }
        },
        

    });
    // Balance chart with money spent and earn
    const ctx3 = document.getElementById('MSE').getContext('2d');
    const MSE = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'dsfsd',
                data: [12, -19, -3, 5, -8, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    
                ],
                borderWidth: 1,
                borderSkipped: false,
                borderRadius: 20,

            }]
        },
        options:{
            plugins:{
                legend:{display:false},
                title:{display:true, text:'How much net money you get earn monthly', font:{size:15}}
            }
        },
        

    });
    
    // function to change months in charts
    function monthS(id, chartnameJS, monthList){
        // select the first 6 months
        document.getElementById(id).addEventListener('mousedown', ()=>{
        chartnameJS.data.labels =  monthList;
        chartnameJS.update();
     })
 
    }

    //calling function to perform month changes
    monthS('1to6q', MG, ['January', 'February', 'March', 'April', 'May', 'June']);
    monthS('7to12q', MG, ['July', 'August', 'September', 'October', 'November', 'December']);
    monthS('1to6', MS, ['January', 'February', 'March', 'April', 'May', 'June']);
    monthS('7to12', MS, ['July', 'August', 'September', 'October', 'November', 'December']);
    monthS('1to6w', MSE, ['January', 'February', 'March', 'April', 'May', 'June']);
    monthS('7to12w', MSE, ['July', 'August', 'September', 'October', 'November', 'December']);
