function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        // Update the minimum buying price
        minPrice = Math.min(minPrice, prices[i]);

        // Profit if we sell today
        const profit = prices[i] - minPrice;

        // Update the maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}