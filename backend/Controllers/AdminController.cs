using backend.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AdminController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("addUpdateMedicine")]
        public Response addUpdateMedicine(Medicines medicines)
        {
            DAL dal = new DAL(); // Assuming DAL is a class in your backend.model namespace
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("Medicine")))
            {
                connection.Open();
                Response response = dal.addUpdateMedicine(medicines, connection);
                connection.Close();
                return response;
            }
        }

        [HttpGet]
        [Route("userList")]
        public Response userList()
        {
            DAL dal = new DAL(); // Assuming DAL is a class in your backend.model namespace
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("Medicine")))
            {
                connection.Open();
                Response response = dal.userList(connection);
                connection.Close();
                return response;
            }
        }
    }
}
