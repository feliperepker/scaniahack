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
        public DbSet<PartBrasil> tb_brazil { get; set; }
        public DbSet<PartSuecia> tb_suecia { get; set; }
        public DbSet<PartBelgica> tb_belgica { get; set; }
        public DbSet<Supplier> tb_suppliers { get; set; }
    }
}
