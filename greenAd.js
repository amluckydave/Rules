$done({
    body: $request.body.replace(/(?<=advertisingList"\:\[)(.*)(?=\])/, "")
})
