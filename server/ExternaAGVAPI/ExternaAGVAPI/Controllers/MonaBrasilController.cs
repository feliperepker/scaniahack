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
            int x = 0;
            List<PartBrasil> part = _context.tb_brazil.Where(part => part.Peca  == id.ToString()).ToList();
            if(part.Count > 0)
            {
                part.ForEach(item =>
                {
                    x += item.Total_Balance;
                });
                PartBrasil final = _context.tb_brazil.FirstOrDefault(part => part.Peca == id.ToString());
                final.Total_Balance = x;
                return Ok(final);
            }
            return Ok();
            
        }
    }
}
