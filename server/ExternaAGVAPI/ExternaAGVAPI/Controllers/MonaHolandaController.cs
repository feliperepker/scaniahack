using ExternaAGVAPI.Data;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonaHolandaController : Controller
    {
        private readonly FindMyPartsContext _context;

        public MonaHolandaController(FindMyPartsContext context)
        {
            this._context = context;
        }
        
        [HttpGet("{id}")]
        public ActionResult getFromMonaHolanda(int id)
        {
            PartHolanda part = _context.tb_monaholanda.FirstOrDefault(part => part.PartNumber == id.ToString());
            return Ok(part);
        }
     
    }
}
