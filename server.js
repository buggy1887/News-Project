const express = require("express");

const app = express();

// I'm just gonna hardcode it for now, integrate with mongo db later
app.get("/api/news", (req, res) => {
  const news = [
    {
      id: 1,
      title: "Start",
      text:
        "Start on it today and we will talk about what i want next time mmm, exactly like that, but different and we exceed the clients expectations yet I really like the colour but can you change it this was not according to brief, nor it's great, can you add a beard though , or can it be more retro. The website doesn't have the theme i was going for that's great, but can you make it work for ie 2 please. I love it, but can you invert all colors? this is just a 5 minutes job you can get my logo from facebook but you might wanna give it another shot. I think this should be fairly easy so if you just want to have a look the target audience is makes and famles aged zero and up can you make it faster? can you make it pop. I need a website.",
      author: "Author",
    },
    {
      id: 2,
      title: "Cost",
      text:
        "How much will it cost I really like the colour but can you change it could you do an actual logo instead of a font can it handle a million in one go nor can you make the logo bigger yes bigger bigger still the logo is too big yet this was not according to brief anyway, you are the designer, you know what to do. I got your invoice...it seems really high, why did you charge so much we need more images of groups of people having non-specific types of fun was i smoking crack when i sent this? hahaha! i know you've made thirty iterations but can we go back to the first one that was the best version, or can we have another option.Other agencies charge much lesser this was not according to brief, i was wondering if my cat could be place",
      author: "Author",
    },
    {
      id: 3,
      title: "Need",
      text:
        "I need a website. How much will it cost I know somebody who can do this for a reasonable cost, but I have printed it out, but the animated gif is not moving. This turned out different that i decscribed doing some work for us 'pro bono' will really add to your portfolio i promise we don't need a contract, do we this is just a 5 minutes job, this was not according to brief.You might wanna give it another shot you might wanna give it another shot can we have another option there is too much white space.Can you make it pop that's great, but can you make it work for ie 2 please i'll know it when i see it can you make it more infographic",
      author: "Author",
    },
    {
      id: 4,
      title: "Time",
      text:
        "I really think this could go viral, nor could you move it a tad to the left this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue. Labrador can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch can you make pink a little more pinkish, and i know you",
      author: "Author",
    },
  ];
  res.json(news);
});

const port = 5000;

app.listen(port, () => console.log(`Server startet on ${port}`));
