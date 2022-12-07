using System.ComponentModel.DataAnnotations;

namespace FindMyPart.Models
{
    public class Supplier
    {
        [Key]
        [Required]
        public int id { get; set; }
        [Required]
        public string PartNumber { get; set; }
        [Required]
        public int Quantidade { get; set; }
        [Required]
        public string Fornecedor { get; set; }
    }
}
