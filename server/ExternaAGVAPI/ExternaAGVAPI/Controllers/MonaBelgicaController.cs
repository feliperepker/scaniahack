using ExternaAGVAPI.Data;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonaBelgicaController : Controller
    {
        private readonly FindMyPartsContext _context;

        public MonaBelgicaController(FindMyPartsContext context)
        {
            this._context = context;
        }
        
        [HttpGet("{id}")]
        public ActionResult getFromMonaBelgica(int id)
        {
            int x = 0;
           List<PartBelgica> part = _context.tb_belgica.Where(part => part.Peca == id.ToString()).ToList();

            if (part.Count > 0)
            {
              part.ForEach(item =>
            {
                x += item.Total_Balance;
            });
            PartBelgica final = _context.tb_belgica.FirstOrDefault(part => part.Peca == id.ToString());

            final.Total_Balance = x;
            return Ok(final);     
            }return Ok();
          
        }
     
    }
}
