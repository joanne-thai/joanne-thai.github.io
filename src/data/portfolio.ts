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
  category: "Power BI" | "SQL" | "Python";
  shortDescription: string;
  tools: string;
  analysis: string;
  thumbnail: string;
  githubUrl: string;
  detailPageEnabled: boolean;
  powerbiEmbedUrl: string;
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
        href: "mailto:hello@joannethai.com",
        icon: Mail,
      },
      {
        label: "Coffee Chat",
        href: "https://app.gong.io/meet/joanne-thai",
        icon: MessageSquareMore,
        external: true,
      },
    ],
  },
  about: {
    summary:
      "I enjoy translating stakeholder goals into structured analysis, then packaging the outcome in dashboards and reports that feel immediately useful. My projects blend exploratory analysis, business framing, and tidy execution so each deliverable can support real conversations, not just screenshots.",
    education: {
      degree: "Bachelor of Commerce, Business Analytics",
      university: "University of Sydney",
      duration: "2021 - 2024",
      highlights: [
        "Built end-to-end dashboarding and forecasting projects across retail and operations use cases.",
        "Combined quantitative coursework with communication-focused presentations for non-technical audiences.",
      ],
    },
  },
  projects: [
    {
      id: "revenue-levers-powerbi",
      index: "01",
      slug: "retail-revenue-levers",
      title: "Retail Revenue Levers Dashboard",
      category: "Power BI",
      shortDescription:
        "Investigated why revenue growth had stalled across regional stores, combining trend analysis, price sensitivity checks, and cohort views to identify the product mix and discount patterns most linked to an 11.5% uplift opportunity.",
      tools: "Power BI, Python, Excel",
      analysis: "EDA, regression analysis, KPI design, dashboard storytelling",
      thumbnail: "/images/project-retail-revenue.svg",
      githubUrl: "https://github.com/joanne-thai/retail-revenue-levers",
      detailPageEnabled: true,
      powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzlmYjhiMGItMjBkZC00ZGQ1LTgzODgtNjAzYWI2NDQyNTU5IiwidCI6IjhiNmM0ZDY5LTc5OTMtNDgyYy04OGU5LTZmOWM5ZjlhMDBiOSJ9",
      images: [
        "/images/detail-revenue-overview.svg",
        "/images/detail-revenue-segmentation.svg",
        "/images/detail-revenue-recommendations.svg",
      ],
      badge: "Featured Project",
      detail: {
        subtitle: "Pinpointing which pricing and category shifts could unlock revenue growth across stores.",
        overview:
          "This project brought together transactional sales data, store performance history, and promotion records to help leadership understand where growth was slowing and which levers could create the fastest commercial impact.",
        businessProblem:
          "Store leaders were seeing inconsistent revenue performance across regions but lacked a single view that connected sales movement, promotional activity, and category contribution. The goal was to surface which combinations of discounting, assortment, and store focus were driving better outcomes.",
        dataset:
          "A blended retail dataset covering monthly sales, unit volume, category mix, promotions, and store attributes across multiple regions. Data was cleaned in Python before metric modeling and dashboarding in Power BI.",
        approach: [
          "Standardized sales records and promotion tags, then validated category and store-level metric consistency.",
          "Used exploratory analysis to isolate revenue movement by region, category, and campaign window.",
          "Applied regression-style reasoning to test which factors aligned most strongly with revenue shifts.",
          "Designed a Power BI dashboard focused on executive questions, not raw tables.",
        ],
        keyInsights: [
          "Mid-tier products delivered the strongest margin-adjusted revenue lift when paired with lighter discounting.",
          "A small set of underperforming categories was masking stronger performance in core repeat-purchase segments.",
          "Regional stores with tighter promotion cadence showed healthier sustained revenue than stores relying on frequent markdowns.",
        ],
        toolsUsed: ["Power BI", "Python", "Excel", "DAX"],
        recommendations: [
          "Rebalance category focus toward high-contribution repeat-purchase lines.",
          "Tighten discount depth and prioritize campaigns with clearer conversion history.",
          "Track regional performance using a shared scorecard to spot mix drift earlier.",
        ],
      },
    },
    {
      id: "customer-churn-sql",
      index: "02",
      slug: "subscription-churn-sql",
      title: "Subscription Churn Deep Dive",
      category: "SQL",
      shortDescription:
        "Explored customer cancellation patterns to uncover where onboarding friction and contract timing were driving avoidable churn, giving the business a clearer retention playbook across segment tiers.",
      tools: "SQL, Tableau, Excel",
      analysis: "Cohort analysis, retention reporting, segmentation",
      thumbnail: "/images/project-subscription-churn.svg",
      githubUrl: "https://github.com/joanne-thai/subscription-churn-analysis",
      detailPageEnabled: false,
      powerbiEmbedUrl: "",
      images: [],
    },
    {
      id: "operations-forecast-python",
      index: "03",
      slug: "operations-forecasting-python",
      title: "Operations Forecasting Toolkit",
      category: "Python",
      shortDescription:
        "Built a forecasting workflow for support demand that helped operations teams compare staffing needs against expected ticket volume and reduce planning guesswork during seasonal spikes.",
      tools: "Python, Jupyter, Power BI",
      analysis: "Time-series exploration, anomaly review, forecasting",
      thumbnail: "/images/project-operations-forecast.svg",
      githubUrl: "https://github.com/joanne-thai/operations-forecasting-toolkit",
      detailPageEnabled: false,
      powerbiEmbedUrl: "",
      images: [],
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
        "React",
        "Tailwind CSS",
        "Git",
        "API Integration",
        "Stakeholder Communication",
        "Presentation Design",
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
      value: "hello@joannethai.com",
      href: "mailto:hello@joannethai.com",
      icon: Mail,
      cta: "Send email",
    },
    {
      label: "Coffee Chat",
      value: "Book a quick intro via Gong",
      href: "https://app.gong.io/meet/joanne-thai",
      icon: CalendarDays,
      external: true,
      cta: "Schedule chat",
    },
  ],
};

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
