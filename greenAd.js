var body = $response.body;
body = body.replace(/(?<=advertisingList"\:\[)(.*)(?=\])/, "");
if (consoleLog) console.log(body);
$done({body});