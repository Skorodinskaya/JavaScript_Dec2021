setTimeout(() => {
    console.log('Wake up and check the phone')
    setTimeout(() => {
        console.log('Brush teeth, wash face and get dressed')
        setTimeout(() => {
            console.log('Have breakfast')
            setTimeout(() => {
                console.log('Tidy up')
                setTimeout(() => {
                    console.log('Do shopping')
                    setTimeout(() => {
                        console.log('Study time!')
                        setTimeout(() => {
                            console.log('Watch series')
                            setTimeout(() => {
                                console.log('Go to bed')
                            }, 4500);
                        }, 4000);
                    }, 3500);
                }, 3000);
            }, 2500);
        }, 2000);
    }, 1500);
}, 1000);

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('I woke up');
        resolve()
    }, 1000)
})
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I brushed teeth, washed face and got dressed')
                resolve()
            }, 1500)
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I had breakfast')
                resolve()
            }, 1500)
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I tided up')
                resolve()
            }, 2000)
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I did shopping')
                resolve()
            }, 2500)
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I had a lecture')
                resolve()
            }, 3000)
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I watched series')
                resolve()
            }, 3500)
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I went to bed')
                resolve()
            }, 4000)
        })
    });



