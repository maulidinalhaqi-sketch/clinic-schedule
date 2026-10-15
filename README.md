# Dentist Fulfillment Executive Dashboard (Demo)

Dashboard statis untuk GitHub Pages, dengan data simulasi/fiktif untuk 10 klinik.

## File
- `index.html` — antarmuka dashboard, filter, ringkasan, dan jadwal.
- `data.js` — data demo klinik, dokter, dental unit, dan jadwal.
- `README.md` — panduan deployment.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `dentist-fulfillment-dashboard`.
2. Upload ketiga file ini ke root repository (bukan ke dalam folder lain).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Branch pilih `main`, folder pilih `/(root)`, lalu klik **Save**.
6. Tunggu proses deployment selesai. URL akan tampil di bagian GitHub Pages.

## Catatan
- Ini adalah versi demo statis. Data tidak berasal dari Google Sheets atau Apps Script.
- Seluruh data di `data.js` adalah contoh fiktif dan bisa diganti sesuai kebutuhan.
- Untuk mengubah daftar klinik, edit `CLINIC_NAMES` di `data.js`. Jadwal akan dibuat dari daftar tersebut secara otomatis.
