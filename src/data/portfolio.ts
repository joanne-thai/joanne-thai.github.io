import {
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  MessageSquareMore,
} from "lucide-react";

export interface ProjectDetailContent {
  subtitle: string;
  overview: string;
  businessProblem: string;
  dataset: string;
  approach: string[];
  keyInsights: string[];
  toolsUsed: string[];
  recommendations: string[];
}

export interface Project {
  id: string;
  index: string;
  slug: string;
  title: string;
  category: "Power BI" | "SQL" | "Python" | "SQL / Python";
  shortDescription: string;
  tools: string;
  analysis: string;
  thumbnail: string[];
  githubUrl?: string;
  detailPageEnabled: boolean;
  powerbiEmbedUrl?: string;
  images: string[];
  badge?: string;
  detail?: ProjectDetailContent;
}

export const portfolio = {
  profile: {
    name: "Joanne Thai",
    role: "Data Analyst turning messy business questions into clear, decision-ready insights.",
    intro:
      "I build practical dashboards, reporting workflows, and analysis narratives that help teams move from raw data to confident action. My focus is on pairing sound analysis with calm, readable communication.",
    avatar: "/images/avatar-joanne.svg",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/joanne-thai",
        icon: Linkedin,
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/joanne-thai",
        icon: Github,
        external: true,
      },
      {
        label: "Email",
        href: "mailto:joannethai.work@gmail.com",
        icon: Mail,
      },
      {
        label: "Coffee Chat",
        href: "https://calendly.com/joannethai-work/letschat",
        icon: MessageSquareMore,
        external: true,
      },
    ],
  },
  about: {
    summary:
      "Business Analytics graduate with hands-on experience turning stakeholder objectives into data-driven insights. Proficient in SQL, Excel, Power BI, and SAS Viya, with foundational Python skills for data analysis. Strong track record of delivering intuitive dashboards and reports that drive decision-making and enable meaningful business conversations.",
    education: {
      degree: "Master of Business Analytics",
      university: "University of Wollongong",
      duration: "2023 - 2024",
      highlights: [
        "Built end-to-end dashboarding and forecasting projects across retail and operations use cases.",
        "Combined quantitative coursework with communication-focused presentations for audiences.",
      ],
    },
  },
  projects: [
    {
      id: "coffee-sales-powerbi",
      index: "01",
      slug: "coffee-sales-powerbi",
      title: "Coffee Sales Analytics: Pricing, Demand & Product Insights",
      category: "Power BI",
      shortDescription:
        " Investigated revenue performance by analysing store location, product mix, pricing behaviour, and time-based demand patterns. Identified key revenue drivers and optimisation opportunities in product portfolio and pricing strategy.",
      tools: "Power BI",
      analysis: "EDA, trend analysis, pricing strategy, demand analysis, product segmentation, KPI design",
      thumbnail: ["/images/1.png", "/images/2.png"],
      githubUrl: "https://github.com/joanne-thai/powerbi_projects/tree/main/Coffee%20Sales",
      detailPageEnabled: true,
      powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzlmYjhiMGItMjBkZC00ZGQ1LTgzODgtNjAzYWI2NDQyNTU5IiwidCI6IjhiNmM0ZDY5LTc5OTMtNDgyYy04OGU5LTZmOWM5ZjlhMDBiOSJ9",
      images: ["/images/1.png", "/images/2.png"],
      badge: "Featured Project",
      detail: {
        subtitle: "Pinpointing which pricing and category shifts could unlock revenue growth across stores.",
        overview:
          "This project transformed coffee shop transaction data into a decision-ready view of revenue drivers, product performance, pricing behaviour, and time-based demand patterns across multiple store locations.",
        businessProblem:
          "The business needed a clearer view of which products, pricing patterns, and operating periods were driving sales performance. Leadership wanted to understand where revenue was concentrated, where demand was sensitive to price, and how store-level performance differed across locations and time windows.",
        dataset:
          "The dataset contains transactional sales across multiple stores, including product details, quantities sold, unit prices, timestamps, and store locations. A star schema model was built around a central fact table with supporting product, store, date, and time dimensions, plus a derived product summary table for segmentation analysis.",
        approach: [
          "Modelled the data using a star schema with `fact_Sales` supported by product, store, date, and time dimensions.",
          "Built DAX measures for sales, orders, quantity sold, average unit price, and other comparative KPIs.",
          "Used correlation analysis and quadrant-style product segmentation to examine price, demand, and revenue relationships.",
          "Designed three analytical views covering monthly performance, product insights, and sales drivers with short-term forecasting.",
        ],
        keyInsights: [
          "Revenue is highly concentrated in coffee and tea products, with a small set of top-performing items driving most sales.",
          "Higher prices tend to reduce demand at the product level, but stores with higher average pricing still generate stronger revenue overall.",
          "Sales are stable with a slight upward trend, with strongest demand in the morning and occasional evening sales spikes.",
        ],
        toolsUsed: ["Power BI", "Python", "Excel", "DAX"],
        recommendations: [
          "Focus product and promotional attention on high-performing core items while reviewing weaker products for removal, bundling, or repositioning.",
          "Maintain pricing strength on leading products and test targeted pricing changes only on weaker items with softer demand.",
          "Align staffing and inventory planning with peak morning demand and use targeted campaigns to capture evening sales opportunities.",
        ],
      },
    },
    {
      id: "emergency-room-operations-analytics-powerbi",
      index: "02",
      slug: "emergency-room-operations-analytics-powerbi",
      title: "Emergency Room Operations Analytics",
      category: "Power BI",
      shortDescription:
        "Analysed emergency room operations to identify demand patterns, bottlenecks, and drivers of patient experience, highlighting opportunities to improve patient flow, optimize staffing, and enhance service quality.",
      tools: "Power  BI",
      analysis: "Time-series analysis, operational flow analysis, correlation analysis, demographic segmentationn",
      thumbnail: ["/images/3.png", "/images/4.png"],
      githubUrl: "https://github.com/joanne-thai/powerbi_projects/tree/main/Hospital%20ER",
      detailPageEnabled: true,
      powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzgzYTQ2ZmItYTJiZS00NGFkLWI3ZjgtYzVlOWZjZDY1MDFkIiwidCI6IjhiNmM0ZDY5LTc5OTMtNDgyYy04OGU5LTZmOWM5ZjlhMDBiOSJ9",
      images: ["/images/3.png", "/images/4.png"],
      detail: {
        subtitle: "Understanding patient flow, waiting times, and referral patterns to improve ER operations.",
        overview:
          "This project analysed emergency room operations to surface demand patterns, patient experience drivers, and workflow bottlenecks across more than a year of patient visits.",
        businessProblem:
          "The ER needed a clearer operational picture of when demand peaked, how waiting time related to satisfaction, and which patient groups and referral pathways created the most pressure on service delivery.",
        dataset:
          "The dataset spans April 2019 to October 2020 and includes 9,216 patient visits. It captures visit timing, admission status, waiting time, satisfaction score, patient demographics, and referral activity, modelled with a main `Hospital ER` table supported by `DimDate` and `DimTime`.",
        approach: [
          "Built operational KPIs in Power BI to track patient volume, waiting time, satisfaction, admissions, and referral counts.",
          "Used time-based analysis to identify demand peaks by weekday and hour.",
          "Segmented patients by age, gender, and referral outcome to understand service mix and escalation patterns.",
          "Tested the relationship between waiting time and satisfaction using patient-level correlation analysis.",
        ],
        keyInsights: [
          "Demand is steady across the period, with the busiest periods occurring on Mondays and during midday to evening hours.",
          "Average waiting time is about 35 minutes and average satisfaction is 5.47 out of 10, but waiting time alone shows almost no linear relationship with satisfaction.",
          "Most visits do not require referrals, while General Practice and Orthopedics account for the largest share of referred cases.",
        ],
        toolsUsed: ["Power BI", "DAX", "Data Modelling", "Data Visualization"],
        recommendations: [
          "Align staffing and operational resources more closely to midday and early-week demand peaks.",
          "Introduce or expand fast-track pathways for non-critical patients to reduce congestion and improve flow.",
          "Improve patient experience through clearer communication and service consistency, not just shorter wait times.",
        ],
      },
    },
    {
       id: "pizza-sales-analytics-powerbi",
      index: "03",
      slug: "pizza-sales-analytics-powerbi",
      title: "Pizza Sales & Product Performance Analytics",
      category: "Power BI",
      shortDescription:
        "Analysed sales performance and product dynamics to uncover revenue drivers, demand patterns, and menu inefficiencies, enabling data-driven decisions around pricing, product mix, and operational optimization.",
      tools: "Power BI",
      analysis: "Time-series analysis, product performance analysis, menu engineering segmentation, demand vs revenue analysis",
      thumbnail: ["/images/5.png", "/images/6.png"],
      githubUrl: "https://github.com/joanne-thai/powerbi_projects/tree/main/Pizza%20Sales",
      detailPageEnabled: true,
      powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZmI2M2FiNDgtYTIzMy00NmIzLWFjZWUtNzk2YzZiZjU1NWViIiwidCI6IjhiNmM0ZDY5LTc5OTMtNDgyYy04OGU5LTZmOWM5ZjlhMDBiOSJ9",
      images: ["/images/5.png", "/images/6.png"],
      detail: {
        subtitle: "Linking sales patterns, menu performance, and ingredient usage to smarter product decisions.",
        overview:
          "This project turned a full year of pizza sales transactions into a clear view of revenue drivers, customer order behaviour, menu efficiency, and operational demand patterns.",
        businessProblem:
          "The business needed to understand which products and categories were truly driving revenue, whether customer demand translated into value, and where menu and inventory inefficiencies were limiting performance.",
        dataset:
          "The dataset covers a full year of operations, generating about $817.9K in revenue from 21K orders and 50K pizzas sold. It includes product details, quantities, timestamps, and ingredient-level information, with derived summary tables supporting product, ingredient, and menu engineering analysis.",
        approach: [
          "Built KPI measures for revenue, orders, pizzas sold, average pizzas per order, and average order value.",
          "Analysed sales by daypart, weekday, category, and product to isolate stable demand patterns and peak periods.",
          "Used menu engineering and demand-versus-revenue comparisons to classify product performance.",
          "Evaluated ingredient concentration and low-usage components to identify inventory and procurement inefficiencies.",
        ],
        keyInsights: [
          "Sales are stable through the year, with strongest performance during lunch hours and at the end of the week, especially Fridays.",
          "Customers frequently buy multiple pizzas per order, with more than 60% of orders containing multiple items.",
          "A small group of products drives most revenue, while several menu items and ingredients contribute little and create portfolio inefficiency.",
        ],
        toolsUsed: ["Power BI", "DAX", "Data Modelling", "Data Visualization"],
        recommendations: [
          "Staff and prep more aggressively for lunch and end-of-week peaks to support faster service during high-demand periods.",
          "Use bundles and upsell offers to build on strong multi-item ordering behaviour and increase average order value.",
          "Refine the menu by prioritising high-performing pizzas and reducing low-value products and ingredients that add complexity without strong revenue contribution.",
        ],
      },
    },
    
    {
      id: "netflix-user-behavior-analysis",
      index: "04",
      slug: "netflix-user-behavior-analysis",
      title: "Netflix User Behavior Analysis: SQL & Python Workflow",
      category: "SQL / Python",
      shortDescription:
        "Analysed Netflix-style user behavior data across SQL and Python workflows to uncover watch-time patterns, content preferences, and viewing differences by subscription tier, genre, device, and geography.",
      tools: "MySQL, Python, Pandas, Matplotlib",
      analysis:
        "Data cleaning, exploratory analysis, watch-time aggregation, subscription segmentation, genre analysis, device-level review analysis",
      thumbnail: [
        "/images/project-netflix-subscription-watchtime.png",
        "/images/project-netflix-genre-watchtime.png",
      ],
      githubUrl: 'https://github.com/joanne-thai/my_sequels/tree/main/netflix_behavior_2025',
      detailPageEnabled: false,
      images: [
        "/images/project-netflix-subscription-watchtime.png",
        "/images/project-netflix-genre-watchtime.png",
      ],
    },
    {
      id: "retail-sales-performance-analysis-sql",
      index: "05",
      slug: "retail-sales-performance-analysis-sql",
      title: "Retail Sales Performance Analysis",
      category: "SQL",
      shortDescription:
        "Analysed retail transaction data in MySQL to evaluate revenue, profitability, discount strategy, and category performance, highlighting where sales growth was undermining margins.",
      tools: "MySQL",
      analysis:
        "Data validation, data cleaning, profitability analysis, discount impact analysis, category performance analysis, stored procedure reporting",
      thumbnail: ["/images/retail-sales-erd-workflow.svg", "retail-sales-key-insights.svg"],
      githubUrl: "https://github.com/joanne-thai/my_sequels/tree/main/retail_sales_sql_project",
      detailPageEnabled: false,
      images:  ["/images/retail-sales-erd-workflow.svg", "retail-sales-key-insights.svg"],
    },
  ] satisfies Project[],
  skills: [
    {
      title: "Data Analyst Skills",
      skills: [
        "SQL",
        "Power BI",
        "Python",
        "Excel",
        "Data Cleaning",
        "Dashboarding",
        "Data Visualization",
        "Business Analysis",
        "Reporting",
      ],
    },
    {
      title: "Other Skills",
      skills: [
        "Stakeholder Communication",
        "Presentation Design",
        "Matcha Lattes",
      ],
    },
  ],
  contacts: [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/joanne-thai",
      href: "https://www.linkedin.com/in/joanne-thai",
      icon: Linkedin,
      external: true,
      cta: "View profile",
    },
    {
      label: "GitHub",
      value: "github.com/joanne-thai",
      href: "https://github.com/joanne-thai",
      icon: Github,
      external: true,
      cta: "Explore work",
    },
    {
      label: "Gmail",
      value: "joannethai.work@gmail.com",
      href: "mailto:joannethai.work@gmail.com",
      icon: Mail,
      cta: "Send email",
    },
    {
      label: "Coffee Chat",
      value: "Book a Google Meet via Calendly",
      href: "https://calendly.com/joannethai-work/letschat",
      icon: CalendarDays,
      external: true,
      cta: "Schedule chat",
    },
  ],
};

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
