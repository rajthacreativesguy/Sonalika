using Microsoft.Extensions.Logging;
using ITLSpcIBServiceData.ServiceBase.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace ITLSpcIBServiceData.ServiceBase.Implementations
{
    public class ServiceBase<TOutput> : IServiceBase<TOutput>
    {
        readonly string ResourceName = string.Empty;
        protected List<string> UserMessages { get; set; } = new List<string>();
        protected readonly ILogger _logger;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceName"></param>
        /// <param name="logger"></param>
        public ServiceBase(string resourceName, ILogger logger)
        {
            this.ResourceName = resourceName;
            this._logger = logger;
        }
        public Response<TOutput> Execute()
        {
            var response = new Response<TOutput>();
            try
            {
                _logger?.LogInformation($"{ResourceName} request processed started.");
                response.Data = Build();
                response.IsSuccess = true;
                response.Message = $"{ResourceName} request processed successfully";
                _logger?.LogInformation($"{ResourceName} request processed successfully");
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.ErrorMessage = ex.ToString();
                response.Message = UserMessages.Count > 0 ?
                    string.Join("\n", UserMessages) :
                    $"{ResourceName} request failed to process.";
                _logger?.LogError(ex.ToString());
            }

            return response;
        }

        protected virtual TOutput? Build()
        {
            return default(TOutput);
        }
    }

    public class ServiceBase<TInput, TOutput> : IServiceBase<TInput, TOutput>
    {
        readonly string ResourceName = string.Empty;
        protected List<string> UserMessages { get; set; } = new List<string>();
        protected readonly ILogger _logger;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceName"></param>
        /// <param name="logger"></param>
        public ServiceBase(string resourceName, ILogger logger)
        {
            ResourceName = resourceName;
            _logger = logger;
        }
        public Response<TOutput> Execute(TInput input)
        {
            var response = new Response<TOutput>();
            try
            {
                _logger?.LogInformation($"{ResourceName} request processed started.");
                response.Data = Build(input);
                response.IsSuccess = true;
                response.Message = $"{ResourceName} request processed successfully";
                _logger?.LogInformation($"{ResourceName} request processed successfully");
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.ErrorMessage = ex.ToString();
                response.Message = UserMessages.Count > 0 ?
                    string.Join("\n", UserMessages) :
                    $"{ResourceName} request failed to process.";
                _logger?.LogError(ex.ToString());
            }

            return response;
        }

        protected virtual TOutput? Build(TInput input)
        {
            return default(TOutput);
        }
    }
}
