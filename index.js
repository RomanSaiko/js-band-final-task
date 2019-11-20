alert('Please check console');

function getTrucktruckIdCallback(callback) {
    setTimeout(() => {
        callback([1,2,5,9,67]);
}, 1000)
}

function getTrucktruckId() {
    return new Promise((resolve => {
        getTrucktruckIdCallback(result => resolve(result));
}));
}

function getTruckByIdCallback(id, callback) {
    setTimeout(() => {
        const isError = Math.ceil(Math.random()*1000) < 100;
    if (isError) {
        return callback(undefined, "Internal error");
    }
    callback({
        id: id,
        model: `truck ${id}`
    });
})
}

function getTruckById(id) {
    //Please implemented this method use getTruckByIdCallback
    return new Promise((resolve, reject) => {
        getTruckByIdCallback(id, (result, err) => {
        if (err) reject(err);
        else resolve(result);
    });
});
}

// callback(list, err)
// list - list of trucks
function getTruckListCallback(callback) {
    getTrucktruckId()
        .then(res => {
        const truckList = [];
        Object.keys(res).map(key => getTruckById(res[key], 3).then(res => truckList.push(res)));
        return truckList;
    })
    .then(truckList => callback(truckList))
}

getTruckListCallback(function (truckList) {
    console.log(truckList);
});
// callback

//Promise
function getTruckListPromise() {
    return new Promise(((resolve, reject) => {
        getTrucktruckId()
            .then(res => {
                const truckList = [];
                Object.keys(res).map(key => getTruckById(res[key], 3).then(res => truckList.push(res)));
                return truckList;
            })
            .then(truckList => resolve(truckList))
    }))
}

getTruckListPromise().then(res => console.log(res));
//Promise

//async-await
async function getTruckListAsynAwait() {
    const truckId = await getTrucktruckId();
    const truckList = [];
    Object.keys(truckId).map(async (key) => {
        const truckItem = await getTruckById(truckId[key], 3);
        truckList.push(truckItem);
    });
    return truckList;
}

getTruckListAsynAwait().then(res => console.log(res));
//async-await
