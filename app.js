let weather = {
    apikey: "ce93c5cb2d1eaa0c9cda00f58c539d82",
    fetchweather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey)
        .then((response) => {
            if(!response.ok) {
                alert("no weather found");
                throw new Error("no weather found");
            }
            return response.json();
        })
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const{ name } = data;
        const{ icon,description } = data.weather[0];
        const{ temp,humidity } = data.main();
        const{ speed } = data.wind;

    }
}