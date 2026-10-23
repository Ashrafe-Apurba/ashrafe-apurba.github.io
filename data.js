/* ==========================================================================
   YOUR CONTENT LIVES HERE.
   To update the website, edit this file only. The design reads everything
   from this file. Keep the commas, quotes and brackets exactly as they are.

   Quick guide (full steps are in UPDATING.md):
   - New project?      Copy one block inside `projects`, paste it, change the text.
   - New certificate?  Copy one block inside `certifications`.
   - New role / award? Copy a block inside `leadership.groups` or `achievements`.
   - New picture?      Put the file in the `img` folder, then write its name here.
   Pictures should be about 1400 px wide at most (use .webp or .jpg).
   ========================================================================== */

const SITE = {

  updated: "October 2026",

  /* ---------- Basic details ---------- */
  profile: {
    name: "Ashrafe Bin Alim",
    initials: "AB",
    role: "Industrial & Production Engineering student at RUET",
    status: "Open to supply chain, operations and logistics roles",
    intro:
      "I study how things get made and moved. My focus is operations, supply chain and quality, and I back it up with dashboards in Power BI, Tableau, Excel and Python.",
    photo: "img/profile-portrait.webp",
    photoAlt: "Portrait of Ashrafe Bin Alim",
    cv: "assets/Ashrafe-Bin-Alim-CV.pdf",
    titleBlock: [
      { label: "Discipline",   value: "Industrial & Production Engineering" },
      { label: "Institution",  value: "Rajshahi University of Engineering & Technology" },
      { label: "Graduation",   value: "March 2027" },
      { label: "CGPA",         value: "3.75" },
      { label: "Location",     value: "Rajshahi, Bangladesh" },
      { label: "Record",       value: "2 scholarships · 1 paper · 8 certifications" }
    ]
  },

  contact: {
    email: "ashrafacc20@gmail.com",
    phone: "+880 1866 939414",
    phoneLink: "+8801866939414",
    location: "Rajshahi, Bangladesh",
    /* Optional: paste a Formspree / Web3Forms endpoint here so the contact form
       sends email directly. Leave empty to open the visitor's mail app instead. */
    /* Paste your free Web3Forms access key here (see UPDATING.md) so messages arrive in your inbox. */
    web3formsKey: "4adb5423-fa29-4437-a383-8ced0aa12e08",
    formEndpoint: "",
    links: [
      { label: "LinkedIn",       url: "https://www.linkedin.com/in/ashrafebinalim/" },
      { label: "GitHub",         url: "https://github.com/Ashrafe-Apurba" },
      { label: "Tableau Public", url: "https://public.tableau.com/app/profile/ashrafe.alim/vizzes" }
    ]
  },

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I am a final-year Industrial & Production Engineering student at RUET. I like the part of engineering where a process gets measured, questioned and made better: supply chains, manufacturing lines, inventory, quality and cost.",
      "My coursework and projects cover operations management, production planning, inventory management, quality and process improvement. At Walton I followed a fastener from wire to packed product and ran time studies on the electroplating line. Alongside that I build analytics dashboards to turn raw sales and operations data into decisions.",
      "I am looking for a performance-driven team where I can contribute to efficiency, productivity, cost, quality and operational results."
    ],
    focus: [
      { title: "Supply chain and logistics", text: "Inventory, sourcing, demand forecasting, distribution and cost analysis." },
      { title: "Production and operations",  text: "Planning, lean, line balancing, work study and facility layout." },
      { title: "Quality and improvement",    text: "Six Sigma, SPC, root cause analysis and inspection." },
      { title: "Data and visualization",     text: "Power BI, Tableau, Excel and Python for KPI and trend analysis." }
    ]
  },

  /* ---------- Work experience ----------
     Optional per-photo `focus: "50% 40%"` sets which part of a tall photo shows in the small tile (x% y%). */
  experience: [
    {
      role: "Industrial Trainee, Process Development",
      org: "Walton Hi-Tech Industries PLC",
      detail: "Fastener Department · Gazipur, Bangladesh",
      period: "18 Feb – 12 Mar 2026",
      points: [
        "Followed the complete fastener manufacturing workflow from raw material to final packaging.",
        "Gained hands-on exposure to each stage of the line, listed below.",
        "Ran time studies on the electroplating line to analyse operational flow and find process bottlenecks."
      ],
      flowTitle: "Process followed",
      flow: ["Wire drawing", "Annealing", "Bolt forming", "Heat treatment", "Electroplating", "Packaging"],
      certificate: {
        label: "Certificate of completion",
        image: "img/experience-walton-completion-certificate-redacted.webp",
        alt: "Walton completion certificate, personal identifiers covered"
      },
      photos: [
        { src: "img/experience-walton-trainee-selfie-main-building.webp", alt: "Trainee group selfie in front of the Walton main building" },
        { src: "img/experience-walton-ashrafe-at-air-conditioner-building.webp", alt: "Ashrafe in front of the Walton Air Conditioner factory building", focus: "50% 55%" },
        { src: "img/experience-walton-trainee-group-helipad.webp", alt: "Trainee group in front of the Walton campus" },
        { src: "img/experience-walton-trainee-group-with-supervisor.webp", alt: "Trainee group with a supervisor" },
        { src: "img/experience-walton-fastener-team-office.webp", alt: "With the Fastener team in the office" },
        { src: "img/experience-walton-ashrafe-at-workstation-stock-data.webp", alt: "At a workstation during the attachment", focus: "50% 50%" },
        { src: "img/experience-walton-ashrafe-at-computer-building.webp", alt: "Ashrafe in front of the Walton Computer building", focus: "50% 62%" },
        { src: "img/experience-walton-factory-loading-dock.webp", alt: "Factory building and loading dock" }
      ]
    }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "B.Sc. in Industrial & Production Engineering",
      school: "Rajshahi University of Engineering & Technology (RUET)",
      period: "Jan 2023 – Mar 2027",
      note: "CGPA 3.75"
    },
    {
      degree: "Higher Secondary Certificate, Science",
      school: "Adamjee Cantonment College, Dhaka",
      period: "2019 – 2021",
      note: "GPA 5.00"
    },
    {
      degree: "Secondary School Certificate, Science",
      school: "Parashuram Government Model Pilot High School, Feni",
      period: "Passed 2019",
      note: "GPA 5.00"
    }
  ],

  /* ---------- Leadership and campus activities ---------- */
  leadership: {
    groups: [
      {
        org: "RUET IPE Club",
        summary: "Leads publication, technical design, promotion and outreach for internal and national events, and coordinates cross-functional teams for competitions and workshops.",
        roles: [
          { role: "Secretary Publication", period: "Jul 2026 – Present", image: "img/leadership-ipe-club-secretary-publication-2026-27.webp", alt: "Secretary Publication, Executive Committee 2026-27" },
          { role: "Assistant Secretary, Research & Development", period: "Aug 2025 – Jul 2026", image: "img/leadership-ipe-club-asst-secretary-rnd-2025-26.webp", alt: "Assistant Secretary R&D, Executive Committee 2025-26" },
          { role: "Executive Member", period: "Jun 2024 – Jul 2025", image: "img/leadership-ipe-club-executive-member-2024-25.webp", alt: "Executive Member, Executive Committee 2024-25" },
          { role: "General Member", period: "Joined early 2023" }
        ]
      },
      {
        org: "IEOM RUET Student Chapter",
        summary: "Part of the founding student committee for 2026–27 under IEOM Society International. Organizes technical sessions and events with industry experts and works on chapter development.",
        roles: [
          { role: "Vice President", period: "Jul 2026 – Dec 2026", image: "img/leadership-ieom-ruet-vice-president.webp", alt: "Vice President, IEOM RUET Student Chapter 2026-27" }
        ],
        link: { label: "Chapter on Facebook", url: "https://www.facebook.com/IEOM.RUET" }
      },
      {
        org: "CrackerJack 2.0",
        summary: "Organizing committee member for a business case competition run by the RUET IPE Club, powered by SheSTEM and Sharetrip. Received a Certificate of Appreciation for the contribution.",
        roles: [
          { role: "Organizing committee member", period: "RUET IPE Club event" }
        ],
        photos: [
          { src: "img/leadership-crackerjack-2-group-photo.webp", alt: "CrackerJack 2.0 organizing team and participants" },
          { src: "img/leadership-crackerjack-2-appreciation-certificate.webp", alt: "CrackerJack 2.0 Certificate of Appreciation" }
        ]
      }
    ],
    memberships: [
      { name: "RUET Career Forum", role: "General Member", period: "Dec 2023 – Aug 2026" },
      { name: "Society of Computer Aided Designers, RUET (SCADR)", role: "General Member", period: "Jul 2023 – Aug 2026" }
    ]
  },

  /* ---------- Skills ----------
     A skill with `projects` becomes clickable and filters the Projects section.
     Use the `id` values from the projects list below. */
  skills: [
    {
      group: "Data and tools",
      items: [
        { name: "Power BI",  projects: ["adidas", "ev", "earthquake"] },
        { name: "Tableau",   projects: ["fifa", "amazon"] },
        { name: "Excel",     projects: ["sales-profit", "south-america"] },
        { name: "Python",    projects: ["retail"] },
        { name: "DAX",       projects: ["adidas"] },
        { name: "Pandas, Matplotlib, Seaborn", projects: ["retail"] },
        { name: "C" },
        { name: "PowerPoint" },
        { name: "Word" }
      ]
    },
    {
      group: "Supply chain and procurement",
      items: [
        { name: "Supply chain management" }, { name: "Procurement and sourcing" },
        { name: "Inventory management" }, { name: "Demand forecasting" },
        { name: "Logistics and distribution" }, { name: "Supplier evaluation" },
        { name: "Cost analysis" }
      ]
    },
    {
      group: "Production and operations",
      items: [
        { name: "Production planning and control" }, { name: "Lean manufacturing" },
        { name: "Line balancing" }, { name: "Work study, time and motion" },
        { name: "Facility layout planning" }, { name: "Capacity planning" },
        { name: "Process improvement" }, { name: "5S" }
      ]
    },
    {
      group: "Quality",
      items: [
        { name: "Quality control" }, { name: "Statistical process control" },
        { name: "Total quality management" }, { name: "Root cause analysis" },
        { name: "Six Sigma" }, { name: "Inspection and auditing" }
      ]
    },
    {
      group: "Engineering and design",
      items: [
        { name: "Arduino", projects: ["solar"] },
        { name: "CAD", projects: ["lamp"] },
        { name: "QFD and Kano analysis", projects: ["lamp"] },
        { name: "Material selection", projects: ["lamp"] },
        { name: "Manufacturing process planning", projects: ["lamp"] },
        { name: "Adobe Illustrator" }, { name: "Adobe Photoshop" }, { name: "Canva" }
      ]
    },
    {
      group: "Working style and languages",
      items: [
        { name: "Teamwork and leadership" }, { name: "Problem solving" },
        { name: "Communication" }, { name: "Technical presentation" },
        { name: "Bangla, native" }, { name: "English, professional working proficiency" }
      ]
    }
  ],

  /* ---------- Projects ----------
     category must be one of: "Power BI", "Tableau", "Excel", "Python", "Engineering" */
  projects: [
    {
      id: "adidas",
      title: "Adidas Sales Analysis",
      category: "Power BI",
      summary: "Interactive sales dashboard for 2020–2021 with region and date filters.",
      image: "img/projects-adidas-sales-analysis.webp",
      alt: "Adidas Sales Analysis dashboard in Power BI",
      highlights: [
        "$900M total sales and $332M operating profit, a 42% margin.",
        "2M units sold at an average price of $45.",
        "The West region contributes the most, 30% of sales.",
        "Top retailer is West Gear ($0.24bn); best-selling product is Men's Street Footwear ($0.21bn).",
        "Sales peak in July at $95M."
      ],
      skills: ["Power BI", "DAX", "Data modelling", "Dashboard design"],
      links: []
    },
    {
      id: "ev",
      title: "Electric Vehicle Analysis",
      category: "Power BI",
      summary: "Where electric vehicles are registered, which makes and models lead, and how the fleet has grown.",
      image: "img/projects-electric-vehicle-analysis.webp",
      alt: "Electric Vehicle Analysis dashboard in Power BI",
      highlights: [
        "150.48K vehicles with an average electric range of 67.88 km.",
        "78% are battery-electric (117K) and 22% plug-in hybrid (34K).",
        "Tesla leads with 69K vehicles; Model Y (29K) and Model 3 (28K) are the top models.",
        "Registrations climb sharply by model year, peaking at 37K.",
        "Filters for city, utility and vehicle type."
      ],
      skills: ["Power BI", "Data modelling", "Dashboard design"],
      links: []
    },
    {
      id: "earthquake",
      title: "Earthquake Over The Years",
      category: "Power BI",
      summary: "Magnitude, depth, location and timing of 754 recorded earthquakes.",
      image: "img/projects-earthquake-over-the-years.webp",
      alt: "Earthquake Over The Years dashboard in Power BI",
      highlights: [
        "754 earthquakes, filterable by magnitude type and year range.",
        "Magnitude distribution and depth histogram.",
        "Depth against magnitude scatter plot.",
        "World map of earthquakes by place.",
        "Counts by month and by year."
      ],
      skills: ["Power BI", "Exploratory analysis", "Dashboard design"],
      links: []
    },
    {
      id: "fifa",
      title: "FIFA World Cup, 1930 to 2014",
      category: "Tableau",
      summary: "Winners, finalists, hosts and growth of the tournament across every edition.",
      image: "img/projects-fifa-world-cup-results.webp",
      alt: "World Cup Results dashboard in Tableau",
      highlights: [
        "Brazil leads with 5 titles, followed by Italy and Germany.",
        "Matches, goals and participating nations have grown steadily over time.",
        "Germany and Brazil reach the semi-finals and finals most consistently.",
        "Host countries are spread across the world."
      ],
      skills: ["Tableau", "Data storytelling", "Data visualization"],
      links: [{ label: "Open on Tableau Public", url: "https://public.tableau.com/app/profile/ashrafe.alim/viz/WorldCupResults_17574308491320/Dashboard1" }]
    },
    {
      id: "amazon",
      title: "Amazon Sales Data, India",
      category: "Tableau",
      summary: "Orders by week, category, size, state and shipping status for Amazon India sales.",
      image: "img/projects-amazon-sales-india.webp",
      alt: "Amazon Sales Data India dashboard in Tableau",
      highlights: [
        "116,649 units across 7,190 products and 9 categories, worth INR 78.6M.",
        "94.2% of quantity shipped; the rest unshipped.",
        "Maharashtra, Karnataka and Tamil Nadu are the top three states by quantity.",
        "Sizes M, L and XL sell the most.",
        "Expedited versus standard shipping compared for the top 10 states."
      ],
      skills: ["Tableau", "Data visualization", "KPI analysis"],
      links: [{ label: "Open on Tableau Public", url: "https://public.tableau.com/app/profile/ashrafe.alim/viz/amazon_sales_data_india/Dashboard1" }]
    },
    {
      id: "sales-profit",
      title: "Sales & Profit Dashboard",
      category: "Excel",
      summary: "Slicer-driven Excel dashboard built on pivot tables.",
      image: "img/projects-sales-and-profit-dashboard.webp",
      alt: "Sales and Profit dashboard in Excel",
      highlights: [
        "Slicers for category, year and month update every chart at once.",
        "KPIs for total sales and total profit.",
        "Sales by category, profit by year, customers by year and sales by state.",
        "Top 5 customers by profit."
      ],
      skills: ["Excel", "Pivot tables", "Slicers", "Dashboard design"],
      links: []
    },
    {
      id: "south-america",
      title: "Sales Dashboard, South America",
      category: "Excel",
      summary: "KPI dashboard against targets, built from a video tutorial for practice.",
      image: "img/projects-south-america-sales-dashboard.webp",
      alt: "Sales Dashboard South America in Excel",
      highlights: [
        "Sales of $2,544M against a $3,000M target (85%), profit of $890M against $1,000M (89%), and 87 customers against 100.",
        "2021 versus 2022 monthly sales trend.",
        "Customer satisfaction radar: speed, quality, hygiene, service and availability.",
        "Map of sales by country."
      ],
      note: "Practice project. Built by following a video tutorial, using the tutorial's sample data.",
      skills: ["Excel", "Dashboard design"],
      links: []
    },
    {
      id: "retail",
      title: "Retail Sales Analysis",
      category: "Python",
      summary: "Exploratory analysis of retail transactions by customer age, gender and product category.",
      image: "img/projects-retail-sales-python.webp",
      alt: "Monthly sales trend chart from the retail sales analysis notebook",
      highlights: [
        "Cleaned and explored a retail transactions dataset with Pandas.",
        "Compared sales across customer gender, age group and product category.",
        "Monthly sales trend charts with Matplotlib and Seaborn."
      ],
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data cleaning"],
      links: [{ label: "Notebook on GitHub", url: "https://github.com/Ashrafe-Apurba/Sales_data_analysis_using_python" }]
    },
    {
      id: "lamp",
      title: "Voice-Controlled Lamp",
      category: "Engineering",
      summary: "A working product prototype taken from customer needs to a built lamp.",
      image: "img/projects-voice-controlled-lamp-team.webp",
      alt: "Project team with the lit lamp prototype",
      highlights: [
        "Used product design methods, including QFD and Kano analysis.",
        "CAD model of the lamp, material selection and manufacturing process planning.",
        "Built a functional prototype."
      ],
      skills: ["Product design", "QFD", "Kano analysis", "CAD", "Material selection"],
      gallery: [
        { src: "img/projects-voice-controlled-lamp-team.webp", alt: "Project team with the lit lamp prototype" },
        { src: "img/projects-voice-controlled-lamp-render.webp", alt: "CAD render of the lamp" }
      ],
      links: []
    },
    {
      id: "solar",
      title: "Solar Tracking & Automatic Cooling System",
      category: "Engineering",
      summary: "Arduino prototype that follows the sun and cools the panel when it heats up.",
      image: "img/projects-solar-tracker-team.webp",
      alt: "Project team presenting the solar tracker prototype",
      highlights: [
        "LDR light sensors guide a motor so the panel faces the strongest light.",
        "Temperature-based cooling starts automatically when the panel gets hot.",
        "Built and demonstrated as a working prototype."
      ],
      skills: ["Arduino", "LDR sensors", "Motor control", "Prototyping"],
      gallery: [
        { src: "img/projects-solar-tracker-team.webp", alt: "Project team presenting the solar tracker prototype" },
        { src: "img/projects-solar-tracker-prototype.webp", alt: "Close-up of the solar tracker prototype" }
      ],
      links: []
    }
  ],

  /* ---------- Achievements ----------
     Optional `layout: "wide"` puts the picture under the text at full width (good for landscape photos). */
  achievements: [
    {
      title: "Research paper published in Supply Chain Insider",
      meta: "Volume 17, Issue 01 · October 2025",
      text: "A Hybrid Approach to Logistics Optimization: Combining DEMATEL with Classical Transportation Algorithms in the Steel Industry. Co-authored with Shamsul Arafat Chowdhury, Md. Hasin Abrar Soumik, Syeda Sadia Zaman and Sumaiya Rashid Shoshi.",
      images: [{ src: "img/achievements-research-paper-supply-chain-insider.webp", alt: "First page of the published paper" }],
      link: { label: "Read the article", url: "https://lnkd.in/ghfWMJ3R" }
    },
    {
      title: "BIHRM Supply Chain Research Challenge 5.0",
      meta: "Top 10 teams · 90% ACSCP scholarship",
      text: "Placed among the top 10 teams and won a 90% scholarship for the Affiliate of Chartered Supply Chain Professional (ACSCP) program, awarded by BIHRM.",
      images: [{ src: "img/achievements-bihrm-challenge-90-percent-scholarship.webp", alt: "BIHRM Supply Chain Research Challenge 5.0 result graphic" }]
    },
    {
      title: "ISCEA Prize Global Supply Chain Case Competition 2026",
      meta: "60% CSCA scholarship",
      text: "Our team won a 60% scholarship toward the Certified Supply Chain Analyst (CSCA) certification.",
      images: [
        { src: "img/achievements-iscea-60-percent-scholarship-team.webp", alt: "ISCEA 60% scholarship winners, RUET IPE Club team" }
      ]
    }
  ],

  /* ---------- Certifications ----------
     Add `image` to show a thumbnail, `url` for a verification link. */
  certifications: [
    {
      name: "Supply Chain Operations and Management",
      issuer: "Amazon Web Services, via Coursera", date: "Oct 2026", id: "G9IUZXNCECJI",
      summary: "How supply chain operations are structured across lifecycle stages, how enterprise systems support execution, inventory, procurement and logistics workflows for material flow, and using operational data to find issues. Skills: order management, inventory control, reverse logistics, supply chain systems, ERP.",
      image: "img/certificates-coursera-supply-chain-operations-and-management.webp",
      url: "https://coursera.org/verify/G9IUZXNCECJI"
    },
    {
      name: "International Supply Chains and Logistics",
      issuer: "University of Colorado Boulder, via Coursera", date: "Oct 2026",
      summary: "Global supply chains as networks, the SCOR model, sourcing and outsourcing (onshoring, nearshoring, offshoring), supplier evaluation, supply network design and risk, warehousing, international transport modes and logistics intermediaries.",
      image: "img/certificates-coursera-international-supply-chains-and-logistics.webp",
      url: "https://coursera.org/verify/98Q7OLRAK0SH"
    },
    {
      name: "Diploma in Operations Management (Ops)",
      issuer: "Alison", date: "Oct 2026",
      image: "img/certificates-alison-diploma-operations-management.webp",
      url: "https://alison.com/verify/07a72206dc"
    },
    {
      name: "Mastering Data Analysis Using Microsoft Excel",
      issuer: "Alison", date: "Oct 2026",
      image: "img/certificates-alison-mastering-data-analysis-excel.webp",
      url: "https://alison.com/verify/b8beeb3a26"
    },
    {
      name: "Mastering the Basics of Microsoft Excel",
      issuer: "Alison", date: "Oct 2026",
      image: "img/certificates-alison-mastering-basics-excel.webp"
    },
    {
      name: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy", date: "Sep 2024", id: "1048528",
      image: "img/certificates-scrum-fundamentals-certified-sfc.webp",
      url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1048528"
    },
    {
      name: "Six Sigma Yellow Belt",
      issuer: "6sigmastudy", date: "Jul 2024", id: "893156",
      image: "img/certificates-six-sigma-yellow-belt.webp"
    },
    {
      name: "Introduction to Python",
      issuer: "DataCamp", date: "Oct 2024", id: "36,635,252",
      image: "img/certificates-datacamp-introduction-to-python.webp"
    }
  ],

  /* ---------- Industrial visits ---------- */
  visits: [
    {
      place: "PRAN-RFL Group, Natore",
      date: "28 November 2024",
      text: "The IPE '21 batch's first industrial visit. We toured the Choco Bean and Noodles production lines of a unit that runs 15 lines, and saw time, process and labour synchronised while quality, safety and hygiene were maintained.",
      photos: [
        { src: "img/industrial-visits-pran-rfl-group-photo-admin-building.webp", alt: "IPE batch group photo in front of the administrative building" },
        { src: "img/industrial-visits-pran-rfl-ashrafe-with-cartons.webp", alt: "Ashrafe standing in front of stacked cartons" }
      ]
    },
    {
      place: "Square Toiletries Limited, Pabna",
      date: "18 September 2025",
      text: "Industrial Visit 2.0, which finally went ahead after being postponed. We went through the production lines and saw how quality control and quality assurance testing in the lab keeps hygiene and standards in place.",
      photos: [
        { src: "img/industrial-visits-industrial-visit-group-photo.webp", alt: "IPE batch group photo during the industrial visit" },
        { src: "img/industrial-visits-square-pabna-ashrafe-at-factory.webp", alt: "Ashrafe at the Square Toiletries factory premises, Pabna" }
      ]
    }
  ]
};
