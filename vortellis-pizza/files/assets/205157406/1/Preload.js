window.forceChristmas = localStorage.getItem('vortellis:forceChristmas') === 'true';

function isLocalStorageAvailable() {
    try {
        // Test localStorage functionality
        const testKey = '__test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

window.forceChristmas = isLocalStorageAvailable()
    ? localStorage.getItem('vortellis:forceChristmas') === 'true'
    : false;

window.isChristmas = function () {
    if (window.forceChristmas) {
        return true; // Force Christmas mode if enabled
    }

    var today = new Date();
    var month = today.getMonth(); // 11 for December
    var day = today.getDate(); // Day of the month

    // Check if it's December 5th to December 31st, or January 1st to January 2nd
    if ((month === 11 && day >= 5) || (month === 0 && day <= 2)) {
        return true;
    }
};