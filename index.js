require("dotenv").config();
import Twitter from 'twitter';
import request from 'request';

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


request("http://quotes.rest/qod.json?category=inspire&maxlength=250", (error, response, body) => {
  if (error) {
    console.log(error);
  }
  if (response && response.statusCode === 200) {
    const jsonBody = JSON.parse(body);
    const currentQ = jsonBody.contents.quotes[0];
    const quoteToTweet = `${currentQ.quote} \r\n -${currentQ.author}`; 
    client.post(
      "statuses/update",
      { status: `${quoteToTweet}` },
      (error, tweet, response) => {
        if (!error) {
          console.log(tweet);
        }
        console.log(error);
        console.log(response);
      }
    );
  } else {
    console.log(JSON.stringify(response));
  }
});