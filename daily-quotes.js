// My Document Object Model
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const alertModal = document.getElementById('alertModal');
    const closeAlertBtn = document.getElementById('closeAlertBtn');
    const quoteBtn = document.getElementById('quoteBtn');
    const quoteSection = document.getElementById('quoteSection');
    const contentWrapper = document.getElementById('contentWrapper');
    const quoteTexts = [
        "As you step into today, know that my healing power is at work in you. Your body will be made whole, and your spirit renewed. Psalm 103:2-3",
        "Today, I will restore your health and heal your wounds, declares the Lord. Embrace my healing touch and be renewed in every way. Jeremiah 30:17",
        "This very day, I will mend your brokenness and restore your vitality. Trust in my promise of restoration and experience my complete healing. Isaiah 53:5",
        "Today, receive my divine healing. I am bringing you restoration and strength, and you shall walk in my fullness of health. Exodus 15:26",
        "In your times of weakness today, I am your healer. I will restore your health and grant you peace in your soul and body. James 5:15",
        "Be assured that today my healing power is at work in you. I am restoring every part of your being and renewing your strength. Proverbs 4:20-22",
        "As you trust in me today, my healing will flow through you. I am restoring your health and renewing your spirit with my grace. 2 Chronicles 7:14",
        "I declare health and restoration over your life today. My healing is complete, and my promises are true for you now. Psalm 147:3",
        "You are restored by my mighty hand today. I am bringing health to your body and peace to your soul. Believe in my healing touch. Matthew 9:22",
        "Today, I will rejuvenate your health and renew your strength. My healing power is available to you now and always. Isaiah 41:10"
 ];

    // Hide the content while loading
    contentWrapper.style.display = 'none';

    setTimeout(() => {
        loader.style.display = 'none'; // Hide the loader
        contentWrapper.style.display = 'block'; // shows the content again
        alertModal.style.display = 'flex'; // displays the alert
        contentWrapper.classList.add('blur'); // makes the content of the page blur while alert is on
    }, 3000); // Keep loader for 3 seconds

    // Close the alert modal when the OK button is clicked
    closeAlertBtn.addEventListener('click', () => {
        alertModal.style.display = 'none'; // Hide the alert modal
        contentWrapper.classList.remove('blur'); // Remove blur effect from content
    });

    // Display a random quote when the button is clicked
    quoteBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quoteTexts.length); // Get a random index
        const selectedQuote = quoteTexts[randomIndex]; // Select the quote based on the random index
        quoteSection.textContent = selectedQuote; // Display the selected quote
        quoteSection.style.display = 'flex'; // Show the quote section

        // Set the background image based on the random index
        const backgroundImageUrl = `url('images/background2_${randomIndex + 1}.jpeg')`;
        console.log('Background image URL:', backgroundImageUrl); // Log the background image URL
        quoteSection.style.backgroundImage = backgroundImageUrl;

        quoteBtn.disabled = true; // Disable the button to prevent multiple clicks in a day
        quoteBtn.style.display = 'none'; // makes the button to disappear after click
    });
});
