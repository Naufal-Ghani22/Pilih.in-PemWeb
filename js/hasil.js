    const ctx = document.getElementById('radarChart').getContext('2d');

        // Konfigurasi Grafik Radar
        const radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Logika & Analisa', 'Kreativitas', 'Komunikasi', 'Manajerial Bisnis', 'Teknis / Koding'],
                datasets: [{
                    label: 'Skor Potensi',
                    data: [90, 80, 70, 85, 88], // Data dummy hasil tes
                    backgroundColor: 'rgba(109, 87, 248, 0.2)', // Warna primary transparan
                    borderColor: '#6d57f8', // Warna primary (#6d57f8)
                    pointBackgroundColor: '#c1b7ff', // Warna secondary
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#6d57f8',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0,0,0,0.1)' },
                        grid: { color: 'rgba(0,0,0,0.1)' },
                        pointLabels: {
                            font: { family: "'Inter', sans-serif", size: 12, weight: '600' },
                            color: '#475569' // text-slate-600
                        },
                        ticks: { display: false, min: 0, max: 100 } // Sembunyikan angka skala agar lebih bersih
                    }
                },
                plugins: {
                    legend: { display: false } // Sembunyikan label legend di atas
                }
            }
        });