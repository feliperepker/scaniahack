using ExternaAGVAPI.Data;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonaPrototipoController : Controller
    {
        private readonly FindMyPartsContext _context;

        public MonaPrototipoController(FindMyPartsContext context)
        {
            this._context = context;
        }

        [HttpGet("{id}")]
        public ActionResult getFromMonaPrototipo(int id)
        {
            PartPrototipo part = _context.tb_monaprototipo.FirstOrDefault(part => part.PartNumber == id.ToString());
            return Ok(part);
        }
    }
}
