// 1. What is HTTP?
// HyperText Transfer Protocol it creates rules on how data is sent to and from a server
// 
// 2. What is a URL?
//Uniform Resource Locator, an address for internet resources.
    
// 3. What is DNS?
//Domain Name System, a system that takes human-readable URLs and converts them into IP addresses.
    
//4. What is a query string?
//The query string allows you to pass key-value pairs into the URL, in the format `?key1=value1&key2=value2...`
    
//5. List two HTTP Verbs and their use cases.
//GET - get some data from the server (most pages, search forms)
//POST - send some data to the server (pages that change data on server)
//
//6. What is an HTTP request?
//An HTTP request is a request from a client to a server which follows the HTTP protocol (eg a request for HTML from news.google.com)
    
//7. What is an HTTP response?
//An HTTP response is a response from a server to a client which follows the HTTP protocol (eg sending back HTML/CSS/JS/etc)
    
//8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
// Headers provide additional information about the request or the response. Here are some examples:
// Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
// Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control
//
//9. What happens when you type a URL in a browser?
//     1. Your browser “resolves” the name into an IP address using DNS
//     2. Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
//     3. The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
//     4. The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
//     5. The browser makes separate HTTP requests for those resources and receives response from the server for each