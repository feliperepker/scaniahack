using ExternaAGVAPI.Data;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonaBrasilController : Controller
    {
        private readonly FindMyPartsContext _context;

        public MonaBrasilController(FindMyPartsContext context)
        {
            this._context = context;
        }

        [HttpGet("{id}")]
        public ActionResult getFromMonaBrasil(int id)
        {
            Console.WriteLine(id);
            Console.WriteLine("sdaaaaaaaaaaaaaaaa");
            PartBrasil part = _context.tb_monabrazil.FirstOrDefault(part => part.PartNumber  == id.ToString());
            return Ok(part);
        }
    }
}
