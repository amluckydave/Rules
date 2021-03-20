let obj = JSON.parse($response.body);
var elem = obj.responseData;
console.log(JSON.stringify(elem));

// let obj = JSON.parse($response.body);
// obj.responseData.advertisingList = [];
// $done({body: JSON.stringify(obj)});

//-----two solutions------
// $done({ 
// body: $request.body
// .replace(/(?<=advertisingList"\:)(.*)\]/,'[]')
// })
