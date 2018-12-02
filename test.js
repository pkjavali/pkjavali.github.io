var request = new XMLHttpRequest();

request.onreadystatechange = function(){
if(this.readyState==4 && this.status == 200){
var jsresponse = JSON.parse(request.responseText);
console.log(jsresponse.lp1);
document.getElementById('s1').innerHTML = "name";
document.getElementById('val1').innerHTML = "Val";
}
}
request.open('GET', 'https://console.thethingsnetwork.org/applications/kerlink-test-app-01/integrations/http-ttn/kerlink-httptest-01',true);

request.send();
