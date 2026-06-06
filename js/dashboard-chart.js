const spendCtx =
document.getElementById('spendChart');

if(spendCtx){

new Chart(spendCtx, {

type:'bar',

data:{

labels:[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun'
],

datasets:[{

label:'Procurement Spend',

data:[
1200000,
1800000,
1500000,
2200000,
2600000,
3100000
],

borderWidth:2

}]

},

options:{

responsive:true,

plugins:{
legend:{
display:false
}
}

}

});

}

const vendorCtx =
document.getElementById('vendorChart');

if(vendorCtx){

new Chart(vendorCtx, {

type:'doughnut',

data:{

labels:[
'ABC Tech',
'XYZ Solutions',
'Global Services',
'Others'
],

datasets:[{

data:[
45,
25,
20,
10
]

}]

},

options:{

responsive:true

}

});

}