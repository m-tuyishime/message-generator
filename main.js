const stocks =
  "mtch ttm uber msft sne bmw.de vow3.de mcd pg tm googl ddaif vfc snap dis amzn tsla lvmuy ker.pa meta";
const crypto =
  "btc eth bnb ada xrp dot doge usdc shib pnt avax link ltc busd matic algo vet xrm bch icp";

const getRandSec = () => {
  let rand = Math.floor(Math.random() * 2);
  let sent = "";
  switch (rand) {
    case 0:
      sent = stocks;
      break;
    case 1:
      sent = crypto;
      break;
    default:
      throw "the math is shit!";
  }

  let secs = sent.split(" ");
  secs = secs.map((sec) => `$${sec.toUpperCase()}`);
  rand = Math.floor(Math.random() * secs.length);
  return secs[rand];
};

const sentBuilder = () => {
  let rand = Math.floor(Math.random() * 2);
  return `You should buy ${getRandSec()} and sell ${getRandSec()}.`;
};

console.log(sentBuilder());
