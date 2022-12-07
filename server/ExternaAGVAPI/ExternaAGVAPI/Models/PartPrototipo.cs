using System.ComponentModel.DataAnnotations;

namespace FindMyPart.Models
{
    public class PartPrototipo
    {
        [Key]
        [Required]
        public string PartNumber { get; set; }
        [Required]
        public int Quantidade{ get; set; }

    }
}
