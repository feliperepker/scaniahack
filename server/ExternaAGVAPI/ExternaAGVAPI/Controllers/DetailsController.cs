using ExternaAGVAPI.Data;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DetailsController : Controller
    {
        private readonly FindMyPartsContext _context;

        public DetailsController(FindMyPartsContext context)
        {
            this._context = context;
        }
        [HttpGet("{id}")]
        public ActionResult getDetails(string id) 
        {
            string[] _id = id.Split('+');

            if (_id[0] == "BR")
            {
                List<PartBrasil> final = _context.tb_brazil.Where(item => item.Peca == _id[1]).ToList();
                return Ok(final);
            }
            if (_id[0] == "SW")
            {
                List<PartSuecia> final = _context.tb_suecia.Where(item => item.Peca == _id[1]).ToList();
                return Ok(final);
            }
            if (_id[0] == "BE")
            {
                List<PartBelgica> final = _context.tb_belgica.Where(item => item.Peca == _id[1]).ToList();
                return Ok(final);
            }
            return NotFound();
            
        }
    }
}
