/*

//write and invoke two functions:

//readHTML: A function that takes a URL string and a callback function as parameters:
//The function should make a request to the URL, read the full HTML of the page, and then pass the complete HTML data to the callback function.

//Since the data arrives in chunks, how can you ensure the callback function receives the full HTML?

//Keep in mind that http.get() takes an object of options such as host and path. Just like in the example, you will need to define a similar object inside your function that uses the url you passed in.

//For simplicity, test it with the URL 'example.com' first, but once it works you can try it with other websites if you wish.
var http = require("http");

// var requestOptions = {
//   host: "example.com",
//   path: "/"
// };


function readHTML (url, callback) {
  // Your code here
var requestOptions = {
  host: url,
  path: "/"
};


http.get(requestOptions, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // On Data Received
    //console.log("Chunk Received. Length:", data.length);
    callback(data);
  });

  // response.on("end", function() {                // On Data Completed
  //   console.log("Response stream complete.");
  // });

});

}

//printHTML: The callback function that takes the HTML data as a parameter, and prints it to the console.

function printHTML (htmlData) {
  // Your code here
  console.log(htmlData);

}


readHTML('example.com',printHTML);

//You can define this inline (defined within the arguments of the readHTML function call) if you are comfortable doing so - otherwise, for now, it's ok to define it separately and pass it to readHTML when you call it.

//However, eventually you will need to get comfortable defining callback functions within the arguments of a function call - once you feel comfortable with writing, passing and invoking callbacks. This is one of the foundations of Javascript, so it's important you do get used to inline function definitions.

*/


var request = require("request");




function readHTML (url, callback) {
  // Your code here
request(url, function(err, response, body) {
  if (err) {
    throw err;
  }

  console.log("Response Status Code:", response.statusCode);
  callback(body);
});


}

function printHTML (htmlData) {
  // Your code here
console.log(htmlData)

}

readHTML("http://www.example.com", printHTML);