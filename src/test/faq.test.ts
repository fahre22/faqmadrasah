import { describe, expect, it } from 'vitest';
import { filterFaqs, modules } from '../lib/faq';

describe('FAQ search', () => {
  it('contains the six requested modules', () => {
    expect(modules.map(m => m.name)).toEqual(['Akun', 'Lembaga', 'Sarana Prasarana', 'Siswa', 'GTK', 'BAP']);
  });
  it('matches questions without case sensitivity and trims spaces', () => {
    expect(filterFaqs('  LUPA kata SANDI  ', 'all').map(f => f.id)).toContain('a1');
  });
  it('searches answer content', () => {
    expect(filterFaqs('Berita Acara Pendataan', 'all').map(f => f.id)).toEqual(['b1']);
  });
  it('restricts matches to the selected module', () => {
    expect(filterFaqs('', 'gtk')).toHaveLength(3);
    expect(filterFaqs('lupa kata sandi', 'gtk')).toEqual([]);
  });
  it('returns no results for unmatched queries', () => {
    expect(filterFaqs('zzznotfound', 'all')).toEqual([]);
  });
});
