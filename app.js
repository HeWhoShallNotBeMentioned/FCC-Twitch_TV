
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var html = "";
var html2 = "";

//Free Code Camp channel
$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/FreeCodeCamp/?callback=?', function(data) {
  console.log(data);
});

// $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/channel/?callback=?', function(data) {
//   console.log(data);
// });

//streams
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/summary/?callback=?', function(data) {
  console.log(data);
});



//users
$.getJSON('https://wind-bow.gomix.me/twitch-api//users/cretetion/?callback=?', function(data) {
  console.log(data);
});

function userGenerate (users) {
  userURL1 = 'https://wind-bow.gomix.me/twitch-api/users/';
  userURL2 = '/?callback=?';
  html2 += '<div>';
    for(var j = 0; j < users.length; j++) {
      html2 += '<p>' + userURL1;
      html2 += users[j];
      html2 += userURL2;
      html2 += '</p>';
    }
    html2 += "</div>";
}
userGenerate(users);
$(".usersDiv").append(html2);
