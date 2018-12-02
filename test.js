

var xdrequest = new XDomainRequest();

xdrequest.onload = function(){

var jsresponse = JSON.parse(request.responseText);
console.log(jsresponse.lp1);
document.getElementById('s1').innerHTML = "name";
document.getElementById('val1').innerHTML = "Val";

}
xdrequest.open('GET', 'https://console.thethingsnetwork.org/applications/kerlink-test-app-01/integrations/http-ttn/kerlink-httptest-01',true);

xdrequest.send();
