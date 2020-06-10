namespace Core.Entities
{
    public class Project : BaseEntity
    {
        public string Name { get; set; }
        public string Desciption { get; set; }
        public double FreeHours {get; set;}

    }
}