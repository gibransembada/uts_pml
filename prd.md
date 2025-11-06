## Product Requirements Document (PRD) - StockFlow: Aplikasi Manajemen Stok Bahan Coffeeshop

**Versi:** 1.0
**Tanggal:** 26 Oktober 2023
**Disusun Oleh:** [Nama Anda/Tim]

---

### 1. Pendahuluan

Dokumen ini menjelaskan persyaratan fungsional dan non-fungsional untuk "StockFlow", sebuah aplikasi mobile (Android & iOS) yang dirancang untuk membantu coffeeshop atau restoran kecil dalam mengelola stok bahan baku secara efisien. Aplikasi ini bertujuan untuk menyederhanakan proses pencatatan stok masuk dan keluar, memberikan visibilitas real-time terhadap inventaris, dan mencegah kekurangan stok yang dapat mengganggu operasional.

### 2. Tujuan Proyek

*   Menyediakan platform yang *simple*, ringan, dan mudah digunakan untuk manajemen stok bahan baku.
*   Mencegah *stock-out* dan *overstock* melalui pencatatan yang akurat dan peringatan otomatis.
*   Meningkatkan efisiensi operasional dapur dan bar dengan mempermudah pencatatan penggunaan bahan.
*   Mengurangi pemborosan bahan dan membantu dalam pengambilan keputusan pembelian.

### 3. Lingkup Produk (Scope)

**Produk Ini Akan:**

*   Memungkinkan pencatatan bahan baku baru beserta detailnya.
*   Mencatat bahan masuk dari supplier.
*   Mencatat bahan keluar (penggunaan) oleh kitchen dan bar.
*   Memberikan ringkasan stok saat ini.
*   Memberikan peringatan jika stok mencapai batas minimum.

**Produk Ini Tidak Akan (untuk versi awal):**

*   Mengelola resep produk jadi dan menghitung mundur bahan baku secara otomatis.
*   Mengintegrasikan dengan sistem POS (Point of Sale) eksternal.
*   Mengelola *multi-location* atau gudang terpisah.
*   Fitur *multi-user* dengan peran yang kompleks (hanya admin dan staf dasar).
*   Manajemen *supplier* atau *order pembelian* yang detail.

### 4. Target Pengguna

*   **Admin/Pemilik Coffeeshop/Restoran:** Bertanggung jawab untuk *setup* bahan, pencatatan bahan masuk, dan melihat laporan keseluruhan.
*   **Staf Kitchen/Bar:** Bertanggung jawab untuk mencatat penggunaan bahan harian.

### 5. Fitur Fungsional

#### 5.1. Autentikasi Pengguna (Login/Logout)

*   **F.1.1:** Pengguna dapat masuk ke aplikasi dengan *username* dan *password*.
*   **F.1.2:** Pengguna dapat keluar dari aplikasi.
*   **F.1.3:** Admin dapat menambahkan/mengelola akun staf (opsional untuk versi 1, bisa diatur secara *hardcoded* di awal atau melalui *setup* admin).

#### 5.2. Manajemen Master Bahan

*   **F.2.1:** Admin dapat menambah bahan baku baru dengan detail:
    *   Nama Bahan (contoh: "Biji Kopi Arabika", "Susu Full Cream")
    *   Kategori (contoh: "Bahan Kopi", "Susu", "Sirup")
    *   Satuan Ukur (contoh: "kg", "gram", "liter", "ml", "pcs", "botol")
    *   Stok Minimum (ambang batas peringatan, contoh: "2 kg", "5 liter")
*   **F.2.2:** Admin dapat mengedit detail bahan yang sudah ada.
*   **F.2.3:** Admin dapat menghapus bahan (dengan validasi jika ada riwayat transaksi).
*   **F.2.4:** Admin dapat melihat daftar semua bahan yang terdaftar.

#### 5.3. Manajemen Stok Masuk (Supplier)

*   **F.3.1:** Pengguna (Admin) dapat mencatat penerimaan bahan dari supplier.
*   **F.3.2:** Input data yang diperlukan:
    *   Pilih Bahan (dari daftar Master Bahan)
    *   Jumlah Masuk (sesuai Satuan Ukur)
    *   Tanggal Masuk (otomatis default tanggal hari ini)
*   **F.3.3:** Stok total bahan yang dipilih akan otomatis bertambah sesuai jumlah yang dicatat.

#### 5.4. Manajemen Stok Keluar (Penggunaan Kitchen/Bar)

*   **F.4.1:** Pengguna (Staf Kitchen/Bar atau Admin) dapat mencatat penggunaan bahan.
*   **F.4.2:** Input data yang diperlukan:
    *   Pilih Bahan (dari daftar Master Bahan)
    *   Jumlah Keluar (sesuai Satuan Ukur)
    *   Tanggal Penggunaan (otomatis default tanggal hari ini)
    *   Keterangan (opsional, contoh: "Penggunaan Bar", "Pembuatan Roti")
*   **F.4.3:** Stok total bahan yang dipilih akan otomatis berkurang sesuai jumlah yang dicatat.
*   **F.4.4:** Sistem akan memvalidasi agar jumlah keluar tidak melebihi stok yang tersedia.

#### 5.5. Dashboard & Laporan Ringkas

*   **F.5.1:** Halaman *dashboard* akan menampilkan ringkasan stok:
    *   Jumlah Stok Tersedia untuk setiap bahan.
    *   Daftar "Bahan Kritis" (mendekati atau di bawah Stok Minimum).
    *   Pintasan cepat untuk "Pencatatan Bahan Masuk" dan "Pencatatan Bahan Keluar". 
