let obj = JSON.parse($response.body);
obj.responseData.advertisingList = [];
body = JSON.stringify(obj);
console.log(body);
$done({body});
