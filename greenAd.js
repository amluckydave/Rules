var body = $response.body;
console.log(body);

$done(body);


// $done({
//     body: $request.body.replace(/(?<=advertisingList"\:\[)(.*)(?=\])/, "")
// })
