using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITLSpcIBServiceDataApi.Data
{
    /// <summary>
    /// Unit of work class to represent each repository class as unit here
    /// </summary>
    public class UnitOfWork: IUnitOfWork
    {
        readonly IBServiceDataContext _context;
        readonly ILoggerFactory _logger;

        public UnitOfWork(IBServiceDataContext context, ILoggerFactory logger)
        {
            this._context = context;
            this._logger = logger;
        }
        /// <summary>
        /// This metho will automatically call <see cref="Microsoft.EntityFrameworkCore.ChangeTracking.ChangeTracker.DetectChanges"/>
        ///  to discover any changes to entity instances before saving to the underlying database. This van be disabled via
        ///  <see cref="Microsoft.EntityFrameworkCore.ChangeTracking.ChangeTracker.AutoDetectChangesEnabled"/>
        /// </summary>
        /// <returns>Type of <see cref="int"/></returns>
        public int SaveChanges()
        {
            return this._context.SaveChanges();        }
    }
}
