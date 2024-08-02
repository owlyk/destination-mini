npm install ejs

const ejs = require('ejs');

const fibonacciView = (fibonacciSeries) => {
    return ejs.render(`
        <html>
            <head>
                <title>Fibonacci Series</title>
            </head>
            <body>
                <h1>Fibonacci Series</h1>
                <ul>
                    <% fibonacciSeries.forEach(number => { %>
                        <li><%= number %></li>
                    <% }); %>
                </ul>
            </body>
        </html>
    `, { fibonacciSeries });
};

module.exports = fibonacciView;