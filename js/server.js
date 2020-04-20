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
const phone   = PHONE({
    number        : number,
    autocam       : false,
    publish_key   : 'pub-c-8be964fa-5063-4f39-8411-0b4a50880626',
    subscribe_key : 'sub-c-b30f852e-46d6-11e8-91e7-8ad1b2d46395',
    media         : {audio : true, video : true},
    ssl           : true
});

// hide the hang up button
//phone.$('disconnect').style.visibility = 'hidden';
//phone.$('started').style.visibility = 'hidden';

// Debugging Output
phone.debug( info => console.info(info) );

// Show Number
phone.$('number').innerHTML = 'Number: ' + number;

// Start Camera
//phone.camera.start();
phone.bind('mousedown,touchstart', phone.$('connect'), function(){
    phone.camera.start();
    phone.$('connect').innerHTML = "Connected!"
    phone.$('connect').disabled = true;
});

// Stop Camera
phone.bind('mousedown,touchstart', phone.$('disconnect'), function() {
    phone.camera.stop();
});

// Local Camera Display
phone.camera.ready( video => {
    phone.$('video-out').appendChild(video);
});

// As soon as the phone is ready we can make calls
phone.ready(()=>{
    // Send client's number to server
    /*phone.bind('mousedown,touchstart', phone.$('send-number'), function(){
        if (phone.$('server-address').value == "") {
            swal("Empty!");
        } else {
            session = phone.dial(phone.$('server-address').value);
            session.send({text : number});
            phone.$('server-address').value = "";
            phone.$('server-address').disabled = true;
            phone.$('send-number').innerHTML = "Number Sent!";
            phone.$('send-number').disabled = true;
            phone.hangup();
        }
    });*/
    //session.send({text : myNumber});
    phone.bind('mousedown,touchstart', phone.$('connect'), function(){
        session = phone.dial("77777");
        session.send({text : number});
        phone.$('connect').disabled = true;
        phone.$('connect').innerHTML = "Connected!";
        phone.hangup();
    });

    // Stop Call
    /*phone.bind('mousedown,touchstart', phone.$('disconnect'), function(){
        phone.hangup();
        phone.$('connect').innerHTML = "Connect to Translator"
        phone.$('connect').disabled = false;
        phone.$('server-address').value = "";
        phone.$('server-address').disabled = false;
        phone.$('send-number').innerHTML = "Send My Number";
        phone.$('send-number').disabled = false;
    });*/
    phone.bind('mousedown,touchstart', phone.$('disconnect'), function(){
        phone.hangup();
        phone.$('connect').innerHTML = "Connect to Translator"
        phone.$('connect').disabled = false;
    });
});

// When Call Comes In or is to be Connected
phone.receive(function(session){
    // Display Your Friend's Live Video
    session.connected(function(session){
        //phone.$('video-out').appendChild(session.video);
        phone.$('started').style.visibility = 'visible';
        startTime = new Date()
        setTimeout(display, 1000);
        phone.$('disconnect').style.visibility = 'visible';
    });
    session.ended(function(session) {
        swal("call ended.");
        clearTimeout(display);
        phone.$('started').innerHTML = '';
        phone.$('started').style.visibility = 'hidden';
        phone.$('disconnect').style.visibility = 'hidden';
        phone.$('connect').innerHTML = "Connect to Translator"
        phone.$('connect').disabled = false;
        //phone.$('server-address').value = "";
        //phone.$('server-address').disabled = false;
        //phone.$('send-number').innerHTML = "Send My Number";
        //phone.$('send-number').disabled = false;
    });
});

function display() {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the ms
    timeDiff /= 1000;

    // get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff ;

    phone.$('started').innerHTML = "Spent Listening for about "+hours+":"+minutes+":"+seconds;
    setTimeout(display, 1000);
}
