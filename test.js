fetch("https://api.hypixel.net/key?key=f5fd486c-8127-4f38-9204-a3a9d02ca7b6")
    .then(result => result.json())
    .then(({ record }) => {
        // Log the owner's player UUID
        console.log(record.ownerUuid)
        print(record)
    })
