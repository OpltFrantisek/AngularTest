using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class AttendanceRepository<T> : IAttendanceRepository<T> where T : BaseEntity
    {
        private readonly StoreContext _context;

        public AttendanceRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<Attendance>> GetAllAtendancesByUser(int userid)
        {
            return await _context.Attendances.Where(x => x.UserId == userid).Include( p => p.Project.Name).ToListAsync();
        }

        public async Task<IReadOnlyList<Attendance>> GetAtendances(Core.Specification.ISpecifications<T> spec)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IReadOnlyList<Project>> GetProjects(Core.Specification.ISpecifications<T> spec)
        {
            throw new System.NotImplementedException();
        }
    }
}