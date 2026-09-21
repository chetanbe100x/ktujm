using Microsoft.AspNetCore.Mvc;
using KtujmWeb.Models;

namespace KtujmWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: / or /Home/Index or /en
        [Route("")]
        [Route("en")]
        public IActionResult Index()
        {
            var model = GetEnglishViewModel();
            return View("Index", model);
        }

        // GET: /index_en.html or /Home/IndexEn
        [Route("index_en.html")]
        [Route("IndexEn")]
        public IActionResult IndexEn()
        {
            var model = GetEnglishViewModel();
            return View("Index", model);
        }

        // GET: /hindi or /index.html or /Home/Hindi
        [Route("hindi")]
        [Route("index.html")]
        [Route("Hindi")]
        public IActionResult Hindi()
        {
            var model = GetHindiViewModel();
            return View("Hindi", model);
        }

        [HttpPost]
        public IActionResult SubmitInquiry(string name, string email, string phone, string course)
        {
            return Json(new { success = true, message = $"Thank you, {name}. Your admission inquiry for {course} has been registered." });
        }

        private HomeViewModel GetEnglishViewModel()
        {
            return new HomeViewModel
            {
                Language = "en",
                Leadership = new List<LeaderProfile>
                {
                    new LeaderProfile
                    {
                        Title = "Chancellor & Governor of Chhattisgarh",
                        Name = "Shri Ramen Deka",
                        Designation = "Hon'ble Governor & Chancellor, KTUJM",
                        Quote = "Media is the bedrock of our democratic ethos. Kushabhau Thakre University serves as an intellectual lighthouse nurturing ethical, independent, and socially responsible media professionals.",
                        ImageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
                        ProfileUrl = "#"
                    },
                    new LeaderProfile
                    {
                        Title = "Vice-Chancellor",
                        Name = "Prof. Manoj Dayal",
                        Designation = "Vice-Chancellor, KTUJM Raipur",
                        Quote = "Our pedagogical commitment bridges traditional journalistic integrity with modern digital convergence—fostering excellence across television broadcasting, AI in newsrooms, and public discourse.",
                        ImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
                        ProfileUrl = "#"
                    }
                },
                ProgramCategories = new List<ProgramCategory>
                {
                    new ProgramCategory
                    {
                        Id = "pg-diploma",
                        Title = "P.G. Diploma",
                        IsActive = true,
                        Programs = new List<ProgramItem>
                        {
                            new ProgramItem
                            {
                                Title = "PG Diploma in Broadcast Journalism",
                                Duration = "1 Year (2 Semesters)",
                                Description = "Designed to impart rigorous studio newsroom anchoring, multi-camera television production, teleprompter delivery, and electronic news gathering.",
                                ImageUrl = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "PG Diploma in Photography",
                                Duration = "1 Year (2 Semesters)",
                                Description = "Provides in-depth creative and technical training in photojournalism, visual archiving, commercial portraiture, and digital lighting.",
                                ImageUrl = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "PG Diploma in Desktop Publishing (DTP)",
                                Duration = "1 Year (2 Semesters)",
                                Description = "Practical training in pagination, Adobe InDesign, typography, newspaper layout design, infographics, and prepress publishing.",
                                ImageUrl = "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "PG Diploma in Public Health & Mass Communication",
                                Duration = "1 Year (2 Semesters)",
                                Description = "Equips media practitioners with vital knowledge on health reporting, community advocacy, disease surveillance communication, and CSR.",
                                ImageUrl = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                            }
                        }
                    },
                    new ProgramCategory
                    {
                        Id = "graduation",
                        Title = "Graduation",
                        IsActive = false,
                        Programs = new List<ProgramItem>
                        {
                            new ProgramItem
                            {
                                Title = "B.A. in Mass Communication",
                                Duration = "3 Years / 4 Years (NEP Honours)",
                                Description = "Comprehensive undergraduate curriculum covering print journalism, radio broadcasting, digital storytelling, media ethics, and public relations.",
                                ImageUrl = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "B.A. in Electronic Media",
                                Duration = "3 Years (6 Semesters)",
                                Description = "Hands-on television production, audio mixing, news reporting, video editing, and live broadcast operations in university studios.",
                                ImageUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "Bachelor of Business Administration (BBA)",
                                Duration = "3 Years (6 Semesters)",
                                Description = "Specialized management program focusing on media economics, brand communication, marketing principles, and media enterprise leadership.",
                                ImageUrl = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
                            }
                        }
                    },
                    new ProgramCategory
                    {
                        Id = "post-graduation",
                        Title = "Post Graduation",
                        IsActive = false,
                        Programs = new List<ProgramItem>
                        {
                            new ProgramItem
                            {
                                Title = "M.A. in Mass Communication",
                                Duration = "2 Years (4 Semesters)",
                                Description = "Advanced research, communication theories, development journalism, policy studies, and media sociology.",
                                ImageUrl = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "M.A. in Electronic Media",
                                Duration = "2 Years (4 Semesters)",
                                Description = "Professional broadcast degree preparing graduates for national television networks, documentary filmmaking, and audio engineering.",
                                ImageUrl = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "M.A. in Advertising & Public Relations",
                                Duration = "2 Years (4 Semesters)",
                                Description = "Corporate communications, digital advertising campaign analytics, crisis PR management, and consumer psychology.",
                                ImageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
                            },
                            new ProgramItem
                            {
                                Title = "Master of Journalism (M.J.)",
                                Duration = "2 Years (4 Semesters)",
                                Description = "Advanced investigative reporting, editorial writing, constitutional law, data journalism, and cyber jurisprudence.",
                                ImageUrl = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600"
                            }
                        }
                    },
                    new ProgramCategory
                    {
                        Id = "research",
                        Title = "Research (Ph.D.)",
                        IsActive = false,
                        Programs = new List<ProgramItem>
                        {
                            new ProgramItem
                            {
                                Title = "Doctor of Philosophy (Ph.D.) in Journalism & Mass Communication",
                                Duration = "3 to 5 Years",
                                Description = "Promotes original empirical research, media policy critical discourse, and scholarly investigations aligned with UGC standards.",
                                ImageUrl = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
                            }
                        }
                    }
                },
                Faculty = new List<FacultyMember>
                {
                    new FacultyMember { Name = "Dr. Manoj Kumar Lodha", Designation = "Associate Professor", Department = "Electronic Media", ImageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
                    new FacultyMember { Name = "Dr. Ajay Kumar Singh", Designation = "Assistant Professor", Department = "Mass Communication", ImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
                    new FacultyMember { Name = "Dr. Shalini Joshi", Designation = "Assistant Professor", Department = "Journalism", ImageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
                    new FacultyMember { Name = "Dr. Richa Yadav", Designation = "Assistant Professor", Department = "Advertising & PR", ImageUrl = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
                },
                Notices = new List<NoticeItem>
                {
                    new NoticeItem { Title = "Admission Notification Session 2026-27 for UG, PG and Diploma Programs", Date = "18 Sep 2026", Category = "Admissions", IsNew = true },
                    new NoticeItem { Title = "Schedule for End-Semester Examinations (Regular & ATKT) June-July 2026", Date = "16 Sep 2026", Category = "Examinations", IsNew = true },
                    new NoticeItem { Title = "National Media Conclave 2026 on 'AI & The Future of Indian Journalism'", Date = "12 Sep 2026", Category = "Conclave", IsNew = false },
                    new NoticeItem { Title = "Registration Open for 7th Annual Convocation Degree Distribution", Date = "08 Sep 2026", Category = "Convocation", IsNew = true }
                },
                Events = new List<EventItem>
                {
                    new EventItem
                    {
                        Title = "National Media Conclave 2026: AI & The Future of Democratic Journalism",
                        Date = "28 October 2026",
                        Venue = "Main University Auditorium, KTUJM Raipur",
                        Description = "Keynote discussions with veteran editors, broadcast anchors, and AI researchers on modern newsroom ethics.",
                        ImageUrl = "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600"
                    },
                    new EventItem
                    {
                        Title = "Investigative Journalism Masterclass with Senior Editors",
                        Date = "15 October 2026",
                        Venue = "Studio Floor A, Electronic Media Dept",
                        Description = "Hands-on workshop for postgraduate scholars covering data scraping, public record investigations, and source safety.",
                        ImageUrl = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
                    }
                }
            };
        }

        private HomeViewModel GetHindiViewModel()
        {
            var model = GetEnglishViewModel();
            model.Language = "hi";
            model.Leadership[0].Title = "कुलाधिपति, माननीय राज्यपाल (छ.ग.)";
            model.Leadership[0].Name = "श्री रमेन डेका";
            model.Leadership[0].Quote = "मीडिया हमारे लोकतंत्र का चौथा आधार स्तंभ है। कुशाभाऊ ठाकरे पत्रकारिता विश्वविद्यालय मूल्यपरक पत्रकारिता और राष्ट्र-निर्माण हेतु समर्पित शिक्षण का प्रमुख केंद्र है।";

            model.Leadership[1].Title = "कुलगुरु / कुलपति";
            model.Leadership[1].Name = "प्रो. मनोज दयाल";
            model.Leadership[1].Quote = "के.टी.यू.जे.एम. में हम पारम्परिक पत्रकारिता के मूल्यों और अत्याधुनिक डिजिटल व ब्रॉडकास्ट तकनीकों का अद्भुत संगम विद्यार्थियों को उपलब्ध करा रहे हैं।";

            model.ProgramCategories[0].Title = "पीजी डिप्‍लोमा";
            model.ProgramCategories[1].Title = "स्नातक";
            model.ProgramCategories[2].Title = "स्नातकोत्तर";
            model.ProgramCategories[3].Title = "शोध (पीएच-डी)";

            return model;
        }
    }
}
