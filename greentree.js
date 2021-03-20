// let obj = JSON.parse($response.body);
// obj.responseData.advertisingList = [];
// $done({body: JSON.stringify(obj)});

// 两种方案
$done({ 
body: $response.body.replace(/(?<=advertisingList"\:)(.*)\]/, "[]")
})
