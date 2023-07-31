const time = document.querySelector('#date');
const getTime = new Date();
const day = getTime.getDay();
const date = getTime.getDate();
const month = getTime.getMonth();
const year = getTime.getFullYear();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

time.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`;