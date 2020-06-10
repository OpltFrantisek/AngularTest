using System;

namespace Core.Entities
{
    public class Attendance : BaseEntity
    {
        public DateTime Time { get; set; }
        public int  ProjectId {get; set;}

        public Project Project {get; set;}
        public double HoursWorked { get; set; }

        public int UserId {get;set;}
    }
}