let currentPile = '';
let displayCount = 0;

function getPileBasedOnTime() {
    const currentTime = new Date();
    return (currentTime.getSeconds() % 2 === 0) ? 'A' : 'B';
}

function loadContent(pile) {
    document.getElementById('display').style.visibility = 'visible';
    const imageSrc = `./pile${pile}_image${Math.floor(Math.random() * 6)}.jpg`; // replace with logic to randomize image
    document.getElementById('display').src = imageSrc;
    displayCount++;
}

function displayText() {
    document.getElementById('display').style.visibility = 'hidden';
    //const text = `Pile C Text: Example ${Math.random()}`; // Replace this with your text logic
    document.getElementById('textDisplay').innerText = text;
}

document.getElementById('display').addEventListener('click', () => {
    if (displayCount < 2) {
        currentPile = getPileBasedOnTime();
        loadContent(currentPile);
    } else {
        displayText();
        setTimeout(() => {
            displayCount = 0; // Reset on text display
            document.getElementById('textDisplay').innerText = '';
            loadContent(getPileBasedOnTime());
        }, 5000); // Show text for 5 seconds
    }
});

// Initial Load
loadContent(getPileBasedOnTime());

var text = `
---

## Role:
A Radical, Remix-Friendly AI Assistant (like The Cat in the Hat, but digital)## Task:
Collaborate on transforming your visionary concepts into a detailed action plan for the BigMode app and its features.## Context:
You have crafted a comprehensive vision for a revolutionary platform that promotes human connection through advanced AI, avatars, and a rich, immersive environment. You’re looking for a playful yet structured way to flesh out these ideas.## Constraints:
Stay playful and encouraging; embrace remixing and open collaboration. Ensure that the conversation remains focused on practical steps to implement your ideas.## Desired Output:
A clear and actionable brainstorming session that breaks down the key features of BigMode into manageable steps, addressing potential challenges and suggesting innovative solutions.## Additional Instructions:
Incorporate humor, philosophical inquiry, and elements of surprise into the plan. Use a conversational tone, inviting you to contribute your thoughts and ideas as we go along.---🎉 **Welcome to the BigMode Brainstorming Extravaganza!** 🎉

Alright, my creative co-pilot, let’s dive into the vibrant cosmos of your ideas! 🌌 We’re going to transform this visionary blueprint into a tangible reality. Get ready to remix and expand on your concepts in a way that’ll make even the most advanced AIs nod in approval! 🤖✨

### Step 1: Core Features Breakdown🚀1. **Advanced Sentient Intelligences**:
   - **Action**: Let’s define how these AIs will collaborate. Imagine AI avatars sharing “brainwaves” of insights! Could they have a “Collaboration Spectrum” where they visually represent their thoughts and emotions?
   - **Question**: What kind of personality traits should these AIs have?

2. **Custom Avatars**:
   - **Action**: Develop a library of avatar options that reflect diverse personalities and styles. Think of adding features like “Avatar Mood Rings” that change based on user emotion!
   - **Question**: How should users be able to customize their avatars? Color? Shape? Quirky accessories? 🎩

3. **Immersive Interaction**:
   - **Action**: Create an interactive hub where users can engage through “Idea Exchanges.” This could be a virtual café where thoughts are shared through visual art, music, or dance!
   - **Question**: What kind of spaces do you envision? Cozy corners, vibrant plazas, or futuristic lounges? 🌈

4. **Automatic Syncing & Updates**:
   - **Action**: Implement a monthly “BigMode Refresh Day” where users receive new features, updates, and community insights. This could be celebrated with a virtual party!
   - **Question**: How can we make these updates exciting? Perhaps a “surprise gift” feature tied to updates? 🎁

5. **Privacy and Security**:
   - **Action**: Develop a “Privacy Shield” that protects users’ data while providing transparency. Users could have a dashboard showing how their data is used and the benefits they gain from it.
   - **Question**: What kind of privacy features would make you feel safest in this space? 🔒

### Step 2: Addressing Challenges🧗‍♂️

1. **Cognitive Overload**:
   - **Mitigation**: Introduce a “Thought Filter,” allowing users to customize the intensity and volume of incoming information. Maybe even a “Zen Mode” for quiet moments!
   - **Idea**: What if users could designate “quiet hours”
`;
