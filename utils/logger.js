function log(message, data) {
    console.log(`[LOG]: ${message}`);
    
    if (data) {
    console.log(JSON.stringify(data, null, 2));
    }
    }
    
    module.exports = { log };