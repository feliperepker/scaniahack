using ExternaAGVAPI.Data;
using ExternaAGVAPI.Models;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataSupController : Controller
    {
        private readonly FindMyPartsContext _context;

        public DataSupController(FindMyPartsContext context)
        {
            this._context = context;
        }

        [HttpGet("{id}")]
        public ActionResult dataInfo(int id)
        {
            List<Supplier> part = _context.tb_suppliers.Where(item => item.PartNumber == id.ToString()).ToList();
            return Ok(part);
        }

     
    }
}

