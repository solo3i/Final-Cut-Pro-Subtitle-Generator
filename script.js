document.addEventListener('DOMContentLoaded', () => {
    const scriptFileInput = document.getElementById('scriptFile');
    const voiceFileInput = document.getElementById('voiceFile');
    const scriptFileName = document.getElementById('scriptFileName');
    const voiceFileName = document.getElementById('voiceFileName');
    const generateBtn = document.getElementById('generateBtn');
    const subtitlePreview = document.getElementById('subtitlePreview');
    const fontFamilySelect = document.getElementById('fontFamily');
    const fontSizeRange = document.getElementById('fontSize');
    const fontSizeLabel = document.getElementById('fontSizeLabel');
    const arabicColorInput = document.getElementById('arabicColor');
    const englishColorInput = document.getElementById('englishColor');

    let subtitles = [
        {
            arabic: "مرحباً بكم في هذا البرنامج",
            english: "Welcome to this program",
            start: "0:00",
            end: "0:03",
        },
        {
            arabic: "سنتحدث اليوم عن التكنولوجيا",
            english: "Today we will talk about technology",
            start: "0:04",
            end: "0:07",
        },
        {
            arabic: "وأثرها على حياتنا اليومية",
            english: "And its impact on our daily lives",
            start: "0:08",
            end: "0:11",
        }
    ];

    // Display selected file names
    scriptFileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            scriptFileName.textContent = e.target.files[0].name;
        } else {
            scriptFileName.textContent = '';
        }
    });

    voiceFileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            voiceFileName.textContent = e.target.files[0].name;
        } else {
            voiceFileName.textContent = '';
        }
    });

    // Update font size label
    fontSizeRange.addEventListener('input', (e) => {
        fontSizeLabel.textContent = e.target.value;
        updateSubtitlesStyle();
    });

    fontFamilySelect.addEventListener('change', updateSubtitlesStyle);
    arabicColorInput.addEventListener('input', updateSubtitlesStyle);
    englishColorInput.addEventListener('input', updateSubtitlesStyle);

    // Generate button click (dummy simulation)
    generateBtn.addEventListener('click', () => {
        alert('This is a demo. Real subtitle generation requires backend processing.');
        renderSubtitles();
    });

    function renderSubtitles() {
        subtitlePreview.innerHTML = '';
        subtitles.forEach(sub => {
            const container = document.createElement('div');
            container.className = 'bg-slate-900/50 p-4 rounded-lg border-l-4 mb-4';

            // Border color based on start time (example)
            if (sub.start === "0:00") container.classList.add('border-blue-400');
            else if (sub.start === "0:04") container.classList.add('border-purple-400');
            else container.classList.add('border-green-400');

            const arabicDiv = document.createElement('div');
            arabicDiv.textContent = sub.arabic;
            arabicDiv.dir = "rtl";
            arabicDiv.className = 'text-right text-lg mb-2';
            arabicDiv.style.color = arabicColorInput.value;
            arabicDiv.style.fontFamily =
