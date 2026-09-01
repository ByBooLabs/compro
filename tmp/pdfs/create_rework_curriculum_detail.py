from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak


OUTPUT = 'output/pdf/kurikulum-detail-cyber-security-bootcamp-rework-academy.pdf'

sections = [
    ('Fondasi & Etika', [
        ('Cybersecurity Fundamentals & Ethical Security Practice', 'Peserta mempelajari dasar cybersecurity, threat landscape, attacker mindset, attack surface, istilah keamanan, serta batasan legal dalam praktik security testing profesional.', [
            'Ekosistem cybersecurity dan modern threat landscape', 'Perlindungan website, API, sistem autentikasi, dan infrastruktur', 'Perbedaan vulnerability, exploit, threat, risk, dan business impact', 'Tipe threat actor dan pola pikir attacker', 'Attack surface: login, endpoint, parameter, serta upload', 'Istilah inti seperti payload, session, logs, dan authorization', 'Ethical hacking, authorization, scope, serta responsible disclosure',
        ]),
        ('Red Team, Blue Team & Purple Team Workflow', 'Peserta memahami peran Red Team, Blue Team, dan Purple Team pada operasi keamanan: dari pengujian ofensif hingga monitoring, remediation, dan kolaborasi.', [
            'Workflow Red Team untuk offensive security', 'Reconnaissance, validasi kerentanan, eksploitasi, dan pelaporan', 'Workflow Blue Team untuk monitoring dan detection', 'Analisis aktivitas mencurigakan melalui logs dan system visibility', 'Purple Team sebagai penghubung praktik ofensif dan defensif', 'Penyusunan alur attack, detection, dan remediation', 'Penetration testing lifecycle serta rules of engagement',
        ]),
        ('Technical Foundations for Modern Security Testing: Network, Web, HTTP & API', 'Peserta mempelajari fondasi aplikasi web, HTTP, API, jaringan, DNS, dan infrastruktur untuk memahami cara kerja sistem modern dan attack surface-nya.', [
            'Struktur frontend, backend, database, dan API', 'Dashboard, admin panel, authentication system, dan API service', 'HTTP request-response, method, header, cookie, dan status code', 'Analisis request dan response dengan browser tools', 'Endpoint, parameter, token, serta JSON dalam komunikasi API', 'Domain, DNS, IP address, port, protocol, dan service', 'DNS lookup serta traffic inspection dasar',
        ]),
        ('Linux Fundamentals for Cybersecurity Operations', 'Peserta mempelajari Linux sebagai lingkungan penting untuk cybersecurity, meliputi filesystem, command line, permission, process, logs, dan workflow security testing.', [
            'Linux environment untuk cybersecurity workflow', 'Filesystem, directory structure, dan file management', 'Navigasi terminal dan command-line dasar', 'File inspection dan process management', 'Permission, user privilege, process, serta logs', 'Log inspection untuk monitoring dan troubleshooting', 'Kaitan Linux dengan reconnaissance dan security tools',
        ]),
    ]),
    ('Pengujian Aplikasi & Infrastruktur', [
        ('Web Testing Workflow: HTTP, Authentication & Burp Suite', 'Peserta mempelajari alur autentikasi, session, cookie, analisis request, Burp Suite interception, serta dasar OWASP Top 10 dalam web security testing.', [
            'Login workflow, session, cookie, dan authenticated request', 'Cara browser mempertahankan authenticated session', 'Request inspection dengan Burp Suite dan Chrome DevTools', 'Parameter, header, body, cookie, serta response structure', 'Request interception dan authentication persistence', 'Perbedaan hashing, encoding, dan encryption', 'OWASP Top 10 dan vulnerability fundamentals',
        ]),
        ('Web Vulnerability Discovery & Attack Surface Analysis', 'Peserta mempelajari cara mengidentifikasi attack surface, melakukan vulnerability mapping, menilai fitur yang terbuka, dan membangun exploitation mindset pada aplikasi web.', [
            'Attack surface discovery pada aplikasi web', 'Login form, endpoint, parameter, upload, dan exposed feature', 'Vulnerability mapping berdasarkan behaviour dan functionality', 'Error message, response behaviour, dan application flow', 'Entry point pada upload, search, API, dan authentication', 'Weak validation dan insecure functionality exposure', 'Attack path berdasarkan reconnaissance findings',
        ]),
        ('Reconnaissance & Information Gathering Workflow', 'Peserta mempelajari reconnaissance untuk mengumpulkan informasi target yang berizin, menemukan service terbuka, memetakan infrastruktur, dan menganalisis public exposure.', [
            'Passive dan active reconnaissance dalam penetration testing', 'Target profiling dan public information gathering', 'Keterkaitan reconnaissance dengan attack surface mapping', 'Subdomain enumeration menggunakan reconnaissance tools', 'Service discovery dan analisis exposed endpoint', 'Port scanning dan network reconnaissance dengan Nmap', 'GitHub exposure, credential leakage, dan pola data sensitif',
        ]),
        ('API Security, Token & Sensitive Data Exposure Analysis', 'Peserta mempelajari API workflow, endpoint, token, session, sensitive data exposure, request manipulation, serta risiko salah konfigurasi pada aplikasi modern.', [
            'API workflow dan endpoint communication', 'Endpoint, parameter, token, dan JSON request-response', 'Endpoint analysis serta request inspection dasar', 'Token, session, dan authentication data workflow', 'Sensitive data exposure dan insecure token handling', 'Request analysis serta parameter manipulation', 'API exposure, misconfiguration, dan risiko unauthorized access',
        ]),
        ('SQL Injection Testing & Risk Analysis', 'Peserta mempelajari SQL Injection, manipulasi query, bypass autentikasi, pengujian parameter rentan, dan dampak akses database tanpa otorisasi.', [
            'SQL Injection fundamentals dan database workflow', 'Insecure input validation serta query processing', 'Testing di vulnerable web environment yang terkontrol', 'Query manipulation dan application behaviour', 'Authentication bypass pada login workflow', 'Payload testing pada parameter rentan', 'Dampak SQL Injection terhadap data dan business risk',
        ]),
        ('Cross-Site Scripting (XSS) Attacks', 'Peserta mempelajari XSS, browser rendering, reflected dan stored XSS, kelemahan validasi input, perilaku payload, serta risiko eksekusi script pada browser korban.', [
            'XSS fundamentals dan browser rendering workflow', 'HTML processing dan JavaScript execution', 'Payload XSS sederhana pada lingkungan latihan', 'Reflected XSS dan kelemahan input validation', 'Payload testing pada reflected XSS environment', 'Stored XSS dan persistent payload behaviour', 'Browser behaviour serta security risk dari XSS',
        ]),
        ('Authentication, Authorization & Access Control Testing', 'Peserta mempelajari pengujian authentication, authorization, access control, IDOR, session manipulation, dan access validation untuk mengenali risiko akses tanpa izin.', [
            'Authentication workflow dan session validation', 'Login request analysis serta session inspection', 'Authorization, role, user privilege, dan access control', 'Weak authorization dan risiko privilege misuse', 'IDOR dan object reference validation', 'Parameter manipulation untuk unauthorized access testing', 'Session manipulation serta access validation behaviour',
        ]),
        ('Advanced SQL Injection & Automation-Assisted Testing', 'Peserta mempelajari blind dan time-based SQL Injection, SQLMap, automation-assisted testing, validasi manual, false positive, serta dampak eksploitasi tingkat lanjut.', [
            'Blind SQL Injection dan response-based analysis', 'Time-based SQL Injection serta timing observation', 'Request inspection, payload testing, dan response validation', 'SQLMap untuk automation-assisted testing', 'Kaitan manual validation dengan automation tools', 'False positive dan verification workflow', 'Advanced SQL Injection impact dan business risk',
        ]),
        ('File Upload Exploitation & Remote Code Execution (RCE) Advance', 'Peserta mempelajari file upload workflow, kelemahan validasi, dangerous upload, upload-to-RCE, insecure file handling, dan dampaknya pada server.', [
            'Alur upload hingga backend processing', 'File extension, MIME type, file size, dan content validation', 'Weak validation dan insecure file handling', 'Dangerous file upload serta payload behaviour', 'Hubungan upload weakness dengan dangerous execution', 'Upload-to-RCE workflow fundamentals', 'Server compromise dan unauthorized access risk',
        ]),
        ('SSRF, Cloud Exposure & Modern Attack Surface', 'Peserta mempelajari SSRF, backend request workflow, cloud exposure, metadata service, internal service exposure, infrastructure leakage, dan modern attack surface.', [
            'SSRF fundamentals dan backend request workflow', 'User-controlled input serta internal service access', 'Backend request observation dengan Burp Suite', 'Cloud exposure dan metadata service awareness', 'Insecure cloud configuration serta sensitive data exposure', 'Internal service exposure dan backend communication', 'Attack surface modern pada cloud, API, dan backend',
        ]),
    ]),
    ('Assessment, Defense & Karier', [
        ('End-to-End Security Assessment Simulation', 'Peserta mempraktikkan security assessment end-to-end: dari scope planning, testing execution, vulnerability validation, evidence collection, hingga documentation workflow.', [
            'Assessment planning dan scope understanding', 'Target, rules of engagement, dan testing priority', 'Security testing execution dari reconnaissance sampai validation', 'Vulnerability findings berdasarkan assessment workflow', 'Validation serta impact observation', 'Evidence yang relevan untuk reporting', 'Assessment documentation yang terstruktur',
        ]),
        ('Professional Pentest Reporting, CVSS & Security Communication', 'Peserta mempelajari penyusunan pentest report profesional, executive summary, technical findings, CVSS scoring, business impact, dan rekomendasi remediation.', [
            'Executive summary dan stakeholder communication', 'Struktur findings documentation dalam pentest report', 'Evidence, impact, dan reproduction step', 'Penulisan technical findings yang terstruktur', 'CVSS, severity rating, dan risk prioritization', 'Business impact dari vulnerability findings', 'Remediation recommendation yang actionable',
        ]),
        ('SOC Fundamentals, Security Monitoring & Detection Workflow', 'Peserta mempelajari dasar SOC, security monitoring, log source, detection visibility, alert triage, severity awareness, dan monitoring analysis.', [
            'SOC workflow dalam cybersecurity operation', 'Security monitoring dan threat detection workflow', 'Log source dan detection visibility', 'Observasi activity yang tercatat dalam log', 'Alert concept, severity, dan prioritization', 'False positive dan true positive', 'Detection review serta monitoring limitation analysis',
        ]),
        ('Incident Analysis, IOC Investigation & Remediation Workflow', 'Peserta mempelajari IOC, threat indicator, log analysis, incident investigation, root cause analysis, incident timeline reconstruction, dan rekomendasi remediation.', [
            'IOC fundamentals dan threat indicator analysis', 'Identifikasi suspicious activity dari skenario simulasi', 'Linux dan web server log analysis', 'Authentication event serta suspicious log', 'Incident investigation dan root cause analysis', 'Incident timeline berdasarkan evidence', 'Remediation dan monitoring improvement recommendation',
        ]),
        ('AI-Assistant for Better Cyber Security', 'Peserta mempelajari penggunaan AI untuk cybersecurity workflow, vulnerability hunting, reconnaissance analysis, technical reporting, bug bounty assessment, dan responsible disclosure.', [
            'Peran AI dalam cybersecurity workflow modern', 'Batasan AI dan pentingnya manual validation', 'AI untuk vulnerability analysis', 'Exploitation flow, security impact, dan root cause', 'Prompt engineering untuk cybersecurity reporting', 'Bug bounty target evaluation dan assessment planning', 'Vulnerability disclosure dan finding communication profesional',
        ]),
        ('Job & Career: Freelance Bug Bounty & Portfolio Hacks', 'Peserta mempelajari portfolio building, GitHub project showcase, pentest proposal, client communication, professional positioning, dan roadmap karier security practitioner.', [
            'Struktur portfolio untuk penetration testing', 'Vulnerability write-up, pentest report, dan project documentation', 'GitHub repository serta project showcase', 'Dokumentasi tanpa membocorkan informasi sensitif', 'Pentest proposal dan scope of work', 'Komunikasi klien untuk non-technical stakeholder', 'Professional profile serta cybersecurity roadmap',
        ]),
    ]),
]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#CBD5E1'))
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 1.25 * cm, A4[0] - doc.rightMargin, 1.25 * cm)
    canvas.setFillColor(colors.HexColor('#64748B'))
    canvas.setFont('Helvetica', 8)
    canvas.drawString(doc.leftMargin, 0.8 * cm, 'Rework Academy | Cyber Security Bootcamp - Kurikulum Detail')
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.8 * cm, f'Halaman {doc.page}')
    canvas.restoreState()

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Eyebrow', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=colors.HexColor('#0EA5E9'), spaceAfter=10, alignment=TA_CENTER))
styles.add(ParagraphStyle(name='Title2', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=25, leading=30, textColor=colors.HexColor('#0F172A'), alignment=TA_CENTER, spaceAfter=8))
styles.add(ParagraphStyle(name='Sub', parent=styles['Normal'], fontName='Helvetica', fontSize=11, leading=16, textColor=colors.HexColor('#475569'), alignment=TA_CENTER))
styles.add(ParagraphStyle(name='Body', parent=styles['Normal'], fontName='Helvetica', fontSize=9.15, leading=13.2, textColor=colors.HexColor('#334155')))
styles.add(ParagraphStyle(name='Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=15, leading=19, textColor=colors.HexColor('#0F172A'), spaceAfter=7))
styles.add(ParagraphStyle(name='Module', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11.1, leading=14, textColor=colors.HexColor('#0F172A'), spaceAfter=4))
styles.add(ParagraphStyle(name='Description', parent=styles['Body'], fontName='Helvetica-Oblique', textColor=colors.HexColor('#475569'), spaceAfter=4))
styles.add(ParagraphStyle(name='DetailBullet', parent=styles['Body'], leftIndent=11, firstLineIndent=-8, leading=12.3, spaceAfter=1.5))
styles.add(ParagraphStyle(name='Source', parent=styles['Body'], fontName='Helvetica-Oblique', fontSize=8.2, leading=11, textColor=colors.HexColor('#64748B')))

doc = BaseDocTemplate(OUTPUT, pagesize=A4, leftMargin=1.75*cm, rightMargin=1.75*cm, topMargin=1.55*cm, bottomMargin=1.65*cm)
frame = Frame(doc.leftMargin, doc.bottomMargin, A4[0]-doc.leftMargin-doc.rightMargin, A4[1]-doc.topMargin-doc.bottomMargin, id='main')
doc.addPageTemplates([PageTemplate(id='main', frames=[frame], onPage=footer)])

story = [Spacer(1, 1.5*cm), Paragraph('KURIKULUM PEMBELAJARAN', styles['Eyebrow']), Paragraph('Cyber Security Bootcamp', styles['Title2']), Paragraph('Rework Academy - Versi Detail', styles['Sub']), Spacer(1, 0.6*cm)]
summary = Table([[Paragraph('<b>Program</b><br/>Online - 12 minggu', styles['Body']), Paragraph('<b>Pembelajaran</b><br/>20 sesi live', styles['Body']), Paragraph('<b>Output</b><br/>Assessment project & report', styles['Body'])]], colWidths=[5.25*cm]*3)
summary.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),colors.HexColor('#F0F9FF')),('BOX',(0,0),(-1,-1),0.5,colors.HexColor('#BAE6FD')),('INNERGRID',(0,0),(-1,-1),0.5,colors.HexColor('#BAE6FD')),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),10),('RIGHTPADDING',(0,0),(-1,-1),10),('TOPPADDING',(0,0),(-1,-1),9),('BOTTOMPADDING',(0,0),(-1,-1),9)]))
story += [summary, Spacer(1, 0.55*cm), Paragraph('Setiap section berikut memuat ringkasan pembelajaran dan rincian topik yang dicantumkan pada halaman program. Istilah teknis dipertahankan untuk menjaga kesesuaian dengan kurikulum resmi.', styles['Body']), Spacer(1, 0.4*cm)]

number = 1
for section_index, (section, modules) in enumerate(sections):
    if section_index:
        story.append(PageBreak())
    story.append(Paragraph(section, styles['Section']))
    for title, description, bullets in modules:
        badge = Table([[f'{number:02d}']], colWidths=[0.75*cm], rowHeights=[0.62*cm])
        badge.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),colors.HexColor('#0284C7')),('TEXTCOLOR',(0,0),(-1,-1),colors.white),('FONTNAME',(0,0),(-1,-1),'Helvetica-Bold'),('FONTSIZE',(0,0),(-1,-1),8),('ALIGN',(0,0),(-1,-1),'CENTER'),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
        heading = Table([[badge, Paragraph(title, styles['Module'])]], colWidths=[0.95*cm, 14.7*cm])
        heading.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
        content = [heading, Paragraph(description, styles['Description'])]
        content.extend(Paragraph(f'- {item}', styles['DetailBullet']) for item in bullets)
        box = Table([[content]], colWidths=[15.65*cm])
        box.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),colors.HexColor('#FFFFFF')),('BOX',(0,0),(-1,-1),0.45,colors.HexColor('#D9E6F0')),('LEFTPADDING',(0,0),(-1,-1),10),('RIGHTPADDING',(0,0),(-1,-1),10),('TOPPADDING',(0,0),(-1,-1),9),('BOTTOMPADDING',(0,0),(-1,-1),8)]))
        story += [box, Spacer(1, 0.22*cm)]
        number += 1

story += [Spacer(1, 0.2*cm), Paragraph('<b>Bootcamp Project: Website Security Assessment (2 minggu)</b><br/>Peserta menjalankan assessment end-to-end dalam konteks project perusahaan, dengan weekly mentoring. Kegiatannya mencakup scope, reconnaissance, vulnerability testing, validasi temuan, analisis risiko, dan penyusunan professional security report.', styles['Body']), Spacer(1, 0.22*cm), Paragraph('Sumber: https://reworkacademy.com/cyber-security-bootcamp/ | Diakses 31 Agustus 2026. Pengujian keamanan hanya boleh dilakukan pada lab atau sistem yang memiliki izin.', styles['Source'])]
doc.build(story)
print(OUTPUT)
