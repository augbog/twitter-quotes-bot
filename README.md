# twitter-quotes-bot

Just a basic Twitter bot that runs once a day and powers [@motivatemeagain](https://twitter.com/motivatemeagain)

This bot taps into the [theysaidso.com API](https://theysaidso.com/api/) to generate it's quotes and runs on a Raspberry Pi.

To run this bot, define a `.env` file with your Twitter application credentials 

```
TWITTER_CONSUMER_KEY=??????
TWITTER_CONSUMER_SECRET=??????
TWITTER_ACCESS_TOKEN_KEY=??????
TWITTER_ACCESS_TOKEN_SECRET=??????
```

and then set up a cronjob to run everyday!
