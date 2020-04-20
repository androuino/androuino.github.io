'use strict';
//import swal from 'sweetalert';

// ~Warning~ You must get your own API Keys for non-demo purposes.
// ~Warning~ Get your PubNub API Keys: https://www.pubnub.com/get-started/
// The phone *number* can by any string value

// record start time
var startTime;
var start = document.getElementById("start");
let   session = null;
const number  = Math.ceil(Math.random()*10000);
var phone;

/*var btnSwitch = document.getElementById('switch');

$('#switch').click(function() {
	$(this).find('input[type=checkbox]').click();
  if ($(this).find('input[type=checkbox]').is(':checked')) {
    $(this).addClass('on');
  } else {
    $(this).removeClass('on');
  }
});*/

phone = PHONE({
    number        : number,
    autocam       : false,
    publish_key   : 'pub-c-8be964fa-5063-4f39-8411-0b4a50880626',
    subscribe_key : 'sub-c-b30f852e-46d6-11e8-91e7-8ad1b2d46395',
    media         : {audio : true, video : true},
    ssl           : true
});

// Debugging Output
phone.debug( info => console.info(info) );
// Show Number
phone.$('number').innerHTML = 'Number: ' + number;
// Start Camera
phone.bind(
    'mousedown,touchstart',
    phone.$('startcam'),
    event => phone.camera.start()
);
// Stop Camera
phone.bind(
    'mousedown,touchstart',
    phone.$('stopcam'),
    event => phone.camera.stop()
);
// Local Camera Display
phone.camera.ready( video => {
    var cont = document.createElement('div');
    cont.setAttribute("style", "display: inline-block; margin-top: 1px;");
    cont.setAttribute("id", "video-out");
    cont.appendChild(video);
    document.body.appendChild(cont);
    var vid = phone.$('video-out').appendChild(video);
    phone.$('stream-container').appendChild(vid)
});
// As soon as the phone is ready we can make calls
phone.ready(()=>{
    // Start Call
    phone.bind(
        'mousedown,touchstart',
        phone.$('startcall'),
        event => session = phone.dial(phone.$('dial').value)
    );
    // Stop Call
    phone.bind(
        'mousedown,touchstart',
        phone.$('stopcall'),
        event => phone.hangup()
    );
});
// When Call Comes In or is to be Connected
phone.receive(function(session){
    // Display Your Friend's Live Video
    session.connected(function(session){
        var cont = document.createElement('div');
        cont.setAttribute("style", "display: inline-block; margin-top: 1px;");
        cont.setAttribute("id", "video-out");
        var vid = phone.$('video-out').appendChild(session.video);
        phone.$('stream-container').appendChild(vid)
    });
    session.disconnected(function(session){

    });
});
