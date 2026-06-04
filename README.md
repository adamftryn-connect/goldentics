# Goldentics
Capstone Project — Coding Camp DBS Foundation 2026.

## Deskripsi Proyek

**Goldentics** adalah platform web untuk analisis dan prediksi harga emas berbasis data historis dan model AI. Aplikasi ini membantu investor memantau tren harga, menghitung nilai emas dalam rupiah, serta mendapatkan prediksi harga emas 7 hari ke depan beserta rekomendasi.

#### Fitur:

- **Beranda** — ringkasan pasar dan edukasi emas
- **Grafik** — visualisasi & tabel histori harga (7 hari – 1 tahun)
- **Kalkulator** — kalkulator konversi emas ↔ rupiah
- **Prediksi** — prediksi AI 7 hari (riwayat tersimpan jika login)
- **Tentang** — informasi proyek & tim
- **Login / Register** — autentikasi JWT

**Tech stack:** React 18 · Vite · React · Axios · Node.js · Express · PostgreSQL · Hugging Face Space (AI Model) · Vercel (frontend) · Railway (backend & database)

---

## Petunjuk Setup Environment

### Prasyarat

- **Node.js** 18 atau lebih baru
- **PostgreSQL** (lokal atau hosted, mis. Railway)
- **Git**

### 1. Clone & install dependensi

```bash
git clone <sesuaikan-dengan-url-repository>
cd goldentics-app
npm run install:all
```

### 2. Backend — file environment

```bash
cd backend
```

**Windows:**

```bash
copy .env.example .env
```

Edit `backend/.env` dan isi minimal:

| Variable | Keterangan |
|----------|------------|
| `DATABASE_URL` | Koneksi PostgreSQL, contoh: `postgresql://postgres:PASSWORD@localhost:5432/goldentics_db` |
| `JWT_SECRET` | Secret acak minimal 16 karakter |
| `JWT_EXPIRES_IN` | Opsional, default `7d` |
| `HUGGING_FACE_API_URL` | URL endpoint prediksi (lihat bagian **Tautan Model ML**) |

Contoh lengkap: [`backend/.env.example`](backend/.env.example)

### 3. Database

Masih di folder `backend`:

```bash
npm run db:setup
```

Perintah ini menjalankan migrasi tabel (`users`, `gold_prices`, `predictions`) dan mengimpor data dari `backend/data/gold_historis.csv`.

Perintah terpisah jika diperlukan:

```bash
npm run db:migrate      # migrasi saja
npm run db:import-gold  # import CSV saja
```


## Tautan Model ML

Model prediksi harga emas di-host sebagai **Hugging Face Space** (bukan di-download manual ke mesin lokal untuk menjalankan MVP).

| Item | URL / keterangan |
|------|------------------|
| **Hugging Face Space** | https://denizzf-goldentics.hf.space |
| **Endpoint prediksi (API)** | `https://denizzf-goldentics.hf.space/predict` |

Nilai endpoint diset di `backend/.env`:

```env
HUGGING_FACE_API_URL=https://denizzf-goldentics.hf.space/predict
```

### Cara backend memanggil model

1. User meminta prediksi dari halaman **Prediksi** → frontend memanggil `POST /api/predict` ke backend Express.
2. Backend (`predict.service.js`) menyiapkan payload data harga historis.
3. Jika `HUGGING_FACE_API_URL` terisi, backend memanggil Hugging Face lewat [`backend/src/services/huggingface.service.js`](backend/src/services/huggingface.service.js):
   - URL ber-domain `.hf.space` → request **GET** ke URL tersebut
   - URL lain → request **POST** dengan body JSON payload
4. Respons model diproses dan dikembalikan ke frontend; jika user login, hasil bisa disimpan ke PostgreSQL (`predictions`).

---

## Cara Menjalankan Aplikasi

### Development (lokal)

**Terminal 1 — Backend:**

```bash
cd backend
npm run dev
```

Cek: http://localhost:5000/health

**Terminal 2 — Frontend:**

```bash
cd frontend
npm run dev
```

Buka: http://localhost:5173

> Backend dan frontend **wajib** berjalan bersamaan.

### Production (ringkas)

- **Frontend:** deploy build Vite ke **Vercel**, set `VITE_API_BASE_URL` ke URL API Railway.
- **Backend + PostgreSQL:** deploy ke **Railway**, set semua variabel di `backend/.env.example`.
- **Model ML:** tetap di **Hugging Face Space**; backend production memanggil URL yang sama via `HUGGING_FACE_API_URL`.

---

## Referensi

### Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Beranda |
| `/grafik` | Grafik & histori harga |
| `/kalkulator` | Kalkulator emas |
| `/prediksi` | Prediksi AI |
| `/tentang` | Tentang proyek |
| `/login`, `/register` | Autentikasi |


---
Harapan kami aplikasi **Goldentics** dapat membantu Anda dalam berinventasi emas untuk masa depan.