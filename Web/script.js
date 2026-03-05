// Data Kuis (Bisa Anda tambah atau ubah)
const quizData = {
    question: "Manakah planet yang dikenal sebagai 'Planet Merah'?",
    options: ["Venus", "Mars", "Jupiter", "Saturnus"],
    correctAnswer: 1 // Indeks Mars (0=Venus, 1=Mars, dst)
};

let selectedIndex = null;

// Ambil elemen DOM
const questionEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback-message');

// Fungsi menampilkan kuis
function initQuiz() {
    questionEl.innerText = quizData.question;
    
    quizData.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.classList.add('option-item');
        div.innerText = option;
        div.onclick = () => selectOption(index, div);
        optionsContainer.appendChild(div);
    });
}

// Fungsi memilih jawaban
function selectOption(index, element) {
    // Reset pilihan sebelumnya
    const items = document.querySelectorAll('.option-item');
    items.forEach(item => item.classList.remove('selected'));
    
    // Set pilihan baru
    element.classList.add('selected');
    selectedIndex = index;
}

// Fungsi cek jawaban
submitBtn.addEventListener('click', () => {
    if (selectedIndex === null) {
        alert("Silakan pilih satu jawaban!");
        return;
    }

    if (selectedIndex === quizData.correctAnswer) {
        feedbackEl.innerText = "✨ Luar biasa! Jawaban Anda tepat.";
        feedbackEl.style.color = "var(--success)";
    } else {
        feedbackEl.innerText = "❌ Kurang tepat. Coba baca kembali slide materi.";
        feedbackEl.style.color = "var(--error)";
    }
});

// Jalankan kuis saat halaman siap
initQuiz();