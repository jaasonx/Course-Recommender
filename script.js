document.getElementById("courseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    var subject = document.getElementById("subject").value;
    var level = document.getElementById("level").value;
    var interests = Array.from(document.getElementById("interests").selectedOptions).map(option => option.value);
    
    // Perform recommendation logic (replace with your own logic)
    var recommendations = getCourseRecommendations(subject, level, interests);
    
    // Display recommendations
    var recommendationsDiv = document.getElementById("recommendations");
});

async function mainEvent() {
    const mainForm = document.querySelector('.main_form');;
    const loadDataButton = document.querySelector('#generate');
    const textField = document.querySelector('#resto');

    generateListButton.classList.add('hidden');
    let currentList = [];
    let storedList = [];

    loadDataButton.addEventListener('click', async (submitEvent) => {
        console.log('Loading data');
        loadAnimation.style.display = 'inline-block';
        const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');

        storedList = await results.json();
        if (storedList.length > 0) {
            generateListButton.classList.remove('hidden');
        }
        loadAnimation.style.display = 'none';
        console.table(currentList);
    });

    generateListButton.addEventListener('click', (event) => {
        console.log('generate new list');
        currentList = cutRestaurantList(storedList);
        console.log(currentList);
        injectHTML(currentList);
    });

}

