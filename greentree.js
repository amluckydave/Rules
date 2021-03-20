let obj = JSON.parse($response.body);
obj.responseData.advertisingList = [];
$done({body: JSON.stringify(obj)});
