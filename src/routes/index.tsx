import { createFileRoute, Link } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { modules, filterFaqs } from '@/lib/faq';
import logo from '@/assets/kemenag.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Pusat Bantuan EMIS Madrasah' },
    { name: 'description', content: 'Temukan jawaban seputar Akun, Lembaga, Sarana Prasarana, Siswa, GTK, dan BAP dalam pusat bantuan EMIS.' },
    { property: 'og:title', content: 'Pusat Bantuan EMIS Madrasah' },
    { property: 'og:description', content: 'Pencarian pertanyaan dan panduan pengelolaan data EMIS dalam enam modul.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Symbol({ name, className = '' }: { name: string; className?: string }) {
  return <span aria-hidden="true" className={`symbol ${className}`}>{name}</span>;
}

function Index() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('all');
  const [opened, setOpened] = useState('');
  const resultsRef = useRef<HTMLElement>(null);
  const results = filterFaqs(query, selected);
  const selectedModule = modules.find(m => m.id === selected);
  const displayed = selected === 'all' && !query.trim() ? results.slice(0, 5) : results;
  function reset() { setQuery(''); setSelected('all'); setOpened(''); }
  return (
    <div className="faq-page">
      <header className="page-header">
        <div className="header-inner">
          <div className="flex items-center gap-3">
            <img src="/kemenag.png" alt="Logo Kementerian Agama" className="brand-logo object-contain" />
            <div><p className="brand-name">Pusat Bantuan</p><p className="brand-caption">EMIS 4.0 MADRASAH</p></div>
          </div>
          <span className="official-badge"><Symbol name="verified" className="!text-sm" />Resmi</span>
        </div>
      </header>
      <main className="faq-main">
        <section className="faq-intro" aria-labelledby="faq-title">
          <p className="eyebrow"><Symbol name="help" className="!text-base" /> PUSAT INFORMASI & BANTUAN</p>
          <h1 id="faq-title" className="faq-title">Pertanyaan yang Sering Diajukan</h1>
          <p className="intro-description">Temukan jawaban dan panduan seputar pengelolaan data EMIS Madrasah.</p>
          <div className="search-box" role="search">
            <Symbol name="search" />
            <input aria-label="Cari FAQ" className="search-input" placeholder="Cari pertanyaan, kata kunci, atau kendala Anda…" value={query} onChange={e => { setQuery(e.target.value); setOpened(''); }} />
            {query && <Button variant="ghost" size="icon" aria-label="Hapus pencarian" onClick={() => setQuery('')}><Symbol name="close" className="!text-lg" /></Button>}
          </div>
          <p className="search-hint">Akun · Lembaga · Sarana Prasarana · Siswa · GTK · BAP</p>
        </section>
        <section ref={resultsRef} className="questions-section" aria-labelledby="questions-heading">
          <div className="section-heading">
            <h2 id="questions-heading">{query.trim() ? 'Hasil Pencarian' : selectedModule ? `FAQ ${selectedModule.name}` : 'Pertanyaan Umum'}</h2>
            <div className="flex items-center gap-3">
              <span className="section-meta" aria-live="polite">{displayed.length} pertanyaan</span>
              {(selected !== 'all' || query) && <Button variant="link" size="sm" onClick={reset}>Semua FAQ</Button>}
            </div>
          </div>
          {displayed.length ? <Accordion type="single" collapsible value={opened} onValueChange={setOpened} className="questions-list">
            {displayed.map((faq, index) => <AccordionItem value={faq.id} key={faq.id}>
              <AccordionTrigger className="faq-question"><span className="question-label"><span className="question-number">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span></span></AccordionTrigger>
              <AccordionContent className="question-answer"><span className="answer-module">{modules.find(m => m.id === faq.module)?.name}</span><p>{faq.answer}</p></AccordionContent>
            </AccordionItem>)}
          </Accordion> : <div className="empty-results"><Symbol name="search_off" /><h3>Belum ada pertanyaan yang cocok</h3><p>Coba kata kunci lain atau cari di semua modul.</p><Button variant="link" onClick={reset}>Tampilkan semua FAQ</Button></div>}
          <p className="sample-note">Contoh FAQ awal. Untuk prosedur resmi dan ketentuan terbaru, lihat dokumen panduan EMIS.</p>
        </section>
        <section className="category-section" aria-labelledby="categories-heading">
          <div className="section-heading"><h2 id="categories-heading">Kategori FAQ</h2><span className="section-meta">6 modul pendataan</span></div>
          <div className="category-grid">
            {modules.map(module => <Link key={module.id} to="/modul/$moduleId" params={{ moduleId: module.id }} className="module-card">
              <span className="module-top"><span className={`module-icon ${module.id}`}><Symbol name={module.icon} /></span><Symbol name="arrow_forward" className="module-arrow" /></span>
              <span className="module-name">{module.name}</span>
              <span className="module-description">{module.description}</span>
            </Link>)}
          </div>
        </section>
        <div className="guide-area">
          <Dialog>
            <DialogTrigger asChild><Button variant="guide"><Symbol name="auto_stories" className="!text-xl" />Lihat Panduan Dokumen Lengkap<Symbol name="arrow_outward" className="!text-base" /></Button></DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto">
              <DialogTitle>Dokumen Panduan</DialogTitle>
              <DialogDescription>Akses panduan penggunaan sistem EMIS Madrasah melalui buku manual resmi.</DialogDescription>
              <div className="guide-options">
                <Button asChild variant="outline" className="guide-option"><a href="https://drive.google.com/drive/folders/1RV4h0b2Juqzx4h_GjaXh2EjAgmXmQD_l" target="_blank" rel="noopener noreferrer"><Symbol name="picture_as_pdf" /><span>Buku Manual Lengkap<br />(Format PDF)</span></a></Button>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">Pastikan Anda menggunakan dokumen terbaru yang tersedia pada tautan panduan.</p>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <footer className="support-footer"><div className="support-inner">
        {/* <div className="support-row"><div className="support-copy"><span className="support-icon"><Symbol name="headset_mic" /></span><div><h2>Butuh bantuan lebih lanjut?</h2><p>Hubungi tim teknis untuk kendala yang belum terjawab pada FAQ.</p></div></div> */}
           {/* <Button asChild variant="guide"><a href="mailto:sisinfopontren@kemenag.go.id"><Symbol name="mail" className="!text-lg" />Kirim Email Support<Symbol name="arrow_outward" className="!text-base" /></a></Button>  */}
        {/* </div> */}
        <div className="footer-bottom"><p>© 2026 Kementerian Agama RI — Direktorat Jenderal Pendidikan Islam.</p><p>Pusat Bantuan EMIS 4.0</p></div>
      </div></footer>
    </div>
  );
}