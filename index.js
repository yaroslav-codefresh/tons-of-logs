async function printLog(time) {
    for (let i = 0; i < 1000; i++) {
        console.log('aaa'.repeat(100) + `_${time}_log_${i}`)
    }
}

async function printError(time) {
    for (let i = 0; i < 1000; i++) {
        console.error('bbb'.repeat(100) + `_${time}_error_${i}`)
    }
}

for (let i = 0; i < 100; i++) {
    printLog(i);
    printError(i);
}
