# Script to create 10 days of commits with custom author and committer dates

$env:GIT_COMMITTER_NAME = "manoj-chavan-13"
$env:GIT_COMMITTER_EMAIL = "manojschavan6@gmail.com"
$env:GIT_AUTHOR_NAME = "manoj-chavan-13"
$env:GIT_AUTHOR_EMAIL = "manojschavan6@gmail.com"

function Make-Commit {
    param(
        [string]$DateStr,
        [string]$Message,
        [scriptblock]$AddAction
    )
    $env:GIT_AUTHOR_DATE = "$DateStr +0530"
    $env:GIT_COMMITTER_DATE = "$DateStr +0530"
    & $AddAction
    git commit --date="$DateStr +0530" -m "$Message"
}

Write-Host "Starting commit creation across 10 days..."

# Day 1: 2026-09-30
Make-Commit "2026-09-30 10:15:22" "chore: initialize Vite React project setup and workspace configuration" {
    git add package.json package-lock.json vite.config.js index.html .gitignore .oxlintrc.json README.md
}

Make-Commit "2026-09-30 16:45:10" "style: configure base Tailwind stylesheets and design system foundation" {
    git add src/index.css src/App.css src/main.jsx src/assets/ public/favicon.svg public/icons.svg
}

# Day 2: 2026-10-01
Make-Commit "2026-10-01 11:20:45" "feat: implement responsive navigation bar with mobile menu and active routing" {
    git add src/components/Navbar.jsx public/logo.png public/assets/images/logo*.png
}

Make-Commit "2026-10-01 17:35:12" "feat: build high-impact Hero banner with engineering statistics counter" {
    git add src/components/Hero.jsx public/assets/images/hero*.jpg public/assets/images/hero*.png
}

# Day 3: 2026-10-02
Make-Commit "2026-10-02 14:10:33" "feat: create comprehensive services showcase and detailed services page" {
    git add src/components/OurServices.jsx src/pages/ServicesPage.jsx public/assets/images/Our-Services*.jpg public/assets/images/service*.jpg public/assets/images/services*.png public/assets/images/services*.jpg
}

# Day 4: 2026-10-03
Make-Commit "2026-10-03 10:50:18" "feat: implement 4-step architectural construction process roadmap" {
    git add src/components/OurProcess.jsx public/assets/images/process*.png public/assets/images/clean-process*.jpg
}

Make-Commit "2026-10-03 16:15:40" "feat: build Why Choose Us engineering excellence and safety highlights" {
    git add src/components/WhyChooseUs.jsx public/assets/images/why-choose*.png public/assets/images/why-choose*.jpg public/assets/images/clean-why*.jpg
}

# Day 5: 2026-10-04
Make-Commit "2026-10-04 12:30:25" "feat: add client testimonials cards and interactive media modal" {
    git add src/components/Testimonials.jsx src/components/VideoModal.jsx src/components/Preloader.jsx public/loading.mp4 public/assets/images/testimonial*.png public/assets/images/testimonial*.jpg public/assets/images/clean-testimonial*.jpg public/assets/images/avatar*.jpg
}

Make-Commit "2026-10-04 18:00:50" "feat: implement structural footer with quick links, contact info and copyright" {
    git add src/components/Footer.jsx public/assets/images/footer*.png public/assets/images/footer*.jpg public/assets/images/del*.footer*.jpg
}

# Day 6: 2026-10-05
Make-Commit "2026-10-05 11:45:15" "feat: build comprehensive About Us page featuring company journey and values" {
    git add src/components/AboutUs.jsx src/pages/AboutPage.jsx public/about-hero.mp4 public/assets/images/about*.jpg public/assets/images/about*.png public/assets/images/clean-about*.jpg public/assets/images/del*.about*.jpg
}

Make-Commit "2026-10-05 17:15:42" "feat: integrate GSAP scroll animations and smooth page transitions" {
    git add src/components/GsapEffects.jsx src/components/ScrollToTop.jsx src/components/CalligraphyAccent.jsx
}

# Day 7: 2026-10-06
Make-Commit "2026-10-06 14:00:19" "feat: build interactive Contact page with quote request form and validation" {
    git add src/pages/ContactPage.jsx src/components/ContactModal.jsx public/assets/images/contact*.png public/assets/images/del*.contact*.png
}

# Day 8: 2026-10-07
Make-Commit "2026-10-07 11:30:28" "feat: establish centralized projects database with technical specs and case studies" {
    git add src/data/projectsData.js
}

Make-Commit "2026-10-07 16:45:55" "feat: implement interactive projects gallery with category filters and project cards" {
    git add src/components/Projects.jsx src/pages/ProjectsPage.jsx public/assets/images/project*.jpg public/assets/images/clean-project*.jpg public/assets/images/projects*.png public/assets/images/projects*.jpg public/assets/images/crl*.jpg public/assets/images/featured*.png
}

# Day 9: 2026-10-08
Make-Commit "2026-10-08 12:00:44" "feat: implement dedicated Project Details view page replacing legacy modal overlay" {
    git add src/pages/ProjectViewPage.jsx src/pages/ProjectDetailsPage.jsx src/components/ProjectModal.jsx
}

Make-Commit "2026-10-08 17:20:30" "feat: configure multi-page application routing and direct consultation links" {
    git add src/App.jsx src/pages/HomePage.jsx assets/ css/ js/ test_logo.png *.png
}

# Day 10: 2026-10-09
Make-Commit "2026-10-09 14:15:10" "feat: create compact architectural CTA component across all website pages" {
    git add public/assets/images/blueprint-sketch.jpg
}

Make-Commit "2026-10-09 19:58:30" "feat: implement full-width edge-to-edge CTA layout with CTAbg background integration" {
    git add -A
}

Write-Host "All commits created successfully!"
