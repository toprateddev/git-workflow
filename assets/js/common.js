/**
 * Helper functions
 * Author: Aidan Brake
 * 07/17/2014
 */

/**
 * Image links
 */
var links = [
	"https://odesk-prod-portraits.s3.amazonaws.com/Users:dotcomlebanon:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=7UpE4H4OYs6YUF45I1FRdVWqUNM%3D",
	"https://odesk-prod-portraits.s3.amazonaws.com/Users:shipra:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=LL7Z2IcU%2FOWFWezrv48wKrTXS8U%3D",
	"https://odesk-prod-portraits.s3.amazonaws.com/Users:adrian_lysek:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=m5jz9CiwvjiNq8lgc8odiBan5Cg%3D",
	"https://odesk-prod-portraits.s3.amazonaws.com/Users:killmenot:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=LNp5hyWAJX4rlkLe8TfFcES0r9E%3D",
	"https://odesk-prod-portraits.s3.amazonaws.com/Users:motorcade:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=nSmfm%2B2Yr95P5mFhz0kJTZl8NIY%3D",
	"https://odesk-prod-portraits.s3.amazonaws.com/Users:flyingyeti:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=QimEW%2BT2aqk9chdKoww7ePLVkF4%3D",
	"https://www.odesk.com/images/svg-icons/user.svg"
	];

/**
 * Getting substring with three dots - "..."
 */
String.prototype.threeDots = function (length){
	var len = 10,
	str = this.valueOf();
	if (len == undefined) 
		return str + "...";
	else if (len < 1) 
		return str;
	else {
		len = length;
		if (str.length > len) 
			return str.substr(0, len) + "...";
		else 
			return str;
	}
}

var getTimeFromUNIXStamp  = function(timestamp, option) {
	var date = new Date(parseInt(timestamp) * 1000),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		time = "AM",
		resultTime = "",
		resultDate = "",
		yesterday = new Date();

	yesterday.setHours(0);
	yesterday.setMinutes(0);
	yesterday.setSeconds(0);

	if ( hours > 11 ) {
		hours -= 12;
		time = "PM";
	}

	resultDate += (date.getMonth() + 1).toString() + "/" + date.getDate();
	resultTime += ((hours > 9) ? hours.toString() : "0" + hours.toString()) + ":";
	resultTime += ((minutes > 9) ? minutes.toString() : "0" + minutes.toString()) + " " + time;

	if ( option == 0 ) {
		if (yesterday > date)	{
			return resultDate;
		} else {
			return resultTime;
		}
	} else {
		return resultDate + " " + resultTime;
	}
}


var getRandomInt = function(min, max) {       
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    // Convert to decimal
    var randomNum = '0.' + byteArray[0].toString();

    // Get number in range
    randomNum = Math.floor(randomNum * (max - min + 1)) + min;

    return randomNum;
}


/**
 * Script adding function
 * @params File names to be added
 */
function addScripts(files) {
	var root = document.getElementsByTagName('body')[0],
		head = document.getElementsByTagName("head")[0];

	if( !head){
		head = document.createElement("head"); 
		root.appendChild( head); 
	}
	
	for (var i = 0; i < files.length; i++) {
		var link = document.createElement("script");
	
		link.src = chrome.extension.getURL(files[i]);
		link.type = "text/javascript";
		head.appendChild(link);
	}
}