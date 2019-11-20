alert('Please check console');

function getTruckIdsCallback(callback) {
    setTimeout(() => {
        callback([1,2,5,9,67]);
}, 1000)
}

function getTruckIds() {
    return new Promise((resolve => {
        getTruckIdsCallback(result => resolve(result));
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

function getTruckById() {
    //Please implemented this method use getTruckByIdCallback

}

// callback(list, err)
// list - list of trucks
function getTruckListCallback(callback) {

}

function getTruckListPromise() {
    return new Promise(((resolve, reject) => {

    }))
}

async function getTruckListAsynAwait() {

}
