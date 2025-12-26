// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  packages;
  blogPosts;
  resources;
  contactSubmissions;
  payments;
  bookings;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.packages = /* @__PURE__ */ new Map();
    this.blogPosts = /* @__PURE__ */ new Map();
    this.resources = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.payments = /* @__PURE__ */ new Map();
    this.bookings = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const packagesData = [
      {
        id: "discover",
        name: "Discover",
        price: 5500,
        targetAudience: "For Class 8-9 Students",
        description: "Perfect foundation for early career planning",
        features: [
          "Psychometric assessment to measure your interests",
          "1 career counselling session with Mentoria's expert career coaches",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts",
          "Focused on stream and subject selection"
        ],
        isPopular: false
      },
      {
        id: "discover-plus",
        name: "Discover Plus",
        price: 15e3,
        targetAudience: "For Class 8-9 Students",
        description: "Comprehensive guidance with ongoing support",
        features: [
          "2 Psychometric assessments to measure your interests, personality and abilities",
          "8 career counselling sessions (1 every year) with Sumanta until graduation",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on college admissions in India and abroad",
          "CV reviews during internships/graduation",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: true
      },
      {
        id: "achieve",
        name: "Achieve",
        price: 5999,
        targetAudience: "For Class 10-12 Students",
        description: "Strategic planning for higher education",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        isPopular: false
      },
      {
        id: "achieve-plus",
        name: "Achieve Plus",
        price: 10599,
        targetAudience: "For Class 10-12 Students",
        description: "Complete support for academic success",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "4 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on college admissions in India and abroad",
          "CV reviews during internships/graduation",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: false
      },
      {
        id: "ascend-graduate",
        name: "Ascend",
        price: 6499,
        targetAudience: "For College Graduates",
        description: "Career transformation for graduates",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career coaching session for specialisation/job selection",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        isPopular: false
      },
      {
        id: "ascend-plus-graduate",
        name: "Ascend Plus",
        price: 10599,
        targetAudience: "For College Graduates",
        description: "Premium career development program",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career coaching sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on Masters' admissions in India and abroad",
          "CV reviews during internships/graduation",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: false
      },
      {
        id: "ascend-professional",
        name: "Ascend",
        price: 6499,
        targetAudience: "For Working Professionals",
        description: "Career transformation for professionals",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career coaching session focused on career transition, growth and upskilling",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        isPopular: false
      },
      {
        id: "ascend-plus-professional",
        name: "Ascend Plus",
        price: 10599,
        targetAudience: "For Working Professionals",
        description: "Premium career development program",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career coaching sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with upskilling pathways",
          "CV reviews and Interview Prep",
          "Guidance until you get into the job you love",
          "Career helpline access"
        ],
        isPopular: false
      }
    ];
    packagesData.forEach((pkg) => {
      this.packages.set(pkg.id, {
        ...pkg,
        isPopular: pkg.isPopular ?? false
      });
    });
    const blogPostsData = [
      {
        id: "ai-proof-leadership-skills",
        title: "Building AI-Proof Leadership Skills for the Future Workforce",
        excerpt: "Discover the uniquely human leadership capabilities that will remain irreplaceable as AI transforms the workplace. Learn how Fortune 500 leaders are adapting their skillsets.",
        content: "As artificial intelligence continues to reshape industries, the question isn't whether AI will impact your career\u2014it's how you can develop skills that remain uniquely human and irreplaceable. After 20+ years in Fortune 500 HR leadership at companies like Reliance and Vodafone, I've observed that successful executives focus on capabilities that machines cannot replicate.\n\nThe Five Pillars of AI-Proof Leadership:\n\n1. Emotional Intelligence Mastery\nWhile AI excels at data processing, it cannot replicate the nuanced understanding of human emotions that drives team performance. Leaders who master emotional intelligence\u2014reading team dynamics, managing conflict with empathy, and inspiring through authentic connection\u2014create irreplaceable value. In my experience coaching 3,725+ professionals, those who invest in EQ development achieve 40% better team retention rates.\n\n2. Strategic Thinking Beyond Algorithms\nAI can analyze patterns and suggest optimizations, but strategic thinking requires intuition, creativity, and the ability to navigate ambiguity. Executive leaders must develop skills in scenario planning, stakeholder management, and long-term vision creation. These cognitive abilities involve understanding human motivations, market psychology, and cultural dynamics that AI cannot fully comprehend.\n\n3. Authentic Relationship Building\nNetworking and relationship building remain fundamentally human activities. The ability to build trust, inspire loyalty, and create meaningful professional connections cannot be automated. Leaders who excel at authentic relationship building understand that every interaction is an opportunity to create mutual value and long-term partnerships.\n\n4. Change Leadership and Crisis Management\nWhile AI can predict trends, leading through change requires human judgment, cultural sensitivity, and the ability to inspire confidence during uncertainty. Successful executives understand that change management is 80% psychology and 20% process. They develop skills in communication, stakeholder alignment, and team resilience that technology cannot replicate.\n\n5. Creative Problem-Solving and Innovation\nAI excels at optimization but struggles with creative breakthroughs and innovative thinking. Leaders who combine analytical rigor with creative intuition become invaluable. This involves understanding customer needs at a deeper level, identifying unmet market opportunities, and inspiring teams to think beyond conventional solutions.\n\nPractical Implementation Framework:\n\n- Monthly EQ assessments and targeted improvement plans\n- Quarterly strategic thinking workshops with diverse perspectives\n- Regular relationship audit and network expansion strategies\n- Crisis simulation exercises to build change leadership muscles\n- Innovation challenges that encourage creative problem-solving\n\nThe executives who thrive in an AI-driven economy will be those who double down on uniquely human capabilities while leveraging technology as a powerful tool for amplification, not replacement.",
        category: "LEADERSHIP DEVELOPMENT",
        imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: /* @__PURE__ */ new Date("2025-08-02")
      },
      {
        id: "mid-career-transition-strategy",
        title: "The Executive's Guide to Strategic Mid-Career Transitions",
        excerpt: "Navigate career pivots with confidence using Fortune 500-proven strategies. From identifying opportunities to negotiating executive packages, master the art of strategic career advancement.",
        content: "Mid-career transitions represent some of the most significant opportunities for professional growth and financial advancement. Drawing from my experience guiding 3,725+ professionals and my tenure in senior HR roles at Reliance and Vodafone, this guide reveals the systematic approach successful executives use to identify, pursue, and secure leadership positions.\n\nThe Strategic Transition Framework:\n\nPhase 1: Strategic Assessment and Positioning (Months 1-2)\nSuccessful transitions begin with ruthless self-assessment. Most professionals underestimate their market value and overestimate the risks of change. I've developed a comprehensive evaluation framework that examines:\n\n- Leadership competencies and transferable skills\n- Industry knowledge and functional expertise\n- Network strength and relationship capital\n- Financial readiness and risk tolerance\n- Personal brand and market positioning\n\nKey insight: 73% of successful transitions happen when professionals move during strength, not weakness. The best time to explore opportunities is when you're performing well, not when you're dissatisfied.\n\nPhase 2: Market Intelligence and Opportunity Mapping (Months 2-3)\nExecutive transitions require sophisticated market research. This involves:\n\n- Industry analysis and growth trajectory assessment\n- Compensation benchmarking and package structuring\n- Company culture evaluation and leadership needs analysis\n- Competitive landscape and positioning strategy\n- Timing analysis for optimal market entry\n\nI've observed that professionals who invest 40+ hours in market research achieve 60% better outcomes than those who rely on reactive job searching.\n\nPhase 3: Network Activation and Relationship Leverage (Months 3-4)\nExecutive opportunities are rarely advertised. 80% of senior roles are filled through networks and referrals. The strategy involves:\n\n- Relationship mapping and influence analysis\n- Strategic introduction requests and value-first networking\n- Advisory board and mentor engagement\n- Industry conference participation and thought leadership\n- Executive recruiter relationship development\n\nPhase 4: Executive Positioning and Brand Development (Months 4-5)\nYour professional brand must align with your target position. This requires:\n\n- LinkedIn optimization for executive search visibility\n- Thought leadership content and industry expertise demonstration\n- Speaking opportunities and industry recognition\n- Reference strategy and endorsement cultivation\n- Interview preparation and executive presence development\n\nPhase 5: Negotiation Strategy and Package Optimization (Months 5-6)\nExecutive compensation negotiations determine long-term financial outcomes. Key elements include:\n\n- Base salary positioning and market analysis\n- Equity participation and long-term incentive structuring\n- Benefits optimization and executive perquisites\n- Performance metrics and bonus structure alignment\n- Exit clause negotiation and protection strategies\n\nReal Success Metrics:\nOur clients using this framework achieve:\n- 70-85% salary increases on average\n- 90% success rate in securing target-level positions\n- 50% reduction in transition timeline\n- 95% satisfaction with cultural fit and role alignment\n\nThe mindset shift required for executive transition success involves moving from employee thinking to owner thinking, from task execution to strategic leadership, and from personal achievement to organizational transformation.\n\nRemember: Executive transitions aren't just career moves\u2014they're life transformations that require comprehensive planning, strategic execution, and unwavering commitment to excellence.",
        category: "CAREER ADVANCEMENT",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: /* @__PURE__ */ new Date("2025-07-30")
      },
      {
        id: "corporate-parenting-wellbeing",
        title: "The Hidden Cost of Parenting Stress in Corporate India",
        excerpt: "How organizations can support working parents through comprehensive wellbeing programs. Explore the business case for parenting support and its impact on retention and productivity.",
        content: "Corporate India is experiencing a silent crisis that's costing organizations millions in talent retention and productivity: the hidden stress of working parents struggling to balance career advancement with parenting responsibilities.\n\nThe Scope of the Crisis:\n\nRecent studies reveal alarming statistics:\n- 52% of working parents report chronic stress related to parenting pressures\n- 67% of mid-career women cite parenting concerns as primary reason for career stagnation\n- 34% of high-performing employees consider leaving due to inadequate parenting support\n- Organizations lose 40% more female talent post-maternity than pre-pandemic levels\n\nThe financial impact is staggering: replacing a mid-level manager costs 150-300% of their annual salary, while losing senior female executives costs an average of \u20B945 lakhs per departure when considering recruitment, training, and productivity loss.\n\nThe Invisible Burden:\n\nParenting stress manifests in multiple dimensions:\n\n1. Career Trajectory Anxiety\nParents worry about their children's academic performance, career guidance, and future security while managing demanding professional responsibilities. This dual pressure creates cognitive overload that impacts decision-making and strategic thinking.\n\n2. Time and Energy Depletion\nJuggling school meetings, extracurricular activities, career counseling, and college preparation alongside executive responsibilities leads to burnout. Many parents sacrifice personal development and networking opportunities.\n\n3. Financial Pressure Amplification\nEducational expenses, coaching classes, international exposure programs, and career development investments for children create additional financial stress that affects workplace performance and retention decisions.\n\n4. Guilt and Identity Conflict\nHigh-achieving parents often experience guilt about time allocation between career advancement and family involvement, leading to decreased workplace engagement and leadership effectiveness.\n\nThe Business Case for Corporate Parenting Support:\n\nForward-thinking organizations are discovering that comprehensive parenting wellbeing programs deliver measurable ROI:\n\nRetention Improvement: Companies with parenting support programs see 30-45% improvement in mid-career retention rates.\n\nEngagement Enhancement: Employees with access to family support services show 25% higher engagement scores and 40% better performance ratings.\n\nLeadership Pipeline Strengthening: Supporting working parents maintains gender diversity in leadership tracks and reduces the 'leaky pipeline' problem.\n\nComprehensive Corporate Parenting Wellbeing Framework:\n\n1. Career Mentorship for Employees' Children\n- Professional career guidance sessions for teenagers\n- Industry exposure programs and internship opportunities\n- College admission counseling and scholarship guidance\n- Skill development workshops and leadership training\n\n2. Parental Stress Management and Support\n- Monthly parenting wellbeing workshops\n- Stress management techniques and mindfulness training\n- Time management strategies for working parents\n- Peer support groups and mentoring circles\n\n3. Educational Partnership Programs\n- Corporate partnerships with premier educational institutions\n- Group discounts for coaching classes and skill development\n- Scholarship programs for employees' children\n- Academic performance tracking and intervention support\n\n4. Flexible Work Arrangements\n- Parent-friendly meeting schedules and travel policies\n- Remote work options during children's exam periods\n- Emergency childcare support and backup systems\n- Extended leave options for family milestones\n\nImplementation Strategy:\n\nPhase 1: Diagnostic Assessment\nConduct comprehensive surveys to understand parenting-related stress factors, career concerns for children, and support needs.\n\nPhase 2: Program Design and Pilot\nDevelop targeted interventions based on assessment results, starting with high-impact, low-cost initiatives.\n\nPhase 3: Measurement and Optimization\nTrack retention rates, engagement scores, productivity metrics, and employee satisfaction to optimize program effectiveness.\n\nCase Study: Fortune 500 Implementation\nOne multinational corporation implemented a comprehensive parenting wellbeing program resulting in:\n- 42% reduction in mid-career female attrition\n- 35% improvement in employee satisfaction scores\n- \u20B92.3 crores annual savings in replacement costs\n- 28% increase in internal promotions among participating employees\n\nThe Future of Corporate Wellbeing:\n\nOrganizations that recognize parenting as a legitimate workplace concern and provide comprehensive support will attract and retain top talent, build stronger leadership pipelines, and create competitive advantages in the war for talent.\n\nInvesting in employees as whole human beings\u2014including their roles as parents\u2014isn't just good HR policy; it's a strategic business imperative for sustainable growth and organizational excellence.",
        category: "CORPORATE WELLNESS",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: /* @__PURE__ */ new Date("2025-07-28")
      },
      {
        id: "executive-presence-development",
        title: "Developing Executive Presence: From Manager to C-Suite Leader",
        excerpt: "Master the subtle art of executive presence with proven techniques from Fortune 500 boardrooms. Learn how to command respect, influence decisions, and accelerate your leadership trajectory.",
        content: "Executive presence is the indefinable quality that separates high-performing managers from transformational leaders. It's the reason why some professionals ascend to C-suite roles while equally qualified peers remain in middle management. Through my two decades of Fortune 500 experience and coaching 3,725+ professionals, I've identified the specific behavioral patterns, communication styles, and strategic thinking approaches that define executive presence.\n\nThe Executive Presence Framework:\n\n1. Commanding Without Demanding\nTrue executive presence involves influencing through gravitas rather than authority. This requires mastering the art of strategic silence, asking powerful questions, and creating space for others to contribute while maintaining clear direction. Executives with strong presence understand that leadership is about creating conditions for others to excel, not showcasing personal brilliance.\n\n2. Decision-Making Under Pressure\nExecutive roles require making complex decisions with incomplete information under intense pressure. Developing this capability involves:\n- Scenario analysis and risk assessment frameworks\n- Stakeholder impact evaluation and communication strategies\n- Confidence in decision-making while remaining open to course correction\n- Taking ownership of outcomes without deflecting responsibility\n\n3. Vision Communication and Inspiration\nExecutive presence manifests through the ability to articulate compelling visions that inspire action. This involves:\n- Translating complex strategies into clear, actionable narratives\n- Connecting organizational goals to individual motivations\n- Creating emotional resonance through authentic storytelling\n- Demonstrating personal commitment to the vision through consistent actions\n\nThe Four Pillars of Executive Presence Development:\n\nPillar 1: Physical Presence and Non-Verbal Communication\nBody language accounts for 55% of communication impact. Executive presence requires:\n- Confident posture and purposeful movement\n- Strategic use of gestures and facial expressions\n- Voice modulation and pace control\n- Professional attire that reinforces credibility\n- Spatial awareness and room dynamics management\n\nPillar 2: Intellectual Presence and Strategic Thinking\nExecutive credibility comes from demonstrated strategic thinking capabilities:\n- Industry knowledge and market trend analysis\n- Systems thinking and interconnection awareness\n- Problem-solving frameworks and analytical rigor\n- Innovation mindset and future-oriented perspective\n- Cross-functional understanding and business acumen\n\nPillar 3: Emotional Presence and Relationship Management\nExecutive effectiveness depends on emotional intelligence and relationship skills:\n- Self-awareness and emotional regulation\n- Empathy and social awareness\n- Conflict resolution and difficult conversation navigation\n- Team motivation and performance coaching\n- Stakeholder relationship building and maintenance\n\nPillar 4: Authentic Leadership and Personal Brand\nSustainable executive presence requires authenticity and personal brand consistency:\n- Values-driven decision making and behavior\n- Personal story and leadership philosophy articulation\n- Consistent communication style and messaging\n- Professional reputation management and thought leadership\n- Continuous learning and growth mindset demonstration\n\nPractical Development Strategies:\n\n1. 360-Degree Feedback and Assessment\nRegular feedback from peers, direct reports, and supervisors provides insights into presence gaps and development opportunities.\n\n2. Executive Coaching and Mentorship\nWorking with experienced coaches and mentors accelerates presence development through personalized guidance and accountability.\n\n3. High-Stakes Presentation Opportunities\nSeeking speaking opportunities and board presentations builds confidence and refines presence skills under pressure.\n\n4. Cross-Functional Leadership Assignments\nTaking on stretch assignments across different business areas develops versatility and credibility.\n\n5. Industry Thought Leadership Development\nWriting articles, speaking at conferences, and participating in industry forums builds external presence and recognition.\n\nCommon Presence Derailers:\n\n- Micromanagement and control tendencies\n- Defensive responses to feedback or criticism\n- Inconsistent behavior under stress\n- Over-reliance on technical expertise rather than leadership skills\n- Lack of authentic connection with team members\n\nMeasuring Executive Presence Development:\n\n- 360-degree feedback improvements over time\n- Increased influence and decision-making authority\n- Enhanced team engagement and performance metrics\n- External recognition and industry invitations\n- Career advancement and compensation progression\n\nThe journey to executive presence is ongoing and requires continuous refinement. The most successful leaders understand that presence is not about perfection\u2014it's about authentic leadership that inspires others to achieve extraordinary results.\n\nRemember: Executive presence cannot be faked or manufactured. It must be developed through consistent practice, authentic self-expression, and genuine commitment to serving others while achieving organizational goals.",
        category: "EXECUTIVE COACHING",
        imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: /* @__PURE__ */ new Date("2025-07-25")
      },
      {
        id: "negotiating-executive-compensation",
        title: "The Art of Executive Compensation Negotiation",
        excerpt: "Unlock significant salary increases with Fortune 500-proven negotiation strategies. Learn how to position yourself for premium compensation packages and benefits.",
        content: "The difference between good and great executive compensation often comes down to negotiation skills and strategic positioning. Having reviewed thousands of executive compensation packages during my tenure at Reliance and Vodafone, I've observed the specific strategies that consistently result in substantial salary increases.\n\nThe Executive Compensation Landscape:\n\nExecutive compensation extends far beyond base salary and includes multiple components that savvy negotiators leverage for maximum value:\n\n- Base salary and annual performance bonuses\n- Long-term equity incentives and stock options\n- Executive benefits and perquisites\n- Retention bonuses and golden handcuffs\n- Exit protection and severance agreements\n\nThe Strategic Negotiation Framework:\n\nPhase 1: Market Intelligence and Benchmarking\nBefore entering any compensation discussion, conduct comprehensive market research:\n\n1. Industry Compensation Analysis\n- Review public company proxy statements for comparable roles\n- Analyze compensation surveys from major consulting firms\n- Understand industry-specific compensation trends and practices\n- Identify premium and discount factors affecting your market position\n\n2. Company-Specific Context\n- Research company financial performance and growth trajectory\n- Understand compensation philosophy and pay equity initiatives\n- Analyze historical compensation increases and promotion patterns\n- Identify budget constraints and decision-making processes\n\n3. Personal Value Proposition Development\n- Quantify achievements and business impact contributions\n- Document revenue generation, cost savings, and efficiency improvements\n- Highlight unique skills and irreplaceable capabilities\n- Prepare specific examples of leadership success and team development\n\nPhase 2: Strategic Positioning and Timing\n\n1. Performance Timing Optimization\nInitiate compensation discussions during peak performance periods:\n- After major project successes or business wins\n- During annual review cycles with strong performance ratings\n- Following significant cost savings or revenue generation\n- After receiving external recognition or industry awards\n\n2. Market Leverage Assessment\n- Evaluate external opportunities and competitive offers\n- Understand your replaceability and succession planning status\n- Assess company dependence on your relationships and expertise\n- Consider economic cycles and industry growth phases\n\nPhase 3: Negotiation Strategy and Execution\n\n1. Opening Positioning\n- Present market data supporting your compensation request\n- Frame discussions around value creation rather than personal needs\n- Propose comprehensive packages rather than single-component increases\n- Maintain professional demeanor and collaborative approach\n\n2. Package Structuring and Optimization\nMaximize total compensation value through strategic structuring:\n\nBase Salary Strategy:\n- Position requests 15-20% above current market median\n- Emphasize fixed income security and annual escalation commitments\n- Link increases to performance milestones and business objectives\n\nBonus and Incentive Optimization:\n- Negotiate higher bonus percentages with achievable targets\n- Request retention bonuses for multi-year commitments\n- Structure performance incentives with upside potential\n\nEquity Participation Enhancement:\n- Understand vesting schedules and acceleration triggers\n- Negotiate for restricted stock units or stock options\n- Request equity refreshes and promotional grants\n\nExecutive Benefits Maximization:\n- Negotiate for executive health plans and concierge services\n- Request professional development and education allowances\n- Secure transportation, communication, and travel benefits\n\n3. Advanced Negotiation Tactics\n\nAnchoring and Positioning:\n- Start with ambitious but defensible compensation requests\n- Use external benchmarks and competitive intelligence\n- Present multiple scenarios and package alternatives\n\nValue-Based Argumentation:\n- Quantify business impact and ROI of your contributions\n- Demonstrate cost of replacement and knowledge transfer\n- Highlight unique capabilities and relationship capital\n\nCreative Problem-Solving:\n- Propose performance-based escalation clauses\n- Suggest deferred compensation and long-term incentives\n- Negotiate for promotional pathways and succession planning\n\nPhase 4: Agreement Documentation and Protection\n\n1. Contract Terms and Conditions\n- Ensure written documentation of all compensation agreements\n- Include performance metrics and measurement criteria\n- Specify payment timing and calculation methodologies\n- Define change-in-control and severance protections\n\n2. Review and Legal Validation\n- Engage legal counsel for complex agreements\n- Understand tax implications and optimization strategies\n- Verify compliance with company policies and regulations\n- Plan for future renegotiation opportunities\n\nCommon Negotiation Mistakes to Avoid:\n\n- Focusing solely on base salary rather than total compensation\n- Negotiating from positions of weakness or desperation\n- Accepting initial offers without comprehensive market analysis\n- Failing to document agreements and performance expectations\n- Overlooking long-term career and compensation trajectory\n\nReal Success Metrics from Client Engagements:\n\nUsing this systematic approach, our clients achieve:\n- 70-85% average salary increases\n- 40-60% improvements in total compensation packages\n- 90% success rate in securing target compensation levels\n- 95% satisfaction with negotiation outcomes and career progression\n\nThe key to executive compensation success lies in thorough preparation, strategic positioning, and value-based argumentation. Remember that compensation negotiations are not adversarial processes\u2014they're collaborative discussions about recognizing and rewarding exceptional value creation.\n\nMaster these techniques, and you'll transform your earning potential while building stronger relationships with executive leadership teams.",
        category: "SALARY NEGOTIATION",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: /* @__PURE__ */ new Date("2025-07-22")
      },
      {
        id: "building-professional-networks",
        title: "Strategic Networking for Senior Professionals",
        excerpt: "Build powerful professional networks that accelerate career advancement. Learn relationship-building strategies used by Fortune 500 executives to create opportunities.",
        content: "Professional networking at the executive level operates differently from junior career relationship building. It requires strategic thinking, authentic value creation, and long-term relationship cultivation. Drawing from my extensive network built through 20+ years in Fortune 500 leadership and my experience guiding senior professionals, this comprehensive guide reveals the systematic approach to building meaningful professional relationships. Learn how to identify key influencers, create mutual value, and leverage relationships for career advancement without appearing transactional. Discover the networking strategies that have helped our clients secure board positions, executive roles, and strategic partnerships. This resource includes practical frameworks for relationship mapping, value proposition development, and authentic engagement techniques.",
        category: "PROFESSIONAL NETWORKING",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        publishedAt: /* @__PURE__ */ new Date("2025-07-20")
      }
    ];
    blogPostsData.forEach((post) => {
      this.blogPosts.set(post.id, post);
    });
    const resourcesData = [
      {
        id: "executive-leadership-assessment",
        title: "Executive Leadership Assessment",
        description: "Comprehensive psychometric evaluation for senior professionals to identify leadership strengths and development areas.",
        type: "guide",
        downloadUrl: "#",
        iconName: "brain"
      },
      {
        id: "salary-negotiation-toolkit",
        title: "Salary Negotiation Toolkit",
        description: "Complete framework including market research templates, negotiation scripts, and compensation benchmarking tools.",
        type: "template",
        downloadUrl: "#",
        iconName: "trending-up"
      },
      {
        id: "ai-readiness-career-report",
        title: "AI-Readiness Career Report",
        description: "Detailed analysis of AI impact on leadership roles with future-proofing strategies for executive careers.",
        type: "guide",
        downloadUrl: "#",
        iconName: "robot"
      },
      {
        id: "corporate-parenting-diagnostic",
        title: "Corporate Parenting Wellbeing Diagnostic",
        description: "Proprietary survey to measure parenting-related stress and work-life conflict for organizational DEI strategies.",
        type: "template",
        downloadUrl: "#",
        iconName: "users"
      },
      {
        id: "executive-presence-playbook",
        title: "Executive Presence Development Playbook",
        description: "Step-by-step guide to developing commanding leadership presence with Fortune 500-proven techniques.",
        type: "guide",
        downloadUrl: "#",
        iconName: "award"
      },
      {
        id: "career-transition-roadmap",
        title: "Strategic Career Transition Roadmap",
        description: "Complete blueprint for mid-career pivots including opportunity mapping, positioning strategies, and timeline planning.",
        type: "template",
        downloadUrl: "#",
        iconName: "map"
      },
      {
        id: "leadership-network-builder",
        title: "Professional Network Building Framework",
        description: "Systematic approach to building strategic professional relationships for career advancement and opportunity creation.",
        type: "template",
        downloadUrl: "#",
        iconName: "network"
      },
      {
        id: "corporate-wellness-roi-calculator",
        title: "Corporate Wellness ROI Calculator",
        description: "Calculate the business impact of employee wellbeing programs including parenting support and career development initiatives.",
        type: "tool",
        downloadUrl: "#",
        iconName: "calculator"
      }
    ];
    resourcesData.forEach((resource) => {
      this.resources.set(resource.id, {
        ...resource,
        downloadUrl: resource.downloadUrl ?? null
      });
    });
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Package methods
  async getAllPackages() {
    return Array.from(this.packages.values());
  }
  async getPackage(id) {
    return this.packages.get(id);
  }
  // Blog post methods
  async getAllBlogPosts() {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }
  async getBlogPost(id) {
    return this.blogPosts.get(id);
  }
  // Resource methods
  async getAllResources() {
    return Array.from(this.resources.values());
  }
  // Contact submission methods
  async createContactSubmission(insertSubmission) {
    const id = randomUUID();
    const submission = {
      ...insertSubmission,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  // Payment methods
  async createPayment(insertPayment) {
    const id = randomUUID();
    const payment = {
      ...insertPayment,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.payments.set(id, payment);
    return payment;
  }
  async updatePaymentStatus(id, status) {
    const payment = this.payments.get(id);
    if (payment) {
      payment.status = status;
      this.payments.set(id, payment);
    }
    return payment;
  }
  // Booking methods
  async createBooking(booking) {
    const id = randomUUID();
    const newBooking = {
      ...booking,
      id,
      status: booking.status || "pending",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }
  async getAllBookings() {
    return Array.from(this.bookings.values());
  }
  async getBooking(id) {
    return this.bookings.get(id);
  }
  async updateBookingStatus(id, status) {
    const booking = this.bookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status, updatedAt: /* @__PURE__ */ new Date() };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return void 0;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull()
});
var packages = pgTable("packages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  // in INR
  targetAudience: text("target_audience").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  isPopular: boolean("is_popular").default(false)
});
var blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  publishedAt: timestamp("published_at").defaultNow()
});
var resources = pgTable("resources", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  // 'pdf', 'tool', 'checklist', etc.
  downloadUrl: text("download_url"),
  iconName: text("icon_name").notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceInterest: text("service_interest").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  packageId: varchar("package_id").references(() => packages.id).notNull(),
  customerEmail: text("customer_email").notNull(),
  customerName: text("customer_name").notNull(),
  amount: integer("amount").notNull(),
  stripePaymentIntentId: text("stripe_payment_intent_id").notNull(),
  status: text("status").notNull(),
  // 'pending', 'completed', 'failed'
  createdAt: timestamp("created_at").defaultNow()
});
var bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  mobile: text("mobile").notNull(),
  currentStage: text("current_stage").notNull(),
  // 'class8-9', 'class10-12', 'graduates', 'professionals'
  packageId: varchar("package_id").notNull(),
  packageName: text("package_name").notNull(),
  bookingType: text("booking_type").notNull(),
  // 'discovery_call' or 'investment'
  status: text("status").default("pending"),
  // pending, contacted, completed, cancelled
  amount: integer("amount"),
  paymentStatus: text("payment_status"),
  // pending, completed, failed
  razorpayOrderId: text("razorpay_order_id"),
  razorpayPaymentId: text("razorpay_payment_id"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true
});
var insertPackageSchema = createInsertSchema(packages).omit({
  id: true
});
var insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  publishedAt: true
});
var insertResourceSchema = createInsertSchema(resources).omit({
  id: true
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});
var insertPaymentSchema = createInsertSchema(payments).omit({
  id: true,
  createdAt: true
});
var insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// server/routes.ts
import { z } from "zod";
import Razorpay from "razorpay";
import crypto from "crypto";
var razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});
async function registerRoutes(app2) {
  app2.get("/api/packages", async (req, res) => {
    try {
      const packages2 = await storage.getAllPackages();
      res.json(packages2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching packages: " + error.message });
    }
  });
  app2.get("/api/packages/:id", async (req, res) => {
    try {
      const pkg = await storage.getPackage(req.params.id);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(pkg);
    } catch (error) {
      res.status(500).json({ message: "Error fetching package: " + error.message });
    }
  });
  app2.get("/api/blog-posts", async (req, res) => {
    try {
      const blogPosts2 = await storage.getAllBlogPosts();
      res.json(blogPosts2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog posts: " + error.message });
    }
  });
  app2.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const blogPost = await storage.getBlogPost(req.params.id);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(blogPost);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog post: " + error.message });
    }
  });
  app2.get("/api/resources", async (req, res) => {
    try {
      const resources2 = await storage.getAllResources();
      res.json(resources2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching resources: " + error.message });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Error submitting contact form: " + error.message });
    }
  });
  app2.post("/api/book-call", async (req, res) => {
    try {
      const { name, phone, background } = req.body;
      if (!name || !phone || !background) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const callBooking = {
        id: Date.now().toString(),
        name,
        phone,
        background,
        createdAt: /* @__PURE__ */ new Date(),
        status: "pending"
      };
      res.json({
        success: true,
        message: "Call booked successfully",
        booking: callBooking
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app2.post("/api/create-razorpay-order", async (req, res) => {
    try {
      const { amount, packageId, customerName, customerEmail, packageName } = req.body;
      if (!amount || !packageId || !customerName || !customerEmail) {
        return res.status(400).json({ message: "Missing required payment data" });
      }
      const razorpayOrder = await razorpay.orders.create({
        amount: Math.round(amount * 100),
        // Convert to paise
        currency: "INR",
        receipt: `receipt_${packageId}_${Date.now()}`,
        notes: {
          packageId,
          customerName,
          customerEmail,
          packageName
        }
      });
      const paymentData = {
        packageId,
        customerEmail,
        customerName,
        amount,
        stripePaymentIntentId: razorpayOrder.id,
        // Store Razorpay order ID
        status: "pending"
      };
      await storage.createPayment(paymentData);
      res.json({
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        key: process.env.RAZORPAY_KEY_ID,
        // Send the key to frontend
        name: "Leadcrest Consulting",
        description: `Payment for ${packageName}`,
        prefill: {
          name: customerName,
          email: customerEmail
        },
        theme: {
          color: "#D4AF37"
        }
      });
    } catch (error) {
      console.error("Razorpay order creation error:", error);
      res.status(500).json({ message: "Error creating Razorpay order: " + error.message });
    }
  });
  app2.post("/api/create-razorpay-order", async (req, res) => {
    try {
      const { amount, packageId, customerName, customerEmail, packageName } = req.body;
      if (!amount || !packageId || !customerName || !customerEmail) {
        return res.status(400).json({ message: "Missing required payment data" });
      }
      const paymentData = {
        packageId,
        customerEmail,
        customerName,
        amount,
        stripePaymentIntentId: `razorpay_${Date.now()}`,
        // Temporary ID for now
        status: "pending"
      };
      const payment = await storage.createPayment(paymentData);
      res.json({
        orderId: payment.id,
        amount: amount * 100,
        // Convert to paise
        currency: "INR",
        name: packageName,
        description: `Payment for ${packageName} by ${customerName}`,
        prefill: {
          name: customerName,
          email: customerEmail
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating payment order: " + error.message });
    }
  });
  app2.post("/api/verify-payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ success: false, message: "Missing payment verification data" });
      }
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(body.toString()).digest("hex");
      if (expectedSignature === razorpay_signature) {
        await storage.updatePaymentStatus(razorpay_order_id, "completed");
        const bookings2 = await storage.getAllBookings();
        const relatedBooking = bookings2.find((b) => b.razorpayOrderId === razorpay_order_id);
        if (relatedBooking) {
          await storage.updateBookingStatus(relatedBooking.id, "completed");
        }
        res.json({ success: true, message: "Payment verified and processed successfully" });
      } else {
        res.status(400).json({ success: false, message: "Payment verification failed" });
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      res.status(500).json({ success: false, message: "Error verifying payment: " + error.message });
    }
  });
  app2.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      if (bookingData.bookingType === "investment") {
        const mockRazorpayOrderId = `order_${Date.now()}`;
        booking.razorpayOrderId = mockRazorpayOrderId;
      }
      res.json({ booking, bookingType: bookingData.bookingType });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Failed to create booking" });
    }
  });
  app2.get("/api/bookings", async (req, res) => {
    try {
      const bookings2 = await storage.getAllBookings();
      res.json(bookings2);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });
  app2.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const booking = await storage.updateBookingStatus(id, status);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      console.error("Error updating booking status:", error);
      res.status(500).json({ error: "Failed to update booking status" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
