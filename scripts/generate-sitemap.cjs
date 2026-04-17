const fs = require('fs');
const path = require('path');

/**
 * CARRILO DYNAMICS | SITEMAP ENGINE v1.1
 * This script extracts article IDs directly from the i18n source
 * and generates a strictly formatted XML sitemap.
 */

const I18N_PATH = path.join(__dirname, '../src/data/i18n.ts');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://carrillodynamics.com';

function generate() {
    console.log('--- CD SITEMAP ENGINE [v1.1]: STARTING ---');
    
    try {
        const content = fs.readFileSync(I18N_PATH, 'utf8');
        
        // Robust ID extraction: Scan entire file, then uniqueify
        const idMatches = content.match(/id:\s*["'](.*?)["']/g);
        const allIds = idMatches ? idMatches.map(m => m.match(/["'](.*?)["']/)[1]) : [];
        const articleIds = [...new Set(allIds)];
        
        console.log(`Detected Unique Articles: ${articleIds.length}`);

        const staticPages = [
            { path: '', freq: 'weekly', priority: '1.0' },
            { path: 'faq', freq: 'monthly', priority: '0.8' },
            { path: 'articles', freq: 'weekly', priority: '0.9' },
            { path: 'privacy', freq: 'monthly', priority: '0.5' },
            { path: 'terms', freq: 'monthly', priority: '0.5' }
        ];

        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

        const today = new Date().toISOString().split('T')[0];

        // Generate URLs for each language
        ['en', 'es'].forEach(lang => {
            // Static Pages
            staticPages.forEach(p => {
                const url = p.path ? `${BASE_URL}/${lang}/${p.path}` : `${BASE_URL}/${lang}`;
                xml += `  <url>\n`;
                xml += `    <loc>${url}</loc>\n`;
                xml += `    <lastmod>${today}</lastmod>\n`;
                xml += `    <changefreq>${p.freq}</changefreq>\n`;
                xml += `    <priority>${p.priority}</priority>\n`;
                xml += `    <xhtml:link rel="alternate" hreflang="en" href="${p.path ? `${BASE_URL}/en/${p.path}` : `${BASE_URL}/en`}"/>\n`;
                xml += `    <xhtml:link rel="alternate" hreflang="es" href="${p.path ? `${BASE_URL}/es/${p.path}` : `${BASE_URL}/es`}"/>\n`;
                xml += `  </url>\n`;
            });

            // Dynamic Articles
            articleIds.forEach(id => {
                xml += `  <url>\n`;
                xml += `    <loc>${BASE_URL}/${lang}/articles/${id}</loc>\n`;
                xml += `    <lastmod>${today}</lastmod>\n`;
                xml += `    <priority>0.8</priority>\n`;
                xml += `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/articles/${id}"/>\n`;
                xml += `    <xhtml:link rel="alternate" hreflang="es" href="${BASE_URL}/es/articles/${id}"/>\n`;
                xml += `  </url>\n`;
            });
        });

        xml += `</urlset>`;

        fs.writeFileSync(OUTPUT_PATH, xml);
        console.log('--- CD SITEMAP ENGINE: COMPLETE (public/sitemap.xml updated) ---');
        
    } catch (err) {
        console.error('--- CD SITEMAP ENGINE: ERROR ---');
        console.error(err);
        process.exit(1);
    }
}

generate();
