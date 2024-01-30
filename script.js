$(document).ready(function () {
    // Fullpage Initialization
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        sectionsColor: ['#ffe6e6', '#99ccff', '#ffe6ff', '#ffffcc'],
        navigation: true,
        slidesNavigation: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
        navigationTooltips: ['home', 'books', 'inventory', 'stats', 'footer-section'],
        afterLoad: function (origin, destination, direction) {
            if (destination.anchor === 'home') {
                animateHomeSection();
            } else if (destination.anchor === 'books') {
                animateBookSection();
            } else if (destination.anchor === 'stats') {
                animateChartSection();
            } else if (destination.anchor === 'inventory') {
                animateInventorySection();
            } else if (destination.anchor === 'footer') {
                animateFooterSection();
            }
        }
    });

    // Function to animate chart and table
    function animateChartAndTable() {
        // Chart animation
        var chartBars = document.querySelectorAll('.chart-container canvas');
        anime.timeline({ loop: false })
            .add({
                targets: '.chart-container h3',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: chartBars,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200, { start: 500 }),
                complete: function () {
                    myChart.data.datasets[0].data.forEach(function (_, index) {
                        myChart.data.datasets[0].data[index] = chartData.datasets[0].data[index];
                    });
                    myChart.update();
                },
            }, '-=500');

        // Table animation
        var tableRows = $('#table tbody tr');
        anime.timeline({ loop: false })
            .add({
                targets: tableRows,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 800,
                delay: anime.stagger(100),
            });
    }
    animateChartAndTable();
});
// DataTable initialization
var tableData = [
    ["1984", "George Orwell", "Dystopian", 1949, "Hardcover"],
    ["Animal Farm", "George Orwell", "Political Satire", 1945, "Hardcover"],
    ["Atomic Habits", "James Clear", "Self-improvement", 2018, "Audio"],
    ["Becoming", "Michelle Obama", "Autobiography", 2018, "eBook"],
    ["To Kill a Mockingbird", "Harper Lee", "Fiction", 1960, "Novel"],
    ["The Great Gatsby", "F. Scott Fitzgerald", "Classics", 1925, "Novel"],
    ["The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951, "Novel"],
    ["Pride and Prejudice", "Jane Austen", "Romance", 1813, "Novel"],
    ["The Hobbit", "J.R.R. Tolkien", "Fantasy", 1937, "Novel"],
    ["Brave New World", "Aldous Huxley", "Dystopian", 1932, "Novel"],
    ["The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", 1954, "Novel"],
    ["Crime and Punishment", "Fyodor Dostoevsky", "Classics", 1866, "Novel"],
    ["The Alchemist", "Paulo Coelho", "Fantasy", 1988, "Novel"],
    ["Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", 1997, "Novel"],
    ["The Da Vinci Code", "Dan Brown", "Mystery", 2003, "Novel"],
    ["The Shining", "Stephen King", "Horror", 1977, "Novel"],
    ["The Hunger Games", "Suzanne Collins", "Dystopian", 2008, "Novel"],
    ["1984", "George Orwell", "Dystopian", 1949, "Novel"],
    ["To Kill a Mockingbird", "Harper Lee", "Fiction", 1960, "Novel"],
    ["The Great Gatsby", "F. Scott Fitzgerald", "Classics", 1925, "Novel"],

];


$('#table').DataTable({
    data: tableData,
    columns: [
        { title: "Title" },
        { title: "Author" },
        { title: "Genre" },
        { title: "Year" },
        { title: "Type" },
    ]

});

// Bar Chart 
var labels = ["Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance", "Non-Fiction", "Bio and Memoirs"];
var chartData = {
    labels: labels,
    datasets: [{
        label: " # of Books",
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 0, 0, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 0, 0, 1)'],
        borderWidth: 10,
        data: [12, 19, 3, 5, 2, 3, 15],
    }]
};

var chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    },
};

var myChart = new Chart(document.getElementById('myChart'), chartConfig);

// Animations for both chart and table
animateChartAndTable();

// Function to animate chart and table
function animateChartAndTable() {
    // Chart animation
    var chartBars = document.querySelectorAll('.chart-container canvas');
    anime.timeline({ loop: false })
        .add({
            targets: '.chart-container h3',
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
        })
        .add({
            targets: chartBars,
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: anime.stagger(200, { start: 500 }),
            complete: function () {
                myChart.data.datasets[0].data.forEach(function (_, index) {
                    myChart.data.datasets[0].data[index] = chartData.datasets[0].data[index];
                });
                myChart.update();
            },
        }, '-=500');

    // Table animation
    var tableRows = $('#table tbody tr');
    anime.timeline({ loop: false })
        .add({
            targets: tableRows,
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 800,
            delay: anime.stagger(100),
        });
}

// SG Map
const polytechnics = [
    { name: 'Sengkang BookBud Library', top: 300, left: 700 },
    { name: 'Jurong BookBud Library', top: 500, left: 450 },
    { name: 'Woodlands BookBud Library', top: 400, left: 500 },
    { name: 'Ang Mo Kio BookBud Library', top: 500, left: 700 },
    { name: 'Hougang BookBud Library', top: 250, left: 800 }
];

const mapContainer = document.getElementById('map');

polytechnics.forEach(polytechnic => {
    const marker = document.createElement('div');
    marker.className = 'poly-marker';
    marker.style.top = polytechnic.top + 'px';
    marker.style.left = polytechnic.left + 'px';
    mapContainer.appendChild(marker);

    tippy(marker, {
        content: polytechnic.name,
        placement: 'top'
    });

    marker.addEventListener('click', () => {
        alert(polytechnic.name + ' clicked!');
    });
});

// Reserve Btn
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        this.textContent = 'Reserved';
        this.disabled = true;
        this.classList.add('reserved');
        this.style.backgroundColor = '#00004d';
        this.style.borderColor = '#00004d';
    });
});

// JavaScript for search functionality
$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".col").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

$(document).ready(function () {
    // Define animations
    var animation = anime({
        targets: '.section:nth-child(2) *',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: anime.stagger(100),
    });

    // Trigger animations after page load
    animation.play();
});
// Function to show book description modal
// JavaScript function to show book description in modal

function showBookDescription(title, description) {
    // Get modal elements
    var modalTitle = document.querySelector("#bookDescriptionModal .modal-title");
    var modalBody = document.querySelector("#bookDescriptionModal .modal-body");

    // Update modal content with book details
    modalTitle.textContent = title;
    modalBody.textContent = description;

    // Display the modal
    $('#bookDescriptionModal').modal('show');
}

