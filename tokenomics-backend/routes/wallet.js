// Crossmint's API key  
const apiKey = "sk_staging_5ZU9Eu8a2txLArqr2Dt4uUeT8V4R5doqHgGSuxnyYThfkd6DXDqDi7Cq9PTAwWKB5QbTZkcRYiDYd15jgKM5wEPCVJvv6tyjAAXm5U3jAr1kWC1rYtLHwZrJBKuV7YAm1u9HeqD7Sfbo8y5G4KEiBr6zELoopPtQdgL1Himy6Gs8p8mpwtHkobwg7TMbS5ru7eDE1QBiSMXfGnCxohvVB4CX";

async function createWallet(apiKey) {
    const response = await fetch("https://staging.crossmint.com/api/v1-alpha2/wallets", {
        method: "POST",
        headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: "solana-mpc-wallet",
            linkedUser: "email:arthur-weasley@ministryofmagic.com"
        })
    });
    
    return await response.json();
}