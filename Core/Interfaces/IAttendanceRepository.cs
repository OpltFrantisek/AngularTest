using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Specification;

namespace Core.Interfaces
{
    public interface IAttendanceRepository<T> where T : BaseEntity
    {
         Task<IReadOnlyList<Attendance>> GetAllAtendancesByUser(int userid);
        Task<IReadOnlyList<Attendance>> GetAtendances(ISpecifications<T> spec);
         Task<IReadOnlyList<Project>> GetProjects(ISpecifications<T> spec);

    }
}