using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITLSpcIBServiceData.ServiceBase.Interfaces
{
        #region Service base without input 
        public interface IServiceBaseAsync<TOutput>
        {
            /// <summary>
            /// Execute Method
            /// </summary>
            /// <description>
            /// Execute generic method for all the servies  and wrapped with excpetion handling
            /// </description>
            /// <returns>Response of <see cref="TOutput"/> type</returns>
            Task<Response<TOutput>> ExecuteAsync();
        }
        #endregion

        #region Service base with input and output
        public interface IServiceBaseAsync<TInput, TOutput>
        {
            /// <summary>
            /// Execute Method
            /// </summary>
            /// <description>
            /// Execute generic method for all the servies  and wrapped with excpetion handling
            /// </description>
            ///<param name="input">Generic param of <see cref="TInput"> type</see>/></param>
            /// <returns>Response of <see cref="TOutput"/> type</returns>
            Task<Response<TOutput>> ExecuteAsync(TInput input);

        }
        #endregion
}
