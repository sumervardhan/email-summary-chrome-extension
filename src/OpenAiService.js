// openai API call params
const MODEL = "gpt-3.5-turbo"
const CHAT_BOT_PRIMER = "You are a secretary for a busy CEO. Your job is to help summarise their emails, highlighting important points, questions, and action items."

async function getOpenAiResponse() {
    const url = 'https://email-summarizer-server.herokuapp.com/handleOpenAiApiCall'
    const inputData = document.getElementById("emailInput").value
    fetch(`${url}?input_data=${encodeURIComponent(inputData)}`, {
    method: 'GET'
    })
    .then(response => response.json())
    .then(resJson => {
        document.getElementById('emailInput').value = resJson.data
    })
    .catch(error => {
        console.error(error);
    });
}

module.exports = { getOpenAiResponse };
