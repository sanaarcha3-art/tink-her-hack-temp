(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const k=[{id:1,name:"Aakshna Sharma",email:"founder@demo.com",password:"demo123",role:"founder",avatar:"AS",company:"NeuralNest AI",bio:"Building the future of human-AI collaboration.",tagline:"AI for Everyone",location:"Bangalore, India",connections:142},{id:2,name:"Rahul Mehta",email:"investor@demo.com",password:"demo123",role:"investor",avatar:"RM",company:"Sequoia India",bio:"Early-stage investor backing deep-tech founders.",tagline:"Seed to Series A",location:"Mumbai, India",connections:389},{id:3,name:"Priya Nair",email:"seeker@demo.com",password:"demo123",role:"seeker",avatar:"PN",bio:"Full-stack developer passionate about startups.",tagline:"React • Node • PostgreSQL",location:"Hyderabad, India",connections:67}],p=[{id:1,name:"NeuralNest AI",founder:"Aakshna Sharma",founderId:1,tagline:"Context-aware AI assistant for enterprise teams",problem:"Enterprise teams lose 40% of productivity due to scattered knowledge and poor tool integration.",solution:"An AI layer that sits on top of all existing tools, learns context, and automates routine workflows.",traction:"12 pilot customers, $48K ARR, 3 months old.",market:"$47B enterprise AI market growing at 32% CAGR.",sector:["AI/ML","SaaS","Enterprise"],stage:"Pre-Seed",askAmount:"$500K",aiScore:92,aiSummary:"High-conviction opportunity. Strong problem-solution fit in a massive market. Early traction signals product-market fit. Founder has relevant domain expertise. Risk: competitive landscape from incumbents.",logo:"🧠",color:"#3B82F6"},{id:2,name:"GreenGrid Energy",founder:"Vikram Patel",founderId:5,tagline:"Peer-to-peer renewable energy trading platform",problem:"Excess solar energy from rooftop panels goes to waste; utility grids poorly incentivize prosumers.",solution:"Blockchain-based P2P exchange letting households sell surplus energy to neighbors in real-time.",traction:"3 pilots in Gujarat, 200 enrolled households, $12K MRR.",market:"$1.2T global energy market; renewables segment at $500B.",sector:["CleanTech","Blockchain","Energy"],stage:"Seed",askAmount:"$1.2M",aiScore:85,aiSummary:"Compelling climate-tech play with regulatory tailwinds. Blockchain adds friction — evaluate if necessary. Pilot data is strong. Founder background in energy infrastructure is a plus.",logo:"⚡",color:"#10B981"},{id:3,name:"MediScan Pro",founder:"Deepa Krishnan",founderId:6,tagline:"AI-powered radiology second opinions in 60 seconds",problem:"Radiologist shortage causes 3-5 day delays in scan reads, risking patient outcomes.",solution:"Computer vision model trained on 2M+ scans provides instant preliminary read for ER triage.",traction:"7 hospital partners, FDA 510(k) submission in progress, $80K monthly recurring from pilots.",market:"$13B radiology AI market.",sector:["HealthTech","AI/ML","MedTech"],stage:"Series A",askAmount:"$4M",aiScore:96,aiSummary:"Exceptional execution. High-impact vertical with defensible moat (proprietary dataset + FDA pathway). Revenue traction at Series A stage is impressive. Primary risk is regulatory timeline.",logo:"🏥",color:"#8B5CF6"},{id:4,name:"AgriSense",founder:"Suresh Gupta",founderId:7,tagline:"IoT + ML crop advisory for smallholder farmers",problem:"Indian smallholder farmers lack access to precision agriculture data, causing 30% yield loss.",solution:"Low-cost IoT sensors + satellite imagery + LLM chatbot delivering hyper-local crop advice via SMS.",traction:"2,000 farmers onboarded, ₹18L ARR, partnered with 3 state agriculture departments.",market:"$24B precision agriculture market in South/Southeast Asia.",sector:["AgriTech","IoT","AI/ML"],stage:"Seed",askAmount:"$800K",aiScore:78,aiSummary:"Strong social impact. Revenue model needs stress-testing (farmer willingness-to-pay is historically low). Government partnerships de-risk distribution. Evaluate unit economics carefully.",logo:"🌾",color:"#F59E0B"},{id:5,name:"SkillBridge",founder:"Ananya Reddy",founderId:8,tagline:"Micro-credential platform for blue-collar upskilling",problem:"India has 400M blue-collar workers with no structured path to skill upgrades or career growth.",solution:"Mobile-first, vernacular-language micro-courses with employer-verified certifications in 2-week sprints.",traction:"15,000 monthly active learners, 42 employer partnerships, ₹35L MRR.",market:"India vocational training market: $10B.",sector:["EdTech","HRTech","Social Impact"],stage:"Series A",askAmount:"$2.5M",aiScore:88,aiSummary:"Scalable model with clear unit economics and strong employer demand signal. Retention data is the key metric — request cohort analysis. Vernacular approach is a genuine differentiator.",logo:"📚",color:"#EC4899"}],u=[{id:1,title:"Senior Full-Stack Engineer",company:"NeuralNest AI",founderId:1,location:"Bangalore (Remote OK)",type:"Full-time",salary:"₹25L – ₹40L",equity:"0.1% – 0.5%",stack:["React","Node.js","PostgreSQL","Python","Docker"],description:"Own the engineering of core product features. Work directly with the founding team to build scalable, production-grade systems that handle enterprise-grade data.",requirements:["5+ years full-stack experience","Strong TypeScript skills","Experience with LLM APIs","Startup mindset"],posted:"2 days ago",applicants:18,logo:"🧠"},{id:2,title:"Product Designer (UI/UX)",company:"GreenGrid Energy",founderId:5,location:"Ahmedabad / Remote",type:"Full-time",salary:"₹12L – ₹20L",equity:"0.05% – 0.2%",stack:["Figma","Framer","CSS","Design Systems"],description:"Design the consumer-facing energy trading app and the prosumer dashboard. You will define how 200+ households interact with their energy in real-time.",requirements:["3+ years product design","Experience with energy/fintech apps preferred","Strong portfolio required"],posted:"5 days ago",applicants:31,logo:"⚡"},{id:3,title:"ML Engineer (Computer Vision)",company:"MediScan Pro",founderId:6,location:"Hyderabad (On-site)",type:"Full-time",salary:"₹30L – ₹55L",equity:"0.2% – 0.8%",stack:["PyTorch","MONAI","DICOM","AWS SageMaker","Python"],description:"Improve our radiology AI models on CT, MRI, and X-ray modalities. Join a team where your code directly impacts patient care timelines.",requirements:["PhD or 4+ years in ML/CV","Medical imaging experience preferred","Strong publications or open-source contributions"],posted:"1 week ago",applicants:12,logo:"🏥"},{id:4,title:"Growth Marketer",company:"SkillBridge",founderId:8,location:"Remote",type:"Full-time",salary:"₹10L – ₹18L",equity:"0.05% – 0.15%",stack:["Meta Ads","Google Analytics","SQL","Content Strategy"],description:"Own the top-of-funnel growth for 3 new vernacular markets launching in Q3. Drive learner acquisition and employer-side sales.",requirements:["3+ years B2C growth experience","Vernacular market experience a huge plus","Data-driven decision making"],posted:"3 days ago",applicants:44,logo:"📚"},{id:5,title:"Hardware Engineer (IoT)",company:"AgriSense",founderId:7,location:"Pune",type:"Full-time",salary:"₹15L – ₹25L",equity:"0.1% – 0.3%",stack:["ESP32","MQTT","PCB Design","LoRaWAN","Embedded C"],description:"Design and iterate on our next-gen sensor node that must survive Indian monsoons, function on 4G/LoRa, and cost under ₹2,500 at scale.",requirements:["3+ years embedded hardware","BOM optimization experience","Field deployment experience in rural India preferred"],posted:"4 days ago",applicants:8,logo:"🌾"}],$=[{id:1,from:"Rahul Mehta",fromId:2,avatar:"RM",text:"Loved the NeuralNest pitch deck! Can we do a quick 30-min call this week?",time:"10:32 AM",unread:!0},{id:2,from:"Deepa K.",fromId:6,avatar:"DK",text:"Thanks for connecting! Your investor profile is very aligned with our Series A thesis.",time:"Yesterday",unread:!0},{id:3,from:"Priya Nair",fromId:3,avatar:"PN",text:"Applied for the Full-Stack role — very excited about NeuralNest mission!",time:"Mon",unread:!1}],y=[{id:1,icon:"💬",text:"Rahul Mehta sent you a message",time:"2 min ago",unread:!0},{id:2,icon:"👁️",text:"Your startup profile was viewed 24 times this week",time:"1 hr ago",unread:!0},{id:3,icon:"🚀",text:"AI Score updated for NeuralNest AI: 92/100",time:"3 hr ago",unread:!1},{id:4,icon:"📋",text:"New application received for Senior Full-Stack Engineer",time:"5 hr ago",unread:!1},{id:5,icon:"🤝",text:"Vikram Patel accepted your connection request",time:"1 day ago",unread:!1}];function r(e,t="success"){const a=document.getElementById("toast-container"),i=document.createElement("div");i.className=`toast ${t}`;const s={success:"✅",error:"❌",info:"ℹ️",warning:"⚠️"};i.innerHTML=`<span class="toast-icon">${s[t]||"✅"}</span><span class="toast-text">${e}</span>`,a.appendChild(i),setTimeout(()=>i.remove(),3500)}function E(e){document.getElementById(e)?.classList.add("open")}function f(e){document.getElementById(e)?.classList.remove("open")}function S(e){const t=Math.round(e*3.6);return`
    <div class="ai-score-ring ${e>=85?"score-high":e>=65?"score-mid":"score-low"}" style="--pct:${t}deg">
      <div class="score-inner">
        <span style="font-size:0.95rem;font-weight:800">${e}</span>
        <span style="font-size:0.55rem;color:var(--text-muted);margin-top:1px">AI</span>
      </div>
    </div>`}function g(e){const t=["tag-blue","tag-emerald","tag-purple","tag-amber","tag-pink"];return e.map((a,i)=>`<span class="tag ${t[i%t.length]}">${a}</span>`).join("")}const v="pb_session";function d(){const e=localStorage.getItem(v);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function A(e,t){const a=k.find(s=>s.email===e&&s.password===t);if(!a)return{ok:!1,error:"Invalid credentials. Use a demo account."};const i={...a};return delete i.password,localStorage.setItem(v,JSON.stringify(i)),{ok:!0,user:i}}function L(e){return A({founder:"founder@demo.com",investor:"investor@demo.com",seeker:"seeker@demo.com"}[e],"demo123")}function P(){localStorage.removeItem(v)}function _(e,t,a,i){if(!e||!t||!a||!i)return{ok:!1,error:"All fields required."};if(k.find(c=>c.email===t))return{ok:!1,error:"Email already registered. Try demo login."};const o=e.split(" ").map(c=>c[0]).join("").toUpperCase().slice(0,2),n={id:99,name:e,email:t,role:i,avatar:o,bio:"",tagline:"",location:"",connections:0,company:""};return localStorage.setItem(v,JSON.stringify(n)),r("Account created! Welcome to PitchBridge 🎉","success"),{ok:!0,user:n}}let b=null;const B=["dashboard","profile","messages","notifications"];function l(e,t={}){b=e;const a=d();B.includes(e)&&!a&&(b="auth"),window.dispatchEvent(new CustomEvent("pb-navigate",{detail:{view:b,params:t}}))}window.navigate=l;function j(){return`
  <div class="auth-page" id="page-auth">
    <div class="auth-box">
      <div class="auth-logo">
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:6px">
          <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--emerald));display:flex;align-items:center;justify-content:center;font-size:1.3rem">🌉</div>
          <span class="brand" style="font-size:1.8rem;font-weight:800;background:linear-gradient(135deg,var(--blue),var(--emerald));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">PitchBridge</span>
        </div>
        <p style="color:var(--text-muted);font-size:0.85rem">Connect. Pitch. Build the Future.</p>
      </div>

      <div class="auth-tabs">
        <button class="auth-tab active" id="tab-login" onclick="window._authTab('login')">Sign In</button>
        <button class="auth-tab" id="tab-register" onclick="window._authTab('register')">Register</button>
      </div>

      <div id="auth-demo-section">
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:10px;text-align:center;font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Quick Demo Access</p>
        <div class="demo-login-grid">
          <button class="demo-login-btn" onclick="window._demoLogin('founder')">
            <span class="demo-icon">🚀</span>Founder
          </button>
          <button class="demo-login-btn" onclick="window._demoLogin('investor')">
            <span class="demo-icon">💼</span>Investor
          </button>
          <button class="demo-login-btn" onclick="window._demoLogin('seeker')">
            <span class="demo-icon">🎯</span>Job Seeker
          </button>
        </div>
        <div class="divider">or sign in manually</div>
      </div>

      <div id="auth-login-form">
        <div class="input-group mb-16">
          <label class="input-label">Email</label>
          <input class="input-field" type="email" id="login-email" placeholder="you@example.com" value="founder@demo.com">
        </div>
        <div class="input-group mb-16">
          <label class="input-label">Password</label>
          <input class="input-field" type="password" id="login-password" placeholder="••••••••" value="demo123">
        </div>
        <button class="btn btn-primary w-full" style="justify-content:center" onclick="window._loginSubmit()">Sign In →</button>
      </div>

      <div id="auth-register-form" style="display:none">
        <div class="input-group mb-16">
          <label class="input-label">Full Name</label>
          <input class="input-field" type="text" id="reg-name" placeholder="Your name">
        </div>
        <div class="input-group mb-16">
          <label class="input-label">Email</label>
          <input class="input-field" type="email" id="reg-email" placeholder="you@example.com">
        </div>
        <div class="input-group mb-16">
          <label class="input-label">Password</label>
          <input class="input-field" type="password" id="reg-password" placeholder="Min 6 characters">
        </div>
        <div class="input-group mb-16">
          <label class="input-label">I am a...</label>
          <div class="role-selector">
            <button class="role-btn active" data-role="founder" onclick="window._setRole(this,'founder')"><span class="role-icon">🚀</span>Founder</button>
            <button class="role-btn" data-role="investor" onclick="window._setRole(this,'investor')"><span class="role-icon">💼</span>Investor</button>
            <button class="role-btn" data-role="seeker" onclick="window._setRole(this,'seeker')"><span class="role-icon">🎯</span>Job Seeker</button>
          </div>
        </div>
        <button class="btn btn-primary w-full" style="justify-content:center" onclick="window._registerSubmit()">Create Account →</button>
      </div>

      <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);margin-top:20px">
        Demo credentials: <strong style="color:var(--blue)">founder@demo.com</strong> / <strong style="color:var(--blue)">demo123</strong>
      </p>
    </div>
  </div>`}function R(){let e="founder";window._authTab=t=>{const a=t==="login";document.getElementById("tab-login").classList.toggle("active",a),document.getElementById("tab-register").classList.toggle("active",!a),document.getElementById("auth-login-form").style.display=a?"block":"none",document.getElementById("auth-register-form").style.display=a?"none":"block",document.getElementById("auth-demo-section").style.display=a?"block":"none"},window._demoLogin=t=>{const a=L(t);a.ok&&(r(`Welcome, ${a.user.name}! 🎉`,"success"),l("dashboard"))},window._loginSubmit=()=>{const t=document.getElementById("login-email").value,a=document.getElementById("login-password").value,i=A(t,a);i.ok?(r(`Welcome back, ${i.user.name}!`,"success"),l("dashboard")):r(i.error,"error")},window._setRole=(t,a)=>{e=a,document.querySelectorAll(".role-btn").forEach(i=>i.classList.remove("active")),t.classList.add("active")},window._registerSubmit=()=>{const t=document.getElementById("reg-name").value,a=document.getElementById("reg-email").value,i=document.getElementById("reg-password").value,s=_(t,a,i,e);s.ok?l("dashboard"):r(s.error,"error")}}function C(){return`
  <div class="container">
    <div class="section-header">
      <div>
        <h2 class="section-title">💡 Idea Hub</h2>
        <p class="section-sub">AI-vetted startups seeking investment</p>
      </div>
      <div id="hub-actions"></div>
    </div>
    <div class="filters-bar">
      <input class="filter-search" placeholder="🔍 Search startups..." id="hub-search" oninput="window._hubFilter()">
      <button class="filter-btn active" data-filter="all" onclick="window._hubSector(this,'all')">All</button>
      <button class="filter-btn" data-filter="AI/ML" onclick="window._hubSector(this,'AI/ML')">🤖 AI/ML</button>
      <button class="filter-btn" data-filter="SaaS" onclick="window._hubSector(this,'SaaS')">☁️ SaaS</button>
      <button class="filter-btn" data-filter="HealthTech" onclick="window._hubSector(this,'HealthTech')">🏥 HealthTech</button>
      <button class="filter-btn" data-filter="CleanTech" onclick="window._hubSector(this,'CleanTech')">⚡ CleanTech</button>
      <button class="filter-btn" data-filter="EdTech" onclick="window._hubSector(this,'EdTech')">📚 EdTech</button>
    </div>
    <div class="grid-3" id="hub-grid">
      ${p.map(e=>I(e)).join("")}
    </div>
  </div>`}function I(e){return`
  <div class="glass-card startup-card" onclick="window._viewStartup(${e.id})">
    <div class="startup-card-top">
      <div class="startup-logo" style="background:linear-gradient(135deg,${e.color}22,${e.color}44);border:1px solid ${e.color}33">${e.logo}</div>
      <div style="flex:1;min-width:0">
        <h3>${e.name}</h3>
        <p>${e.tagline}</p>
      </div>
      ${S(e.aiScore)}
    </div>
    <div class="startup-card-tags">${g(e.sector)}</div>
    <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.55;margin-top:8px">${e.aiSummary.slice(0,120)}...</p>
    <div class="startup-card-footer">
      <span class="ask-amount">Ask: ${e.askAmount}</span>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="stage-badge">${e.stage}</span>
        <span class="tag tag-blue" style="cursor:pointer">View →</span>
      </div>
    </div>
  </div>`}function F(e){const t=p.find(i=>i.id===Number(e));if(!t)return'<div class="container"><div class="empty-state"><div class="empty-icon">🔍</div><p>Startup not found.</p></div></div>';const a=d();return`
  <div class="container">
    <button class="btn btn-ghost btn-sm mb-24" onclick="window._goBack()">← Back to Idea Hub</button>
    <div class="detail-header glass-card" style="display:flex;align-items:flex-start;gap:24px;padding:32px">
      <div class="detail-logo" style="background:linear-gradient(135deg,${t.color}22,${t.color}44);border:1px solid ${t.color}33">${t.logo}</div>
      <div style="flex:1">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap">
          <div>
            <h1 class="detail-title">${t.name}</h1>
            <p class="detail-subtitle">by ${t.founder} · ${t.stage}</p>
            <div class="detail-tags">${g(t.sector)}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
            ${S(t.aiScore)}
            <span style="font-size:0.72rem;color:var(--text-muted)">AI Score</span>
          </div>
        </div>
        <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap">
          ${a?.role==="investor"?'<button class="btn btn-primary" onclick="window._contactFounder()">💬 Message Founder</button>':""}
          <button class="btn btn-secondary" onclick="window._bookmarkStartup(${t.id})">🔖 Save</button>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;margin-top:20px" class="detail-grid">
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="glass-card" style="padding:24px">
          <h3 style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px">🤖 AI Analysis</h3>
          <p style="color:var(--text-secondary);line-height:1.7;font-size:0.9rem">${t.aiSummary}</p>
        </div>
        <div class="glass-card" style="padding:24px">
          <div class="detail-section"><h4>❓ The Problem</h4><p>${t.problem}</p></div>
          <hr class="divider-line">
          <div class="detail-section"><h4>💡 The Solution</h4><p>${t.solution}</p></div>
          <hr class="divider-line">
          <div class="detail-section"><h4>📈 Traction</h4><p>${t.traction}</p></div>
          <hr class="divider-line">
          <div class="detail-section"><h4>🌐 Market Size</h4><p>${t.market}</p></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="glass-card" style="padding:24px">
          <h3 style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px">Deal Info</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div><p style="font-size:0.75rem;color:var(--text-muted)">RAISE ASK</p><p style="font-weight:700;font-size:1.2rem;color:var(--emerald)">${t.askAmount}</p></div>
            <div><p style="font-size:0.75rem;color:var(--text-muted)">STAGE</p><p style="font-weight:600">${t.stage}</p></div>
            <div><p style="font-size:0.75rem;color:var(--text-muted)">SECTORS</p><div class="chip-row" style="margin-top:4px">${g(t.sector)}</div></div>
          </div>
        </div>
        <div class="glass-card" style="padding:24px">
          <h3 style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px">Founder</h3>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--purple));display:flex;align-items:center;justify-content:center;font-weight:700">${t.founder.split(" ").map(i=>i[0]).join("")}</div>
            <div><p style="font-weight:600;font-size:0.9rem">${t.founder}</p><p style="font-size:0.78rem;color:var(--text-muted)">${t.name}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>`}function h(){let e="all";window._hubSector=(t,a)=>{e=a,document.querySelectorAll(".filter-btn[data-filter]").forEach(i=>i.classList.remove("active")),t.classList.add("active"),window._hubFilter()},window._hubFilter=()=>{const t=(document.getElementById("hub-search")?.value||"").toLowerCase(),a=document.getElementById("hub-grid");if(!a)return;const i=p.filter(s=>{const o=e==="all"||s.sector.includes(e),n=!t||s.name.toLowerCase().includes(t)||s.tagline.toLowerCase().includes(t);return o&&n});a.innerHTML=i.length?i.map(s=>I(s)).join(""):'<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><p>No startups match your filter.</p></div>'},window._viewStartup=t=>l("startup",{id:t}),window._goBack=()=>l("idea-hub"),window._bookmarkStartup=t=>r("Startup saved to your watchlist!","success"),window._contactFounder=()=>l("messages")}function N(){return`
  <div class="container">
    <div class="section-header">
      <div>
        <h2 class="section-title">💼 Job Board</h2>
        <p class="section-sub">${u.length} open roles at top startups</p>
      </div>
      <div id="job-post-btn-area"></div>
    </div>
    <div class="filters-bar">
      <input class="filter-search" placeholder="🔍  Search roles, companies..." id="job-search" oninput="window._jobFilter()">
      <button class="filter-btn active" data-jf="all" onclick="window._jobType(this,'all')">All</button>
      <button class="filter-btn" data-jf="Engineering" onclick="window._jobType(this,'Engineering')">⚙️ Engineering</button>
      <button class="filter-btn" data-jf="Design" onclick="window._jobType(this,'Design')">🎨 Design</button>
      <button class="filter-btn" data-jf="Marketing" onclick="window._jobType(this,'Marketing')">📣 Marketing</button>
      <button class="filter-btn" data-jf="Hardware" onclick="window._jobType(this,'Hardware')">🔧 Hardware</button>
    </div>
    <div class="grid-2" id="job-grid">
      ${u.map(e=>M(e)).join("")}
    </div>
  </div>

  <!-- Apply Modal -->
  <div class="modal-overlay" id="apply-modal">
    <div class="modal">
      <div class="modal-header">
        <h3>Apply for Role</h3>
        <button class="modal-close" onclick="window._closeApply()">✕</button>
      </div>
      <div class="modal-body">
        <div id="apply-job-info" style="padding:12px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:10px;margin-bottom:20px"></div>
        <div class="input-group mb-16">
          <label class="input-label">Cover Note</label>
          <textarea class="input-field" id="apply-cover" placeholder="Why are you excited about this role? (3-4 sentences)"></textarea>
        </div>
        <div class="input-group mb-16">
          <label class="input-label">Years of Experience</label>
          <select class="input-field" id="apply-exp">
            <option>0–1 years</option><option>1–3 years</option><option>3–5 years</option><option>5–8 years</option><option>8+ years</option>
          </select>
        </div>
        <div class="input-group mb-16">
          <label class="input-label">Resume / LinkedIn URL</label>
          <input class="input-field" id="apply-resume" placeholder="https://linkedin.com/in/yourprofile">
        </div>
        <div class="input-group">
          <label class="input-label">Portfolio / GitHub (Optional)</label>
          <input class="input-field" id="apply-portfolio" placeholder="https://github.com/yourhandle">
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost btn-sm" onclick="window._closeApply()">Cancel</button>
        <button class="btn btn-primary btn-sm" onclick="window._submitApply()">Submit Application 🚀</button>
      </div>
    </div>
  </div>`}function M(e){const t=["React","Node.js","Python","PyTorch","Figma","Framer"];return`
  <div class="glass-card job-card" data-type="${e.stack.some(s=>t.includes(s))?"Engineering":e.stack.includes("Figma")||e.stack.includes("Framer")?"Design":e.stack.includes("Meta Ads")?"Marketing":"Hardware"}">
    <div class="job-card-top">
      <div class="job-logo">${e.logo}</div>
      <div style="flex:1;min-width:0">
        <h3>${e.title}</h3>
        <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:2px">${e.company}</p>
        <div class="job-meta">
          <span class="job-meta-item">📍 ${e.location}</span>
          <span class="job-meta-item">⏱️ ${e.type}</span>
          <span class="job-meta-item">📅 ${e.posted}</span>
        </div>
      </div>
    </div>
    <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.55;margin-bottom:12px">${e.description.slice(0,130)}...</p>
    <div class="job-card-tags">${g(e.stack.slice(0,4))}</div>
    <div class="job-card-footer">
      <div>
        <span class="salary-text">${e.salary}</span>
        <span style="font-size:0.75rem;color:var(--emerald);margin-left:8px">+ ${e.equity} equity</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="applicant-count">👥 ${e.applicants} applicants</span>
        <button class="btn btn-primary btn-sm" onclick="window._openApply(${e.id})">Apply</button>
      </div>
    </div>
  </div>`}function D(){let e="all";const t=d(),a=document.getElementById("job-post-btn-area");a&&t?.role==="founder"&&(a.innerHTML='<button class="btn btn-primary" onclick="window._postJob()">+ Post a Job</button>'),window._jobType=(i,s)=>{e=s,document.querySelectorAll(".filter-btn[data-jf]").forEach(o=>o.classList.remove("active")),i.classList.add("active"),window._jobFilter()},window._jobFilter=()=>{const i=(document.getElementById("job-search")?.value||"").toLowerCase(),s=document.getElementById("job-grid");if(!s)return;const o=u.filter(n=>{const c=e==="all"||n.stack.some(m=>e==="Engineering"?["React","Node.js","Python","PyTorch","PostgreSQL","Docker","AWS SageMaker"].includes(m):e==="Design"?["Figma","Framer","CSS","Design Systems"].includes(m):e==="Marketing"?["Meta Ads","Google Analytics","SQL","Content Strategy"].includes(m):e==="Hardware"?["ESP32","MQTT","LoRaWAN","Embedded C","PCB Design"].includes(m):!0),z=!i||n.title.toLowerCase().includes(i)||n.company.toLowerCase().includes(i)||n.stack.join(" ").toLowerCase().includes(i);return c&&z});s.innerHTML=o.length?o.map(n=>M(n)).join(""):'<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><p>No jobs match your filter.</p></div>'},window._openApply=i=>{if(!d()){r("Please sign in to apply.","error"),l("auth");return}const o=u.find(c=>c.id===i),n=document.getElementById("apply-job-info");n&&o&&(n.innerHTML=`<strong>${o.title}</strong> at <span style="color:var(--blue)">${o.company}</span> · <span style="color:var(--emerald)">${o.salary}</span>`),E("apply-modal")},window._closeApply=()=>f("apply-modal"),window._submitApply=()=>{const i=document.getElementById("apply-cover")?.value;if(!i||i.length<20){r("Please write a cover note (min 20 chars).","error");return}f("apply-modal"),r("Application submitted! You'll get real-time updates. 🚀","success")},window._postJob=()=>r("Job posting form coming soon!","info")}function H(){const e=d();if(!e)return'<div class="container"><p>Not logged in.</p></div>';const t=e.role;return`
  <div class="dashboard-layout">
    <aside class="sidebar">
      <div class="sidebar-user">
        <div class="sidebar-avatar">${e.avatar}</div>
        <div>
          <div class="sidebar-user-name">${e.name}</div>
          <div class="sidebar-user-role">${t==="founder"?"🚀 Founder":t==="investor"?"💼 Investor":"🎯 Job Seeker"}</div>
        </div>
      </div>
      <span class="sidebar-section-label">Main</span>
      <button class="sidebar-link active" onclick="window._dashTab(this,'overview')"><span class="icon">📊</span> Overview</button>
      ${t==="founder"?`
        <button class="sidebar-link" onclick="window._dashTab(this,'startup')"><span class="icon">🚀</span> My Startup</button>
        <button class="sidebar-link" onclick="window._dashTab(this,'jobs')"><span class="icon">💼</span> Manage Jobs</button>
        <button class="sidebar-link" onclick="window._dashTab(this,'applicants')"><span class="icon">👥</span> Applicants</button>
      `:""}
      ${t==="investor"?`
        <button class="sidebar-link" onclick="window._dashTab(this,'watchlist')"><span class="icon">🔖</span> Watchlist</button>
        <button class="sidebar-link" onclick="window._dashTab(this,'portfolio')"><span class="icon">📈</span> Portfolio</button>
      `:""}
      ${t==="seeker"?`
        <button class="sidebar-link" onclick="window._dashTab(this,'applications')"><span class="icon">📋</span> My Applications</button>
        <button class="sidebar-link" onclick="window._dashTab(this,'saved')"><span class="icon">🔖</span> Saved Jobs</button>
      `:""}
      <span class="sidebar-section-label">Explore</span>
      <button class="sidebar-link" onclick="navigate('idea-hub')"><span class="icon">💡</span> Idea Hub</button>
      <button class="sidebar-link" onclick="navigate('jobs')"><span class="icon">💼</span> Job Board</button>
      <button class="sidebar-link" onclick="navigate('messages')"><span class="icon">💬</span> Messages</button>
      <button class="sidebar-link" onclick="navigate('profile')"><span class="icon">👤</span> Profile</button>
    </aside>
    <div class="main-content" id="dash-content">
      ${T("overview",t,e)}
    </div>
  </div>`}function T(e,t,a){return e==="overview"?q(t,a):e==="startup"?J(a):e==="jobs"?O():e==="applicants"?G():e==="watchlist"?V():e==="portfolio"?W():e==="applications"?K():e==="saved"?U():'<div class="empty-state"><div class="empty-icon">🔧</div><p>Coming soon.</p></div>'}function q(e,t){const a={founder:[{label:"AI Score",value:"92",change:"↑ 4 this week",color:"var(--emerald)"},{label:"Profile Views",value:"248",change:"↑ 18% vs last week",color:"var(--blue)"},{label:"Investor Connects",value:"7",change:"3 new this week",color:"var(--purple)"},{label:"Open Roles",value:"2",change:"1 offer pending",color:"var(--amber)"}],investor:[{label:"Deals Reviewed",value:"34",change:"This month",color:"var(--blue)"},{label:"Watchlist",value:"12",change:"3 added this week",color:"var(--emerald)"},{label:"Messages Sent",value:"9",change:"5 replies received",color:"var(--purple)"},{label:"Portfolio Value",value:"$2.4M",change:"+12% this quarter",color:"var(--amber)"}],seeker:[{label:"Applications",value:"6",change:"2 shortlisted",color:"var(--blue)"},{label:"Profile Views",value:"31",change:"↑ 8 this week",color:"var(--emerald)"},{label:"Saved Jobs",value:"14",change:"3 expiring soon",color:"var(--amber)"},{label:"Interviews",value:"2",change:"Upcoming",color:"var(--purple)"}]};return`
    <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">👋 Welcome back, ${t.name.split(" ")[0]}!</h2>
    <div class="stats-row">
      ${(a[e]||[]).map(i=>`
        <div class="stat-card">
          <span class="stat-card-label">${i.label}</span>
          <span class="stat-card-value" style="color:${i.color}">${i.value}</span>
          <span class="stat-card-change">${i.change}</span>
        </div>`).join("")}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="glass-card" style="padding:24px">
        <h3 style="font-size:0.85rem;font-weight:700;margin-bottom:16px;color:var(--text-secondary)">TOP STARTUPS THIS WEEK</h3>
        ${p.slice(0,3).map(i=>`
          <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--glass-border);cursor:pointer" onclick="window._viewStartup(${i.id})">
            <span style="font-size:1.4rem">${i.logo}</span>
            <div style="flex:1">
              <p style="font-size:0.875rem;font-weight:600">${i.name}</p>
              <p style="font-size:0.78rem;color:var(--text-muted)">${i.stage} · ${i.askAmount}</p>
            </div>
            <span style="font-size:0.85rem;font-weight:700;color:${i.aiScore>=85?"var(--emerald)":"var(--blue)"}">${i.aiScore}</span>
          </div>`).join("")}
        <button class="btn btn-ghost btn-sm" style="margin-top:12px;width:100%;justify-content:center" onclick="navigate('idea-hub')">View All →</button>
      </div>
      <div class="glass-card" style="padding:24px">
        <h3 style="font-size:0.85rem;font-weight:700;margin-bottom:16px;color:var(--text-secondary)">LATEST JOBS</h3>
        ${u.slice(0,3).map(i=>`
          <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--glass-border)">
            <span style="font-size:1.4rem">${i.logo}</span>
            <div style="flex:1">
              <p style="font-size:0.875rem;font-weight:600">${i.title}</p>
              <p style="font-size:0.78rem;color:var(--text-muted)">${i.company} · ${i.salary}</p>
            </div>
          </div>`).join("")}
        <button class="btn btn-ghost btn-sm" style="margin-top:12px;width:100%;justify-content:center" onclick="navigate('jobs')">Browse All Jobs →</button>
      </div>
    </div>`}function J(e){const t=p.find(a=>a.founderId===e.id)||p[0];return`
    <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">🚀 My Startup</h2>
    <div class="glass-card" style="padding:28px;margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:20px;margin-bottom:20px">
        <div style="font-size:2rem;width:60px;height:60px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,${t.color}22,${t.color}44);border:1px solid ${t.color}33">${t.logo}</div>
        <div>
          <h3 style="font-size:1.2rem;font-weight:700">${t.name}</h3>
          <p style="color:var(--text-secondary);font-size:0.85rem">${t.tagline}</p>
        </div>
        <div style="margin-left:auto;text-align:center">
          <div style="font-size:2rem;font-weight:800;color:var(--emerald)">${t.aiScore}</div>
          <div style="font-size:0.72rem;color:var(--text-muted)">AI Score</div>
        </div>
      </div>
      <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;padding:16px;background:rgba(59,130,246,0.06);border-radius:10px;border:1px solid rgba(59,130,246,0.15)">${t.aiSummary}</p>
      <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
        <button class="btn btn-secondary btn-sm" onclick="showToast('Edit form coming soon!','info')">✏️ Edit Profile</button>
        <button class="btn btn-primary btn-sm" onclick="navigate('idea-hub')">View in Idea Hub →</button>
      </div>
    </div>`}function O(){return`<h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">💼 My Job Listings</h2>
    ${u.slice(0,2).map(e=>`
      <div class="glass-card" style="padding:20px;margin-bottom:12px;display:flex;align-items:center;gap:16px">
        <span style="font-size:1.8rem">${e.logo}</span>
        <div style="flex:1">
          <p style="font-weight:600">${e.title}</p>
          <p style="font-size:0.8rem;color:var(--text-muted)">${e.applicants} applicants · Posted ${e.posted}</p>
        </div>
        <span class="tag tag-emerald">Active</span>
      </div>`).join("")}
    <button class="btn btn-primary btn-sm" onclick="showToast('Post job form coming soon!','info')">+ Post New Role</button>`}function G(){return`<h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">👥 Applicants</h2>
    ${[["Priya Nair","PN","Senior Dev","3–5 years","Shortlisted"],["Arjun Mehta","AM","Full-Stack Eng","5–8 years","Under Review"],["Kavya S.","KS","Backend Dev","1–3 years","Applied"]].map(([t,a,i,s,o])=>`
      <div class="glass-card" style="padding:16px 20px;margin-bottom:10px;display:flex;align-items:center;gap:14px">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--purple));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem">${a}</div>
        <div style="flex:1"><p style="font-weight:600;font-size:0.9rem">${t}</p><p style="font-size:0.78rem;color:var(--text-muted)">${i} · ${s}</p></div>
        <span class="tag ${o==="Shortlisted"?"tag-emerald":o==="Under Review"?"tag-blue":"tag-purple"}">${o}</span>
        <div style="display:flex;gap:6px">
          <button class="btn btn-emerald btn-sm" onclick="showToast('${t} shortlisted!','success')">✓</button>
          <button class="btn btn-ghost btn-sm" onclick="showToast('${t} rejected.','error')">✗</button>
        </div>
      </div>`).join("")}`}function V(){return`<h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">🔖 Watchlist</h2>
    ${p.slice(0,4).map(e=>`
      <div class="glass-card" style="padding:16px 20px;margin-bottom:10px;display:flex;align-items:center;gap:14px;cursor:pointer" onclick="window._viewStartup(${e.id})">
        <span style="font-size:1.6rem">${e.logo}</span>
        <div style="flex:1"><p style="font-weight:600">${e.name}</p><p style="font-size:0.78rem;color:var(--text-muted)">${e.stage} · ${e.askAmount}</p></div>
        <div style="font-weight:700;color:${e.aiScore>=85?"var(--emerald)":"var(--blue)"}">AI ${e.aiScore}</div>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();navigate('messages')">Message</button>
      </div>`).join("")}`}function W(){return`<h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">📈 Portfolio</h2>
    <div class="glass-card" style="padding:24px;margin-bottom:16px">
      <p style="color:var(--text-secondary);font-size:0.9rem">Track your active investments here. Connect your deals to see live portfolio metrics.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px">
        <div style="text-align:center"><p style="font-size:1.5rem;font-weight:800;color:var(--emerald)">$2.4M</p><p style="font-size:0.78rem;color:var(--text-muted)">Deployed</p></div>
        <div style="text-align:center"><p style="font-size:1.5rem;font-weight:800;color:var(--blue)">7</p><p style="font-size:0.78rem;color:var(--text-muted)">Portfolio Companies</p></div>
        <div style="text-align:center"><p style="font-size:1.5rem;font-weight:800;color:var(--purple)">3.2x</p><p style="font-size:0.78rem;color:var(--text-muted)">Avg. MOIC</p></div>
      </div>
    </div>`}function K(){return`<h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">📋 My Applications</h2>
    ${[{job:"Senior Full-Stack Engineer",company:"NeuralNest AI",logo:"🧠",status:"Shortlisted",date:"Jan 18"},{job:"ML Engineer",company:"MediScan Pro",logo:"🏥",status:"Under Review",date:"Jan 15"},{job:"Growth Marketer",company:"SkillBridge",logo:"📚",status:"Applied",date:"Jan 12"}].map(t=>`
      <div class="glass-card" style="padding:16px 20px;margin-bottom:10px;display:flex;align-items:center;gap:14px">
        <span style="font-size:1.6rem">${t.logo}</span>
        <div style="flex:1"><p style="font-weight:600">${t.job}</p><p style="font-size:0.78rem;color:var(--text-muted)">${t.company} · Applied ${t.date}</p></div>
        <span class="tag ${t.status==="Shortlisted"?"tag-emerald":t.status==="Under Review"?"tag-blue":"tag-purple"}">${t.status}</span>
      </div>`).join("")}`}function U(){return`<h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px">🔖 Saved Jobs</h2>
    ${u.slice(1,4).map(e=>`
      <div class="glass-card" style="padding:16px 20px;margin-bottom:10px;display:flex;align-items:center;gap:14px">
        <span style="font-size:1.6rem">${e.logo}</span>
        <div style="flex:1"><p style="font-weight:600">${e.title}</p><p style="font-size:0.78rem;color:var(--text-muted)">${e.company} · ${e.salary}</p></div>
        <button class="btn btn-primary btn-sm" onclick="window._openApply(${e.id})">Apply</button>
      </div>`).join("")}`}function Q(){const e=d();window._dashTab=(t,a)=>{document.querySelectorAll(".sidebar-link").forEach(s=>s.classList.remove("active")),t.classList.add("active");const i=document.getElementById("dash-content");i&&(i.innerHTML=T(a,e?.role,e))},window._viewStartup=t=>l("startup",{id:t}),window.navigate=l,window.showToast=r}function Y(){return`
  <div class="container">
    <div class="section-header">
      <div><h2 class="section-title">💬 Messages</h2><p class="section-sub">Direct conversations with your network</p></div>
    </div>
    <div style="display:grid;grid-template-columns:320px 1fr;gap:0;background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius);overflow:hidden;min-height:500px">
      <div style="border-right:1px solid var(--glass-border);padding:16px">
        <div style="margin-bottom:12px">
          <input class="filter-search" placeholder="🔍 Search conversations..." style="width:100%;border-radius:var(--radius-sm);padding:10px 16px">
        </div>
        <div class="panel-list" id="msg-list">
          ${$.map((e,t)=>`
          <div class="panel-item ${e.unread?"unread":""}" onclick="window._openChat(${t})">
            <div class="msg-avatar">${e.avatar}</div>
            <div class="msg-body">
              <div class="msg-name">${e.from}</div>
              <div class="msg-text">${e.text}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
              <span class="msg-time">${e.time}</span>
              ${e.unread?'<div class="unread-dot"></div>':""}
            </div>
          </div>`).join("")}
        </div>
      </div>
      <div id="chat-window" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;color:var(--text-muted)">
        <div style="font-size:3rem;margin-bottom:16px">💬</div>
        <p style="font-size:0.9rem">Select a conversation to start chatting</p>
      </div>
    </div>
  </div>`}function X(){return`
  <div class="container">
    <div class="section-header">
      <div><h2 class="section-title">🔔 Notifications</h2><p class="section-sub">${y.filter(e=>e.unread).length} unread</p></div>
      <button class="btn btn-ghost btn-sm" onclick="window._markAllRead()">Mark all read</button>
    </div>
    <div class="glass-card" style="overflow:hidden">
      <div class="panel-list" id="notif-list">
        ${y.map((e,t)=>`
        <div class="panel-item ${e.unread?"unread":""}" style="border-bottom:1px solid var(--glass-border)" onclick="window._readNotif(${t},this)">
          <div style="width:40px;height:40px;border-radius:50%;background:var(--glass-bg);border:1px solid var(--glass-border);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">${e.icon}</div>
          <div class="msg-body">
            <div class="msg-name">${e.text}</div>
            <div class="msg-time" style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">${e.time}</div>
          </div>
          ${e.unread?'<div class="unread-dot"></div>':""}
        </div>`).join("")}
      </div>
    </div>
  </div>`}function x(){const e=[["Sounds great! Let's schedule a call. What works for you this week?","10:35 AM"],["I've been following NeuralNest since you launched — very impressive traction for 3 months.","10:40 AM"],["Friday 4pm IST works for me. I'll send a Google Meet invite.","10:52 AM"]];window._openChat=t=>{const a=$[t],i=document.getElementById("chat-window");i&&(i.style.alignItems="stretch",i.style.justifyContent="flex-start",i.style.padding="0",i.innerHTML=`
      <div style="display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--glass-border)">
        <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--purple));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem">${a.avatar}</div>
        <div><p style="font-weight:600;font-size:0.9rem">${a.from}</p><p style="font-size:0.75rem;color:var(--emerald)">● Online</p></div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:12px">
        <div style="align-self:flex-start;max-width:70%;background:var(--bg-secondary);border:1px solid var(--glass-border);border-radius:12px 12px 12px 4px;padding:12px 16px">
          <p style="font-size:0.875rem">${a.text}</p>
          <p style="font-size:0.7rem;color:var(--text-muted);margin-top:6px">${a.time}</p>
        </div>
        ${e.map(([s,o])=>`
          <div style="align-self:flex-start;max-width:70%;background:var(--bg-secondary);border:1px solid var(--glass-border);border-radius:12px 12px 12px 4px;padding:12px 16px">
            <p style="font-size:0.875rem">${s}</p>
            <p style="font-size:0.7rem;color:var(--text-muted);margin-top:6px">${o}</p>
          </div>`).join("")}
      </div>
      <div style="padding:16px;border-top:1px solid var(--glass-border);display:flex;gap:10px">
        <input class="input-field" id="chat-input" placeholder="Type a message..." style="flex:1;border-radius:99px;padding:10px 18px" onkeydown="if(event.key==='Enter')window._sendMsg()">
        <button class="btn btn-primary btn-sm" style="border-radius:99px;padding:10px 18px" onclick="window._sendMsg()">Send ↗</button>
      </div>`)},window._sendMsg=()=>{const t=document.getElementById("chat-input"),a=t?.value.trim();if(!a)return;const i=t.closest('[style*="flex-direction:column"]')?.querySelector('[style*="overflow-y:auto"]');if(i){const s=document.createElement("div");s.style.cssText="align-self:flex-end;max-width:70%;background:linear-gradient(135deg,var(--blue),#1D4ED8);border-radius:12px 12px 4px 12px;padding:12px 16px",s.innerHTML=`<p style="font-size:0.875rem;color:white">${a}</p><p style="font-size:0.7rem;color:rgba(255,255,255,0.6);margin-top:6px">Just now</p>`,i.appendChild(s),i.scrollTop=i.scrollHeight}t.value="",setTimeout(()=>r("Message sent!","success"),200)},window._readNotif=(t,a)=>{a.classList.remove("unread");const i=a.querySelector(".unread-dot");i&&i.remove()},window._markAllRead=()=>{document.querySelectorAll(".panel-item.unread").forEach(t=>{t.classList.remove("unread"),t.querySelector(".unread-dot")?.remove()}),r("All notifications marked as read.","success")}}function Z(){const e=d();if(!e)return"";const t=e.role==="founder"?"🚀 Founder":e.role==="investor"?"💼 Investor":"🎯 Job Seeker";return`
  <div class="container" style="max-width:800px">
    <div class="profile-header glass-card">
      <div class="profile-avatar">${e.avatar}</div>
      <div style="flex:1">
        <h1 class="profile-name">${e.name}</h1>
        <p class="profile-role">${t}</p>
        <p class="profile-tagline">${e.tagline||"Building something great on PitchBridge."}</p>
        <div class="profile-stats">
          <div class="profile-stat"><span class="pstat-val">${e.connections}</span><span class="pstat-label">Connections</span></div>
          <div class="profile-stat"><span class="pstat-val">${e.location||"India"}</span><span class="pstat-label">Location</span></div>
          ${e.company?`<div class="profile-stat"><span class="pstat-val">${e.company}</span><span class="pstat-label">Company</span></div>`:""}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-primary btn-sm" onclick="window._editProfile()">✏️ Edit Profile</button>
        <button class="btn btn-secondary btn-sm" onclick="window._shareProfile()">🔗 Share</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px">
      <div class="glass-card" style="padding:24px">
        <h3 style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px">About</h3>
        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7">${e.bio||"Building connections in the startup ecosystem. Passionate about innovation, technology, and entrepreneurship."}</p>
      </div>
      <div class="glass-card" style="padding:24px">
        <h3 style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px">Account Details</h3>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;justify-content:space-between;font-size:0.85rem">
            <span style="color:var(--text-muted)">Email</span>
            <span style="font-weight:500">${e.email}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.85rem">
            <span style="color:var(--text-muted)">Role</span>
            <span style="font-weight:500;color:var(--blue)">${e.role}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.85rem">
            <span style="color:var(--text-muted)">Member Since</span>
            <span style="font-weight:500">Feb 2025</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.85rem">
            <span style="color:var(--text-muted)">Status</span>
            <span class="tag tag-emerald">Active</span>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" style="padding:24px;margin-top:16px">
      <h3 style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px">Skills & Interests</h3>
      <div class="chip-row">
        ${["Startups","Technology","AI/ML","Fintech","Product Strategy","Venture Capital","Growth Hacking","Data Science"].map(a=>`<span class="tag tag-blue">${a}</span>`).join("")}
      </div>
    </div>

    <div style="margin-top:24px;padding:20px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:var(--radius)">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div>
          <p style="font-weight:600;font-size:0.9rem">Danger Zone</p>
          <p style="font-size:0.8rem;color:var(--text-muted)">Sign out of your PitchBridge account.</p>
        </div>
        <button class="btn btn-ghost btn-sm" style="color:#EF4444;border-color:rgba(239,68,68,0.3)" onclick="window._logout()">Sign Out</button>
      </div>
    </div>
  </div>`}function ee(){window._editProfile=()=>r("Profile editing coming soon!","info"),window._shareProfile=()=>{navigator.clipboard?.writeText(window.location.href).catch(()=>{}),r("Profile link copied to clipboard!","success")}}const te=document.getElementById("app");function w(){return`
  <div style="min-height:100vh">
    <section class="hero">
      <div class="hero-eyebrow">🚀 Launching in India — Private Beta</div>
      <h1>Where Startups Meet<br>Capital & Talent</h1>
      <p>PitchBridge is the AI-powered networking platform connecting visionary founders, smart investors, and exceptional builders — all in one premium ecosystem.</p>
      <div class="hero-btns">
        <button class="btn btn-primary" style="font-size:1rem;padding:14px 28px" onclick="navigate('auth')">Get Started Free →</button>
        <button class="btn btn-secondary" style="font-size:1rem;padding:14px 28px" onclick="navigate('idea-hub')">Browse Idea Hub</button>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><div class="hero-stat-num">50+</div><div class="hero-stat-label">AI-Vetted Startups</div></div>
        <div class="hero-stat"><div class="hero-stat-num">₹12Cr+</div><div class="hero-stat-label">Capital Seeking</div></div>
        <div class="hero-stat"><div class="hero-stat-num">200+</div><div class="hero-stat-label">Open Roles</div></div>
        <div class="hero-stat"><div class="hero-stat-num">95%</div><div class="hero-stat-label">Match Accuracy</div></div>
      </div>
    </section>

    <section style="padding:40px 24px 80px;max-width:1200px;margin:0 auto">
      <h2 style="font-size:1.6rem;font-weight:800;text-align:center;margin-bottom:8px">Built for Three Pillars</h2>
      <p style="text-align:center;color:var(--text-muted);margin-bottom:40px">Every role gets a tailored, purpose-built experience.</p>
      <div class="grid-3">
        ${[{icon:"🚀",role:"Founders",color:"var(--blue)",features:["AI Startup Screening","Investor Discovery","One-Click Hiring","Deal Room Analytics"]},{icon:"💼",role:"Investors",color:"var(--emerald)",features:["AI Score Filtering","Curated Deal Flow","Direct Founder Messaging","Portfolio Tracking"]},{icon:"🎯",role:"Job Seekers",color:"var(--purple)",features:["Startup-Focused Roles","Equity-First Jobs","Real-time Application Updates","Founder Direct Apply"]}].map(e=>`
          <div class="glass-card" style="padding:28px">
            <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,${e.color}22,${e.color}44);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:16px;border:1px solid ${e.color}33">${e.icon}</div>
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:12px;color:${e.color}">${e.role}</h3>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
              ${e.features.map(t=>`<li style="font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;gap:8px"><span style="color:${e.color}">✓</span>${t}</li>`).join("")}
            </ul>
            <button class="btn btn-secondary btn-sm" style="margin-top:20px;width:100%;justify-content:center" onclick="navigate('auth')">Join as ${e.role.slice(0,-1)} →</button>
          </div>`).join("")}
      </div>
    </section>

    <section style="padding:40px 24px 80px;background:rgba(59,130,246,0.04);border-top:1px solid var(--glass-border)">
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 style="font-size:1.8rem;font-weight:800;margin-bottom:12px">AI-Powered Screening</h2>
        <p style="color:var(--text-secondary);margin-bottom:32px">Every startup on PitchBridge is analyzed by our Gemini AI engine, generating a quality score and insights so investors can find the best deals instantly.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
          ${[["92","NeuralNest AI","var(--emerald)"],["85","GreenGrid Energy","var(--blue)"],["96","MediScan Pro","var(--purple)"]].map(([e,t,a])=>`
            <div class="glass-card" style="padding:20px;text-align:center">
              <div style="font-size:2rem;font-weight:800;color:${a}">${e}</div>
              <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">AI Score</div>
              <div style="font-size:0.85rem;font-weight:600;margin-top:8px">${t}</div>
            </div>`).join("")}
        </div>
        <button class="btn btn-primary" style="margin-top:28px" onclick="navigate('idea-hub')">Explore Idea Hub →</button>
      </div>
    </section>

    <footer style="padding:40px 24px;border-top:1px solid var(--glass-border);text-align:center;color:var(--text-muted);font-size:0.82rem">
      <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:12px">
        <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,var(--blue),var(--emerald));display:flex;align-items:center;justify-content:center">🌉</div>
        <span style="font-weight:700;font-size:1.1rem;background:linear-gradient(135deg,var(--blue),var(--emerald));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">PitchBridge</span>
      </div>
      <p>Built by <strong style="color:var(--text-secondary)">Aakshna</strong> &amp; <strong style="color:var(--text-secondary)">Aarcha</strong> · Connect. Pitch. Build the Future.</p>
      <p style="margin-top:4px">© 2025 PitchBridge. Demo Mode Active.</p>
    </footer>
  </div>`}function ie(e){const t=d();return["landing","auth"].includes(e)?"":`
  <nav class="topnav">
    <div class="nav-brand" onclick="navigate('landing')">
      <div class="logo-icon">🌉</div>
      PitchBridge
    </div>
    <div class="nav-links">
      ${[{id:"landing",label:"Home",icon:"🏠"},{id:"idea-hub",label:"Idea Hub",icon:"💡"},{id:"jobs",label:"Jobs",icon:"💼"},{id:"dashboard",label:"Dashboard",icon:"📊"}].map(s=>`<button class="nav-link ${e===s.id?"active":""}" onclick="navigate('${s.id}')">${s.label}</button>`).join("")}
    </div>
    <div class="nav-actions">
      <button class="icon-btn" onclick="navigate('notifications')" title="Notifications">
        🔔 <span class="badge">2</span>
      </button>
      <button class="icon-btn" onclick="navigate('messages')" title="Messages">
        💬 <span class="badge">2</span>
      </button>
      ${t?`<div class="avatar-btn" onclick="navigate('profile')" title="${t.name}">${t.avatar}</div>`:`<button class="btn btn-primary btn-sm" onclick="navigate('auth')">Sign In</button>`}
    </div>
  </nav>`}function ae(e,t={}){let a="",i=()=>{};switch(e){case"landing":a=w();break;case"auth":a=j(),i=R;break;case"idea-hub":a=C(),i=h;break;case"startup":a=F(t.id),i=h;break;case"jobs":a=N(),i=D;break;case"dashboard":a=H(),i=Q;break;case"messages":a=Y(),i=x;break;case"notifications":a=X(),i=x;break;case"profile":a=Z(),i=ee;break;default:a=w()}const s=ie(e);te.innerHTML=`
    ${s}
    <main>${a}</main>
    <div class="toast-container" id="toast-container"></div>`,i(),window.scrollTo(0,0)}window.addEventListener("pb-navigate",e=>{ae(e.detail.view,e.detail.params)});window.showToast=r;window._logout=()=>{P(),r("Signed out successfully.","info"),l("landing")};window._viewStartup=e=>l("startup",{id:e});l(d()?"dashboard":"landing");
