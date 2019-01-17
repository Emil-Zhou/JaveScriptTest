onmessage = function (e) {
    var uInt8Array1 = new Float64Array(1024 * 1024 * 32); // 32MB
    for (var i = 0; i < uInt8Array1.length; ++i) {
        uInt8Array1[i] = i * 100000 + i * 10000 + i * 1000 + i * 100 + i * 0.000001;
    }
    var uInt8Array2 = new Float64Array(1024 * 1024 * 32); // 32MB
    for (var i = 0; i < uInt8Array2.length; ++i) {
        uInt8Array2[i] = i * 100000 + i * 10000 + i * 1000 + i * 100 + i * 0.000001;
    }
    var now = Date.now();
    var data = {
        array1: uInt8Array1.buffer,
        array2: uInt8Array2.buffer,
        date: now
    }



    // // <1ms
    postMessage(data, [uInt8Array1.buffer, uInt8Array2.buffer]);

    // // >100ms
    // postMessage(data);

    // // >100ms
    // postMessage(uInt8Array.buffer);

    // // <1ms
    // postMessage(uInt8Array.buffer, [uInt8Array.buffer,]);
}
