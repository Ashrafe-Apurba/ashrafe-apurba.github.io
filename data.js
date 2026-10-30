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
    role: "Industrial & Production Engineering, RUET | Operations, Supply Chain & Analytics Enthusiast",
    status: "Open To Opportunities in Industrial Engineering, Operations & Supply Chain",
    intro:
      "I apply engineering methods and data-driven analysis to understand operational problems, improve processes and support better business decisions. My experience spans industrial training, analytics projects, supply chain research and student leadership.",
    photo: "img/profile-portrait.webp",
    photoAlt: "Portrait of Ashrafe Bin Alim",
    cv: "assets/Ashrafe-Bin-Alim-CV.pdf",
    titleBlock: [
      { label: "Discipline",   value: "Industrial & Production Engineering" },
      { label: "Institution",  value: "Rajshahi University of Engineering & Technology" },
      { label: "Graduation",   value: "January 2027" },
      { label: "CGPA",         value: "3.75" },
      { label: "Location",     value: "Rajshahi, Bangladesh" }
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
      "I’m an Industrial & Production Engineering student at Rajshahi University of Engineering & Technology (RUET), passionate about solving real-world problems through engineering principles, data analysis, and continuous improvement.",
      "My interests span industrial engineering, production, supply chain management, operations, and business analytics. I enjoy exploring how processes work, identifying opportunities for improvement, and turning data into insights that support better decisions. Through projects using Python, Power BI, Tableau, and Excel, I have developed practical experience in data analysis, visualization, and problem-solving, alongside academic work in supply chain and inventory management.",
      "Beyond technical work, I have been actively involved in student leadership and professional initiatives at RUET, including the RUET IPE Club and the IEOM RUET Student Chapter. These experiences have strengthened my teamwork, communication, coordination, and organizational skills.",
      "I aim to bring together analytical thinking, engineering knowledge, and a willingness to learn to contribute to meaningful business and operational challenges. I’m particularly interested in opportunities across manufacturing, supply chain, operations, quality, and analytics where I can learn from experienced professionals, take on responsibilities, and grow through practical experience.",
      "I believe in learning by doing, solving problems systematically, and continuously improving the way things work."
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
      period: "Jan 2023 – Jan 2027",
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
        { name: "Excel",     projects: ["abc", "kpi", "eoq", "fleet", "sales-profit", "south-america"] },
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
      id: "abc",
      title: "ABC Analysis for Inventory Management",
      category: "Excel",
      tag: "Data Analytics · 2026",
      summary: "Ranked and classified 552 inventory items into A, B and C classes by annual sales value, with a Pareto curve showing where revenue is concentrated.",
      image: "img/projects-excel-abc-pareto-chart.webp",
      alt: "ABC analysis Pareto curve built in Excel",
      /* Optional: extra pictures. The card cycles through them on hover (swipe on touch screens) and the details view shows them as a gallery. First one is the main picture. */
      images: [
        { src: "img/projects-excel-abc-pareto-chart.webp", alt: "ABC analysis Pareto curve with A, B and C zones" },
        { src: "img/projects-excel-abc-summary-sheet.webp", alt: "ABC summary table and ranked item list in Excel" },
        { src: "img/projects-excel-abc-data-sheet.webp", alt: "12-month sales history dataset with ABC class column" },
        { src: "img/projects-excel-abc-concept-diagram.webp", alt: "Concept diagram of ABC classification (illustrative)" }
      ],
      /* Optional: headline numbers shown as tiles in the details view */
      stats: [
        { value: "552", label: "items analyzed" },
        { value: "$393.1M", label: "total sales" },
        { value: "36", label: "A items = 40% of revenue" },
        { value: "149", label: "A + B items = 80% of revenue" },
        { value: "403", label: "C items = 20% of revenue" }
      ],
      /* Optional: structured sections for the details view (use text, points, or steps) */
      sections: [
        { title: "Project overview", text: "The organization needed a systematic way to prioritize inventory items based on their contribution to annual revenue. This project builds an Excel-based ABC analysis that ranks and classifies 552 items into A, B and C categories by annual sales value." },
        { title: "Objectives", points: [
          "Rank inventory items by their contribution to annual revenue.",
          "Classify items into A, B and C categories using revenue thresholds of 40% and 80%.",
          "Support more focused inventory control, purchasing and review decisions."
        ] },
        { title: "Methodology", text: "Sales history and forecast data were consolidated into a 12-month sales dataset. PivotTables, ranking and cumulative percentage calculations were used to classify items against the 40% and 80% revenue thresholds." },
        { title: "Implementation", steps: [
          "Consolidated sales history and forecast data into a 12-month sales dataset.",
          "Summarized annual sales value per item with a PivotTable and ranked items from highest to lowest.",
          "Calculated cumulative percentages of items and of revenue.",
          "Assigned each item to class A, B or C using the 40% and 80% thresholds.",
          "Built a summary table and a Pareto curve to visualize revenue concentration.",
          "Linked the classifications back to the source data for filtering and analysis."
        ] },
        { title: "Key features", points: [
          "Ranked item list with item share and revenue share for every item.",
          "Summary table of items and revenue by class.",
          "Pareto curve with the A, B and C zones marked.",
          "Class column linked to the source data, so items can be filtered by class."
        ] },
        { title: "Results and outcomes", text: "The 552 items represent $393.1 million in total sales. 36 A items (7% of the portfolio) contribute 40% of revenue, and 149 A and B items (27%) contribute 80%. The remaining 403 C items (73%) account for the last 20% of revenue, establishing a clear basis for differentiated inventory control." }
      ],
      highlights: [],
      skills: ["Microsoft Excel", "PivotTables", "Formulas", "Cumulative analysis", "Pareto chart"],
      links: []
    },
    {
      id: "kpi",
      title: "Supply Chain & Inventory KPIs in Excel",
      category: "Excel",
      tag: "Supply Chain Management · Data Analytics · 2026",
      summary: "An Excel workbook that calculates and interprets six supply chain KPIs, from fill rate and inventory turnover to lead time and warehouse occupancy.",
      image: "img/projects-excel-kpi-fill-rate.webp",
      alt: "Fill rate KPI sheet in Excel",
      images: [
        { src: "img/projects-excel-kpi-fill-rate.webp", alt: "Fill rate sheet with color-coded results" },
        { src: "img/projects-excel-kpi-inventory-turn.webp", alt: "Inventory turn sheet showing stock turn in days and cycles" },
        { src: "img/projects-excel-kpi-inventory-accuracy.webp", alt: "Inventory accuracy sheet comparing system and physical stock" },
        { src: "img/projects-excel-kpi-lead-time.webp", alt: "Lead time sheet comparing contract and real delivery dates" },
        { src: "img/projects-excel-kpi-occupancy.webp", alt: "Warehouse occupancy sheet by sector" },
        { src: "img/projects-excel-kpi-availability.webp", alt: "Availability sheet by product status" }
      ],
      stats: [
        { value: "74%", label: "fill rate" },
        { value: "2.6", label: "inventory turns (about 140 days)" },
        { value: "50%", label: "inventory accuracy" },
        { value: "37.4 days", label: "average actual lead time (+7.4 vs contract)" },
        { value: "77%", label: "warehouse occupancy" },
        { value: "63%", label: "availability rate" }
      ],
      sections: [
        { title: "Project overview", text: "Supply chain performance depends on effective inventory control, order fulfillment, warehouse utilization and supplier delivery reliability. This project evaluates six key performance indicators (KPIs) to show how operational data can be used to assess performance and identify potential improvement areas." },
        { title: "Objectives", points: [
          "Evaluate six supply chain KPIs that cover inventory, fulfillment, delivery and warehouse performance.",
          "Show how operational data can be used to assess performance.",
          "Identify potential areas for improvement."
        ] },
        { title: "Methodology", points: [
          "Availability rate: evaluated product availability using defined stock availability measures.",
          "Fill rate: calculated the percentage of ordered quantities fulfilled.",
          "Inventory turnover: measured turnover cycles and estimated inventory holding days using COGS and average inventory value.",
          "Inventory accuracy: compared system inventory records with physical stock counts.",
          "Lead time: compared contractual and actual delivery lead times to identify delays.",
          "Occupancy rate: measured warehouse capacity utilization using available and occupied capacity."
        ] },
        { title: "Key features", points: [
          "Structured data tables, one sheet per KPI.",
          "Formula-driven calculations and summary metrics.",
          "Color-coded performance indicators that highlight weak items at a glance."
        ] },
        { title: "Results and outcomes", points: [
          "74% fill rate: 1,205 units supplied against 1,625 units ordered.",
          "2.6 inventory turnover cycles: approximately 140 inventory days, based on the workbook's annual period.",
          "50% inventory accuracy: only 5 of 10 checked items had exact matches between system records and physical stock counts.",
          "37.4-day average actual lead time: exceeded the 30-day contractual lead time by an average of 7.4 days.",
          "77% warehouse occupancy: 50,300 capacity units used out of 65,000 available.",
          "63% availability rate across products."
        ] },
        { title: "Areas for further investigation", text: "These findings highlight potential areas for further investigation, including order fulfillment gaps, inventory discrepancies, supplier delivery delays and warehouse capacity utilization." }
      ],
      highlights: [],
      skills: ["Microsoft Excel", "Excel formulas", "KPI calculation", "Conditional formatting", "Data analysis"],
      links: []
    },
    {
      id: "eoq",
      title: "EOQ, Reorder Point & Safety Stock in Inventory Control",
      category: "Excel",
      tag: "Inventory Management · 2026",
      summary: "An Excel inventory control model that calculates the Economic Order Quantity (EOQ), reorder point and safety stock for three manufacturing raw materials. A live stock-monitoring chart and status flags show when to reorder.",
      image: "img/projects-excel-eoq-chart.webp",
      alt: "Current stock against safety stock and reorder point chart",
      images: [
        { src: "img/projects-excel-eoq-chart.webp", alt: "Chart of current stock against safety stock and reorder point" },
        { src: "img/projects-excel-eoq-monitor.webp", alt: "Stock Monitor table with OK, REORDER NOW and CRITICAL status flags" },
        { src: "img/projects-excel-eoq-inputs.webp", alt: "EOQ Calc sheet: inputs, holding cost and ordering cost" },
        { src: "img/projects-excel-eoq-results.webp", alt: "EOQ Calc sheet: EOQ results and reorder policy" }
      ],
      stats: [
        { value: "3", label: "raw materials modelled" },
        { value: "86 · 75 · 35", label: "EOQ in tonnes: steel, ABS, copper tube" },
        { value: "84.8 · 90.8 · 40.8", label: "reorder points in tonnes" },
        { value: "30 · 25 · 12", label: "safety stock in tonnes" },
        { value: "15%", label: "total annual holding rate" },
        { value: "3 status flags", label: "OK (steel), REORDER NOW (ABS), CRITICAL (copper)" }
      ],
      sections: [
        { title: "Project overview", text: "Manufacturers need to decide how much to order and when to order. This project builds a simple, reusable Excel model for three raw materials common in appliance manufacturing: CRCA steel sheet, ABS plastic granules and copper tube for compressors. It applies the Wilson EOQ model and extends it with reorder-point and safety-stock logic. It also adds a monitoring dashboard, so the EOQ calculation becomes a daily decision tool." },
        { title: "Objectives", points: [
          "Calculate the cost-minimising order quantity for each raw material.",
          "Build a realistic ordering-cost and holding-cost structure for each item.",
          "Set a reorder point and safety stock so production is not interrupted during supplier lead time.",
          "Monitor current stock against safety stock and the reorder point, and flag items that need action."
        ] },
        { title: "Methodology", points: [
          "Holding cost: purchase price × the sum of storage, insurance, cost of money and shrinkage percentages (15% in total).",
          "Ordering cost: the hours spent on each ordering step (order placement, validation, supplier communication, follow-up, reception, incoming inspection, storage and payment) × an hourly rate, plus fixed costs per order for LC, freight and customs.",
          "EOQ = √(2 × D × TC / HC), rounded up to whole units.",
          "Reorder point = daily demand × supplier lead time + safety stock.",
          "Maximum stock = safety stock + EOQ. A check cell confirms the ROP stays below this level."
        ] },
        { title: "Implementation", steps: [
          "EOQ Calc sheet: an input-driven calculation for all three items, with blue input cells and formula cells.",
          "It gives EOQ, orders per year, order cycle in days, annual ordering cost, annual holding cost and total cost.",
          "Stock Monitor sheet: a table of current stock, safety stock, ROP, EOQ, maximum stock, status, suggested order quantity and days of cover.",
          "Status logic: CRITICAL when stock is at or below safety stock, REORDER NOW when stock is at or below the ROP, and OK otherwise, with colour-coded conditional formatting.",
          "Chart: a combination column chart with markers. Columns show current stock, and markers show safety stock and the reorder point for each item."
        ] },
        { title: "Key features", points: [
          "Fully formula-driven, so changing any input updates the EOQ, ROP, status and chart.",
          "Uses a detailed ordering-cost build-up instead of a single assumed figure.",
          "Includes a ROP vs. maximum-stock check.",
          "Gives an instant visual and colour-coded view of which items to order."
        ] },
        { title: "Results and outcomes", points: [
          "EOQ: 86 tonnes for steel, 75 for ABS and 35 for copper tube.",
          "Reorder points: 84.8, 90.8 and 40.8 tonnes, with safety stocks of 30, 25 and 12 tonnes.",
          "Annual ordering and holding costs are nearly equal for each item, which confirms the cost-minimising order quantity.",
          "The monitor shows steel as OK, ABS as REORDER NOW and copper as CRITICAL. This demonstrates how the model drives purchasing decisions."
        ] },
        { title: "Practical use", text: "This approach suits purchasing and production-planning teams. They can use it to set order sizes, reorder triggers and buffer stock for raw materials, and to compare ordering cost against inventory-holding cost." }
      ],
      highlights: [],
      skills: ["Microsoft Excel", "Excel formulas", "EOQ modelling", "Reorder point and safety stock", "Cost analysis", "Conditional formatting", "Combination charts", "Dashboard design"],
      links: []
    },
    {
      id: "fleet",
      title: "Fleet Management and Logistics Performance Dashboard",
      category: "Excel",
      tag: "Data Analytics · Logistics Operations · 2026",
      summary: "An interactive Excel dashboard that summarizes a year of fleet trips, distances, labor costs and cargo so a fleet manager can review them at a glance.",
      image: "img/projects-excel-fleet-dashboard.webp",
      alt: "Fleet management and logistics dashboard in Excel",
      images: [
        { src: "img/projects-excel-fleet-dashboard.webp", alt: "Fleet management dashboard with KPI cards and charts" },
        { src: "img/projects-excel-fleet-excel-view.webp", alt: "The dashboard sheet as seen in Excel, with driver and month filters" },
        { src: "img/projects-excel-fleet-calc.webp", alt: "Calc sheet with SUMIFS summaries by month, classification and cargo" },
        { src: "img/projects-excel-fleet-database.webp", alt: "Database sheet with the trip log" }
      ],
      stats: [
        { value: "$27,200", label: "total expenses" },
        { value: "24", label: "trips" },
        { value: "868 km", label: "total distance" },
        { value: "314 tons", label: "cargo carried" },
        { value: "8 · 16", label: "return and one-way trips" },
        { value: "44% · 56%", label: "salaries and wages share of expenses" }
      ],
      sections: [
        { title: "Project overview", text: "Fleet trip records are often kept in one long table, which makes costs, workload and trip patterns hard to see quickly. This project asks how a year of trips, distances, labor costs and cargo can be summarized so a fleet manager can review them at a glance. I designed and built an interactive Excel dashboard for a self-learning project, using an imaginary dataset of 24 trips for 2022. The layout was modeled on a reference dashboard design, and I set up the data table, the calculation logic, the charts and the filters myself." },
        { title: "Methodology", points: [
          "Structured the trip log with driver, buddy, vehicle, distance, trip classification, route type, cargo, weight, wages and salaries.",
          "Calculated total expenses as wages plus salaries.",
          "Summarized the data with SUMIFS and COUNTIFS formulas on a separate calculation sheet.",
          "Added driver and month dropdown filters using data validation, with conditional formatting to highlight the selection.",
          "Visualized the results with KPI cards and charts for monthly expenses, monthly trips, wage and salary split, trip classification, income by classification and cargo types."
        ] },
        { title: "Key features", points: [
          "Driver and month dropdown filters that update the dashboard.",
          "KPI cards for expenses, salaries, wages, trips, weight and distance.",
          "Charts for monthly expenses, monthly trips, wage and salary split, trip classification, income by classification and cargo types.",
          "Separate Database, Calc and Dashboard sheets."
        ] },
        { title: "Results and outcomes", points: [
          "Total expenses were USD 27,200: USD 12,100 in salaries (44%) and USD 15,100 in wages (56%).",
          "The 24 trips covered 868 km and carried 314 tons. Of these, 8 were return trips and 16 were one-way, and 5 used hired transportation.",
          "By classification, 16 trips were Close, 6 were Far and 2 were Regular.",
          "March (USD 4,000) and October (USD 3,700) were the highest-expense months.",
          "The two drivers completed 12 trips each, and the two cargo types, woodpellet and woodchip, had 12 trips each."
        ] }
      ],
      note: "Self-learning project. The figures come from simulated data, so they show what the dashboard can reveal rather than real operational results.",
      highlights: [],
      skills: ["Microsoft Excel", "SUMIFS", "COUNTIFS", "Data validation", "Conditional formatting", "Charts", "Dashboard design"],
      links: []
    },
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
      tag: "Product Design & Development",
      summary: "A product development project that took a voice-controlled lamp from market research and customer needs to a working prototype.",
      image: "img/projects-voice-controlled-lamp-team.webp",
      alt: "Project team with the lit lamp prototype",
      sections: [
        { title: "What I did", points: [
          "Conducted market research, competitor analysis and customer surveys to identify market gaps and user requirements.",
          "Applied product development methodologies, including idea generation, QFD and Kano analysis, to translate customer needs into design specifications.",
          "Developed a functional prototype using CAD, material selection and manufacturing process planning."
        ] }
      ],
      highlights: [],
      skills: ["Market research", "Competitor analysis", "Customer surveys", "Idea generation", "QFD", "Kano analysis", "CAD", "Material selection", "Manufacturing process planning"],
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
    },
    {
      title: "Research paper published in Supply Chain Insider",
      meta: "Volume 17, Issue 01 · October 2025",
      text: "A Hybrid Approach to Logistics Optimization: Combining DEMATEL with Classical Transportation Algorithms in the Steel Industry. Co-authored with Shamsul Arafat Chowdhury, Md. Hasin Abrar Soumik, Syeda Sadia Zaman and Sumaiya Rashid Shoshi.",
      images: [{ src: "img/achievements-research-paper-supply-chain-insider.webp", alt: "First page of the published paper" }],
      link: { label: "Read the article", url: "https://lnkd.in/ghfWMJ3R" }
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
