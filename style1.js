
fetch('https://api.covid19india.org/data.json')
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data.cases_time_series[0]);
    var sum=0;
    var i=0;
    while(i<225){
      sum=sum+parseInt(data.cases_time_series[i].dailyconfirmed);
      i++;
    }
    var k=0;
    var sum2=0;
    while(k<225){
      sum2=sum2+parseInt(data.cases_time_series[k].dailydeceased);
      k++;
    }
    var l=0;
    var sum3=0;
    while(l<225){
      sum3=sum3+parseInt(data.cases_time_series[l].dailyrecovered);
      l++;
    }
    var sum1=(sum-(sum2+sum3));
    console.log(sum);
    //console.log(sum1);
    console.log(sum1);

    document.getElementById('pbtn1').innerHTML=sum;
    document.getElementById('pbtn3').innerHTML=sum3;
    document.getElementById('pbtn4').innerHTML=sum2;
    document.getElementById('pbtn2').innerHTML=sum1;

    document.getElementById('h2').innerHTML=data.statewise[1].state;
    document.getElementById('h3').innerHTML=data.statewise[1].confirmed;
    document.getElementById('h4').innerHTML=data.statewise[1].active;
    document.getElementById('h5').innerHTML=data.statewise[1].recovered;
    document.getElementById('h6').innerHTML=data.statewise[1].deltaconfirmed;

    document.getElementById('i2').innerHTML=data.statewise[2].state;
    document.getElementById('i3').innerHTML=data.statewise[2].confirmed;
    document.getElementById('i4').innerHTML=data.statewise[2].active;
    document.getElementById('i5').innerHTML=data.statewise[2].recovered;
    document.getElementById('i6').innerHTML=data.statewise[2].deltaconfirmed;

    // document.getElementById('j2').innerHTML=data.statewise[3].state;
    // document.getElementById('j3').innerHTML=data.statewise[3].confirmed;
    // document.getElementById('j4').innerHTML=data.statewise[3].active;
    // document.getElementById('j5').innerHTML=data.statewise[3].recovered;
    // document.getElementById('j6').innerHTML=data.statewise[3].deltaconfirmed;

    document.getElementById('k2').innerHTML=data.statewise[4].state;
    document.getElementById('k3').innerHTML=data.statewise[4].confirmed;
    document.getElementById('k4').innerHTML=data.statewise[4].active;
    document.getElementById('k5').innerHTML=data.statewise[4].recovered;
    document.getElementById('k6').innerHTML=data.statewise[4].deltaconfirmed;

        document.getElementById('l2').innerHTML=data.statewise[5].state;
    document.getElementById('l3').innerHTML=data.statewise[5].confirmed;
    document.getElementById('l4').innerHTML=data.statewise[5].active;
    document.getElementById('l5').innerHTML=data.statewise[5].recovered;
    document.getElementById('l6').innerHTML=data.statewise[5].deltaconfirmed;

    //     document.getElementById('m2').innerHTML=data.statewise[10].state;
    // document.getElementById('m3').innerHTML=data.statewise[10].confirmed;
    // document.getElementById('m4').innerHTML=data.statewise[10].active;
    // document.getElementById('m5').innerHTML=data.statewise[10].recovered;
    // document.getElementById('m6').innerHTML=data.statewise[10].deltaconfirmed;

    //     document.getElementById('n2').innerHTML=data.statewise[7].state;
    // document.getElementById('n3').innerHTML=data.statewise[7].confirmed;
    // document.getElementById('n4').innerHTML=data.statewise[7].active;
    // document.getElementById('n5').innerHTML=data.statewise[7].recovered;
    // document.getElementById('n6').innerHTML=data.statewise[7].deltaconfirmed;

    //     document.getElementById('o2').innerHTML=data.statewise[10].state;
    // document.getElementById('o3').innerHTML=data.statewise[10].confirmed;
    // document.getElementById('o4').innerHTML=data.statewise[10].active;
    // document.getElementById('o5').innerHTML=data.statewise[10].recovered;
    // document.getElementById('o6').innerHTML=data.statewise[10].deltaconfirmed;
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {  
      type: 'doughnut',
      cutoutPercentage:50,
      data: {
          labels: ['active','deceased','recover'],
          datasets: [{
            label: '# of Votes',
            data: [sum,sum2,sum3],
            backgroundColor: [
                'rgba(0, 0, 255)',
                'rgba(87, 82, 68)',
                'rgba(11, 163, 24)'
            ],
           
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }

            }]

        }
    }
})

const ctx1 = document.getElementById('chart1').getContext('2d');
    const myChart1 = new Chart(ctx1, {  
      type: 'line',
      data: {
          labels: ['active','deceased','recover'],
          datasets: [{
            label: 'active',
            data: [sum,sum2,sum3],
            backgroundColor: [
                'rgba(0, 0, 255)',
                'rgba(87, 82, 68)',
                'rgba(11, 163, 24)'
            ],
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }

            }]

        }
    }
})
  



    
    
  })




