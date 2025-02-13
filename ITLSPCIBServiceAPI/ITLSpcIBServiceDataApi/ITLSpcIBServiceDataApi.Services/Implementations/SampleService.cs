using ITLSpcIBServiceData.ServiceBase.Implementations;
using ITLSpcIBServiceDataApi.Data;
using ITLSpcIBServiceDataApi.Services.Interfaces;
using Microsoft.Extensions.Logging;

namespace ITLSpcIBServiceDataApi.Services.Implementations
{
    public class SampleService : ServiceBase<int, int>, ISampleService
    {
        const string resourceName = "Sample Service";
        readonly IUnitOfWork _unitOfWork;
        public SampleService(ILogger<SampleService> logger, IUnitOfWork unitOfWork) : base(resourceName, logger)
        {
            this._unitOfWork = unitOfWork;
        }

        protected override int Build(int input)
        {
            this._logger.LogInformation($"This is a sample service build method with Input: {input}");
            return 1;
        }
    }
}
