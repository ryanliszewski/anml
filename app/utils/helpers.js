// createdAt display helper
export function timeSince(timeStamp) {
  var now = new Date(),
    secondsPast = (now.getTime() - new Date(timeStamp).getTime()) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast) + 's ago';
  }

  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + 'm ago';
  }

  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + 'h ago';
  }

  if (secondsPast > 86400) {
    day = new Date(timeStamp).getDate();
    month = new Date(timeStamp).toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    year = new Date(timeStamp).getFullYear() == now.getFullYear() ? "" : " " + new Date(timeStamp).getFullYear();
    return day + " " + month + year;
  }
}

export function createRequest(body){

}