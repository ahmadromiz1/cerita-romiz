window.PORTFOLIO_PROJECTS = [
  {
    "id": "journal",
    "category": "automation",
    "tech": [
      "Python",
      "FastAPI",
      "Pandas",
      "Excel"
    ],
    "repo": "monthly-journal-automation-demo",
    "visual": [
      "XLSX",
      "Validate",
      "ZIP"
    ],
    "title": [
      "Otomasi Jurnal Finance",
      "Finance Journal Automation"
    ],
    "summary": [
      "Dari workbook rekonsiliasi ke jurnal per partner, lengkap dengan validasi dan pelacakan job.",
      "From reconciliation workbooks to per-partner journals, with validation and job tracking."
    ],
    "problem": [
      "Rekonsiliasi bulanan melibatkan file besar, pengecekan balance, dan pembagian jurnal secara manual.",
      "Monthly reconciliation involves large files, balance checks, and manually splitting journals."
    ],
    "solution": [
      "Web app FastAPI menerima workbook, membuat antrean job, lalu worker memvalidasi data dan mengekspor Excel per partner beserta log dalam ZIP.",
      "A FastAPI web app accepts workbooks and queues jobs. A worker validates records and exports per-partner Excel files and logs in a ZIP."
    ],
    "result": [
      "Demo publik menggunakan data sintetis. Pada implementasi operasional yang dijelaskan di catatan saya, 147+ laporan diproses dan durasi berkurang dari sekitar dua minggu menjadi 1–2 jam. Metrik ini merupakan konteks implementasi, bukan benchmark demo.",
      "The public demo uses synthetic data. In the operational implementation described in my notes, 147+ reports were processed and turnaround fell from roughly two weeks to 1–2 hours. These are implementation metrics, not demo benchmarks."
    ],
    "features": [
      [
        "Upload workbook & antrean background job",
        "Validasi balance & catatan review",
        "Ekspor Excel per partner & arsip ZIP"
      ],
      [
        "Workbook upload & background job queue",
        "Balance validation & review notes",
        "Per-partner Excel export & ZIP archive"
      ]
    ]
  },
  {
    "id": "warehouse",
    "category": "data",
    "tech": [
      "Python",
      "Pandas",
      "SQLAlchemy",
      "SQL"
    ],
    "repo": "operational-data-warehouse-etl-pipeline",
    "visual": [
      "Sources",
      "Warehouse",
      "Marts"
    ],
    "title": [
      "Operational Data Warehouse",
      "Operational Data Warehouse"
    ],
    "summary": [
      "Pipeline multi-sumber yang mengubah data operasional menjadi warehouse dan reporting marts.",
      "A multi-source pipeline turning operational data into a warehouse and reporting marts."
    ],
    "problem": [
      "CSV, Excel, JSON, dan API memiliki format dan kualitas data yang berbeda sehingga laporan sulit dikonsolidasikan.",
      "CSV, Excel, JSON, and API sources have inconsistent formats and data quality, making consolidated reporting difficult."
    ],
    "solution": [
      "Pipeline Python mengekstrak dan memvalidasi data, mencatat record yang ditolak, memuat staging, lalu membentuk dimensional warehouse dan data mart.",
      "A Python pipeline extracts and validates data, records rejections, loads staging tables, and builds a dimensional warehouse and data marts."
    ],
    "result": [
      "Proyek portofolio lokal dengan sumber contoh, audit log, penanganan rejection, dan output CSV untuk pelaporan yang bisa ditelusuri.",
      "A local portfolio project with sample sources, audit logs, rejection handling, and traceable CSV reporting outputs."
    ],
    "features": [
      [
        "Ingest CSV, Excel, JSON & mock API",
        "Staging, dimensi & fact transactions",
        "Audit log & ekspor reporting marts"
      ],
      [
        "CSV, Excel, JSON & mock API ingestion",
        "Staging, dimensions & transaction facts",
        "Audit logs & reporting mart exports"
      ]
    ]
  },
  {
    "id": "flight",
    "category": "data",
    "tech": [
      "Python",
      "XML",
      "ETL",
      "Excel"
    ],
    "repo": "flight-xml-to-spreadsheet-automation",
    "visual": [
      "3 XML",
      "Reconcile",
      "1 row"
    ],
    "title": [
      "Flight XML Automation",
      "Flight XML Automation"
    ],
    "summary": [
      "Tiga dokumen operasional penerbangan direkonsiliasi menjadi satu record siap spreadsheet.",
      "Three operational flight documents reconciled into a single spreadsheet-ready record."
    ],
    "problem": [
      "Dokumen penerbangan yang saling terkait perlu dicocokkan identitas dan datanya sebelum masuk laporan.",
      "Related flight documents need matching identities and consistent data before entering reports."
    ],
    "solution": [
      "Parser mengambil field dari tiga XML, memvalidasi konsistensi antar dokumen, lalu menggabungkan hasil ke CSV, XLSX, dan ringkasan JSON.",
      "Parsers extract fields from three XML files, validate cross-document consistency, and merge results into CSV, XLSX, and JSON summaries."
    ],
    "result": [
      "Versi portofolio dengan fixture yang disanitasi dan pengujian otomatis melalui GitHub Actions. Output lokal memperlihatkan pola ETL tanpa dokumen operasional asli.",
      "A portfolio version with sanitized fixtures and automated tests through GitHub Actions. Local outputs demonstrate the ETL pattern without original operational documents."
    ],
    "features": [
      [
        "Rekonsiliasi tiga dokumen XML",
        "Validasi identitas lintas dokumen",
        "Ekspor CSV/XLSX & ringkasan run"
      ],
      [
        "Three-document XML reconciliation",
        "Cross-document identity validation",
        "CSV/XLSX export & run summaries"
      ]
    ]
  },
  {
    "id": "corporate",
    "category": "web",
    "tech": [
      "Laravel",
      "PHP",
      "CMS"
    ],
    "repo": null,
    "visual": [
      "Content",
      "Laravel",
      "Website"
    ],
    "title": [
      "Replatforming Website Korporat",
      "Corporate Website Replatforming"
    ],
    "summary": [
      "Membangun ulang website dan CMS agar lebih mudah dikelola serta dirawat.",
      "Rebuilding a corporate website and CMS for easier content management and maintenance."
    ],
    "problem": [
      "Website korporat perlu mengikuti environment modern sekaligus tetap mudah dikelola oleh tim internal.",
      "A corporate website needs to support modern environments while remaining manageable for internal teams."
    ],
    "solution": [
      "Membangun ulang platform dengan Laravel dan CMS, dengan perhatian pada maintainability, keamanan, dan kompatibilitas environment.",
      "Rebuilding the platform using Laravel and a CMS, focusing on maintainability, security, and environment compatibility."
    ],
    "result": [
      "Catatan implementasi berfokus pada pengelolaan konten internal dan struktur aplikasi yang lebih mudah dikembangkan.",
      "Implementation notes focus on internal content management and an application structure that is easier to extend."
    ],
    "features": [
      [
        "Pengelolaan konten melalui CMS",
        "Struktur backend Laravel",
        "Kompatibilitas environment modern"
      ],
      [
        "CMS-based content management",
        "Laravel backend structure",
        "Modern environment compatibility"
      ]
    ]
  },
  {
    "id": "links",
    "category": "web",
    "tech": [
      "QR",
      "Analytics",
      "Internal Tools"
    ],
    "repo": null,
    "visual": [
      "Link",
      "QR",
      "Insights"
    ],
    "title": [
      "Direct Link & QR Analytics",
      "Direct Link & QR Analytics"
    ],
    "summary": [
      "Shortlink, generator QR, dan analitik akses untuk kebutuhan internal perusahaan.",
      "Shortlinks, QR generation, and access analytics for internal business needs."
    ],
    "problem": [
      "Tim membutuhkan pengelolaan direct link dan pelacakan akses di bawah sistem internal sendiri.",
      "Teams need direct link management and access tracking within their own internal system."
    ],
    "solution": [
      "Menggabungkan shortlink, generator QR, deteksi perangkat Android/iPhone, dan analitik akses dalam satu alur.",
      "Combining shortlinks, QR generation, Android/iPhone device detection, and access analytics in one workflow."
    ],
    "result": [
      "Pengelolaan tautan dan analitik dapat dilakukan secara internal tanpa bergantung pada layanan shortlink eksternal.",
      "Links and access analytics can be managed internally without relying on an external shortlink service."
    ],
    "features": [
      [
        "Shortlink internal & generator QR",
        "Deteksi perangkat pengunjung",
        "Analitik akses tautan"
      ],
      [
        "Internal shortlinks & QR generation",
        "Visitor device detection",
        "Link access analytics"
      ]
    ]
  },
  {
    "id": "summary",
    "category": "automation",
    "tech": [
      "AI",
      "Workflow",
      "Internal Tools"
    ],
    "repo": null,
    "visual": [
      "Chat",
      "Summarize",
      "Brief"
    ],
    "title": [
      "Ringkasan Operasional WhatsApp",
      "WhatsApp Operational Summaries"
    ],
    "summary": [
      "Mengubah backup percakapan menjadi ringkasan harian yang lebih mudah dibaca tim.",
      "Turning conversation backups into daily summaries that teams can read more easily."
    ],
    "problem": [
      "Informasi penting operasional tersebar di percakapan panjang dan memerlukan waktu untuk ditinjau.",
      "Important operational updates are spread across long conversations and take time to review."
    ],
    "solution": [
      "Mengolah backup percakapan dengan bantuan AI untuk menyusun ringkasan harian dan menyoroti kejadian penting.",
      "Processing conversation backups with AI assistance to prepare daily summaries and highlight key events."
    ],
    "result": [
      "Informasi operasional disajikan lebih terstruktur agar tim dapat membaca kejadian penting dengan lebih cepat.",
      "Operational information is presented in a more structured format so teams can review key events faster."
    ],
    "features": [
      [
        "Input backup percakapan",
        "Ringkasan harian berbantuan AI",
        "Sorotan kejadian operasional"
      ],
      [
        "Conversation backup input",
        "AI-assisted daily summaries",
        "Operational event highlights"
      ]
    ]
  }
];
