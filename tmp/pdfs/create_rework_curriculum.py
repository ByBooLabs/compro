from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.pdfbase.pdfmetrics import stringWidth


OUTPUT = 'output/pdf/kurikulum-cyber-security-bootcamp-rework-academy.pdf'

modules = [
    ('Fondasi & Etika', [
        ('Cybersecurity Fundamentals & Ethical Security Practice', 'Dasar keamanan siber, lanskap ancaman, permukaan serangan, serta batas legal dan pelaporan yang bertanggung jawab.'),
        ('Red Team, Blue Team & Purple Team Workflow', 'Alur kerja ofensif, pemantauan dan deteksi, perbaikan, serta kolaborasi antarperan keamanan.'),
        ('Technical Foundations for Modern Security Testing', 'Fondasi jaringan, web, HTTP, API, DNS, dan infrastruktur untuk memahami cara sistem membentuk attack surface.'),
        ('Linux Fundamentals for Cybersecurity Operations', 'Terminal Linux, filesystem, izin akses, proses, log, dan penggunaannya dalam operasi keamanan.'),
    ]),
    ('Pengujian Aplikasi & Infrastruktur', [
        ('Web Testing Workflow: HTTP, Authentication & Burp Suite', 'Analisis request, session, cookie, autentikasi, dan pengenalan OWASP Top 10.'),
        ('Web Vulnerability Discovery & Attack Surface Analysis', 'Pemetaan endpoint dan fitur terbuka, identifikasi entry point, serta penyusunan jalur pengujian.'),
        ('Reconnaissance & Information Gathering Workflow', 'Profiling target berizin, enumerasi subdomain, service discovery, pemeriksaan port, dan paparan informasi publik.'),
        ('API Security, Token & Sensitive Data Exposure Analysis', 'Keamanan endpoint API, token dan session, paparan data sensitif, serta risiko salah konfigurasi.'),
        ('SQL Injection Testing & Risk Analysis', 'Konsep SQL injection, validasi input, pengujian pada lingkungan rentan, dan dampak terhadap data serta bisnis.'),
        ('Cross-Site Scripting (XSS) Attacks', 'Dasar XSS, perilaku browser, reflected dan stored XSS, serta kelemahan validasi input.'),
        ('Authentication, Authorization & Access Control Testing', 'Pengujian autentikasi, otorisasi, kontrol akses, IDOR, dan validasi sesi.'),
        ('Advanced SQL Injection & Automation-Assisted Testing', 'Blind/time-based SQLi, penggunaan alat bantu, verifikasi manual, dan analisis false positive.'),
        ('File Upload Exploitation & Remote Code Execution (RCE) Advance', 'Risiko validasi unggahan file, penanganan file tidak aman, dan dampak kompromi server.'),
        ('SSRF, Cloud Exposure & Modern Attack Surface', 'Alur request backend, paparan cloud dan layanan internal, serta risiko konfigurasi modern.'),
    ]),
    ('Assessment, Defense & Karier', [
        ('End-to-End Security Assessment Simulation', 'Simulasi assessment dari penentuan ruang lingkup, pengujian, validasi temuan, bukti, hingga dokumentasi.'),
        ('Professional Pentest Reporting, CVSS & Security Communication', 'Penyusunan laporan, penilaian CVSS, analisis dampak, dan rekomendasi remediasi yang dapat ditindaklanjuti.'),
        ('SOC Fundamentals, Security Monitoring & Detection Workflow', 'Dasar SOC, sumber log, monitoring, triage alert, prioritas severity, dan evaluasi deteksi.'),
        ('Incident Analysis, IOC Investigation & Remediation Workflow', 'Analisis indikator kompromi, investigasi log, rekonstruksi insiden, root cause, dan usulan perbaikan.'),
        ('AI-Assistant for Better Cyber Security', 'Pemanfaatan AI untuk analisis, reconnaissance, pelaporan, dan evaluasi temuan dengan validasi manual.'),
        ('Job & Career: Freelance Bug Bounty & Portfolio Hacks', 'Pembuatan portofolio, write-up, proposal, komunikasi klien, dan roadmap karier praktisi keamanan.'),
    ]),
]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#CBD5E1'))
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 1.35 * cm, A4[0] - doc.rightMargin, 1.35 * cm)
    canvas.setFillColor(colors.HexColor('#64748B'))
    canvas.setFont('Helvetica', 8)
    canvas.drawString(doc.leftMargin, 0.9 * cm, 'Rework Academy | Cyber Security Bootcamp')
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.9 * cm, f'Halaman {doc.page}')
    canvas.restoreState()

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='CoverEyebrow', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=colors.HexColor('#0EA5E9'), spaceAfter=10, alignment=TA_CENTER))
styles.add(ParagraphStyle(name='CoverTitle', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=27, leading=33, textColor=colors.HexColor('#0F172A'), alignment=TA_CENTER, spaceAfter=9))
styles.add(ParagraphStyle(name='CoverSub', parent=styles['Normal'], fontName='Helvetica', fontSize=11, leading=16, textColor=colors.HexColor('#475569'), alignment=TA_CENTER))
styles.add(ParagraphStyle(name='Intro', parent=styles['Normal'], fontName='Helvetica', fontSize=9.5, leading=14, textColor=colors.HexColor('#334155'), spaceAfter=12))
styles.add(ParagraphStyle(name='Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=14, leading=18, textColor=colors.HexColor('#0F172A'), spaceBefore=9, spaceAfter=7))
styles.add(ParagraphStyle(name='Module', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10.1, leading=13, textColor=colors.HexColor('#0F172A')))
styles.add(ParagraphStyle(name='Description', parent=styles['Normal'], fontName='Helvetica', fontSize=8.7, leading=12, textColor=colors.HexColor('#475569')))
styles.add(ParagraphStyle(name='Note', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.3, leading=11, textColor=colors.HexColor('#64748B'), spaceBefore=10))

doc = BaseDocTemplate(OUTPUT, pagesize=A4, leftMargin=1.8*cm, rightMargin=1.8*cm, topMargin=1.55*cm, bottomMargin=1.75*cm)
frame = Frame(doc.leftMargin, doc.bottomMargin, A4[0]-doc.leftMargin-doc.rightMargin, A4[1]-doc.topMargin-doc.bottomMargin, id='main')
doc.addPageTemplates([PageTemplate(id='main', frames=[frame], onPage=footer)])

story = []
story += [Spacer(1, 1.55*cm), Paragraph('RINGKASAN KURIKULUM', styles['CoverEyebrow']), Paragraph('Cyber Security Bootcamp', styles['CoverTitle']), Paragraph('Rework Academy', styles['CoverSub']), Spacer(1, 0.65*cm)]
overview = [[Paragraph('<b>Durasi program</b><br/>12 minggu', styles['Description']), Paragraph('<b>Format</b><br/>Online, 20 sesi live', styles['Description']), Paragraph('<b>Project</b><br/>Website security assessment', styles['Description'])]]
table = Table(overview, colWidths=[5.25*cm, 5.25*cm, 5.25*cm])
table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#F0F9FF')),
    ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor('#BAE6FD')),
    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#BAE6FD')),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 10), ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ('TOPPADDING', (0,0), (-1,-1), 9), ('BOTTOMPADDING', (0,0), (-1,-1), 9),
]))
story += [table, Spacer(1, 0.8*cm), Paragraph('Dokumen ini merangkum 20 topik kurikulum pada halaman program. Deskripsi disederhanakan untuk membantu pembaca memahami fokus pembelajaran setiap modul.', styles['Intro'])]

number = 1
for section, items in modules:
    story.append(Paragraph(section, styles['Section']))
    for title, description in items:
        number_cell = Table([[f'{number:02d}']], colWidths=[0.65*cm], rowHeights=[0.65*cm])
        number_cell.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#0284C7')), ('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (0,0), (-1,-1), 'CENTER'), ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold'), ('FONTSIZE', (0,0), (-1,-1), 8), ('TEXTCOLOR', (0,0), (-1,-1), colors.white), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('BOX', (0,0), (-1,-1), 0, colors.white)]))
        content = [Paragraph(title, styles['Module']), Spacer(1, 2), Paragraph(description, styles['Description'])]
        row = Table([[number_cell, content]], colWidths=[0.9*cm, 14.85*cm])
        row.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 5), ('BOTTOMPADDING', (0,0), (-1,-1), 5), ('LINEBELOW', (0,0), (-1,-1), 0.35, colors.HexColor('#E2E8F0'))]))
        story.append(KeepTogether(row))
        number += 1

story += [Spacer(1, 0.15*cm), Paragraph('Bootcamp project (2 minggu): peserta melakukan website security assessment end-to-end pada konteks project perusahaan, didampingi mentor, lalu menyusun dan mempresentasikan laporan keamanan profesional.', styles['Intro']), Paragraph('Sumber: https://reworkacademy.com/cyber-security-bootcamp/ | Diakses 31 Agustus 2026. Praktik pengujian keamanan hanya dilakukan pada lab atau sistem yang memiliki izin.', styles['Note'])]
doc.build(story)
print(OUTPUT)
