function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // Check if the enteredCode matches the correctCode and the current date is before the expiration date
    if (enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)) {
        return true;
    }
    return false;
    }