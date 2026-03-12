const questions = [
            { id: 1, text: "Saya lebih suka memecahkan masalah logika dan angka dibandingkan menulis cerita kreatif." },
            { id: 2, text: "Saya sangat memperhatikan nilai estetika, warna, dan tata letak dalam sebuah aplikasi." },
            { id: 3, text: "Saya suka memimpin tim dan merencanakan strategi untuk mencapai target." },
            { id: 4, text: "Saya tertarik mempelajari bagaimana sebuah mesin atau perangkat lunak bekerja di balik layar." },
            { id: 5, text: "Saya lebih suka bekerja dalam lingkungan yang terstruktur dengan aturan yang jelas." }
        ];

        // Skala Likert standar
        const likertOptions = [
            { label: "Sangat Setuju", value: 5 },
            { label: "Setuju", value: 4 },
            { label: "Netral", value: 3 },
            { label: "Tidak Setuju", value: 2 },
            { label: "Sangat Tidak Setuju", value: 1 }
        ];

        // 2. Variabel State (Penyimpan Kondisi)
        let currentIndex = 0;
        let userAnswers = {}; // Menyimpan jawaban (misal: {0: 5, 1: 4})

        // 3. Fungsi Utama
        function mulaiTes() {
            document.getElementById('intro-section').classList.add('hidden');
            document.getElementById('quiz-section').classList.remove('hidden');
            renderSoal();
        }

        function renderSoal() {
            const q = questions[currentIndex];
            document.getElementById('question-text').innerText = q.text;

            // Render Opsi Jawaban
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = ''; // Kosongkan dulu

            likertOptions.forEach(opt => {
                const isSelected = userAnswers[currentIndex] === opt.value;
                
                // Styling tombol opsi (berubah warna kalau dipilih)
                const btnClass = isSelected 
                    ? 'w-full text-left p-4 rounded-xl border-2 border-primary bg-secondary/10 text-primary font-bold transition'
                    : 'w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-primary/50 hover:bg-slate-50 text-slate-600 font-medium transition';

                const btn = document.createElement('button');
                btn.className = btnClass;
                btn.innerText = opt.label;
                btn.onclick = () => pilihOpsi(opt.value);
                optionsContainer.appendChild(btn);
            });

            updateUI();
        }

        function pilihOpsi(value) {
            userAnswers[currentIndex] = value; // Simpan jawaban
            renderSoal(); // Render ulang agar warna tombol berubah
        }

        function updateUI() {
            // Update Progress Bar
            const progressPercent = ((currentIndex) / questions.length) * 100;
            document.getElementById('progress-bar').style.width = progressPercent + '%';
            document.getElementById('progress-percentage').innerText = Math.round(progressPercent) + '%';
            document.getElementById('progress-text').innerText = `Pertanyaan ${currentIndex + 1} dari ${questions.length}`;

            // Atur Tombol "Sebelumnya"
            const btnPrev = document.getElementById('btn-prev');
            if (currentIndex > 0) btnPrev.classList.remove('hidden');
            else btnPrev.classList.add('hidden');

            // Cek apakah user sudah menjawab soal ini
            const hasAnswered = userAnswers[currentIndex] !== undefined;

            const btnNext = document.getElementById('btn-next');
            const btnSubmit = document.getElementById('btn-submit');

            // Atur Tombol "Selanjutnya" atau "Lihat Hasil"
            if (currentIndex === questions.length - 1) {
                btnNext.classList.add('hidden');
                btnSubmit.classList.remove('hidden');
                
                // Disable/Enable Submit Button
                if (hasAnswered) {
                    btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
                }
            } else {
                btnSubmit.classList.add('hidden');
                btnNext.classList.remove('hidden');

                // Disable/Enable Next Button
                if (hasAnswered) {
                    btnNext.classList.remove('bg-slate-200', 'text-slate-500', 'cursor-not-allowed');
                    btnNext.classList.add('bg-primary', 'text-white', 'hover:shadow-lg');
                    btnNext.disabled = false;
                } else {
                    btnNext.classList.add('bg-slate-200', 'text-slate-500', 'cursor-not-allowed');
                    btnNext.classList.remove('bg-primary', 'text-white', 'hover:shadow-lg');
                    btnNext.disabled = true;
                }
            }
        }

        function soalSelanjutnya() {
            if (userAnswers[currentIndex] !== undefined && currentIndex < questions.length - 1) {
                currentIndex++;
                renderSoal();
            }
        }

        function soalSebelumnya() {
            if (currentIndex > 0) {
                currentIndex--;
                renderSoal();
            }
        }

        // KODE BARU DI tes.js
        function selesaiTes() {
            if (userAnswers[currentIndex] !== undefined) {
                document.getElementById('progress-bar').style.width = '100%';
                document.getElementById('progress-percentage').innerText = '100%';
                
                // Simpan data jawaban ke memori browser sebelum pindah
                localStorage.setItem('hasilTesPilihin', JSON.stringify(userAnswers));
                
                alert("Tes Selesai! Mengarahkan ke halaman Hasil Rekomendasi...");
                window.location.href = "hasil.html"; // Tanda // dihapus agar kodenya aktif
            }
        }