using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ITLSpcIBServiceData.ServiceBase.Interfaces
{
    #region Service base without input
    public interface IServiceBase<TOutput>
    {
        /// <summary>
        /// Execute Method
        /// </summary>
        /// <description>
        /// Execute generic method for all the servies  and wrapped with excpetion handling
        /// </description>
        /// <returns>Response of <see cref="TOutput"/> type</returns>
        Response<TOutput> Execute();
    }
    #endregion

    #region Service base with input and output
    public interface IServiceBase<TInput, TOutput>
    {
        /// <summary>
        /// Execute Method
        /// </summary>
        /// <description>
        /// Execute generic method for all the servies  and wrapped with excpetion handling
        /// </description>
        ///<param name="input">Generic param of <see cref="TInput"> type</see>/></param>
        /// <returns>Response of <see cref="TOutput"/> type</returns>
        Response<TOutput> Execute(TInput input);

    }
    #endregion
}
