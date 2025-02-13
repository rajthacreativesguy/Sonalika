namespace Sonalika.NetCore.ServiceBase
{
    public class Response<TOutput>
    {
        public TOutput Data { get; set; }
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }
        public string ErrorMessage { get; set; }
    }
}