function maxProfit(prices: number[]): number {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {

            // Buy on day i and sell on day j
            const profit = prices[j] - prices[i];

            // Update the maximum profit
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}