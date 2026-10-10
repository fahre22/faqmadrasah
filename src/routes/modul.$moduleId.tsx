import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { modules, faqs } from '@/lib/faq';
import logo from '@/assets/kemenag.asset.json';

export const Route = createFileRoute('/modul/$moduleId')({
  loader: ({ params }) => {
    const module = modules.find(m => m.id === params.moduleId);
    if (!module) throw notFound();
    return { module };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `FAQ ${loaderData?.module.name ?? 'Modul'} — Pusat Bantuan EMIS 4.0 Madrasah` },
      { name: 'description', content: loaderData?.module.description ?? 'Pertanyaan seputar modul EMIS Madrasah.' },
      { property: 'og:title', content: `FAQ ${loaderData?.module.name ?? 'Modul'} — Pusat Bantuan EMIS 4.0 Madrasah` },
      { property: 'og:description', content: loaderData?.module.description ?? 'Pertanyaan seputar modul EMIS Madrasah.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ModulePage,
  notFoundComponent: ModuleNotFound,
});

function Symbol({ name, className = '' }: { name: string; className?: string }) {
  return <span aria-hidden="true" className={`symbol ${className}`}>{name}</span>;
}

function ModuleNotFound() {
  return (
    <div className="faq-page">
      <main className="faq-main">
        <div className="empty-results">
          <Symbol name="search_off" />
          <h3>Modul tidak ditemukan</h3>
          <p>Modul yang Anda cari tidak tersedia.</p>
          <Link to="/" className="module-back-link">Kembali ke Pusat Bantuan</Link>
        </div>
      </main>
    </div>
  );
}

function ModulePage() {
  const { module } = Route.useLoaderData();
  const [opened, setOpened] = useState('');
  const items = faqs.filter(f => f.module === module.id);

  return (
    <div className="faq-page">
      <header className="page-header">
        <div className="header-inner">
          <div className="flex items-center gap-3">
            <img src="/kemenag.png" alt="Logo Kementerian Agama" className="brand-logo object-contain" />
            <div><p className="brand-name">Pusat Bantuan</p><p className="brand-caption">EMIS 4.0 MADRASAH</p></div>
          </div>
          <Link to="/" className="module-back-link">
            <Symbol name="arrow_back" className="!text-base" />Pusat Bantuan
          </Link>
        </div>
      </header>
      <main className="faq-main">
        <section className="module-hero" aria-labelledby="module-title">
          <div className="module-hero-inner">
            <span className={`module-icon ${module.id} module-hero-icon`}><Symbol name={module.icon} className="!text-4xl" /></span>
            <div>
              <h1 id="module-title" className="module-hero-title">FAQ {module.name}</h1>
              <p className="module-hero-description">{module.description}</p>
            </div>
          </div>
        </section>
        <section className="questions-section" aria-labelledby="module-questions-heading">
          <div className="section-heading">
            <h2 id="module-questions-heading">Pertanyaan Modul {module.name}</h2>
            <span className="section-meta" aria-live="polite">{items.length} pertanyaan</span>
          </div>
          <Accordion type="single" collapsible value={opened} onValueChange={setOpened} className="questions-list">
            {items.map((faq, index) => (
              <AccordionItem value={faq.id} key={faq.id}>
                <AccordionTrigger className="faq-question">
                  <span className="question-label">
                    <span className="question-number">{String(index + 1).padStart(2, '0')}</span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="question-answer">
                  <span className="answer-module">{module.name}</span>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="sample-note">Contoh FAQ awal. Untuk prosedur resmi dan ketentuan terbaru, lihat dokumen panduan EMIS.</p>
        </section>
      </main>
      <footer className="support-footer"><div className="support-inner">
        <div className="footer-bottom"><p>© 2026 Kementerian Agama RI — Direktorat Jenderal Pendidikan Islam.</p><p>Pusat Bantuan EMIS 4.0</p></div>
      </div></footer>
    </div>
  );
}
