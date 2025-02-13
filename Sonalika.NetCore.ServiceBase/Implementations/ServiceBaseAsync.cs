using Microsoft.Extensions.Logging;
using Sonalika.NetCore.ServiceBase.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Sonalika.NetCore.ServiceBase.Implementations
{
    public class ServiceBaseAsync<TOutput> : IServiceBaseAsync<TOutput>
    {
        readonly string ResourceName = string.Empty;
        protected List<string> UserMessages { get; set; } = new List<string>();
        protected readonly ILogger _logger;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceName"></param>
        /// <param name="logger"></param>
        public ServiceBaseAsync(string resourceName, ILogger logger)
        {
            this.ResourceName = resourceName;
            this._logger = logger;
        }
        public async Task<Response<TOutput>> ExecuteAsync()
        {
            var response = new Response<TOutput>();
            try
            {
                _logger?.LogInformation($"{ResourceName} request processed started.");
                response.Data = await BuildAsync();
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

        protected virtual Task<TOutput?> BuildAsync()
        {
            return Task.FromResult(default(TOutput));
        }
    }

    public class ServiceBaseAsync<TInput, TOutput> : IServiceBaseAsync<TInput, TOutput>
    {
        readonly string ResourceName = string.Empty;
        protected List<string> UserMessages { get; set; } = new List<string>();
        protected readonly ILogger _logger;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceName"></param>
        /// <param name="logger"></param>
        public ServiceBaseAsync(string resourceName, ILogger logger)
        {
            this.ResourceName = resourceName;
            this._logger = logger;
        }
        /// <summary>
        /// Consumer would override this
        /// </summary>
        /// <param name="input"><see cref="TInput"/> type</param>
        /// <returns>Task of <see cref="TOutput"> type</see>/></returns>
        protected virtual Task<TOutput?> BuildAsync(TInput input)
        {
            return Task.FromResult(default(TOutput));
        }

        public async Task<Response<TOutput>> ExecuteAsync(TInput input)
        {
            var response = new Response<TOutput>();
            try
            {
                _logger?.LogInformation($"{ResourceName} request processed started.");
                response.Data = await BuildAsync(input);
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
    }
}
