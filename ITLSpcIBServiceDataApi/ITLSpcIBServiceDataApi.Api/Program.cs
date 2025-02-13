
using ITLSpcIBServiceDataApi.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Serilog.Events;

namespace ITLSpcIBServiceDataApi.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Log.Logger= new LoggerConfiguration()
            //    .MinimumLevel.Override("Microsoft", Serilog.Events.LogEventLevel.Information)
            //    .Enrich.FromLogContext()
            //    .WriteTo.Console()
                .
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<IBServiceDataContext>(options =>
            {
                var connection = builder.Configuration.GetConnectionString("DatabaseConnection");
                options.UseSqlServer(connection);
            });

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("ITLPolicy",
                    policy => policy
                    .WithOrigins("https://", "")
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .AllowAnyHeader()
                    );
            });
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen(swagger =>
            swagger.CustomSchemaIds(type => type.ToString()) );

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
