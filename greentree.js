console.log($response.body);

// let obj = JSON.parse($response.body);
// obj.responseData.advertisingList = [];
// $done({body: JSON.stringify(obj)});

//-----two solutions------
// $done({ 
// body: $request.body
// .replace(/(?<=advertisingList"\:)(.*)\]/,'[]')
// })
