using ITLSpcIBServiceData.ServiceBase;
using ITLSpcIBServiceDataApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ITLSpcIBServiceDataApi.Api.Controllers
{
    [Route("api/SampleController")]
    [ApiController]
    public class SampleController:ControllerBase
    {
        readonly ISampleService _sampleService;
        public SampleController(ISampleService sampleService)
        {
            this._sampleService = sampleService;
        }

        [HttpGet]
        public Response<int> GetSampleResult(int id)
        {
            return this._sampleService.Execute(id);
        }
    }
}
