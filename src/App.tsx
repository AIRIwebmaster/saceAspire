import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Users,
  GraduationCap,
  Lightbulb,
  Wallet,
  MonitorPlay,
  Target,
  Compass,
  MapPin,
  Mail,
  CheckCircle2,
  ExternalLink,
  HandHeart,
  Sparkles,
} from 'lucide-react';

const base = '#';
const logo =
  'https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/SACE-Aspire-logo.png';
const donate =
  'https://www.zeffy.com/en-CA/donation-form/empower-communities-transform-live';
const volunteer =
  'https://docs.google.com/forms/d/e/1FAIpQLSeV46guwlS2Q8jFotjIoz3Vp5iJTcpix453seEfMubw9QPXLw/viewform?pli=1';
const nav = [
  { title: 'Who We Are', slug: 'about' },
  { title: 'Vision', slug: 'vision' },
  { title: 'Programs', slug: 'programs' },
  { title: 'Support', slug: 'support' },
  { title: 'Partners', slug: 'partners' },
  { title: 'Events', slug: 'events' },
  { title: 'Get Involved', slug: 'contact' },
];
const programs = [
  {
    slug: 'secure-the-bag',
    title: 'Secure the Bag',
    eyebrow: 'FINANCIAL LITERACY',
    image:
      'https://www.bipocfoundation.org/wp-content/uploads/2025/07/DSC03452-scaled.jpg',
    intro:
      'Providing essential financial literacy, economic empowerment tools, and funding pathways to secure sustainable futures for youth and families.',
    tagline: 'Building financial confidence for a stronger tomorrow.',
    pillars: [
      'Financial literacy and practical money skills',
      'Entrepreneurship and economic empowerment',
      'Pathways to financial independence',
    ],
    body: 'Secure the Bag is designed to help youth and families gain practical knowledge, confidence, and the tools to make informed financial decisions. By connecting learning with opportunities for personal and economic growth, the program supports long-term resilience.',
    cta: 'Apply to Secure the Bag',
    url: 'https://bit.ly/STBApplicationForm2026',
  },
  {
    slug: 'indigenous-microbursary',
    title: 'Indigenous Microbursary',
    eyebrow: 'EDUCATION SUPPORT',
    image:
      'https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Microbursary-main-flier-.jpg',
    intro:
      'Direct educational financial grants and micro-support designed to alleviate academic expenses and elevate Indigenous students nationwide.',
    tagline: 'Making space for Indigenous learners to thrive.',
    pillars: [
      'Support for education-related expenses',
      'Reducing financial barriers to learning',
      'Honouring Indigenous leadership and student success',
    ],
    body: 'Education can open doors, but everyday costs can create real barriers. The Indigenous Microbursary program centres accessible educational support for Indigenous students and the opportunities they deserve to pursue their goals.',
    cta: 'Apply for the Microbursary',
    url: 'https://bit.ly/BFMicrobursary',
    secondCTA: 'Join the Indigenous Advisory Committee',
    secondURL: 'https://bit.ly/IndigenousAdvisoryCommitteeMemberForm',
  },
  {
    slug: 'indigenous-pitch-competition',
    title: 'Indigenous Pitch Competition',
    eyebrow: 'ENTREPRENEURSHIP',
    image:
      'https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg',
    intro:
      'A flagship platform showcasing and funding innovative business ventures led by Indigenous creators, entrepreneurs, and visionaries.',
    tagline: 'Amplifying bold ideas. Celebrating Indigenous innovation.',
    pillars: [
      'A platform to present entrepreneurial ideas',
      'Visibility for Indigenous-led ventures',
      'Connections to growth and funding pathways',
    ],
    body: 'The Indigenous Pitch Competition provides a platform where Indigenous innovators can share their ideas, strengthen their entrepreneurial voice, and pursue opportunities to bring their ventures forward. It recognises the creativity, leadership, and impact of Indigenous entrepreneurship.',
    cta: 'Apply to the Pitch Competition',
    url: 'https://bit.ly/IPCpitchcompetition',
  },
  {
    slug: 'digital-media-scholarship',
    title: 'Digital Media & Student Scholarships',
    eyebrow: 'DIGITAL SKILLS',
    image:
      'https://www.bipocfoundation.org/wp-content/uploads/2025/07/kid2.png',
    intro:
      'Empowering creative digital skills training alongside academic scholarship packages to foster next-gen media creators and tech leaders.',
    tagline: 'Giving creative talent the tools to go further.',
    pillars: [
      'Creative digital skills and media literacy',
      'Opportunities to explore technology careers',
      'Education and scholarship pathways',
    ],
    body: 'Digital media skills are increasingly important across creative industries and the broader economy. This program connects skills development with education-focused support so emerging creators and future technology leaders can explore their potential.',
    cta: 'Enquire About This Program',
    url: '#/contact',
  },
];
const slides = [
  {
    badge: 'COMMUNITY EMPOWERMENT',
    title: 'Building Stronger Communities Across Canada',
    description:
      'We empower individuals and local groups through grants, advocacy, and sustainable community initiatives that deliver lasting social impact nationwide.',
    image:
      'https://saceaspirefoundation.org/wp-content/uploads/2026/02/can1.jpg',
    primary: 'Get Involved',
    to: 'contact',
    secondary: 'Our Programs',
    to2: 'programs',
  },
  {
    badge: 'LEADERSHIP & INNOVATION',
    title: 'Empowering People. Inspiring Lasting Change.',
    description:
      'Through youth leadership training, dedicated research, and grassroots action, we unlock full potential and power transformation where it matters most.',
    image:
      'https://saceaspirefoundation.org/wp-content/uploads/2026/02/can3.webp',
    primary: 'Explore Initiatives',
    to: 'programs',
    secondary: 'Contact Us',
    to2: 'contact',
  },
  {
    badge: 'STRATEGIC PARTNERSHIPS',
    title: 'Together, We Create a Sustainable Future',
    description:
      'Partner with us, volunteer your expertise, or support our mission to uplift underserved communities and build an inclusive tomorrow for all.',
    image:
      'https://saceaspirefoundation.org/wp-content/uploads/2026/02/can2-1.jpg',
    primary: 'Partner With Us',
    to: 'partners',
    secondary: 'Make a Donation',
    to2: 'support',
  },
];
const href = (slug: string) => base + '/' + slug;
const A = ({
  to,
  children,
  className = '',
  external = false,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) => (
  <a
    className={className}
    href={external ? to : href(to)}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
  >
    {children}
  </a>
);
const Btn = ({
  to,
  children,
  light = false,
  external = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
  external?: boolean;
}) => (
  <A
    to={to}
    external={external}
    className={'button ' + (light ? 'button-light' : 'button-primary')}
  >
    {children}
    <ArrowUpRight size={17} />
  </A>
);
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="eyebrow">
    <span className="eyedot" />
    {children}
  </div>);
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner">
        <A to="" className="logo-link">
          <img src={logo} alt="SACE Aspire Foundation" />
        </A>
        <nav
          className={open ? 'navigation open' : 'navigation'}
          aria-label="Main navigation"
        >
          {nav.map(n => (
            <A
              key={n.slug}
              to={n.slug}
              className={location.hash === '#/' + n.slug ? 'active' : ''}
            >
              {n.title}
            </A>
          ))}
          <div className="nav-mobile-donate">
            <Btn to={donate} external>
              Donate Now
            </Btn>
          </div>
        </nav>
        <A to={donate} external className="nav-donate">
          Donate Now <Heart size={16} />
        </A>
        <button
          aria-label="Toggle navigation"
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src={logo} alt="SACE Aspire Foundation" />
          <p>
            Empowering communities. Driving sustainable impact. Creating
            pathways to opportunity across Canada.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {nav.slice(0, 4).map(n => (
            <A key={n.slug} to={n.slug}>
              {n.title}
            </A>
          ))}
        </div>
        <div>
          <h4>Take Action</h4>
          <A to="partners">Our Partners</A>
          <A to="contact">Get Involved</A>
          <A to={volunteer} external>
            Volunteer
          </A>
          <A to={donate} external>
            Make a Donation
          </A>
        </div>
        <div>
          <h4>Stay Connected</h4>
          <p>
            Be part of a future where every community has the opportunity to
            thrive.
          </p>
          <Btn to="contact" light>
            Contact Us
          </Btn>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} SACE Aspire Foundation. All rights
          reserved.
        </span>
        <span>Canada · Registered charity BN: 756635629RR0001</span>
      </div>
    </footer>
  );
}
function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section
      className={'page-hero ' + (image ? 'with-image' : '')}
      style={
        image
          ? {
              backgroundImage:
                'linear-gradient(90deg,rgba(4,17,29,.94),rgba(4,17,29,.48)),url(' +
                image +
                ')',
            }
          : {}
      }
    >
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="breadcrumb">
          <A to="">Home</A>
          <span> / </span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
function ProgramCards() {
  return (
    <div className="program-grid">
      {programs.map(p => (
        <article className="program-card" key={p.slug}>
          <A to={p.slug} className="program-img">
            <img src={p.image} alt={p.title} loading="lazy" />
            <span>{p.eyebrow}</span>
          </A>
          <div className="program-card-body">
            <h3>{p.title}</h3>
            <p>{p.intro}</p>
            <A to={p.slug} className="text-link">
              Learn More <ArrowUpRight size={18} />
            </A>
          </div>
        </article>
      ))}
    </div>
  );
}
function MissionVision() {
  return (
    <section className="dark-section mission-vision">
      <div className="container">
        <div className="section-head centered light">
          <Eyebrow>PURPOSE & DIRECTION</Eyebrow>
          <h2>
            Our Mission <span className="amp">&</span> Vision
          </h2>
          <p>
            We are committed to strengthening rural and underserved communities
            across Canada through inclusive systems that expand access to
            education, social support, and opportunity.
          </p>
        </div>
        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-icon">
              <Target />
            </div>
            <span className="card-number">01 / OBJECTIVE</span>
            <h3>Our Mission</h3>
            <p>
              To strengthen rural and underserved communities across Canada by
              building inclusive systems that expand access to education and
              social supports, especially for youth pursuing pathways in STEAM
              and other future-focused fields.
            </p>
          </div>
          <div className="vision-card green">
            <div className="vision-icon">
              <Compass />
            </div>
            <span className="card-number">02 / FUTURE</span>
            <h3>Our Vision</h3>
            <p>
              A Canada where every community, regardless of geography or
              circumstance, has equitable access to education, essential
              support, and the opportunity to thrive.
            </p>
          </div>
        </div>
      </div>    </section>
  );
}
function ImpactPrograms({ showExploreButton = true }: { showExploreButton?: boolean }) {
  return (
    <section className="section pale">
      <div className="container">
        <div className="section-head centered">
          <Eyebrow>DIRECT ACTION</Eyebrow>
          <h2>
            Our Current <em>Programs</em>
          </h2>
          <p>
            We create meaningful change through targeted programs designed to
            address the unique needs of communities and empower the next
            generation.
          </p>
        </div>
        <ProgramCards />
        {showExploreButton && <div className="center-action">
          <Btn to="programs">Explore All Programs</Btn>
        </div>}
      </div>
    </section>
  );
}
function SupportStrip() {
  return (
    <section className="support-band">
      <div className="container support-band-grid">
        <div>
          <Eyebrow>BE PART OF THE CHANGE</Eyebrow>
          <h2>Your support can help create a brighter future.</h2>
          <p>
            Whether you give, volunteer, or partner, there is a place for you in
            building stronger communities.
          </p>
        </div>
        <div className="support-actions">
          <Btn to={donate} external>
            Make a Donation
          </Btn>
          <Btn to="contact" light>
            Get Involved
          </Btn>
        </div>
      </div>
    </section>
  );
}
function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setI(v => (v + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [i]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setI(v => (v + 1) % 3);
      if (e.key === 'ArrowLeft') setI(v => (v + 2) % 3);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);
  let start = 0;
  return (
    <>
      <section
        className="hero-slider"
        onTouchStart={e => {
          start = e.touches[0].clientX;
        }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - start;
          if (Math.abs(dx) > 50) setI(v => (v + (dx < 0 ? 1 : 2)) % 3);
        }}
      >
        {slides.map((s, n) => (
          <div
            key={n}
            className={'hero-slide ' + (i === n ? 'current' : '')}
            style={{
              backgroundImage:
                'linear-gradient(90deg,rgba(3,15,27,.90) 0%,rgba(3,15,27,.58) 53%,rgba(3,15,27,.18) 100%),url(' +
                s.image +
                ')',
            }}
          >
            <div className="container hero-content">
              <Eyebrow>{s.badge}</Eyebrow>
              <h1>{s.title}</h1>
              <p>{s.description}</p>
              <div className="hero-buttons">
                <Btn to={s.to}>{s.primary}</Btn>
                <Btn to={s.to2} light>
                  {s.secondary}
                </Btn>
              </div>
            </div>
          </div>
        ))}
        <div className="container hero-controls">
          <div className="slide-index">
            0{i + 1}
            <span> / 03</span>
            <div className="progress-bars">
              {slides.map((_, n) => (
                <button
                  aria-label={'Go to slide ' + (n + 1)}
                  onClick={() => setI(n)}
                  key={n}
                  className={i === n ? 'on' : ''}
                />
              ))}
            </div>
          </div>
          <div className="slider-arrows">
            <button
              aria-label="Previous slide"
              onClick={() => setI((i + 2) % 3)}
            >
              <ChevronLeft />
            </button>
            <button aria-label="Next slide" onClick={() => setI((i + 1) % 3)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
      <section className="section intro-section">
        <div className="container split intro-grid">
          <div>
            <Eyebrow>THE SACE FOUNDATION</Eyebrow>
            <h2>
              Empowering <em>Communities.</em>
              <br />
              Driving Sustainable <em>Impact.</em>
            </h2>
            <p className="lead">
              SACE Aspire Foundation empowers communities nationwide through
              innovative programs, advocacy, and lasting partnerships that
              create positive change.
            </p>
            <p>
              Our work centres on access, education, youth potential, and
              community-led opportunities that can make a lasting difference.
            </p>
            <div className="button-row">
              <Btn to="about">Discover Our Mission</Btn>
              <A to="programs" className="subtle-link">
                Explore Programs <ArrowRight size={17} />
              </A>
            </div>
          </div>
          <div className="visual-frame">
            <img
              src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/A7I06919-scaled.jpg"
              alt="People collaborating around a table"
            />
            <div className="visual-note">
              <MapPin size={23} />
              <span>
                <strong>Across Canada</strong>
                <small>Community-focused impact</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="trust-ticker">
        <div className="ticker-track">
          {[0, 1].map(n => (
            <React.Fragment key={n}>
              {[
                'Registered Canadian Charity',
                'BN: 756635629RR0001',
                'Transparent Financial Reporting',
                'Strong Governance',
              ].map(t => (
                <span key={n + t}>
                  <i /> {t}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <section className="section pale"><div className="container"><div className="section-head centered"><Eyebrow>OUR CURRENT PROGRAMS</Eyebrow><h2>Supporting community <em>potential.</em></h2></div><div className="related-grid">{[programs[1],programs[2],programs[0]].map(p=><A key={p.slug} to={p.slug} className="related-card"><img src={p.image} alt={p.title}/><div><small>{p.eyebrow}</small><h3>{p.title}</h3><ArrowUpRight size={19}/></div></A>)}</div></div></section><section className="section event-promo"><div className="container split"><div><Eyebrow>PAST EVENT · OCTOBER 23, 2026</Eyebrow><h2>Indigenous Pitch Competition & <em>Community Gathering.</em></h2><p className="lead">Hosted by BIPOC Foundation at Fredrick Theatre, Lethbridge Polytechnic, this hybrid gathering brought people together to explore economic sovereignty, collaboration and systemic change for Indigenous communities.</p><Btn to="events/indigenous-peoples-celebration-2026">Explore The Event</Btn></div><div className="visual-frame"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/A7I06767-scaled.jpg" alt="Community event and presentation"/></div></div></section><MissionVision />
      <section className="section photo-feature">
        <div className="container split">
          <div className="visual-frame tall">
            <img
              src="https://www.bipocfoundation.org/wp-content/uploads/2025/07/DSC03452-scaled.jpg"
              alt="Community members connecting outdoors"
            />
          </div>
          <div>
            <Eyebrow>BUILDING TOGETHER</Eyebrow>
            <h2>
              Meaningful change begins with <em>connection.</em>            </h2>
            <p className="lead">
              Our communities are stronger when people have the resources,
              encouragement, and opportunities to flourish.
            </p>
            <p>
              We believe in partnerships that listen, programs that respond to
              real needs, and action that advances a more inclusive Canada.
            </p>
            <Btn to="partners">Meet Our Partners</Btn>
          </div>
        </div>
      </section>
      <SupportStrip />
    </>
  );
}
function About() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title="Rooted in Community. Focused on Possibility."
        description="Discover the people-first purpose behind SACE Aspire Foundation and our commitment to inclusive opportunity across Canada."
        image="https://www.bipocfoundation.org/wp-content/uploads/2024/11/Website-Membership-hero-image-1.png"
      />
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>ABOUT THE FOUNDATION</Eyebrow>
            <h2>
              Opportunity should have <em>no boundaries.</em>
            </h2>
            <p className="lead">
              SACE Aspire Foundation works to strengthen rural and underserved
              communities by expanding access to education, essential support,
              and pathways to economic empowerment.
            </p>
            <p>
              Through community programs, advocacy, and partnerships, we seek
              to address barriers that can prevent individuals and families from
              realising their potential. Our work emphasises youth,
              Indigenous-led innovation, future-focused learning, and stronger
              local ecosystems.
            </p>
            <Btn to="programs">Our Programs</Btn>
          </div>
          <div className="visual-frame tall">
            <img
              src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/A7I06976-scaled.jpg"
              alt="Students working together"
            />
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <div className="section-head centered">
            <Eyebrow>WHAT GUIDES US</Eyebrow>
            <h2>
              Principles behind <em>our work</em>
            </h2>
          </div>
          <div className="three-grid">
            {[
              {
                title: 'Access & Inclusion',
                desc: 'Creating welcoming pathways for communities that face barriers to opportunity.',
                icon: <Users />,
              },
              {
                title: 'Community-Led Growth',
                desc: 'Supporting ideas and initiatives that reflect the needs and strengths of the people they serve.',
                icon: <HandHeart />,
              },
              {
                title: 'Sustainable Impact',
                desc: 'Focusing on skills, confidence, and opportunities that can deliver value beyond a single moment.',
                icon: <Sparkles />,
              },
            ].map(v => (
              <div className="info-card" key={v.title}>
                <div className="icon-round">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MissionVision />
      <SupportStrip />
    </>
  );
}
function Vision() {
  return (
    <>
      <PageHero
        eyebrow="OUR PURPOSE"
        title="A Vision for Stronger, More Inclusive Communities."
        description="Education, essential support, and opportunity should be accessible regardless of geography or circumstance."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
      />
      <MissionVision />
      <section className="section">
        <div className="container">
          <div className="section-head centered">
            <Eyebrow>FROM PURPOSE TO ACTION</Eyebrow>
            <h2>
              How we move <em>forward</em>
            </h2>
            <p>
              Our mission informs the areas where we focus our efforts and build
              meaningful collaborations.
            </p>
          </div>
          <div className="three-grid">
            {[
              {
                title: 'Education & STEAM',
                desc: 'Encouraging access to learning and future-focused skills.',
              },
              {
                title: 'Economic Empowerment',
                desc: 'Supporting financial confidence and entrepreneurial opportunity.',
              },
              {
                title: 'Community Partnerships',
                desc: 'Working alongside organisations and changemakers to strengthen local opportunities.',
              },
            ].map((v, i) => (
              <div className="number-card" key={v.title}>
                <span>0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SupportStrip />
    </>
  );
}
function Programs() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE DO"
        title="Programs That Open Doors."
        description="Explore our initiatives supporting financial empowerment, Indigenous education and entrepreneurship, and next-generation digital skills."
        image="https://www.bipocfoundation.org/wp-content/uploads/2025/06/20240705_135255-scaled.jpg"
      />
      <ImpactPrograms showExploreButton={false} />
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>WHY OUR PROGRAMS MATTER</Eyebrow>
            <h2>
              From potential to <em>possibility.</em>
            </h2>
            <p className="lead">
              We believe opportunities should be practical, inclusive, and
              connected to real-life goals.
            </p>
            <p>
              Each program focuses on a different pathway to empowerment while
              sharing a commitment to stronger communities and brighter futures.
            </p>
            <Btn to="contact">Connect With Us</Btn>
          </div>
          <div className="visual-frame">
            <img
              src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/A7I06765-scaled.jpg"
              alt="People planning an initiative together"
            />
          </div>
        </div>
      </section>
      <SupportStrip />
    </>
  );
}
const partnerLogoRoot = 'https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/';

function BagWinnersShowcase(){
 const [active,setActive]=useState(0);
 const go=(i:number)=>setActive((i+5)%5);
 const images=["https://www.bipocfoundation.org/wp-content/uploads/2026/06/1_20260225_201144_0000.png","https://www.bipocfoundation.org/wp-content/uploads/2026/06/2_20260225_201144_0001.png","https://www.bipocfoundation.org/wp-content/uploads/2026/06/3_20260225_201144_0002.png","https://www.bipocfoundation.org/wp-content/uploads/2026/06/Community-grant-winner_20260226_144745_0000.png","https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260301-WA0095.jpg"];
 return <section className="bag-winners"><div className="container"><div className="section-head centered light"><Eyebrow>COMMUNITY IMPACT</Eyebrow><h2>Celebrating Our <em>Past Winners.</em></h2><p>Highlights shared by BIPOC Foundation from previous Secure the Bag grant recipients.</p></div><div className="bag-winners-view">{images.map((url,i)=><button key={url} type="button" aria-label={'Show winner '+(i+1)} onClick={()=>go(i)} className={'bag-winner '+(i===active?'bag-current':i===(active+1)%images.length?'bag-next':i===(active+images.length-1)%images.length?'bag-prev':'bag-hidden')}><img src={url} alt={'Secure the Bag past winner spotlight '+(i+1)} loading="lazy"/></button>)}</div><div className="bag-winners-nav"><button type="button" onClick={()=>go(active-1)} aria-label="Previous winner"><ChevronLeft/></button><div className="bag-dots">{images.map((_,i)=><button key={i} type="button" onClick={()=>go(i)} aria-label={'Winner '+(i+1)} className={i===active?'selected':''}/>)}</div><button type="button" onClick={()=>go(active+1)} aria-label="Next winner"><ChevronRight/></button></div></div></section>
}
function GrantDetail(){const streams=[['Community','For grassroots organisers and community leaders undertaking cultural programming and community-impact initiatives.'],['Artists','For visual artists, musicians, performers, writers and digital creators developing and sharing creative work.'],['Students','For students in secondary, post-secondary, vocational or professional development pathways.'],['Entrepreneurs','For aspiring entrepreneurs, start-ups and business owners seeking to launch or grow.'],['Indigenous','A dedicated stream offering culturally responsive support that recognises Indigenous knowledge and practices.']];const requirements=['Identify as Black, Indigenous or a Person of Colour in Southern Alberta.','Have volunteer experience and supply a reference letter with verification contact details.','Have attended at least two BIPOC Foundation events or programs in 2026, with proof.','Book and attend a 15-minute coffee chat with the BIPOC Grants Team.','Entrepreneurship applicants: attend a BIPOC Membership Information Session and supply evidence.'];return <><PageHero eyebrow="2026 COMMUNITY GRANTS" title="Secure the Bag" description="Supporting Black, Indigenous and People of Colour in Southern Alberta through grants for community projects, arts, education and entrepreneurship." image="https://www.bipocfoundation.org/wp-content/uploads/2025/06/3.png"/><section className="section"><div className="container split"><div><Eyebrow>IN PARTNERSHIP WITH BIPOC FOUNDATION</Eyebrow><h2>About the <em>initiative.</em></h2><p className="lead">Secure the BAG is a BIPOC Foundation initiative created to help remove financial barriers and foster economic growth through accessible community-focused grants.</p><p>BIPOC Foundation developed and delivered the program in 2025. SACE Aspire joined as a partner in 2026, supporting wider community outreach and the Indigenous grant stream. The program supports initiatives in arts, entrepreneurship, education and community development.</p><Btn to="https://bit.ly/STBApplicationForm2026" external>Open Application Form</Btn></div><div className="visual-frame tall"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/A7I06760-scaled.jpg" alt="Community planning session"/></div></div></section><section className="section pale"><div className="container"><div className="section-head centered"><Eyebrow>ABOUT THE INITIATIVE</Eyebrow><h2>Community potential, <em>backed by opportunity.</em></h2><p>The BIPOC Activation Grant was created by BIPOC Foundation to support Black, Indigenous and People of Colour in Southern Alberta with resources and practical opportunities to bring locally meaningful ideas to life.</p></div><div className="bag-mission-grid"><article><h3>Our Mission</h3><p>Support the success and empowerment of BIPOC communities through strategic funding and practical support.</p></article><article><h3>Our Vision</h3><p>A thriving, equitable society where BIPOC individuals have resources to bring their ideas to life.</p></article></div></div></section><BagWinnersShowcase/><section className="section pale"><div className="container"><div className="section-head centered"><Eyebrow>FIVE FUNDING STREAMS</Eyebrow><h2>Find your <em>pathway.</em></h2></div><div className="focus-grid">{streams.map((x,i)=><div className="number-card" key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></div></section><section className="section"><div className="container"><div className="section-head"><Eyebrow>BEFORE YOU APPLY</Eyebrow><h2>Eligibility & <em>required documents.</em></h2><p>Applicants must meet the stated requirements. Incomplete applications may not be considered.</p></div><div className="two-info"><div><h3>Eligibility checklist</h3>{requirements.map(x=><p className="check-line" key={x}><CheckCircle2 size={18}/>{x}</p>)}</div><div><h3>Documents to prepare (PDF)</h3>{['Letter of project intent (maximum 500 words).','Proof of fit for your chosen stream, such as a project description or student admission letter.','Volunteer reference letter.','Proof of attendance at two eligible 2026 events.','For entrepreneurs: proof of membership information-session attendance.'].map(x=><p className="check-line" key={x}><CheckCircle2 size={18}/>{x}</p>)}<p>Indigenous stream applicants should explain how their project incorporates Indigenous knowledge or cultural practices.</p></div></div></div></section><section className="section pale"><div className="container"><div className="section-head"><Eyebrow>APPLICATION GUIDE</Eyebrow><h2>How to <em>apply.</em></h2></div><div className="four-grid">{[['01','Complete the form','Enter your contact details, confirm eligibility and select your grant stream.'],['02','Upload documents','Attach all supporting evidence and required letters in PDF format.'],['03','Submit online','Review the application and submit through the official application form.'],['04','Check your email','A confirmation email is expected after successful submission.']].map(x=><div className="number-card" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div><div className="event-highlights timeline"><div><strong>Jan–Oct 2026</strong><small>Rolling applications</small></div><div><strong>November 2026</strong><small>Adjudication</small></div><div><strong>December 2026</strong><small>Announcements (per guide)</small></div></div><p className="note-text">The supplied material contains conflicting announcement timing (December and a Black History Month celebration). Confirm the final schedule with BIPOC Foundation.</p><Btn to="https://bit.ly/STBApplicationForm2026" external>Apply Now <span aria-hidden="true">↗</span></Btn><p className="note-text">This page is SACE Aspire Foundation's partner presentation of BIPOC Foundation's grant initiative. Funding, eligibility and award decisions are subject to the lead organiser's requirements.</p><p className="note-text">Application questions: <a href="mailto:letsmakeithappen@bipocfoundation.org">letsmakeithappen@bipocfoundation.org</a></p></div></section><section className="section"><div className="container"><div className="section-head"><Eyebrow>GRANT COLLABORATORS</Eyebrow><h2>Secure the Bag <em>Partners.</em></h2></div><div className="brand-logo-grid"><a className="brand-logo-link" href="https://bipocfoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit BIPOC Foundation website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Bipoc-logo.jpg" alt="BIPOC Foundation logo"/><figcaption>BIPOC Foundation <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://www.instagram.com/artsmarvels?psln=eGg4NWV3OGZ0bzFq" target="_blank" rel="noopener noreferrer" aria-label="Visit Arts Marvels on Instagram"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Arts-Marvel-logo.jpg" alt="Arts Marvels logo"/><figcaption>Arts Marvels <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://saceaspirefoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit SACE Aspire Foundation website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/SACE-Aspire-logo.png" alt="SACE Aspire Foundation logo"/><figcaption>SACE Aspire Foundation <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://ywcalethbridge.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit YWCA Lethbridge website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/YWCA-logo.jpg" alt="YWCA Lethbridge logo"/><figcaption>YWCA Lethbridge <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://www.hradvantageservices.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit HR Advantage website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/HR-Advantage-logo.jpg" alt="HR Advantage logo"/><figcaption>HR Advantage <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://interfaithfoodbank.ca/contact-us/" target="_blank" rel="noopener noreferrer" aria-label="Visit Interfaith Food Bank website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/International-Food-Bank-logo.jpg" alt="Interfaith Food Bank logo"/><figcaption>Interfaith Food Bank <ExternalLink size={12}/></figcaption></figure></a></div></div></section></>}
function PitchDetail(){return <><PageHero eyebrow="INDIGENOUS-LED ENTREPRENEURSHIP" title="Indigenous Pitch Competition" description="Pitch your vision. Connect with mentors. Access support that can move your idea forward." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"/><section className="section"><div className="container"><div className="closed-notice"><strong>Applications Closed</strong><span>The published application deadline was September 20, 2026.</span></div><div className="split"><div><Eyebrow>BIPOC FOUNDATION · WITH SACE ASPIRE</Eyebrow><h2>Ideas deserve more than <em>applause.</em></h2><p className="lead">Part of the wider Indigenous Peoples Celebration 2026, the Pitch Gathering is designed around Indigenous leadership, community-defined priorities and practical support.</p><p>Rather than a high-pressure winner-takes-all contest, the gathering centres storytelling, mentoring, resource sharing and meaningful relationship-building. Indigenous entrepreneurs, youth leaders, creatives, storytellers, organisers, social enterprises and cultural program leaders were invited to apply.</p><A to="events/indigenous-peoples-celebration-2026" className="button button-primary">View October 23 Event <ArrowUpRight size={18}/></A></div><div className="visual-frame tall"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-13-at-12.24.47-PM-1.jpeg" alt="Entrepreneurs sharing ideas"/></div></div></div></section><section className="section pale"><div className="container"><div className="section-head centered"><Eyebrow>THE EXPERIENCE</Eyebrow><h2>Present. Connect. <em>Grow.</em></h2></div><div className="three-grid">{[['01','Share your story','The program envisages five to seven selected presenters, each offering a five-minute presentation.'],['02','Join the conversation','A five-minute community Q&A and support dialogue creates room for constructive feedback.'],['03','Build relationships','Potential support includes mentorship, seed funding, in-kind resources, introductions and pledges.']].map(x=><div className="number-card" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section><section className="section"><div className="container detail-panel"><div><Eyebrow>OCTOBER 23, 2026</Eyebrow><h2>Join the Indigenous Peoples Celebration.</h2><p>Hosted by BIPOC Foundation at Fredrick Theatre, Lethbridge Polytechnic, the hybrid event includes the learning panel, pitch gathering and community microbursary awards.</p></div><div className="detail-actions"><Btn to="events/indigenous-peoples-celebration-2026">Explore Event Details</Btn><A external to="https://bit.ly/IPCpitchcompetition" className="subtle-link">View original application link <ExternalLink size={15}/></A></div></div></section><section className="section flyer-section"><div className="container"><div className="section-head centered"><Eyebrow>OFFICIAL PROGRAM MATERIALS</Eyebrow><h2>Pitch Competition <em>flyers & resources.</em></h2><p>Explore the supplied campaign materials. Select a flyer to view the original image.</p></div><div className="flyer-grid"><a href="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg" target="_blank" rel="noopener noreferrer" className="flyer-item"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg" alt="IPC 2026 main flyer" loading="lazy"/><div><strong>IPC 2026 main flyer</strong><span>View full flyer <ExternalLink size={15}/></span></div></a><a href="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-2.png" target="_blank" rel="noopener noreferrer" className="flyer-item"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-2.png" alt="IPC promotional flyer" loading="lazy"/><div><strong>IPC promotional flyer</strong><span>View full flyer <ExternalLink size={15}/></span></div></a></div></div></section></>}
function MicroDetail(){return <><PageHero eyebrow="INDIGENOUS COMMUNITY INVESTMENT" title="Indigenous Community Microbursary" description="Direct support for Indigenous-led grassroots initiatives that strengthen culture, wellness, learning, leadership and community connection." image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"/><section className="section"><div className="container split"><div><Eyebrow>IN PARTNERSHIP WITH BIPOC FOUNDATION & RINSA</Eyebrow><h2>Investing in <em>Indigenous-led ideas.</em></h2><p className="lead">The Indigenous Community Microbursary supports individuals, youth, entrepreneurs and small community groups advancing locally rooted projects.</p><p>It forms part of Indigenous Peoples Celebration 2026, a multi-month program led by BIPOC Foundation in partnership with SACE Aspire, combining funding, a pitch gathering, community advisory guidance and ongoing learning.</p><p>Published award levels are $500, $1,000 and $1,500, depending on funding availability and selection outcomes. The program aims to support three to five initiatives.</p><div className="closed-notice"><strong>Published application deadline: September 20, 2026</strong><span>Contact the program team to confirm whether any future rounds are accepting applications.</span></div></div><div className="visual-frame tall"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85" alt="Community support and education"/></div></div></section><section className="section pale"><div className="container"><div className="section-head"><Eyebrow>WHO CAN APPLY</Eyebrow><h2>Community-rooted <em>initiatives.</em></h2><p>The reference program identifies First Nations and Indigenous communities, youth and grassroots organisers, Elders, cultural knowledge keepers and community project leads in Southern Alberta. Projects involving non-Indigenous partners should demonstrate direct community partnership and confirm eligibility with the organisers.</p></div><div className="visual-frame wide-photo"><img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=85" alt="Community connections"/></div><div className="section-head" style={{marginTop:55}}><Eyebrow>ELIGIBLE PROJECT AREAS</Eyebrow><h2>Where support can <em>help.</em></h2></div><div className="micro-area-grid"><article className="micro-area-card"><h3>Cultural Revitalization</h3><p>Preserving, restoring and celebrating Indigenous cultural practices, traditions and ceremonies.</p></article><article className="micro-area-card"><h3>Language Preservation</h3><p>Documenting, teaching and revitalizing Indigenous languages at risk of being lost.</p></article><article className="micro-area-card"><h3>Youth Mentorship</h3><p>Connecting Indigenous youth with Elders and mentors to build identity and future pathways.</p></article><article className="micro-area-card"><h3>Wellness & Healing</h3><p>Community-led healing circles and wellness programs grounded in Indigenous knowledge.</p></article><article className="micro-area-card"><h3>Land-Based Programs</h3><p>Reconnecting communities to the land through traditional practices and ecological knowledge.</p></article><article className="micro-area-card"><h3>Community Education</h3><p>Grassroots learning initiatives that strengthen knowledge and skills.</p></article><article className="micro-area-card"><h3>Intergenerational Storytelling</h3><p>Bridging Elders and youth through oral history and storytelling.</p></article><article className="micro-area-card"><h3>Capacity-Building</h3><p>Strengthening the organisational and leadership capacity of Indigenous-led groups.</p></article></div></div></section><section className="section"><div className="container"><div className="section-head"><Eyebrow>HOW TO APPLY</Eyebrow><h2>Prepare your <em>proposal.</em></h2><p>The application materials call for a project summary, community impact statement, simple budget, leadership background and optional supporting materials. Review focuses on community impact, Indigenous leadership, feasibility, cultural relevance and clarity of plan.</p></div><div className="button-row"><A external to="https://bit.ly/BFMicrobursary" className="button button-primary">View Application Form <ArrowUpRight size={18}/></A><A external to="https://bit.ly/IndigenousAdvisoryCommitteeMemberForm" className="button button-light outlined">Indigenous Advisory Committee <ArrowUpRight size={18}/></A></div><p className="note-text">The published 2026 submission deadline has passed; these links are supplied for reference until organisers confirm a new application window.</p><div className="detail-panel" style={{marginTop:50}}><div><Eyebrow>RELATED OPPORTUNITY</Eyebrow><h2>Check Out the Indigenous Pitch Competition.</h2><p>Learn about the supportive pitch gathering and its October 23 community event.</p></div><Btn to="indigenous-pitch-competition">Explore Pitch Competition</Btn></div></div></section><section className="section pale"><div className="container"><div className="section-head"><Eyebrow>OUR COLLABORATORS</Eyebrow><h2>Indigenous Peoples Celebration <em>Trusted Partners.</em></h2></div><div className="brand-logo-grid"><a className="brand-logo-link" href="https://bipocfoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit BIPOC Foundation website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Bipoc-logo.jpg" alt="BIPOC Foundation logo"/><figcaption>BIPOC Foundation <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://saceaspirefoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit SACE Aspire Foundation website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/SACE-Aspire-logo.png" alt="SACE Aspire Foundation logo"/><figcaption>SACE Aspire Foundation <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://rinsa.ca/" target="_blank" rel="noopener noreferrer" aria-label="Visit RINSA website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Rinsa-1.png" alt="RINSA logo"/><figcaption>RINSA <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://bloodtribe.org/blood-tribe-economic-development/" target="_blank" rel="noopener noreferrer" aria-label="Visit Blood Tribe Economic Development website"><figure><img src="https://bloodtribe.org/wp-content/uploads/2025/05/BT-logo-copy.png" alt="Blood Tribe Economic Development logo"/><figcaption>Blood Tribe Economic Development <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://artslethbridge.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit Allied Arts Council website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Allied-Art-Council-.png" alt="Allied Arts Council logo"/><figcaption>Allied Arts Council <ExternalLink size={12}/></figcaption></figure></a></div></div></section><section className="section"><div className="container"><div className="section-head centered"><Eyebrow>PROGRAM HIGHLIGHTS & FLYERS</Eyebrow><h2>Explore the <em>program.</em></h2></div><div className="micro-highlights-grid"><a href="https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260622-WA0045.jpg" target="_blank" rel="noopener noreferrer"><img src="https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260622-WA0045.jpg" loading="lazy" alt="Microbursary highlight 1"/><span>Program highlight 1 ↗</span></a><a href="https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260622-WA0047.jpg" target="_blank" rel="noopener noreferrer"><img src="https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260622-WA0047.jpg" loading="lazy" alt="Microbursary highlight 2"/><span>Program highlight 2 ↗</span></a><a href="https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260622-WA0046.jpg" target="_blank" rel="noopener noreferrer"><img src="https://www.bipocfoundation.org/wp-content/uploads/2026/06/IMG-20260622-WA0046.jpg" loading="lazy" alt="Microbursary highlight 3"/><span>Program highlight 3 ↗</span></a></div></div></section><section className="section pale"><div className="container"><div className="section-head"><Eyebrow>GRANT BENEFITS & SUPPORT</Eyebrow><h2>Support beyond <em>the award.</em></h2></div><div className="micro-benefits-grid"><article><h3>Financial Awards</h3><p>Eligible projects may receive a micro-grant, subject to selection and available funding.</p></article><article><h3>Public Recognition</h3><p>Opportunities to celebrate selected community initiatives and their milestones.</p></article><article><h3>Mentorship Pairing</h3><p>Connections to people who can advise and support project development.</p></article><article><h3>Feature Spotlight Storytelling</h3><p>Opportunities to share initiative stories and their local impact.</p></article><article><h3>Networking Participation</h3><p>Space to connect with fellow leaders, supporters and community organisations.</p></article></div></div></section></>}
function ScholarshipDetail(){return <><PageHero eyebrow="DIGITAL OPPORTUNITY & EDUCATION" title="Digital Media & Scholarships" description="Creative digital support and practical education assistance for emerging creators and students." image="https://www.bipocfoundation.org/wp-content/uploads/2025/06/4.png"/><section className="section"><div className="container split"><div><Eyebrow>01 / DIGITAL MEDIA SUPPORT</Eyebrow><h2>Make your creativity <em>possible.</em></h2><p className="lead">Digital Media Support provides a pathway to request a free studio coupon code to access creative opportunities.</p><p>Email us to request your free studio coupon code. Please include your name and a brief description of your intended studio use.</p><a className="button button-primary" href="mailto:wilson@team.bipocfoundation.org?subject=Free%20Studio%20Coupon%20Code%20Request">Request Studio Coupon <Mail size={17}/></a></div><div className="visual-frame"><img src="https://www.bipocfoundation.org/wp-content/uploads/2025/06/4.png" alt="Creative media equipment"/></div></div></section><section className="section pale"><div className="container split"><div className="visual-frame"><img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85" alt="Students working together"/></div><div><Eyebrow>02 / SCHOLARSHIP & STUDENT SUPPORT</Eyebrow><h2>A little support. A bigger <em>possibility.</em></h2><p className="lead">Students may submit a written request explaining their educational need and how support would help.</p><p>Provide your name, email address, phone number and written request. Each submission is reviewed individually; funding is not guaranteed, and no more than $500 can be funded at a time.</p><a className="button button-primary" href="mailto:contact@bipocfoundation.org?subject=Student%20Support%20Request&body=Full%20name%3A%0AEmail%3A%0APhone%3A%0AWritten%20request%3A%0A">Email Student Support Request <Mail size={17}/></a><p className="note-text">Email links open your email application; they do not submit a website form.</p></div></div></section></>}
function EventsDirectory(){return <><PageHero eyebrow="SACE ASPIRE FOUNDATION" title="Events & Community Gatherings" description="Explore upcoming and past gatherings, learning opportunities and community celebrations. Select an event to view its dedicated page." image="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg"/><section className="section pale"><div className="container"><div className="section-head"><Eyebrow>EXPLORE OUR EVENTS</Eyebrow><h2>Community events & <em>experiences.</em></h2><p>Each event has its own dedicated page, with event status, details and supporting materials. Completed events remain available here before being moved to the archive.</p></div><div className="events-card-grid"><A to="events/indigenous-peoples-celebration-2026" className="event-feature-card"><div className="event-feature-image"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg" alt="Indigenous Peoples Celebration 2026 main flyer" loading="lazy"/><span>Past event · October 23, 2026</span></div><div className="event-feature-content"><span className="event-feature-type">INDIGENOUS PEOPLES CELEBRATION · COMPLETED</span><h3>National Indigenous Heritage Pitch Competition & Community Gathering</h3><p>Reclaiming the Narrative: a completed hybrid gathering at Fredrick Theatre, Lethbridge Polytechnic, featuring a learning panel, pitch competition and microbursary awards.</p><span className="event-feature-link">Explore event details <ArrowUpRight size={17}/></span></div></A></div><div className="events-directory-note"><h3>More events will appear here.</h3><p>New community events and opportunities will be added as dates, locations and event information are confirmed.</p></div></div></section></>}
function EventPage(){return <><PageHero eyebrow="PAST EVENT · OCTOBER 23, 2026 · LETHBRIDGE" title="Indigenous Pitch Competition & Community Gathering" description="A look back at Reclaiming the Narrative: a gathering focused on economic sovereignty, collaboration, and systemic change to support Indigenous communities." image="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-2.png"/><section className="section"><div className="container"><div className="event-highlights"><div><strong>October 23, 2026 · Completed</strong><small>Event date</small></div><div><strong>Fredrick Theatre, Lethbridge Polytechnic</strong><small>Location · Alberta</small></div><div><strong>Hybrid gathering</strong><small>Participation format</small></div></div><div className="split event-copy"><div><Eyebrow>ABOUT THE EVENT</Eyebrow><h2>From recognition to <em>action.</em></h2><p className="lead">Hosted by BIPOC Foundation in collaboration with SACE Aspire Foundation, RINSA and Blood Tribe Economic Development, this Indigenous Peoples Celebration gathering brought Indigenous leadership, economic sovereignty and community-driven change into focus.</p><p>The program brought together an Indigenous Learning Series panel, the National Indigenous Heritage Pitch Competition and Indigenous Community Microbursary awards.</p><p>The gathering created space for discussion, relationships and practical opportunities, highlighting Indigenous entrepreneurs, youth and grassroots initiatives.</p><A to="indigenous-pitch-competition" className="text-link">Explore the Pitch Competition <ArrowUpRight size={18}/></A></div><div className="visual-frame"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-13-at-12.24.47-PM.jpeg" alt="Community gathering"/></div></div></div></section><section className="section pale"><div className="container"><div className="section-head centered"><Eyebrow>EVENT PROGRAM</Eyebrow><h2>Three connected <em>experiences.</em></h2></div><div className="three-grid">{[['Indigenous Learning Series panel','Dialogue on systemic change, collaboration, and stronger community partnerships.'],['National Indigenous Heritage Pitch Competition','A supportive platform for selected Indigenous entrepreneurs and community leaders.'],['Indigenous Community Microbursary awards','Recognising and resourcing Indigenous-led initiatives and community projects.']].map((x,i)=><div className="number-card" key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div><div className="closed-notice">This event took place on October 23, 2026. The event page remains published as a past-event record and may be moved to the archive later.</div></div></section><section className="section"><div className="container"><div className="section-head"><Eyebrow>EVENT COLLABORATORS</Eyebrow><h2>Working <em>together.</em></h2></div><div className="brand-logo-grid"><a className="brand-logo-link" href="https://bipocfoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit BIPOC Foundation website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Bipoc-logo.jpg" alt="BIPOC Foundation logo"/><figcaption>BIPOC Foundation <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://saceaspirefoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit SACE Aspire Foundation website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/SACE-Aspire-logo.png" alt="SACE Aspire Foundation logo"/><figcaption>SACE Aspire Foundation <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://rinsa.ca/" target="_blank" rel="noopener noreferrer" aria-label="Visit RINSA website"><figure><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Rinsa-1.png" alt="RINSA logo"/><figcaption>RINSA <ExternalLink size={12}/></figcaption></figure></a><a className="brand-logo-link" href="https://bloodtribe.org/blood-tribe-economic-development/" target="_blank" rel="noopener noreferrer" aria-label="Visit Blood Tribe Economic Development website"><figure><img src="https://bloodtribe.org/wp-content/uploads/2025/05/BT-logo-copy.png" alt="Blood Tribe Economic Development logo"/><figcaption>Blood Tribe Economic Development <ExternalLink size={12}/></figcaption></figure></a></div></div></section><section className="section flyer-section"><div className="container"><div className="section-head centered"><Eyebrow>OFFICIAL PROGRAM MATERIALS</Eyebrow><h2>Pitch Competition <em>flyers & resources.</em></h2><p>Explore the supplied campaign materials. Select a flyer to view the original image.</p></div><div className="flyer-grid"><a href="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg" target="_blank" rel="noopener noreferrer" className="flyer-item"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-Main-Flyer-1.jpeg" alt="IPC 2026 main flyer" loading="lazy"/><div><strong>IPC 2026 main flyer</strong><span>View full flyer <ExternalLink size={15}/></span></div></a><a href="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-2.png" target="_blank" rel="noopener noreferrer" className="flyer-item"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/IPC-2.png" alt="IPC promotional flyer" loading="lazy"/><div><strong>IPC promotional flyer</strong><span>View full flyer <ExternalLink size={15}/></span></div></a></div></div></section><section className="section ipc-photos"><div className="container"><div className="section-head centered"><Eyebrow>CELEBRATION PHOTOGRAPHY</Eyebrow><h2>Indigenous Peoples <em>Celebration.</em></h2></div><div className="ipc-image-grid"><a href="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-13-at-12.24.47-PM-1.jpeg" target="_blank" rel="noopener noreferrer"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-13-at-12.24.47-PM-1.jpeg" loading="lazy" alt="IPC 2026 supplied photograph 1"/></a><a href="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-13-at-12.24.47-PM.jpeg" target="_blank" rel="noopener noreferrer"><img src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-13-at-12.24.47-PM.jpeg" loading="lazy" alt="IPC 2026 supplied photograph 2"/></a></div></div></section></>}
function ProgramDetail({ p }: { p: (typeof programs)[number] }) {
  if (p.slug === 'secure-the-bag') return <GrantDetail />;  if (p.slug === 'indigenous-pitch-competition') return <PitchDetail />;
  if (p.slug === 'indigenous-microbursary') return <MicroDetail />;
  if (p.slug === 'digital-media-scholarship') return <ScholarshipDetail />;
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.intro}
        image={p.image}
      />
      <section className="section">
        <div className="container split detail-intro">
          <div>
            <Eyebrow>ABOUT THE PROGRAM</Eyebrow>
            <h2>{p.tagline}</h2>
            <p className="lead">{p.body}</p>
            <div className="button-row">
              <Btn to={p.url} external={p.url.startsWith('https')}>
                {p.cta}
              </Btn>
            </div>
          </div>
          <div className="visual-frame tall">
            <img src={p.image} alt={p.title} />
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <div className="section-head centered">
            <Eyebrow>PROGRAM FOCUS</Eyebrow>
            <h2>
              What this program <em>supports</em>
            </h2>
          </div>
          <div className="three-grid">
            {p.pillars.map((x, i) => (
              <div className="number-card" key={x}>
                <span>0{i + 1}</span>
                <h3>{x}</h3>
                <p>
                  Strengthening access to practical opportunities and supporting
                  participants as they move toward their goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-panel">
          <div>
            <Eyebrow>TAKE THE NEXT STEP</Eyebrow>
            <h2>Ready to explore this opportunity?</h2>
            <p>
              Use the official application link below to find current program
              information and application requirements. Availability,
              eligibility, and deadlines are determined by the application
              organisers.
            </p>
          </div>
          <div className="detail-actions">
            <Btn to={p.url} external={p.url.startsWith('https')}>
              {p.cta}
            </Btn>
            {p.secondURL && (
              <Btn to={p.secondURL} external>
                {p.secondCTA}
              </Btn>
            )}
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <div className="section-head">
            <Eyebrow>DISCOVER MORE</Eyebrow>
            <h2>
              Explore other <em>programs</em>
            </h2>
          </div>
          <div className="related-grid">
            {programs
              .filter(q => q.slug !== p.slug)
              .map(q => (
                <A to={q.slug} className="related-card" key={q.slug}>
                  <img src={q.image} alt="" />
                  <div>
                    <small>{q.eyebrow}</small>
                    <h3>{q.title}</h3>
                    <ArrowUpRight size={19} />
                  </div>
                </A>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
const partners = [
  {
    name: 'D Amazin Lions',
    image: 'https://www.bipocfoundation.org/wp-content/uploads/2025/06/damazinglion-logo-redesign-07.png',
    description: 'Community partner featured in the BIPOC Foundation partner materials. Further organisation details are pending confirmation.',
    url: '',
  },

  {
    name: 'Arts Marvels',
    image: 'https://www.bipocfoundation.org/wp-content/uploads/2026/10/Arts-Marvel-logo-1.jpg',
    description: 'Creative programming and production expertise supporting community artists and emerging creators through the BIPOC Digital Media & Creative Innovation Hub.',
    url: 'https://www.instagram.com/artsmarvels?psln=eGg4NWV3OGZ0bzFq',
  },
  {
    name: 'HR Advantage',
    image: 'https://www.bipocfoundation.org/wp-content/uploads/2026/10/HR-Advantage-logo-1.jpg',
    description: 'A Southern Alberta human resources and workplace-support team providing recruitment, HR, safety and people-management services.',
    url: 'https://www.hradvantageservices.com/',
  },
  {
    name: 'Interfaith Food Bank Society of Lethbridge',
    image: 'https://www.bipocfoundation.org/wp-content/uploads/2026/10/International-Food-Bank-logo-1.jpg',
    description: 'A Lethbridge community organisation supporting food security through food hampers, emergency food assistance and community resources.',
    url: 'https://interfaithfoodbank.ca/',
  },

  {
    name: 'YWCA Lethbridge & District',
    image: 'https://www.bipocfoundation.org/wp-content/uploads/2026/10/YWCA-logo-1.jpg',
    description: 'A Lethbridge charity supporting women, children and families through safety, housing, empowerment, advocacy and community services.',
    url: 'https://ywcalethbridge.com/',
  },

  {
    name: 'Blood Tribe Economic Development',
    image: 'https://bloodtribe.org/wp-content/uploads/2025/05/BT-logo-copy.png',
    description: 'Blood Tribe Economic Development supports enterprise development, investment opportunities, job creation and a stronger economic future for Blood Tribe communities.',
    url: 'https://share.google/XfdQjvVhsbML3IFPR',
  },

  {
    name: 'BIPOC Digital Media and Creative Innovation Hub',
    image:
      'https://www.bipocfoundation.org/wp-content/uploads/2022/02/BF-BIPOC-LOGOS-V1-01.png',
    description:
      'A community-first creative studio in Lethbridge, powered by Arts Marvels and supported by BIPOC Foundation.',
    url: 'https://share.google/66L2L1N88LlS7N3co',
  },
  {
    name: 'AIRI Foundation',
    image:
      'https://airifoundation.org/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75',
    description:
      'AIRI Foundation is a non-profit organization that advances AI literacy and workflow automation across Canada. By combining research, consulting, and custom software development with hands-on automation services and training, we empower individuals and businesses to successfully deploy ethical AI solutions in their daily operations.',
    url: 'https://share.google/DCKPRudHGsLVoLkPC',
  },
  {
    name: 'RINSA — Regional Innovation Network of Southern Alberta',
    image: 'https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/Rinsa-1.png',
    description:
      'The Regional Innovation Network of Southern Alberta (RINSA) was formed in 2011 as a collaborative partnership between Alberta Innovates with Economic Development Lethbridge/Fredrick Theatre, Lethbridge Polytechnic Polytechnic, and the University of Lethbridge.',
    url: 'https://rinsa.ca/',
  },
];
function Partners() {
  return (
    <>
      <PageHero
        eyebrow="COLLABORATION & COMMUNITY"
        title="Our Partners"
        description="Progress is built together. Explore organisations contributing to knowledge, creativity, innovation, and community opportunity."
        image="https://www.bipocfoundation.org/wp-content/uploads/2025/07/DSC03452-scaled.jpg"
      />
      <section className="section partners-section">
        <div className="container">
          <div className="section-head">
            <Eyebrow>OUR NETWORK</Eyebrow>
            <h2>
              Stronger <em>together.</em>
            </h2>
            <p>
              Discover the organisations in our partner network and the work
              they do to support meaningful change.
            </p>
          </div>
          <div className="partner-list">
            {partners.map((p, i) => (
              <article className="partner-row" key={p.name}>
                <a
                  href={p.url || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={'Visit ' + p.name}
                  className={
                    'partner-art ' + (p.placeholder ? 'partner-photo' : '')
                  }
                >
                  <img                    src={p.image}
                    alt={
                      p.placeholder
                        ? 'Creative studio workspace'
                        : p.name + ' logo'
                    }
                    loading="lazy"
                  />
                </a>
                <div className="partner-copy">
                  <div className="partner-count">
                    0{i + 1} / PARTNER SPOTLIGHT
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  {p.url ? <A external to={p.url} className="text-link">Visit Partner <ArrowUpRight size={18}/></A> : <span className="partner-link-pending">Website details pending</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SupportStrip />
    </>
  );
}
function Support() {
  return (
    <>
      <PageHero
        eyebrow="WAYS TO SUPPORT"
        title="Your support helps build a community where everyone feels valued and belongs."
        description="Your support helps build a community where everyone feels valued and belongs."
        image="https://www.bipocfoundation.org/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-03-at-1.58.37-PM.jpeg"
      />
      <section className="section pale">
        <div className="container">
          <div className="section-head centered">
            <Eyebrow>TAKE ACTION</Eyebrow>
            <h2>
              Every contribution <em>matters.</em>
            </h2>
            <p>Find the opportunity to contribute that is right for you.</p>
          </div>
          <div className="support-card-grid">
            <div className="support-card featured">
              <div className="icon-round">
                <Heart />
              </div>
              <h3>Donate</h3>
              <p>
                Every dollar counts. Contribute now to help us reach our goal
                and build stronger communities across Canada.
              </p>
              <Btn to={donate} external>
                Contribute Now
              </Btn>
            </div>
            <div className="support-card">
              <div className="icon-round">
                <Users />
              </div>
              <h3>Volunteer</h3>
              <p>
                Your time and skills can make an impact too. Join our national
                team of change-makers and community leaders.
              </p>
              <Btn to={volunteer} external>
                Join Us
              </Btn>
            </div>
            <div className="support-card">
              <div className="icon-round">
                <HandHeart />
              </div>
              <h3>Partner</h3>
              <p>
                Work alongside the foundation to create opportunities and
                strengthen community-led initiatives.
              </p>
              <Btn to="contact">Become a Partner</Btn>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="visual-frame">
            <img
              src="https://saceaspirefoundation.org/redesign/wp-content/uploads/2026/10/A7I06918-scaled.jpg"
              alt="Group of people spending time together"
            />
          </div>
          <div>
            <Eyebrow>MAKE A DIFFERENCE</Eyebrow>
            <h2>
              Change starts with <em>people like you.</em>
            </h2>
            <p className="lead">
              Support can take many forms: resources, ideas, skills, time, or
              meaningful partnerships.
            </p>
            <p>
              Every step helps create a more connected and inclusive future.
            </p>
            <Btn to="contact">Talk to Our Team</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
function Contact() {
  return (
    <>
      <PageHero
        eyebrow="GET INVOLVED"
        title="Let's Make an Impact Together."
        description="Interested in our work, programs, volunteering, or partnerships? We would love to hear from you."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
      />
      <section className="section">
        <div className="container split contact-split">
          <div>
            <Eyebrow>CONNECT WITH SACE</Eyebrow>
            <h2>
              There's a place for <em>everyone.</em>
            </h2>
            <p className="lead">
              Discover how you can support our mission or connect with the
              foundation about an opportunity.
            </p>
            <div className="contact-options">
              <A to={volunteer} external>
                <Users />
                <span>
                  <strong>Volunteer with us</strong>
                  <small>Share your time and skills</small>
                </span>
                <ArrowUpRight />
              </A>
              <A to={donate} external>
                <Heart />
                <span>
                  <strong>Make a contribution</strong>
                  <small>Support community-focused initiatives</small>
                </span>
                <ArrowUpRight />
              </A>
              <A to="partners">
                <HandHeart />
                <span>
                  <strong>Explore partnerships</strong>
                  <small>Build something meaningful together</small>
                </span>
                <ArrowUpRight />
              </A>
            </div>
          </div>
          <div className="contact-aside">
            <div className="icon-round">
              <Mail />
            </div>
            <h3>Start a conversation</h3>
            <p>
              For general enquiries or partnership opportunities, connect
              through the foundation's official website.
            </p>
            <a
              className="button button-primary"
              href="mailto:letsmakeithappen@bipocfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us message <ArrowUpRight size={17} />
            </a>
            <div className="aside-note">
              <CheckCircle2 size={17} /> Program applications are available on
              their respective pages.
            </div>
          </div>
        </div>
      </section>
      <ImpactPrograms showExploreButton={false} />
    </>
  );
}
function App() {
  const [path, setPath] = useState(location.hash.replace(/^#\/?/, '') || '');
  useEffect(() => {
    const onChange = () => {
      setPath(location.hash.replace(/^#\/?/, '') || '');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const p = programs.find(v => v.slug === path);
  return (
    <>      <Header />
      <main>
        {p ? (
          <ProgramDetail p={p} />
        ) : path === 'about' ? (
          <About />
        ) : path === 'vision' ? (
          <Vision />
        ) : path === 'programs' ? (
          <Programs />
        ) : path === 'support' ? (
          <Support />
        ) : path === 'events' ? (
          <EventsDirectory />
        ) : path === 'events/indigenous-peoples-celebration-2026' ? (
          <EventPage />
        ) : path === 'partners' ? (
          <Partners />
        ) : path === 'contact' ? (
          <Contact />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </>
  );
}
export default App;
