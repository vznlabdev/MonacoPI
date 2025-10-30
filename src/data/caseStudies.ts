export interface CaseStudy {
  slug: string;
  title: string;
  shortDescription: string;
  location: string;
  category: string;
  year: string;
  image: string;
  challenge: string;
  approach: {
    heading: string;
    description: string;
  }[];
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    attribution: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hidden-asset-recovery",
    title: "Hidden Asset Recovery",
    shortDescription: "Located $2.3M in concealed assets across multiple offshore accounts within 10 days, securing favorable settlement.",
    location: "Denver",
    category: "Divorce",
    year: "2024",
    image: "/images/hidden-asset-sofya-kholodkova-HSlDZ7suCQQ-unsplash.jpg",
    challenge: "Our client, a successful entrepreneur, was going through a contentious divorce. Despite her spouse claiming limited assets and income during settlement negotiations, the lifestyle they had maintained suggested otherwise. Traditional financial disclosure appeared complete on the surface, but inconsistencies in spending patterns and unexplained gaps in account histories raised red flags. The client needed definitive proof of hidden assets before the settlement became final, and time was running out with the court date approaching.",
    approach: [
      {
        heading: "Comprehensive Financial Investigation",
        description: "We began with a thorough analysis of all disclosed financial documents, identifying discrepancies and gaps that warranted deeper investigation. Our team examined tax returns, business records, and lifestyle expenditures to establish a baseline of actual income and spending patterns that didn't align with claimed assets."
      },
      {
        heading: "Advanced Asset Tracing",
        description: "Using proprietary databases and specialized skip-tracing tools, we traced financial transactions across multiple jurisdictions. This revealed a complex web of transfers to shell companies and offshore accounts in three different countries. Our investigators worked with international financial specialists to document the complete trail of concealed assets."
      },
      {
        heading: "Digital Forensics & Documentation",
        description: "We conducted forensic analysis of digital footprints including email communications, cloud storage, and cryptocurrency transactions. Every piece of evidence was meticulously documented according to legal standards to ensure admissibility in court proceedings."
      },
      {
        heading: "Coordinated Legal Strategy",
        description: "Working closely with the client's divorce attorney, we provided regular updates and formatted our findings to support legal motions. Our detailed reports enabled the legal team to file for emergency discovery orders and challenge the opposing party's financial declarations."
      }
    ],
    outcome: "Within just 10 days, our investigation uncovered $2.3 million in concealed assets across offshore accounts in the Cayman Islands, Switzerland, and Singapore. The evidence we gathered included documented transfers, shell company formations, and cryptocurrency holdings that had been deliberately omitted from financial disclosures. When presented with our comprehensive report, the opposing party's attorney immediately requested settlement negotiations. The case was resolved with our client receiving a significantly more favorable settlement than initially offered—one that accurately reflected the true marital estate. Our work not only secured financial justice but also saved months of potential litigation and discovery battles.",
    metrics: [
      {
        label: "Assets Recovered",
        value: "$2.3M"
      },
      {
        label: "Investigation Timeline",
        value: "10 Days"
      },
      {
        label: "Offshore Accounts Located",
        value: "7"
      }
    ],
    testimonial: {
      quote: "I knew something wasn't right, but I had no idea how much he was hiding. Monaco PI found money in places I didn't even know existed. Their work completely changed the outcome of my divorce. I finally got what I deserved after 20 years of marriage.",
      attribution: "Divorce Client, Denver"
    }
  },
  {
    slug: "corporate-fraud-investigation",
    title: "Corporate Fraud Case",
    shortDescription: "Documented extensive employee fraud scheme, resulting in full recovery and successful criminal prosecution.",
    location: "Boulder",
    category: "Corporate",
    year: "2024",
    image: "/images/corporate-fraud-kevin-matos-Nl_FMFpXo2g-unsplash.jpg",
    challenge: "A mid-sized tech company in Boulder noticed discrepancies in their accounts payable department—missing funds, duplicate vendor payments, and unexplained expenses. Initial internal audits suggested potential fraud, but the scope and parties involved remained unclear. The company's leadership needed to identify all perpetrators, recover stolen funds, and gather evidence sufficient for criminal prosecution—all while maintaining business operations and confidentiality to prevent destruction of evidence.",
    approach: [
      {
        heading: "Covert Internal Investigation",
        description: "We initiated a discreet investigation without alerting potential suspects. This involved securing and analyzing financial records, email communications, and digital transactions. We worked after hours and maintained complete confidentiality to preserve the integrity of evidence and prevent suspects from covering their tracks."
      },
      {
        heading: "Surveillance Operations",
        description: "Based on financial analysis pointing to specific employees, we conducted targeted surveillance to document lifestyle inconsistencies with legitimate income. This included monitoring one suspect's purchase of a luxury vehicle and another's down payment on a vacation property—both well beyond their salary range."
      },
      {
        heading: "Digital Forensics & Communication Analysis",
        description: "Our digital forensics team recovered deleted emails and analyzed communication patterns between suspects. We uncovered a sophisticated scheme involving fake vendor accounts, invoice manipulation, and coordinated timing of fraudulent transactions. The digital evidence revealed the full scope of the conspiracy and the role of each participant."
      },
      {
        heading: "Vendor Verification & External Investigation",
        description: "We investigated the supposed vendors receiving payments, discovering that several were shell companies with addresses at mail forwarding services. Bank account analysis revealed these accounts were controlled by the employees under investigation, confirming the fraudulent scheme."
      }
    ],
    outcome: "Our investigation exposed a three-year fraud scheme involving four employees who had embezzled over $847,000 through fake vendors and manipulated invoices. The evidence we gathered—including financial records, surveillance documentation, digital communications, and witness statements—was presented to law enforcement. All four individuals were arrested and charged with felony theft and conspiracy. The company successfully recovered 94% of the stolen funds through asset seizures, restitution orders, and insurance claims. Additionally, our findings enabled the company to implement stronger internal controls and prevent future fraud. Three of the four defendants accepted plea agreements, and one case went to trial resulting in conviction. Our lead investigator provided expert testimony that was cited by the prosecutor as instrumental in securing the guilty verdict.",
    metrics: [
      {
        label: "Funds Embezzled",
        value: "$847K"
      },
      {
        label: "Recovery Rate",
        value: "94%"
      },
      {
        label: "Suspects Identified",
        value: "4"
      },
      {
        label: "Criminal Convictions",
        value: "4 of 4"
      }
    ],
    testimonial: {
      quote: "We thought we had good internal controls, but these employees found every gap. Monaco PI not only found the fraud but showed us how to prevent it from happening again. The evidence they gathered was so thorough that three defendants took plea deals rather than go to trial.",
      attribution: "CFO, Boulder Tech Company"
    }
  },
  {
    slug: "custody-investigation",
    title: "Custody Investigation",
    shortDescription: "Comprehensive evidence gathering ensuring child safety and favorable custody arrangement for client.",
    location: "Colorado Springs",
    category: "Family Law",
    year: "2024",
    image: "/images/custody-investigation-daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
    challenge: "A concerned mother contacted us regarding her ex-husband's fitness as a custodial parent. Following their divorce, he had begun a new relationship and moved his girlfriend into his home where their two young children spent alternating weeks. The mother had growing concerns about neglect, substance abuse, and her children's safety based on changes in their behavior and concerning statements they made after visitation. However, she had no concrete evidence to present to the family court, and feared that accusations without proof could backfire and damage her custody position. She needed professional documentation of the actual conditions and care her children were receiving.",
    approach: [
      {
        heading: "Discreet Surveillance Operations",
        description: "We conducted extensive surveillance during the father's custody periods, documenting daily routines, care patterns, and concerning behaviors. Our team observed and recorded the children being left alone for extended periods, the father's girlfriend performing all childcare while he was absent, and late-night parties with numerous guests while the children were present in the home."
      },
      {
        heading: "Background Investigation",
        description: "We performed comprehensive background checks on the father's new girlfriend who was now living in the home with the children. The investigation revealed a criminal history including a prior DUI conviction and a drug possession charge that had been dismissed—information that had not been disclosed to our client or the court."
      },
      {
        heading: "Neighborhood Canvas & Witness Interviews",
        description: "Our investigators discreetly interviewed neighbors and witnesses who had observed concerning incidents. We documented statements about loud parties, arguments, and one neighbor's account of finding the children playing unsupervised in the street. All witness statements were properly documented and witnesses were willing to provide testimony if needed."
      },
      {
        heading: "Documentation & School Records",
        description: "We worked with the client's attorney to obtain school attendance records and teacher observations during the contested custody period. The records showed the children were frequently late or absent on days following the father's custody periods, and teachers noted they often appeared tired and hadn't completed homework."
      }
    ],
    outcome: "Our comprehensive investigation provided the family court with clear, documented evidence of inadequate supervision and concerning conditions during the father's custody periods. The investigation revealed a pattern of neglect including children left unsupervised for 3-5 hours on multiple occasions, the father's absence from the home during 60% of his custody time, substance use in the home while children were present, and failure to maintain consistent bedtimes, meals, and homework supervision. Based on our evidence and expert testimony, the court modified the custody arrangement to grant our client primary physical custody with the father receiving supervised visitation until he could demonstrate improved parenting capabilities. The court specifically cited our investigation's documentation in its ruling. Most importantly, the children were removed from an unsafe environment, and the mother gained peace of mind knowing her children were protected.",
    metrics: [
      {
        label: "Surveillance Hours",
        value: "120+"
      },
      {
        label: "Documented Incidents",
        value: "23"
      },
      {
        label: "Witness Statements",
        value: "7"
      }
    ],
    testimonial: {
      quote: "Everyone kept saying I was being paranoid. Well guess what? I WASN'T. Monaco PI documented everything I suspected and more. The judge looked at their report and made a decision immediately. My kids are safe now, and that's all that matters.",
      attribution: "Mother, Colorado Springs"
    }
  }
];

