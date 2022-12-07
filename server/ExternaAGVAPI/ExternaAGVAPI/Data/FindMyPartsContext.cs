using ExternaAGVAPI.Models;
using FindMyPart.Models;
using Microsoft.EntityFrameworkCore;

namespace ExternaAGVAPI.Data
{
    public class FindMyPartsContext : DbContext
    {
        public FindMyPartsContext(DbContextOptions<FindMyPartsContext> opt) : base(opt)
        {

        }
        public DbSet<Users> tb_users { get; set; }
        public DbSet<PartBrasil> tb_monabrazil { get; set; }
        public DbSet<PartSuecia> tb_monasuecia{ get; set; }
        public DbSet<PartHolanda> tb_monaholanda{ get; set; }
        public DbSet<PartPrototipo> tb_monaprototipo { get; set; }
    }
}
