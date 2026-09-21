namespace KtujmWeb.Models
{
    public class HomeViewModel
    {
        public string Language { get; set; } = "en";
        public UniversityDetails University { get; set; } = new();
        public List<LeaderProfile> Leadership { get; set; } = new();
        public List<ProgramCategory> ProgramCategories { get; set; } = new();
        public List<FacultyMember> Faculty { get; set; } = new();
        public List<NoticeItem> Notices { get; set; } = new();
        public List<EventItem> Events { get; set; } = new();
    }

    public class UniversityDetails
    {
        public string NameEn { get; set; } = "Kushabhau Thakre Patrakarita Avam Jansanchar Vishwavidyalaya";
        public string NameHi { get; set; } = "कुशाभाऊ ठाकरे पत्रकारिता एवं जनसंचार विश्वविद्यालय";
        public string Location { get; set; } = "Kathadih, Post Office: Sunder Nagar, Raipur (Chhattisgarh) - 492013";
        public string Phone { get; set; } = "0771-2779201, 2779204";
        public string Email { get; set; } = "kulsachiv@ktujm.ac.in";
        public string Act { get; set; } = "Established by Government of Chhattisgarh Vide Act 24 of 2004";
    }

    public class LeaderProfile
    {
        public string Title { get; set; } = "";
        public string Name { get; set; } = "";
        public string Designation { get; set; } = "";
        public string Quote { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public string ProfileUrl { get; set; } = "#";
    }

    public class ProgramCategory
    {
        public string Id { get; set; } = "";
        public string Title { get; set; } = "";
        public bool IsActive { get; set; }
        public List<ProgramItem> Programs { get; set; } = new();
    }

    public class ProgramItem
    {
        public string Title { get; set; } = "";
        public string Duration { get; set; } = "";
        public string Description { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public string LinkUrl { get; set; } = "#";
    }

    public class FacultyMember
    {
        public string Name { get; set; } = "";
        public string Designation { get; set; } = "";
        public string Department { get; set; } = "";
        public string ImageUrl { get; set; } = "";
    }

    public class NoticeItem
    {
        public string Title { get; set; } = "";
        public string Date { get; set; } = "";
        public string Category { get; set; } = "";
        public string FileUrl { get; set; } = "#";
        public bool IsNew { get; set; }
    }

    public class EventItem
    {
        public string Title { get; set; } = "";
        public string Date { get; set; } = "";
        public string Venue { get; set; } = "";
        public string Description { get; set; } = "";
        public string ImageUrl { get; set; } = "";
    }
}
