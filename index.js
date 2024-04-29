const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const htmlContent = `

    <h1>Let's deploy this cat!</h1>
    <img src="https://media.licdn.com/dms/image/D5612AQEqY7vY1zRYEg/article-cover_image-shrink_600_2000/0/1705030463020?e=2147483647&v=beta&t=pQdFr52qTcXq6iF4TibMYFhWP_s59iuXR_5_GpFmHIA" alt="cat on plane"> `
        ;
  res.send(htmlContent);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
