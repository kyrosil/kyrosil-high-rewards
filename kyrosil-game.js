
let currentLevel = 0;
const totalLevels = 25;

function nextLevel() {
    currentLevel++;
    console.log("Level:", currentLevel);
    if (currentLevel === 10) showReward("🎉 Congratulations! You've won a $20 Starbucks Mobile Balance.", "KYR-20STAR");
    if (currentLevel === 20) showReward("🎉 Congratulations! You've won a €40 Trendyol Gift Voucher.", "KYR-40TRY");
}

function showReward(message, rewardId) {
    const div = document.getElementById("rewardPopup");
    div.innerHTML = `<p>${message}</p>
        <p>📩 Take a screenshot and email it to <b>giveaways@kyrosil.eu</b></p>
        <p><strong>Reward ID:</strong> ${rewardId}</p>
        <a href='mailto:giveaways@kyrosil.eu?subject=Kyrosil Reward&body=Reward ID: ${rewardId}'>
            <button>Send Email</button>
        </a>`;
    div.style.display = "block";
}

setInterval(() => {
    if (currentLevel < totalLevels) nextLevel();
}, 2000);
