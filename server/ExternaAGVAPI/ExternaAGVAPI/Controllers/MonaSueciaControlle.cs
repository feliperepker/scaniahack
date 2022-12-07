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
            int x = 0;
            List<PartSuecia> part = _context.tb_suecia.Where(part => part.Peca == id.ToString()).ToList();
           if (part.Count > 0)
            {
                part.ForEach(item =>
                {
                    x += item.Total_Balance;
                });
                PartSuecia final = _context.tb_suecia.FirstOrDefault(part => part.Peca == id.ToString());
                final.Total_Balance = x;
                return Ok(final);
            }return Ok();

        }
    }
}
