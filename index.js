async function printLog(time) {
    for (let i = 0; i < 1000; i++) {
        console.log('aaa'.repeat(100) + `_${time}_log_${i}_${new Date().toLocaleString()}`)
    }
}

async function printError(time) {
    for (let i = 0; i < 1000; i++) {
        console.error('bbb'.repeat(100) + `_${time}_error_${i}_${new Date().toLocaleString()}`)
    }
}

for (let i = 0; i < 10; i++) {
    printLog(i);
    printError(i);
}
