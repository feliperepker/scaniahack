using ExternaAGVAPI.Data;
using ExternaAGVAPI.Models;
using FindMyPart.Models;
using Microsoft.AspNetCore.Mvc;

namespace FindMyPart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SupController : Controller
    {
        private readonly FindMyPartsContext _context;

        public SupController(FindMyPartsContext context)
        {
            this._context = context;
        }
        [HttpGet("{id}")]
        public ActionResult getSupplierDetails(string id) 
        {
            Users user = _context.tb_users.FirstOrDefault(user => user.Username == id);
            List<Supplier> info = _context.tb_suppliers.Where(a => a.Fornecedor == user.Nome).ToList();
            return Ok(info);
        }

        [HttpPut("{id}")]
        public ActionResult changeDetails(string id, [FromBody] List<Supplier> listaDeTrocas)
        {
            Users user = _context.tb_users.FirstOrDefault(user => user.Username == id);
            listaDeTrocas.ForEach(item =>
            { 
                Supplier suplierItem = _context.tb_suppliers.First(sup => sup.Fornecedor == user.Nome && sup.PartNumber == item.PartNumber);

                suplierItem.id = suplierItem.id;
                suplierItem.PartNumber = suplierItem.PartNumber;
                suplierItem.Fornecedor = suplierItem.Fornecedor;
                suplierItem.Quantidade = item.Quantidade;
                _context.SaveChanges();
            }
            );
            return Ok();
        }
        [HttpPost("{id}")]
        public IActionResult AddItems(string id, [FromBody] Supplier supplier)
        {
            Users user = _context.tb_users.FirstOrDefault(user => user.Username == id);
            supplier.Fornecedor = user.Nome;
            _context.tb_suppliers.Add(supplier);
            _context.SaveChanges(); 
            return Ok();
        }
    }
}

