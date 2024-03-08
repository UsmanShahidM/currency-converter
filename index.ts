import * as readline from 'readline';

// Exchange rates (as of March 2024)
const exchangeRates: { [key: string]: number } = {
    USD: 1,     // Base currency (US Dollar)
    EUR: 0.89,  // Euro
    GBP: 0.76,  // British Pound
    JPY: 110.27 // Japanese Yen
};

// Function to convert currency
function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    const amountInUSD = amount / exchangeRates[fromCurrency];
    return amountInUSD * exchangeRates[toCurrency];
}

// Function to display currency conversion result
function displayResult(amount: number, fromCurrency: string, toCurrency: string, convertedAmount: number): void {
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function
function main(): void 
{
    rl.question('Enter the amount of money: ', (amountInput: string) => 
        {
        const amount = parseFloat(amountInput);
        rl.question('Enter the currency to convert from (e.g., USD, EUR, GBP, JPY): ', (fromCurrency: string) => 
            {
            rl.question('Enter the currency to convert to (e.g., USD, EUR, GBP, JPY): ', (toCurrency: string) => 
                {
                if (isNaN(amount) || !exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) 
                {
                    console.log('Invalid input. Please enter valid amount and currencies.');
                } 
                else 
                {
                    const convertedAmount = convertCurrency(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
                    displayResult(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase(), convertedAmount);
                }
                rl.close();
            });
        });
    });
}

// Call the main function
main();
