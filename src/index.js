async function getEmailData () {
    const emailInput = document.getElementById("emailInput").value;
    console.log(emailInput);
}

async function buttonKeypressHandler (event) {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("summariseButton").click();
      }
}
document.addEventListener("DOMContentLoaded", function () {
    const summariseButton = document.getElementById("summariseButton");
    console.log(summariseButton);
    if (summariseButton) {
        summariseButton.input.addEventListener("click", getEmailData);
        summariseButton.getElementById("summariseButton").addEventListener("keypress", buttonKeypressHandler(event));
    }
});

async function getEmailSummary () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '[INSERT API KEY]',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2022-10-09&maxDate=2022-10-12&page=1', options)
    const record = await res.json()

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
