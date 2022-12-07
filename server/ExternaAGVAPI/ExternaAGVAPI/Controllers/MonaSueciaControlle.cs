using ExternaAGVAPI.Data;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonaSueciaController : Controller
    {
        private readonly FindMyPartsContext _context;

        public MonaSueciaController(FindMyPartsContext context)
        {
            this._context = context;
        }
        [HttpGet("{id}")]
        public ActionResult getFromMonaSuecia(int id) 
        {
            PartSuecia part = _context.tb_monasuecia.FirstOrDefault(part => part.PartNumber == id.ToString());
            return Ok(part);
        }
    }
}
