/**
 * Client-side rate limiter using localStorage to prevent API spam.
 * 
 * @param {string} key - Unique identifier for the action/API (e.g., 'chat_api', 'contact_form')
 * @param {number} cooldownSeconds - Minimum seconds required between consecutive calls
 * @param {number} maxRequestsPerHour - Maximum allowed requests within a rolling 1-hour window
 * 
 * @returns {object} { allowed: boolean, reason: string | null }
 */
export const checkRateLimit = (key, cooldownSeconds, maxRequestsPerHour) => {
    try {
        const now = Date.now();
        const oneHourMs = 60 * 60 * 1000;

        // 1. Get history from local storage
        const storageKey = `rateLimit_${key}`;
        const historyStr = localStorage.getItem(storageKey);
        let history = historyStr ? JSON.parse(historyStr) : [];

        // 2. Clean up history older than 1 hour
        history = history.filter(timestamp => now - timestamp < oneHourMs);

        if (history.length > 0) {
            // 3. Check cooldown (time since exact last request)
            const lastRequestTime = history[history.length - 1];
            const timeSinceLastMs = now - lastRequestTime;
            const cooldownMs = cooldownSeconds * 1000;

            if (timeSinceLastMs < cooldownMs) {
                const remainingSecs = Math.ceil((cooldownMs - timeSinceLastMs) / 1000);
                return {
                    allowed: false,
                    reason: `Please wait ${remainingSecs} second${remainingSecs > 1 ? 's' : ''} before trying again.`
                };
            }

            // 4. Check hourly limit
            if (history.length >= maxRequestsPerHour) {
                // Find when the oldest request in the 1-hour block will expire
                const oldestRequest = history[0];
                const timeUntilResetMs = oneHourMs - (now - oldestRequest);
                const minutesRemaining = Math.ceil(timeUntilResetMs / (60 * 1000));

                return {
                    allowed: false,
                    reason: `You've reached the hourly limit of ${maxRequestsPerHour} requests. Please try again in ${minutesRemaining} minute${minutesRemaining > 1 ? 's' : ''}.`
                };
            }
        }

        // 5. Success! Add current timestamp and save
        history.push(now);
        localStorage.setItem(storageKey, JSON.stringify(history));

        return { allowed: true, reason: null };

    } catch (error) {
        // If localStorage is disabled or throws, fail open rather than breaking the app
        console.warn("Rate limiter encountered an error (e.g., private browsing), allowing request.", error);
        return { allowed: true, reason: null };
    }
};
