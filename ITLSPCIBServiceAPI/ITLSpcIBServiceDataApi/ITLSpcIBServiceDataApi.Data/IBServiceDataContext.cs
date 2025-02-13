using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITLSpcIBServiceDataApi.Data
{
    public class IBServiceDataContext:DbContext
    {
        public IBServiceDataContext()
        {
            
        }

        public IBServiceDataContext(DbContextOptions options):base(options) 
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.ConfigureWarnings(warnings => warnings.Ignore(SqlServerEventId.DecimalTypeKeyWarning));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //foreach (IMutableEntityType entityType in modelBuilder.Model.GetEntityTypes())
            //{
            //    entityType.UseSqlOutputClause();
            //}
            base.OnModelCreating(modelBuilder);
        }
    }
}
