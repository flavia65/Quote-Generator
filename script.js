const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes";

async function getquote(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "fad27e6558msh558269a18a5a0ccp1dbf34jsn6b554be01ef1",
                "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com"
            }
        });
        const data = await response.json();
        console.log(data);  // Verifique a resposta no console

        quote.textContent = data[0].quote;
        author.textContent = data[0].author || "Unknown";
    } catch (error) {
        console.error("Erro ao buscar citação:", error);
    }
}

getquote(api_url);


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}
