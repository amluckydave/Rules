let obj = JSON.parse($response.body);
delete obj.responseData.advertisingList
$done({body: JSON.stringify(obj)});
