export const modules = [
  { id: 'akun', name: 'Akun', icon: 'manage_accounts', description: 'Pendaftaran, pengelolaan profil, dan keamanan akun EMIS.' },
  { id: 'lembaga', name: 'Lembaga', icon: 'account_balance', description: 'Data profil lembaga, legalitas, dan dokumen kelembagaan.' },
  { id: 'sarpras', name: 'Sarana Prasarana', icon: 'domain', description: 'Data lahan, gedung, ruangan, utilitas, dan inventaris.' },
  { id: 'siswa', name: 'Siswa', icon: 'school', description: 'Pendaftaran, rombongan belajar, mutasi, dan data siswa.' },
  { id: 'gtk', name: 'GTK', icon: 'groups', description: 'Profil guru dan tenaga kependidikan serta penugasan.' },
  { id: 'bap', name: 'BAP', icon: 'fact_check', description: 'Finalisasi data, cetak BAP, dan konfirmasi akhir semester.' },
] as const;
export type ModuleId = typeof modules[number]['id'];
export const faqs: { id: string; module: ModuleId; question: string; answer: string }[] = [
  { id: 'a1', module: 'akun', question: 'Bagaimana jika saya lupa kata sandi akun EMIS?', answer: 'Gunakan pilihan lupa kata sandi pada halaman masuk EMIS dan ikuti petunjuk pemulihan melalui email yang terdaftar. Jika email tidak lagi dapat diakses, hubungi operator atau administrator yang berwenang untuk meminta bantuan pemulihan akun.' },
  { id: 'a2', module: 'akun', question: 'Mengapa saya tidak bisa masuk ke akun EMIS?', answer: 'Periksa kembali email dan kata sandi, pastikan koneksi internet stabil, lalu coba masuk kembali. Jika kendala berlanjut, catat pesan kesalahan yang muncul dan sampaikan kepada administrator tanpa membagikan kata sandi Anda.' },
  { id: 'a3', module: 'akun', question: 'Bagaimana cara memperbarui profil akun?', answer: 'Buka pengaturan profil akun, periksa data yang perlu diperbarui, lalu simpan perubahan. Untuk informasi yang tidak dapat diubah sendiri, mintalah bantuan administrator dan siapkan dokumen pendukung yang sesuai.' },
  { id: 'l1', module: 'lembaga', question: 'Bagaimana cara mengajukan perubahan nama lembaga?', answer: 'Perubahan nama lembaga dilakukan melalui VervalSP. Harus diperhatikan saat upload foto, terutama palang nama lembaga harus terlihat jelas, karena akan memengaruhi proses persetujuan perubahannya' },
  { id: 'l2', module: 'lembaga', question: 'Mengapa kode registrasi lembaga di EMIS belum muncul?', answer: 'Kode registrasi didapat dari Pusdatin Kemendikdasmen. Ketika pengajuan NPSN nya disetujui oleh Pusdatin, maka akan otomatis mendapat kode registrasi' },
  { id: 'l3', module: 'lembaga', question: 'Mengapa akreditasi lembaga di EMIS tidak muncul?', answer: 'Cek terlebih dahulu akreditasi lembaga pada laman https://www.sekolah.data.kemendikdasmen.go.id. EMIS melakukan tarik data akreditasi dari Pusdatin Kemendikdasmen. Jika sudah tampil akreditasi di laman tersebut, EMIS akan ikut menyesuaikan' },
  { id: 'p1', module: 'sarpras', question: 'Mengapa saat pengisian kolom Jarak Ke Lokasi Tertentu (antar Madrasah) tidak bisa diisi (disable)?', answer: 'Terkait pengisian Jarak ke Lokasi Tertentu, pengisiannya dilakukan otomatis oleh sistem saat mengisikan data Alamat dan Tiitik Koordinat lembaga. Sistem akan otomatis mengkalkulasi jarak-jarak terkait berdasarkan inputan data alamat dan titik koordinat jika ada' },
  { id: 'p2', module: 'sarpras', question: 'Mengapa saat melakukan perubahan data Sarpras, data tidak berubah/kembali ke data sebelum perubahan?', answer: 'Perubahan data sarpras yang membutuhkan persetujuan, maka data perubahan baru dapat tampil setelah disetujui perubahannya oleh Kepala Madrasah. Cek pada menu Permintaan Persetujuan  untuk memeriksa perubahan data yang memerlukan persetujuan' },
  { id: 'p3', module: 'sarpras', question: 'Mengapa Ruangan tidak terdeteksi saat membuat Rombongan Belajar?', answer: 'Pastikan data ruangannya sudah disetting sebagai ruang kelas dan terisi kapasitas ruangannya' },
  { id: 's1', module: 'siswa', question: 'Bagaimana cara menginput siswa dari luar negeri?', answer: 'Proses penginputan dilakukan oleh pusat dengan tim subdit kurikulum dan evaluasi' },
  { id: 's2', module: 'siswa', question: 'Mengapa satus siswa menjadi "Tidak Teridentifikasi"? ', answer: 'Status siswa "Tidak teridentifikasi" dan terdata aktif di lembaga kondisinya ialah siswa yang tertinggal semester dikarenakan siswa tidak di proses akademik oleh lembaganya. Agar terdata di semester yang berjalan, siswa harus diproses akademik dengan cara input ke dalam rombel dan lakukan kembali proses akademiknya dengan syarat tertinggal 1 tahun ajaran' },
  { id: 's3', module: 'siswa', question: 'Bagaimana solusi untuk siswa yang tertinggal 2 (dua) tahun ajaran ?', answer: 'Bagi siswa yang tertinggal 2 tahun ajaran, agar dapat terdata di tahun ajaran yang berjalan harus dilakukan perubahan tingkatnya ke Kanwil agar tahun ajarannya update dan tampil ' },
  { id: 'g1', module: 'gtk', question: 'Bagaimana cara memperbaiki data pokok GTK?', answer: 'Perbaikan data pokok guru tidak bisa diubah di EMIS, perubahan data dapat dilakukan melalui vervalPTK. Setelah berhasil, perubahan akan mengalir datanya ke EMIS, PDUM dan Manajemen Ijazah' },
  { id: 'g2', module: 'gtk', question: 'Bagaimana proses Mutasi GTK ke lembaga umum?', answer: 'Proses mutasi cukup dengan melakukan penonaktifan GTK terkait pada menu Status dan Riwayat Kepegawaian' },
  { id: 'g3', module: 'gtk', question: 'Kenapa tidak bisa mengubah status GTK menjadi PNS/PPPK?', answer: 'Pastikan dahulu data di SIMPEG sudah berubah menjadi PNS/PPPK, jika data tidak ditemukan maka statusnya non PNS' },
  { id: 'g4', module: 'gtk', question: 'Bagaimana cara mengisi Tugas Tambahan untuk guru?', answer: 'Tugas Tambahan untuk guru mata pelajaran (mapel) atau guru kelas diisi melalui menu Rombongan Belajar. Sementara itu, untuk Tugas Tambahan yang bersifat kependidikan, pengisiannya dilakukan pada tab "Tugas Tambahan Satminkal" yang tersedia di fitur "Ubah GTK"' },
  { id: 'b1', module: 'bap', question: 'Mekanisme BAP BOS apakah memerlukan materai?', answer: 'Ya, setelah BAP BOS dicetak oleh operator harus dibubuhi materai dan tandatangan Kepala Madrasah sebelum diupload ke EMIS' },
  { id: 'b2', module: 'bap', question: 'Apakah BAP EMIS dapat dibatalkan?', answer: 'BAP EMIS dapat dibatalkan dengan menghubungi level Kankemenag Kota/Kabupaten' },
  { id: 'b3', module: 'bap', question: 'Mengapa BAP BOS tidak cair?', answer: 'Pastikan setelah mengupload BAP BOS di EMIS, klik tombol "Simpan" dan tunggu konfirmasi dari sistem' },
];
export function filterFaqs(query: string, module: string) {
  const words = query.toLocaleLowerCase('id').trim().split(/\s+/).filter(Boolean);
  return faqs.filter(item => {
    const name = modules.find(m => m.id === item.module)?.name ?? '';
    const text = `${item.question} ${item.answer} ${name}`.toLocaleLowerCase('id');
    return (module === 'all' || item.module === module) && words.every(word => text.includes(word));
  });
}
