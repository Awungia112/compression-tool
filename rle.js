function compressRLE(input) {
    const output = [];
    for (let i = 0; i < input.length; ) {
        let count = 1;
        while (i + count < input.length && input[i] === input[i + count] && count < 255) {
            count++;
        }
        output.push(input[i]);
        output.push(count);
        i += count;
    }
    return Buffer.from(output);
}

function decompressRLE(input) {
    const output = [];
    for (let i = 0; i < input.length; i += 2) {
        const byte = input[i];
        const count = input[i + 1];
        output.push(...Array(count).fill(byte));
    }
    return Buffer.from(output);
}

module.exports = { compressRLE, decompressRLE };
