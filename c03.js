// IIFE immediately invoked function expression
(function() {
    
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
    //creating hotel object using object literal syntax:
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };
    
    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();


    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var today = new Date();

    function offerExpires(today) {
        // Add 7 days time (added in milliseconds)
        var weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);

        // Create arrays to hold the names of days / months
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Collect the parts of the date to show on the page
        var day = dayNames[weekFromToday.getDay()];
        var date = weekFromToday.getDate();
        var month = monthNames[weekFromToday.getMonth()];
        var year = weekFromToday.getFullYear();

        // Create the message
        var expiryMsg = 'offer expires next ' + day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    var elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

})();